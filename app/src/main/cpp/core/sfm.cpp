// MosaicEarth Capture & Parallax: incremental Structure-from-Motion + MVS + Mesh + GeoTIFF + 3DGS driver.
//
// Incremental SfM design (Snavely et al. 2006; Schoenberger & Frahm, CVPR 2016):
//   RootSIFT -> mutual ratio-test matching -> five-point RANSAC verification -> feature tracks
//   -> initial pair -> AP3P-RANSAC + LM PnP registration -> DLT triangulation -> Schur BA
//   -> EXIF GPS Umeyama ENU / Rig / Marker / Gravity alignment
//   -> Rectified SGM Dense Multi-View Stereo -> Textured 3D Mesh (.glb) -> GeoTIFF (.tif) -> COLMAP / 3DGS.
// SPDX-License-Identifier: GPL-3.0-or-later
#include <opencv2/calib3d.hpp>
#include <opencv2/core/utility.hpp>
#include <opencv2/imgcodecs.hpp>

#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <filesystem>
#include <numeric>
#include <set>
#include <sstream>
#include <unordered_map>

#include "internal.hpp"

namespace parallax {
namespace {

struct Cancelled {};

class Pipeline {
public:
    Pipeline(State& s, const ProgressFn& progress) : s_(s), progress_(progress) {}

    void report(const std::string& stage, float f) {
        if (progress_ && !progress_(stage, f)) throw Cancelled{};
    }

    bool extract() {
        const int n = int(s_.images.size());
        std::vector<char> ok(n, 0);
        const int chunk = std::max(1, cv::getNumThreads());
        for (int start = 0; start < n; start += chunk) {
            const int end = std::min(n, start + chunk);
            cv::parallel_for_(cv::Range(start, end), [&](const cv::Range& r) {
                for (int i = r.start; i < r.end; ++i) ok[i] = extractFeatures(s_, i) ? 1 : 0;
            });
            report("Detectant punts clau (RootSIFT)", 0.16f * end / n);
        }
        int readable = 0;
        for (int i = 0; i < n; ++i) {
            if (!ok[i]) {
                log_ += "cannot read " + s_.images[i].input.path + "\n";
            } else {
                ++readable;
                Image& im = s_.images[i];
                const CameraModel cm = s_.cameras[im.camera];
                if (im.actualWidth > 0 && im.actualHeight > 0 &&
                    (cm.width != im.actualWidth || cm.height != im.actualHeight)) {
                    // Self-heal EXIF Orientation (90/270 deg portrait swap) or scaled dimensions
                    const bool transposed = (cm.width == im.actualHeight && cm.height == im.actualWidth);
                    const double nfx = transposed ? cm.fy : cm.fx * (double(im.actualWidth) / std::max(1, cm.width));
                    const double nfy = transposed ? cm.fx : cm.fy * (double(im.actualHeight) / std::max(1, cm.height));
                    int matchedCam = -1;
                    for (size_t c = 0; c < s_.cameras.size(); ++c) {
                        if (s_.cameras[c].width == im.actualWidth &&
                            s_.cameras[c].height == im.actualHeight &&
                            std::abs(s_.cameras[c].fx - nfx) < 25.0) {
                            matchedCam = int(c);
                            break;
                        }
                    }
                    if (matchedCam < 0) {
                        CameraModel fixed = cm;
                        fixed.id = int(s_.cameras.size());
                        fixed.width = im.actualWidth;
                        fixed.height = im.actualHeight;
                        fixed.fx = nfx;
                        fixed.fy = nfy;
                        fixed.cx = 0.5 * double(im.actualWidth);
                        fixed.cy = 0.5 * double(im.actualHeight);
                        if (transposed) std::swap(fixed.p1, fixed.p2);
                        matchedCam = int(s_.cameras.size());
                        s_.cameras.push_back(fixed);
                        s_.priors.push_back(fixed);
                    }
                    im.camera = matchedCam;
                }
            }
        }
        cv::parallel_for_(cv::Range(0, n), [&](const cv::Range& rg) {
            for (int i = rg.start; i < rg.end; ++i) {
                if (ok[i]) {
                    undistortKeypoints(s_.cameras[s_.images[i].camera], s_.images[i].pixels, s_.images[i].normalized);
                }
            }
        });
        return readable >= 3;
    }

    std::vector<std::pair<int, int>> candidatePairs() const {
        const int n = int(s_.images.size());
        const int w = std::max(4, s_.opt.matchWindow);
        std::set<std::pair<int, int>> pairs;
        if (n <= 24) {
            // Exhaustive matching for small sets / drone strips up to 24 images
            for (int i = 0; i < n; ++i)
                for (int j = i + 1; j < n; ++j)
                    pairs.insert({i, j});
            return {pairs.begin(), pairs.end()};
        }
        for (int i = 0; i < n; ++i)
            for (int k = 1; k <= w; ++k) {
                if (n > 2 * w + 1) pairs.insert(std::minmax(i, (i + k) % n));
                else if (i + k < n) pairs.insert({i, i + k});
            }
        // Spatial GPS proximity pairs (critical for lawnmower drone flight strips!)
        for (int i = 0; i < n; ++i) {
            if (!s_.images[i].input.hasGps) continue;
            std::vector<std::pair<double, int>> dists;
            for (int j = 0; j < n; ++j) {
                if (i == j || !s_.images[j].input.hasGps) continue;
                const double dlat = (s_.images[i].input.lat - s_.images[j].input.lat) * 111132.0;
                const double dlon = (s_.images[i].input.lon - s_.images[j].input.lon) *
                                    (111412.0 * std::cos(s_.images[i].input.lat * kPi / 180.0));
                dists.push_back({dlat * dlat + dlon * dlon, j});
            }
            std::sort(dists.begin(), dists.end());
            for (size_t k = 0; k < std::min<size_t>(8, dists.size()); ++k) {
                pairs.insert(std::minmax(i, dists[k].second));
            }
        }
        // Sparse long-range pairs catch loop closures
        for (int i = 0; i < n; i += 4)
            for (int j = i + 4; j < n; j += 4) pairs.insert({i, j});
        // Simultaneous captures of camera rig
        for (int i = 0; i < n; ++i)
            for (int j = i + 1; j < n; ++j)
                if (s_.images[i].input.rigGroup >= 0 && s_.images[i].input.rigGroup == s_.images[j].input.rigGroup)
                    pairs.insert({i, j});
        return {pairs.begin(), pairs.end()};
    }

    void matchAll() {
        const auto cand = candidatePairs();
        std::vector<PairGeometry> geo(cand.size());
        std::vector<char> ok(cand.size(), 0);
        const int chunk = std::max(4, 2 * cv::getNumThreads());
        for (int start = 0; start < int(cand.size()); start += chunk) {
            const int end = std::min(int(cand.size()), start + chunk);
            cv::parallel_for_(cv::Range(start, end), [&](const cv::Range& r) {
                for (int k = r.start; k < r.end; ++k) {
                    const int a = cand[k].first, b = cand[k].second;
                    if (s_.images[a].descriptors.empty() || s_.images[b].descriptors.empty()) continue;
                    const auto m = matchDescriptors(s_.images[a], s_.images[b], s_.opt.ratioTest);
                    ok[k] = verifyPair(s_, a, b, m, geo[k]) ? 1 : 0;
                }
            });
            report("Emparellant imatges (RANSAC)", 0.16f + 0.19f * end / std::max<size_t>(1, cand.size()));
        }
        for (size_t k = 0; k < cand.size(); ++k)
            if (ok[k]) s_.pairs.push_back(std::move(geo[k]));
        std::ostringstream ss;
        ss << "verified pairs: " << s_.pairs.size() << " of " << cand.size() << "\n";
        log_ += ss.str();
    }

    void buildTracks() {
        std::vector<int> offset(s_.images.size() + 1, 0);
        for (size_t i = 0; i < s_.images.size(); ++i) offset[i + 1] = offset[i] + int(s_.images[i].pixels.size());
        if (offset.back() == 0) return;
        std::vector<int> parent(offset.back());
        std::iota(parent.begin(), parent.end(), 0);
        auto find = [&](int x) {
            while (parent[x] != x) x = parent[x] = parent[parent[x]];
            return x;
        };
        for (const auto& p : s_.pairs)
            for (const auto& m : p.inliers) {
                const int x = find(offset[p.a] + m.first), y = find(offset[p.b] + m.second);
                if (x != y) parent[std::max(x, y)] = std::min(x, y);
            }
        std::unordered_map<int, int> rootToTrack;
        for (size_t i = 0; i < s_.images.size(); ++i)
            for (int k = 0; k < int(s_.images[i].pixels.size()); ++k) {
                const int node = offset[i] + k;
                const int root = find(node);
                auto it = rootToTrack.find(root);
                int id;
                if (it == rootToTrack.end()) {
                    id = int(s_.tracks.size());
                    rootToTrack[root] = id;
                    s_.tracks.emplace_back();
                } else {
                    id = it->second;
                }
                s_.tracks[id].elements.push_back({int(i), k});
            }
        for (size_t id = 0; id < s_.tracks.size(); ++id) {
            auto& el = s_.tracks[id].elements;
            std::map<int, int> perImage;
            for (const auto& e : el) perImage[e.image]++;
            std::vector<Observation> kept;
            for (const auto& e : el)
                if (perImage[e.image] == 1) kept.push_back(e);
            el.swap(kept);
            if (el.size() < 2) { el.clear(); continue; }
            for (const auto& e : el) s_.images[e.image].track[e.keypoint] = int(id);
        }
    }

    bool reconstruct() {
        auto init = rankInitialPairs();
        bool started = false;
        for (size_t c = 0; c < init.size() && c < 10 && !started; ++c) started = tryInitialise(s_.pairs[init[c]]);
        if (!started) {
            log_ += "no initial pair with enough parallax\n";
            return false;
        }
        const int n = int(s_.images.size());
        std::vector<int> failures(n, 0);
        int lastGlobal = registered();
        for (int round = 0; round < 3; ++round) {
            const int before = registered();
            std::fill(failures.begin(), failures.end(), 0);
            while (true) {
                const int next = nextBestImage(failures);
                if (next < 0) break;
                if (!registerImage(next)) {
                    failures[next]++;
                    continue;
                }
                order_.push_back(next);
                for (int k : s_.images[next].track) if (k >= 0) triangulateTrack(s_, k);
                BAOptions local;
                for (int i = std::max(0, int(order_.size()) - 10); i < int(order_.size()); ++i)
                    local.variableImages.push_back(order_[i]);
                local.fixedGaugeImage = order_[0];
                local.maxIterations = 8;
                bundleAdjust(s_, local);
                filterPoints(false);
                const int reg = registered();
                if (reg >= lastGlobal * 1.25 + 2) {
                    globalBA(reg >= 6, 10);
                    lastGlobal = reg;
                }
                report("Registrant càmeres (SfM)", 0.35f + 0.18f * reg / n);
            }
            for (size_t k = 0; k < s_.tracks.size(); ++k) triangulateTrack(s_, int(k));
            globalBA(registered() >= 6, 10);
            if (registered() == before || registered() == n) break;
        }
        for (size_t k = 0; k < s_.tracks.size(); ++k) triangulateTrack(s_, int(k));
        globalBA(false, 10);
        estimateMotion();
        rms_ = globalBA(true, 20);
        filterPoints(true);
        estimateMotion();
        rms_ = globalBA(true, 10);
        filterPoints(true);
        return registered() >= 2;
    }

    void estimateMotion() {
        if (!s_.opt.rollingShutter) return;
        std::vector<int> idx;
        for (size_t i = 0; i < s_.images.size(); ++i) {
            const Image& im = s_.images[i];
            if (im.registered && im.input.rollingShutterSkew > 0 && im.input.time > 0) idx.push_back(int(i));
        }
        std::sort(idx.begin(), idx.end(), [&](int a, int b) { return s_.images[a].input.time < s_.images[b].input.time; });
        int modelled = 0;
        for (int i : idx) {
            Image& im = s_.images[i];
            int prev = -1, next = -1;
            for (int j : idx) {
                const Image& o = s_.images[j];
                if (o.camera != im.camera || j == i) continue;
                const double dt = o.input.time - im.input.time;
                if (dt < -1e-3 && dt > -4.0 && (prev < 0 || o.input.time > s_.images[prev].input.time)) prev = j;
                if (dt > 1e-3 && dt < 4.0 && (next < 0 || o.input.time < s_.images[next].input.time)) next = j;
            }
            const int a = prev >= 0 ? prev : i, b = next >= 0 ? next : i;
            if (a == b) { im.rs = false; continue; }
            const Image& A = s_.images[a];
            const Image& B = s_.images[b];
            const double span = B.input.time - A.input.time;
            im.velocity = (B.centre() - A.centre()) * (1.0 / span);
            if (im.input.hasGyro) {
                im.omega = {im.input.gyroX, im.input.gyroY, im.input.gyroZ};
            } else {
                cv::Vec3d rv;
                cv::Rodrigues(cv::Mat(B.R * A.R.t()), rv);
                im.omega = -rv * (1.0 / span);
            }
            im.rs = true;
            ++modelled;
        }
        if (modelled) {
            std::ostringstream ss;
            ss << "rolling shutter modelled for " << modelled << " images\n";
            if (log_.find("rolling shutter") == std::string::npos) log_ += ss.str();
        }
    }

    int registered() const {
        int c = 0;
        for (const auto& im : s_.images) c += im.registered;
        return c;
    }

    double rms() const { return rms_; }
    const std::string& log() const { return log_; }

private:
    std::vector<int> rankInitialPairs() {
        std::vector<int> idx(s_.pairs.size());
        std::iota(idx.begin(), idx.end(), 0);
        std::sort(idx.begin(), idx.end(), [&](int x, int y) { return s_.pairs[x].inliers.size() > s_.pairs[y].inliers.size(); });
        if (idx.size() > 80) idx.resize(80);
        std::vector<std::pair<double, int>> scored;
        for (int k : idx) {
            const PairGeometry& p = s_.pairs[k];
            const double hRatio = double(p.homographyInliers) / std::max<size_t>(1, p.inliers.size());
            const double angle = medianAngle(p);
            double score = double(p.inliers.size()) * std::min(angle, 8.0) / 8.0;
            // Note: nadir drone imagery over flat terrain naturally has higher homography ratio (~0.92),
            // so penalize gently above 0.94 rather than rejecting flat terrain scenes outright.
            if (angle < 1.3 || hRatio > 0.95) score *= 0.12;
            scored.emplace_back(score, k);
        }
        std::sort(scored.rbegin(), scored.rend());
        std::vector<int> out;
        for (const auto& sc : scored) out.push_back(sc.second);
        return out;
    }

    double medianAngle(const PairGeometry& p) const {
        std::vector<double> ang;
        for (const auto& m : p.inliers) {
            const cv::Point2d& x1 = s_.images[p.a].normalized[m.first];
            const cv::Point2d& x2 = s_.images[p.b].normalized[m.second];
            const cv::Vec3d r1(x1.x, x1.y, 1.0), r2 = p.R.t() * cv::Vec3d(x2.x, x2.y, 1.0);
            const double c = r1.dot(r2) / (cv::norm(r1) * cv::norm(r2));
            ang.push_back(std::acos(std::max(-1.0, std::min(1.0, c))) * 180.0 / kPi);
        }
        if (ang.empty()) return 0;
        std::nth_element(ang.begin(), ang.begin() + ang.size() / 2, ang.end());
        return ang[ang.size() / 2];
    }

    bool tryInitialise(const PairGeometry& p) {
        for (auto& im : s_.images) { im.registered = false; }
        for (auto& tr : s_.tracks) tr.point = -1;
        s_.points.clear();
        order_.clear();
        Image& A = s_.images[p.a];
        Image& B = s_.images[p.b];
        A.R = cv::Matx33d::eye();
        A.t = {0, 0, 0};
        B.R = p.R;
        B.t = p.t * (1.0 / std::max(1e-12, cv::norm(p.t)));
        A.registered = B.registered = true;
        for (const auto& m : p.inliers) {
            const int k = A.track[m.first];
            if (k >= 0 && B.track[m.second] == k) triangulateTrack(s_, k);
        }
        BAOptions o;
        o.variableImages = {p.a, p.b};
        o.fixedGaugeImage = p.a;
        o.maxIterations = 20;
        bundleAdjust(s_, o);
        filterPoints(false);
        int valid = 0;
        for (const auto& pt : s_.points) valid += pt.valid;
        std::ostringstream ss;
        ss << "initial pair " << p.a << "-" << p.b << ": " << valid << " points\n";
        log_ += ss.str();
        if (valid < 25) {
            A.registered = B.registered = false;
            return false;
        }
        order_ = {p.a, p.b};
        return true;
    }

    int nextBestImage(const std::vector<int>& failures) const {
        int best = -1, bestCount = 0;
        for (size_t i = 0; i < s_.images.size(); ++i) {
            const Image& im = s_.images[i];
            if (im.registered || failures[i] >= 2) continue;
            int count = 0;
            for (int k : im.track)
                if (k >= 0 && s_.tracks[k].point >= 0 && s_.points[s_.tracks[k].point].valid) ++count;
            if (count > bestCount) { bestCount = count; best = int(i); }
        }
        return bestCount >= 12 ? best : -1;
    }

    bool registerImage(int i) {
        Image& im = s_.images[i];
        std::vector<cv::Point3d> obj;
        std::vector<cv::Point2d> img;
        std::vector<int> kp;
        for (int k = 0; k < int(im.track.size()); ++k) {
            const int t = im.track[k];
            if (t < 0 || s_.tracks[t].point < 0) continue;
            const Point3D& p = s_.points[s_.tracks[t].point];
            if (!p.valid) continue;
            obj.emplace_back(p.X[0], p.X[1], p.X[2]);
            img.push_back(im.normalized[k]);
            kp.push_back(k);
        }
        if (obj.size() < 12) return false;
        const double f = std::max(100.0, s_.cameras[im.camera].fx);
        cv::Mat rvec, tvec, inl;
        if (!cv::solvePnPRansac(obj, img, cv::Mat::eye(3, 3, CV_64F), cv::noArray(), rvec, tvec, false, 2000,
                                3.5 / f, 0.9999, inl, cv::SOLVEPNP_AP3P))
            return false;
        if (inl.rows < 12 || inl.rows < 0.18 * double(obj.size())) return false;
        std::vector<cv::Point3d> o2;
        std::vector<cv::Point2d> i2;
        for (int r = 0; r < inl.rows; ++r) {
            o2.push_back(obj[inl.at<int>(r)]);
            i2.push_back(img[inl.at<int>(r)]);
        }
        cv::solvePnPRefineLM(o2, i2, cv::Mat::eye(3, 3, CV_64F), cv::noArray(), rvec, tvec);
        cv::Matx33d R;
        cv::Rodrigues(rvec, R);
        im.R = R;
        im.t = cv::Vec3d(tvec);
        std::vector<int> good;
        for (size_t q = 0; q < kp.size(); ++q)
            if (reprojectionError(s_, s_.points[s_.tracks[im.track[kp[q]]].point], {i, kp[q]}) < s_.opt.maxReprojError)
                good.push_back(kp[q]);
        if (good.size() < 12) return false;
        for (int k : good) s_.points[s_.tracks[im.track[k]].point].obs.push_back({i, k});
        im.registered = true;
        return true;
    }

    void completeTracks() {
        for (auto& p : s_.points) {
            if (!p.valid || p.track < 0) continue;
            std::set<int> have;
            for (const auto& o : p.obs) have.insert(o.image);
            for (const auto& e : s_.tracks[p.track].elements)
                if (s_.images[e.image].registered && !have.count(e.image) && reprojectionError(s_, p, e) < s_.opt.maxReprojError) {
                    p.obs.push_back(e);
                    have.insert(e.image);
                }
        }
    }

    double globalBA(bool intrinsics, int iterations) {
        completeTracks();
        BAOptions o;
        for (size_t i = 0; i < s_.images.size(); ++i)
            if (s_.images[i].registered) o.variableImages.push_back(int(i));
        o.fixedGaugeImage = order_.empty() ? -1 : order_[0];
        if (order_.size() > 1 && s_.images[order_[1]].registered) {
            const cv::Vec3d& t = s_.images[order_[1]].t;
            int axis = 0;
            for (int k = 1; k < 3; ++k) if (std::abs(t[k]) > std::abs(t[axis])) axis = k;
            o.scaleGaugeImage = order_[1];
            o.scaleGaugeAxis = axis;
        }
        o.refineIntrinsics = intrinsics;
        o.maxIterations = iterations;
        const double r = bundleAdjust(s_, o);
        if (intrinsics) {
            cv::parallel_for_(cv::Range(0, int(s_.images.size())), [&](const cv::Range& rg) {
                for (int i = rg.start; i < rg.end; ++i)
                    undistortKeypoints(s_.cameras[s_.images[i].camera], s_.images[i].pixels, s_.images[i].normalized);
            });
        }
        filterPoints(false);
        return r;
    }

    void filterPoints(bool checkAngle) {
        for (auto& p : s_.points) {
            if (!p.valid) continue;
            std::vector<Observation> kept;
            for (const auto& ob : p.obs)
                if (s_.images[ob.image].registered && reprojectionError(s_, p, ob) < s_.opt.maxReprojError)
                    kept.push_back(ob);
            p.obs.swap(kept);
            bool ok = p.obs.size() >= 2;
            if (ok && checkAngle) {
                double maxAngle = 0;
                for (size_t a = 0; a < p.obs.size() && maxAngle < s_.opt.minTriAngleDeg; ++a)
                    for (size_t b = a + 1; b < p.obs.size(); ++b)
                        maxAngle = std::max(maxAngle, triangulationAngleDeg(p.X, s_.images[p.obs[a].image].centre(),
                                                                            s_.images[p.obs[b].image].centre()));
                ok = maxAngle >= s_.opt.minTriAngleDeg;
            }
            if (!ok) {
                p.valid = false;
                if (p.track >= 0) s_.tracks[p.track].point = -1;
            }
        }
    }

    State& s_;
    const ProgressFn& progress_;
    std::vector<int> order_;
    std::string log_;
    double rms_ = 0;
};

double estimateMetricScale(const State& s, std::string& log) {
    std::unordered_map<int, std::vector<int>> groups;
    for (size_t i = 0; i < s.images.size(); ++i)
        if (s.images[i].registered && s.images[i].input.rigGroup >= 0) groups[s.images[i].input.rigGroup].push_back(int(i));
    std::map<std::pair<int, int>, std::vector<cv::Vec3d>> perPair;
    for (const auto& g : groups) {
        const auto& v = g.second;
        for (size_t a = 0; a < v.size(); ++a)
            for (size_t b = 0; b < v.size(); ++b) {
                const Image& A = s.images[v[a]];
                const Image& B = s.images[v[b]];
                if (A.camera >= B.camera) continue;
                perPair[{A.camera, B.camera}].push_back(A.R * (B.centre() - A.centre()));
            }
    }
    double best = 0;
    size_t bestCount = 0;
    for (auto& kv : perPair) {
        const CameraModel& ca = s.cameras[kv.first.first];
        const CameraModel& cb = s.cameras[kv.first.second];
        if (!ca.hasLensPosition || !cb.hasLensPosition || kv.second.size() < 3 || kv.second.size() <= bestCount) continue;
        const double known = cv::norm(cv::Vec3d(ca.lensX - cb.lensX, ca.lensY - cb.lensY, ca.lensZ - cb.lensZ));
        if (known < 0.003) continue;
        cv::Vec3d m;
        for (int c = 0; c < 3; ++c) {
            std::vector<double> comp;
            for (const auto& b : kv.second) comp.push_back(b[c]);
            std::nth_element(comp.begin(), comp.begin() + comp.size() / 2, comp.end());
            m[c] = comp[comp.size() / 2];
        }
        if (cv::norm(m) < 1e-12) continue;
        best = known / cv::norm(m);
        bestCount = kv.second.size();
    }
    if (bestCount > 0) {
        std::ostringstream ss;
        ss << "rig captures used for scale: " << bestCount << "\n";
        log += ss.str();
    }
    return best;
}

void transformModel(State& s, const cv::Matx33d& G, const cv::Vec3d& c, double scale) {
    for (auto& p : s.points) p.X = scale * (G * (p.X - c));
    for (auto& im : s.images) {
        if (!im.registered) continue;
        const cv::Matx33d R = im.R;
        im.t = scale * (R * c + im.t);
        im.R = R * G.t();
        im.velocity = scale * (G * im.velocity);
    }
}

cv::Matx33d rotationBetween(cv::Vec3d a, cv::Vec3d b) {
    const double na = cv::norm(a), nb = cv::norm(b);
    if (na < 1e-12 || nb < 1e-12) return cv::Matx33d::eye();
    a *= 1.0 / na;
    b *= 1.0 / nb;
    cv::Vec3d axis = a.cross(b);
    const double sn = cv::norm(axis), cs = a.dot(b);
    if (sn < 1e-9) {
        if (cs > 0) return cv::Matx33d::eye();
        return {1, 0, 0, 0, -1, 0, 0, 0, -1};
    }
    axis *= std::atan2(sn, cs) / sn;
    cv::Matx33d R;
    cv::Rodrigues(axis, R);
    return R;
}

void colourSparsePoints(State& s) {
    for (auto& p : s.points) {
        if (!p.valid || p.obs.empty()) continue;
        cv::Vec3d sum(0, 0, 0);
        for (const auto& o : p.obs) {
            const cv::Vec3b& c = s.images[o.image].colors[o.keypoint];
            sum += cv::Vec3d(c[0], c[1], c[2]);
        }
        sum *= 1.0 / double(p.obs.size());
        p.color = cv::Vec3b(cv::saturate_cast<uchar>(sum[0]), cv::saturate_cast<uchar>(sum[1]), cv::saturate_cast<uchar>(sum[2]));
    }
}

double estimateMarkerScale(const State& s, std::string& log) {
    if (s.opt.markerSizeMm <= 0) return 0;
    std::map<int, std::vector<int>> seenBy;
    for (size_t i = 0; i < s.images.size(); ++i)
        if (s.images[i].registered)
            for (const auto& m : s.images[i].markers) seenBy[m.first].push_back(int(i));
    std::vector<double> edges;
    int used = 0;
    for (const auto& kv : seenBy) {
        if (kv.second.size() < 3) continue;
        std::array<cv::Vec3d, 4> X;
        bool ok = true;
        for (int c = 0; c < 4 && ok; ++c) {
            cv::Mat A(int(kv.second.size()) * 2, 4, CV_64F);
            int row = 0;
            double maxAngle = 0;
            for (int i : kv.second) {
                const Image& im = s.images[i];
                std::vector<cv::Point2d> n;
                undistortKeypoints(s.cameras[im.camera], {im.markers.at(kv.first)[c]}, n);
                for (int k = 0; k < 4; ++k) {
                    const double p0 = k < 3 ? im.R(0, k) : im.t[0], p1 = k < 3 ? im.R(1, k) : im.t[1],
                                 p2 = k < 3 ? im.R(2, k) : im.t[2];
                    A.at<double>(row, k) = n[0].x * p2 - p0;
                    A.at<double>(row + 1, k) = n[0].y * p2 - p1;
                }
                row += 2;
            }
            cv::Mat w, u, vt;
            cv::SVD::compute(A, w, u, vt, cv::SVD::MODIFY_A);
            const double h = vt.at<double>(3, 3);
            if (std::abs(h) < 1e-12) { ok = false; break; }
            X[c] = {vt.at<double>(3, 0) / h, vt.at<double>(3, 1) / h, vt.at<double>(3, 2) / h};
            for (size_t a = 0; a < kv.second.size(); ++a)
                for (size_t b = a + 1; b < kv.second.size(); ++b)
                    maxAngle = std::max(maxAngle, triangulationAngleDeg(X[c], s.images[kv.second[a]].centre(),
                                                                        s.images[kv.second[b]].centre()));
            if (maxAngle < 3.0) ok = false;
        }
        if (!ok) continue;
        for (int c = 0; c < 4; ++c) edges.push_back(cv::norm(X[c] - X[(c + 1) % 4]));
        ++used;
    }
    if (used > 0) {
        std::ostringstream ss;
        ss << "markers used for scale: " << used << "\n";
        log += ss.str();
    }
    if (edges.empty()) return 0;
    std::nth_element(edges.begin(), edges.begin() + edges.size() / 2, edges.end());
    return s.opt.markerSizeMm * 1e-3 / edges[edges.size() / 2];
}

}  // namespace

Result Reconstructor::run(const std::string& outputDir, const std::string& imageRoot, const ProgressFn& progress) {
    Result res;
    State s;
    s.opt = opt_;
    s.cameras = cameras_;
    s.priors = cameras_;
    std::filesystem::create_directories(outputDir);

    std::unordered_map<int, int> camIndex;
    for (size_t c = 0; c < s.cameras.size(); ++c) camIndex[s.cameras[c].id] = int(c);
    for (const auto& in : images_) {
        auto it = camIndex.find(in.cameraId);
        if (it == camIndex.end()) { res.message = "image refers to an unknown camera"; return res; }
        Image im;
        im.input = in;
        im.camera = it->second;
        s.images.push_back(std::move(im));
    }
    res.imagesTotal = int(s.images.size());
    if (s.images.size() < 3) { res.message = "Calen com a mínim 3 imatges per reconstruir l'escena."; return res; }

    Pipeline pipe(s, progress);
    std::string log;
    try {
        if (!pipe.extract()) { res.message = "No s'han pogut llegir suficients imatges vàlides."; return res; }
        pipe.matchAll();
        pipe.buildTracks();
        pipe.report("Registrant càmeres (SfM)", 0.35f);
        if (!pipe.reconstruct()) {
            res.message = "No s'ha trobat prou paral·laxi o solapament entre les imatges: " + pipe.log();
            return res;
        }
        log = pipe.log();

        // 1. Georeferencing & Metric Scale Alignment (EXIF GPS Umeyama ENU -> Marker -> Rig -> Gravity)
        const GeoAlignment geo = computeGpsEnuAlignment(s, log);
        if (geo.hasOrigin) {
            res.georeferenced = true;
            res.refLat = geo.refLat;
            res.refLon = geo.refLon;
            res.refAlt = geo.refAlt;
        }

        if (geo.aligned3d) {
            transformModel(s, geo.R, geo.shift, geo.scale);
            // Shift ENU Z origin from drone camera flight altitude down to median reconstructed ground surface
            // so 3D models, point clouds, and splats sit right on Z=0 on the 3D Globe while preserving true WGS84 DSM elevation!
            std::vector<double> groundZs;
            groundZs.reserve(s.points.size());
            for (const auto& p : s.points) {
                if (p.valid && std::isfinite(p.X[2])) groundZs.push_back(p.X[2]);
            }
            if (!groundZs.empty()) {
                std::nth_element(groundZs.begin(), groundZs.begin() + groundZs.size() / 2, groundZs.end());
                const double medGroundZ = groundZs[groundZs.size() / 2];
                if (std::isfinite(medGroundZ) && std::abs(medGroundZ) > 1e-4) {
                    const cv::Vec3d dz(0.0, 0.0, medGroundZ);
                    for (auto& p : s.points) p.X -= dz;
                    for (auto& im : s.images) {
                        if (im.registered) im.t += im.R * dz;
                    }
                    res.refAlt += medGroundZ;
                }
            }
            res.metresPerUnit = geo.scale;
            res.scaleSource = "gps";
            res.gravityAligned = true;
        } else {
            const double rigScale = estimateMetricScale(s, log);
            const double markerScale = estimateMarkerScale(s, log);
            double scale = markerScale > 0 ? markerScale : rigScale;
            res.scaleSource = markerScale > 0 ? "marker" : (rigScale > 0 ? "rig" : "none");
            res.metresPerUnit = scale;
            if (scale <= 0) scale = 1.0;

            cv::Vec3d up(0, 0, 0);
            int ups = 0;
            for (const auto& im : s.images) {
                const cv::Vec3d u(im.input.upX, im.input.upY, im.input.upZ);
                if (!im.registered || cv::norm(u) < 1e-6) continue;
                up += im.R.t() * cv::normalize(u);
                ++ups;
            }
            cv::Matx33d G = cv::Matx33d::eye();
            if (ups >= 3 && cv::norm(up) > 1e-6) {
                G = rotationBetween(up, {0, 0, 1});
                res.gravityAligned = true;
            } else {
                cv::Vec3d m(0, 0, 0);
                for (const auto& im : s.images) {
                    if (!im.registered) continue;
                    // For nadir aerial scenes without GPS baseline, camera viewing direction (+Z) points down (-world Z)
                    if (opt_.aerialScene) m += im.R.t() * cv::Vec3d(0, 0, -1);
                    else m += im.R.t() * cv::Vec3d(0, -1, 0);
                }
                G = rotationBetween(m, {0, 0, 1});
            }

            std::vector<double> xs, ys, zs;
            for (const auto& p : s.points)
                if (p.valid) { xs.push_back(p.X[0]); ys.push_back(p.X[1]); zs.push_back(p.X[2]); }
            auto median = [](std::vector<double>& v) {
                if (v.empty()) return 0.0;
                std::nth_element(v.begin(), v.begin() + v.size() / 2, v.end());
                return v[v.size() / 2];
            };
            const cv::Vec3d centre(median(xs), median(ys), median(zs));
            if (res.metresPerUnit <= 0) {
                std::vector<double> d;
                for (const auto& im : s.images) if (im.registered) d.push_back(cv::norm(im.centre() - centre));
                const double md = median(d);
                const double nominalRadius = opt_.aerialScene ? 25.0 : 2.0;
                if (md > 1e-12) scale = nominalRadius / md;
            }
            transformModel(s, G, centre, scale);
        }

        // 2. Colour sparse points & write raw COLMAP sparse project
        colourSparsePoints(s);
        std::vector<DensePoint> sparse;
        for (const auto& p : s.points) {
            if (!p.valid) continue;
            cv::Vec3d viewDir(0, 0, 0);
            for (const auto& ob : p.obs) {
                if (s.images[ob.image].registered) {
                    cv::Vec3d ray = s.images[ob.image].centre() - p.X;
                    const double nr = cv::norm(ray);
                    if (nr > 1e-9) viewDir += ray * (1.0 / nr);
                }
            }
            cv::Vec3f nrm(0, 0, 1);
            if (cv::norm(viewDir) > 1e-6) {
                viewDir = cv::normalize(viewDir);
                nrm = cv::Vec3f(float(viewDir[0]), float(viewDir[1]), float(viewDir[2]));
            }
            sparse.push_back({cv::Vec3f(p.X), nrm, p.color});
        }
        res.sparsePoints = int(sparse.size());
        writePly(outputDir + "/sparse.ply", sparse);
        writeColmap(s, outputDir + "/sparse/0", imageRoot);

        // 3. Undistorted PINHOLE COLMAP dataset export (for Brush Vulkan 3D Gaussian Splatting)
        if (opt_.exportUndistortedColmap) {
            pipe.report("Preparant dataset COLMAP (PINHOLE)", 0.54f);
            const std::string colmapDir = outputDir + "/colmap_undistorted";
            res.hasColmapDataset = writeUndistortedColmapDataset(
                s, colmapDir, std::max(512, opt_.featureMaxSide), progress, 0.54f, 0.64f);
        }

        // 4. Dense Multi-View Stereo (Rectified SGM) when dense outputs are requested
        const bool needDense = opt_.dense && (
            opt_.exportPointCloud || opt_.exportMesh || opt_.exportOrthophoto ||
            opt_.exportDsm || opt_.exportGaussianSplatFallback);
        std::vector<DensePoint> workingPoints;
        if (needDense) {
            pipe.report("Reconstrucció densa MVS (SGM)", 0.64f);
            workingPoints = denseReconstruct(s, progress, 0.64f, 0.80f);
        }
        if (workingPoints.size() < sparse.size()) {
            // Augment with sparse points so small or low-texture scenes still yield complete geometry
            workingPoints.insert(workingPoints.end(), sparse.begin(), sparse.end());
        }
        res.densePoints = int(workingPoints.size());

        // 5. Dense Point Cloud (.ply)
        if (opt_.exportPointCloud && !workingPoints.empty()) {
            pipe.report("Exportant núvol de punts (.ply)", 0.81f);
            res.hasPointCloud = writePly(outputDir + "/point_cloud.ply", workingPoints);
        }

        // 6. Textured 3D Mesh (.glb)
        if (opt_.exportMesh && workingPoints.size() >= 12) {
            pipe.report("Generant malla 3D texturitzada (.glb)", 0.83f);
            const int tris = buildTexturedMeshGlb(
                s, workingPoints, outputDir + "/textured_mesh.glb", progress, 0.83f, 0.91f);
            if (tris > 0) {
                res.meshTriangles = tris;
                res.hasMeshGlb = true;
            }
        }

        // 7. Georeferenced DSM & True Orthophoto GeoTIFF (.tif + .preview.png)
        if ((opt_.exportOrthophoto || opt_.exportDsm) && (workingPoints.size() + sparse.size()) >= 16) {
            pipe.report("Generant Ortofoto i MDS GeoTIFF (.tif)", 0.91f);
            std::vector<DensePoint> dsmInput = workingPoints;
            if (workingPoints.size() >= sparse.size() && !sparse.empty()) {
                dsmInput.reserve(workingPoints.size() + sparse.size());
                dsmInput.insert(dsmInput.end(), sparse.begin(), sparse.end());
            }
            const RasterResult rr = buildDsmAndOrthophoto(
                s,
                dsmInput,
                res.refLat,
                res.refLon,
                res.refAlt,
                res.georeferenced,
                outputDir,
                progress,
                0.91f,
                0.98f);
            res.hasDsm = rr.dsmWritten;
            res.hasOrthophoto = rr.orthoWritten;
            res.orthoWidth = rr.width;
            res.orthoHeight = rr.height;
            res.orthoGsdMetres = rr.gsdMetres;
        }

        // 8. Surfel 3D Gaussian Splat (.ply) fallback / direct export
        if (opt_.exportGaussianSplatFallback && !workingPoints.empty()) {
            pipe.report("Generant 3D Gaussian Splat (.ply)", 0.98f);
            res.hasGaussianSplat = writeGaussianSplatPly(outputDir + "/gaussian_splat.ply", workingPoints);
        }
    } catch (const Cancelled&) {
        res.message = "cancelled";
        return res;
    } catch (const cv::Exception& e) {
        res.message = std::string("OpenCV error: ") + e.what();
        return res;
    } catch (const std::exception& e) {
        res.message = std::string("Native error: ") + e.what();
        return res;
    }

    res.imagesRegistered = pipe.registered();
    res.meanReprojError = pipe.rms();
    for (size_t i = 0; i < s.images.size(); ++i)
        if (s.images[i].registered) {
            const cv::Vec3d c = s.images[i].centre();
            res.cameraCentres.insert(res.cameraCentres.end(), {float(c[0]), float(c[1]), float(c[2])});
            res.cameraImages.push_back(int(i));
        }
    res.ok = true;
    res.message = log;
    writeText(outputDir + "/report.json", resultToJson(res));
    if (progress) progress("Completat", 1.0f);
    return res;
}

static std::string jsonEscape(const std::string& in) {
    std::string out;
    for (char c : in) {
        if (c == '"' || c == '\\') { out += '\\'; out += c; }
        else if (c == '\n') out += "\\n";
        else if (static_cast<unsigned char>(c) < 0x20) out += ' ';
        else out += c;
    }
    return out;
}

std::string resultToJson(const Result& r) {
    std::ostringstream ss;
    ss.precision(9);
    ss << "{\"ok\":" << (r.ok ? "true" : "false")
       << ",\"message\":\"" << jsonEscape(r.message) << "\""
       << ",\"imagesTotal\":" << r.imagesTotal
       << ",\"imagesRegistered\":" << r.imagesRegistered
       << ",\"sparsePoints\":" << r.sparsePoints
       << ",\"densePoints\":" << r.densePoints
       << ",\"meshTriangles\":" << r.meshTriangles
       << ",\"orthoWidth\":" << r.orthoWidth
       << ",\"orthoHeight\":" << r.orthoHeight
       << ",\"orthoGsdMetres\":" << r.orthoGsdMetres
       << ",\"meanReprojError\":" << r.meanReprojError
       << ",\"metresPerUnit\":" << r.metresPerUnit
       << ",\"scaleSource\":\"" << r.scaleSource << "\""
       << ",\"gravityAligned\":" << (r.gravityAligned ? "true" : "false")
       << ",\"georeferenced\":" << (r.georeferenced ? "true" : "false")
       << ",\"refLat\":" << r.refLat
       << ",\"refLon\":" << r.refLon
       << ",\"refAlt\":" << r.refAlt
       << ",\"hasPointCloud\":" << (r.hasPointCloud ? "true" : "false")
       << ",\"hasMeshGlb\":" << (r.hasMeshGlb ? "true" : "false")
       << ",\"hasOrthophoto\":" << (r.hasOrthophoto ? "true" : "false")
       << ",\"hasDsm\":" << (r.hasDsm ? "true" : "false")
       << ",\"hasColmapDataset\":" << (r.hasColmapDataset ? "true" : "false")
       << ",\"hasGaussianSplat\":" << (r.hasGaussianSplat ? "true" : "false")
       << ",\"cameraCentres\":[";
    for (size_t i = 0; i < r.cameraCentres.size(); ++i) ss << (i ? "," : "") << r.cameraCentres[i];
    ss << "]}";
    return ss.str();
}

}  // namespace parallax

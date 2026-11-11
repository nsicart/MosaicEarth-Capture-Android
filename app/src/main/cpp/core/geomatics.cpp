// MosaicEarth Capture: EXIF GPS ENU alignment, OGC GeoTIFF (DSM & True Orthophoto),
// undistorted PINHOLE COLMAP export for Brush 3DGS, and Surfel Gaussian Splat PLY writer.
// SPDX-License-Identifier: GPL-3.0-or-later
#include <opencv2/calib3d.hpp>
#include <opencv2/flann.hpp>
#include <opencv2/imgcodecs.hpp>
#include <opencv2/imgproc.hpp>

#include <algorithm>
#include <cmath>
#include <cstdint>
#include <cstdio>
#include <cstring>
#include <filesystem>
#include <fstream>
#include <numeric>
#include <sstream>
#include <unordered_map>
#include <vector>

#include "internal.hpp"

namespace parallax {
namespace {

constexpr double kDegToRad = kPi / 180.0;

void metresPerDegree(double latDeg, double& mPerDegLat, double& mPerDegLon) {
    const double latRad = latDeg * kDegToRad;
    mPerDegLat = 111132.92 - 559.82 * std::cos(2.0 * latRad) + 1.175 * std::cos(4.0 * latRad);
    mPerDegLon = std::max(1.0, 111412.84 * std::cos(latRad) - 93.5 * std::cos(3.0 * latRad));
}

double medianOf(std::vector<double> v) {
    if (v.empty()) return 0.0;
    std::nth_element(v.begin(), v.begin() + v.size() / 2, v.end());
    return v[v.size() / 2];
}

cv::Matx33d vecRotation(cv::Vec3d a, cv::Vec3d b) {
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

void quatFromRot(const cv::Matx33d& R, double q[4]) {
    const double tr = R(0, 0) + R(1, 1) + R(2, 2);
    if (tr > 0) {
        const double s = std::sqrt(tr + 1.0) * 2.0;
        q[0] = 0.25 * s;
        q[1] = (R(2, 1) - R(1, 2)) / s;
        q[2] = (R(0, 2) - R(2, 0)) / s;
        q[3] = (R(1, 0) - R(0, 1)) / s;
    } else if (R(0, 0) > R(1, 1) && R(0, 0) > R(2, 2)) {
        const double s = std::sqrt(1.0 + R(0, 0) - R(1, 1) - R(2, 2)) * 2.0;
        q[0] = (R(2, 1) - R(1, 2)) / s;
        q[1] = 0.25 * s;
        q[2] = (R(0, 1) + R(1, 0)) / s;
        q[3] = (R(0, 2) + R(2, 0)) / s;
    } else if (R(1, 1) > R(2, 2)) {
        const double s = std::sqrt(1.0 + R(1, 1) - R(0, 0) - R(2, 2)) * 2.0;
        q[0] = (R(0, 2) - R(2, 0)) / s;
        q[1] = (R(0, 1) + R(1, 0)) / s;
        q[2] = 0.25 * s;
        q[3] = (R(1, 2) + R(2, 1)) / s;
    } else {
        const double s = std::sqrt(1.0 + R(2, 2) - R(0, 0) - R(1, 1)) * 2.0;
        q[0] = (R(1, 0) - R(0, 1)) / s;
        q[1] = (R(0, 2) + R(2, 0)) / s;
        q[2] = (R(1, 2) + R(2, 1)) / s;
        q[3] = 0.25 * s;
    }
}

// Little-endian TIFF / GeoTIFF writer helpers.
struct TiffEntry {
    uint16_t tag = 0;
    uint16_t type = 0; // 2=ASCII, 3=SHORT, 4=LONG, 12=DOUBLE
    uint32_t count = 0;
    std::vector<uint8_t> bytes;
};

void putU16(std::vector<uint8_t>& v, uint16_t x) {
    v.push_back(uint8_t(x & 0xFF));
    v.push_back(uint8_t((x >> 8) & 0xFF));
}

void putU32(std::vector<uint8_t>& v, uint32_t x) {
    v.push_back(uint8_t(x & 0xFF));
    v.push_back(uint8_t((x >> 8) & 0xFF));
    v.push_back(uint8_t((x >> 16) & 0xFF));
    v.push_back(uint8_t((x >> 24) & 0xFF));
}

void putF64(std::vector<uint8_t>& v, double d) {
    uint64_t bits = 0;
    std::memcpy(&bits, &d, 8);
    for (int i = 0; i < 8; ++i) v.push_back(uint8_t((bits >> (8 * i)) & 0xFF));
}

TiffEntry entryShort(uint16_t tag, const std::vector<uint16_t>& vals) {
    TiffEntry e{tag, 3, uint32_t(vals.size()), {}};
    for (uint16_t x : vals) putU16(e.bytes, x);
    return e;
}

TiffEntry entryLong(uint16_t tag, uint32_t val) {
    TiffEntry e{tag, 4, 1, {}};
    putU32(e.bytes, val);
    return e;
}

TiffEntry entryDouble(uint16_t tag, const std::vector<double>& vals) {
    TiffEntry e{tag, 12, uint32_t(vals.size()), {}};
    for (double d : vals) putF64(e.bytes, d);
    return e;
}

TiffEntry entryAscii(uint16_t tag, const std::string& s) {
    TiffEntry e{tag, 2, uint32_t(s.size() + 1), {}};
    e.bytes.insert(e.bytes.end(), s.begin(), s.end());
    e.bytes.push_back(0);
    return e;
}

bool writeGeoTiffFile(
    const std::string& path,
    int width,
    int height,
    std::vector<TiffEntry> entries,
    const uint8_t* pixelData,
    size_t pixelBytes,
    double westLon,
    double northLat,
    double degPerPxLon,
    double degPerPxLat) {
    if (width <= 0 || height <= 0 || pixelBytes == 0) return false;

    // GeoTIFF tags: ModelPixelScale (33550), ModelTiepoint (33922), GeoKeyDirectory (34735)
    entries.push_back(entryDouble(33550, {degPerPxLon, degPerPxLat, 0.0}));
    entries.push_back(entryDouble(33922, {0.0, 0.0, 0.0, westLon, northLat, 0.0}));
    // OGC GeoKeyDirectory v1.1.0, 3 keys:
    // 1024 GTModelTypeGeoKey = 2 (ModelTypeGeographic)
    // 1025 GTRasterTypeGeoKey = 1 (RasterPixelIsArea)
    // 2048 GeographicTypeGeoKey = 4326 (GCS_WGS_84)
    entries.push_back(entryShort(34735, {
        1, 1, 0, 3,
        1024, 0, 1, 2,
        1025, 0, 1, 1,
        2048, 0, 1, 4326
    }));

    // Sort IFD entries strictly by ascending tag ID as required by TIFF 6.0
    std::sort(entries.begin(), entries.end(), [](const TiffEntry& a, const TiffEntry& b) {
        return a.tag < b.tag;
    });

    const uint32_t ifdOffset = 8;
    const uint32_t ifdSize = 2 + uint32_t(entries.size()) * 12 + 4;
    uint32_t extraOffset = ifdOffset + ifdSize;
    if (extraOffset & 1u) extraOffset++;

    std::vector<uint8_t> extraHeap;
    std::vector<uint32_t> valueOrOffsets(entries.size(), 0);
    int stripOffsetIdx = -1;

    for (size_t i = 0; i < entries.size(); ++i) {
        if (entries[i].tag == 273) stripOffsetIdx = int(i);
        if (entries[i].bytes.size() <= 4) {
            uint8_t pad[4] = {0, 0, 0, 0};
            std::memcpy(pad, entries[i].bytes.data(), entries[i].bytes.size());
            valueOrOffsets[i] = uint32_t(pad[0]) | (uint32_t(pad[1]) << 8) |
                                (uint32_t(pad[2]) << 16) | (uint32_t(pad[3]) << 24);
        } else {
            if (extraHeap.size() & 1u) extraHeap.push_back(0);
            valueOrOffsets[i] = extraOffset + uint32_t(extraHeap.size());
            extraHeap.insert(extraHeap.end(), entries[i].bytes.begin(), entries[i].bytes.end());
        }
    }

    uint32_t dataOffset = extraOffset + uint32_t(extraHeap.size());
    while (dataOffset & 3u) dataOffset++;
    if (stripOffsetIdx >= 0) valueOrOffsets[size_t(stripOffsetIdx)] = dataOffset;

    std::vector<uint8_t> header;
    header.reserve(dataOffset);
    // 'I','I', magic 42, IFD0 offset 8
    header.push_back('I');
    header.push_back('I');
    putU16(header, 42);
    putU32(header, ifdOffset);

    putU16(header, uint16_t(entries.size()));
    for (size_t i = 0; i < entries.size(); ++i) {
        putU16(header, entries[i].tag);
        putU16(header, entries[i].type);
        putU32(header, entries[i].count);
        putU32(header, valueOrOffsets[i]);
    }
    putU32(header, 0); // next IFD = 0
    while (header.size() < extraOffset) header.push_back(0);
    header.insert(header.end(), extraHeap.begin(), extraHeap.end());
    while (header.size() < dataOffset) header.push_back(0);

    std::ofstream out(path, std::ios::binary);
    if (!out) return false;
    out.write(reinterpret_cast<const char*>(header.data()), std::streamsize(header.size()));
    out.write(reinterpret_cast<const char*>(pixelData), std::streamsize(pixelBytes));
    return bool(out);
}

cv::Vec3b elevationRamp(float t) {
    t = std::clamp(t, 0.0f, 1.0f);
    // Hypsometric terrain ramp (BGR): deep emerald -> lime -> warm sand -> terracotta -> snow
    struct Stop { float pos; uint8_t b, g, r; };
    static const Stop stops[] = {
        {0.00f, 75, 110, 35},
        {0.30f, 80, 175, 95},
        {0.60f, 110, 215, 225},
        {0.85f, 95, 145, 215},
        {1.00f, 240, 245, 250}
    };
    for (int i = 0; i < 4; ++i) {
        if (t <= stops[i + 1].pos) {
            const float f = (t - stops[i].pos) / std::max(1e-5f, stops[i + 1].pos - stops[i].pos);
            return cv::Vec3b(
                uint8_t(stops[i].b + f * (stops[i + 1].b - stops[i].b)),
                uint8_t(stops[i].g + f * (stops[i + 1].g - stops[i].g)),
                uint8_t(stops[i].r + f * (stops[i + 1].r - stops[i].r)));
        }
    }
    return cv::Vec3b(240, 245, 250);
}

}  // namespace

GeoAlignment computeGpsEnuAlignment(const State& s, std::string& log) {
    GeoAlignment res;
    std::vector<int> gpsImgs;
    std::vector<double> lats, lons, alts;
    for (size_t i = 0; i < s.images.size(); ++i) {
        const Image& im = s.images[i];
        if (!im.registered || !im.input.hasGps) continue;
        if (!std::isfinite(im.input.lat) || !std::isfinite(im.input.lon)) continue;
        gpsImgs.push_back(int(i));
        lats.push_back(im.input.lat);
        lons.push_back(im.input.lon);
        alts.push_back(std::isfinite(im.input.alt) ? im.input.alt : 0.0);
    }

    if (gpsImgs.empty()) {
        if (s.opt.hasFallbackGps) {
            res.hasOrigin = true;
            res.refLat = s.opt.fallbackLat;
            res.refLon = s.opt.fallbackLon;
            res.refAlt = s.opt.fallbackAlt;
        }
        return res;
    }

    res.hasOrigin = true;
    res.refLat = medianOf(lats);
    res.refLon = medianOf(lons);
    res.refAlt = medianOf(alts);

    if (gpsImgs.size() < 3) {
        std::ostringstream ss;
        ss << "gps origin from " << gpsImgs.size() << " images (insufficient for 3D Umeyama)\n";
        log += ss.str();
        return res;
    }

    double mPerLat = 111132.92, mPerLon = 111412.84;
    metresPerDegree(res.refLat, mPerLat, mPerLon);

    std::vector<cv::Vec3d> srcPts, dstPts;
    double maxEnuNorm = 0.0;
    for (int idx : gpsImgs) {
        const Image& im = s.images[idx];
        const cv::Vec3d enu(
            (im.input.lon - res.refLon) * mPerLon,
            (im.input.lat - res.refLat) * mPerLat,
            (std::isfinite(im.input.alt) ? im.input.alt : res.refAlt) - res.refAlt);
        maxEnuNorm = std::max(maxEnuNorm, cv::norm(enu));
        srcPts.push_back(im.centre());
        dstPts.push_back(enu);
    }

    if (maxEnuNorm < 1.2) {
        log += "gps baseline below 1.2 m; keeping GPS origin with visual/gravity frame\n";
        return res;
    }

    // Estimate SfM camera spread
    cv::Vec3d srcMean(0, 0, 0), dstMean(0, 0, 0);
    for (size_t i = 0; i < srcPts.size(); ++i) {
        srcMean += srcPts[i];
        dstMean += dstPts[i];
    }
    srcMean *= 1.0 / double(srcPts.size());
    dstMean *= 1.0 / double(dstPts.size());

    double srcVar = 0.0, dstVar = 0.0;
    for (size_t i = 0; i < srcPts.size(); ++i) {
        srcVar += (srcPts[i] - srcMean).dot(srcPts[i] - srcMean);
        dstVar += (dstPts[i] - dstMean).dot(dstPts[i] - dstMean);
    }
    if (srcVar < 1e-9 || dstVar < 1e-6) return res;
    const double roughScale = std::sqrt(dstVar / srcVar);

    // Determine reconstructed world "up" direction from gravity or camera -Y to stabilize roll on linear flights
    cv::Vec3d sfmUp(0, 0, 0);
    for (int idx : gpsImgs) {
        const Image& im = s.images[idx];
        const cv::Vec3d u(im.input.upX, im.input.upY, im.input.upZ);
        if (cv::norm(u) > 1e-6) sfmUp += im.R.t() * cv::normalize(u);
        else sfmUp += im.R.t() * cv::Vec3d(0, -1, 0);
    }
    const bool haveUp = cv::norm(sfmUp) > 1e-6;
    if (haveUp) sfmUp = cv::normalize(sfmUp);

    // Augment correspondences with weak vertical anchor vectors to prevent degenerate roll on 1D drone flight lines
    std::vector<cv::Vec3d> augSrc = srcPts, augDst = dstPts;
    if (haveUp) {
        const double leverSfm = std::sqrt(srcVar / double(srcPts.size())) * 0.35;
        const double leverEnu = leverSfm * roughScale;
        for (size_t i = 0; i < srcPts.size(); ++i) {
            augSrc.push_back(srcPts[i] + sfmUp * leverSfm);
            augDst.push_back(dstPts[i] + cv::Vec3d(0, 0, leverEnu));
        }
    }

    cv::Vec3d muS(0, 0, 0), muD(0, 0, 0);
    for (size_t i = 0; i < augSrc.size(); ++i) {
        muS += augSrc[i];
        muD += augDst[i];
    }
    muS *= 1.0 / double(augSrc.size());
    muD *= 1.0 / double(augDst.size());

    cv::Matx33d Sigma = cv::Matx33d::zeros();
    double varS = 0.0;
    for (size_t i = 0; i < augSrc.size(); ++i) {
        const cv::Vec3d ds = augSrc[i] - muS;
        const cv::Vec3d dd = augDst[i] - muD;
        varS += ds.dot(ds);
        for (int r = 0; r < 3; ++r)
            for (int c = 0; c < 3; ++c)
                Sigma(r, c) += dd[r] * ds[c];
    }
    Sigma *= 1.0 / double(augSrc.size());
    varS /= double(augSrc.size());
    if (varS < 1e-12) return res;

    cv::Mat w, u, vt;
    cv::SVD::compute(cv::Mat(Sigma), w, u, vt);
    cv::Matx33d U(u), Vt(vt);
    cv::Matx33d S = cv::Matx33d::eye();
    if (cv::determinant(U * Vt) < 0) S(2, 2) = -1.0;

    const cv::Matx33d R = U * S * Vt;
    const double traceWS = w.at<double>(0) * S(0, 0) + w.at<double>(1) * S(1, 1) + w.at<double>(2) * S(2, 2);
    const double scale = traceWS / varS;
    if (!std::isfinite(scale) || scale <= 1e-6 || scale > 1e6) return res;

    res.aligned3d = true;
    res.scale = scale;
    res.R = R;
    // We want X' = scale * R * (X - shift) such that srcMean -> dstMean:
    // scale * R * (srcMean - shift) = dstMean  =>  shift = srcMean - (1/scale) * R^T * dstMean
    res.shift = srcMean - (1.0 / scale) * (R.t() * dstMean);

    double sqErr = 0.0;
    for (size_t i = 0; i < srcPts.size(); ++i) {
        const cv::Vec3d pred = scale * (R * (srcPts[i] - res.shift));
        sqErr += (pred - dstPts[i]).dot(pred - dstPts[i]);
    }
    const double rmse = std::sqrt(sqErr / double(srcPts.size()));
    std::ostringstream ss;
    ss << "gps Umeyama ENU aligned (" << srcPts.size() << " cameras, scale=" << scale << ", RMSE=" << rmse << " m)\n";
    log += ss.str();
    return res;
}

RasterResult buildDsmAndOrthophoto(
    const State& s,
    const std::vector<DensePoint>& pts,
    double refLat,
    double refLon,
    double refAlt,
    bool hasGeoOrigin,
    const std::string& outDir,
    const ProgressFn& progress,
    float p0,
    float p1) {
    RasterResult result;
    if ((!s.opt.exportDsm && !s.opt.exportOrthophoto) || pts.size() < 16) return result;

    // Robust XY bounds (1%..99% quantiles + 4% margin so extreme single-point outliers never blow up raster bounds)
    std::vector<double> xs, ys, zs;
    xs.reserve(pts.size());
    ys.reserve(pts.size());
    zs.reserve(pts.size());
    for (const auto& p : pts) {
        if (std::isfinite(p.X[0]) && std::isfinite(p.X[1]) && std::isfinite(p.X[2])) {
            xs.push_back(p.X[0]);
            ys.push_back(p.X[1]);
            zs.push_back(p.X[2]);
        }
    }
    if (xs.size() < 16) return result;
    auto quantile = [](std::vector<double> v, double q) {
        const size_t k = std::min(v.size() - 1, size_t(q * double(v.size() - 1)));
        std::nth_element(v.begin(), v.begin() + k, v.end());
        return v[k];
    };
    const double x0 = quantile(xs, 0.005), x1 = quantile(xs, 0.995);
    const double y0 = quantile(ys, 0.005), y1 = quantile(ys, 0.995);
    const double spanX = std::max(0.2, x1 - x0);
    const double spanY = std::max(0.2, y1 - y0);
    const double minX = x0 - 0.03 * spanX, maxX = x1 + 0.03 * spanX;
    const double minY = y0 - 0.03 * spanY, maxY = y1 + 0.03 * spanY;
    const double extX = maxX - minX, extY = maxY - minY;

    // Choose GSD
    double gsd = s.opt.orthophotoGsdMetres;
    if (gsd <= 0.0) {
        // Auto GSD: target ~1200 px along longest axis
        gsd = std::max(extX, extY) / 1200.0;
    }
    // Clamp grid dimensions to [64 .. 2560] for mobile RAM safety
    const double minAllowedGsd = std::max(extX, extY) / 2560.0;
    gsd = std::max(gsd, std::max(1e-4, minAllowedGsd));
    int width = std::clamp(int(std::ceil(extX / gsd)), 32, 2560);
    int height = std::clamp(int(std::ceil(extY / gsd)), 32, 2560);
    gsd = std::max(extX / width, extY / height);

    result.width = width;
    result.height = height;
    result.gsdMetres = gsd;

    if (progress && !progress("Generating DSM elevation model", p0)) return result;

    constexpr float kNoData = -9999.0f;
    cv::Mat dsm(height, width, CV_32F, cv::Scalar(kNoData));
    cv::Mat fallbackRgb(height, width, CV_8UC3, cv::Scalar(0, 0, 0));
    cv::Mat validMask(height, width, CV_8U, cv::Scalar(0));

    // Bin points into DSM cells (highest surface Z wins for true Digital Surface Model)
    for (const auto& p : pts) {
        const int col = int(std::floor((p.X[0] - minX) / gsd));
        const int row = int(std::floor((maxY - p.X[1]) / gsd));
        if (col < 0 || col >= width || row < 0 || row >= height) continue;
        const float z = float(p.X[2] + (hasGeoOrigin ? refAlt : 0.0));
        float& cell = dsm.at<float>(row, col);
        if (!validMask.at<uint8_t>(row, col) || z > cell) {
            cell = z;
            validMask.at<uint8_t>(row, col) = 255;
            fallbackRgb.at<cv::Vec3b>(row, col) = p.rgb; // RGB
        }
    }

    // Build survey footprint mask (closing interior gaps between dense patches up to ~9% of raster size)
    // so true orthophoto back-projection covers continuous roads, roofs, and shadows without black holes.
    cv::Mat footprint;
    const int morphRadius = std::clamp(int(std::lround(std::min(width, height) / 11.0)), 6, 96);
    cv::Mat kernel = cv::getStructuringElement(cv::MORPH_ELLIPSE, cv::Size(2 * morphRadius + 1, 2 * morphRadius + 1));
    cv::morphologyEx(validMask, footprint, cv::MORPH_CLOSE, kernel);

    // Fast coarse-to-fine hole filling inside the survey footprint
    cv::Mat filledDsm = dsm.clone();
    cv::Mat filledMask = validMask.clone();
    cv::Mat filledRgb = fallbackRgb.clone();
    const int maxFillIters = morphRadius + 8;
    for (int iter = 0; iter < maxFillIters; ++iter) {
        cv::Mat nextDsm = filledDsm.clone();
        cv::Mat nextMask = filledMask.clone();
        cv::Mat nextRgb = filledRgb.clone();
        bool anyFilled = false;
        const int step = (iter < morphRadius / 2) ? 2 : 1;
        for (int r = 0; r < height; ++r) {
            for (int c = 0; c < width; ++c) {
                if (filledMask.at<uint8_t>(r, c) || !footprint.at<uint8_t>(r, c)) continue;
                double sumZ = 0.0, sumW = 0.0;
                double sumR = 0.0, sumG = 0.0, sumB = 0.0;
                for (int dr = -step; dr <= step; dr += step) {
                    const int rr = r + dr;
                    if (rr < 0 || rr >= height) continue;
                    for (int dc = -step; dc <= step; dc += step) {
                        const int cc = c + dc;
                        if (cc < 0 || cc >= width || !filledMask.at<uint8_t>(rr, cc)) continue;
                        const double w = (dr == 0 || dc == 0) ? 1.0 : 0.7071;
                        sumZ += w * filledDsm.at<float>(rr, cc);
                        const cv::Vec3b col = filledRgb.at<cv::Vec3b>(rr, cc);
                        sumR += w * col[0];
                        sumG += w * col[1];
                        sumB += w * col[2];
                        sumW += w;
                    }
                }
                if (sumW > 0.0) {
                    nextDsm.at<float>(r, c) = float(sumZ / sumW);
                    nextRgb.at<cv::Vec3b>(r, c) = cv::Vec3b(
                        cv::saturate_cast<uchar>(sumR / sumW),
                        cv::saturate_cast<uchar>(sumG / sumW),
                        cv::saturate_cast<uchar>(sumB / sumW));
                    nextMask.at<uint8_t>(r, c) = 255;
                    anyFilled = true;
                }
            }
        }
        filledDsm = nextDsm;
        filledMask = nextMask;
        filledRgb = nextRgb;
        if (!anyFilled && step == 1) break;
    }

    // Light 3x3 Gaussian smoothing on DSM interior to eliminate single-voxel staircasing
    cv::Mat smoothDsm = filledDsm.clone();
    for (int r = 1; r + 1 < height; ++r) {
        for (int c = 1; c + 1 < width; ++c) {
            if (!filledMask.at<uint8_t>(r, c)) continue;
            double sum = 0.0, wsum = 0.0;
            for (int dr = -1; dr <= 1; ++dr) {
                for (int dc = -1; dc <= 1; ++dc) {
                    if (!filledMask.at<uint8_t>(r + dr, c + dc)) continue;
                    const double w = (dr == 0 && dc == 0) ? 4.0 : ((dr == 0 || dc == 0) ? 2.0 : 1.0);
                    sum += w * filledDsm.at<float>(r + dr, c + dc);
                    wsum += w;
                }
            }
            if (wsum > 0.0) smoothDsm.at<float>(r, c) = float(sum / wsum);
        }
    }

    // Compute WGS84 georeferencing tiepoint & pixel scale
    const double anchorLat = hasGeoOrigin ? refLat : 0.0;
    const double anchorLon = hasGeoOrigin ? refLon : 0.0;
    double mPerLat = 111132.92, mPerLon = 111412.84;
    metresPerDegree(anchorLat, mPerLat, mPerLon);
    const double degPerPxLon = gsd / mPerLon;
    const double degPerPxLat = gsd / mPerLat;
    const double westLon = anchorLon + minX / mPerLon;
    const double northLat = anchorLat + maxY / mPerLat;

    // 1. Write DSM GeoTIFF (.tif) + hillshade preview (.png)
    if (s.opt.exportDsm) {
        std::vector<TiffEntry> dsmTags = {
            entryLong(256, uint32_t(width)),
            entryLong(257, uint32_t(height)),
            entryShort(258, {32}),
            entryShort(259, {1}),
            entryShort(262, {1}),
            entryLong(273, 0), // StripOffsets patched by writeGeoTiffFile
            entryShort(277, {1}),
            entryLong(278, uint32_t(height)),
            entryLong(279, uint32_t(size_t(width) * size_t(height) * sizeof(float))),
            entryShort(284, {1}),
            entryShort(339, {3}), // IEEE floating point
            entryAscii(42113, "-9999"),
        };
        result.dsmWritten = writeGeoTiffFile(
            outDir + "/dsm.tif",
            width,
            height,
            std::move(dsmTags),
            reinterpret_cast<const uint8_t*>(smoothDsm.data),
            size_t(width) * size_t(height) * sizeof(float),
            westLon,
            northLat,
            degPerPxLon,
            degPerPxLat);

        // Hillshaded color-relief preview PNG for mobile offline viewer
        float minElev = 1e9f, maxElev = -1e9f;
        for (int r = 0; r < height; ++r) {
            for (int c = 0; c < width; ++c) {
                if (filledMask.at<uint8_t>(r, c)) {
                    minElev = std::min(minElev, smoothDsm.at<float>(r, c));
                    maxElev = std::max(maxElev, smoothDsm.at<float>(r, c));
                }
            }
        }
        const float elevSpan = std::max(0.05f, maxElev - minElev);
        cv::Mat dsmPreview(height, width, CV_8UC4, cv::Scalar(18, 30, 26, 0));
        for (int r = 0; r < height; ++r) {
            for (int c = 0; c < width; ++c) {
                if (!filledMask.at<uint8_t>(r, c)) continue;
                const float zc = smoothDsm.at<float>(r, c);
                const float zl = (c > 0 && filledMask.at<uint8_t>(r, c - 1)) ? smoothDsm.at<float>(r, c - 1) : zc;
                const float zr = (c + 1 < width && filledMask.at<uint8_t>(r, c + 1)) ? smoothDsm.at<float>(r, c + 1) : zc;
                const float zu = (r > 0 && filledMask.at<uint8_t>(r - 1, c)) ? smoothDsm.at<float>(r - 1, c) : zc;
                const float zd = (r + 1 < height && filledMask.at<uint8_t>(r + 1, c)) ? smoothDsm.at<float>(r + 1, c) : zc;
                const double dzdx = (zr - zl) / (2.0 * gsd);
                const double dzdy = (zu - zd) / (2.0 * gsd);
                cv::Vec3d nrm(-dzdx, -dzdy, 1.0);
                nrm = cv::normalize(nrm);
                const cv::Vec3d sun = cv::normalize(cv::Vec3d(-0.55, 0.55, 0.63));
                const float shade = float(std::clamp(0.35 + 0.75 * std::max(0.0, nrm.dot(sun)), 0.25, 1.15));
                const cv::Vec3b base = elevationRamp((zc - minElev) / elevSpan);
                dsmPreview.at<cv::Vec4b>(r, c) = cv::Vec4b(
                    cv::saturate_cast<uchar>(base[0] * shade),
                    cv::saturate_cast<uchar>(base[1] * shade),
                    cv::saturate_cast<uchar>(base[2] * shade),
                    255);
            }
        }
        cv::imwrite(outDir + "/dsm.preview.png", dsmPreview);
    }

    // 2. True Orthophoto GeoTIFF (.tif) + preview (.png)
    if (s.opt.exportOrthophoto) {
        if (progress && !progress("Projecting true orthophoto", 0.5f * (p0 + p1))) return result;

        struct OrthoCam {
            int imgIdx = 0;
            cv::Mat bgr; // undistorted
            cv::Matx33d K;
            cv::Matx33d R;
            cv::Vec3d t;
            cv::Vec3d C;
        };
        std::vector<int> regIdx;
        for (size_t i = 0; i < s.images.size(); ++i)
            if (s.images[i].registered) regIdx.push_back(int(i));

        const int maxOrthoCams = 24;
        std::vector<OrthoCam> cams;
        for (size_t k = 0; k < regIdx.size(); ++k) {
            if (int(regIdx.size()) > maxOrthoCams &&
                (int(k) * maxOrthoCams) / int(regIdx.size()) == ((int(k) - 1) * maxOrthoCams) / int(regIdx.size())) {
                continue;
            }
            const int ii = regIdx[k];
            const Image& im = s.images[ii];
            const CameraModel& cm = s.cameras[im.camera];
            cv::Mat raw = cv::imread(im.input.path, cv::IMREAD_COLOR);
            if (raw.empty()) continue;
            const double sc = std::min(1.0, 1280.0 / double(std::max(cm.width, cm.height)));
            cv::Mat scaled;
            if (sc < 1.0) cv::resize(raw, scaled, cv::Size(), sc, sc, cv::INTER_AREA);
            else scaled = raw;
            const cv::Matx33d Ks(
                cm.fx * sc, 0, (cm.cx + 0.5) * sc - 0.5,
                0, cm.fy * sc, (cm.cy + 0.5) * sc - 0.5,
                0, 0, 1);
            cv::Mat undist;
            cv::undistort(scaled, undist, cv::Mat(Ks), distortionVector(cm), cv::Mat(Ks));
            cams.push_back({ii, undist, Ks, im.R, im.t, im.centre()});
        }

        cv::Mat orthoRgba(height, width, CV_8UC4, cv::Scalar(0, 0, 0, 0));
        cv::Mat orthoPreviewBgra(height, width, CV_8UC4, cv::Scalar(0, 0, 0, 0));
        const double zOffset = hasGeoOrigin ? refAlt : 0.0;

        cv::parallel_for_(cv::Range(0, height), [&](const cv::Range& range) {
            for (int r = range.start; r < range.end; ++r) {
                for (int c = 0; c < width; ++c) {
                    if (!filledMask.at<uint8_t>(r, c)) continue;
                    const double wx = minX + (c + 0.5) * gsd;
                    const double wy = maxY - (r + 0.5) * gsd;
                    const double wz = double(smoothDsm.at<float>(r, c)) - zOffset;
                    const cv::Vec3d P(wx, wy, wz);

                    double bestW1 = 0.0, bestW2 = 0.0;
                    cv::Vec3d col1(0, 0, 0), col2(0, 0, 0);

                    for (const auto& oc : cams) {
                        const cv::Vec3d pc = oc.R * P + oc.t;
                        if (pc[2] <= 1e-4) continue;
                        const double u = oc.K(0, 0) * (pc[0] / pc[2]) + oc.K(0, 2);
                        const double v = oc.K(1, 1) * (pc[1] / pc[2]) + oc.K(1, 2);
                        if (u < 1.0 || v < 1.0 || u + 2.0 >= oc.bgr.cols || v + 2.0 >= oc.bgr.rows) continue;

                        // Weight prefers nadir views + pixels closer to optical center (seamless feathering)
                        const cv::Vec3d ray = P - oc.C;
                        const double dist = std::max(1e-3, cv::norm(ray));
                        const double nadirCos = std::max(0.05, std::abs(ray[2]) / dist);
                        const double nx = (u - 0.5 * oc.bgr.cols) / (0.5 * oc.bgr.cols);
                        const double ny = (v - 0.5 * oc.bgr.rows) / (0.5 * oc.bgr.rows);
                        const double vig = std::max(0.02, 1.0 - 0.75 * (nx * nx + ny * ny));
                        const double w = (nadirCos * nadirCos * vig * vig) / (dist * 0.25 + 1.0);
                        if (w <= bestW2) continue;

                        // Bilinear sample BGR
                        const int u0 = int(std::floor(u)), v0 = int(std::floor(v));
                        const double au = u - u0, av = v - v0;
                        const cv::Vec3b p00 = oc.bgr.at<cv::Vec3b>(v0, u0);
                        const cv::Vec3b p10 = oc.bgr.at<cv::Vec3b>(v0, u0 + 1);
                        const cv::Vec3b p01 = oc.bgr.at<cv::Vec3b>(v0 + 1, u0);
                        const cv::Vec3b p11 = oc.bgr.at<cv::Vec3b>(v0 + 1, u0 + 1);
                        cv::Vec3d rgb;
                        for (int ch = 0; ch < 3; ++ch) {
                            const int bgrCh = 2 - ch; // RGB order
                            rgb[ch] = (1 - au) * (1 - av) * p00[bgrCh] + au * (1 - av) * p10[bgrCh] +
                                      (1 - au) * av * p01[bgrCh] + au * av * p11[bgrCh];
                        }
                        if (w > bestW1) {
                            bestW2 = bestW1;
                            col2 = col1;
                            bestW1 = w;
                            col1 = rgb;
                        } else {
                            bestW2 = w;
                            col2 = rgb;
                        }
                    }

                    uint8_t R = 0, G = 0, B = 0;
                    if (bestW1 > 0.0) {
                        const double wSum = bestW1 + bestW2;
                        const cv::Vec3d blended = (bestW1 * col1 + bestW2 * col2) * (1.0 / wSum);
                        R = cv::saturate_cast<uchar>(blended[0]);
                        G = cv::saturate_cast<uchar>(blended[1]);
                        B = cv::saturate_cast<uchar>(blended[2]);
                    } else {
                        const cv::Vec3b fb = filledRgb.at<cv::Vec3b>(r, c);
                        R = fb[0];
                        G = fb[1];
                        B = fb[2];
                    }
                    orthoRgba.at<cv::Vec4b>(r, c) = cv::Vec4b(R, G, B, 255);
                    orthoPreviewBgra.at<cv::Vec4b>(r, c) = cv::Vec4b(B, G, R, 255);
                }
            }
        });

        std::vector<TiffEntry> orthoTags = {
            entryLong(256, uint32_t(width)),
            entryLong(257, uint32_t(height)),
            entryShort(258, {8, 8, 8, 8}),
            entryShort(259, {1}),
            entryShort(262, {2}), // RGB
            entryLong(273, 0),
            entryShort(277, {4}), // RGBA
            entryLong(278, uint32_t(height)),
            entryLong(279, uint32_t(size_t(width) * size_t(height) * 4)),
            entryShort(284, {1}),
            entryShort(338, {2}), // Unassociated alpha
        };
        result.orthoWritten = writeGeoTiffFile(
            outDir + "/orthophoto.tif",
            width,
            height,
            std::move(orthoTags),
            orthoRgba.data,
            size_t(width) * size_t(height) * 4,
            westLon,
            northLat,
            degPerPxLon,
            degPerPxLat);

        cv::imwrite(outDir + "/orthophoto.preview.png", orthoPreviewBgra);
    }

    if (progress) progress("GeoTIFF products complete", p1);
    return result;
}

bool writeUndistortedColmapDataset(
    const State& s,
    const std::string& colmapRootDir,
    int maxImageSide,
    const ProgressFn& progress,
    float p0,
    float p1) {
    std::error_code ec;
    const std::string imgDir = colmapRootDir + "/images";
    const std::string sparseDir = colmapRootDir + "/sparse/0";
    std::filesystem::create_directories(imgDir, ec);
    std::filesystem::create_directories(sparseDir, ec);

    struct ScaledCam {
        int width = 0, height = 0;
        double fx = 0, fy = 0, cx = 0, cy = 0;
        double scale = 1.0;
    };
    std::vector<ScaledCam> scCams(s.cameras.size());
    std::ofstream camsFile(sparseDir + "/cameras.txt");
    camsFile << "# Camera list with one line of data per camera:\n"
                "#   CAMERA_ID, MODEL, WIDTH, HEIGHT, PARAMS[]\n";
    for (size_t c = 0; c < s.cameras.size(); ++c) {
        const CameraModel& m = s.cameras[c];
        const double sc = std::min(1.0, double(maxImageSide) / double(std::max(1, std::max(m.width, m.height))));
        ScaledCam u;
        u.scale = sc;
        u.width = std::max(16, int(std::lround(m.width * sc)));
        u.height = std::max(16, int(std::lround(m.height * sc)));
        u.fx = m.fx * sc;
        u.fy = m.fy * sc;
        u.cx = (m.cx + 0.5) * sc - 0.5;
        u.cy = (m.cy + 0.5) * sc - 0.5;
        scCams[c] = u;
        char line[256];
        // PINHOLE: fx, fy, cx+0.5, cy+0.5 (COLMAP pixel corner convention)
        std::snprintf(line, sizeof line, "%zu PINHOLE %d %d %.10g %.10g %.10g %.10g\n",
                      c + 1, u.width, u.height, u.fx, u.fy, u.cx + 0.5, u.cy + 0.5);
        camsFile << line;
    }

    std::vector<int> pid(s.points.size(), -1);
    int nextPid = 1;
    for (size_t j = 0; j < s.points.size(); ++j)
        if (s.points[j].valid) pid[j] = nextPid++;

    std::ofstream imgsFile(sparseDir + "/images.txt");
    imgsFile << "# Image list with two lines of data per image:\n"
                "#   IMAGE_ID, QW, QX, QY, QZ, TX, TY, TZ, CAMERA_ID, NAME\n"
                "#   POINTS2D[] as (X, Y, POINT3D_ID)\n";

    std::vector<std::unordered_map<int, int>> pt2dIdx(s.images.size());
    int regWritten = 0;
    const int totalImgs = int(s.images.size());
    for (size_t i = 0; i < s.images.size(); ++i) {
        const Image& im = s.images[i];
        if (!im.registered) continue;
        if (progress && !progress("Preparing calibrated COLMAP dataset", p0 + (p1 - p0) * float(i) / std::max(1, totalImgs))) {
            return false;
        }
        const CameraModel& rawCam = s.cameras[im.camera];
        const ScaledCam& sc = scCams[im.camera];

        cv::Mat rawBgr = cv::imread(im.input.path, cv::IMREAD_COLOR);
        if (rawBgr.empty()) continue;
        cv::Mat resized;
        if (rawBgr.cols != sc.width || rawBgr.rows != sc.height) {
            cv::resize(rawBgr, resized, cv::Size(sc.width, sc.height), 0, 0, cv::INTER_AREA);
        } else {
            resized = rawBgr;
        }
        const cv::Matx33d Kpin(sc.fx, 0, sc.cx, 0, sc.fy, sc.cy, 0, 0, 1);
        cv::Mat undistBgr;
        cv::undistort(resized, undistBgr, cv::Mat(Kpin), distortionVector(rawCam), cv::Mat(Kpin));

        char imgName[64];
        std::snprintf(imgName, sizeof imgName, "frame_%04zu.jpg", i + 1);
        if (!cv::imwrite(imgDir + "/" + imgName, undistBgr, {cv::IMWRITE_JPEG_QUALITY, 92})) continue;

        double q[4];
        quatFromRot(im.R, q);
        char line[512];
        std::snprintf(line, sizeof line, "%zu %.12g %.12g %.12g %.12g %.12g %.12g %.12g %d %s\n",
                      i + 1, q[0], q[1], q[2], q[3], im.t[0], im.t[1], im.t[2], im.camera + 1, imgName);
        imgsFile << line;

        std::vector<std::pair<int, int>> pts2d;
        for (size_t j = 0; j < s.points.size(); ++j) {
            if (pid[j] < 0) continue;
            for (const auto& o : s.points[j].obs)
                if (o.image == int(i)) pts2d.emplace_back(o.keypoint, pid[j]);
        }
        for (size_t k = 0; k < pts2d.size(); ++k) {
            const cv::Point2d& nm = im.normalized[pts2d[k].first];
            const double ux = sc.fx * nm.x + sc.cx + 0.5;
            const double uy = sc.fy * nm.y + sc.cy + 0.5;
            std::snprintf(line, sizeof line, "%s%.3f %.3f %d", k ? " " : "", ux, uy, pts2d[k].second);
            imgsFile << line;
            pt2dIdx[i][pts2d[k].first] = int(k);
        }
        imgsFile << "\n";
        regWritten++;
    }

    std::ofstream pts3File(sparseDir + "/points3D.txt");
    pts3File << "# 3D point list with one line of data per point:\n"
                "#   POINT3D_ID, X, Y, Z, R, G, B, ERROR, TRACK[] as (IMAGE_ID, POINT2D_IDX)\n";
    char line[512];
    for (size_t j = 0; j < s.points.size(); ++j) {
        if (pid[j] < 0) continue;
        const Point3D& p = s.points[j];
        double err = 0.0;
        for (const auto& o : p.obs) err += reprojectionError(s, p, o);
        err /= std::max<size_t>(1, p.obs.size());
        std::snprintf(line, sizeof line, "%d %.9g %.9g %.9g %d %d %d %.4f",
                      pid[j], p.X[0], p.X[1], p.X[2], int(p.color[0]), int(p.color[1]), int(p.color[2]), err);
        pts3File << line;
        for (const auto& o : p.obs) {
            auto it = pt2dIdx[o.image].find(o.keypoint);
            if (it != pt2dIdx[o.image].end()) {
                pts3File << " " << (o.image + 1) << " " << it->second;
            }
        }
        pts3File << "\n";
    }
    return regWritten >= 2 && bool(camsFile) && bool(imgsFile) && bool(pts3File);
}

bool writeGaussianSplatPly(const std::string& path, const std::vector<DensePoint>& inputPts) {
    if (inputPts.empty()) return false;
    // Cap to 350,000 splats for smooth offline WebGL rendering on all Android phones
    std::vector<DensePoint> pts;
    const size_t maxSplats = 350000;
    if (inputPts.size() <= maxSplats) {
        pts = inputPts;
    } else {
        pts.reserve(maxSplats);
        for (size_t i = 0; i < maxSplats; ++i) {
            pts.push_back(inputPts[(i * inputPts.size()) / maxSplats]);
        }
    }

    const int n = int(pts.size());
    cv::Mat coords(n, 3, CV_32F);
    for (int i = 0; i < n; ++i) {
        coords.at<float>(i, 0) = pts[i].X[0];
        coords.at<float>(i, 1) = pts[i].X[1];
        coords.at<float>(i, 2) = pts[i].X[2];
    }
    const int k = std::min(n, 5);
    std::vector<float> sigmas(n, 0.01f);
    if (k >= 2) {
        cv::flann::Index kd(coords, cv::flann::KDTreeIndexParams(2));
        cv::Mat indices(n, k, CV_32S), dists(n, k, CV_32F);
        kd.knnSearch(coords, indices, dists, k, cv::flann::SearchParams(16));
        for (int i = 0; i < n; ++i) {
            double sumD = 0.0;
            int cnt = 0;
            for (int j = 1; j < k; ++j) {
                const float d2 = dists.at<float>(i, j);
                if (d2 > 0 && std::isfinite(d2)) {
                    sumD += std::sqrt(double(d2));
                    cnt++;
                }
            }
            const float meanDist = cnt > 0 ? float(sumD / cnt) : 0.01f;
            sigmas[i] = std::max(1e-4f, meanDist * 0.85f);
        }
    }

    // Clamp splat scale to median neighborhood density and prune extreme isolated floaters
    // so sparse/boundary points never turn into giant foggy discs in the 3DGS viewer.
    std::vector<float> sortedSigmas = sigmas;
    std::nth_element(sortedSigmas.begin(), sortedSigmas.begin() + sortedSigmas.size() / 2, sortedSigmas.end());
    const float medianSigma = std::max(1e-4f, sortedSigmas[sortedSigmas.size() / 2]);
    const float maxAllowedSigma = medianSigma * 2.2f;
    const float minAllowedSigma = medianSigma * 0.30f;
    const float floaterCutoff = medianSigma * 5.0f;

    std::vector<int> kept;
    kept.reserve(n);
    for (int i = 0; i < n; ++i) {
        if (sigmas[i] <= floaterCutoff) kept.push_back(i);
    }
    if (kept.size() < 16) {
        kept.resize(n);
        std::iota(kept.begin(), kept.end(), 0);
    }
    const int outCount = int(kept.size());

    std::ofstream f(path, std::ios::binary);
    if (!f) return false;
    f << "ply\nformat binary_little_endian 1.0\n"
      << "element vertex " << outCount << "\n"
      << "property float x\nproperty float y\nproperty float z\n"
      << "property float opacity\n"
      << "property float scale_0\nproperty float scale_1\nproperty float scale_2\n"
      << "property float rot_0\nproperty float rot_1\nproperty float rot_2\nproperty float rot_3\n"
      << "property float f_dc_0\nproperty float f_dc_1\nproperty float f_dc_2\n"
      << "end_header\n";

    constexpr float kShC0 = 0.28209479177387814f;
    struct SplatRow {
        float x, y, z;
        float opacity;
        float s0, s1, s2;
        float r0, r1, r2, r3;
        float dc0, dc1, dc2;
    };
    static_assert(sizeof(SplatRow) == 14 * sizeof(float), "Packed SplatRow");

    std::vector<SplatRow> rows(outCount);
    for (int idx = 0; idx < outCount; ++idx) {
        const int i = kept[idx];
        const DensePoint& p = pts[i];
        SplatRow& row = rows[idx];
        // Store Gaussian Splats in metric ENU Z-up (matching point_cloud.ply, Brush COLMAP, and MosaicEarth 3D Globe)
        row.x = p.X[0];
        row.y = p.X[1];
        row.z = p.X[2];
        row.opacity = 2.4f; // sigmoid(2.4) ~= 0.917

        const float clampedSigma = std::clamp(sigmas[i], minAllowedSigma, maxAllowedSigma);
        const float sTangent = std::log(std::max(1e-5f, clampedSigma));
        const float sNormal = std::log(std::max(1e-5f, clampedSigma * 0.22f));
        row.s0 = sTangent;
        row.s1 = sTangent;
        row.s2 = sNormal;

        const cv::Vec3d nrmEnu(p.n[0], p.n[1], p.n[2]);
        if (cv::norm(nrmEnu) > 1e-4) {
            const cv::Matx33d R = vecRotation({0, 0, 1}, nrmEnu);
            double q[4];
            quatFromRot(R, q);
            row.r0 = float(q[0]);
            row.r1 = float(q[1]);
            row.r2 = float(q[2]);
            row.r3 = float(q[3]);
        } else {
            row.r0 = 1.0f;
            row.r1 = row.r2 = row.r3 = 0.0f;
        }

        row.dc0 = ((float(p.rgb[0]) / 255.0f) - 0.5f) / kShC0;
        row.dc1 = ((float(p.rgb[1]) / 255.0f) - 0.5f) / kShC0;
        row.dc2 = ((float(p.rgb[2]) / 255.0f) - 0.5f) / kShC0;
    }
    f.write(reinterpret_cast<const char*>(rows.data()), std::streamsize(rows.size() * sizeof(SplatRow)));
    return bool(f);
}

}  // namespace parallax

// MosaicEarth Capture: 3D Surface Meshing (2.5D Aerial Terrain & 360° 3D Surface-Net),
// Multi-View Camera UV Texture Atlas Baking, and Binary glTF 2.0 (.glb) Export.
// SPDX-License-Identifier: GPL-3.0-or-later
#include <opencv2/calib3d.hpp>
#include <opencv2/imgcodecs.hpp>
#include <opencv2/imgproc.hpp>

#include <algorithm>
#include <array>
#include <cmath>
#include <cstdint>
#include <cstdio>
#include <cstring>
#include <fstream>
#include <sstream>
#include <unordered_map>
#include <vector>

#include "internal.hpp"

namespace parallax {
namespace {

struct MeshCam {
    cv::Mat bgr; // undistorted BGR
    cv::Matx33d K;
    cv::Matx33d R;
    cv::Vec3d t;
    cv::Vec3d C;
};

std::vector<MeshCam> loadTextureCameras(const State& s, int maxCams = 20, int maxSide = 1280) {
    std::vector<int> reg;
    for (size_t i = 0; i < s.images.size(); ++i)
        if (s.images[i].registered) reg.push_back(int(i));

    std::vector<MeshCam> out;
    for (size_t k = 0; k < reg.size(); ++k) {
        if (int(reg.size()) > maxCams &&
            (int(k) * maxCams) / int(reg.size()) == ((int(k) - 1) * maxCams) / int(reg.size())) {
            continue;
        }
        const Image& im = s.images[reg[k]];
        const CameraModel& cm = s.cameras[im.camera];
        cv::Mat raw = cv::imread(im.input.path, cv::IMREAD_COLOR);
        if (raw.empty()) continue;
        const double sc = std::min(1.0, double(maxSide) / double(std::max(1, std::max(cm.width, cm.height))));
        cv::Mat scaled;
        if (sc < 1.0) cv::resize(raw, scaled, cv::Size(), sc, sc, cv::INTER_AREA);
        else scaled = raw;
        const cv::Matx33d Ks(
            cm.fx * sc, 0, (cm.cx + 0.5) * sc - 0.5,
            0, cm.fy * sc, (cm.cy + 0.5) * sc - 0.5,
            0, 0, 1);
        cv::Mat undist;
        cv::undistort(scaled, undist, cv::Mat(Ks), distortionVector(cm), cv::Mat(Ks));
        out.push_back({undist, Ks, im.R, im.t, im.centre()});
    }
    return out;
}

cv::Vec3b sampleBestCamerasBgr(const std::vector<MeshCam>& cams, const cv::Vec3f& P3, const cv::Vec3f& N3, const cv::Vec3b& fallbackRgb) {
    const cv::Vec3d P(P3[0], P3[1], P3[2]);
    cv::Vec3d N(N3[0], N3[1], N3[2]);
    const double nLen = cv::norm(N);
    if (nLen > 1e-6) N *= 1.0 / nLen;
    else N = cv::Vec3d(0, 0, 1);

    double w1 = 0.0, w2 = 0.0;
    cv::Vec3d bgr1(0, 0, 0), bgr2(0, 0, 0);

    for (const auto& mc : cams) {
        const cv::Vec3d pc = mc.R * P + mc.t;
        if (pc[2] <= 1e-4) continue;
        const double u = mc.K(0, 0) * (pc[0] / pc[2]) + mc.K(0, 2);
        const double v = mc.K(1, 1) * (pc[1] / pc[2]) + mc.K(1, 2);
        if (u < 1.0 || v < 1.0 || u + 2.0 >= mc.bgr.cols || v + 2.0 >= mc.bgr.rows) continue;

        const cv::Vec3d toCam = mc.C - P;
        const double dist = std::max(1e-3, cv::norm(toCam));
        const double facing = toCam.dot(N) / dist;
        if (facing <= 0.05) continue;

        const double nx = (u - 0.5 * mc.bgr.cols) / (0.5 * mc.bgr.cols);
        const double ny = (v - 0.5 * mc.bgr.rows) / (0.5 * mc.bgr.rows);
        const double vig = std::max(0.05, 1.0 - 0.65 * (nx * nx + ny * ny));
        const double w = (facing * facing * vig) / (0.2 * dist + 1.0);
        if (w <= w2) continue;

        const int u0 = int(std::floor(u)), v0 = int(std::floor(v));
        const double au = u - u0, av = v - v0;
        const cv::Vec3b p00 = mc.bgr.at<cv::Vec3b>(v0, u0);
        const cv::Vec3b p10 = mc.bgr.at<cv::Vec3b>(v0, u0 + 1);
        const cv::Vec3b p01 = mc.bgr.at<cv::Vec3b>(v0 + 1, u0);
        const cv::Vec3b p11 = mc.bgr.at<cv::Vec3b>(v0 + 1, u0 + 1);
        cv::Vec3d samp;
        for (int ch = 0; ch < 3; ++ch) {
            samp[ch] = (1 - au) * (1 - av) * p00[ch] + au * (1 - av) * p10[ch] +
                       (1 - au) * av * p01[ch] + au * av * p11[ch];
        }
        if (w > w1) {
            w2 = w1;
            bgr2 = bgr1;
            w1 = w;
            bgr1 = samp;
        } else {
            w2 = w;
            bgr2 = samp;
        }
    }

    if (w1 > 0.0) {
        const cv::Vec3d res = (w1 * bgr1 + w2 * bgr2) * (1.0 / (w1 + w2));
        return cv::Vec3b(
            cv::saturate_cast<uchar>(res[0]),
            cv::saturate_cast<uchar>(res[1]),
            cv::saturate_cast<uchar>(res[2]));
    }
    return cv::Vec3b(fallbackRgb[2], fallbackRgb[1], fallbackRgb[0]);
}

struct GlbMeshData {
    std::vector<cv::Vec3f> positions; // ENU Z-up before glTF conversion
    std::vector<cv::Vec3f> normals;
    std::vector<cv::Vec2f> uvs;
    std::vector<uint32_t> indices;
    cv::Mat atlasBgr;
};

void appendU32LE(std::vector<uint8_t>& buf, uint32_t v) {
    buf.push_back(uint8_t(v & 0xFF));
    buf.push_back(uint8_t((v >> 8) & 0xFF));
    buf.push_back(uint8_t((v >> 16) & 0xFF));
    buf.push_back(uint8_t((v >> 24) & 0xFF));
}

bool writeGlbFile(const std::string& path, const GlbMeshData& m) {
    if (m.positions.empty() || m.indices.empty() || m.atlasBgr.empty()) return false;
    const size_t nv = m.positions.size();
    const size_t ni = m.indices.size();

    // Convert ENU Z-up (x, y, z) -> glTF right-handed Y-up (x, z, -y)
    std::vector<float> posBuf(nv * 3), nrmBuf(nv * 3), uvBuf(nv * 2);
    float minP[3] = {1e30f, 1e30f, 1e30f}, maxP[3] = {-1e30f, -1e30f, -1e30f};
    for (size_t i = 0; i < nv; ++i) {
        const float gx = m.positions[i][0];
        const float gy = m.positions[i][2];
        const float gz = -m.positions[i][1];
        posBuf[3 * i + 0] = gx;
        posBuf[3 * i + 1] = gy;
        posBuf[3 * i + 2] = gz;
        minP[0] = std::min(minP[0], gx); maxP[0] = std::max(maxP[0], gx);
        minP[1] = std::min(minP[1], gy); maxP[1] = std::max(maxP[1], gy);
        minP[2] = std::min(minP[2], gz); maxP[2] = std::max(maxP[2], gz);

        cv::Vec3f gn(m.normals[i][0], m.normals[i][2], -m.normals[i][1]);
        const float nl = cv::norm(gn);
        if (nl > 1e-6f) gn *= 1.0f / nl;
        else gn = cv::Vec3f(0, 1, 0);
        nrmBuf[3 * i + 0] = gn[0];
        nrmBuf[3 * i + 1] = gn[1];
        nrmBuf[3 * i + 2] = gn[2];

        uvBuf[2 * i + 0] = std::clamp(m.uvs[i][0], 0.0f, 1.0f);
        uvBuf[2 * i + 1] = std::clamp(m.uvs[i][1], 0.0f, 1.0f);
    }

    std::vector<uchar> jpgBytes;
    if (!cv::imencode(".jpg", m.atlasBgr, jpgBytes, {cv::IMWRITE_JPEG_QUALITY, 90}) || jpgBytes.empty()) {
        return false;
    }

    std::vector<uint8_t> bin;
    auto addChunk = [&](const void* ptr, size_t len) -> std::pair<size_t, size_t> {
        while (bin.size() & 3u) bin.push_back(0);
        const size_t off = bin.size();
        const auto* b = static_cast<const uint8_t*>(ptr);
        bin.insert(bin.end(), b, b + len);
        return {off, len};
    };

    const auto [posOff, posLen] = addChunk(posBuf.data(), posBuf.size() * sizeof(float));
    const auto [nrmOff, nrmLen] = addChunk(nrmBuf.data(), nrmBuf.size() * sizeof(float));
    const auto [uvOff, uvLen] = addChunk(uvBuf.data(), uvBuf.size() * sizeof(float));
    const auto [idxOff, idxLen] = addChunk(m.indices.data(), m.indices.size() * sizeof(uint32_t));
    const auto [imgOff, imgLen] = addChunk(jpgBytes.data(), jpgBytes.size());
    while (bin.size() & 3u) bin.push_back(0);

    std::ostringstream js;
    js.precision(8);
    js << "{"
       << "\"asset\":{\"version\":\"2.0\",\"generator\":\"MosaicEarth Capture Android\"},"
       << "\"scene\":0,\"scenes\":[{\"nodes\":[0]}],"
       << "\"nodes\":[{\"mesh\":0,\"name\":\"MosaicEarthMesh\"}],"
       << "\"meshes\":[{\"primitives\":[{\"attributes\":{\"POSITION\":0,\"NORMAL\":1,\"TEXCOORD_0\":2},\"indices\":3,\"material\":0}]}],"
       << "\"materials\":[{\"pbrMetallicRoughness\":{\"baseColorTexture\":{\"index\":0},\"metallicFactor\":0.0,\"roughnessFactor\":0.95},\"doubleSided\":true}],"
       << "\"textures\":[{\"sampler\":0,\"source\":0}],"
       << "\"samplers\":[{\"magFilter\":9729,\"minFilter\":9987,\"wrapS\":33071,\"wrapT\":33071}],"
       << "\"images\":[{\"bufferView\":4,\"mimeType\":\"image/jpeg\"}],"
       << "\"bufferViews\":["
       << "{\"buffer\":0,\"byteOffset\":" << posOff << ",\"byteLength\":" << posLen << ",\"target\":34962},"
       << "{\"buffer\":0,\"byteOffset\":" << nrmOff << ",\"byteLength\":" << nrmLen << ",\"target\":34962},"
       << "{\"buffer\":0,\"byteOffset\":" << uvOff << ",\"byteLength\":" << uvLen << ",\"target\":34962},"
       << "{\"buffer\":0,\"byteOffset\":" << idxOff << ",\"byteLength\":" << idxLen << ",\"target\":34963},"
       << "{\"buffer\":0,\"byteOffset\":" << imgOff << ",\"byteLength\":" << imgLen << "}"
       << "],"
       << "\"accessors\":["
       << "{\"bufferView\":0,\"componentType\":5126,\"count\":" << nv << ",\"type\":\"VEC3\","
       << "\"min\":[" << minP[0] << "," << minP[1] << "," << minP[2] << "],"
       << "\"max\":[" << maxP[0] << "," << maxP[1] << "," << maxP[2] << "]},"
       << "{\"bufferView\":1,\"componentType\":5126,\"count\":" << nv << ",\"type\":\"VEC3\"},"
       << "{\"bufferView\":2,\"componentType\":5126,\"count\":" << nv << ",\"type\":\"VEC2\"},"
       << "{\"bufferView\":3,\"componentType\":5125,\"count\":" << ni << ",\"type\":\"SCALAR\"}"
       << "],"
       << "\"buffers\":[{\"byteLength\":" << bin.size() << "}]"
       << "}";

    std::string jsonStr = js.str();
    while (jsonStr.size() & 3u) jsonStr.push_back(' ');

    const uint32_t totalLen = 12u + 8u + uint32_t(jsonStr.size()) + 8u + uint32_t(bin.size());
    std::vector<uint8_t> header;
    header.reserve(28);
    appendU32LE(header, 0x46546C67u); // 'glTF'
    appendU32LE(header, 2u);
    appendU32LE(header, totalLen);
    appendU32LE(header, uint32_t(jsonStr.size()));
    appendU32LE(header, 0x4E4F534Au); // 'JSON'

    std::vector<uint8_t> binHeader;
    appendU32LE(binHeader, uint32_t(bin.size()));
    appendU32LE(binHeader, 0x004E4942u); // 'BIN\0'

    std::ofstream f(path, std::ios::binary);
    if (!f) return false;
    f.write(reinterpret_cast<const char*>(header.data()), std::streamsize(header.size()));
    f.write(jsonStr.data(), std::streamsize(jsonStr.size()));
    f.write(reinterpret_cast<const char*>(binHeader.data()), std::streamsize(binHeader.size()));
    f.write(reinterpret_cast<const char*>(bin.data()), std::streamsize(bin.size()));
    return bool(f);
}

int buildAerialMeshGlb(
    const State& s,
    const std::vector<DensePoint>& pts,
    const std::vector<MeshCam>& cams,
    const std::string& glbPath,
    const ProgressFn& progress,
    float p0,
    float p1) {
    std::vector<double> xs, ys;
    xs.reserve(pts.size());
    ys.reserve(pts.size());
    for (const auto& p : pts) {
        if (std::isfinite(p.X[0]) && std::isfinite(p.X[1]) && std::isfinite(p.X[2])) {
            xs.push_back(p.X[0]);
            ys.push_back(p.X[1]);
        }
    }
    if (xs.size() < 16) return 0;
    auto quantile = [](std::vector<double> v, double q) {
        const size_t k = std::min(v.size() - 1, size_t(q * double(v.size() - 1)));
        std::nth_element(v.begin(), v.begin() + k, v.end());
        return v[k];
    };
    const double minX = quantile(xs, 0.005), maxX = quantile(xs, 0.995);
    const double minY = quantile(ys, 0.005), maxY = quantile(ys, 0.995);
    const double extX = std::max(0.2, maxX - minX);
    const double extY = std::max(0.2, maxY - minY);

    const int maxGrid = 220;
    const double step = std::max(extX, extY) / double(maxGrid);
    const int gw = std::clamp(int(std::ceil(extX / step)) + 1, 16, maxGrid + 1);
    const int gh = std::clamp(int(std::ceil(extY / step)) + 1, 16, maxGrid + 1);
    const double dx = extX / std::max(1, gw - 1);
    const double dy = extY / std::max(1, gh - 1);

    cv::Mat zGrid(gh, gw, CV_32F, cv::Scalar(0.0f));
    cv::Mat mask(gh, gw, CV_8U, cv::Scalar(0));
    cv::Mat rgbGrid(gh, gw, CV_8UC3, cv::Scalar(128, 128, 128));

    for (const auto& p : pts) {
        const int c = int(std::lround((p.X[0] - minX) / dx));
        const int r = int(std::lround((maxY - p.X[1]) / dy));
        if (c < 0 || c >= gw || r < 0 || r >= gh) continue;
        if (!mask.at<uint8_t>(r, c) || p.X[2] > zGrid.at<float>(r, c)) {
            zGrid.at<float>(r, c) = p.X[2];
            mask.at<uint8_t>(r, c) = 255;
            rgbGrid.at<cv::Vec3b>(r, c) = p.rgb;
        }
    }

    cv::Mat footprint;
    cv::Mat kern = cv::getStructuringElement(cv::MORPH_ELLIPSE, cv::Size(15, 15));
    cv::morphologyEx(mask, footprint, cv::MORPH_CLOSE, kern);

    for (int it = 0; it < 18; ++it) {
        cv::Mat nz = zGrid.clone(), nm = mask.clone();
        cv::Mat nc = rgbGrid.clone();
        bool changed = false;
        for (int r = 0; r < gh; ++r) {
            for (int c = 0; c < gw; ++c) {
                if (mask.at<uint8_t>(r, c) || !footprint.at<uint8_t>(r, c)) continue;
                double sz = 0, sw = 0, sr = 0, sg = 0, sb = 0;
                for (int dr = -1; dr <= 1; ++dr) {
                    for (int dc = -1; dc <= 1; ++dc) {
                        const int rr = r + dr, cc = c + dc;
                        if (rr < 0 || rr >= gh || cc < 0 || cc >= gw || !mask.at<uint8_t>(rr, cc)) continue;
                        const double w = (dr == 0 || dc == 0) ? 1.0 : 0.7;
                        sz += w * zGrid.at<float>(rr, cc);
                        const cv::Vec3b col = rgbGrid.at<cv::Vec3b>(rr, cc);
                        sr += w * col[0]; sg += w * col[1]; sb += w * col[2];
                        sw += w;
                    }
                }
                if (sw > 0) {
                    nz.at<float>(r, c) = float(sz / sw);
                    nc.at<cv::Vec3b>(r, c) = cv::Vec3b(uchar(sr / sw), uchar(sg / sw), uchar(sb / sw));
                    nm.at<uint8_t>(r, c) = 255;
                    changed = true;
                }
            }
        }
        zGrid = nz; mask = nm; rgbGrid = nc;
        if (!changed) break;
    }

    // Smooth heightfield gently
    cv::Mat smoothZ = zGrid.clone();
    for (int r = 1; r + 1 < gh; ++r) {
        for (int c = 1; c + 1 < gw; ++c) {
            if (!mask.at<uint8_t>(r, c)) continue;
            double sz = 0, sw = 0;
            for (int dr = -1; dr <= 1; ++dr) {
                for (int dc = -1; dc <= 1; ++dc) {
                    if (!mask.at<uint8_t>(r + dr, c + dc)) continue;
                    const double w = (dr == 0 && dc == 0) ? 4.0 : 1.0;
                    sz += w * zGrid.at<float>(r + dr, c + dc);
                    sw += w;
                }
            }
            if (sw > 0) smoothZ.at<float>(r, c) = float(sz / sw);
        }
    }

    if (progress && !progress("Triangulating 2.5D terrain mesh", p0 + 0.35f * (p1 - p0))) return 0;

    GlbMeshData mesh;
    std::vector<int> vIdx(size_t(gw) * size_t(gh), -1);
    for (int r = 0; r < gh; ++r) {
        for (int c = 0; c < gw; ++c) {
            if (!mask.at<uint8_t>(r, c)) continue;
            vIdx[size_t(r) * gw + c] = int(mesh.positions.size());
            const float x = float(minX + c * dx);
            const float y = float(maxY - r * dy);
            const float z = smoothZ.at<float>(r, c);
            mesh.positions.emplace_back(x, y, z);
            mesh.normals.emplace_back(0.0f, 0.0f, 1.0f);
            mesh.uvs.emplace_back(
                float(c) / float(std::max(1, gw - 1)),
                float(r) / float(std::max(1, gh - 1)));
        }
    }

    for (int r = 0; r + 1 < gh; ++r) {
        for (int c = 0; c + 1 < gw; ++c) {
            const int i00 = vIdx[size_t(r) * gw + c];
            const int i10 = vIdx[size_t(r) * gw + (c + 1)];
            const int i01 = vIdx[size_t(r + 1) * gw + c];
            const int i11 = vIdx[size_t(r + 1) * gw + (c + 1)];
            if (i00 < 0 || i10 < 0 || i01 < 0 || i11 < 0) continue;
            // Counter-clockwise in ENU Z-up (+Z up): (r,c)=(top-left), (r+1,c)=(bottom-left), (r,c+1)=(top-right)
            if (std::abs(mesh.positions[i00][2] - mesh.positions[i11][2]) <=
                std::abs(mesh.positions[i10][2] - mesh.positions[i01][2])) {
                mesh.indices.insert(mesh.indices.end(), {uint32_t(i00), uint32_t(i01), uint32_t(i11)});
                mesh.indices.insert(mesh.indices.end(), {uint32_t(i00), uint32_t(i11), uint32_t(i10)});
            } else {
                mesh.indices.insert(mesh.indices.end(), {uint32_t(i00), uint32_t(i01), uint32_t(i10)});
                mesh.indices.insert(mesh.indices.end(), {uint32_t(i10), uint32_t(i01), uint32_t(i11)});
            }
        }
    }
    if (mesh.indices.empty()) return 0;

    // Area-weighted smooth vertex normals
    std::fill(mesh.normals.begin(), mesh.normals.end(), cv::Vec3f(0, 0, 0));
    for (size_t t = 0; t < mesh.indices.size(); t += 3) {
        const uint32_t a = mesh.indices[t], b = mesh.indices[t + 1], c = mesh.indices[t + 2];
        const cv::Vec3f n = (mesh.positions[b] - mesh.positions[a]).cross(mesh.positions[c] - mesh.positions[a]);
        mesh.normals[a] += n;
        mesh.normals[b] += n;
        mesh.normals[c] += n;
    }
    for (auto& n : mesh.normals) {
        const float l = cv::norm(n);
        if (l > 1e-8f) n *= 1.0f / l;
        else n = cv::Vec3f(0, 0, 1);
    }

    if (progress && !progress("Baking multi-view UV texture atlas", p0 + 0.65f * (p1 - p0))) return 0;

    const int texSize = std::clamp(s.opt.meshTextureSize, 512, 4096);
    mesh.atlasBgr = cv::Mat(texSize, texSize, CV_8UC3, cv::Scalar(30, 38, 34));
    cv::parallel_for_(cv::Range(0, texSize), [&](const cv::Range& range) {
        for (int tr = range.start; tr < range.end; ++tr) {
            const double vf = double(tr) / std::max(1, texSize - 1);
            const int gr = std::clamp(int(std::lround(vf * (gh - 1))), 0, gh - 1);
            for (int tc = 0; tc < texSize; ++tc) {
                const double uf = double(tc) / std::max(1, texSize - 1);
                const int gc = std::clamp(int(std::lround(uf * (gw - 1))), 0, gw - 1);
                if (!mask.at<uint8_t>(gr, gc)) continue;
                const cv::Vec3f P(float(minX + uf * extX), float(maxY - vf * extY), smoothZ.at<float>(gr, gc));
                const int vi = vIdx[size_t(gr) * gw + gc];
                const cv::Vec3f N = vi >= 0 ? mesh.normals[vi] : cv::Vec3f(0, 0, 1);
                mesh.atlasBgr.at<cv::Vec3b>(tr, tc) = sampleBestCamerasBgr(cams, P, N, rgbGrid.at<cv::Vec3b>(gr, gc));
            }
        }
    });

    if (!writeGlbFile(glbPath, mesh)) return 0;
    return int(mesh.indices.size() / 3);
}

// 360° 3D Object / Facade Surface-Net Mesh + Taubin Smoothing + 6-Direction Box UV Texture Atlas
int buildObject3dMeshGlb(
    const State& s,
    const std::vector<DensePoint>& pts,
    const std::vector<MeshCam>& cams,
    const std::string& glbPath,
    const ProgressFn& progress,
    float p0,
    float p1) {
    if (pts.size() < 24) return 0;

    std::vector<double> xs, ys, zs;
    xs.reserve(pts.size()); ys.reserve(pts.size()); zs.reserve(pts.size());
    for (const auto& p : pts) {
        if (std::isfinite(p.X[0]) && std::isfinite(p.X[1]) && std::isfinite(p.X[2])) {
            xs.push_back(p.X[0]); ys.push_back(p.X[1]); zs.push_back(p.X[2]);
        }
    }
    if (xs.size() < 24) return 0;
    auto quantile = [](std::vector<double> v, double q) {
        const size_t k = std::min(v.size() - 1, size_t(q * double(v.size() - 1)));
        std::nth_element(v.begin(), v.begin() + k, v.end());
        return v[k];
    };
    const double x0 = quantile(xs, 0.01), x1 = quantile(xs, 0.99);
    const double y0 = quantile(ys, 0.01), y1 = quantile(ys, 0.99);
    const double z0 = quantile(zs, 0.01), z1 = quantile(zs, 0.99);
    const double maxSpan = std::max({0.05, x1 - x0, y1 - y0, z1 - z0});
    const double vox = maxSpan / 88.0;

    struct CellAcc {
        cv::Vec3f sumX{0, 0, 0}, sumN{0, 0, 0}, sumC{0, 0, 0};
        int count = 0;
    };
    auto packKey = [](int ix, int iy, int iz) -> int64_t {
        return (int64_t(ix + 32768) << 32) | (int64_t((iy + 32768) & 0xFFFF) << 16) | int64_t((iz + 32768) & 0xFFFF);
    };

    std::unordered_map<int64_t, CellAcc> occ;
    occ.reserve(pts.size() / 2 + 64);
    for (const auto& p : pts) {
        if (p.X[0] < x0 - 3 * vox || p.X[0] > x1 + 3 * vox ||
            p.X[1] < y0 - 3 * vox || p.X[1] > y1 + 3 * vox ||
            p.X[2] < z0 - 3 * vox || p.X[2] > z1 + 3 * vox) continue;
        const int ix = int(std::floor((p.X[0] - x0) / vox));
        const int iy = int(std::floor((p.X[1] - y0) / vox));
        const int iz = int(std::floor((p.X[2] - z0) / vox));
        CellAcc& cell = occ[packKey(ix, iy, iz)];
        cell.sumX += p.X;
        cell.sumN += p.n;
        cell.sumC += cv::Vec3f(p.rgb[0], p.rgb[1], p.rgb[2]);
        cell.count++;
    }
    if (occ.size() < 8) return 0;

    // 1-voxel morphological closing: bridge 1-voxel gaps between adjacent occupied cells so surface is continuous
    std::unordered_map<int64_t, CellAcc> closed = occ;
    for (const auto& [k, cell] : occ) {
        const int ix = int(k >> 32) - 32768;
        const int iy = int((k >> 16) & 0xFFFF) - 32768;
        const int iz = int(k & 0xFFFF) - 32768;
        for (int d = 0; d < 3; ++d) {
            const int nx1 = ix + (d == 0 ? 1 : 0), ny1 = iy + (d == 1 ? 1 : 0), nz1 = iz + (d == 2 ? 1 : 0);
            const int nx2 = ix + (d == 0 ? 2 : 0), ny2 = iy + (d == 1 ? 2 : 0), nz2 = iz + (d == 2 ? 2 : 0);
            const int64_t k1 = packKey(nx1, ny1, nz1), k2 = packKey(nx2, ny2, nz2);
            if (!closed.count(k1)) {
                auto it2 = occ.find(k2);
                if (it2 != occ.end()) {
                    CellAcc mid;
                    mid.count = 1;
                    mid.sumX = 0.5f * (cell.sumX * (1.0f / cell.count) + it2->second.sumX * (1.0f / it2->second.count));
                    mid.sumN = cell.sumN + it2->second.sumN;
                    mid.sumC = 0.5f * (cell.sumC * (1.0f / cell.count) + it2->second.sumC * (1.0f / it2->second.count));
                    closed[k1] = mid;
                }
            }
        }
    }

    if (progress && !progress("Extracting 3D surface mesh", p0 + 0.30f * (p1 - p0))) return 0;

    // Corner vertex table for smooth Surface-Nets boundary extraction
    std::unordered_map<int64_t, int> cornerVert;
    std::vector<cv::Vec3f> vertPos;
    std::vector<cv::Vec3b> vertRgb;
    auto getCorner = [&](int cx, int cy, int cz, const cv::Vec3f& hintRgb) -> int {
        const int64_t ck = packKey(cx, cy, cz);
        auto it = cornerVert.find(ck);
        if (it != cornerVert.end()) return it->second;
        // Average centroid of the up to 8 incident occupied voxels for immediate sub-voxel smoothness!
        cv::Vec3f sumP(0, 0, 0), sumCol(0, 0, 0);
        int cnt = 0;
        for (int dx = -1; dx <= 0; ++dx)
            for (int dy = -1; dy <= 0; ++dy)
                for (int dz = -1; dz <= 0; ++dz) {
                    auto oit = closed.find(packKey(cx + dx, cy + dy, cz + dz));
                    if (oit != closed.end()) {
                        const float inv = 1.0f / float(oit->second.count);
                        sumP += oit->second.sumX * inv;
                        sumCol += oit->second.sumC * inv;
                        cnt++;
                    }
                }
        cv::Vec3f p;
        cv::Vec3b rgb;
        if (cnt > 0) {
            p = sumP * (1.0f / float(cnt));
            const cv::Vec3f c = sumCol * (1.0f / float(cnt));
            rgb = cv::Vec3b(cv::saturate_cast<uchar>(c[0]), cv::saturate_cast<uchar>(c[1]), cv::saturate_cast<uchar>(c[2]));
        } else {
            p = cv::Vec3f(float(x0 + cx * vox), float(y0 + cy * vox), float(z0 + cz * vox));
            rgb = cv::Vec3b(cv::saturate_cast<uchar>(hintRgb[0]), cv::saturate_cast<uchar>(hintRgb[1]), cv::saturate_cast<uchar>(hintRgb[2]));
        }
        const int id = int(vertPos.size());
        cornerVert[ck] = id;
        vertPos.push_back(p);
        vertRgb.push_back(rgb);
        return id;
    };

    struct QuadFace {
        int v[4];
        int dir; // 0=+X, 1=-X, 2=+Y, 3=-Y, 4=+Z, 5=-Z
    };
    std::vector<QuadFace> quads;

    // Emit boundary faces whose outward direction agrees with the oriented multi-view normal (avoids double back-shells!)
    static const int dirs[6][3] = {
        {1, 0, 0}, {-1, 0, 0}, {0, 1, 0}, {0, -1, 0}, {0, 0, 1}, {0, 0, -1}
    };
    static const int faceCorners[6][4][3] = {
        {{1, 0, 0}, {1, 1, 0}, {1, 1, 1}, {1, 0, 1}}, // +X
        {{0, 0, 0}, {0, 0, 1}, {0, 1, 1}, {0, 1, 0}}, // -X
        {{0, 1, 0}, {0, 1, 1}, {1, 1, 1}, {1, 1, 0}}, // +Y
        {{0, 0, 0}, {1, 0, 0}, {1, 0, 1}, {0, 0, 1}}, // -Y
        {{0, 0, 1}, {1, 0, 1}, {1, 1, 1}, {0, 1, 1}}, // +Z
        {{0, 0, 0}, {0, 1, 0}, {1, 1, 0}, {1, 0, 0}}, // -Z
    };

    for (const auto& [k, cell] : closed) {
        const int ix = int(k >> 32) - 32768;
        const int iy = int((k >> 16) & 0xFFFF) - 32768;
        const int iz = int(k & 0xFFFF) - 32768;
        const cv::Vec3f nrm = cell.sumN;
        const float nLen = cv::norm(nrm);
        const cv::Vec3f avgCol = cell.sumC * (1.0f / float(std::max(1, cell.count)));

        for (int d = 0; d < 6; ++d) {
            const int nx = ix + dirs[d][0], ny = iy + dirs[d][1], nz = iz + dirs[d][2];
            if (closed.count(packKey(nx, ny, nz))) continue;
            // If voxel has strong oriented normal and opposite side is ALSO empty (thin sheet), emit only the front-facing side!
            const int ox = ix - dirs[d][0], oy = iy - dirs[d][1], oz = iz - dirs[d][2];
            if (nLen > 1e-3f && !closed.count(packKey(ox, oy, oz))) {
                const cv::Vec3f dVec{
                    static_cast<float>(dirs[d][0]),
                    static_cast<float>(dirs[d][1]),
                    static_cast<float>(dirs[d][2])
                };
                if ((nrm * (1.0f / nLen)).dot(dVec) < -0.15f) continue;
            }
            QuadFace qf{};
            qf.dir = d;
            for (int c = 0; c < 4; ++c) {
                qf.v[c] = getCorner(ix + faceCorners[d][c][0], iy + faceCorners[d][c][1], iz + faceCorners[d][c][2], avgCol);
            }
            quads.push_back(qf);
        }
    }
    if (quads.empty()) return 0;

    // Taubin volume-preserving mesh smoothing (4 iterations of lambda=0.48, mu=-0.50)
    std::vector<std::vector<int>> adj(vertPos.size());
    for (const auto& q : quads) {
        for (int i = 0; i < 4; ++i) {
            const int a = q.v[i], b = q.v[(i + 1) % 4];
            adj[a].push_back(b);
            adj[b].push_back(a);
        }
    }
    auto smoothStep = [&](float factor) {
        std::vector<cv::Vec3f> next = vertPos;
        for (size_t i = 0; i < vertPos.size(); ++i) {
            if (adj[i].empty()) continue;
            cv::Vec3f avg(0, 0, 0);
            for (int nb : adj[i]) avg += vertPos[nb];
            avg *= 1.0f / float(adj[i].size());
            next[i] = vertPos[i] + factor * (avg - vertPos[i]);
        }
        vertPos.swap(next);
    };
    for (int it = 0; it < 4; ++it) {
        smoothStep(0.48f);
        smoothStep(-0.50f);
    }

    // Compute smooth per-vertex normals on the welded graph
    std::vector<cv::Vec3f> weldedNormals(vertPos.size(), cv::Vec3f(0, 0, 0));
    for (const auto& q : quads) {
        const cv::Vec3f n1 = (vertPos[q.v[1]] - vertPos[q.v[0]]).cross(vertPos[q.v[2]] - vertPos[q.v[0]]);
        const cv::Vec3f n2 = (vertPos[q.v[2]] - vertPos[q.v[0]]).cross(vertPos[q.v[3]] - vertPos[q.v[0]]);
        const cv::Vec3f n = n1 + n2;
        for (int c = 0; c < 4; ++c) weldedNormals[q.v[c]] += n;
    }
    for (auto& n : weldedNormals) {
        const float l = cv::norm(n);
        if (l > 1e-8f) n *= 1.0f / l;
        else n = cv::Vec3f(0, 0, 1);
    }

    // Bounds of smoothed vertices for 6-chart Box UV packing (3 cols x 2 rows with 3% gutter)
    cv::Vec3f bmin(1e30f, 1e30f, 1e30f), bmax(-1e30f, -1e30f, -1e30f);
    for (const auto& p : vertPos) {
        for (int a = 0; a < 3; ++a) {
            bmin[a] = std::min(bmin[a], p[a]);
            bmax[a] = std::max(bmax[a], p[a]);
        }
    }
    const cv::Vec3f bspan(
        std::max(1e-3f, bmax[0] - bmin[0]),
        std::max(1e-3f, bmax[1] - bmin[1]),
        std::max(1e-3f, bmax[2] - bmin[2]));

    auto chartUv = [&](int dir, const cv::Vec3f& p) -> cv::Vec2f {
        float cu = 0.5f, cvv = 0.5f;
        switch (dir) {
            case 0: cu = (p[1] - bmin[1]) / bspan[1]; cvv = 1.0f - (p[2] - bmin[2]) / bspan[2]; break;
            case 1: cu = 1.0f - (p[1] - bmin[1]) / bspan[1]; cvv = 1.0f - (p[2] - bmin[2]) / bspan[2]; break;
            case 2: cu = 1.0f - (p[0] - bmin[0]) / bspan[0]; cvv = 1.0f - (p[2] - bmin[2]) / bspan[2]; break;
            case 3: cu = (p[0] - bmin[0]) / bspan[0]; cvv = 1.0f - (p[2] - bmin[2]) / bspan[2]; break;
            case 4: cu = (p[0] - bmin[0]) / bspan[0]; cvv = 1.0f - (p[1] - bmin[1]) / bspan[1]; break;
            default: cu = (p[0] - bmin[0]) / bspan[0]; cvv = (p[1] - bmin[1]) / bspan[1]; break;
        }
        cu = 0.04f + 0.92f * std::clamp(cu, 0.0f, 1.0f);
        cvv = 0.04f + 0.92f * std::clamp(cvv, 0.0f, 1.0f);
        const int tileCol = dir % 3, tileRow = dir / 3;
        return cv::Vec2f((tileCol + cu) / 3.0f, (tileRow + cvv) / 2.0f);
    };

    if (progress && !progress("Baking 360° camera texture atlas", p0 + 0.65f * (p1 - p0))) return 0;

    const int texSize = std::clamp(s.opt.meshTextureSize, 512, 4096);
    GlbMeshData mesh;
    mesh.atlasBgr = cv::Mat(texSize, texSize, CV_8UC3, cv::Scalar(32, 38, 35));
    cv::Mat atlasPainted(texSize, texSize, CV_8U, cv::Scalar(0));

    // Split vertices by chart (v, dir) so chart boundaries have crisp UVs while keeping smooth welded normals
    std::unordered_map<uint64_t, uint32_t> chartVertMap;
    auto getChartVert = [&](int v, int dir) -> uint32_t {
        const uint64_t key = (uint64_t(uint32_t(v)) << 4) | uint64_t(dir & 0xF);
        auto it = chartVertMap.find(key);
        if (it != chartVertMap.end()) return it->second;
        const uint32_t idx = uint32_t(mesh.positions.size());
        chartVertMap[key] = idx;
        mesh.positions.push_back(vertPos[v]);
        mesh.normals.push_back(weldedNormals[v]);
        mesh.uvs.push_back(chartUv(dir, vertPos[v]));
        return idx;
    };

    auto rasterizeTriToAtlas = [&](uint32_t i0, uint32_t i1, uint32_t i2, const cv::Vec3b& fbCol) {
        const cv::Vec2f uv0 = mesh.uvs[i0], uv1 = mesh.uvs[i1], uv2 = mesh.uvs[i2];
        const float x0p = uv0[0] * (texSize - 1), y0p = uv0[1] * (texSize - 1);
        const float x1p = uv1[0] * (texSize - 1), y1p = uv1[1] * (texSize - 1);
        const float x2p = uv2[0] * (texSize - 1), y2p = uv2[1] * (texSize - 1);
        const int minTx = std::max(0, int(std::floor(std::min({x0p, x1p, x2p})) - 1));
        const int maxTx = std::min(texSize - 1, int(std::ceil(std::max({x0p, x1p, x2p})) + 1));
        const int minTy = std::max(0, int(std::floor(std::min({y0p, y1p, y2p})) - 1));
        const int maxTy = std::min(texSize - 1, int(std::ceil(std::max({y0p, y1p, y2p})) + 1));
        const float denom = (y1p - y2p) * (x0p - x2p) + (x2p - x1p) * (y0p - y2p);
        if (std::abs(denom) < 1e-5f) return;

        for (int ty = minTy; ty <= maxTy; ++ty) {
            for (int tx = minTx; tx <= maxTx; ++tx) {
                const float px = tx + 0.5f, py = ty + 0.5f;
                float l0 = ((y1p - y2p) * (px - x2p) + (x2p - x1p) * (py - y2p)) / denom;
                float l1 = ((y2p - y0p) * (px - x2p) + (x0p - x2p) * (py - y2p)) / denom;
                float l2 = 1.0f - l0 - l1;
                if (l0 < -0.15f || l1 < -0.15f || l2 < -0.15f) continue;
                const bool inside = (l0 >= -0.01f && l1 >= -0.01f && l2 >= -0.01f);
                if (!inside && atlasPainted.at<uint8_t>(ty, tx)) continue;
                l0 = std::clamp(l0, 0.0f, 1.0f);
                l1 = std::clamp(l1, 0.0f, 1.0f);
                l2 = std::clamp(l2, 0.0f, 1.0f);
                const float ls = std::max(1e-5f, l0 + l1 + l2);
                l0 /= ls; l1 /= ls; l2 /= ls;
                const cv::Vec3f P = l0 * mesh.positions[i0] + l1 * mesh.positions[i1] + l2 * mesh.positions[i2];
                const cv::Vec3f N = l0 * mesh.normals[i0] + l1 * mesh.normals[i1] + l2 * mesh.normals[i2];
                mesh.atlasBgr.at<cv::Vec3b>(ty, tx) = sampleBestCamerasBgr(cams, P, N, fbCol);
                if (inside) atlasPainted.at<uint8_t>(ty, tx) = 255;
            }
        }
    };

    for (const auto& q : quads) {
        const uint32_t a = getChartVert(q.v[0], q.dir);
        const uint32_t b = getChartVert(q.v[1], q.dir);
        const uint32_t c = getChartVert(q.v[2], q.dir);
        const uint32_t d = getChartVert(q.v[3], q.dir);
        mesh.indices.insert(mesh.indices.end(), {a, b, c, a, c, d});
        const cv::Vec3b fb = vertRgb[q.v[0]];
        rasterizeTriToAtlas(a, b, c, fb);
        rasterizeTriToAtlas(a, c, d, fb);
    }

    // Dilate painted texels by 2 px into gutters so mipmapping never bleeds dark background
    for (int dil = 0; dil < 2; ++dil) {
        cv::Mat nextBgr = mesh.atlasBgr.clone();
        cv::Mat nextMask = atlasPainted.clone();
        for (int r = 1; r + 1 < texSize; ++r) {
            for (int c = 1; c + 1 < texSize; ++c) {
                if (atlasPainted.at<uint8_t>(r, c)) continue;
                int cnt = 0, sb = 0, sg = 0, sr = 0;
                for (int dr = -1; dr <= 1; ++dr) {
                    for (int dc = -1; dc <= 1; ++dc) {
                        if (!atlasPainted.at<uint8_t>(r + dr, c + dc)) continue;
                        const cv::Vec3b px = mesh.atlasBgr.at<cv::Vec3b>(r + dr, c + dc);
                        sb += px[0]; sg += px[1]; sr += px[2]; cnt++;
                    }
                }
                if (cnt > 0) {
                    nextBgr.at<cv::Vec3b>(r, c) = cv::Vec3b(uchar(sb / cnt), uchar(sg / cnt), uchar(sr / cnt));
                    nextMask.at<uint8_t>(r, c) = 255;
                }
            }
        }
        mesh.atlasBgr = nextBgr;
        atlasPainted = nextMask;
    }

    if (!writeGlbFile(glbPath, mesh)) return 0;
    return int(mesh.indices.size() / 3);
}

}  // namespace

int buildTexturedMeshGlb(
    const State& s,
    const std::vector<DensePoint>& pts,
    const std::string& glbPath,
    const ProgressFn& progress,
    float p0,
    float p1) {
    if (!s.opt.exportMesh || pts.size() < 16) return 0;
    const auto cams = loadTextureCameras(s, 20, std::clamp(s.opt.meshTextureSize, 960, 1600));
    if (s.opt.aerialScene) {
        return buildAerialMeshGlb(s, pts, cams, glbPath, progress, p0, p1);
    }
    return buildObject3dMeshGlb(s, pts, cams, glbPath, progress, p0, p1);
}

}  // namespace parallax

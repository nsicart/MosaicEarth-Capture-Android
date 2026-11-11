// MosaicEarth Capture & Parallax: platform-independent reconstruction core.
// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once

#include <atomic>
#include <functional>
#include <string>
#include <vector>

namespace parallax {

// Pinhole camera with OpenCV / Brown-Conrady distortion, in pixels of the saved image.
struct CameraModel {
    int id = 0;
    int width = 0, height = 0;
    double fx = 0, fy = 0, cx = 0, cy = 0;
    double k1 = 0, k2 = 0, p1 = 0, p2 = 0, k3 = 0;
    bool calibrated = false;
    double lensX = 0, lensY = 0, lensZ = 0;
    bool hasLensPosition = false;
};

struct ImageInput {
    std::string path;
    int cameraId = 0;
    int rigGroup = -1;
    double upX = 0, upY = 0, upZ = 0;
    double time = 0, rollingShutterSkew = 0;
    double gyroX = 0, gyroY = 0, gyroZ = 0;
    bool hasGyro = false;
    // EXIF / Flight GPS (WGS84 degrees & metres)
    bool hasGps = false;
    double lat = 0, lon = 0, alt = 0;
};

struct Options {
    int featureMaxSide = 1600;
    int maxFeatures = 4000;
    int matchWindow = 12;
    float ratioTest = 0.82f;
    double maxReprojError = 4.0;
    double minTriAngleDeg = 1.2;
    bool dense = true;
    int denseMaxSide = 960;
    int maxDenseImages = 48;
    bool rollingShutter = true;
    double markerSizeMm = 0;

    // MosaicEarth Photogrammetry & 3DGS Pipeline Options
    bool exportPointCloud = true;
    bool exportMesh = true;
    bool exportOrthophoto = false;
    bool exportDsm = false;
    bool exportUndistortedColmap = false;
    bool exportGaussianSplatFallback = false;

    bool aerialScene = false;         // true = Aerial/Drone 2.5D terrain mesh; false = 360° Object/Facade 3D mesh
    int meshTextureSize = 2048;       // 1024, 2048, or 4096
    double orthophotoGsdMetres = 0.0; // 0 = Auto GSD, else metres/pixel (e.g. 0.02, 0.05, 0.10)

    bool hasFallbackGps = false;
    double fallbackLat = 0.0;
    double fallbackLon = 0.0;
    double fallbackAlt = 0.0;
};

struct Result {
    bool ok = false;
    std::string message;
    int imagesTotal = 0, imagesRegistered = 0;
    int sparsePoints = 0, densePoints = 0;
    int meshTriangles = 0;
    int orthoWidth = 0, orthoHeight = 0;
    double orthoGsdMetres = 0;
    double meanReprojError = 0;
    double metresPerUnit = 0;
    std::string scaleSource = "none"; // "gps", "marker", "rig" or "none"
    bool gravityAligned = false;
    bool georeferenced = false;
    double refLat = 0, refLon = 0, refAlt = 0;

    bool hasPointCloud = false;
    bool hasMeshGlb = false;
    bool hasOrthophoto = false;
    bool hasDsm = false;
    bool hasColmapDataset = false;
    bool hasGaussianSplat = false;

    std::vector<float> cameraCentres;
    std::vector<int> cameraImages;
};

using ProgressFn = std::function<bool(const std::string& stage, float fraction)>;

class Reconstructor {
public:
    explicit Reconstructor(Options options = {}) : opt_(options) {}
    void addCamera(const CameraModel& camera) { cameras_.push_back(camera); }
    void addImage(const ImageInput& image) { images_.push_back(image); }
    Result run(const std::string& outputDir, const std::string& imageRoot, const ProgressFn& progress);

private:
    Options opt_;
    std::vector<CameraModel> cameras_;
    std::vector<ImageInput> images_;
};

std::string resultToJson(const Result& r);

}  // namespace parallax

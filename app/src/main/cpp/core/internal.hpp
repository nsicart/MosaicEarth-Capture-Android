// MosaicEarth Capture & Parallax: internal data structures shared by reconstruction stages.
// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once

#include <opencv2/core.hpp>
#include <opencv2/flann.hpp>

#include <array>
#include <cstdint>
#include <map>
#include <memory>
#include <string>
#include <utility>
#include <vector>

#include "core.hpp"

namespace parallax {

constexpr double kPi = 3.14159265358979323846;

struct Image {
    ImageInput input;
    int camera = 0;
    int actualWidth = 0;
    int actualHeight = 0;
    std::vector<cv::Point2f> pixels;
    std::vector<cv::Point2d> normalized;
    cv::Mat descriptors;
    std::shared_ptr<cv::flann::Index> index;
    std::vector<int> track;
    std::vector<cv::Vec3b> colors;
    std::map<int, std::array<cv::Point2f, 4>> markers;
    bool registered = false;
    cv::Matx33d R = cv::Matx33d::eye();
    cv::Vec3d t = {0, 0, 0};
    cv::Vec3d centre() const { return -(R.t() * t); }
    bool rs = false;
    cv::Vec3d omega = {0, 0, 0}, velocity = {0, 0, 0};
};

struct Observation {
    int image;
    int keypoint;
};

struct Track {
    std::vector<Observation> elements;
    int point = -1;
};

struct Point3D {
    cv::Vec3d X;
    cv::Vec3b color = {200, 200, 200};
    std::vector<Observation> obs;
    int track = -1;
    bool valid = true;
};

struct PairGeometry {
    int a = 0, b = 0;
    std::vector<std::pair<int, int>> inliers;
    int homographyInliers = 0;
    cv::Matx33d R;
    cv::Vec3d t;
};

struct State {
    Options opt;
    std::vector<CameraModel> cameras;
    std::vector<CameraModel> priors;
    std::vector<Image> images;
    std::vector<PairGeometry> pairs;
    std::vector<Track> tracks;
    std::vector<Point3D> points;
};

// features.cpp
bool extractFeatures(State& s, int imageIndex);
std::vector<std::pair<int, int>> matchDescriptors(const Image& a, const Image& b, float ratio);

// geometry.cpp
struct RowMotion {
    cv::Matx33d A = cv::Matx33d::eye();
    cv::Vec3d offset = {0, 0, 0};
};
RowMotion rowMotion(const State& s, const Image& im, double row, const cv::Matx33d& R);
cv::Point2d camToPixel(const CameraModel& c, const cv::Vec3d& p, bool* inFront = nullptr);
cv::Matx33d cameraMatrix(const CameraModel& c);
cv::Mat distortionVector(const CameraModel& c);
cv::Point2d projectPoint(const CameraModel& c, const cv::Matx33d& R, const cv::Vec3d& t,
                         const cv::Vec3d& X, bool* inFront = nullptr);
void undistortKeypoints(const CameraModel& c, const std::vector<cv::Point2f>& px,
                        std::vector<cv::Point2d>& normalized);
bool verifyPair(const State& s, int a, int b, const std::vector<std::pair<int, int>>& matches,
                PairGeometry& out);
bool triangulateTrack(State& s, int trackId);
double reprojectionError(const State& s, const Point3D& p, const Observation& o);
double triangulationAngleDeg(const cv::Vec3d& X, const cv::Vec3d& c1, const cv::Vec3d& c2);

// ba.cpp
struct BAOptions {
    std::vector<int> variableImages;
    int fixedGaugeImage = -1;
    int scaleGaugeImage = -1, scaleGaugeAxis = 0;
    bool refineIntrinsics = false;
    int maxIterations = 15;
    double huberPx = 2.0;
};
double bundleAdjust(State& s, const BAOptions& o);

// dense.cpp
struct DensePoint {
    cv::Vec3f X, n;
    cv::Vec3b rgb;
};
std::vector<DensePoint> denseReconstruct(const State& s, const ProgressFn& progress, float p0, float p1);

// io.cpp
bool writePly(const std::string& path, const std::vector<DensePoint>& pts);
bool writeColmap(const State& s, const std::string& dir, const std::string& imageRoot);
bool writeText(const std::string& path, const std::string& text);

// geomatics.cpp
struct GeoAlignment {
    bool aligned3d = false;
    bool hasOrigin = false;
    double refLat = 0, refLon = 0, refAlt = 0;
    double scale = 0;
    cv::Matx33d R = cv::Matx33d::eye();
    cv::Vec3d shift = {0, 0, 0};
};
GeoAlignment computeGpsEnuAlignment(const State& s, std::string& log);

struct RasterResult {
    bool dsmWritten = false;
    bool orthoWritten = false;
    int width = 0, height = 0;
    double gsdMetres = 0.0;
};
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
    float p1);

bool writeUndistortedColmapDataset(
    const State& s,
    const std::string& colmapRootDir,
    int maxImageSide,
    const ProgressFn& progress,
    float p0,
    float p1);

bool writeGaussianSplatPly(const std::string& path, const std::vector<DensePoint>& pts);

// meshing.cpp
int buildTexturedMeshGlb(
    const State& s,
    const std::vector<DensePoint>& pts,
    const std::string& glbPath,
    const ProgressFn& progress,
    float p0,
    float p1);

}  // namespace parallax

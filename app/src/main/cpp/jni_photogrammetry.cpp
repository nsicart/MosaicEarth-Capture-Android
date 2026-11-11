// MosaicEarth Capture: JNI bridge for local C++17 Photogrammetry & COLMAP/3DGS pipeline.
// SPDX-License-Identifier: GPL-3.0-or-later
#include <jni.h>
#include <android/log.h>
#include <opencv2/core.hpp>

#include <cmath>
#include <string>
#include <vector>

#include "core/core.hpp"

#define LOG_TAG "MosaicEarthPhotogrammetry"
#define LOGI(...) __android_log_print(ANDROID_LOG_INFO, LOG_TAG, __VA_ARGS__)
#define LOGE(...) __android_log_print(ANDROID_LOG_ERROR, LOG_TAG, __VA_ARGS__)

namespace {

std::string jstringToStd(JNIEnv* env, jstring s) {
    if (!s) return {};
    const char* utf = env->GetStringUTFChars(s, nullptr);
    if (!utf) return {};
    std::string out(utf);
    env->ReleaseStringUTFChars(s, utf);
    return out;
}

}  // namespace

extern "C" JNIEXPORT jstring JNICALL
Java_app_mosaicearth_capture_photogrammetry_NativePhotogrammetry_buildInfo(
    JNIEnv* env,
    jobject /* thiz */) {
    std::string info = std::string("MosaicEarth-SfM-MVS C++17 + OpenCV ") + CV_VERSION;
    return env->NewStringUTF(info.c_str());
}

extern "C" JNIEXPORT jstring JNICALL
Java_app_mosaicearth_capture_photogrammetry_NativePhotogrammetry_reconstruct(
    JNIEnv* env,
    jobject /* thiz */,
    jstring jOutputDir,
    jstring jImageRoot,
    jobjectArray jImagePaths,
    jintArray jImageWidths,
    jintArray jImageHeights,
    jdoubleArray jFocalPx,
    jdoubleArray jLatitudes,
    jdoubleArray jLongitudes,
    jdoubleArray jAltitudes,
    jbooleanArray jHasGps,
    jint featureMaxSide,
    jint maxFeatures,
    jint matchWindow,
    jboolean dense,
    jint denseMaxSide,
    jint maxDenseImages,
    jboolean exportPointCloud,
    jboolean exportMesh,
    jboolean exportOrthophoto,
    jboolean exportDsm,
    jboolean exportUndistortedColmap,
    jboolean exportGaussianSplatFallback,
    jboolean aerialScene,
    jint meshTextureSize,
    jdouble orthophotoGsdMetres,
    jboolean hasFallbackGps,
    jdouble fallbackLat,
    jdouble fallbackLon,
    jdouble fallbackAlt,
    jobject progressListener) {

    const std::string outputDir = jstringToStd(env, jOutputDir);
    const std::string imageRoot = jstringToStd(env, jImageRoot);
    const jsize count = jImagePaths ? env->GetArrayLength(jImagePaths) : 0;

    if (count < 3) {
        parallax::Result r;
        r.ok = false;
        r.message = "Calen com a mínim 3 imatges.";
        return env->NewStringUTF(parallax::resultToJson(r).c_str());
    }

    parallax::Options opt;
    opt.featureMaxSide = std::max(640, int(featureMaxSide));
    opt.maxFeatures = std::max(1000, int(maxFeatures));
    opt.matchWindow = std::max(4, int(matchWindow));
    opt.dense = (dense == JNI_TRUE);
    opt.denseMaxSide = std::max(480, int(denseMaxSide));
    opt.maxDenseImages = std::max(8, int(maxDenseImages));
    opt.exportPointCloud = (exportPointCloud == JNI_TRUE);
    opt.exportMesh = (exportMesh == JNI_TRUE);
    opt.exportOrthophoto = (exportOrthophoto == JNI_TRUE);
    opt.exportDsm = (exportDsm == JNI_TRUE);
    opt.exportUndistortedColmap = (exportUndistortedColmap == JNI_TRUE);
    opt.exportGaussianSplatFallback = (exportGaussianSplatFallback == JNI_TRUE);
    opt.aerialScene = (aerialScene == JNI_TRUE);
    opt.meshTextureSize = std::max(512, int(meshTextureSize));
    opt.orthophotoGsdMetres = double(orthophotoGsdMetres);
    opt.hasFallbackGps = (hasFallbackGps == JNI_TRUE);
    opt.fallbackLat = double(fallbackLat);
    opt.fallbackLon = double(fallbackLon);
    opt.fallbackAlt = double(fallbackAlt);

    parallax::Reconstructor recon(opt);

    std::vector<jint> widths(count, 0), heights(count, 0);
    std::vector<jdouble> focals(count, 0.0), lats(count, 0.0), lons(count, 0.0), alts(count, 0.0);
    std::vector<jboolean> gpsFlags(count, JNI_FALSE);

    if (jImageWidths) env->GetIntArrayRegion(jImageWidths, 0, count, widths.data());
    if (jImageHeights) env->GetIntArrayRegion(jImageHeights, 0, count, heights.data());
    if (jFocalPx) env->GetDoubleArrayRegion(jFocalPx, 0, count, focals.data());
    if (jLatitudes) env->GetDoubleArrayRegion(jLatitudes, 0, count, lats.data());
    if (jLongitudes) env->GetDoubleArrayRegion(jLongitudes, 0, count, lons.data());
    if (jAltitudes) env->GetDoubleArrayRegion(jAltitudes, 0, count, alts.data());
    if (jHasGps) env->GetBooleanArrayRegion(jHasGps, 0, count, gpsFlags.data());

    // Group images sharing identical resolution & approximate focal length into shared CameraModels
    // so bundle adjustment refines intrinsics jointly per physical sensor/zoom level!
    struct CamKey {
        int w, h, fBucket;
    };
    std::vector<CamKey> camKeys;
    for (jsize i = 0; i < count; ++i) {
        auto jPath = static_cast<jstring>(env->GetObjectArrayElement(jImagePaths, i));
        const std::string path = jstringToStd(env, jPath);
        env->DeleteLocalRef(jPath);

        const int w = std::max(1, int(widths[i]));
        const int h = std::max(1, int(heights[i]));
        const double maxDim = double(std::max(w, h));
        const double f = (focals[i] > 50.0) ? double(focals[i]) : (0.85 * maxDim);
        const int fBucket = int(std::round(f / 25.0));

        int camId = -1;
        for (size_t c = 0; c < camKeys.size(); ++c) {
            if (camKeys[c].w == w && camKeys[c].h == h && camKeys[c].fBucket == fBucket) {
                camId = int(c);
                break;
            }
        }
        if (camId < 0) {
            camId = int(camKeys.size());
            camKeys.push_back({w, h, fBucket});
            parallax::CameraModel cam;
            cam.id = camId;
            cam.width = w;
            cam.height = h;
            cam.fx = f;
            cam.fy = f;
            cam.cx = 0.5 * double(w);
            cam.cy = 0.5 * double(h);
            cam.calibrated = (focals[i] > 50.0);
            recon.addCamera(cam);
        }

        parallax::ImageInput im;
        im.path = path;
        im.cameraId = camId;
        if (gpsFlags[i] == JNI_TRUE && std::isfinite(lats[i]) && std::isfinite(lons[i])) {
            im.hasGps = true;
            im.lat = double(lats[i]);
            im.lon = double(lons[i]);
            im.alt = std::isfinite(alts[i]) ? double(alts[i]) : 0.0;
        }
        recon.addImage(im);
    }

    jmethodID onProgressMethod = nullptr;
    if (progressListener != nullptr) {
        jclass cls = env->GetObjectClass(progressListener);
        if (cls != nullptr) {
            onProgressMethod = env->GetMethodID(cls, "onProgress", "(Ljava/lang/String;F)Z");
            env->DeleteLocalRef(cls);
        }
    }

    LOGI("Starting native photogrammetry on %d images -> %s", int(count), outputDir.c_str());

    const parallax::Result res = recon.run(
        outputDir,
        imageRoot,
        [&](const std::string& stage, float fraction) -> bool {
            if (progressListener == nullptr || onProgressMethod == nullptr) return true;
            jstring jStage = env->NewStringUTF(stage.c_str());
            jboolean keepGoing = env->CallBooleanMethod(progressListener, onProgressMethod, jStage, jfloat(fraction));
            env->DeleteLocalRef(jStage);
            if (env->ExceptionCheck()) {
                env->ExceptionClear();
                return false;
            }
            return keepGoing == JNI_TRUE;
        });

    const std::string json = parallax::resultToJson(res);
    LOGI("Finished native photogrammetry ok=%d reg=%d/%d dense=%d tris=%d",
         res.ok ? 1 : 0, res.imagesRegistered, res.imagesTotal, res.densePoints, res.meshTriangles);
    return env->NewStringUTF(json.c_str());
}

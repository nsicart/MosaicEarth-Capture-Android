# Building from Source

MosaicEarth Capture builds on Linux, macOS or Windows with standard Android command-line tools. No MosaicEarth account or API key is required to build or run the app.

## Prerequisites

- **JDK 17**
- **Android SDK Platform 35** (`platforms;android-35`) and Build-Tools 35
- **Android NDK `27.2.12479018`** (`ndk;27.2.12479018`)
- **CMake `3.22.1`** (`cmake;3.22.1`)
- **Node.js 20+** *(only needed if modifying `viewer-web/`)*

Point Android Gradle Plugin at your SDK via `ANDROID_HOME` (or a local, untracked `local.properties` containing `sdk.dir=/path/to/Android/Sdk`).

## 1. Fetch the optional Brush Vulkan AAR (recommended)

On-device photogrammetry and Surfel Gaussian fallback build directly from the C++ NDK sources and Maven Central dependencies. To also enable native **Brush Vulkan** GPU training for 3D Gaussian Splatting, fetch the SHA-256-pinned AAR before building:

```bash
./tools/fetch_brush_experimental.sh third_party/brush/brush-aar-release.aar
```

`app/build.gradle.kts` verifies the SHA-256 digest (`b86218bda0c3408328211ffde471c6543add711f9cba8f11419dd48978031ef1`) at configuration time before linking the AAR.

## 2. Rebuild the embedded 3D & GeoTIFF viewer *(optional)*

`app/src/main/assets/viewer/bundle.js` is committed so standard Gradle builds do not require Node.js. If you edit `viewer-web/viewer.js`, regenerate the bundle:

```bash
npm --prefix viewer-web ci
npm --prefix viewer-web run build
```

## 3. Run unit tests, Android Lint and assemble an APK

Build with Brush Vulkan enabled (`minSdk 31`, `arm64-v8a`):

```bash
./gradlew testDebugUnitTest lintDebug assembleDebug \
  -PcaptureBrushAar=third_party/brush/brush-aar-release.aar
```

Or build without the Brush AAR (`minSdk 27`, `arm64-v8a`, on-device photogrammetry + Surfel splat fallback + cloud connector):

```bash
./gradlew testDebugUnitTest lintDebug assembleDebug
```

## 4. Signed release APK

Without keystore properties, `assembleRelease` signs with the local Android debug certificate for testing. To produce a release-signed APK, pass your own keystore outside the repository:

```bash
./gradlew assembleRelease \
  -PcaptureBrushAar=third_party/brush/brush-aar-release.aar \
  -PcaptureKeystore=/path/to/release.jks \
  -PcaptureKeystorePassword="..." \
  -PcaptureKeyAlias="..." \
  -PcaptureKeyPassword="..."
```

Output APK: `app/build/outputs/apk/release/app-release.apk`.

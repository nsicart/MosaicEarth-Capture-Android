<p align="center">
  <img src="docs/images/mosaicearth.png" alt="MosaicEarth logo" width="88">
</p>

# MosaicEarth Capture for Android

**Capture in the field. Reconstruct Photogrammetry and 3D Gaussian Splats on your phone — or in MosaicEarth Cloud.**

MosaicEarth Capture (`v0.4.1`) is the open-source Android mobile application and field connector for [MosaicEarth](https://mosaicearth.app). Capture overlapping photo bursts with live overlap guidance, record continuous video for 3DGS, or import drone microSD (`DCIM`) folders on site. Process **locally on your Android phone for €0** without an account, upload finished models to your private **MyEarth** storage quota at no processing fee, or send raw captures to **MosaicEarth Cloud** GPU pipelines.

[Website](https://mosaicearth.app) · [Public map](https://app.mosaicearth.app/en/Map) · [Download APK (ARM64)](https://app.mosaicearth.app/api/connectors/download?target=android-capture) · [Build from source](BUILD.md) · [Release notes](RELEASE_NOTES.md)

## Capabilities

| Capability | Details |
| --- | --- |
| **Guided field capture & drone SD import** | Full-screen rapid burst camera with live frame-to-frame overlap assistant (`OverlapAnalyzer`), continuous video capture with frame extraction, Android Photo Picker gallery import, and full folder / drone microSD (`DCIM`) import via SAF (`OPEN_DOCUMENT_TREE`) preserving EXIF GPS coordinates. |
| **Free on-device Photogrammetry (`€0`)** | Native C++17 + OpenCV NDK pipeline: incremental Structure-from-Motion (RootSIFT, five-point RANSAC, Schur bundle adjustment, WGS84 ENU georeferencing), rectified semi-global dense matching, colored point cloud (`.ply`), textured 3D mesh (`.glb`), Digital Surface Model (`.tif`) and GeoTIFF orthophoto (`.tif`). |
| **Free on-device 3D Gaussian Splatting (`€0`)** | Automated SfM camera calibration exported in COLMAP `PINHOLE` layout into the isolated **Brush** Vulkan compute service (`:brush`) for GPU training on compatible phones, with Surfel `.ply` fallback when Vulkan compute is unavailable. |
| **Offline 3D & GeoTIFF viewer** | Inspect Gaussian Splats (`.ply`, `.splat`, `.spz`), point clouds (`.ply`), textured 3D meshes (`.glb`) and GeoTIFF rasters (`.tif`) offline on the phone, or export/share files directly. |
| **Free upload to MyEarth (`€0` processing)** | Resumable chunked transfers verified with SHA-256 upload locally generated models, meshes and GeoTIFFs directly to your private **MyEarth** workspace using only your account storage allowance. |
| **Optional MosaicEarth Cloud processing** | Upload raw photo sets, video or drone surveys from the field to run heavy **NodeODX** photogrammetry or **COLMAP + OpenSplat** GPU jobs in MosaicEarth Cloud using included plan allowances or a transparent euro quote. |

## Install the APK

Download the signed 64-bit ARM64 (`arm64-v8a`) APK from [Desktop & Connectors](https://app.mosaicearth.app/en/Desktop) (with published SHA-256 checksums) or from **GitHub Releases** (compatible with [Obtainium](https://github.com/ImranR98/Obtainium) for automatic updates directly from GitHub).

- **Requirements**: 64-bit Android (`arm64-v8a`), Android 12+ (`API 31+`) for the Brush Vulkan build (Android 8.1+ `API 27+` when built without the Brush AAR), and a Vulkan 1.1+ mobile GPU for local Gaussian Splat training.
- **Privacy by default**: local capture, local reconstruction and local 3D inspection run completely offline without signing in. Cloud synchronization is explicit and private until you choose to share or publish an asset.

## Quick Build from Source

Requires JDK 17, Android SDK 35, Android NDK `27.2.12479018` and CMake `3.22.1` (see [BUILD.md](BUILD.md) for full details):

```bash
./tools/fetch_brush_experimental.sh third_party/brush/brush-aar-release.aar
./gradlew testDebugUnitTest lintDebug assembleDebug \
  -PcaptureBrushAar=third_party/brush/brush-aar-release.aar
```

## Documentation

- [Building from Source](BUILD.md)
- [User Guide](docs/USER_GUIDE.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Device Compatibility](docs/DEVICE_COMPATIBILITY.md)
- [Cloud Connector OpenAPI Contract](contracts/capture-v1.openapi.yaml)
- [Contributing](CONTRIBUTING.md) · [Security](SECURITY.md) · [Third-Party Licenses](THIRD_PARTY_LICENSES.md)

## License

MosaicEarth Capture for Android is free and open-source software published under **GNU Affero General Public License v3.0 or later (`AGPL-3.0-or-later`)**; see [LICENSE](LICENSE) and [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md).

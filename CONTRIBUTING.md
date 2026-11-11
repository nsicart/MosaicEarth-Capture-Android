# Contributing

Contributions to capture ergonomics, on-device photogrammetry, local Gaussian splatting, the embedded 3D & GeoTIFF viewer, cloud transfer reliability and documentation are welcome. Open an issue with your Android version, device SoC/GPU, release version, expected behavior and a minimal reproducible example. Report vulnerabilities privately as described in [Security](SECURITY.md).

## Development rules

- Keep local capture, local photogrammetry, local Gaussian training and the 3D/GeoTIFF viewer fully usable offline without signing in to a MosaicEarth account.
- Cloud uploads and paid cloud processing must always be explicitly initiated by the user against documented public endpoints (`contracts/capture-v1.openapi.yaml`).
- Use synthetic test fixtures in unit tests. Never commit credentials, signing keystores, private imagery datasets, generated APKs or build directories.
- Pin externally fetched native binaries by SHA-256 checksum and record all third-party attributions in [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md).
- Run `./gradlew testDebugUnitTest lintDebug` before opening a pull request. If you modify `viewer-web/`, rebuild `app/src/main/assets/viewer/bundle.js` with `npm --prefix viewer-web ci && npm --prefix viewer-web run build`.

## Repository map

| Location | What it contains |
| --- | --- |
| `app/src/main/java/app/mosaicearth/capture/` | Jetpack Compose UI, CameraX overlap capture, drone SAF import, local & cloud job runners, Room persistence and WebGL viewer bridge. |
| `app/src/main/cpp/` | Native C++17 / OpenCV NDK photogrammetry & SfM pipeline (RootSIFT, RANSAC, Schur bundle adjustment, WGS84 ENU alignment, rectified SGM dense matching, GLB mesh, DSM & GeoTIFF orthophoto, and COLMAP export for Brush). |
| `viewer-web/` | Bundled offline Three.js + GaussianSplats3D viewer source for `.ply`, `.splat`, `.spz`, `.glb` and GeoTIFF rasters. |
| `contracts/` | OpenAPI specification (`capture-v1.openapi.yaml`) for optional MosaicEarth Cloud transfers and processing. |
| `tools/` | Reproducible helper scripts (`fetch_brush_experimental.sh`, `verify_viewer.py`). |
| `docs/` | Architecture, user guide and hardware compatibility notes. |
| `app/src/test/` | JVM unit tests for overlap analysis, local archive formats, viewer metadata and cloud API contract handling. |

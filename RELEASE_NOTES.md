# Release Notes

## v0.4.1 — 11 November 2026

- **Dedicated full-screen guided burst camera**: non-blocking shutter capture (`CAPTURE_MODE_MINIMIZE_LATENCY`) with real-time `ImageAnalysis` overlap estimation (`OverlapAnalyzer`) showing live frame-to-frame overlap percentage and movement guidance (`Ideal` / `Move a bit` / `Too fast — step back`) without blocking rapid photo sequences.
- **Offline 3D & GeoTIFF viewer reliability**: fixed Gaussian Splat (`.ply`, `.splat`, `.spz`), colored point cloud (`.ply`) and textured mesh (`.glb`) rendering inside Android WebView (`127.0.0.1` loopback asset bridge without WebWorker CORS deadlocks), automatic camera framing and axis orientation toggle.
- **End-to-end Brush Vulkan SH preservation**: calibrated SfM poses exported in COLMAP `PINHOLE` layout into the isolated `:brush` Vulkan service preserve spherical harmonics and sub-millimeter Gaussian scale fidelity when uploaded to MyEarth.

## v0.4.0 — 11 November 2026

- **Unified MosaicEarth dark-emerald interface**: redesigned Jetpack Compose UI aligned with MosaicEarth Web and Desktop.
- **Drone microSD & gallery import**: added multi-photo/video Android Photo Picker import and full folder / drone `DCIM` microSD import via Storage Access Framework (`OPEN_DOCUMENT_TREE`) preserving EXIF GPS coordinates.
- **Free on-device Photogrammetry (`€0`)**: native C++17 + OpenCV NDK incremental SfM (RootSIFT, five-point RANSAC, Schur bundle adjustment, WGS84 ENU georeferencing), rectified semi-global dense matching, Poisson/heightfield `.glb` textured mesh, DSM `.tif` and true GeoTIFF orthophoto `.tif` with configurable quality presets.
- **Free on-device 3D Gaussian Splatting (`€0`)**: automated camera calibration + Brush Vulkan GPU training on phone, with Surfel `.ply` fallback on devices without Vulkan compute.
- **Zero-cost MyEarth upload & optional MosaicEarth Cloud**: chunked SHA-256 verified upload of locally reconstructed assets to MyEarth (`€0` processing fee, uses account storage quota only), alongside optional cloud GPU reconstruction quotes (`NodeODX` and `COLMAP + OpenSplat`).

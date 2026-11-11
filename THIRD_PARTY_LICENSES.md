# Third-Party Licenses

MosaicEarth Capture for Android is licensed under **GNU Affero General Public License v3.0 or later (`AGPL-3.0-or-later`)**; see [LICENSE](LICENSE).

The application integrates or links against the following open-source software components, which remain governed by their respective upstream licenses:

| Component | Upstream License | Role in MosaicEarth Capture | Upstream Source |
| --- | --- | --- | --- |
| OpenCV (`org.opencv:opencv:4.10.0`) | Apache-2.0 | Native C++ NDK image processing, feature extraction and geometry primitives for on-device SfM/MVS | https://github.com/opencv/opencv |
| Brush / Brush Android (`brush-aar-release.aar`) | Apache-2.0 | Optional Vulkan compute 3D Gaussian Splatting training engine (`:brush` isolated service process); license text bundled at `third_party/brush/assets/third-party/brush/LICENSE.txt` | https://github.com/ArthurBrussee/brush · https://github.com/SuleMareVientu/brush-android |
| Three.js (`0.170.0`) | MIT | Offline 3D mesh, point cloud and GeoTIFF terrain/orthophoto WebGL rendering; license text bundled at `app/src/main/assets/viewer/LICENSE-three.txt` | https://github.com/mrdoob/three.js |
| GaussianSplats3D (`0.4.7`) | MIT | Offline 3D Gaussian Splat renderer (`.ply`, `.splat`, `.spz`); license text bundled at `app/src/main/assets/viewer/LICENSE-gaussian-splats-3d.txt` | https://github.com/mkkellogg/GaussianSplats3D |
| AndroidX, CameraX, Jetpack Compose, Room, WorkManager, WebKit, DocumentFile, ExifInterface | Apache-2.0 | Android UI, camera burst & video capture, SAF storage access, SQLite persistence and background transfer scheduling | https://github.com/androidx/androidx |
| Kotlin Standard Library & Coroutines | Apache-2.0 | Application language runtime and structured concurrency | https://github.com/JetBrains/kotlin |
| OkHttp (`4.12.0`) | Apache-2.0 | HTTPS client for resumable chunked transfers and cloud API requests | https://github.com/square/okhttp |
| JUnit 4 & `org.json` | EPL-1.0 / Public-domain-equivalent JSON license | Test-only dependencies (`testImplementation`, not packaged in release APKs) | https://github.com/junit-team/junit4 |
| esbuild | MIT | Build-time bundler for `viewer-web/` (`devDependencies`, not packaged in release APKs) | https://github.com/evanw/esbuild |

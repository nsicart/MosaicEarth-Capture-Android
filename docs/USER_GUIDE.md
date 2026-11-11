# User Guide

## 1. Create a project and capture or import imagery

1. Tap **New Capture**, enter a project name and choose the scene preset (*Object / Sculpture*, *Facade / Room*, or *Terrain / Aerial*).
2. Open the **Capture** tab and choose your input source:
   - **Full-screen Burst Camera**: tap the camera preview card to open the dedicated rapid capture screen. Press the shutter as you move around the subject; capture is non-blocking and the top **Overlap bar** indicates whether your step size is *Ideal (65–85%)*, *Too small*, or *Too fast / low overlap*. Use **+ Pass** when changing elevation or orbit ring.
   - **Continuous Video (3DGS)**: record smooth, steady video around the scene and extract sharp keyframes in the **Review** tab.
   - **Import Gallery**: pick existing JPEG/PNG/HEIC photos or MP4/MOV videos via the Android Photo Picker.
   - **Drone microSD / Folder Import**: connect a microSD reader or select a drone `DCIM` directory to import an entire survey while preserving EXIF GPS coordinates.

## 2. Review coverage and sharpness

Open **Review** to inspect blur scores, deselect accidental motion-blurred frames, or extract frames from imported/recorded video at your chosen interval and maximum resolution.

## 3. Process locally (`€0`) or in MosaicEarth Cloud

Open **Process** and choose one of two workflows:

- **Local on Phone (`€0` · Offline)**:
  - **Photogrammetry**: select your quality preset (*Fast*, *Balanced*, or *Detailed*) and desired outputs (Point Cloud `.ply`, Textured 3D Mesh `.glb`, DSM `.tif`, GeoTIFF Orthophoto `.tif`).
  - **3D Gaussian Splatting**: calibrates camera poses automatically and trains a 3D Gaussian Splat `.ply` scene on your phone's Vulkan GPU via Brush.
- **MosaicEarth Cloud *(Optional)***:
  - Sign in to your MosaicEarth account, select a cloud engine (**NodeODX Photogrammetry** or **COLMAP + OpenSplat 3DGS**), review your included plan allowance or euro quote before confirmation, and upload raw captures with resumable chunk verification.

## 4. Inspect, export or upload to MyEarth

Open **Models** to view generated `.ply`, `.splat`, `.spz`, `.glb` and `.tif` outputs in the built-in 3D & GeoTIFF viewer:
- Drag with one finger to orbit; pinch and drag with two fingers to zoom and pan.
- Use **Center view** and **Flip axis** if an imported model uses a different up-axis convention.
- Tap **Upload to MyEarth (`€0`)** to synchronize any locally processed model to your private MosaicEarth Cloud workspace (uses your storage quota only, with zero processing charge), or tap **Export / Share** to save a local copy.

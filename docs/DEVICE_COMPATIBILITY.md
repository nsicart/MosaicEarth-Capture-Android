# Device Compatibility

## Minimum & Recommended Hardware

| Feature | Minimum | Recommended |
| --- | --- | --- |
| **CPU ABI** | `arm64-v8a` (64-bit ARM) | Modern 8-core ARMv8.2+ / ARMv9 SoC (Snapdragon 7/8 series, Tensor, Dimensity 8000/9000, Exynos 2200+) |
| **Android Version** | Android 12 (`API 31`) with Brush Vulkan AAR; Android 8.1 (`API 27`) without Brush AAR | Android 13–16 |
| **RAM** | 6 GB | 8 GB – 16 GB |
| **GPU for local 3DGS** | Vulkan 1.1+ with compute shader support (Adreno 640+, Mali-G78+, Immortalis, Xclipse) | Adreno 730+ / Immortalis-G715+ |

## Thermal & Battery Notes

- On-device Structure-from-Motion, dense stereo matching and Vulkan Gaussian training are compute-intensive. For datasets larger than 60–80 high-resolution photographs (such as large drone surveys imported from microSD), choose the **Fast / Balanced** resolution preset on mobile or upload raw imagery to **MosaicEarth Cloud** or **MosaicEarth Desktop**.
- Both `PhotogrammetryService` and `BrushTrainingService` run as Android Foreground Services so reconstruction continues reliably if the screen turns off during training.

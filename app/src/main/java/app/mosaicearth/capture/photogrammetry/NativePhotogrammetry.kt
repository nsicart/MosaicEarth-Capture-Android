package app.mosaicearth.capture.photogrammetry

import org.json.JSONObject

data class NativeReconstructionResult(
    val ok: Boolean,
    val message: String,
    val imagesTotal: Int,
    val imagesRegistered: Int,
    val sparsePoints: Int,
    val densePoints: Int,
    val meshTriangles: Int,
    val orthoWidth: Int,
    val orthoHeight: Int,
    val orthoGsdMetres: Double,
    val meanReprojError: Double,
    val scaleSource: String,
    val georeferenced: Boolean,
    val refLat: Double,
    val refLon: Double,
    val refAlt: Double,
    val hasPointCloud: Boolean,
    val hasMeshGlb: Boolean,
    val hasOrthophoto: Boolean,
    val hasDsm: Boolean,
    val hasColmapDataset: Boolean,
    val hasGaussianSplat: Boolean,
)

object NativePhotogrammetry {
    interface ProgressListener {
        fun onProgress(stage: String, fraction: Float): Boolean
    }

    private val loaded: Boolean by lazy {
        runCatching {
            System.loadLibrary("opencv_java4")
            System.loadLibrary("mosaicearth_photogrammetry")
            true
        }.getOrElse { false }
    }

    fun isAvailable(): Boolean = loaded

    external fun buildInfo(): String

    external fun reconstruct(
        outputDir: String,
        imageRoot: String,
        imagePaths: Array<String>,
        imageWidths: IntArray,
        imageHeights: IntArray,
        focalPx: DoubleArray,
        latitudes: DoubleArray,
        longitudes: DoubleArray,
        altitudes: DoubleArray,
        hasGps: BooleanArray,
        featureMaxSide: Int,
        maxFeatures: Int,
        matchWindow: Int,
        dense: Boolean,
        denseMaxSide: Int,
        maxDenseImages: Int,
        exportPointCloud: Boolean,
        exportMesh: Boolean,
        exportOrthophoto: Boolean,
        exportDsm: Boolean,
        exportUndistortedColmap: Boolean,
        exportGaussianSplatFallback: Boolean,
        aerialScene: Boolean,
        meshTextureSize: Int,
        orthophotoGsdMetres: Double,
        hasFallbackGps: Boolean,
        fallbackLat: Double,
        fallbackLon: Double,
        fallbackAlt: Double,
        progressListener: ProgressListener?,
    ): String

    fun parseResult(rawJson: String): NativeReconstructionResult {
        val j = JSONObject(rawJson)
        return NativeReconstructionResult(
            ok = j.optBoolean("ok", false),
            message = j.optString("message", ""),
            imagesTotal = j.optInt("imagesTotal", 0),
            imagesRegistered = j.optInt("imagesRegistered", 0),
            sparsePoints = j.optInt("sparsePoints", 0),
            densePoints = j.optInt("densePoints", 0),
            meshTriangles = j.optInt("meshTriangles", 0),
            orthoWidth = j.optInt("orthoWidth", 0),
            orthoHeight = j.optInt("orthoHeight", 0),
            orthoGsdMetres = j.optDouble("orthoGsdMetres", 0.0),
            meanReprojError = j.optDouble("meanReprojError", 0.0),
            scaleSource = j.optString("scaleSource", "none"),
            georeferenced = j.optBoolean("georeferenced", false),
            refLat = j.optDouble("refLat", 0.0),
            refLon = j.optDouble("refLon", 0.0),
            refAlt = j.optDouble("refAlt", 0.0),
            hasPointCloud = j.optBoolean("hasPointCloud", false),
            hasMeshGlb = j.optBoolean("hasMeshGlb", false),
            hasOrthophoto = j.optBoolean("hasOrthophoto", false),
            hasDsm = j.optBoolean("hasDsm", false),
            hasColmapDataset = j.optBoolean("hasColmapDataset", false),
            hasGaussianSplat = j.optBoolean("hasGaussianSplat", false),
        )
    }
}

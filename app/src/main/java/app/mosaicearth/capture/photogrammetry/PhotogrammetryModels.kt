package app.mosaicearth.capture.photogrammetry

import android.content.Context
import android.content.Intent
import android.util.AtomicFile
import androidx.core.content.ContextCompat
import org.json.JSONObject
import java.io.File
import java.util.UUID

enum class PhotogrammetryQuality(
    val label: String,
    val featureMaxSide: Int,
    val maxFeatures: Int,
    val denseMaxSide: Int,
    val maxDenseImages: Int,
) {
    FAST("Ràpid (Camp)", 1024, 2400, 640, 24),
    BALANCED("Equilibrat", 1600, 4000, 960, 48),
    HIGH("Alta qualitat", 2048, 6000, 1280, 72),
}

enum class PointDensity(val label: String, val denseScale: Double) {
    LOW("Baixa", 0.72),
    MEDIUM("Mitjana", 1.0),
    HIGH("Alta", 1.28),
}

data class PhotogrammetryOptions(
    val exportPointCloud: Boolean = true,
    val exportMesh: Boolean = true,
    val exportOrthophoto: Boolean = false,
    val exportDsm: Boolean = false,
    val aerialScene: Boolean = false,
    val quality: PhotogrammetryQuality = PhotogrammetryQuality.BALANCED,
    val maxImageSize: Int = 1600,
    val pointDensity: PointDensity = PointDensity.MEDIUM,
    val meshTextureSize: Int = 2048,
    val orthophotoGsdCm: Int = 0, // 0 = Auto, 2, 5, 10 cm/px
) {
    fun toJson(): JSONObject = JSONObject()
        .put("exportPointCloud", exportPointCloud)
        .put("exportMesh", exportMesh)
        .put("exportOrthophoto", exportOrthophoto)
        .put("exportDsm", exportDsm)
        .put("aerialScene", aerialScene)
        .put("quality", quality.name)
        .put("maxImageSize", maxImageSize)
        .put("pointDensity", pointDensity.name)
        .put("meshTextureSize", meshTextureSize)
        .put("orthophotoGsdCm", orthophotoGsdCm)

    companion object {
        fun fromJson(j: JSONObject): PhotogrammetryOptions = PhotogrammetryOptions(
            exportPointCloud = j.optBoolean("exportPointCloud", true),
            exportMesh = j.optBoolean("exportMesh", true),
            exportOrthophoto = j.optBoolean("exportOrthophoto", false),
            exportDsm = j.optBoolean("exportDsm", false),
            aerialScene = j.optBoolean("aerialScene", false),
            quality = runCatching { PhotogrammetryQuality.valueOf(j.optString("quality", "BALANCED")) }
                .getOrDefault(PhotogrammetryQuality.BALANCED),
            maxImageSize = j.optInt("maxImageSize", 1600),
            pointDensity = runCatching { PointDensity.valueOf(j.optString("pointDensity", "MEDIUM")) }
                .getOrDefault(PointDensity.MEDIUM),
            meshTextureSize = j.optInt("meshTextureSize", 2048),
            orthophotoGsdCm = j.optInt("orthophotoGsdCm", 0),
        )
    }
}

data class GaussianLocalOptions(
    val iterations: Int = 1500,
    val maxSplats: Int = 100_000,
    val maxResolution: Int = 960,
    val preferVulkanTrainer: Boolean = true,
) {
    fun toJson(): JSONObject = JSONObject()
        .put("iterations", iterations)
        .put("maxSplats", maxSplats)
        .put("maxResolution", maxResolution)
        .put("preferVulkanTrainer", preferVulkanTrainer)

    companion object {
        fun fromJson(j: JSONObject): GaussianLocalOptions = GaussianLocalOptions(
            iterations = j.optInt("iterations", 1500).coerceIn(300, 6000),
            maxSplats = j.optInt("maxSplats", 100_000).coerceIn(10_000, 500_000),
            maxResolution = j.optInt("maxResolution", 960).coerceIn(480, 1600),
            preferVulkanTrainer = j.optBoolean("preferVulkanTrainer", true),
        )
    }
}

data class PhotogrammetryRunStatus(
    val id: String,
    val mode: String, // "photogrammetry" or "gaussian"
    val stage: String,
    val percent: Int,
    val active: Boolean,
    val updated: Long,
)

class PhotogrammetryRuns(private val context: Context) {
    private fun root(projectId: String): File =
        File(context.filesDir, "photogrammetry/${UUID.fromString(projectId)}").apply { mkdirs() }

    fun workDir(projectId: String, runId: String): File =
        File(root(projectId), UUID.fromString(runId).toString()).apply { mkdirs() }

    fun latest(projectId: String): PhotogrammetryRunStatus? {
        val j = read(File(root(projectId), "status.json")) ?: return null
        return PhotogrammetryRunStatus(
            id = j.optString("id", ""),
            mode = j.optString("mode", "photogrammetry"),
            stage = j.optString("stage", ""),
            percent = j.optInt("percent", 0),
            active = j.optBoolean("active", false),
            updated = j.optLong("updated", 0L),
        )
    }

    fun update(projectId: String, runId: String, mode: String, stage: String, percent: Int, active: Boolean) {
        val j = JSONObject()
            .put("id", runId)
            .put("mode", mode)
            .put("stage", stage)
            .put("percent", percent.coerceIn(0, 100))
            .put("active", active)
            .put("updated", System.currentTimeMillis())
        write(File(root(projectId), "status.json"), j)
    }

    fun startPhotogrammetry(projectId: String, options: PhotogrammetryOptions): String {
        val runId = UUID.randomUUID().toString()
        val dir = workDir(projectId, runId)
        write(File(dir, "options.json"), options.toJson())
        update(projectId, runId, "photogrammetry", "Iniciant fotogrametria local…", 1, true)
        ContextCompat.startForegroundService(
            context,
            Intent(context, PhotogrammetryService::class.java)
                .putExtra("project", projectId)
                .putExtra("run", runId)
                .putExtra("mode", "photogrammetry")
        )
        return runId
    }

    fun startLocalGaussianFromCaptures(projectId: String, options: GaussianLocalOptions): String {
        val runId = UUID.randomUUID().toString()
        val dir = workDir(projectId, runId)
        write(File(dir, "gaussian_options.json"), options.toJson())
        update(projectId, runId, "gaussian", "Calibrant càmeres SfM per a Gaussian Splatting…", 1, true)
        ContextCompat.startForegroundService(
            context,
            Intent(context, PhotogrammetryService::class.java)
                .putExtra("project", projectId)
                .putExtra("run", runId)
                .putExtra("mode", "gaussian")
        )
        return runId
    }

    fun cancel(projectId: String, runId: String) {
        context.startService(
            Intent(context, PhotogrammetryService::class.java)
                .setAction("cancel")
                .putExtra("project", projectId)
                .putExtra("run", runId)
        )
    }

    internal fun readOptions(projectId: String, runId: String): PhotogrammetryOptions {
        val j = read(File(workDir(projectId, runId), "options.json")) ?: JSONObject()
        return PhotogrammetryOptions.fromJson(j)
    }

    internal fun readGaussianOptions(projectId: String, runId: String): GaussianLocalOptions {
        val j = read(File(workDir(projectId, runId), "gaussian_options.json")) ?: JSONObject()
        return GaussianLocalOptions.fromJson(j)
    }

    private fun read(file: File): JSONObject? = runCatching {
        JSONObject(AtomicFile(file).readFully().toString(Charsets.UTF_8))
    }.getOrNull()

    private fun write(file: File, json: JSONObject) {
        val atomic = AtomicFile(file)
        val stream = atomic.startWrite()
        try {
            stream.write(json.toString().toByteArray(Charsets.UTF_8))
            atomic.finishWrite(stream)
        } catch (error: Exception) {
            atomic.failWrite(stream)
            throw error
        }
    }
}

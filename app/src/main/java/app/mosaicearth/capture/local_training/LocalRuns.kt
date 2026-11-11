package app.mosaicearth.capture.local_training

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.util.AtomicFile
import androidx.core.content.ContextCompat
import app.mosaicearth.capture.BuildConfig
import app.mosaicearth.capture.viewer.copyBoundedTo
import org.json.JSONObject
import java.io.File
import java.util.UUID
import java.util.zip.ZipFile

private const val MIB = 1024L * 1024L
private const val ARCHIVE_LIMIT = 256 * MIB
private const val UNPACKED_LIMIT = 768 * MIB

data class LocalRun(
    val id: String,
    val stage: String,
    val iteration: Int,
    val totalIterations: Int = BRUSH_ITERATIONS,
    val updated: Long
) {
    val active: Boolean get() = stage in listOf("Preparat", "Carregant el conjunt", "Entrenant")
}

class LocalRuns(private val context: Context) {
    fun latest(project: String): LocalRun? {
        val id = read(File(root(project), "latest.json"))?.optString("id") ?: return null
        return status(project, id)
    }

    fun status(project: String, id: String): LocalRun? {
        val record = read(File(directory(project, id), "status.json")) ?: return null
        val cfg = read(File(directory(project, id), "config.json"))
        val total = cfg?.optInt("iterations", BRUSH_ITERATIONS) ?: BRUSH_ITERATIONS
        return LocalRun(id, record.getString("stage"), record.getInt("iteration"), total, record.getLong("updated"))
    }

    fun update(project: String, id: String, stage: String, iteration: Int) {
        val record = JSONObject()
            .put("stage", stage)
            .put("iteration", iteration)
            .put("updated", System.currentTimeMillis())
        write(File(directory(project, id), "status.json"), record)
    }

    fun directory(project: String, id: String): File = File(root(project), UUID.fromString(id).toString())
    fun lockFile() = File(context.filesDir, "brush-process.lock")

    fun prepare(
        project: String,
        source: Uri,
        iterations: Int = BRUSH_ITERATIONS,
        maxSplats: Int = 100_000,
        maxResolution: Int = 960
    ): String {
        verifyBudget(context, initial = true)
        val id = UUID.randomUUID().toString()
        val folder = directory(project, id).apply { mkdirs() }
        val dataset = File(folder, "dataset.zip")
        try {
            checkNotNull(context.contentResolver.openInputStream(source)).use { it.copyBoundedTo(dataset, ARCHIVE_LIMIT) }
            validateArchive(dataset)
            write(
                File(folder, "config.json"),
                JSONObject()
                    .put("iterations", iterations)
                    .put("maxSplats", maxSplats)
                    .put("maxResolution", maxResolution)
            )
            update(project, id, "Preparat", 0)
            write(File(root(project), "latest.json"), JSONObject().put("id", id))
            return id
        } catch (error: Exception) {
            folder.deleteRecursively()
            throw error
        }
    }

    fun prepareGeneratedDataset(
        project: String,
        sourceZip: File,
        iterations: Int,
        maxSplats: Int,
        maxResolution: Int,
        latitude: Double? = null,
        longitude: Double? = null,
        altitude: Double? = null,
    ): String {
        verifyBudget(context, initial = true)
        val id = UUID.randomUUID().toString()
        val folder = directory(project, id).apply { mkdirs() }
        val dataset = File(folder, "dataset.zip")
        try {
            sourceZip.copyTo(dataset, overwrite = true)
            validateArchive(dataset)
            val cfg = JSONObject()
                .put("iterations", iterations)
                .put("maxSplats", maxSplats)
                .put("maxResolution", maxResolution)
            if (latitude != null && longitude != null) {
                cfg.put("latitude", latitude).put("longitude", longitude)
                if (altitude != null) cfg.put("altitude", altitude)
            }
            write(File(folder, "config.json"), cfg)
            update(project, id, "Preparat", 0)
            write(File(root(project), "latest.json"), JSONObject().put("id", id))
            return id
        } catch (error: Exception) {
            folder.deleteRecursively()
            throw error
        }
    }

    internal fun readConfig(project: String, id: String): JSONObject? =
        read(File(directory(project, id), "config.json"))

    fun start(project: String, run: String) = ContextCompat.startForegroundService(
        context,
        Intent(context, BrushTrainingService::class.java).putExtra("project", project).putExtra("run", run)
    )

    fun cancel(project: String, run: String) {
        context.startService(
            Intent(context, BrushTrainingService::class.java)
                .setAction("cancel")
                .putExtra("project", project)
                .putExtra("run", run)
        )
    }

    private fun root(project: String) = File(context.filesDir, "brush/${UUID.fromString(project)}")

    private fun read(file: File): JSONObject? = runCatching {
        JSONObject(AtomicFile(file).readFully().toString(Charsets.UTF_8))
    }.getOrNull()

    private fun write(file: File, json: JSONObject) {
        file.parentFile?.mkdirs()
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

internal fun canStartBrushVulkan(context: Context): Boolean {
    val device = inspectDevice(context)
    return BuildConfig.BRUSH_ENABLED &&
        Build.VERSION.SDK_INT >= 31 &&
        device.abi == "arm64-v8a" &&
        device.vulkanReported &&
        device.availableMemory >= 1536 * MIB &&
        device.availableStorage >= 512 * MIB &&
        (device.battery ?: 100) >= 15 &&
        (device.thermal ?: 0) < 3
}

internal fun verifyBudget(context: Context, initial: Boolean) {
    val device = inspectDevice(context)
    check(BuildConfig.BRUSH_ENABLED && Build.VERSION.SDK_INT >= 31 && device.abi == "arm64-v8a" && device.vulkanReported) {
        "Cal un dispositiu Android 12+ ARM64 amb Vulkan per al motor GPU Brush."
    }
    check(device.availableMemory >= (if (initial) 1536 else 256) * MIB) { "Memòria RAM disponible insuficient." }
    check(device.availableStorage >= (if (initial) 512 else 128) * MIB) { "Espai d’emmagatzematge lliure insuficient." }
    check((device.battery ?: 100) >= if (initial) 15 else 10) { "Bateria massa baixa per entrenar." }
    check((device.thermal ?: 0) < 3) { "Dispositiu massa calent per entrenar." }
}

internal fun validateArchive(file: File) {
    require(file.length() in 1..ARCHIVE_LIMIT) { "ZIP fora del pressupost de 256 MiB." }
    ZipFile(file).use { zip ->
        var total = 0L
        var images = 0
        val names = mutableSetOf<String>()
        for (entry in zip.entries()) {
            if (entry.isDirectory) continue
            val name = entry.name.trimEnd('/')
            require(name.isNotBlank() && name.split('/').none { it in listOf("", ".", "..") } && '\\' !in name) {
                "Ruta ZIP invàlida."
            }
            require(names.add(name) && names.size <= 1024 && entry.size in 0..UNPACKED_LIMIT) { "Índex ZIP invàlid." }
            total += entry.size
            require(total <= UNPACKED_LIMIT) { "ZIP descomprimit massa gran." }
            if (name.endsWith(".jpg", true) || name.endsWith(".jpeg", true) || name.endsWith(".png", true)) images++
        }
        val basenames = names.map { it.substringAfterLast('/') }.toSet()
        val posed = "transforms.json" in basenames || "transforms_train.json" in basenames ||
            listOf("bin", "txt").any { "cameras.$it" in basenames && "images.$it" in basenames }
        require(posed && images in 2..250) { "Cal un ZIP COLMAP o Nerfstudio amb entre 2 i 250 imatges calibrades." }
    }
}

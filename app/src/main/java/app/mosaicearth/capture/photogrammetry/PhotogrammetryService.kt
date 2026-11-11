package app.mosaicearth.capture.photogrammetry

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.IBinder
import androidx.core.content.ContextCompat
import app.mosaicearth.capture.BuildConfig
import app.mosaicearth.capture.CaptureApp
import app.mosaicearth.capture.local_training.LocalRuns
import app.mosaicearth.capture.local_training.canStartBrushVulkan
import app.mosaicearth.capture.projects.CaptureMedia
import app.mosaicearth.capture.projects.Model
import app.mosaicearth.capture.projects.Project
import app.mosaicearth.capture.viewer.ModelFiles
import kotlinx.coroutines.*
import java.io.File
import java.util.UUID
import java.util.concurrent.atomic.AtomicBoolean
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream

class PhotogrammetryService : Service() {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default)
    private lateinit var runs: PhotogrammetryRuns
    private var activeProject: String? = null
    private var activeRun: String? = null
    private var activeMode: String = "photogrammetry"
    private val cancelled = AtomicBoolean(false)

    override fun onCreate() {
        super.onCreate()
        runs = PhotogrammetryRuns(this)
    }

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val projectId = intent?.getStringExtra("project")
        val runId = intent?.getStringExtra("run")
        val mode = intent?.getStringExtra("mode") ?: "photogrammetry"
        if (intent?.action == "cancel") {
            if (projectId == activeProject && runId == activeRun) {
                cancelled.set(true)
            } else if (activeRun == null) {
                stopSelf()
            }
            return START_NOT_STICKY
        }
        if (projectId == null || runId == null) {
            stopSelf()
            return START_NOT_STICKY
        }
        if (activeRun != null) {
            if (runId != activeRun) {
                runs.update(projectId, runId, mode, "Ja hi ha una reconstrucció local en curs.", 0, false)
            }
            return START_NOT_STICKY
        }
        activeProject = projectId
        activeRun = runId
        activeMode = mode
        cancelled.set(false)
        startForeground(612, buildNotification(projectId, runId, "Preparant imatges…", 1))
        scope.launch {
            executeRun(projectId, runId, mode)
        }
        return START_NOT_STICKY
    }

    private suspend fun executeRun(projectId: String, runId: String, mode: String) {
        val app = application as CaptureApp
        val workDir = runs.workDir(projectId, runId)
        try {
            check(NativePhotogrammetry.isAvailable()) {
                "El motor natiu C++ OpenCV de fotogrametria no s’ha pogut carregar en aquest dispositiu."
            }
            val dao = app.database.projects()
            val project = checkNotNull(dao.projectById(projectId)) { "Projecte no trobat." }
            val selected = dao.selectedPhotos(projectId).filter { app.storage.file(it).isFile }
            require(selected.size >= 3) { "Selecciona com a mínim 3 fotografies per iniciar la reconstrucció." }

            if (mode == "gaussian") {
                runGaussianFromCaptures(app, project, selected, runId, workDir)
            } else {
                val options = runs.readOptions(projectId, runId)
                runPhotogrammetryPipeline(app, project, selected, runId, workDir, options)
            }
        } catch (error: CancellationException) {
            runs.update(projectId, runId, mode, "Reconstrucció cancel·lada.", 0, false)
            throw error
        } catch (error: Exception) {
            val msg = if (cancelled.get()) "Reconstrucció cancel·lada."
            else (error.message?.take(180) ?: "Error durant la reconstrucció local.")
            runs.update(projectId, runId, mode, msg, 0, false)
        } finally {
            runCatching { workDir.deleteRecursively() }
            activeProject = null
            activeRun = null
            stopForeground(STOP_FOREGROUND_REMOVE)
            stopSelf()
        }
    }

    private suspend fun runPhotogrammetryPipeline(
        app: CaptureApp,
        project: Project,
        photos: List<CaptureMedia>,
        runId: String,
        workDir: File,
        options: PhotogrammetryOptions,
    ) {
        val inputs = prepareCameraInputs(app, photos)
        val denseMaxSide = (options.quality.denseMaxSide * options.pointDensity.denseScale).toInt().coerceIn(480, 1600)
        val maxSide = minOf(options.maxImageSize, options.quality.featureMaxSide).coerceIn(720, 2400)
        val gsdMetres = if (options.orthophotoGsdCm > 0) options.orthophotoGsdCm / 100.0 else 0.0
        val hasFallbackGps = project.latitude != null && project.longitude != null

        val rawJson = NativePhotogrammetry.reconstruct(
            outputDir = workDir.absolutePath,
            imageRoot = workDir.absolutePath,
            imagePaths = inputs.paths,
            imageWidths = inputs.widths,
            imageHeights = inputs.heights,
            focalPx = inputs.focals,
            latitudes = inputs.lats,
            longitudes = inputs.lons,
            altitudes = inputs.alts,
            hasGps = inputs.hasGps,
            featureMaxSide = maxSide,
            maxFeatures = options.quality.maxFeatures,
            matchWindow = if (options.aerialScene) 16 else 12,
            dense = true,
            denseMaxSide = denseMaxSide,
            maxDenseImages = options.quality.maxDenseImages,
            exportPointCloud = options.exportPointCloud,
            exportMesh = options.exportMesh,
            exportOrthophoto = options.exportOrthophoto,
            exportDsm = options.exportDsm,
            exportUndistortedColmap = false,
            exportGaussianSplatFallback = false,
            aerialScene = options.aerialScene,
            meshTextureSize = options.meshTextureSize,
            orthophotoGsdMetres = gsdMetres,
            hasFallbackGps = hasFallbackGps,
            fallbackLat = project.latitude ?: 0.0,
            fallbackLon = project.longitude ?: 0.0,
            fallbackAlt = 0.0,
            progressListener = object : NativePhotogrammetry.ProgressListener {
                override fun onProgress(stage: String, fraction: Float): Boolean {
                    if (cancelled.get()) return false
                    val pct = (fraction * 95f).toInt().coerceIn(1, 95)
                    runs.update(project.id, runId, "photogrammetry", stage, pct, true)
                    notifyProgress(project.id, runId, stage, pct)
                    return true
                }
            }
        )
        check(!cancelled.get()) { "Reconstrucció cancel·lada." }
        val res = NativePhotogrammetry.parseResult(rawJson)
        check(res.ok) { res.message.ifBlank { "No s’han pogut orientar les imatges." } }

        val refLat = res.refLat.takeIf { res.georeferenced } ?: project.latitude
        val refLon = res.refLon.takeIf { res.georeferenced } ?: project.longitude
        val refAlt = res.refAlt.takeIf { res.georeferenced }

        if (res.georeferenced && project.latitude == null && project.longitude == null) {
            app.database.projects().details(
                project.id,
                project.description,
                "EXIF_GPS",
                res.refLat,
                res.refLon,
                3.0f,
                System.currentTimeMillis()
            )
        }

        val savedLabels = mutableListOf<String>()
        val now = System.currentTimeMillis()

        if (res.hasPointCloud) {
            val ply = File(workDir, "point_cloud.ply")
            if (ply.isFile && ModelFiles.verifyAsset(ply, "ply", "pointcloud") > 0) {
                saveGeneratedModel(
                    app = app,
                    projectId = project.id,
                    source = ply,
                    preview = null,
                    name = "${project.title} · Núvol de punts (${res.densePoints} pts)",
                    extension = "ply",
                    role = "pointcloud",
                    lat = refLat,
                    lon = refLon,
                    alt = refAlt,
                    createdAt = now
                )
                savedLabels += "Núvol PLY"
            }
        }

        if (res.hasMeshGlb) {
            val glb = File(workDir, "textured_mesh.glb")
            if (glb.isFile && ModelFiles.verifyAsset(glb, "glb", "mesh") > 0) {
                saveGeneratedModel(
                    app = app,
                    projectId = project.id,
                    source = glb,
                    preview = null,
                    name = "${project.title} · Malla 3D (${res.meshTriangles} tris)",
                    extension = "glb",
                    role = "mesh",
                    lat = refLat,
                    lon = refLon,
                    alt = refAlt,
                    createdAt = now + 1
                )
                savedLabels += "Malla 3D GLB"
            }
        }

        if (res.hasOrthophoto) {
            val tif = File(workDir, "orthophoto.tif")
            val preview = File(workDir, "orthophoto.preview.png").takeIf { it.isFile }
            if (tif.isFile && ModelFiles.verifyAsset(tif, "tif", "orthophoto") > 0) {
                val gsdCmStr = if (res.orthoGsdMetres > 0) "%.1f cm/px".format(res.orthoGsdMetres * 100.0) else "GeoTIFF"
                saveGeneratedModel(
                    app = app,
                    projectId = project.id,
                    source = tif,
                    preview = preview,
                    name = "${project.title} · Ortofoto ($gsdCmStr)",
                    extension = "tif",
                    role = "orthophoto",
                    lat = refLat,
                    lon = refLon,
                    alt = refAlt,
                    createdAt = now + 2
                )
                savedLabels += "Ortofoto GeoTIFF"
            }
        }

        if (res.hasDsm) {
            val tif = File(workDir, "dsm.tif")
            val preview = File(workDir, "dsm.preview.png").takeIf { it.isFile }
            if (tif.isFile && ModelFiles.verifyAsset(tif, "tif", "dsm") > 0) {
                saveGeneratedModel(
                    app = app,
                    projectId = project.id,
                    source = tif,
                    preview = preview,
                    name = "${project.title} · Model d’Elevació MDS",
                    extension = "tif",
                    role = "dsm",
                    lat = refLat,
                    lon = refLon,
                    alt = refAlt,
                    createdAt = now + 3
                )
                savedLabels += "MDS GeoTIFF"
            }
        }

        check(savedLabels.isNotEmpty()) { "La reconstrucció ha finalitzat però no s’ha generat cap producte." }
        runs.update(
            project.id,
            runId,
            "photogrammetry",
            "Completat (${res.imagesRegistered}/${res.imagesTotal} càmeres): ${savedLabels.joinToString(", ")}",
            100,
            false
        )
    }

    private suspend fun runGaussianFromCaptures(
        app: CaptureApp,
        project: Project,
        photos: List<CaptureMedia>,
        runId: String,
        workDir: File,
    ) {
        val gsOpts = runs.readGaussianOptions(project.id, runId)
        val useVulkanBrush = gsOpts.preferVulkanTrainer && BuildConfig.BRUSH_ENABLED && canStartBrushVulkan(this)
        val inputs = prepareCameraInputs(app, photos)
        val hasFallbackGps = project.latitude != null && project.longitude != null

        val rawJson = NativePhotogrammetry.reconstruct(
            outputDir = workDir.absolutePath,
            imageRoot = workDir.absolutePath,
            imagePaths = inputs.paths,
            imageWidths = inputs.widths,
            imageHeights = inputs.heights,
            focalPx = inputs.focals,
            latitudes = inputs.lats,
            longitudes = inputs.lons,
            altitudes = inputs.alts,
            hasGps = inputs.hasGps,
            featureMaxSide = maxOf(1024, gsOpts.maxResolution),
            maxFeatures = 4000,
            matchWindow = if (project.scene.isAerialDefault) 16 else 12,
            dense = !useVulkanBrush,
            denseMaxSide = gsOpts.maxResolution.coerceIn(640, 1280),
            maxDenseImages = 48,
            exportPointCloud = false,
            exportMesh = false,
            exportOrthophoto = false,
            exportDsm = false,
            exportUndistortedColmap = useVulkanBrush,
            exportGaussianSplatFallback = !useVulkanBrush,
            aerialScene = project.scene.isAerialDefault,
            meshTextureSize = 1024,
            orthophotoGsdMetres = 0.0,
            hasFallbackGps = hasFallbackGps,
            fallbackLat = project.latitude ?: 0.0,
            fallbackLon = project.longitude ?: 0.0,
            fallbackAlt = 0.0,
            progressListener = object : NativePhotogrammetry.ProgressListener {
                override fun onProgress(stage: String, fraction: Float): Boolean {
                    if (cancelled.get()) return false
                    val pct = (fraction * 90f).toInt().coerceIn(1, 90)
                    runs.update(project.id, runId, "gaussian", stage, pct, true)
                    notifyProgress(project.id, runId, stage, pct)
                    return true
                }
            }
        )
        check(!cancelled.get()) { "Reconstrucció cancel·lada." }
        val res = NativePhotogrammetry.parseResult(rawJson)
        check(res.ok) { res.message.ifBlank { "No s’han pogut calibrar les càmeres per a Gaussian Splatting." } }

        val refLat = res.refLat.takeIf { res.georeferenced } ?: project.latitude
        val refLon = res.refLon.takeIf { res.georeferenced } ?: project.longitude
        val refAlt = res.refAlt.takeIf { res.georeferenced }

        if (useVulkanBrush && res.hasColmapDataset) {
            val colmapDir = File(workDir, "colmap_undistorted")
            val zipFile = File(workDir, "colmap_posed.zip")
            zipDirectory(colmapDir, zipFile)
            val localRuns = LocalRuns(this)
            val brushRunId = localRuns.prepareGeneratedDataset(
                project = project.id,
                sourceZip = zipFile,
                iterations = gsOpts.iterations,
                maxSplats = gsOpts.maxSplats,
                maxResolution = gsOpts.maxResolution,
                latitude = refLat,
                longitude = refLon,
                altitude = refAlt
            )
            withContext(Dispatchers.Main) {
                localRuns.start(project.id, brushRunId)
            }
            runs.update(
                project.id,
                runId,
                "gaussian",
                "Poses calibrades (${res.imagesRegistered}/${res.imagesTotal}). Entrenant 3DGS amb GPU Vulkan…",
                100,
                false
            )
            return
        }

        val splatPly = File(workDir, "gaussian_splat.ply")
        check(res.hasGaussianSplat && splatPly.isFile) { "No s’ha pogut generar el model Gaussian Splat PLY." }
        val splatCount = ModelFiles.verify(splatPly, "ply")
        saveGeneratedModel(
            app = app,
            projectId = project.id,
            source = splatPly,
            preview = null,
            name = "${project.title} · Gaussian Splat ($splatCount splats)",
            extension = "ply",
            role = "gaussian",
            lat = refLat,
            lon = refLon,
            alt = refAlt,
            createdAt = System.currentTimeMillis()
        )
        runs.update(
            project.id,
            runId,
            "gaussian",
            "Gaussian Splat generat localment ($splatCount splats).",
            100,
            false
        )
    }

    private suspend fun saveGeneratedModel(
        app: CaptureApp,
        projectId: String,
        source: File,
        preview: File?,
        name: String,
        extension: String,
        role: String,
        lat: Double?,
        lon: Double?,
        alt: Double?,
        createdAt: Long,
    ) {
        val model = Model(
            id = UUID.randomUUID().toString(),
            projectId = projectId,
            name = name,
            extension = extension,
            owner = null,
            bytes = source.length(),
            createdAt = createdAt,
            role = role,
            latitude = lat,
            longitude = lon,
            altitude = alt
        )
        val dest = app.storage.file(model)
        if (!source.renameTo(dest)) {
            source.copyTo(dest, overwrite = true)
            source.delete()
        }
        if (preview != null && preview.isFile) {
            val prevDest = app.storage.previewFile(model)
            if (!preview.renameTo(prevDest)) {
                preview.copyTo(prevDest, overwrite = true)
            }
        }
        app.database.projects().insert(model)
    }

    private class CameraInputs(
        val paths: Array<String>,
        val widths: IntArray,
        val heights: IntArray,
        val focals: DoubleArray,
        val lats: DoubleArray,
        val lons: DoubleArray,
        val alts: DoubleArray,
        val hasGps: BooleanArray,
    )

    private fun prepareCameraInputs(app: CaptureApp, photos: List<CaptureMedia>): CameraInputs {
        val n = photos.size
        val paths = Array(n) { "" }
        val widths = IntArray(n)
        val heights = IntArray(n)
        val focals = DoubleArray(n)
        val lats = DoubleArray(n)
        val lons = DoubleArray(n)
        val alts = DoubleArray(n)
        val hasGps = BooleanArray(n)

        for ((i, p) in photos.withIndex()) {
            val f = app.storage.file(p)
            paths[i] = f.absolutePath
            val w = p.width ?: 1920
            val h = p.height ?: 1080
            widths[i] = w
            heights[i] = h
            val maxDim = maxOf(w, h).toDouble()
            focals[i] = when {
                p.focalLength35mm != null && p.focalLength35mm > 0 -> maxDim * (p.focalLength35mm.toDouble() / 36.0)
                p.focalLengthMm != null && p.focalLengthMm > 0.5 -> {
                    // Typical smartphone/drone 1/1.3" - 1/2.3" sensor width ~6.4 mm when 35mm equiv is absent
                    (maxDim * (p.focalLengthMm / 6.4)).coerceIn(0.45 * maxDim, 2.5 * maxDim)
                }
                else -> 0.82 * maxDim
            }
            val lat = p.gpsLatitude
            val lon = p.gpsLongitude
            if (lat != null && lon != null) {
                hasGps[i] = true
                lats[i] = lat
                lons[i] = lon
                alts[i] = p.gpsAltitude ?: 0.0
            }
        }
        return CameraInputs(paths, widths, heights, focals, lats, lons, alts, hasGps)
    }

    private fun zipDirectory(root: File, outZip: File) {
        ZipOutputStream(outZip.outputStream().buffered()).use { zos ->
            root.walkTopDown().filter { it.isFile }.forEach { file ->
                val rel = file.relativeTo(root).invariantSeparatorsPath
                zos.putNextEntry(ZipEntry(rel))
                file.inputStream().buffered().use { it.copyTo(zos) }
                zos.closeEntry()
            }
        }
    }

    private fun notifyProgress(projectId: String, runId: String, stage: String, percent: Int) {
        if (Build.VERSION.SDK_INT < 33 || ContextCompat.checkSelfPermission(
                this,
                android.Manifest.permission.POST_NOTIFICATIONS
            ) == PackageManager.PERMISSION_GRANTED
        ) {
            getSystemService(NotificationManager::class.java)
                .notify(612, buildNotification(projectId, runId, stage, percent))
        }
    }

    private fun buildNotification(projectId: String, runId: String, stage: String, percent: Int): Notification {
        val nm = getSystemService(NotificationManager::class.java)
        nm.createNotificationChannel(
            NotificationChannel(
                "photogrammetry",
                "Reconstrucció 3D local",
                NotificationManager.IMPORTANCE_LOW
            )
        )
        val cancelIntent = PendingIntent.getService(
            this,
            1,
            Intent(this, javaClass)
                .setAction("cancel")
                .putExtra("project", projectId)
                .putExtra("run", runId),
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )
        val title = if (activeMode == "gaussian") "Gaussian Splatting local" else "Fotogrametria local"
        return Notification.Builder(this, "photogrammetry")
            .setSmallIcon(android.R.drawable.stat_notify_sync)
            .setContentTitle(title)
            .setContentText("$stage ($percent%)")
            .setProgress(100, percent, percent <= 1)
            .setOngoing(true)
            .addAction(Notification.Action.Builder(null, "Cancel·la", cancelIntent).build())
            .build()
    }

    override fun onDestroy() {
        scope.cancel()
        super.onDestroy()
    }
}

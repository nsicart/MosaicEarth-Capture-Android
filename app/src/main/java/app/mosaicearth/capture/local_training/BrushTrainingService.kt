package app.mosaicearth.capture.local_training

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import android.os.IBinder
import android.os.Process
import android.os.SystemClock
import app.mosaicearth.capture.CaptureApp
import app.mosaicearth.capture.projects.Model
import app.mosaicearth.capture.viewer.ModelFiles
import kotlinx.coroutines.*
import org.json.JSONObject
import java.io.File
import java.io.RandomAccessFile
import java.lang.reflect.Proxy
import java.nio.channels.FileLock
import java.util.concurrent.atomic.AtomicInteger
import java.util.concurrent.atomic.AtomicLong

internal const val BRUSH_ITERATIONS = 1500

class BrushTrainingService : Service() {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Main.immediate)
    private lateinit var runs: LocalRuns
    private var project: String? = null
    private var run: String? = null
    private var totalIterations: Int = BRUSH_ITERATIONS
    private var lockFile: RandomAccessFile? = null
    private var lock: FileLock? = null
    private val progress = AtomicInteger(0)
    private val heartbeat = AtomicLong(0)
    private val finished = CompletableDeferred<Unit>()
    private var terminal = false

    override fun onCreate() {
        super.onCreate()
        runs = LocalRuns(this)
    }

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val projectId = intent?.getStringExtra("project")
        val runId = intent?.getStringExtra("run")
        if (intent?.action == "cancel") {
            if (projectId == project && runId == run && !terminal && projectId != null && runId != null) {
                finish(projectId, runId, "Cancel·lat")
            } else if (run == null) stopSelf()
            return START_NOT_STICKY
        }
        if (projectId == null || runId == null) {
            stopSelf()
            return START_NOT_STICKY
        }
        if (run != null) {
            if (runId != run) runs.update(projectId, runId, "Ja hi ha un entrenament actiu", 0)
            return START_NOT_STICKY
        }
        project = projectId
        run = runId
        totalIterations = runs.readConfig(projectId, runId)?.optInt("iterations", BRUSH_ITERATIONS) ?: BRUSH_ITERATIONS
        startForeground(611, notification(projectId, runId, 0))
        scope.launch { train(projectId, runId) }
        return START_NOT_STICKY
    }

    private suspend fun train(projectId: String, runId: String) {
        try {
            val folder = runs.directory(projectId, runId)
            val dataset = File(folder, "dataset.zip")
            val cfg = runs.readConfig(projectId, runId)
            lockFile = RandomAccessFile(runs.lockFile(), "rw")
            lock = lockFile?.channel?.tryLock()
            check(lock != null) { "Ja hi ha un entrenament actiu." }
            val started = SystemClock.elapsedRealtime()
            heartbeat.set(started)
            runs.update(projectId, runId, "Carregant el conjunt", 0)
            withContext(Dispatchers.IO) {
                verifyBudget(this@BrushTrainingService, initial = true)
                validateArchive(dataset)
                startBrush(dataset, folder, cfg)
            }
            while (!finished.isCompleted) {
                delay(2_000)
                val now = SystemClock.elapsedRealtime()
                check(now - started < 45 * 60_000L && now - heartbeat.get() < 180_000L) { "El motor ha deixat de respondre." }
                verifyBudget(this, initial = false)
                val step = progress.get()
                runs.update(projectId, runId, if (step == 0) "Carregant el conjunt" else "Entrenant", step)
                if (android.os.Build.VERSION.SDK_INT < 33 || androidx.core.content.ContextCompat.checkSelfPermission(
                        this, android.Manifest.permission.POST_NOTIFICATIONS
                    ) == android.content.pm.PackageManager.PERMISSION_GRANTED
                ) {
                    getSystemService(NotificationManager::class.java).notify(611, notification(projectId, runId, step))
                }
            }
            withContext(Dispatchers.IO) {
                val app = application as CaptureApp
                val ply = File(folder, "brush-result.ply")
                val splats = ModelFiles.verify(ply, "ply")
                val lat = cfg?.takeIf { it.has("latitude") }?.optDouble("latitude")?.takeIf { it.isFinite() }
                val lon = cfg?.takeIf { it.has("longitude") }?.optDouble("longitude")?.takeIf { it.isFinite() }
                val alt = cfg?.takeIf { it.has("altitude") }?.optDouble("altitude")?.takeIf { it.isFinite() }
                val projTitle = app.database.projects().projectById(projectId)?.title ?: "Gaussian Splat"
                val model = Model(
                    id = runId,
                    projectId = projectId,
                    name = "$projTitle · Brush Vulkan ($splats splats)",
                    extension = "ply",
                    bytes = ply.length(),
                    createdAt = System.currentTimeMillis(),
                    role = "gaussian",
                    latitude = lat,
                    longitude = lon,
                    altitude = alt,
                )
                check(ply.renameTo(app.storage.file(model))) { "No s’ha pogut desar el PLY." }
                app.database.projects().insert(model)
                dataset.delete()
            }
            finish(projectId, runId, "Gaussian Splat desat ($totalIterations iteracions)")
        } catch (cancelled: CancellationException) {
            throw cancelled
        } catch (error: Exception) {
            finish(projectId, runId, error.message?.take(150) ?: "Entrenament interromput")
        } catch (_: LinkageError) {
            finish(projectId, runId, "La biblioteca nativa Brush no es pot carregar.")
        }
    }

    private fun startBrush(dataset: File, folder: File, cfg: JSONObject?) {
        val iterations = (cfg?.optInt("iterations", BRUSH_ITERATIONS) ?: BRUSH_ITERATIONS).coerceIn(300, 6000)
        val maxSplats = (cfg?.optInt("maxSplats", 100_000) ?: 100_000).coerceIn(10_000, 500_000)
        val maxRes = (cfg?.optInt("maxResolution", 960) ?: 960).coerceIn(480, 1600)
        totalIterations = iterations

        val loader = javaClass.classLoader
        val engine = Class.forName("com.splats.brush.BrushEngine", true, loader)
        val configType = Class.forName("com.splats.brush.BrushConfig", true, loader)
        val listener = Class.forName("com.splats.brush.BrushProgressListener", true, loader)
        val config = configType.getDeclaredConstructor().newInstance()
        configType.getMethod("setTotalTrainIters", Integer.TYPE).invoke(config, iterations)
        configType.getMethod("setMaxSplats", Integer.TYPE).invoke(config, maxSplats)
        configType.getMethod("setMaxResolution", Integer.TYPE).invoke(config, maxRes)
        configType.getMethod("setShDegree", Integer.TYPE).invoke(config, 1)
        configType.getMethod("setMaxSceneBatchCacheSize", String::class.java).invoke(config, "256MiB")
        configType.getMethod("setExportEvery", Integer.TYPE).invoke(config, iterations)
        configType.getMethod("setExportPath", String::class.java).invoke(config, folder.absolutePath)
        configType.getMethod("setExportName", String::class.java).invoke(config, "brush-result.ply")
        val callback = Proxy.newProxyInstance(loader, arrayOf(listener)) { _, method, args ->
            when (method.name) {
                "onProgress" -> {
                    progress.set(args[0] as Int)
                    heartbeat.set(SystemClock.elapsedRealtime())
                }
                "onTrainingComplete" -> finished.complete(Unit)
            }
            null
        }
        engine.getMethod("setProgressListener", listener).invoke(null, callback)
        engine.getMethod("start", android.content.Context::class.java, android.net.Uri::class.java, configType)
            .invoke(null, this, android.net.Uri.fromFile(dataset), config)
    }

    private fun notification(project: String, run: String, step: Int): Notification {
        getSystemService(NotificationManager::class.java).createNotificationChannel(
            NotificationChannel("brush", "Entrenament Brush 3DGS", NotificationManager.IMPORTANCE_LOW)
        )
        val cancel = PendingIntent.getService(
            this,
            0,
            Intent(this, javaClass).setAction("cancel").putExtra("project", project).putExtra("run", run),
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )
        return Notification.Builder(this, "brush")
            .setSmallIcon(android.R.drawable.stat_notify_sync)
            .setContentTitle("3D Gaussian Splatting local (GPU Vulkan)")
            .setContentText("$step / $totalIterations iteracions")
            .setProgress(totalIterations, step, step == 0)
            .setOngoing(true)
            .addAction(Notification.Action.Builder(null, "Cancel·la", cancel).build())
            .build()
    }

    private fun finish(project: String, run: String, status: String) {
        if (terminal) return
        terminal = true
        try {
            runs.update(project, run, status, progress.get())
            File(runs.directory(project, run), "dataset.zip").delete()
        } finally {
            stopForeground(STOP_FOREGROUND_REMOVE)
            Process.killProcess(Process.myPid())
        }
    }

    override fun onDestroy() {
        scope.cancel()
        lock?.close()
        lockFile?.close()
        super.onDestroy()
    }
}

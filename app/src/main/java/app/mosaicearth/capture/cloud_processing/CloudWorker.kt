package app.mosaicearth.capture.cloud_processing

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.content.pm.ServiceInfo
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.work.*
import app.mosaicearth.capture.CaptureApp
import app.mosaicearth.capture.authentication.Session
import app.mosaicearth.capture.projects.CaptureMedia
import app.mosaicearth.capture.projects.Model
import app.mosaicearth.capture.viewer.ModelFiles
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.io.IOException
import java.io.RandomAccessFile
import java.security.DigestInputStream
import java.security.MessageDigest
import java.util.Locale
import java.util.concurrent.TimeUnit

private const val CHUNK_BYTES = 2 * 1024 * 1024

class CloudWorker(context: Context, params: WorkerParameters) : CoroutineWorker(context, params) {
    private val app = context.applicationContext as CaptureApp
    private val jobs = app.database.jobs()

    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        val id = inputData.getString("job") ?: return@withContext Result.failure()
        val job = jobs.get(id) ?: return@withContext Result.failure()
        if (job.control == JobControl.DONE || job.control == JobControl.PAUSE) return@withContext Result.success()
        val api = app.cloud ?: return@withContext Result.failure()
        val session = currentSession(job) ?: return@withContext Result.success()
        try {
            val payload = JSONObject(job.payload)
            if (job.control == JobControl.CANCEL) {
                val result = api.cancelRequest(session, id)
                updateStatus(job, result)
                return@withContext if (result.getString("state") in terminal) done(id) else Result.retry()
            }
            val remote = job.remoteId ?: api.create(session, id, payload).getString("jobId").also { jobs.remote(id, it) }
            var response = api.status(session, remote)
            if (response.getString("state") == "UPLOADING") {
                setForeground(foreground(job))
                transfer(api, session, job, remote, payload.getJSONArray("files"))
                checkRunning(job)
                response = api.submit(session, remote, job.id)
            } else if (response.getString("state") == "AWAITING_PAYMENT") {
                // Re-attempt submit in case payment completed via Stripe webhook
                response = api.submit(session, remote, job.id)
            }
            updateStatus(job, response)
            when (response.getString("state")) {
                "AWAITING_PAYMENT" -> {
                    // Pause worker cleanly so user can open Stripe Checkout and tap "Ja he pagat"
                    jobs.control(id, JobControl.PAUSE)
                    Result.success()
                }
                "READY" -> {
                    checkRunning(job)
                    if (Build.VERSION.SDK_INT >= 34) setForeground(foreground(job))
                    download(api, session, job, remote, payload)
                    done(id)
                }
                "FAILED", "CANCELLED", "REJECTED" -> done(id)
                else -> Result.retry()
            }
        } catch (_: Stopped) {
            if (jobs.get(id)?.control == JobControl.CANCEL) Result.retry() else Result.success()
        } catch (cancelled: CancellationException) {
            throw cancelled
        } catch (error: ApiFailure) {
            when {
                error.code == 401 || error.code == 403 -> {
                    jobs.progress(id, "Sessió caducada o accés denegat. Torna a iniciar sessió.", job.percent, null)
                    Result.success()
                }
                error.retryable || error.code == 409 -> retry(job)
                else -> finishWithError(job, error.message.orEmpty())
            }
        } catch (_: IOException) {
            retry(job)
        } catch (e: IllegalStateException) {
            finishWithError(job, e.message ?: "Resposta cloud o dades locals invàlides.")
        } catch (e: IllegalArgumentException) {
            finishWithError(job, e.message ?: "Resposta cloud o dades locals invàlides.")
        } catch (_: org.json.JSONException) {
            finishWithError(job, "El servidor no compleix el contracte Capture v1.")
        }
    }

    private fun currentSession(job: CloudJob): Session? = app.sessions.load()?.takeIf { it.ownerKey == job.owner }

    private suspend fun checkRunning(job: CloudJob) {
        if (isStopped || jobs.get(job.id)?.control != JobControl.RUN || currentSession(job) == null) throw Stopped()
    }

    private suspend fun transfer(api: CloudApi, session: Session, job: CloudJob, remote: String, files: JSONArray) {
        var uploaded = 0L
        for (i in 0 until files.length()) {
            checkRunning(job)
            val item = files.getJSONObject(i)
            val id = item.getString("id")
            val length = item.getLong("size")
            val source = checkNotNull(app.database.projects().mediaById(id))
            check(source.projectId == job.projectId && source.bytes == length)
            val file = app.storage.file(source)
            check(file.isFile && file.length() == length)
            var offset = api.offset(session, remote, id)
            check(offset in 0..length)
            jobs.uploaded(job.id, uploaded + offset)
            RandomAccessFile(file, "r").use { input ->
                input.seek(offset)
                while (offset < length) {
                    checkRunning(job)
                    val chunk = ByteArray(minOf(CHUNK_BYTES.toLong(), length - offset).toInt())
                    input.readFully(chunk)
                    val next = api.upload(session, remote, id, offset, length, chunk)
                    check(next == offset + chunk.size)
                    offset = next
                    jobs.uploaded(job.id, uploaded + offset)
                }
            }
            uploaded += length
        }
    }

    private suspend fun download(
        api: CloudApi,
        session: Session,
        job: CloudJob,
        remote: String,
        payload: JSONObject
    ) {
        api.result(session, remote).use { response ->
            val format = checkNotNull(response.header("X-Model-Format")).lowercase(Locale.ROOT)
            val digest = checkNotNull(response.header("X-Content-SHA256"))
            check(format in ModelFiles.allFormats && digest.matches(Regex("[a-f0-9]{64}")))
            val body = checkNotNull(response.body)
            val declaredLen = body.contentLength()
            check(declaredLen in 1..ModelFiles.MAX_ASSET_BYTES)
            val temp = File.createTempFile("result-", ".pending", app.storage.models)
            try {
                val sha = MessageDigest.getInstance("SHA-256")
                var size = 0L
                DigestInputStream(body.byteStream(), sha).use { input ->
                    temp.outputStream().buffered().use { out ->
                        val buffer = ByteArray(64 * 1024)
                        while (true) {
                            checkRunning(job)
                            val read = input.read(buffer)
                            if (read < 0) break
                            size += read
                            check(size <= declaredLen)
                            out.write(buffer, 0, read)
                        }
                    }
                }
                check(size == declaredLen && sha.digest().hex() == digest)
                val role = ModelFiles.inferRoleOnImport(temp, format, "result.$format")
                ModelFiles.verifyAsset(temp, format, role)
                checkRunning(job)
                val loc = payload.optJSONObject("location")
                val lat = loc?.takeIf { it.has("latitude") }?.optDouble("latitude")?.takeIf { it.isFinite() }
                val lon = loc?.takeIf { it.has("longitude") }?.optDouble("longitude")?.takeIf { it.isFinite() }
                val title = payload.optString("title", "MosaicEarth Cloud")
                val model = Model(
                    id = job.id,
                    projectId = job.projectId,
                    name = "$title · Resultat Cloud",
                    extension = format,
                    owner = job.owner,
                    bytes = temp.length(),
                    createdAt = System.currentTimeMillis(),
                    role = role,
                    latitude = lat,
                    longitude = lon,
                )
                check(temp.renameTo(app.storage.file(model)))
                app.database.projects().insert(model)
            } finally {
                temp.delete()
            }
        }
    }

    private suspend fun updateStatus(job: CloudJob, response: JSONObject) {
        val state = response.getString("state")
        val status = statuses[state] ?: error("Estat desconegut: $state")
        val checkoutUrl = response.optString("checkoutUrl", "").takeIf { it.startsWith("https://") }
        jobs.progress(
            job.id,
            status,
            response.getInt("progress").coerceIn(0, 100),
            if (response.isNull("finalCredits")) null else response.getInt("finalCredits"),
            checkoutUrl
        )
    }

    private suspend fun done(id: String): Result {
        jobs.control(id, JobControl.DONE)
        return Result.success()
    }

    private suspend fun retry(job: CloudJob): Result {
        jobs.progress(
            job.id,
            "Connexió o processament en curs. Actualitzant automàticament…",
            jobs.get(job.id)?.percent ?: 0,
            null,
            job.checkoutUrl
        )
        return Result.retry()
    }

    private suspend fun finishWithError(job: CloudJob, message: String): Result {
        jobs.progress(job.id, message, job.percent, job.finalCredits, job.checkoutUrl)
        if (job.control == JobControl.RUN) jobs.control(job.id, JobControl.PAUSE)
        return Result.failure()
    }

    private fun foreground(job: CloudJob): ForegroundInfo {
        val manager = app.getSystemService(NotificationManager::class.java)
        manager.createNotificationChannel(
            NotificationChannel("cloud-transfer", "Transferència MosaicEarth", NotificationManager.IMPORTANCE_LOW)
        )
        val notification = NotificationCompat.Builder(app, "cloud-transfer")
            .setSmallIcon(android.R.drawable.stat_sys_upload)
            .setContentTitle("MosaicEarth Cloud")
            .setContentText("Sincronitzant captures amb MosaicEarth Cloud…")
            .setOngoing(true)
            .build()
        val id = job.id.hashCode() and Int.MAX_VALUE
        return if (Build.VERSION.SDK_INT >= 29) {
            ForegroundInfo(id, notification, ServiceInfo.FOREGROUND_SERVICE_TYPE_DATA_SYNC)
        } else {
            ForegroundInfo(id, notification)
        }
    }

    private class Stopped : Exception()

    companion object {
        private val terminal = setOf("READY", "FAILED", "CANCELLED", "REJECTED")
        private val statuses = mapOf(
            "UPLOADING" to "Pujant captures a MosaicEarth",
            "AWAITING_PAYMENT" to "Pendent de pagament Stripe",
            "QUEUED" to "En cua al servidor GPU",
            "PROCESSING" to "Processant al núvol MosaicEarth",
            "QUALITY_GATE" to "Verificant qualitat",
            "READY" to "Resultat aprovat i descarregat",
            "FAILED" to "El processament ha fallat",
            "CANCELLED" to "Cancel·lat",
            "REJECTED" to "Quality Gate rebutjat"
        )

        fun schedule(context: Context, id: String, policy: ExistingWorkPolicy = ExistingWorkPolicy.KEEP) {
            val request = OneTimeWorkRequestBuilder<CloudWorker>()
                .setInputData(workDataOf("job" to id))
                .setConstraints(Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED).build())
                .setBackoffCriteria(BackoffPolicy.EXPONENTIAL, 15, TimeUnit.SECONDS)
                .build()
            WorkManager.getInstance(context).enqueueUniqueWork("capture-cloud-$id", policy, request)
        }
    }
}

internal fun makeManifest(media: List<CaptureMedia>, locate: (CaptureMedia) -> File): JSONArray = JSONArray().apply {
    for (photo in media) {
        val file = locate(photo)
        check(file.isFile && file.length() == photo.bytes)
        put(
            JSONObject()
                .put("id", photo.id)
                .put("size", photo.bytes)
                .put("sha256", fileSha256(file))
                .put("contentType", "image/jpeg")
        )
    }
}

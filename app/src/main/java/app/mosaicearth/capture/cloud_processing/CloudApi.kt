package app.mosaicearth.capture.cloud_processing

import app.mosaicearth.capture.authentication.Session
import okhttp3.HttpUrl
import okhttp3.HttpUrl.Companion.toHttpUrl
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.Response
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.io.IOException
import java.io.RandomAccessFile
import java.security.DigestInputStream
import java.security.MessageDigest
import java.util.concurrent.TimeUnit

private val JSON = "application/json".toMediaType()
private val BINARY = "application/octet-stream".toMediaType()
private const val FREE_CHUNK_BYTES = 2 * 1024 * 1024

class ApiFailure(val code: Int, detail: String? = null) :
    IOException(detail?.takeIf { it.isNotBlank() } ?: "MosaicEarth ha retornat HTTP $code.") {
    val retryable get() = code == 408 || code == 429 || code in 500..599
}

data class CloudPreset(
    val id: String,
    val label: String,
    val engine: String = "",
    val description: String = "",
)

data class CloudProject(val id: String, val name: String)

data class CloudQuote(
    val id: String,
    val engine: String,
    val preset: String,
    val estimatedCredits: Int,
    val balance: Int,
    val conditions: String,
    val expiresAtMillis: Long,
    val priceEur: Double = estimatedCredits / 100.0,
    val walletEur: Double = balance / 100.0,
    val stripeDueEur: Double = 0.0,
    val coveredByPlan: Boolean = estimatedCredits == 0,
    val requiresStripeCheckout: Boolean = false,
)

data class FreeUploadResult(
    val uploadId: String,
    val projectId: String,
    val taskId: String,
    val assetId: String,
    val viewerUrl: String,
)

class CloudApi(origin: String, private val client: OkHttpClient = transport) {
    val origin: String = origin.trimEnd('/')
    private val base = this.origin.toHttpUrl().also {
        require(
            it.isHttps && it.username.isEmpty() && it.password.isEmpty() && it.encodedPath == "/" &&
                it.query == null && it.fragment == null
        )
    }

    fun presets(): List<CloudPreset> {
        val response = json("GET", "capabilities")
        val env = response.optString("environment", "")
        check(response.optString("contract") == "capture-v1" && env in setOf("production", "sandbox")) {
            "El servidor no exposa un contracte MosaicEarth Capture v1 vàlid."
        }
        val presets = response.getJSONArray("presets")
        return (0 until presets.length()).map { i ->
            val preset = presets.getJSONObject(i)
            CloudPreset(
                id = preset.getString("id"),
                label = preset.getString("label"),
                engine = preset.optString("engine", ""),
                description = preset.optString("description", "")
            )
        }
    }

    fun signIn(email: String, password: String): Session {
        presets()
        val result = json("POST", "session", payload = JSONObject().put("email", email).put("password", password))
        return Session(
            origin,
            result.getString("accountId"),
            result.getString("displayName"),
            result.getString("accessToken")
        ).also { require(it.account.isNotBlank() && it.token.isNotBlank()) }
    }

    fun revoke(session: Session) {
        execute(request("DELETE", "session", session)).close()
    }

    fun projects(session: Session): List<CloudProject> = named(session, "projects")

    fun mosaics(session: Session): List<CloudProject> = named(session, "mosaics")

    private fun named(session: Session, kind: String): List<CloudProject> {
        val rows = json("GET", kind, session).getJSONArray(kind)
        return (0 until rows.length()).map { i ->
            val row = rows.getJSONObject(i)
            CloudProject(row.getString("id"), row.getString("name"))
        }
    }

    fun quote(session: Session, preset: String, manifest: JSONArray, target: String?): CloudQuote {
        val result = json(
            "POST",
            "quotes",
            session,
            JSONObject()
                .put("preset", preset)
                .put("files", manifest)
                .put("projectId", target ?: JSONObject.NULL)
        )
        val estCredits = result.getInt("estimatedCredits")
        val balCredits = result.getInt("balance")
        val priceEur = if (result.has("priceEur")) result.optDouble("priceEur", estCredits / 100.0) else estCredits / 100.0
        val walletEur = if (result.has("walletEur")) result.optDouble("walletEur", balCredits / 100.0) else balCredits / 100.0
        val stripeDue = result.optDouble("stripeDueEur", 0.0)
        val covered = result.optBoolean("coveredByPlan", estCredits <= balCredits && priceEur <= 0.0)
        val needsStripe = result.optBoolean("requiresStripeCheckout", !covered && estCredits > balCredits)
        return CloudQuote(
            id = result.getString("quoteId"),
            engine = result.getString("engine"),
            preset = result.getString("preset"),
            estimatedCredits = estCredits,
            balance = balCredits,
            conditions = result.getString("conditions"),
            expiresAtMillis = result.getLong("expiresAtMillis"),
            priceEur = priceEur,
            walletEur = walletEur,
            stripeDueEur = stripeDue,
            coveredByPlan = covered,
            requiresStripeCheckout = needsStripe,
        ).also {
            check(it.estimatedCredits >= 0 && it.balance >= 0 && it.id.isNotBlank() && it.preset == preset)
        }
    }

    fun uploadFreeAsset(
        session: Session,
        file: File,
        assetName: String,
        format: String,
        role: String,
        projectTitle: String,
        description: String = "",
        targetProjectId: String? = null,
        mosaicId: String? = null,
        latitude: Double? = null,
        longitude: Double? = null,
        altitude: Double? = null,
        onProgress: ((Long, Long) -> Unit)? = null,
    ): FreeUploadResult {
        require(file.isFile && file.length() > 0) { "El fitxer local no existeix o és buit." }
        val total = file.length()
        val fullSha = fileSha256(file)
        val initPayload = JSONObject()
            .put("projectId", targetProjectId ?: JSONObject.NULL)
            .put("mosaicId", mosaicId ?: JSONObject.NULL)
            .put("projectTitle", projectTitle.ifBlank { "Mobile Capture" })
            .put("assetName", assetName.ifBlank { file.nameWithoutExtension })
            .put("filename", "${assetName.replace(Regex("[^A-Za-z0-9._-]"), "_").take(80).ifBlank { role }}.${format.lowercase()}")
            .put("format", format.lowercase())
            .put("assetRole", role.lowercase())
            .put("size", total)
            .put("sha256", fullSha)
            .put("latitude", latitude ?: JSONObject.NULL)
            .put("longitude", longitude ?: JSONObject.NULL)
            .put("altitude", altitude ?: JSONObject.NULL)
            .put("description", description)

        val initRes = json("POST", "free-uploads", session, initPayload)
        val uploadId = initRes.getString("uploadId")
        val chunkLimit = initRes.optInt("chunkBytes", FREE_CHUNK_BYTES).coerceIn(256 * 1024, 4 * 1024 * 1024)
        var offset = initRes.optLong("offset", 0L)
        onProgress?.invoke(offset, total)

        RandomAccessFile(file, "r").use { raf ->
            raf.seek(offset)
            while (offset < total) {
                val len = minOf(chunkLimit.toLong(), total - offset).toInt()
                val chunk = ByteArray(len)
                raf.readFully(chunk)
                val headers = mapOf(
                    "Content-Range" to "bytes $offset-${offset + chunk.size - 1}/$total",
                    "X-Chunk-SHA256" to chunk.sha256()
                )
                val req = request("PUT", "free-uploads/$uploadId/part", session, chunk.toRequestBody(BINARY), headers)
                offset = execute(req).use { JSONObject(checkNotNull(it.body).string()).getLong("offset") }
                onProgress?.invoke(offset, total)
            }
        }

        val done = json("POST", "free-uploads/$uploadId/complete", session, JSONObject())
        return FreeUploadResult(
            uploadId = uploadId,
            projectId = done.getString("projectId"),
            taskId = done.optString("taskId", ""),
            assetId = done.getString("assetId"),
            viewerUrl = done.optString("viewerUrl", "")
        )
    }

    fun create(session: Session, key: String, payload: JSONObject): JSONObject =
        json("POST", "jobs", session, payload, mapOf("Idempotency-Key" to key))

    fun status(session: Session, job: String): JSONObject = json("GET", "jobs/$job", session)

    fun offset(session: Session, job: String, file: String): Long =
        json("GET", "jobs/$job/files/$file", session).getLong("offset")

    fun upload(session: Session, job: String, file: String, offset: Long, total: Long, chunk: ByteArray): Long {
        val headers = mapOf(
            "Content-Range" to "bytes $offset-${offset + chunk.size - 1}/$total",
            "X-Chunk-SHA256" to chunk.sha256()
        )
        val request = request("PUT", "jobs/$job/files/$file", session, chunk.toRequestBody(BINARY), headers)
        return execute(request).use { JSONObject(checkNotNull(it.body).string()).getLong("offset") }
    }

    fun submit(session: Session, job: String, key: String): JSONObject = json(
        "POST",
        "jobs/$job/submit",
        session,
        JSONObject(),
        mapOf("Idempotency-Key" to "$key-submit")
    )

    fun cancelRequest(session: Session, key: String): JSONObject = json(
        "POST",
        "requests/$key/cancel",
        session,
        JSONObject(),
        mapOf("Idempotency-Key" to "$key-cancel")
    )

    fun result(session: Session, job: String): Response =
        execute(request("GET", "jobs/$job/result", session, headers = mapOf("Accept-Encoding" to "identity")))

    fun publish(session: Session, job: String, key: String, mosaicId: String?): JSONObject =
        json(
            "POST",
            "jobs/$job/publication",
            session,
            JSONObject().put("visibility", "private").put("mosaicId", mosaicId ?: JSONObject.NULL),
            mapOf("Idempotency-Key" to key)
        ).also {
            require(it.getString("assetId").isNotBlank() && it.getString("projectId").isNotBlank())
        }

    private fun json(
        method: String,
        path: String,
        session: Session? = null,
        payload: JSONObject? = null,
        headers: Map<String, String> = emptyMap()
    ): JSONObject =
        execute(request(method, path, session, payload?.toString()?.toRequestBody(JSON), headers)).use {
            JSONObject(checkNotNull(it.body).string())
        }

    private fun request(
        method: String,
        path: String,
        session: Session?,
        body: RequestBody? = null,
        headers: Map<String, String> = emptyMap()
    ): Request {
        val url = endpoint(base, path)
        return Request.Builder().url(url).method(method, body).apply {
            if (session != null) {
                require(session.origin == origin)
                header("Authorization", "Bearer ${session.token}")
            }
            for ((name, value) in headers) header(name, value)
        }.build()
    }

    private fun execute(request: Request): Response {
        val response = client.newCall(request).execute()
        if (!response.isSuccessful) {
            val errDetail = runCatching {
                val raw = response.body?.string().orEmpty()
                JSONObject(raw).optString("detail").takeIf { it.isNotBlank() }
            }.getOrNull()
            response.close()
            throw ApiFailure(response.code, errDetail)
        }
        return response
    }

    companion object {
        internal fun endpoint(base: HttpUrl, path: String): HttpUrl {
            val builder = base.newBuilder().addPathSegments("api/v2/capture/v1")
            for (segment in path.split('/')) {
                require(segment.matches(Regex("[a-zA-Z0-9_-]{1,128}"))) { "Identificador cloud invàlid." }
                builder.addPathSegment(segment)
            }
            return builder.build()
        }

        private val transport = OkHttpClient.Builder()
            .followRedirects(false)
            .followSslRedirects(false)
            .connectTimeout(25, TimeUnit.SECONDS)
            .writeTimeout(90, TimeUnit.SECONDS)
            .readTimeout(90, TimeUnit.SECONDS)
            .callTimeout(180, TimeUnit.SECONDS)
            .build()
    }
}

internal fun fileSha256(file: File): String {
    val sha = MessageDigest.getInstance("SHA-256")
    DigestInputStream(file.inputStream().buffered(), sha).use { input ->
        val buf = ByteArray(64 * 1024)
        while (input.read(buf) >= 0) Unit
    }
    return sha.digest().hex()
}

internal fun ByteArray.sha256(): String = MessageDigest.getInstance("SHA-256").digest(this).hex()
internal fun ByteArray.hex(): String = joinToString("") { "%02x".format(it) }

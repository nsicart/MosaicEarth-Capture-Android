package app.mosaicearth.capture

import app.mosaicearth.capture.authentication.Session
import app.mosaicearth.capture.cloud_processing.ApiFailure
import app.mosaicearth.capture.cloud_processing.CloudApi
import okhttp3.HttpUrl.Companion.toHttpUrl
import okhttp3.OkHttpClient
import okhttp3.Protocol
import okhttp3.Request
import okhttp3.Response
import okhttp3.ResponseBody.Companion.toResponseBody
import okio.Buffer
import org.json.JSONArray
import org.json.JSONObject
import org.junit.Assert.*
import org.junit.Rule
import org.junit.Test
import org.junit.rules.TemporaryFolder

class CloudApiTest {
    @get:Rule val directory = TemporaryFolder()
    private val origin = "https://app.mosaicearth.app"
    private val session = Session(origin, "user", "Test", "test-bearer")

    private fun client(answer: (Request) -> Pair<Int, String>): CloudApi =
        CloudApi(
            origin,
            OkHttpClient.Builder().addInterceptor { chain ->
                val request = chain.request()
                val (status, body) = answer(request)
                Response.Builder()
                    .request(request)
                    .protocol(Protocol.HTTP_1_1)
                    .code(status)
                    .message("test")
                    .body(body.toResponseBody())
                    .build()
            }.build()
        )

    @Test
    fun uploadBindsBytesToExactRangeAndChecksum() {
        val api = client { request ->
            assertEquals("PUT", request.method)
            assertEquals("/api/v2/capture/v1/jobs/job/files/photo", request.url.encodedPath)
            assertEquals("Bearer test-bearer", request.header("Authorization"))
            assertEquals("bytes 12-14/24", request.header("Content-Range"))
            assertEquals(
                "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
                request.header("X-Chunk-SHA256")
            )
            val payload = Buffer()
            request.body!!.writeTo(payload)
            assertEquals("abc", payload.readUtf8())
            200 to """{"offset":15}"""
        }
        assertEquals(15L, api.upload(session, "job", "photo", 12, 24, "abc".toByteArray()))
    }

    @Test
    fun replayUsesTheOriginalIdempotencyKey() {
        val seen = mutableListOf<String?>()
        val api = client { request ->
            seen += request.header("Idempotency-Key")
            200 to """{"jobId":"remote","state":"UPLOADING","progress":0,"finalCredits":null}"""
        }
        repeat(2) { assertEquals("remote", api.create(session, "fixed-key", JSONObject()).getString("jobId")) }
        assertEquals(listOf("fixed-key", "fixed-key"), seen)
    }

    @Test
    fun capabilityCheckAcceptsProductionAndRejectsInvalidContractBeforeSendingCredentials() {
        val badApi = client { request ->
            assertEquals("/api/v2/capture/v1/capabilities", request.url.encodedPath)
            assertNull(request.header("Authorization"))
            200 to """{"contract":"wrong-contract","environment":"unknown","presets":[]}"""
        }
        assertThrows(IllegalStateException::class.java) { badApi.signIn("test@example.invalid", "test") }

        val prodApi = client { request ->
            when (request.url.encodedPath) {
                "/api/v2/capture/v1/capabilities" ->
                    200 to """{"contract":"capture-v1","environment":"production","presets":[{"id":"photogrammetry-standard","engine":"photogrammetry","label":"Fotogrametria"}]}"""
                "/api/v2/capture/v1/session" ->
                    200 to """{"accountId":"42","displayName":"pilot@example.invalid","accessToken":"tok_1234567890abcdef"}"""
                else -> 404 to "{}"
            }
        }
        val signed = prodApi.signIn("pilot@example.invalid", "secret")
        assertEquals("42", signed.account)
        assertEquals("pilot@example.invalid", signed.display)
    }

    @Test
    fun freeUploadTransfersVerifiedChunksAtZeroCost() {
        val localGlb = directory.newFile("mesh.glb")
        localGlb.writeBytes("glb-payload-bytes".toByteArray())
        val calls = mutableListOf<String>()
        val api = client { request ->
            calls += "${request.method} ${request.url.encodedPath}"
            when {
                request.method == "POST" && request.url.encodedPath.endsWith("/free-uploads") ->
                    201 to """{"uploadId":"up_99","status":"UPLOADING","offset":0,"chunkBytes":1048576,"priceEur":0.0}"""
                request.method == "PUT" && request.url.encodedPath.endsWith("/free-uploads/up_99/part") -> {
                    assertEquals("bytes 0-${localGlb.length() - 1}/${localGlb.length()}", request.header("Content-Range"))
                    assertNotNull(request.header("X-Chunk-SHA256"))
                    200 to """{"offset":${localGlb.length()}}"""
                }
                request.method == "POST" && request.url.encodedPath.endsWith("/free-uploads/up_99/complete") ->
                    200 to """{"ok":true,"uploadId":"up_99","status":"READY","projectId":"100","taskId":"101","assetId":"555","viewerUrl":"/MapEdit.aspx?id=101&asset_id=555","priceEur":0.0}"""
                else -> 404 to "{}"
            }
        }
        val result = api.uploadFreeAsset(
            session = session,
            file = localGlb,
            assetName = "Malla Dron",
            format = "glb",
            role = "mesh",
            projectTitle = "Vol Dron",
            latitude = 42.345,
            longitude = 1.754
        )
        assertEquals("555", result.assetId)
        assertEquals("100", result.projectId)
        assertEquals(3, calls.size)
    }

    @Test
    fun quoteParsesEurAndStripeFields() {
        val api = client {
            200 to """{"quoteId":"q1","engine":"OpenDroneMap","preset":"photogrammetry-standard","priceEur":4.5,"walletEur":1.0,"stripeDueEur":3.5,"coveredByPlan":false,"requiresStripeCheckout":true,"estimatedCredits":450,"balance":100,"conditions":"Cloud GPU","expiresAtMillis":1999999999999}"""
        }
        val q = api.quote(session, "photogrammetry-standard", JSONArray(), null)
        assertEquals(4.5, q.priceEur, 0.001)
        assertEquals(3.5, q.stripeDueEur, 0.001)
        assertTrue(q.requiresStripeCheckout)
        assertFalse(q.coveredByPlan)
    }

    @Test
    fun rejectsCrossOriginAndPathTraversalAndClassifiesRetryableResponses() {
        val api = client { 503 to "{}" }
        assertThrows(IllegalArgumentException::class.java) { api.projects(session.copy(origin = "https://other.example")) }
        assertThrows(IllegalArgumentException::class.java) { CloudApi.endpoint(origin.toHttpUrl(), "jobs/../session") }
        val error = assertThrows(ApiFailure::class.java) { api.status(session, "job") }
        assertTrue(error.retryable)
    }
}

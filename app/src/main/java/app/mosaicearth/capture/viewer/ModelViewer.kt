package app.mosaicearth.capture.viewer

import android.annotation.SuppressLint
import android.graphics.Color as AndroidColor
import android.net.Uri
import android.util.Log
import android.view.MotionEvent
import android.view.ViewGroup
import android.webkit.ConsoleMessage
import android.webkit.RenderProcessGoneDetail
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.CloudDone
import androidx.compose.material.icons.filled.CloudUpload
import androidx.compose.material.icons.filled.Download
import androidx.compose.material.icons.filled.Share
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.webkit.WebViewAssetLoader
import app.mosaicearth.capture.projects.Model
import app.mosaicearth.capture.ui.MosaicBadge
import app.mosaicearth.capture.ui.MosaicCard
import app.mosaicearth.capture.ui.MosaicColors
import java.io.File
import java.util.Locale

private const val HOST = "appassets.androidplatform.net"

@Composable
fun ModelViewer(
    model: Model,
    file: File,
    previewFile: File? = null,
    uploadFree: (() -> Unit)? = null,
    export: () -> Unit,
    share: () -> Unit,
    close: () -> Unit,
) {
    var error by remember(model.id) { mutableStateOf(false) }
    val ext = remember(model.extension) {
        model.extension.trim().trimStart('.').lowercase(Locale.ROOT)
    }
    val roleNorm = remember(model.role) {
        model.role.trim().lowercase(Locale.ROOT)
    }

    Column(
        modifier = Modifier.fillMaxSize().padding(vertical = 8.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        MosaicCard(padding = 12.dp) {
            Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                    ) {
                        OutlinedButton(
                            onClick = close,
                            contentPadding = PaddingValues(horizontal = 10.dp, vertical = 4.dp),
                            modifier = Modifier.height(32.dp),
                            shape = RoundedCornerShape(8.dp),
                        ) {
                            Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = null, modifier = Modifier.size(15.dp))
                            Spacer(Modifier.width(4.dp))
                            Text("Models", style = MaterialTheme.typography.labelMedium)
                        }
                        MosaicBadge(text = model.roleBadge)
                    }
                    if (model.cloudAssetId != null) {
                        MosaicBadge(
                            text = "A MYEARTH",
                            color = MosaicColors.Emerald,
                            containerColor = MosaicColors.EmeraldContainer,
                            icon = Icons.Default.CloudDone,
                        )
                    }
                }
                Text(
                    text = model.name,
                    style = MaterialTheme.typography.titleMedium,
                    color = MosaicColors.TextPrimary,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
                val sizeMib = String.format(Locale.US, "%.2f MiB", model.bytes / (1024.0 * 1024.0))
                val geoText = if (model.latitude != null && model.longitude != null) {
                    String.format(Locale.US, " · WGS84 %.5f, %.5f", model.latitude, model.longitude)
                } else ""
                Text(
                    text = "${ext.uppercase(Locale.ROOT)} · $sizeMib$geoText",
                    style = MaterialTheme.typography.bodySmall,
                    color = MosaicColors.TextSecondary,
                )
            }
        }

        if (!file.isFile || file.length() <= 0L) {
            MosaicCard(modifier = Modifier.fillMaxWidth().weight(1f)) {
                Text(
                    text = "No s’ha trobat el fitxer local de l’actiu a l’emmagatzematge del dispositiu.",
                    color = MosaicColors.Amber,
                    style = MaterialTheme.typography.bodyMedium,
                )
            }
        } else if (error) {
            MosaicCard(modifier = Modifier.fillMaxWidth().weight(1f)) {
                Text(
                    text = "El procés gràfic del visor s’ha aturat per límit de memòria. Pots exportar el fitxer o pujar-lo gratuïtament a MosaicEarth MyEarth.",
                    color = MosaicColors.Amber,
                    style = MaterialTheme.typography.bodyMedium,
                )
            }
        } else {
            // Avoid rounded-outline RenderNode clipping around hardware-accelerated WebGL WebView
            // (prevents blank WebGL surface compositing on Android HyperOS/MIUI and Mali/Adreno GPUs).
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1f)
                    .background(MosaicColors.CanvasBg)
                    .border(1.dp, MosaicColors.BorderSubtle)
                    .padding(1.dp)
            ) {
                key(model.id) {
                    AndroidView(
                        modifier = Modifier.fillMaxSize(),
                        factory = { context ->
                            val modelMime = when (ext) {
                                "glb" -> "model/gltf-binary"
                                "tif", "tiff" -> "image/tiff"
                                else -> "application/octet-stream"
                            }
                            val loader = WebViewAssetLoader.Builder()
                                .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(context))
                                .addPathHandler("/model/") { path ->
                                    when {
                                        path == "scene.$ext" && file.isFile ->
                                            WebResourceResponse(
                                                modelMime,
                                                null,
                                                200,
                                                "OK",
                                                mapOf(
                                                    "Content-Length" to file.length().toString(),
                                                    "Cache-Control" to "no-store",
                                                    "Access-Control-Allow-Origin" to "https://$HOST",
                                                ),
                                                file.inputStream().buffered(64 * 1024),
                                            )
                                        path == "preview.png" && previewFile != null && previewFile.isFile ->
                                            WebResourceResponse(
                                                "image/png",
                                                null,
                                                200,
                                                "OK",
                                                mapOf(
                                                    "Content-Length" to previewFile.length().toString(),
                                                    "Cache-Control" to "no-store",
                                                    "Access-Control-Allow-Origin" to "https://$HOST",
                                                ),
                                                previewFile.inputStream().buffered(32 * 1024),
                                            )
                                        else -> null
                                    }
                                }.build()

                            val targetUrl =
                                "https://$HOST/assets/viewer/index.html" +
                                    "?format=${Uri.encode(ext)}&role=${Uri.encode(roleNorm)}"

                            WebView(context).apply {
                                layoutParams = ViewGroup.LayoutParams(
                                    ViewGroup.LayoutParams.MATCH_PARENT,
                                    ViewGroup.LayoutParams.MATCH_PARENT,
                                )
                                setBackgroundColor(AndroidColor.parseColor("#090F0B"))
                                configureViewer()
                                setOnTouchListener { v, ev ->
                                    when (ev.actionMasked) {
                                        MotionEvent.ACTION_DOWN,
                                        MotionEvent.ACTION_POINTER_DOWN,
                                        MotionEvent.ACTION_MOVE -> v.parent?.requestDisallowInterceptTouchEvent(true)
                                    }
                                    false
                                }
                                webChromeClient = object : WebChromeClient() {
                                    override fun onConsoleMessage(cm: ConsoleMessage): Boolean {
                                        if (cm.messageLevel() == ConsoleMessage.MessageLevel.ERROR) {
                                            Log.e("MosaicViewer", "${cm.message()} @ ${cm.sourceId()}:${cm.lineNumber()}")
                                        }
                                        return true
                                    }
                                }
                                webViewClient = object : WebViewClient() {
                                    override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest) = true
                                    override fun shouldInterceptRequest(
                                        view: WebView,
                                        request: WebResourceRequest
                                    ): WebResourceResponse? {
                                        val uri = request.url
                                        val scheme = uri.scheme?.lowercase(Locale.ROOT)
                                        // Allow internal in-memory blob: and data: URLs (used by GLB textures & Gaussian Splat Web Workers)
                                        if (scheme == "blob" || scheme == "data") {
                                            return null
                                        }
                                        val allowedPaths = setOf(
                                            "/assets/viewer/index.html",
                                            "/assets/viewer/bundle.js",
                                            "/model/scene.$ext",
                                            "/model/preview.png",
                                        )
                                        if (scheme == "https" && uri.host == HOST && uri.port == -1 && uri.path in allowedPaths) {
                                            loader.shouldInterceptRequest(uri)?.let { return it }
                                        }
                                        return WebResourceResponse("text/plain", "UTF-8", 404, "Not Found", emptyMap(), null)
                                    }

                                    override fun onRenderProcessGone(
                                        view: WebView,
                                        detail: RenderProcessGoneDetail
                                    ): Boolean {
                                        error = true
                                        return true
                                    }
                                }

                                // Defer loadUrl until WebView has real layout dimensions (> 0x0) so Three.js & GaussianSplats3D
                                // never initialize with 0x0 render targets or NaN camera aspect ratios.
                                if (width > 0 && height > 0) {
                                    loadUrl(targetUrl)
                                } else {
                                    var urlLoaded = false
                                    addOnLayoutChangeListener { v, left, top, right, bottom, _, _, _, _ ->
                                        if (!urlLoaded && (right - left) > 0 && (bottom - top) > 0) {
                                            urlLoaded = true
                                            v.post { loadUrl(targetUrl) }
                                        }
                                    }
                                }
                            }
                        },
                        onRelease = { webView ->
                            webView.stopLoading()
                            webView.loadUrl("about:blank")
                            webView.destroy()
                        },
                    )
                }
            }
        }

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            if (uploadFree != null) {
                Button(
                    onClick = uploadFree,
                    modifier = Modifier.weight(1.4f).height(46.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MosaicColors.Lime,
                        contentColor = MosaicColors.OnLime,
                    ),
                    shape = RoundedCornerShape(10.dp),
                ) {
                    Icon(Icons.Default.CloudUpload, contentDescription = null, modifier = Modifier.size(18.dp))
                    Spacer(Modifier.width(6.dp))
                    Text(
                        text = if (model.cloudAssetId != null) "Actualitza MyEarth" else "Puja a MyEarth (0 €)",
                        fontWeight = FontWeight.Bold,
                        maxLines = 1,
                    )
                }
            }
            OutlinedButton(
                onClick = export,
                modifier = Modifier.weight(1f).height(46.dp),
                shape = RoundedCornerShape(10.dp),
            ) {
                Icon(Icons.Default.Download, contentDescription = null, modifier = Modifier.size(17.dp))
                Spacer(Modifier.width(5.dp))
                Text("Exporta", maxLines = 1)
            }
            OutlinedButton(
                onClick = share,
                modifier = Modifier.height(46.dp),
                shape = RoundedCornerShape(10.dp),
                contentPadding = PaddingValues(horizontal = 12.dp),
            ) {
                Icon(Icons.Default.Share, contentDescription = "Comparteix", modifier = Modifier.size(18.dp))
            }
        }
    }
}

@SuppressLint("SetJavaScriptEnabled")
private fun WebView.configureViewer() {
    settings.javaScriptEnabled = true
    settings.domStorageEnabled = true
    settings.allowFileAccess = false
    settings.allowContentAccess = false
}

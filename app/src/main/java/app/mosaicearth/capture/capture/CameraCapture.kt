package app.mosaicearth.capture.capture

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.location.Location
import android.location.LocationManager
import android.os.SystemClock
import android.view.KeyEvent
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.ImageCapture
import androidx.camera.core.ImageCaptureException
import androidx.camera.core.Preview
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.video.FileOutputOptions
import androidx.camera.video.Quality
import androidx.camera.video.QualitySelector
import androidx.camera.video.Recorder
import androidx.camera.video.Recording
import androidx.camera.video.VideoCapture
import androidx.camera.video.VideoRecordEvent
import androidx.camera.view.PreviewView
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.focusable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.hapticfeedback.HapticFeedbackType
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.onKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalHapticFeedback
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.lifecycle.compose.LocalLifecycleOwner
import app.mosaicearth.capture.projects.MediaKind
import app.mosaicearth.capture.ui.MosaicBadge
import app.mosaicearth.capture.ui.MosaicCard
import app.mosaicearth.capture.ui.MosaicColors
import kotlinx.coroutines.delay
import java.io.File
import java.util.Locale
import java.util.concurrent.Executors
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicReference

enum class CaptureDriveMode(val shortLabel: String) {
    AUTO_OVERLAP("Auto · Solap."),
    MANUAL_FAST("Manual ràpid"),
    INTERVAL("Cada 1,5 s"),
    VIDEO_3DGS("Vídeo 3DGS"),
}

/**
 * Compact launcher card inside the project workspace that opens the dedicated Full-Screen Camera Studio.
 */
@Composable
fun CaptureStudioLauncher(
    projectTitle: String,
    sceneGuide: String,
    pass: Int,
    photoCount: Int,
    videoCount: Int,
    onIncrementPass: () -> Unit,
    onOpenFullScreen: (CaptureDriveMode) -> Unit,
) {
    MosaicCard(highlighted = true, padding = 16.dp) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp),
                modifier = Modifier.weight(1f),
            ) {
                Box(
                    modifier = Modifier
                        .size(44.dp)
                        .clip(RoundedCornerShape(11.dp))
                        .background(MosaicColors.LimeContainer)
                        .border(1.dp, MosaicColors.BorderLime, RoundedCornerShape(11.dp)),
                    contentAlignment = Alignment.Center,
                ) {
                    Icon(
                        imageVector = Icons.Default.CenterFocusStrong,
                        contentDescription = null,
                        tint = MosaicColors.Lime,
                        modifier = Modifier.size(24.dp),
                    )
                }
                Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(2.dp)) {
                    Text(
                        text = "Càmera Fotogramètrica a Pantalla Completa",
                        style = MaterialTheme.typography.titleMedium,
                        color = MosaicColors.TextPrimary,
                    )
                    Text(
                        text = "Disparador instantani sense pauses, control de solapament en temps real i mode mans lliures automàtic.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.TextSecondary,
                    )
                }
            }
        }

        Spacer(Modifier.height(12.dp))

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(9.dp))
                .background(MosaicColors.InputBg)
                .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(9.dp))
                .padding(horizontal = 11.dp, vertical = 8.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(2.dp)) {
                Row(horizontalArrangement = Arrangement.spacedBy(6.dp), verticalAlignment = Alignment.CenterVertically) {
                    MosaicBadge("PASSADA $pass")
                    Text(
                        text = "$photoCount fotos · $videoCount vídeos",
                        style = MaterialTheme.typography.labelMedium,
                        color = MosaicColors.TextSecondary,
                    )
                }
                Text(
                    text = sceneGuide,
                    style = MaterialTheme.typography.bodySmall,
                    color = MosaicColors.TextPrimary,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            Spacer(Modifier.width(8.dp))
            OutlinedButton(
                onClick = onIncrementPass,
                contentPadding = PaddingValues(horizontal = 10.dp, vertical = 4.dp),
                modifier = Modifier.height(32.dp),
                shape = RoundedCornerShape(8.dp),
            ) {
                Text("+ Passada", style = MaterialTheme.typography.labelMedium)
            }
        }

        Spacer(Modifier.height(12.dp))

        Button(
            onClick = { onOpenFullScreen(CaptureDriveMode.AUTO_OVERLAP) },
            modifier = Modifier
                .fillMaxWidth()
                .height(50.dp),
            shape = RoundedCornerShape(10.dp),
            colors = ButtonDefaults.buttonColors(
                containerColor = MosaicColors.Lime,
                contentColor = MosaicColors.OnLime,
            ),
        ) {
            Icon(Icons.Default.PhotoCamera, contentDescription = null, modifier = Modifier.size(20.dp))
            Spacer(Modifier.width(8.dp))
            Text(
                text = "Obre Càmera Ràpida (Pantalla Completa)",
                fontWeight = FontWeight.Bold,
                fontSize = 14.5.sp,
            )
        }

        Spacer(Modifier.height(8.dp))

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            OutlinedButton(
                onClick = { onOpenFullScreen(CaptureDriveMode.MANUAL_FAST) },
                modifier = Modifier.weight(1f).height(38.dp),
                shape = RoundedCornerShape(8.dp),
                contentPadding = PaddingValues(horizontal = 8.dp),
            ) {
                Icon(Icons.Default.TouchApp, contentDescription = null, tint = MosaicColors.Lime, modifier = Modifier.size(15.dp))
                Spacer(Modifier.width(5.dp))
                Text("Manual ràpid", style = MaterialTheme.typography.labelMedium, maxLines = 1)
            }
            OutlinedButton(
                onClick = { onOpenFullScreen(CaptureDriveMode.VIDEO_3DGS) },
                modifier = Modifier.weight(1f).height(38.dp),
                shape = RoundedCornerShape(8.dp),
                contentPadding = PaddingValues(horizontal = 8.dp),
            ) {
                Icon(Icons.Default.Videocam, contentDescription = null, tint = MosaicColors.Emerald, modifier = Modifier.size(16.dp))
                Spacer(Modifier.width(5.dp))
                Text("Vídeo 3DGS", style = MaterialTheme.typography.labelMedium, maxLines = 1)
            }
        }
    }
}

/**
 * Full-screen edge-to-edge photogrammetry & 3DGS camera with real-time overlap tracking,
 * smart auto-shutter, zero-snackbar instant burst capture, onion-skin ghost mode, and hardware shutter keys.
 */
@Composable
fun FullScreenCameraScreen(
    projectTitle: String,
    pass: Int,
    totalPhotos: Int,
    initialDriveMode: CaptureDriveMode,
    pending: (MediaKind) -> File,
    saveSilent: (File, MediaKind, Long, Int) -> Unit,
    onPassChange: (Int) -> Unit,
    onOpenReview: () -> Unit,
    onClose: () -> Unit,
    reportError: (String) -> Unit,
) {
    val context = LocalContext.current
    val lifecycle = LocalLifecycleOwner.current
    val haptic = LocalHapticFeedback.current
    val focusRequester = remember { FocusRequester() }

    var granted by remember {
        mutableStateOf(
            ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED
        )
    }
    var gpsGranted by remember {
        mutableStateOf(
            ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED
        )
    }
    val permission = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { granted = it }
    val gpsPermission = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestMultiplePermissions()
    ) { map ->
        gpsGranted = map[Manifest.permission.ACCESS_FINE_LOCATION] == true ||
            map[Manifest.permission.ACCESS_COARSE_LOCATION] == true
    }

    LaunchedEffect(Unit) {
        if (!granted) permission.launch(Manifest.permission.CAMERA)
        runCatching { focusRequester.requestFocus() }
    }

    if (!granted) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(MosaicColors.CanvasBg)
                .statusBarsPadding()
                .navigationBarsPadding()
                .padding(20.dp),
            contentAlignment = Alignment.Center,
        ) {
            MosaicCard {
                Text("Cal permís de càmera", style = MaterialTheme.typography.titleLarge)
                Spacer(Modifier.height(6.dp))
                Text(
                    "Autoritza l’accés a la càmera posterior per utilitzar el visor a pantalla completa i l’assistent de solapament.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MosaicColors.TextSecondary,
                )
                Spacer(Modifier.height(14.dp))
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    OutlinedButton(onClick = onClose, modifier = Modifier.weight(1f)) {
                        Text("Torna")
                    }
                    Button(
                        onClick = { permission.launch(Manifest.permission.CAMERA) },
                        modifier = Modifier.weight(1f),
                    ) {
                        Text("Activa càmera", fontWeight = FontWeight.Bold)
                    }
                }
            }
        }
        return
    }

    var driveMode by rememberSaveable { mutableStateOf(initialDriveMode) }
    val mediaKind = if (driveMode == CaptureDriveMode.VIDEO_3DGS) MediaKind.VIDEO else MediaKind.PHOTO

    var showGrid by rememberSaveable { mutableStateOf(true) }
    var showGhost by rememberSaveable { mutableStateOf(false) }
    var autoArmed by rememberSaveable { mutableStateOf(false) }

    // Disarm continuous modes whenever user switches driveMode
    LaunchedEffect(driveMode) {
        autoArmed = false
    }

    val previewView = remember(context) {
        PreviewView(context).apply {
            implementationMode = PreviewView.ImplementationMode.COMPATIBLE
            scaleType = PreviewView.ScaleType.FILL_CENTER
        }
    }

    val analysisExecutor = remember { Executors.newSingleThreadExecutor() }
    DisposableEffect(Unit) {
        onDispose { analysisExecutor.shutdown() }
    }

    // Thread-safe live & reference luminance frames shared with background analyzer
    val referenceFrameRef = remember { AtomicReference<LumaFrame?>(null) }
    val latestLiveFrameRef = remember { AtomicReference<LumaFrame?>(null) }
    val shutterInFlight = remember { AtomicBoolean(false) }

    var overlapReading by remember {
        mutableStateOf(OverlapReading(overlapPct = null, zone = OverlapZone.FIRST_SHOT))
    }
    var ghostBitmap by remember { mutableStateOf<ImageBitmap?>(null) }
    var lastThumbBitmap by remember { mutableStateOf<ImageBitmap?>(null) }
    var sessionShots by rememberSaveable { mutableIntStateOf(0) }
    var optimisticCount by remember { mutableIntStateOf(totalPhotos) }
    val latestTotalPhotos by rememberUpdatedState(totalPhotos)
    var flashVisible by remember { mutableStateOf(false) }
    var lastShotRealtimeMs by remember { mutableLongStateOf(0L) }

    var session by remember { mutableStateOf<CameraSession?>(null) }
    var recording by remember { mutableStateOf<Recording?>(null) }
    var recordStartMs by remember { mutableLongStateOf(0L) }
    var elapsedSec by remember { mutableIntStateOf(0) }
    var stoppingVideo by remember { mutableStateOf(false) }
    var cameraError by remember { mutableStateOf<String?>(null) }

    val mainExecutor = remember(context) { ContextCompat.getMainExecutor(context) }

    // Flash pulse auto-clear
    LaunchedEffect(flashVisible) {
        if (flashVisible) {
            delay(85)
            flashVisible = false
        }
    }

    // Video elapsed timer
    LaunchedEffect(recording) {
        if (recording != null) {
            while (true) {
                elapsedSec = ((System.currentTimeMillis() - recordStartMs) / 1000L).toInt().coerceAtLeast(0)
                delay(400)
            }
        } else {
            elapsedSec = 0
        }
    }

    // Instant non-blocking photo trigger
    val triggerPhoto: () -> Unit = remember(context, pass) {
        {
            val curSession = session
            if (curSession != null && mediaKind == MediaKind.PHOTO && shutterInFlight.compareAndSet(false, true)) {
                val nowElapsed = SystemClock.elapsedRealtime()
                lastShotRealtimeMs = nowElapsed

                // Immediately lock the live frame as the new overlap reference (0 ms latency!)
                latestLiveFrameRef.get()?.let { liveSnap ->
                    referenceFrameRef.set(liveSnap)
                    overlapReading = OverlapReading(
                        overlapPct = 100,
                        zone = OverlapZone.TOO_HIGH,
                        sharpness = liveSnap.sharpness,
                        isSteady = true,
                        shouldAutoShoot = false,
                    )
                    val bmp: Bitmap = liveSnap.toGhostBitmap()
                    val imgBmp = bmp.asImageBitmap()
                    ghostBitmap = imgBmp
                    lastThumbBitmap = imgBmp
                }

                flashVisible = true
                sessionShots += 1
                optimisticCount = maxOf(optimisticCount, latestTotalPhotos) + 1
                haptic.performHapticFeedback(HapticFeedbackType.TextHandleMove)

                val temp = pending(MediaKind.PHOTO)
                val capturedAt = System.currentTimeMillis()
                val currentPass = pass
                runCatching {
                    curSession.photo(temp, recentDeviceLocation(context)) { ok ->
                        shutterInFlight.set(false)
                        if (ok) {
                            saveSilent(temp, MediaKind.PHOTO, capturedAt, currentPass)
                        } else {
                            temp.delete()
                            reportError("No s’ha pogut desar la captura.")
                        }
                    }
                }.onFailure {
                    shutterInFlight.set(false)
                    temp.delete()
                }
            }
        }
    }

    val latestTriggerPhoto by rememberUpdatedState(triggerPhoto)

    // Bind CameraX Preview + Low-Latency ImageCapture + Real-Time YUV Overlap Analyzer
    DisposableEffect(lifecycle, mediaKind, previewView) {
        val providerFuture = ProcessCameraProvider.getInstance(context)
        var active = true
        var bound: CameraSession? = null
        session = null
        cameraError = null
        providerFuture.addListener({
            if (!active) return@addListener
            var prevFrame: LumaFrame? = null
            var lastUiPushMs = 0L
            runCatching {
                CameraSession.bind(
                    context = context,
                    provider = providerFuture.get(),
                    lifecycle = lifecycle,
                    view = previewView,
                    mode = mediaKind,
                    analysisExecutor = analysisExecutor,
                    onFrame = { proxy ->
                        try {
                            val luma = OverlapAnalyzer.extractLumaFrame(proxy)
                            if (luma != null) {
                                latestLiveFrameRef.set(luma)
                                val nowMs = SystemClock.elapsedRealtime()
                                if (nowMs - lastUiPushMs >= 75L) {
                                    lastUiPushMs = nowMs
                                    val reading = OverlapAnalyzer.evaluate(
                                        reference = referenceFrameRef.get(),
                                        current = luma,
                                        previousLive = prevFrame,
                                    )
                                    prevFrame = luma
                                    mainExecutor.execute {
                                        if (active) overlapReading = reading
                                    }
                                }
                            }
                        } finally {
                            proxy.close()
                        }
                    }
                )
            }.onSuccess {
                bound = it
                session = it
            }.onFailure {
                cameraError = "No s’ha pogut iniciar la càmera posterior."
            }
        }, mainExecutor)

        onDispose {
            active = false
            recording?.stop()
            bound?.close()
        }
    }

    // Smart Auto-Overlap & Intervalometer Driver Loop
    LaunchedEffect(autoArmed, driveMode, overlapReading, session) {
        if (!autoArmed || session == null || mediaKind != MediaKind.PHOTO) return@LaunchedEffect
        val nowElapsed = SystemClock.elapsedRealtime()
        when (driveMode) {
            CaptureDriveMode.AUTO_OVERLAP -> {
                val cooldownMs = if (referenceFrameRef.get() == null) 250L else 680L
                if (overlapReading.shouldAutoShoot && nowElapsed - lastShotRealtimeMs >= cooldownMs && !shutterInFlight.get()) {
                    // Brief stability confirmation so we shoot crisp frames
                    delay(90)
                    if (autoArmed && overlapReading.shouldAutoShoot && !shutterInFlight.get()) {
                        latestTriggerPhoto()
                    }
                }
            }
            CaptureDriveMode.INTERVAL -> {
                while (autoArmed && session != null) {
                    val since = SystemClock.elapsedRealtime() - lastShotRealtimeMs
                    if (since < 1450L) delay(1450L - since)
                    if (!autoArmed) break
                    if (overlapReading.zone != OverlapZone.BLURRY && !shutterInFlight.get()) {
                        latestTriggerPhoto()
                    } else {
                        delay(160)
                    }
                }
            }
            else -> Unit
        }
    }

    val displayedCount = maxOf(totalPhotos, optimisticCount)

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
            .focusRequester(focusRequester)
            .focusable()
            .onKeyEvent { ev ->
                val code = ev.nativeKeyEvent.keyCode
                if (code == KeyEvent.KEYCODE_VOLUME_UP || code == KeyEvent.KEYCODE_VOLUME_DOWN) {
                    if (ev.type == KeyEventType.KeyDown && ev.nativeKeyEvent.repeatCount == 0 && mediaKind == MediaKind.PHOTO) {
                        latestTriggerPhoto()
                    }
                    true
                } else {
                    false
                }
            }
    ) {
        // 1. Full-bleed live CameraX preview
        AndroidView(
            factory = { previewView },
            modifier = Modifier.fillMaxSize(),
        )

        // 2. Optional Onion-Skin Ghost Overlay of previous shot
        val ghost = ghostBitmap
        if (showGhost && ghost != null && mediaKind == MediaKind.PHOTO) {
            Image(
                bitmap = ghost,
                contentDescription = null,
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .fillMaxSize()
                    .alpha(0.24f),
            )
        }

        // 3. Rule-of-thirds + Dynamic Overlap Target Reticle
        if (showGrid) {
            val reading = overlapReading
            val zoneColor = overlapColor(reading.zone)
            Canvas(Modifier.fillMaxSize()) {
                val w = size.width
                val h = size.height
                val gridColor = Color(0x40EEF5F0)
                val stroke = 1.dp.toPx()

                drawLine(gridColor, Offset(w / 3f, 0f), Offset(w / 3f, h), stroke)
                drawLine(gridColor, Offset(2f * w / 3f, 0f), Offset(2f * w / 3f, h), stroke)
                drawLine(gridColor, Offset(0f, h / 3f), Offset(w, h / 3f), stroke)
                drawLine(gridColor, Offset(0f, 2f * h / 3f), Offset(w, 2f * h / 3f), stroke)

                val cx = w * 0.5f
                val cy = h * 0.46f

                if (mediaKind == MediaKind.PHOTO) {
                    // Optimal ~28% displacement target ring
                    val targetRadius = minOf(w, h) * 0.14f
                    drawCircle(
                        color = zoneColor.copy(alpha = 0.55f),
                        radius = targetRadius,
                        center = Offset(cx, cy),
                        style = Stroke(width = 1.8.dp.toPx()),
                    )

                    // Live scene displacement dot relative to last shot
                    if (reading.overlapPct != null) {
                        val dotX = (cx - reading.dxNorm * minOf(w, h) * 0.50f).coerceIn(cx - targetRadius * 1.9f, cx + targetRadius * 1.9f)
                        val dotY = (cy - reading.dyNorm * minOf(w, h) * 0.50f).coerceIn(cy - targetRadius * 1.9f, cy + targetRadius * 1.9f)
                        drawLine(
                            color = zoneColor.copy(alpha = 0.65f),
                            start = Offset(cx, cy),
                            end = Offset(dotX, dotY),
                            strokeWidth = 1.5.dp.toPx(),
                        )
                        drawCircle(
                            color = zoneColor,
                            radius = 5.5.dp.toPx(),
                            center = Offset(dotX, dotY),
                        )
                    }
                }

                // Center crosshair
                val arm = 11.dp.toPx()
                drawLine(zoneColor, Offset(cx - arm, cy), Offset(cx + arm, cy), 2.dp.toPx())
                drawLine(zoneColor, Offset(cx, cy - arm), Offset(cx, cy + arm), 2.dp.toPx())
            }
        }

        // 4. Instant subtle shutter flash border (no blocking snackbar!)
        AnimatedVisibility(
            visible = flashVisible,
            enter = fadeIn(),
            exit = fadeOut(),
            modifier = Modifier.fillMaxSize(),
        ) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color.White.copy(alpha = 0.16f))
                    .border(3.dp, MosaicColors.Lime)
            )
        }

        // 5. Top Gradient Scrim + Controls + Live Overlap Meter
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .align(Alignment.TopCenter)
                .background(
                    Brush.verticalGradient(
                        colors = listOf(Color(0xD9060B08), Color(0x88060B08), Color.Transparent)
                    )
                )
                .statusBarsPadding()
                .padding(horizontal = 12.dp, vertical = 10.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                // Close / Done button
                Row(
                    modifier = Modifier
                        .clip(CircleShape)
                        .background(Color(0xD90E1711))
                        .border(1.dp, MosaicColors.BorderStrong, CircleShape)
                        .clickable {
                            autoArmed = false
                            recording?.stop()
                            onClose()
                        }
                        .padding(horizontal = 12.dp, vertical = 7.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(6.dp),
                ) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = "Torna al projecte",
                        tint = MosaicColors.TextPrimary,
                        modifier = Modifier.size(16.dp),
                    )
                    Text(
                        text = "Fet ($displayedCount)",
                        color = MosaicColors.TextPrimary,
                        fontSize = 12.5.sp,
                        fontWeight = FontWeight.Bold,
                    )
                }

                // Pass + GPS + Ghost + Grid quick pills
                Row(
                    horizontalArrangement = Arrangement.spacedBy(6.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Row(
                        modifier = Modifier
                            .clip(CircleShape)
                            .background(Color(0xD90E1711))
                            .border(1.dp, MosaicColors.BorderLime, CircleShape)
                            .clickable {
                                onPassChange(pass + 1)
                                referenceFrameRef.set(null)
                                ghostBitmap = null
                                overlapReading = OverlapReading(null, OverlapZone.FIRST_SHOT)
                            }
                            .padding(horizontal = 10.dp, vertical = 6.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(4.dp),
                    ) {
                        Text(
                            text = "P$pass",
                            color = MosaicColors.Lime,
                            fontSize = 11.5.sp,
                            fontWeight = FontWeight.ExtraBold,
                        )
                        Icon(
                            imageVector = Icons.Default.Add,
                            contentDescription = "Nova passada",
                            tint = MosaicColors.Lime,
                            modifier = Modifier.size(13.dp),
                        )
                    }

                    HudIconToggle(
                        active = gpsGranted,
                        activeColor = MosaicColors.Emerald,
                        inactiveColor = MosaicColors.Amber,
                        icon = if (gpsGranted) Icons.Default.MyLocation else Icons.Default.LocationOff,
                        contentDescription = "GPS EXIF",
                        onClick = {
                            if (!gpsGranted) {
                                gpsPermission.launch(
                                    arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION)
                                )
                            }
                        }
                    )

                    if (mediaKind == MediaKind.PHOTO) {
                        HudIconToggle(
                            active = showGhost,
                            activeColor = MosaicColors.Lime,
                            inactiveColor = MosaicColors.TextSecondary,
                            icon = Icons.Default.FilterNone,
                            contentDescription = "Fantasma foto anterior",
                            onClick = { showGhost = !showGhost },
                        )
                    }

                    HudIconToggle(
                        active = showGrid,
                        activeColor = MosaicColors.Lime,
                        inactiveColor = MosaicColors.TextSecondary,
                        icon = if (showGrid) Icons.Default.GridOn else Icons.Default.GridOff,
                        contentDescription = "Graella",
                        onClick = { showGrid = !showGrid },
                    )
                }
            }

            // Live Overlap Semaphore Banner (Photo modes) or REC Banner (Video mode)
            if (mediaKind == MediaKind.PHOTO) {
                OverlapHudBanner(
                    reading = overlapReading,
                    autoArmed = autoArmed,
                    driveMode = driveMode,
                )
            } else if (recording != null) {
                Row(
                    modifier = Modifier
                        .align(Alignment.CenterHorizontally)
                        .clip(CircleShape)
                        .background(Color(0xE02B0808))
                        .border(1.dp, MosaicColors.Danger, CircleShape)
                        .padding(horizontal = 14.dp, vertical = 6.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(7.dp),
                ) {
                    Icon(
                        imageVector = Icons.Default.FiberManualRecord,
                        contentDescription = null,
                        tint = MosaicColors.Danger,
                        modifier = Modifier.size(12.dp),
                    )
                    Text(
                        text = String.format(Locale.US, "REC %02d:%02d · Mou-te suaument", elapsedSec / 60, elapsedSec % 60),
                        color = Color.White,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold,
                    )
                }
            }

            cameraError?.let { err ->
                Text(
                    text = err,
                    color = MosaicColors.Danger,
                    fontSize = 12.sp,
                    modifier = Modifier
                        .align(Alignment.CenterHorizontally)
                        .clip(RoundedCornerShape(8.dp))
                        .background(Color(0xDD1A0808))
                        .padding(horizontal = 10.dp, vertical = 4.dp),
                )
            }
        }

        // 6. Bottom Pro Camera Control Deck
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .align(Alignment.BottomCenter)
                .background(
                    Brush.verticalGradient(
                        colors = listOf(Color.Transparent, Color(0xBF060B08), Color(0xF2060B08))
                    )
                )
                .navigationBarsPadding()
                .padding(horizontal = 14.dp, vertical = 14.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(14.dp),
        ) {
            // Drive Mode Selector Pills
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(CircleShape)
                    .background(Color(0xCC0D1610))
                    .border(1.dp, MosaicColors.BorderSubtle, CircleShape)
                    .padding(4.dp),
                horizontalArrangement = Arrangement.spacedBy(4.dp),
            ) {
                CaptureDriveMode.entries.forEach { item ->
                    val selected = item == driveMode
                    Box(
                        modifier = Modifier
                            .weight(1f)
                            .clip(CircleShape)
                            .background(if (selected) MosaicColors.Lime else Color.Transparent)
                            .clickable(enabled = recording == null && !stoppingVideo) {
                                driveMode = item
                            }
                            .padding(vertical = 7.dp, horizontal = 4.dp),
                        contentAlignment = Alignment.Center,
                    ) {
                        Text(
                            text = item.shortLabel,
                            color = if (selected) MosaicColors.OnLime else MosaicColors.TextPrimary,
                            fontSize = 11.sp,
                            fontWeight = if (selected) FontWeight.ExtraBold else FontWeight.Medium,
                            maxLines = 1,
                            softWrap = false,
                            overflow = TextOverflow.Ellipsis,
                        )
                    }
                }
            }

            // Shutter Row: [Last Photo Thumbnail / Gallery]  —  [Big Shutter]  —  [Reset Reference]
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 8.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                // Left: Thumbnail of last captured photo -> opens Review gallery
                Box(
                    modifier = Modifier
                        .size(54.dp)
                        .clip(RoundedCornerShape(12.dp))
                        .background(Color(0xCC111B14))
                        .border(1.dp, MosaicColors.BorderStrong, RoundedCornerShape(12.dp))
                        .clickable(enabled = recording == null) {
                            autoArmed = false
                            onOpenReview()
                        },
                    contentAlignment = Alignment.Center,
                ) {
                    val thumb = lastThumbBitmap
                    if (thumb != null) {
                        Image(
                            bitmap = thumb,
                            contentDescription = "Revisa les fotos",
                            contentScale = ContentScale.Crop,
                            modifier = Modifier.fillMaxSize(),
                        )
                    } else {
                        Icon(
                            imageVector = Icons.Default.Collections,
                            contentDescription = "Revisa les fotos",
                            tint = MosaicColors.TextSecondary,
                            modifier = Modifier.size(22.dp),
                        )
                    }
                    Box(
                        modifier = Modifier
                            .align(Alignment.BottomEnd)
                            .clip(RoundedCornerShape(topStart = 6.dp))
                            .background(Color(0xE6090F0B))
                            .padding(horizontal = 5.dp, vertical = 1.dp),
                    ) {
                        Text(
                            text = "$displayedCount",
                            color = MosaicColors.Lime,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.ExtraBold,
                        )
                    }
                }

                // Center: Primary Pro Shutter / Auto-Arm / Video Record Button
                val isVideoRec = recording != null
                val isContinuousActive = autoArmed || isVideoRec
                val outerRingColor = when {
                    isVideoRec -> MosaicColors.Danger
                    autoArmed -> MosaicColors.LimeBright
                    driveMode == CaptureDriveMode.VIDEO_3DGS -> MosaicColors.Danger
                    else -> overlapColor(overlapReading.zone)
                }

                Box(
                    modifier = Modifier
                        .size(80.dp)
                        .clip(CircleShape)
                        .border(4.dp, outerRingColor, CircleShape)
                        .background(Color(0x66090F0B))
                        .clickable(enabled = session != null && !stoppingVideo) {
                            val curSession = session ?: return@clickable
                            when (driveMode) {
                                CaptureDriveMode.MANUAL_FAST -> {
                                    latestTriggerPhoto()
                                }
                                CaptureDriveMode.AUTO_OVERLAP, CaptureDriveMode.INTERVAL -> {
                                    val nextState = !autoArmed
                                    autoArmed = nextState
                                    haptic.performHapticFeedback(HapticFeedbackType.LongPress)
                                    // Take the first anchor frame immediately on start if none exists yet
                                    if (nextState && referenceFrameRef.get() == null) {
                                        latestTriggerPhoto()
                                    }
                                }
                                CaptureDriveMode.VIDEO_3DGS -> {
                                    val activeRec = recording
                                    if (activeRec != null) {
                                        stoppingVideo = true
                                        activeRec.stop()
                                    } else {
                                        val temp = pending(MediaKind.VIDEO)
                                        val startedAt = System.currentTimeMillis()
                                        val currentPass = pass
                                        recordStartMs = startedAt
                                        runCatching {
                                            recording = curSession.video(temp, recentDeviceLocation(context)) { ok ->
                                                stoppingVideo = false
                                                recording = null
                                                if (ok) {
                                                    saveSilent(temp, MediaKind.VIDEO, startedAt, currentPass)
                                                } else {
                                                    temp.delete()
                                                    reportError("No s’ha pogut desar el vídeo.")
                                                }
                                            }
                                        }.onFailure {
                                            stoppingVideo = false
                                            recording = null
                                            temp.delete()
                                        }
                                    }
                                }
                            }
                        },
                    contentAlignment = Alignment.Center,
                ) {
                    Box(
                        modifier = Modifier
                            .size(if (isContinuousActive) 36.dp else 62.dp)
                            .clip(if (isContinuousActive) RoundedCornerShape(10.dp) else CircleShape)
                            .background(
                                when {
                                    driveMode == CaptureDriveMode.VIDEO_3DGS -> MosaicColors.Danger
                                    autoArmed -> MosaicColors.Lime
                                    else -> MosaicColors.Lime
                                }
                            ),
                        contentAlignment = Alignment.Center,
                    ) {
                        Icon(
                            imageVector = when {
                                isContinuousActive -> Icons.Default.Stop
                                driveMode == CaptureDriveMode.AUTO_OVERLAP -> Icons.Default.AutoMode
                                driveMode == CaptureDriveMode.INTERVAL -> Icons.Default.Timer
                                driveMode == CaptureDriveMode.VIDEO_3DGS -> Icons.Default.Videocam
                                else -> Icons.Default.CameraAlt
                            },
                            contentDescription = "Disparador",
                            tint = if (driveMode == CaptureDriveMode.VIDEO_3DGS) Color.White else MosaicColors.OnLime,
                            modifier = Modifier.size(if (isContinuousActive) 20.dp else 26.dp),
                        )
                    }
                }

                // Right: Reset overlap anchor (useful when repositioning around an obstacle)
                Column(
                    modifier = Modifier
                        .width(54.dp)
                        .clip(RoundedCornerShape(12.dp))
                        .background(Color(0xCC111B14))
                        .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(12.dp))
                        .clickable(enabled = mediaKind == MediaKind.PHOTO) {
                            referenceFrameRef.set(null)
                            ghostBitmap = null
                            overlapReading = OverlapReading(null, OverlapZone.FIRST_SHOT)
                            haptic.performHapticFeedback(HapticFeedbackType.TextHandleMove)
                        }
                        .padding(vertical = 7.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(2.dp),
                ) {
                    Icon(
                        imageVector = Icons.Default.Refresh,
                        contentDescription = "Reinicia referència de solapament",
                        tint = MosaicColors.Lime,
                        modifier = Modifier.size(18.dp),
                    )
                    Text(
                        text = "Ref.",
                        color = MosaicColors.TextSecondary,
                        fontSize = 10.sp,
                        fontWeight = FontWeight.SemiBold,
                        maxLines = 1,
                    )
                }
            }
        }
    }
}

@Composable
private fun OverlapHudBanner(
    reading: OverlapReading,
    autoArmed: Boolean,
    driveMode: CaptureDriveMode,
) {
    val accent = overlapColor(reading.zone)
    val pct = reading.overlapPct

    val headline = when (reading.zone) {
        OverlapZone.FIRST_SHOT -> when {
            driveMode == CaptureDriveMode.AUTO_OVERLAP && !autoArmed ->
                "Prem el botó central per iniciar l’Auto-Solapament"
            else ->
                "Fes la 1a foto per activar la guia de solapament"
        }
        OverlapZone.BLURRY -> "Mou el mòbil més suaument (imatge moguda)"
        OverlapZone.LOW_TEXTURE -> "Poca textura visual — enfoca detalls o vores"
        OverlapZone.TOO_HIGH -> "Continua avançant… · Solapament ${pct ?: 95}%"
        OverlapZone.OPTIMAL -> if (autoArmed) {
            "Punt òptim (${pct}%) · Capturant automàticament!"
        } else {
            "Solapament òptim (${pct}%) · Dispara ara!"
        }
        OverlapZone.MARGINAL -> "Al límit (${pct}%) · Fes foto abans d’allunyar-te més!"
        OverlapZone.TOO_LOW -> "Poc solapament (${pct}%)! Torna una mica enrere"
    }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(12.dp))
            .background(Color(0xD90B130E))
            .border(1.dp, accent.copy(alpha = 0.65f), RoundedCornerShape(12.dp))
            .padding(horizontal = 12.dp, vertical = 8.dp),
        verticalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(7.dp),
                modifier = Modifier.weight(1f),
            ) {
                Box(
                    modifier = Modifier
                        .size(9.dp)
                        .clip(CircleShape)
                        .background(accent)
                )
                Text(
                    text = headline,
                    color = MosaicColors.TextPrimary,
                    fontSize = 12.5.sp,
                    fontWeight = FontWeight.SemiBold,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            if (autoArmed) {
                Spacer(Modifier.width(6.dp))
                Text(
                    text = "AUTO ACTIU",
                    color = MosaicColors.Lime,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.ExtraBold,
                )
            }
        }

        // Visual Overlap Meter Bar with highlighted 60%..84% optimal photogrammetry band
        Canvas(
            modifier = Modifier
                .fillMaxWidth()
                .height(7.dp)
                .clip(CircleShape)
        ) {
            val w = size.width
            val h = size.height
            drawRoundRect(
                color = Color(0xFF1A281F),
                size = Size(w, h),
                cornerRadius = CornerRadius(h / 2f, h / 2f),
            )
            // Optimal target window [60%..84%]
            drawRect(
                color = MosaicColors.Lime.copy(alpha = 0.28f),
                topLeft = Offset(w * 0.60f, 0f),
                size = Size(w * 0.24f, h),
            )
            if (pct != null) {
                val fillW = (w * (pct / 100f)).coerceIn(0f, w)
                drawRoundRect(
                    color = accent,
                    size = Size(fillW, h),
                    cornerRadius = CornerRadius(h / 2f, h / 2f),
                )
            }
        }
    }
}

@Composable
private fun HudIconToggle(
    active: Boolean,
    activeColor: Color,
    inactiveColor: Color,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    contentDescription: String,
    onClick: () -> Unit,
) {
    Box(
        modifier = Modifier
            .size(34.dp)
            .clip(CircleShape)
            .background(Color(0xD90E1711))
            .border(
                1.dp,
                if (active) activeColor.copy(alpha = 0.55f) else MosaicColors.BorderSubtle,
                CircleShape
            )
            .clickable(onClick = onClick),
        contentAlignment = Alignment.Center,
    ) {
        Icon(
            imageVector = icon,
            contentDescription = contentDescription,
            tint = if (active) activeColor else inactiveColor,
            modifier = Modifier.size(17.dp),
        )
    }
}

private fun overlapColor(zone: OverlapZone): Color = when (zone) {
    OverlapZone.FIRST_SHOT -> MosaicColors.Lime
    OverlapZone.OPTIMAL -> MosaicColors.Lime
    OverlapZone.TOO_HIGH -> MosaicColors.Sky
    OverlapZone.MARGINAL -> MosaicColors.Amber
    OverlapZone.TOO_LOW -> MosaicColors.Danger
    OverlapZone.BLURRY -> MosaicColors.Amber
    OverlapZone.LOW_TEXTURE -> MosaicColors.Amber
}

private fun recentDeviceLocation(context: Context): Location? {
    val fine = ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED
    val coarse = ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED
    if (!fine && !coarse) return null
    val manager = context.getSystemService(LocationManager::class.java) ?: return null
    val now = SystemClock.elapsedRealtimeNanos()
    val providers = buildList {
        if (fine) add(LocationManager.GPS_PROVIDER)
        add(LocationManager.NETWORK_PROVIDER)
        add(LocationManager.PASSIVE_PROVIDER)
    }
    return providers
        .mapNotNull { provider -> runCatching { manager.getLastKnownLocation(provider) }.getOrNull() }
        .filter { now - it.elapsedRealtimeNanos in 0..600_000_000_000L }
        .maxByOrNull(Location::getElapsedRealtimeNanos)
}

private class CameraSession(
    private val context: Context,
    private val provider: ProcessCameraProvider,
    private val previewView: PreviewView,
    private val preview: Preview,
    private val image: ImageCapture?,
    private val analysis: ImageAnalysis?,
    private val video: VideoCapture<Recorder>?,
) {
    fun photo(file: File, location: Location?, finish: (Boolean) -> Unit) {
        val capture = checkNotNull(image)
        previewView.display?.rotation?.let { capture.targetRotation = it }
        val metadata = ImageCapture.Metadata().apply { this.location = location }
        val outOpts = ImageCapture.OutputFileOptions.Builder(file).setMetadata(metadata).build()
        capture.takePicture(
            outOpts,
            ContextCompat.getMainExecutor(context),
            object : ImageCapture.OnImageSavedCallback {
                override fun onImageSaved(output: ImageCapture.OutputFileResults) = finish(true)
                override fun onError(exception: ImageCaptureException) = finish(false)
            }
        )
    }

    fun video(file: File, location: Location?, finish: (Boolean) -> Unit): Recording {
        val capture = checkNotNull(video)
        previewView.display?.rotation?.let { capture.targetRotation = it }
        val fileOpts = FileOutputOptions.Builder(file).apply {
            if (location != null) setLocation(location)
        }.build()
        return capture.output.prepareRecording(context, fileOpts)
            .start(ContextCompat.getMainExecutor(context)) {
                if (it is VideoRecordEvent.Finalize) {
                    finish(file.length() > 0 && (!it.hasError() || it.error == VideoRecordEvent.Finalize.ERROR_SOURCE_INACTIVE))
                }
            }
    }

    fun close() {
        runCatching { analysis?.clearAnalyzer() }
        val boundUseCases = listOfNotNull(preview, image, analysis, video).toTypedArray()
        provider.unbind(*boundUseCases)
    }

    companion object {
        fun bind(
            context: Context,
            provider: ProcessCameraProvider,
            lifecycle: androidx.lifecycle.LifecycleOwner,
            view: PreviewView,
            mode: MediaKind,
            analysisExecutor: java.util.concurrent.Executor,
            onFrame: (androidx.camera.core.ImageProxy) -> Unit,
        ): CameraSession {
            provider.unbindAll()
            val preview = Preview.Builder().build().also { it.surfaceProvider = view.surfaceProvider }
            if (mode == MediaKind.PHOTO) {
                val image = ImageCapture.Builder()
                    .setCaptureMode(ImageCapture.CAPTURE_MODE_MINIMIZE_LATENCY)
                    .setJpegQuality(94)
                    .build()
                val analysis = ImageAnalysis.Builder()
                    .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
                    .setOutputImageFormat(ImageAnalysis.OUTPUT_IMAGE_FORMAT_YUV_420_888)
                    .build()
                    .also { it.setAnalyzer(analysisExecutor, onFrame) }

                val boundWithAnalysis = runCatching {
                    provider.bindToLifecycle(lifecycle, CameraSelector.DEFAULT_BACK_CAMERA, preview, image, analysis)
                }.isSuccess

                return if (boundWithAnalysis) {
                    CameraSession(context, provider, view, preview, image, analysis, null)
                } else {
                    analysis.clearAnalyzer()
                    provider.bindToLifecycle(lifecycle, CameraSelector.DEFAULT_BACK_CAMERA, preview, image)
                    CameraSession(context, provider, view, preview, image, null, null)
                }
            } else {
                val video = VideoCapture.withOutput(
                    Recorder.Builder()
                        .setQualitySelector(QualitySelector.fromOrderedList(listOf(Quality.FHD, Quality.HD, Quality.SD)))
                        .build()
                )
                provider.bindToLifecycle(lifecycle, CameraSelector.DEFAULT_BACK_CAMERA, preview, video)
                return CameraSession(context, provider, view, preview, null, null, video)
            }
        }
    }
}

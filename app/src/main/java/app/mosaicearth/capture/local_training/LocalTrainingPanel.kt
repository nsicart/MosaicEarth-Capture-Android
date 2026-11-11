package app.mosaicearth.capture.local_training

import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import app.mosaicearth.capture.BuildConfig
import app.mosaicearth.capture.CaptureApp
import app.mosaicearth.capture.CaptureState
import app.mosaicearth.capture.photogrammetry.*
import app.mosaicearth.capture.projects.CaptureMedia
import app.mosaicearth.capture.projects.MediaKind
import app.mosaicearth.capture.projects.Project
import app.mosaicearth.capture.ui.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.withContext

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun LocalTrainingPanel(
    app: CaptureApp,
    state: CaptureState,
    project: Project,
    captures: List<CaptureMedia>,
    busy: Boolean,
    onNavigateToModels: () -> Unit = {},
) {
    val device = remember { inspectDevice(app) }
    val selectedPhotos = remember(captures) { captures.filter { it.kind == MediaKind.PHOTO && it.selected } }
    val gpsPhotos = remember(selectedPhotos) { selectedPhotos.count { it.gpsLatitude != null && it.gpsLongitude != null } }

    var pipelineTab by rememberSaveable { mutableIntStateOf(0) } // 0 = Fotogrametria, 1 = Gaussian Splatting

    // Photogrammetry options state
    var outPoints by rememberSaveable { mutableStateOf(true) }
    var outMesh by rememberSaveable { mutableStateOf(true) }
    var outOrtho by rememberSaveable(project.id) { mutableStateOf(project.scene.isAerialDefault) }
    var outDsm by rememberSaveable(project.id) { mutableStateOf(project.scene.isAerialDefault) }
    var aerialScene by rememberSaveable(project.id) { mutableStateOf(project.scene.isAerialDefault) }
    var qualityName by rememberSaveable { mutableStateOf(PhotogrammetryQuality.BALANCED.name) }
    var maxImageSize by rememberSaveable { mutableIntStateOf(1600) }
    var densityName by rememberSaveable { mutableStateOf(PointDensity.MEDIUM.name) }
    var meshTexSize by rememberSaveable { mutableIntStateOf(2048) }
    var orthoGsdCm by rememberSaveable { mutableIntStateOf(0) }
    var showAdvanced by rememberSaveable { mutableStateOf(false) }

    // Gaussian Splatting local options state
    var gsIterations by rememberSaveable { mutableIntStateOf(1500) }
    var gsMaxSplats by rememberSaveable { mutableIntStateOf(100_000) }
    var gsMaxRes by rememberSaveable { mutableIntStateOf(960) }
    var gsPreferVulkan by rememberSaveable { mutableStateOf(true) }

    val photoRuns = remember(app) { PhotogrammetryRuns(app) }
    val brushRuns = remember(app) { LocalRuns(app) }
    var photoRun by remember(project.id) { mutableStateOf<PhotogrammetryRunStatus?>(null) }
    var brushRun by remember(project.id) { mutableStateOf<LocalRun?>(null) }

    LaunchedEffect(project.id) {
        while (true) {
            photoRun = withContext(Dispatchers.IO) { photoRuns.latest(project.id) }
            brushRun = withContext(Dispatchers.IO) { brushRuns.latest(project.id) }
            delay(1_000)
        }
    }

    val photoActive = photoRun?.let { it.active && System.currentTimeMillis() - it.updated < 120_000 } == true
    val brushActive = brushRun?.let { it.active && System.currentTimeMillis() - it.updated < 30_000 } == true
    val anyLocalActive = photoActive || brushActive

    val notificationLauncher = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { }
    val importZipLauncher = rememberLauncherForActivityResult(ActivityResultContracts.OpenDocument()) { uri ->
        if (uri != null) {
            state.run(app) {
                val id = brushRuns.prepare(project.id, uri, gsIterations, gsMaxSplats, gsMaxRes)
                try {
                    withContext(Dispatchers.Main) { brushRuns.start(project.id, id) }
                } catch (error: Exception) {
                    brushRuns.update(project.id, id, "No s’ha pogut iniciar el servei", 0)
                    throw error
                }
            }
        }
    }

    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        MosaicCard(highlighted = true) {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Column(Modifier.weight(1f)) {
                        Text(
                            text = "Motor Local On-Device",
                            style = MaterialTheme.typography.titleLarge,
                            color = MosaicColors.TextPrimary,
                        )
                        Text(
                            text = "100% gratuït al mòbil · Pujada verificada a MyEarth per 0,00 €",
                            style = MaterialTheme.typography.bodySmall,
                            color = MosaicColors.TextSecondary,
                        )
                    }
                    MosaicBadge(
                        text = "0,00 € LOCAL",
                        color = MosaicColors.Lime,
                        containerColor = MosaicColors.LimeContainer,
                        icon = Icons.Default.Memory,
                    )
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    MosaicMetricPill(
                        label = "Seleccionades",
                        value = "${selectedPhotos.size}",
                        accent = if (selectedPhotos.size >= 3) MosaicColors.Lime else MosaicColors.Amber,
                        modifier = Modifier.weight(1f),
                    )
                    MosaicMetricPill(
                        label = "GPS EXIF",
                        value = "$gpsPhotos",
                        accent = if (gpsPhotos > 0) MosaicColors.Emerald else MosaicColors.TextSecondary,
                        modifier = Modifier.weight(1f),
                    )
                    MosaicMetricPill(
                        label = "RAM lliure",
                        value = "${device.availableMemory / (1024 * 1024)}M",
                        accent = MosaicColors.Sky,
                        modifier = Modifier.weight(1f),
                    )
                    MosaicMetricPill(
                        label = "Motor 3D",
                        value = if (device.vulkanReported) "Vulkan" else "C++ CPU",
                        accent = if (device.vulkanReported) MosaicColors.Lime else MosaicColors.Amber,
                        modifier = Modifier.weight(1f),
                    )
                }

                if (android.os.Build.VERSION.SDK_INT >= 33 &&
                    androidx.core.content.ContextCompat.checkSelfPermission(
                        app,
                        android.Manifest.permission.POST_NOTIFICATIONS
                    ) != android.content.pm.PackageManager.PERMISSION_GRANTED
                ) {
                    OutlinedButton(
                        onClick = { notificationLauncher.launch(android.Manifest.permission.POST_NOTIFICATIONS) },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(8.dp),
                    ) {
                        Icon(Icons.Default.NotificationsActive, contentDescription = null, modifier = Modifier.size(16.dp))
                        Spacer(Modifier.width(6.dp))
                        Text("Activa avisos de progrés en segon pla")
                    }
                }
            }
        }

        MosaicSegmentedBar(
            options = listOf(
                "Fotogrametria & Orto" to Icons.Default.Terrain,
                "3D Gaussian Splatting" to Icons.Default.AutoAwesome,
            ),
            selectedIndex = pipelineTab,
            onSelect = { pipelineTab = it },
        )

        if (pipelineTab == 0) {
            val quality = runCatching { PhotogrammetryQuality.valueOf(qualityName) }
                .getOrDefault(PhotogrammetryQuality.BALANCED)
            val density = runCatching { PointDensity.valueOf(densityName) }
                .getOrDefault(PointDensity.MEDIUM)

            MosaicCard {
                Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    MosaicSectionTitle("Productes a generar", "Tria 1 o més")
                    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        ProductToggleCard(
                            title = "Núvol PLY",
                            subtitle = "Punts 3D + color",
                            icon = Icons.Default.Grain,
                            selected = outPoints,
                            onClick = { outPoints = !outPoints },
                            modifier = Modifier.weight(1f),
                        )
                        ProductToggleCard(
                            title = "Malla GLB",
                            subtitle = "3D + textura UV",
                            icon = Icons.Default.ViewInAr,
                            selected = outMesh,
                            onClick = { outMesh = !outMesh },
                            modifier = Modifier.weight(1f),
                        )
                    }
                    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        ProductToggleCard(
                            title = "Ortofoto TIF",
                            subtitle = "GeoTIFF WGS84",
                            icon = Icons.Default.Map,
                            selected = outOrtho,
                            onClick = {
                                outOrtho = !outOrtho
                                if (outOrtho) aerialScene = true
                            },
                            modifier = Modifier.weight(1f),
                        )
                        ProductToggleCard(
                            title = "Elevació MDS",
                            subtitle = "Model superfície",
                            icon = Icons.Default.Landscape,
                            selected = outDsm,
                            onClick = {
                                outDsm = !outDsm
                                if (outDsm) aerialScene = true
                            },
                            modifier = Modifier.weight(1f),
                        )
                    }

                    HorizontalDivider(color = MosaicColors.BorderSubtle)

                    MosaicSectionTitle("Tipus d’escena i geometria")
                    MosaicSegmentedBar(
                        options = listOf(
                            "Aeri / Dron / Terreny" to Icons.Default.FlightTakeoff,
                            "Objecte / Façana 360°" to Icons.Default.ViewInAr,
                        ),
                        selectedIndex = if (aerialScene) 0 else 1,
                        onSelect = { aerialScene = (it == 0) },
                    )

                    MosaicSectionTitle("Perfil de qualitat", quality.label)
                    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                        for (q in PhotogrammetryQuality.entries) {
                            MosaicOptionChip(
                                label = q.label,
                                selected = quality == q,
                                onClick = {
                                    qualityName = q.name
                                    maxImageSize = q.featureMaxSide
                                }
                            )
                        }
                    }

                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(8.dp))
                            .background(MosaicColors.InputBg)
                            .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(8.dp))
                            .clickable { showAdvanced = !showAdvanced }
                            .padding(horizontal = 12.dp, vertical = 9.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                            Icon(Icons.Default.Tune, contentDescription = null, tint = MosaicColors.Lime, modifier = Modifier.size(16.dp))
                            Text(
                                text = "Paràmetres avançats (resolució, densitat, GSD)",
                                style = MaterialTheme.typography.labelMedium,
                                color = MosaicColors.TextPrimary,
                            )
                        }
                        Icon(
                            imageVector = if (showAdvanced) Icons.Default.ExpandLess else Icons.Default.ExpandMore,
                            contentDescription = null,
                            tint = MosaicColors.TextSecondary,
                        )
                    }

                    if (showAdvanced) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clip(RoundedCornerShape(10.dp))
                                .background(MosaicColors.InputBg)
                                .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(10.dp))
                                .padding(12.dp),
                            verticalArrangement = Arrangement.spacedBy(10.dp),
                        ) {
                            MosaicSectionTitle("Resolució màxima d’imatge", "$maxImageSize px")
                            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                                for (sz in listOf(1024, 1600, 2048)) {
                                    MosaicOptionChip("$sz px", maxImageSize == sz) { maxImageSize = sz }
                                }
                            }

                            MosaicSectionTitle("Densitat del núvol MVS", density.label)
                            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                                for (d in PointDensity.entries) {
                                    MosaicOptionChip(d.label, density == d) { densityName = d.name }
                                }
                            }

                            if (outMesh) {
                                MosaicSectionTitle("Atles de textura (.glb)", "$meshTexSize px")
                                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                                    for (tex in listOf(1024, 2048, 4096)) {
                                        MosaicOptionChip("${tex}px", meshTexSize == tex) { meshTexSize = tex }
                                    }
                                }
                            }

                            if (outOrtho || outDsm) {
                                val gsdLabel = if (orthoGsdCm == 0) "Automàtic" else "$orthoGsdCm cm/px"
                                MosaicSectionTitle("Resolució GSD Ortofoto / MDS", gsdLabel)
                                FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                                    for ((cm, lbl) in listOf(0 to "Auto", 2 to "2 cm/px", 5 to "5 cm/px", 10 to "10 cm/px")) {
                                        MosaicOptionChip(lbl, orthoGsdCm == cm) { orthoGsdCm = cm }
                                    }
                                }
                            }
                        }
                    }

                    if (selectedPhotos.size < 3) {
                        Text(
                            text = "Selecciona com a mínim 3 fotografies a Revisió o Captura per iniciar la fotogrametria.",
                            style = MaterialTheme.typography.bodySmall,
                            color = MosaicColors.Amber,
                        )
                    }

                    val anyOutputSelected = outPoints || outMesh || outOrtho || outDsm
                    Button(
                        modifier = Modifier.fillMaxWidth().height(48.dp),
                        enabled = !anyLocalActive && !busy && selectedPhotos.size >= 3 && anyOutputSelected,
                        colors = ButtonDefaults.buttonColors(
                            containerColor = MosaicColors.Lime,
                            contentColor = MosaicColors.OnLime,
                        ),
                        shape = RoundedCornerShape(10.dp),
                        onClick = {
                            val opts = PhotogrammetryOptions(
                                exportPointCloud = outPoints,
                                exportMesh = outMesh,
                                exportOrthophoto = outOrtho,
                                exportDsm = outDsm,
                                aerialScene = aerialScene,
                                quality = quality,
                                maxImageSize = maxImageSize,
                                pointDensity = density,
                                meshTextureSize = meshTexSize,
                                orthophotoGsdCm = orthoGsdCm,
                            )
                            state.run(app, show = false) {
                                photoRuns.startPhotogrammetry(project.id, opts)
                            }
                        }
                    ) {
                        Icon(Icons.Default.PlayArrow, contentDescription = null, modifier = Modifier.size(20.dp))
                        Spacer(Modifier.width(7.dp))
                        Text("Executa fotogrametria al mòbil (0 €)", fontWeight = FontWeight.Bold)
                    }
                }
            }
        } else {
            MosaicCard {
                Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    MosaicSectionTitle(
                        "Entrenament 3D Gaussian Splatting",
                        if (BuildConfig.BRUSH_ENABLED && device.vulkanReported && gsPreferVulkan) "GPU Vulkan" else "Surfel 3DGS"
                    )
                    Text(
                        text = "Calibra automàticament les càmeres amb RootSIFT + Bundle Adjustment i genera un model 3D Gaussian Splat (.ply) llest per al visor 3D i el globus de MosaicEarth.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.TextSecondary,
                    )

                    if (BuildConfig.BRUSH_ENABLED && device.vulkanReported) {
                        MosaicSegmentedBar(
                            options = listOf(
                                "GPU Vulkan (Brush)" to Icons.Default.Bolt,
                                "Surfel Splat Ràpid" to Icons.Default.Speed,
                            ),
                            selectedIndex = if (gsPreferVulkan) 0 else 1,
                            onSelect = { gsPreferVulkan = (it == 0) },
                        )
                    }

                    MosaicSectionTitle("Iteracions d’optimització", "$gsIterations")
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        for (itCount in listOf(750, 1500, 3000)) {
                            MosaicOptionChip("$itCount iter.", gsIterations == itCount) { gsIterations = itCount }
                        }
                    }

                    MosaicSectionTitle("Límit màxim de splats", "${gsMaxSplats / 1000}k")
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        for (sp in listOf(50_000, 100_000, 200_000)) {
                            MosaicOptionChip("${sp / 1000}k splats", gsMaxSplats == sp) { gsMaxSplats = sp }
                        }
                    }

                    MosaicSectionTitle("Resolució d’entrenament", "$gsMaxRes px")
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        for (res in listOf(720, 960, 1280)) {
                            MosaicOptionChip("$res px", gsMaxRes == res) { gsMaxRes = res }
                        }
                    }

                    if (selectedPhotos.size < 3) {
                        Text(
                            text = "Selecciona com a mínim 3 fotografies (o extreu fotogrames d’un vídeo) per generar un Gaussian Splat.",
                            style = MaterialTheme.typography.bodySmall,
                            color = MosaicColors.Amber,
                        )
                    }

                    Button(
                        modifier = Modifier.fillMaxWidth().height(48.dp),
                        enabled = !anyLocalActive && !busy && selectedPhotos.size >= 3,
                        colors = ButtonDefaults.buttonColors(
                            containerColor = MosaicColors.Lime,
                            contentColor = MosaicColors.OnLime,
                        ),
                        shape = RoundedCornerShape(10.dp),
                        onClick = {
                            val opts = GaussianLocalOptions(
                                iterations = gsIterations,
                                maxSplats = gsMaxSplats,
                                maxResolution = gsMaxRes,
                                preferVulkanTrainer = gsPreferVulkan,
                            )
                            state.run(app, show = false) {
                                photoRuns.startLocalGaussianFromCaptures(project.id, opts)
                            }
                        }
                    ) {
                        Icon(Icons.Default.AutoAwesome, contentDescription = null, modifier = Modifier.size(19.dp))
                        Spacer(Modifier.width(7.dp))
                        Text("Genera Gaussian Splat al mòbil (0 €)", fontWeight = FontWeight.Bold)
                    }

                    if (BuildConfig.BRUSH_ENABLED && device.vulkanReported) {
                        OutlinedButton(
                            modifier = Modifier.fillMaxWidth(),
                            enabled = !anyLocalActive && !busy,
                            shape = RoundedCornerShape(10.dp),
                            onClick = { importZipLauncher.launch(arrayOf("*/*")) }
                        ) {
                            Icon(Icons.Default.FolderZip, contentDescription = null, modifier = Modifier.size(17.dp))
                            Spacer(Modifier.width(6.dp))
                            Text("Entrena des d’un ZIP COLMAP / Nerfstudio")
                        }
                    }
                }
            }
        }

        // Active or completed Photogrammetry / SfM status card
        photoRun?.let { current ->
            MosaicCard(highlighted = photoActive || current.percent == 100) {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        MosaicBadge(
                            text = if (photoActive) "EN CURS · ${current.percent}%" else if (current.percent == 100) "COMPLETAT" else "ESTAT",
                            color = if (current.percent == 100) MosaicColors.Emerald else MosaicColors.Lime,
                            containerColor = if (current.percent == 100) MosaicColors.EmeraldContainer else MosaicColors.LimeContainer,
                        )
                        if (photoActive) {
                            TextButton(onClick = { photoRuns.cancel(project.id, current.id) }) {
                                Text("Cancel·la", color = MosaicColors.Danger)
                            }
                        }
                    }
                    Text(current.stage, style = MaterialTheme.typography.bodyMedium, color = MosaicColors.TextPrimary)
                    if (photoActive) {
                        LinearProgressIndicator(
                            progress = { (current.percent / 100f).coerceIn(0f, 1f) },
                            modifier = Modifier.fillMaxWidth().height(7.dp).clip(RoundedCornerShape(4.dp)),
                            color = MosaicColors.Lime,
                            trackColor = MosaicColors.InputBg,
                        )
                    } else if (current.percent == 100) {
                        Button(
                            onClick = onNavigateToModels,
                            modifier = Modifier.fillMaxWidth(),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = MosaicColors.Lime,
                                contentColor = MosaicColors.OnLime,
                            ),
                            shape = RoundedCornerShape(8.dp),
                        ) {
                            Icon(Icons.Default.ViewInAr, contentDescription = null, modifier = Modifier.size(18.dp))
                            Spacer(Modifier.width(6.dp))
                            Text("Obre Models per visualitzar o pujar gratis (0 €)", fontWeight = FontWeight.Bold)
                        }
                    }
                }
            }
        }

        // Active or completed Brush GPU trainer status
        brushRun?.let { current ->
            val finishedOk = current.stage.contains("desat", ignoreCase = true)
            MosaicCard(highlighted = brushActive || finishedOk) {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        MosaicBadge(
                            text = if (brushActive) "BRUSH VULKAN GPU" else if (finishedOk) "3DGS DESAT" else "BRUSH 3DGS",
                            color = if (finishedOk) MosaicColors.Emerald else MosaicColors.Lime,
                            containerColor = if (finishedOk) MosaicColors.EmeraldContainer else MosaicColors.LimeContainer,
                        )
                        if (brushActive) {
                            TextButton(onClick = {
                                runCatching { brushRuns.cancel(project.id, current.id) }
                                    .onFailure { state.message.value = "No s’ha pogut enviar la cancel·lació." }
                            }) {
                                Text("Cancel·la", color = MosaicColors.Danger)
                            }
                        }
                    }
                    Text(current.stage, style = MaterialTheme.typography.bodyMedium, color = MosaicColors.TextPrimary)
                    if (brushActive) {
                        val frac = (current.iteration.toFloat() / current.totalIterations.coerceAtLeast(1)).coerceIn(0f, 1f)
                        LinearProgressIndicator(
                            progress = { frac },
                            modifier = Modifier.fillMaxWidth().height(7.dp).clip(RoundedCornerShape(4.dp)),
                            color = MosaicColors.Lime,
                            trackColor = MosaicColors.InputBg,
                        )
                        Text(
                            text = "${current.iteration} / ${current.totalIterations} iteracions GPU",
                            style = MaterialTheme.typography.bodySmall,
                            color = MosaicColors.TextSecondary,
                        )
                    } else if (finishedOk) {
                        Button(
                            onClick = onNavigateToModels,
                            modifier = Modifier.fillMaxWidth(),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = MosaicColors.Lime,
                                contentColor = MosaicColors.OnLime,
                            ),
                            shape = RoundedCornerShape(8.dp),
                        ) {
                            Icon(Icons.Default.AutoAwesome, contentDescription = null, modifier = Modifier.size(18.dp))
                            Spacer(Modifier.width(6.dp))
                            Text("Visualitza el Gaussian Splat generat", fontWeight = FontWeight.Bold)
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun ProductToggleCard(
    title: String,
    subtitle: String,
    icon: ImageVector,
    selected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val shape = RoundedCornerShape(10.dp)
    Row(
        modifier = modifier
            .clip(shape)
            .background(if (selected) MosaicColors.LimeContainer else MosaicColors.InputBg)
            .border(
                width = 1.dp,
                color = if (selected) MosaicColors.Lime else MosaicColors.BorderSubtle,
                shape = shape,
            )
            .clickable(onClick = onClick)
            .padding(horizontal = 10.dp, vertical = 10.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = if (selected) MosaicColors.Lime else MosaicColors.TextMuted,
            modifier = Modifier.size(20.dp),
        )
        Column(Modifier.weight(1f)) {
            Text(
                text = title,
                fontSize = 12.5.sp,
                fontWeight = FontWeight.Bold,
                color = if (selected) MosaicColors.TextPrimary else MosaicColors.TextSecondary,
                maxLines = 1,
            )
            Text(
                text = subtitle,
                fontSize = 10.5.sp,
                color = MosaicColors.TextMuted,
                maxLines = 1,
            )
        }
        Icon(
            imageVector = if (selected) Icons.Default.CheckCircle else Icons.Default.RadioButtonUnchecked,
            contentDescription = null,
            tint = if (selected) MosaicColors.Lime else MosaicColors.BorderStrong,
            modifier = Modifier.size(16.dp),
        )
    }
}

@Composable
internal fun MosaicOptionChip(
    label: String,
    selected: Boolean,
    onClick: () -> Unit,
) {
    val shape = RoundedCornerShape(8.dp)
    Box(
        modifier = Modifier
            .clip(shape)
            .background(if (selected) MosaicColors.Lime else MosaicColors.InputBg)
            .border(1.dp, if (selected) MosaicColors.Lime else MosaicColors.BorderSubtle, shape)
            .clickable(onClick = onClick)
            .padding(horizontal = 12.dp, vertical = 7.dp)
    ) {
        Text(
            text = label,
            fontSize = 12.sp,
            fontWeight = if (selected) FontWeight.Bold else FontWeight.Medium,
            color = if (selected) MosaicColors.OnLime else MosaicColors.TextPrimary,
        )
    }
}

package app.mosaicearth.capture

import android.Manifest
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.BitmapFactory
import android.location.Location
import android.location.LocationManager
import android.net.Uri
import android.os.Bundle
import android.os.SystemClock
import android.provider.OpenableColumns
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import app.mosaicearth.capture.authentication.Session
import app.mosaicearth.capture.capture.CaptureDriveMode
import app.mosaicearth.capture.capture.CaptureStudioLauncher
import app.mosaicearth.capture.capture.FullScreenCameraScreen
import app.mosaicearth.capture.cloud_processing.ApiFailure
import app.mosaicearth.capture.cloud_processing.CloudPanel
import app.mosaicearth.capture.cloud_processing.CloudProject
import app.mosaicearth.capture.cloud_processing.CloudWorker
import app.mosaicearth.capture.cloud_processing.SelectMenu
import app.mosaicearth.capture.local_training.LocalTrainingPanel
import app.mosaicearth.capture.projects.*
import app.mosaicearth.capture.quality.ReviewCaptures
import app.mosaicearth.capture.ui.*
import app.mosaicearth.capture.viewer.ModelFiles
import app.mosaicearth.capture.viewer.ModelViewer
import app.mosaicearth.capture.viewer.copyBoundedTo
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.io.File
import java.util.Locale
import java.util.UUID

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        val app = application as CaptureApp
        val state = ViewModelProvider(this)[CaptureState::class.java]
        setContent {
            MosaicEarthTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MosaicColors.CanvasBg,
                ) {
                    CaptureRoot(app, state)
                }
            }
        }
    }
}

class CaptureState : ViewModel() {
    val session = MutableStateFlow<Session?>(null)
    val message = MutableStateFlow<String?>(null)
    val activeAction = MutableStateFlow(false)
    val transferBanner = MutableStateFlow<String?>(null)

    fun initialize(app: CaptureApp) = run(app, show = false) {
        val restored = app.sessions.load()?.takeIf { it.origin == app.cloud?.origin }
        setSession(app, restored)
    }

    suspend fun setSession(app: CaptureApp, session: Session?) {
        this.session.value = session
        session?.let { app.database.jobs().pending(it.ownerKey).forEach { job -> CloudWorker.schedule(app, job.id) } }
    }

    fun run(app: CaptureApp, show: Boolean = true, action: suspend () -> Unit) {
        if (show && !activeAction.compareAndSet(expect = false, update = true)) return
        app.ioScope.launch {
            try {
                action()
            } catch (cancelled: CancellationException) {
                throw cancelled
            } catch (error: Exception) {
                message.value = when (error) {
                    is IllegalArgumentException, is IllegalStateException -> error.message ?: "Operació incompleta."
                    is ApiFailure -> error.message
                    else -> "L’operació no s’ha pogut completar. Comprova el fitxer, l’espai o la connexió."
                }
            } finally {
                if (show) {
                    transferBanner.value = null
                    activeAction.value = false
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun CaptureRoot(app: CaptureApp, state: CaptureState) {
    val dao = app.database.projects()
    val projects by remember { dao.projects() }.collectAsStateWithLifecycle(emptyList())
    val statsList by remember { dao.projectStats() }.collectAsStateWithLifecycle(emptyList())
    val statsByProject = remember(statsList) { statsList.associateBy { it.projectId } }

    val session by state.session.collectAsStateWithLifecycle()
    val busy by state.activeAction.collectAsStateWithLifecycle()
    val banner by state.transferBanner.collectAsStateWithLifecycle()
    val message by state.message.collectAsStateWithLifecycle()
    val snackbar = remember { SnackbarHostState() }

    var projectId by rememberSaveable { mutableStateOf<String?>(null) }
    var selectedModel by rememberSaveable { mutableStateOf<String?>(null) }
    var fullScreenCameraMode by rememberSaveable { mutableStateOf<CaptureDriveMode?>(null) }
    var activePass by rememberSaveable { mutableIntStateOf(1) }
    var requestedTab by rememberSaveable { mutableStateOf<Int?>(null) }
    var newProject by rememberSaveable { mutableStateOf(false) }
    var showAccountDialog by rememberSaveable { mutableStateOf(false) }
    var deleteCandidate by remember { mutableStateOf<Project?>(null) }

    val project = projects.firstOrNull { it.id == projectId }

    LaunchedEffect(Unit) { state.initialize(app) }
    LaunchedEffect(message) {
        if (message != null) {
            val shown = message
            snackbar.showSnackbar(message.orEmpty(), duration = SnackbarDuration.Short)
            state.message.compareAndSet(shown, null)
        }
    }
    androidx.activity.compose.BackHandler(enabled = fullScreenCameraMode != null || selectedModel != null || projectId != null) {
        when {
            fullScreenCameraMode != null -> fullScreenCameraMode = null
            selectedModel != null -> selectedModel = null
            else -> projectId = null
        }
    }

    // Dedicated Full-Screen Edge-to-Edge Camera Studio (no top bar, no tabs, no snackbar popups)
    val camMode = fullScreenCameraMode
    if (camMode != null && project != null) {
        val currentStats = statsByProject[project.id]
        FullScreenCameraScreen(
            projectTitle = project.title,
            pass = activePass,
            totalPhotos = currentStats?.photoCount ?: 0,
            initialDriveMode = camMode,
            pending = app.storage::pending,
            saveSilent = { file, kind, time, passIndex ->
                app.ioScope.launch {
                    runCatching {
                        app.storage.commit(project.id, file, kind, time, passIndex)
                    }.onFailure { err ->
                        file.delete()
                        state.message.value = err.message ?: "No s’ha pogut desar la captura."
                    }
                }
            },
            onPassChange = { activePass = it },
            onOpenReview = {
                fullScreenCameraMode = null
                requestedTab = 1
            },
            onClose = { fullScreenCameraMode = null },
            reportError = { state.message.value = it },
        )
        return
    }

    Scaffold(
        containerColor = MosaicColors.CanvasBg,
        topBar = {
            MosaicTopBar(
                subtitle = when {
                    selectedModel != null -> "Visor 3D & GeoTIFF"
                    project != null -> project.title
                    else -> "Fotogrametria & 3DGS Mòbil"
                },
                onBack = when {
                    selectedModel != null -> ({ selectedModel = null })
                    project != null -> ({ projectId = null })
                    else -> null
                },
                accountLabel = session?.display ?: "MyEarth",
                isSignedIn = session != null,
                onAccountClick = if (app.cloud != null) ({ showAccountDialog = true }) else null,
            )
        },
        snackbarHost = {
            SnackbarHost(snackbar) { data ->
                Snackbar(
                    snackbarData = data,
                    containerColor = MosaicColors.CardElevated,
                    contentColor = MosaicColors.TextPrimary,
                    actionColor = MosaicColors.Lime,
                    shape = RoundedCornerShape(10.dp),
                )
            }
        },
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .fillMaxSize()
                .padding(horizontal = 14.dp)
        ) {
            if (project == null) {
                LazyColumn(
                    verticalArrangement = Arrangement.spacedBy(12.dp),
                    contentPadding = PaddingValues(vertical = 14.dp),
                    modifier = Modifier.fillMaxSize(),
                ) {
                    item {
                        MosaicHeroBanner(
                            title = "Captura de Camp, Dron i 3DGS",
                            subtitle = "Captura fotos i vídeo o importa targetes SD de dron. Genera fotogrametria 3D, ortofotos GeoTIFF i Gaussian Splatting gratis al mòbil (0 €) o al núvol MosaicEarth.",
                            actionLabel = "Nou projecte",
                            actionIcon = Icons.Default.Add,
                            onAction = { newProject = true },
                        )
                    }

                    item {
                        MosaicSectionTitle(
                            title = "Els teus projectes locals",
                            trailing = "${projects.size} ${if (projects.size == 1) "projecte" else "projectes"}"
                        )
                    }

                    if (projects.isEmpty()) {
                        item {
                            MosaicCard {
                                Column(
                                    modifier = Modifier.fillMaxWidth().padding(vertical = 12.dp),
                                    horizontalAlignment = Alignment.CenterHorizontally,
                                    verticalArrangement = Arrangement.spacedBy(8.dp),
                                ) {
                                    Icon(
                                        imageVector = Icons.Default.SatelliteAlt,
                                        contentDescription = null,
                                        tint = MosaicColors.Lime,
                                        modifier = Modifier.size(34.dp),
                                    )
                                    Text(
                                        text = "Encara no tens cap projecte al dispositiu",
                                        style = MaterialTheme.typography.titleMedium,
                                        color = MosaicColors.TextPrimary,
                                    )
                                    Text(
                                        text = "Crea un projecte per capturar amb la càmera, importar vídeos o llegir una targeta microSD de dron amb GPS EXIF.",
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MosaicColors.TextSecondary,
                                    )
                                }
                            }
                        }
                    }

                    items(projects, key = { it.id }) { item ->
                        val st = statsByProject[item.id]
                        ProjectHomeCard(
                            app = app,
                            project = item,
                            stats = st,
                            onOpen = {
                                activePass = 1
                                projectId = item.id
                            },
                            onQuickCamera = {
                                activePass = 1
                                projectId = item.id
                                fullScreenCameraMode = CaptureDriveMode.AUTO_OVERLAP
                            },
                            onDelete = { deleteCandidate = item },
                        )
                    }
                }
            } else {
                key(project.id, session?.ownerKey) {
                    ProjectScreen(
                        app = app,
                        state = state,
                        project = project,
                        session = session,
                        busy = busy,
                        banner = banner,
                        pass = activePass,
                        onPassChange = { activePass = it },
                        requestedTab = requestedTab,
                        onConsumeRequestedTab = { requestedTab = null },
                        onOpenFullScreenCamera = { mode -> fullScreenCameraMode = mode },
                        selectedModel = selectedModel,
                        setModel = { selectedModel = it },
                    )
                }
            }
        }
    }

    if (newProject) {
        NewProjectDialog(onDismiss = { newProject = false }) { title, scene ->
            val id = UUID.randomUUID().toString()
            state.run(app) { dao.insert(Project(id, title, scene, System.currentTimeMillis())) }
            projectId = id
            newProject = false
        }
    }

    if (showAccountDialog && app.cloud != null) {
        AccountSessionDialog(
            app = app,
            state = state,
            session = session,
            busy = busy,
            onDismiss = { showAccountDialog = false },
        )
    }

    deleteCandidate?.let { victim ->
        AlertDialog(
            onDismissRequest = { deleteCandidate = null },
            title = { Text("Elimina el projecte") },
            text = {
                Text("Vols eliminar «${victim.title}» i totes les seves captures i models locals del dispositiu? Els actius ja pujats a MyEarth es conservaran al núvol.")
            },
            confirmButton = {
                Button(
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MosaicColors.Danger,
                        contentColor = MosaicColors.TextPrimary,
                    ),
                    onClick = {
                        deleteCandidate = null
                        if (projectId == victim.id) projectId = null
                        state.run(app) {
                            app.storage.deleteProjectAndFiles(victim.id)
                            state.message.value = "Projecte eliminat."
                        }
                    }
                ) { Text("Elimina", fontWeight = FontWeight.Bold) }
            },
            dismissButton = {
                TextButton(onClick = { deleteCandidate = null }) { Text("Cancel·la") }
            }
        )
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun ProjectHomeCard(
    app: CaptureApp,
    project: Project,
    stats: ProjectCardStats?,
    onOpen: () -> Unit,
    onQuickCamera: () -> Unit,
    onDelete: () -> Unit,
) {
    var coverThumb by remember(project.id, stats?.coverMediaId) { mutableStateOf<ImageBitmap?>(null) }
    LaunchedEffect(project.id, stats?.coverMediaId) {
        val mid = stats?.coverMediaId ?: return@LaunchedEffect
        coverThumb = withContext(Dispatchers.IO) {
            val f = app.storage.coverPhotoFile(mid, stats.coverSourceVideoId != null)
            if (f.isFile) CaptureStorage.decodeExifAwareThumbnail(f, 192)?.asImageBitmap() else null
        }
    }

    MosaicCard(onClick = onOpen, padding = 12.dp) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .size(66.dp)
                    .clip(RoundedCornerShape(10.dp))
                    .background(MosaicColors.InputBg)
                    .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(10.dp)),
                contentAlignment = Alignment.Center,
            ) {
                val bmp = coverThumb
                if (bmp != null) {
                    Image(
                        bitmap = bmp,
                        contentDescription = null,
                        contentScale = ContentScale.Crop,
                        modifier = Modifier.fillMaxSize(),
                    )
                } else {
                    Icon(
                        imageVector = sceneIcon(project.scene),
                        contentDescription = null,
                        tint = MosaicColors.Lime,
                        modifier = Modifier.size(28.dp),
                    )
                }
            }

            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(5.dp),
            ) {
                Text(
                    text = project.title,
                    style = MaterialTheme.typography.titleMedium,
                    color = MosaicColors.TextPrimary,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                Text(
                    text = project.scene.label,
                    style = MaterialTheme.typography.bodySmall,
                    color = MosaicColors.TextSecondary,
                    maxLines = 1,
                )
                FlowRow(
                    horizontalArrangement = Arrangement.spacedBy(6.dp),
                    verticalArrangement = Arrangement.spacedBy(4.dp),
                ) {
                    val photos = stats?.photoCount ?: 0
                    val videos = stats?.videoCount ?: 0
                    val gps = stats?.gpsCount ?: 0
                    val models = stats?.modelCount ?: 0
                    MosaicBadge(
                        text = if (videos > 0) "$photos FOTOS · $videos VÍD" else "$photos FOTOS",
                        color = MosaicColors.TextPrimary,
                        containerColor = MosaicColors.InputBg,
                    )
                    if (gps > 0 || (project.latitude != null && project.longitude != null)) {
                        MosaicBadge(
                            text = if (gps > 0) "GPS $gps" else "WGS84",
                            color = MosaicColors.Emerald,
                            containerColor = MosaicColors.EmeraldContainer,
                        )
                    }
                    if (models > 0) {
                        MosaicBadge(
                            text = "$models ${if (models == 1) "MODEL" else "MODELS"}",
                            color = MosaicColors.Lime,
                            containerColor = MosaicColors.LimeContainer,
                        )
                    }
                }
            }

            Row(
                horizontalArrangement = Arrangement.spacedBy(4.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                IconButton(
                    onClick = onQuickCamera,
                    modifier = Modifier
                        .size(36.dp)
                        .clip(RoundedCornerShape(9.dp))
                        .background(MosaicColors.LimeContainer)
                        .border(1.dp, MosaicColors.BorderLime, RoundedCornerShape(9.dp)),
                ) {
                    Icon(
                        imageVector = Icons.Default.PhotoCamera,
                        contentDescription = "Càmera ràpida",
                        tint = MosaicColors.Lime,
                        modifier = Modifier.size(18.dp),
                    )
                }
                IconButton(
                    onClick = onDelete,
                    modifier = Modifier.size(34.dp),
                ) {
                    Icon(
                        imageVector = Icons.Default.DeleteOutline,
                        contentDescription = "Elimina projecte",
                        tint = MosaicColors.TextMuted,
                        modifier = Modifier.size(19.dp),
                    )
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun ProjectScreen(
    app: CaptureApp,
    state: CaptureState,
    project: Project,
    session: Session?,
    busy: Boolean,
    banner: String?,
    pass: Int,
    onPassChange: (Int) -> Unit,
    requestedTab: Int?,
    onConsumeRequestedTab: () -> Unit,
    onOpenFullScreenCamera: (CaptureDriveMode) -> Unit,
    selectedModel: String?,
    setModel: (String?) -> Unit,
) {
    val dao = app.database.projects()
    val captures by remember(project.id) { dao.media(project.id) }.collectAsStateWithLifecycle(emptyList())
    val models by remember(project.id, session?.ownerKey) { dao.models(project.id, session?.ownerKey) }
        .collectAsStateWithLifecycle(emptyList())
    var page by rememberSaveable { mutableIntStateOf(0) }
    var processMode by rememberSaveable { mutableIntStateOf(0) } // 0 = Local (0 €), 1 = Cloud (Pagament/Pla)
    var details by rememberSaveable { mutableStateOf(false) }
    var freeUploadModel by remember { mutableStateOf<Model?>(null) }
    var deleteModelCandidate by remember { mutableStateOf<Model?>(null) }
    val model = models.firstOrNull { it.id == selectedModel }
    val context = androidx.compose.ui.platform.LocalContext.current

    LaunchedEffect(requestedTab) {
        if (requestedTab != null) {
            page = requestedTab
            onConsumeRequestedTab()
        }
    }

    val importModelLauncher = rememberLauncherForActivityResult(ActivityResultContracts.OpenDocument()) { uri ->
        if (uri != null) state.run(app) { importExternalAsset(app, project, uri) }
    }

    val importGalleryLauncher = rememberLauncherForActivityResult(ActivityResultContracts.OpenMultipleDocuments()) { uris ->
        if (uris.isNotEmpty()) {
            state.run(app) {
                var importedCount = 0
                for ((i, uri) in uris.withIndex()) {
                    state.transferBanner.value = "Important de la galeria (${i + 1}/${uris.size})…"
                    app.storage.importUri(project.id, uri, pass)
                    importedCount++
                }
                state.message.value = "$importedCount fitxers importats al projecte."
            }
        }
    }

    val importFolderSdLauncher = rememberLauncherForActivityResult(ActivityResultContracts.OpenDocumentTree()) { treeUri ->
        if (treeUri != null) {
            state.run(app) {
                val summary = app.storage.importFolder(project.id, treeUri, pass) { cur, total ->
                    state.transferBanner.value = "Important carpeta / SD dron ($cur/$total)…"
                }
                state.message.value =
                    "Importats ${summary.photos} fotos i ${summary.videos} vídeos (${summary.gpsTagged} amb GPS EXIF)."
            }
        }
    }

    val exportLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.CreateDocument("application/octet-stream")
    ) { uri ->
        if (uri != null && model != null) {
            state.run(app) {
                checkNotNull(app.contentResolver.openOutputStream(uri)).use { out ->
                    app.storage.file(model).inputStream().use { it.copyTo(out) }
                }
                state.message.value = "Fitxer exportat correctament."
            }
        }
    }

    if (freeUploadModel != null) {
        FreeUploadToCloudDialog(
            app = app,
            state = state,
            project = project,
            model = checkNotNull(freeUploadModel),
            session = session,
            busy = busy,
            onDismiss = { freeUploadModel = null }
        )
    }

    deleteModelCandidate?.let { victim ->
        AlertDialog(
            onDismissRequest = { deleteModelCandidate = null },
            title = { Text("Elimina l’actiu local") },
            text = { Text("Vols eliminar «${victim.name}» de l’emmagatzematge local del mòbil?") },
            confirmButton = {
                Button(
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MosaicColors.Danger,
                        contentColor = MosaicColors.TextPrimary,
                    ),
                    onClick = {
                        deleteModelCandidate = null
                        state.run(app) {
                            app.storage.deleteModelAndFiles(victim)
                            state.message.value = "Actiu eliminat."
                        }
                    }
                ) { Text("Elimina", fontWeight = FontWeight.Bold) }
            },
            dismissButton = {
                TextButton(onClick = { deleteModelCandidate = null }) { Text("Cancel·la") }
            }
        )
    }

    if (model != null) {
        ModelViewer(
            model = model,
            file = app.storage.file(model),
            previewFile = app.storage.previewFile(model),
            uploadFree = if (app.cloud != null) ({ freeUploadModel = model }) else null,
            export = {
                val safeName = model.name.replace(Regex("[^A-Za-z0-9._ -]"), "_").trim().ifBlank { "model" }
                exportLauncher.launch("$safeName.${model.extension}")
            },
            share = {
                val uri = FileProvider.getUriForFile(context, "${context.packageName}.files", app.storage.file(model))
                val send = Intent(Intent.ACTION_SEND)
                    .setType("application/octet-stream")
                    .putExtra(Intent.EXTRA_STREAM, uri)
                    .addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                runCatching { context.startActivity(Intent.createChooser(send, "Comparteix l’actiu")) }
                    .onFailure {
                        Toast.makeText(context, "No hi ha cap aplicació per compartir el fitxer.", Toast.LENGTH_SHORT).show()
                    }
            },
            close = { setModel(null) }
        )
        return
    }

    Spacer(Modifier.height(10.dp))
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Row(
            modifier = Modifier.weight(1f),
            horizontalArrangement = Arrangement.spacedBy(6.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            MosaicBadge(
                text = project.scene.label.uppercase(),
                icon = sceneIcon(project.scene),
            )
            if (project.latitude != null && project.longitude != null) {
                MosaicBadge(
                    text = String.format(Locale.US, "%.4f, %.4f", project.latitude, project.longitude),
                    color = MosaicColors.Emerald,
                    containerColor = MosaicColors.EmeraldContainer,
                    icon = Icons.Default.LocationOn,
                )
            }
        }
        OutlinedButton(
            onClick = { details = true },
            contentPadding = PaddingValues(horizontal = 10.dp, vertical = 4.dp),
            modifier = Modifier.height(32.dp),
            shape = RoundedCornerShape(8.dp),
        ) {
            Icon(Icons.Default.MyLocation, contentDescription = null, modifier = Modifier.size(14.dp), tint = MosaicColors.Lime)
            Spacer(Modifier.width(4.dp))
            Text("Ubicació", style = MaterialTheme.typography.labelMedium)
        }
    }

    Spacer(Modifier.height(8.dp))
    MosaicSegmentedBar(
        options = listOf(
            "Captura" to Icons.Default.PhotoCamera,
            "Revisió (${captures.size})" to Icons.Default.Collections,
            "Processa" to Icons.Default.AutoFixHigh,
            "Models (${models.size})" to Icons.Default.ViewInAr,
        ),
        selectedIndex = page,
        onSelect = { page = it },
    )

    if (busy) {
        Spacer(Modifier.height(6.dp))
        LinearProgressIndicator(
            modifier = Modifier.fillMaxWidth().height(5.dp).clip(RoundedCornerShape(3.dp)),
            color = MosaicColors.Lime,
            trackColor = MosaicColors.InputBg,
        )
        banner?.let {
            Text(
                text = it,
                style = MaterialTheme.typography.labelMedium,
                color = MosaicColors.Lime,
                modifier = Modifier.padding(top = 4.dp),
            )
        }
    }

    when (page) {
        0 -> Column(
            Modifier.verticalScroll(rememberScrollState()).padding(vertical = 10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            val photoCount = captures.count { it.kind == MediaKind.PHOTO }
            val videoCount = captures.count { it.kind == MediaKind.VIDEO }
            val guideText = project.scene.steps[(pass - 1).coerceAtMost(project.scene.steps.lastIndex)]

            CaptureStudioLauncher(
                projectTitle = project.title,
                sceneGuide = guideText,
                pass = pass,
                photoCount = photoCount,
                videoCount = videoCount,
                onIncrementPass = { onPassChange(pass + 1) },
                onOpenFullScreen = onOpenFullScreenCamera,
            )

            MosaicSectionTitle("O importa arxius existents")

            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                ImportSourceCard(
                    title = "Importa Galeria",
                    subtitle = "Fotos, vídeos, HEIC, WebP",
                    icon = Icons.Default.PhotoLibrary,
                    enabled = !busy,
                    onClick = { importGalleryLauncher.launch(arrayOf("image/*", "video/*")) },
                    modifier = Modifier.weight(1f),
                )
                ImportSourceCard(
                    title = "Targeta SD / Dron",
                    subtitle = "Carpeta DCIM + GPS EXIF",
                    icon = Icons.Default.SdStorage,
                    enabled = !busy,
                    highlighted = true,
                    onClick = { importFolderSdLauncher.launch(null) },
                    modifier = Modifier.weight(1f),
                )
            }
        }

        1 -> ReviewCaptures(app, state, project, captures, busy)

        2 -> Column(
            Modifier.verticalScroll(rememberScrollState()).padding(vertical = 10.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            MosaicSegmentedBar(
                options = listOf(
                    "Al Mòbil · 0 €" to Icons.Default.PhoneAndroid,
                    "MosaicEarth Cloud" to Icons.Default.CloudQueue,
                ),
                selectedIndex = processMode,
                onSelect = { processMode = it },
            )
            if (processMode == 0) {
                LocalTrainingPanel(
                    app = app,
                    state = state,
                    project = project,
                    captures = captures,
                    busy = busy,
                    onNavigateToModels = { page = 3 }
                )
            } else {
                CloudPanel(app, state, project, captures, session, busy)
            }
        }

        3 -> LazyColumn(
            verticalArrangement = Arrangement.spacedBy(10.dp),
            contentPadding = PaddingValues(vertical = 10.dp),
            modifier = Modifier.fillMaxSize(),
        ) {
            item {
                OutlinedButton(
                    enabled = !busy,
                    modifier = Modifier.fillMaxWidth().height(44.dp),
                    shape = RoundedCornerShape(10.dp),
                    onClick = { importModelLauncher.launch(arrayOf("*/*")) }
                ) {
                    Icon(Icons.Default.UploadFile, contentDescription = null, tint = MosaicColors.Lime, modifier = Modifier.size(18.dp))
                    Spacer(Modifier.width(7.dp))
                    Text("Importa actiu extern (.ply, .glb, .tif, .splat, .spz)")
                }
            }

            if (models.isEmpty()) {
                item {
                    MosaicCard {
                        Column(
                            modifier = Modifier.fillMaxWidth().padding(vertical = 12.dp),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(6.dp),
                        ) {
                            Icon(Icons.Default.ViewInAr, contentDescription = null, tint = MosaicColors.Lime, modifier = Modifier.size(32.dp))
                            Text(
                                text = "Cap model o ortofoto generat encara",
                                style = MaterialTheme.typography.titleSmall,
                                color = MosaicColors.TextPrimary,
                            )
                            Text(
                                text = "Els núvols de punts (.ply), malles 3D (.glb), ortofotos (.tif), MDS (.tif) i Gaussian Splats apareixeran aquí per inspeccionar-los i pujar-los gratis (0 €) a MyEarth.",
                                style = MaterialTheme.typography.bodySmall,
                                color = MosaicColors.TextSecondary,
                            )
                        }
                    }
                }
            }

            items(models, key = { it.id }) { row ->
                ModelItemCard(
                    app = app,
                    model = row,
                    busy = busy,
                    onOpen = { setModel(row.id) },
                    onUploadFree = if (app.cloud != null) ({ freeUploadModel = row }) else null,
                    onDelete = { deleteModelCandidate = row },
                )
            }
        }
    }

    if (details) ProjectDetails(app, state, project, onDismiss = { details = false })
}

@Composable
private fun ImportSourceCard(
    title: String,
    subtitle: String,
    icon: ImageVector,
    enabled: Boolean,
    highlighted: Boolean = false,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val shape = RoundedCornerShape(12.dp)
    Row(
        modifier = modifier
            .clip(shape)
            .background(if (highlighted) MosaicColors.LimeContainer else MosaicColors.CardBg)
            .border(
                width = 1.dp,
                color = if (highlighted) MosaicColors.BorderLime else MosaicColors.BorderSubtle,
                shape = shape,
            )
            .clickable(enabled = enabled, onClick = onClick)
            .padding(horizontal = 11.dp, vertical = 10.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(9.dp),
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = MosaicColors.Lime,
            modifier = Modifier.size(22.dp),
        )
        Column(Modifier.weight(1f)) {
            Text(
                text = title,
                fontSize = 13.sp,
                fontWeight = FontWeight.Bold,
                color = MosaicColors.TextPrimary,
                maxLines = 1,
            )
            Text(
                text = subtitle,
                fontSize = 10.5.sp,
                color = MosaicColors.TextSecondary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun ModelItemCard(
    app: CaptureApp,
    model: Model,
    busy: Boolean,
    onOpen: () -> Unit,
    onUploadFree: (() -> Unit)?,
    onDelete: () -> Unit,
) {
    var previewBmp by remember(model.id) { mutableStateOf<ImageBitmap?>(null) }
    LaunchedEffect(model.id) {
        previewBmp = withContext(Dispatchers.IO) {
            val pf = app.storage.previewFile(model)
            if (pf.isFile) {
                val opts = BitmapFactory.Options().apply { inSampleSize = 4 }
                BitmapFactory.decodeFile(pf.path, opts)?.asImageBitmap()
            } else null
        }
    }

    MosaicCard(onClick = onOpen, highlighted = model.cloudAssetId != null) {
        Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Box(
                    modifier = Modifier
                        .size(56.dp)
                        .clip(RoundedCornerShape(9.dp))
                        .background(MosaicColors.InputBg)
                        .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(9.dp)),
                    contentAlignment = Alignment.Center,
                ) {
                    val bmp = previewBmp
                    if (bmp != null) {
                        Image(
                            bitmap = bmp,
                            contentDescription = null,
                            contentScale = ContentScale.Crop,
                            modifier = Modifier.fillMaxSize(),
                        )
                    } else {
                        Icon(
                            imageVector = roleIcon(model.role),
                            contentDescription = null,
                            tint = MosaicColors.Lime,
                            modifier = Modifier.size(26.dp),
                        )
                    }
                }

                Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(6.dp),
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        MosaicBadge(text = model.roleBadge)
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
                        style = MaterialTheme.typography.titleSmall,
                        color = MosaicColors.TextPrimary,
                        maxLines = 2,
                        overflow = TextOverflow.Ellipsis,
                    )
                    val mib = String.format(Locale.US, "%.2f MiB", model.bytes / (1024.0 * 1024.0))
                    val geo = if (model.latitude != null && model.longitude != null) {
                        String.format(Locale.US, " · WGS84 %.4f, %.4f", model.latitude, model.longitude)
                    } else ""
                    Text(
                        text = "${model.extension.uppercase()} · $mib$geo",
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.TextSecondary,
                    )
                }

                IconButton(onClick = onDelete, modifier = Modifier.size(32.dp)) {
                    Icon(
                        imageVector = Icons.Default.DeleteOutline,
                        contentDescription = "Elimina actiu",
                        tint = MosaicColors.TextMuted,
                        modifier = Modifier.size(18.dp),
                    )
                }
            }

            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                Button(
                    onClick = onOpen,
                    modifier = Modifier.weight(1f).height(40.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MosaicColors.Lime,
                        contentColor = MosaicColors.OnLime,
                    ),
                    shape = RoundedCornerShape(8.dp),
                ) {
                    Icon(Icons.Default.Visibility, contentDescription = null, modifier = Modifier.size(16.dp))
                    Spacer(Modifier.width(5.dp))
                    Text("Visualitza", fontWeight = FontWeight.Bold)
                }
                if (onUploadFree != null) {
                    OutlinedButton(
                        enabled = !busy,
                        onClick = onUploadFree,
                        modifier = Modifier.weight(1.25f).height(40.dp),
                        shape = RoundedCornerShape(8.dp),
                    ) {
                        Icon(Icons.Default.CloudUpload, contentDescription = null, tint = MosaicColors.Lime, modifier = Modifier.size(16.dp))
                        Spacer(Modifier.width(5.dp))
                        Text(
                            text = if (model.cloudAssetId != null) "Actualitza (0 €)" else "Puja a MyEarth (0 €)",
                            maxLines = 1,
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun AccountSessionDialog(
    app: CaptureApp,
    state: CaptureState,
    session: Session?,
    busy: Boolean,
    onDismiss: () -> Unit,
) {
    val api = app.cloud ?: return
    if (session != null) {
        AlertDialog(
            onDismissRequest = onDismiss,
            title = { Text("Compte MosaicEarth MyEarth") },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    MosaicBadge(
                        text = "SESSIÓ ACTIVA",
                        color = MosaicColors.Lime,
                        containerColor = MosaicColors.LimeContainer,
                        icon = Icons.Default.VerifiedUser,
                    )
                    Text(session.display, style = MaterialTheme.typography.titleMedium)
                    Text(
                        text = "Servidor: ${session.origin}\nPots pujar gratuïtament (0,00 €) qualsevol actiu generat al mòbil o llançar treballs al núvol GPU.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.TextSecondary,
                    )
                }
            },
            confirmButton = {
                OutlinedButton(
                    enabled = !busy,
                    onClick = {
                        onDismiss()
                        state.run(app) {
                            app.sessions.clear()
                            state.setSession(app, null)
                            runCatching { api.revoke(session) }
                        }
                    }
                ) { Text("Tanca sessió", color = MosaicColors.Danger) }
            },
            dismissButton = {
                Button(
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MosaicColors.Lime,
                        contentColor = MosaicColors.OnLime,
                    ),
                    onClick = onDismiss,
                ) { Text("D’acord", fontWeight = FontWeight.Bold) }
            }
        )
    } else {
        var email by remember { mutableStateOf("") }
        var password by remember { mutableStateOf("") }
        AlertDialog(
            onDismissRequest = onDismiss,
            title = { Text("Inicia sessió a MosaicEarth") },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text(
                        text = "Connecta el teu compte (${api.origin}) per sincronitzar models locals per 0,00 € a MyEarth o processar amb GPU al núvol.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.TextSecondary,
                    )
                    OutlinedTextField(
                        value = email,
                        onValueChange = { email = it.take(254) },
                        singleLine = true,
                        modifier = Modifier.fillMaxWidth(),
                        label = { Text("Correu electrònic") }
                    )
                    OutlinedTextField(
                        value = password,
                        onValueChange = { password = it.take(512) },
                        singleLine = true,
                        modifier = Modifier.fillMaxWidth(),
                        visualTransformation = PasswordVisualTransformation(),
                        label = { Text("Contrasenya") }
                    )
                }
            },
            confirmButton = {
                Button(
                    enabled = !busy && email.isNotBlank() && password.isNotEmpty(),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MosaicColors.Lime,
                        contentColor = MosaicColors.OnLime,
                    ),
                    onClick = {
                        val e = email.trim()
                        val p = password
                        password = ""
                        state.run(app) {
                            val s = api.signIn(e, p)
                            app.sessions.save(s)
                            state.setSession(app, s)
                            withContext(Dispatchers.Main) { onDismiss() }
                        }
                    }
                ) { Text("Inicia sessió", fontWeight = FontWeight.Bold) }
            },
            dismissButton = { TextButton(onClick = onDismiss) { Text("Cancel·la") } }
        )
    }
}

@Composable
private fun FreeUploadToCloudDialog(
    app: CaptureApp,
    state: CaptureState,
    project: Project,
    model: Model,
    session: Session?,
    busy: Boolean,
    onDismiss: () -> Unit,
) {
    val api = app.cloud ?: return
    if (session == null) {
        AccountSessionDialog(app = app, state = state, session = null, busy = busy, onDismiss = onDismiss)
        return
    }

    var cloudProjects by remember { mutableStateOf<List<CloudProject>>(emptyList()) }
    var cloudMosaics by remember { mutableStateOf<List<CloudProject>>(emptyList()) }
    var targetProject by remember { mutableStateOf<CloudProject?>(null) }
    var targetMosaic by remember { mutableStateOf<CloudProject?>(null) }

    LaunchedEffect(session.ownerKey) {
        runCatching {
            withContext(Dispatchers.IO) { api.projects(session) to api.mosaics(session) }
        }.onSuccess { (p, m) ->
            cloudProjects = p
            cloudMosaics = m
        }
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Pujada gratuïta a MyEarth (0,00 €)") },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                MosaicBadge(text = model.roleBadge)
                Text(model.name, style = MaterialTheme.typography.titleSmall)
                Text(
                    text = "L’actiu processat al mòbil es transferirà per blocs amb verificació SHA-256 i es publicarà com a privat a MyEarth sense cap cost.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MosaicColors.TextSecondary,
                )
                SelectMenu(
                    targetProject?.name ?: "Crea projecte nou: ${project.title}",
                    listOf(null) + cloudProjects,
                    { it?.name ?: "Crea projecte nou: ${project.title}" }
                ) { targetProject = it }

                if (cloudMosaics.isNotEmpty()) {
                    SelectMenu(
                        targetMosaic?.name ?: "Sense MyMosaic opcional",
                        listOf(null) + cloudMosaics,
                        { it?.name ?: "Sense MyMosaic opcional" }
                    ) { targetMosaic = it }
                }
            }
        },
        confirmButton = {
            Button(
                enabled = !busy,
                colors = ButtonDefaults.buttonColors(
                    containerColor = MosaicColors.Lime,
                    contentColor = MosaicColors.OnLime,
                ),
                onClick = {
                    val chosenProject = targetProject?.id
                    val chosenMosaic = targetMosaic?.id
                    onDismiss()
                    state.run(app) {
                        val file = app.storage.file(model)
                        val lat = model.latitude ?: project.latitude
                        val lon = model.longitude ?: project.longitude
                        val res = api.uploadFreeAsset(
                            session = session,
                            file = file,
                            assetName = model.name,
                            format = model.extension,
                            role = model.role,
                            projectTitle = project.title,
                            description = project.description,
                            targetProjectId = chosenProject,
                            mosaicId = chosenMosaic,
                            latitude = lat,
                            longitude = lon,
                            altitude = model.altitude,
                            onProgress = { sent, total ->
                                val pct = ((sent * 100L) / total.coerceAtLeast(1L)).toInt()
                                state.transferBanner.value = "Pujant gratis a MyEarth ($pct%)…"
                            }
                        )
                        app.database.projects().markUploadedToCloud(model.id, res.assetId, res.projectId)
                        state.message.value = "Pujat gratuïtament a MyEarth (0,00 €)!"
                    }
                }
            ) { Text("Puja ara (0,00 €)", fontWeight = FontWeight.Bold) }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Cancel·la") } }
    )
}

private suspend fun importExternalAsset(app: CaptureApp, project: Project, uri: Uri) {
    val name = app.contentResolver.query(uri, arrayOf(OpenableColumns.DISPLAY_NAME), null, null, null)
        ?.use { if (it.moveToFirst()) it.getString(0) else null } ?: error("El fitxer no té nom.")
    val rawFormat = name.substringAfterLast('.', "").lowercase(Locale.ROOT)
    val format = if (rawFormat == "tiff") "tif" else rawFormat
    require(format in ModelFiles.allFormats) {
        "Tria un fitxer .ply, .glb, .tif, .splat o .spz."
    }
    val temp = File.createTempFile("import-", ".pending", app.storage.models)
    try {
        checkNotNull(app.contentResolver.openInputStream(uri))
            .use { it.copyBoundedTo(temp, ModelFiles.MAX_ASSET_BYTES) }
        val role = ModelFiles.inferRoleOnImport(temp, format, name)
        ModelFiles.verifyAsset(temp, format, role)
        val model = Model(
            id = UUID.randomUUID().toString(),
            projectId = project.id,
            name = name.substringBeforeLast('.'),
            extension = format,
            bytes = temp.length(),
            createdAt = System.currentTimeMillis(),
            role = role,
            latitude = project.latitude,
            longitude = project.longitude,
        )
        val target = app.storage.file(model)
        check(temp.renameTo(target))
        try {
            app.database.projects().insert(model)
        } catch (error: Exception) {
            target.delete()
            throw error
        }
    } finally {
        temp.delete()
    }
}

@Composable
private fun NewProjectDialog(onDismiss: () -> Unit, create: (String, Scene) -> Unit) {
    var title by rememberSaveable { mutableStateOf("") }
    var scene by rememberSaveable { mutableStateOf(Scene.DRONE_AERIAL) }
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Nou projecte de captura") },
        text = {
            Column(
                modifier = Modifier.heightIn(max = 440.dp).verticalScroll(rememberScrollState()),
                verticalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                OutlinedTextField(
                    value = title,
                    onValueChange = { title = it.take(100) },
                    label = { Text("Nom del projecte") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
                MosaicSectionTitle("Tipus d’escena")
                for (item in Scene.entries) {
                    val selected = item == scene
                    val shape = RoundedCornerShape(9.dp)
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(shape)
                            .background(if (selected) MosaicColors.LimeContainer else MosaicColors.InputBg)
                            .border(1.dp, if (selected) MosaicColors.Lime else MosaicColors.BorderSubtle, shape)
                            .clickable { scene = item }
                            .padding(horizontal = 10.dp, vertical = 9.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(9.dp),
                    ) {
                        Icon(
                            imageVector = sceneIcon(item),
                            contentDescription = null,
                            tint = if (selected) MosaicColors.Lime else MosaicColors.TextSecondary,
                            modifier = Modifier.size(20.dp),
                        )
                        Text(
                            text = item.label,
                            modifier = Modifier.weight(1f),
                            style = MaterialTheme.typography.bodyMedium,
                            fontWeight = if (selected) FontWeight.Bold else FontWeight.Normal,
                            color = if (selected) MosaicColors.TextPrimary else MosaicColors.TextSecondary,
                        )
                        if (selected) {
                            Icon(Icons.Default.CheckCircle, contentDescription = null, tint = MosaicColors.Lime, modifier = Modifier.size(17.dp))
                        }
                    }
                }
            }
        },
        confirmButton = {
            Button(
                enabled = title.isNotBlank(),
                colors = ButtonDefaults.buttonColors(
                    containerColor = MosaicColors.Lime,
                    contentColor = MosaicColors.OnLime,
                ),
                onClick = { create(title.trim(), scene) }
            ) { Text("Crea projecte", fontWeight = FontWeight.Bold) }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Cancel·la") } }
    )
}

@Composable
private fun ProjectDetails(app: CaptureApp, state: CaptureState, project: Project, onDismiss: () -> Unit) {
    var description by rememberSaveable { mutableStateOf(project.description) }
    var latitude by rememberSaveable { mutableStateOf(project.latitude?.toString().orEmpty()) }
    var longitude by rememberSaveable { mutableStateOf(project.longitude?.toString().orEmpty()) }
    var approximate by remember { mutableStateOf<Location?>(null) }
    var locationMessage by remember { mutableStateOf<String?>(null) }
    val obtainApproximate = {
        approximate = findApproximateLocation(app)
        val location = approximate
        if (location == null) {
            locationMessage = "Ubicació recent no disponible. Pots introduir-la manualment o importar fotos amb GPS EXIF."
        } else {
            latitude = location.latitude.toString()
            longitude = location.longitude.toString()
            locationMessage = "Ubicació obtinguda · precisió ±${location.accuracy.toInt()} m."
        }
    }
    val locationPermission = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestMultiplePermissions()
    ) { map ->
        if (map[Manifest.permission.ACCESS_FINE_LOCATION] == true ||
            map[Manifest.permission.ACCESS_COARSE_LOCATION] == true
        ) obtainApproximate() else locationMessage = "Ubicació opcional. Pots introduir-la manualment."
    }
    val lat = latitude.replace(',', '.').toDoubleOrNull()
    val lon = longitude.replace(',', '.').toDoubleOrNull()
    val empty = latitude.isBlank() && longitude.isBlank()
    val valid = lat != null && lon != null && lat in -90.0..90.0 && lon in -180.0..180.0
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Ubicació WGS84 i detalls") },
        text = {
            Column(
                Modifier.heightIn(max = 420.dp).verticalScroll(rememberScrollState()),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                OutlinedTextField(
                    value = description,
                    onValueChange = { description = it.take(2000) },
                    label = { Text("Descripció") },
                    modifier = Modifier.fillMaxWidth(),
                    maxLines = 4
                )
                Text(
                    text = "Coordenades WGS84 (s’emplenen automàticament quan les fotos tenen GPS EXIF de dron o mòbil).",
                    style = MaterialTheme.typography.bodySmall,
                    color = MosaicColors.TextSecondary,
                )
                OutlinedTextField(
                    value = latitude,
                    onValueChange = { latitude = it.take(32); approximate = null },
                    label = { Text("Latitud") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true
                )
                OutlinedTextField(
                    value = longitude,
                    onValueChange = { longitude = it.take(32); approximate = null },
                    label = { Text("Longitud") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true
                )
                OutlinedButton(
                    modifier = Modifier.fillMaxWidth(),
                    onClick = {
                        val hasLoc = ContextCompat.checkSelfPermission(app, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED ||
                            ContextCompat.checkSelfPermission(app, Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED
                        if (hasLoc) obtainApproximate()
                        else locationPermission.launch(
                            arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION)
                        )
                    }
                ) {
                    Icon(Icons.Default.MyLocation, contentDescription = null, tint = MosaicColors.Lime, modifier = Modifier.size(16.dp))
                    Spacer(Modifier.width(6.dp))
                    Text("Usa la ubicació actual del dispositiu")
                }
                locationMessage?.let { Text(it, style = MaterialTheme.typography.bodySmall, color = MosaicColors.Lime) }
                Text(
                    text = "Visibilitat privada per defecte a MyEarth.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MosaicColors.TextMuted,
                )
            }
        },
        confirmButton = {
            Button(
                enabled = empty || valid,
                colors = ButtonDefaults.buttonColors(
                    containerColor = MosaicColors.Lime,
                    contentColor = MosaicColors.OnLime,
                ),
                onClick = {
                    val sample = approximate
                    val retained = sample == null && project.locationMode in setOf("GPS_APPROXIMATE", "EXIF_GPS") &&
                        project.latitude == lat && project.longitude == lon
                    val mode = when {
                        empty -> "LOCAL"
                        sample != null -> "GPS_APPROXIMATE"
                        retained -> project.locationMode
                        else -> "MANUALLY_PLACED"
                    }
                    val accuracy = sample?.accuracy ?: project.horizontalAccuracy.takeIf { retained }
                    val observed = sample?.time ?: project.locationTime.takeIf { retained }
                    state.run(app) {
                        app.database.projects().details(project.id, description, mode, lat, lon, accuracy, observed)
                    }
                    onDismiss()
                }
            ) { Text("Desa", fontWeight = FontWeight.Bold) }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Cancel·la") } }
    )
}

private fun sceneIcon(scene: Scene): ImageVector = when (scene) {
    Scene.DRONE_AERIAL -> Icons.Default.FlightTakeoff
    Scene.TERRAIN -> Icons.Default.Terrain
    Scene.OBJECT -> Icons.Default.Category
    Scene.SCULPTURE -> Icons.Default.AccountBalance
    Scene.MONUMENT -> Icons.Default.Castle
    Scene.FACADE -> Icons.Default.Apartment
    Scene.BUILDING -> Icons.Default.Domain
    Scene.STREET -> Icons.Default.Route
    Scene.OUTDOOR -> Icons.Default.Park
    Scene.FREE -> Icons.Default.Explore
}

private fun roleIcon(role: String): ImageVector = when (role) {
    "pointcloud" -> Icons.Default.Grain
    "mesh" -> Icons.Default.ViewInAr
    "orthophoto" -> Icons.Default.Map
    "dsm" -> Icons.Default.Landscape
    else -> Icons.Default.AutoAwesome
}

private fun findApproximateLocation(context: Context): Location? {
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

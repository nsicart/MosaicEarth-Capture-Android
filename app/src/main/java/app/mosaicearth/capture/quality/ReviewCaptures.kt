package app.mosaicearth.capture.quality

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material.icons.filled.DeleteOutline
import androidx.compose.material.icons.filled.FilterCenterFocus
import androidx.compose.material.icons.filled.MovieFilter
import androidx.compose.material.icons.filled.MyLocation
import androidx.compose.material.icons.filled.Videocam
import androidx.compose.material.icons.filled.WarningAmber
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import app.mosaicearth.capture.CaptureApp
import app.mosaicearth.capture.CaptureState
import app.mosaicearth.capture.projects.CaptureMedia
import app.mosaicearth.capture.projects.CaptureStorage
import app.mosaicearth.capture.projects.MediaKind
import app.mosaicearth.capture.projects.Project
import app.mosaicearth.capture.ui.MosaicBadge
import app.mosaicearth.capture.ui.MosaicCard
import app.mosaicearth.capture.ui.MosaicColors
import app.mosaicearth.capture.ui.MosaicMetricPill
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.File
import java.util.Locale

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun ReviewCaptures(
    app: CaptureApp,
    state: CaptureState,
    project: Project,
    captures: List<CaptureMedia>,
    busy: Boolean,
) {
    val photos = remember(captures) { captures.filter { it.kind == MediaKind.PHOTO } }
    val selected = remember(photos) { photos.filter(CaptureMedia::selected) }
    val gpsCount = remember(selected) { selected.count { it.gpsLatitude != null && it.gpsLongitude != null } }
    val lowSharpCount = remember(selected) { selected.count { (it.sharpness ?: 0.0) < Quality.LOW_SHARPNESS } }
    val duplicates = remember(photos) {
        photos.zipWithNext().mapNotNull { (previous, current) ->
            val a = previous.fingerprint
            val b = current.fingerprint
            current.id.takeIf { a != null && b != null && Quality.nearDuplicate(a, b) }
        }.toSet()
    }
    val dupSelectedCount = remember(selected, duplicates) { selected.count { it.id in duplicates } }
    var selectedVideo by rememberSaveable { mutableStateOf<String?>(null) }

    LazyColumn(
        contentPadding = PaddingValues(vertical = 12.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        item {
            MosaicCard(Modifier.fillMaxWidth()) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    MosaicMetricPill(
                        label = "Seleccionades",
                        value = "${selected.size}/${photos.size}",
                        accent = if (selected.size >= 3) MosaicColors.Lime else MosaicColors.Amber,
                        modifier = Modifier.weight(1f)
                    )
                    MosaicMetricPill(
                        label = "Amb GPS EXIF",
                        value = "$gpsCount",
                        accent = if (gpsCount > 0) MosaicColors.Emerald else MosaicColors.TextSecondary,
                        modifier = Modifier.weight(1f)
                    )
                    MosaicMetricPill(
                        label = "Borroses / Dup.",
                        value = "$lowSharpCount / $dupSelectedCount",
                        accent = if (lowSharpCount + dupSelectedCount == 0) MosaicColors.Lime else MosaicColors.Amber,
                        modifier = Modifier.weight(1f)
                    )
                }

                if (photos.isNotEmpty()) {
                    Spacer(Modifier.height(10.dp))
                    FlowRow(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        verticalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        OutlinedButton(
                            enabled = !busy,
                            onClick = {
                                state.run(app, show = false) {
                                    val dao = app.database.projects()
                                    for (p in photos) if (p.fingerprint != null) dao.select(p.id, true)
                                }
                            },
                            contentPadding = PaddingValues(horizontal = 11.dp, vertical = 6.dp)
                        ) {
                            Icon(Icons.Default.CheckCircle, contentDescription = null, modifier = Modifier.size(15.dp))
                            Spacer(Modifier.width(5.dp))
                            Text("Selecciona totes")
                        }
                        OutlinedButton(
                            enabled = !busy,
                            onClick = {
                                state.run(app, show = false) {
                                    val dao = app.database.projects()
                                    var removed = 0
                                    for (p in photos) {
                                        if (p.selected && (p.sharpness ?: 0.0) < Quality.LOW_SHARPNESS) {
                                            dao.select(p.id, false)
                                            removed++
                                        }
                                    }
                                    state.message.value = if (removed > 0) "$removed fotos borroses excloses." else "Cap foto borrosa seleccionada."
                                }
                            },
                            contentPadding = PaddingValues(horizontal = 11.dp, vertical = 6.dp)
                        ) {
                            Icon(Icons.Default.FilterCenterFocus, contentDescription = null, modifier = Modifier.size(15.dp))
                            Spacer(Modifier.width(5.dp))
                            Text("Exclou borroses")
                        }
                        OutlinedButton(
                            enabled = !busy,
                            onClick = {
                                state.run(app, show = false) {
                                    val dao = app.database.projects()
                                    var removed = 0
                                    for (p in photos) {
                                        if (p.selected && p.id in duplicates) {
                                            dao.select(p.id, false)
                                            removed++
                                        }
                                    }
                                    state.message.value = if (removed > 0) "$removed preses duplicades excloses." else "Cap presa duplicada activa."
                                }
                            },
                            contentPadding = PaddingValues(horizontal = 11.dp, vertical = 6.dp)
                        ) {
                            Icon(Icons.Default.ContentCopy, contentDescription = null, modifier = Modifier.size(15.dp))
                            Spacer(Modifier.width(5.dp))
                            Text("Exclou duplicades")
                        }
                    }
                }

                if (captures.isEmpty()) {
                    Spacer(Modifier.height(8.dp))
                    Text(
                        "Encara no hi ha cap captura en aquest projecte. Fes fotos/vídeo a «Captura» o importa una carpeta SD de dron.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.TextSecondary
                    )
                } else if (selected.size < 3) {
                    Spacer(Modifier.height(8.dp))
                    Text(
                        "Selecciona com a mínim 3 fotografies solapades (o extreu fotogrames d’un vídeo) per reconstruir en 3D.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.Amber
                    )
                }
            }
        }

        items(captures, key = { it.id }) { capture ->
            MosaicCard(
                modifier = Modifier.fillMaxWidth(),
                highlighted = capture.kind == MediaKind.PHOTO && capture.selected,
                padding = 10.dp
            ) {
                if (capture.kind == MediaKind.PHOTO) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        Thumbnail(
                            file = app.storage.file(capture),
                            modifier = Modifier
                                .size(74.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(MosaicColors.InputBg)
                                .border(1.dp, MosaicColors.BorderSubtle, RoundedCornerShape(8.dp))
                        )
                        Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                            Row(
                                horizontalArrangement = Arrangement.spacedBy(6.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = if (capture.sourceVideoId == null) "Fotografia" else "Fotograma vídeo",
                                    style = MaterialTheme.typography.titleSmall,
                                    color = MosaicColors.TextPrimary
                                )
                                capture.pass?.let { p ->
                                    MosaicBadge(text = "P$p")
                                }
                            }

                            val mib = String.format(Locale.US, "%.1f MB", capture.bytes / (1024.0 * 1024.0))
                            Text(
                                text = "${capture.width ?: "?"}×${capture.height ?: "?"} · $mib",
                                style = MaterialTheme.typography.bodySmall,
                                color = MosaicColors.TextSecondary
                            )

                            FlowRow(
                                horizontalArrangement = Arrangement.spacedBy(6.dp),
                                verticalArrangement = Arrangement.spacedBy(4.dp)
                            ) {
                                if (capture.gpsLatitude != null && capture.gpsLongitude != null) {
                                    val altStr = capture.gpsAltitude?.let { String.format(Locale.US, " %.0fm", it) }.orEmpty()
                                    MosaicBadge(
                                        text = String.format(Locale.US, "%.4f, %.4f%s", capture.gpsLatitude, capture.gpsLongitude, altStr),
                                        color = MosaicColors.Emerald,
                                        containerColor = MosaicColors.EmeraldContainer,
                                        icon = Icons.Default.MyLocation
                                    )
                                }
                                val sharp = capture.sharpness ?: 0.0
                                if (sharp < Quality.LOW_SHARPNESS) {
                                    MosaicBadge(
                                        text = "Borrosa",
                                        color = MosaicColors.Amber,
                                        containerColor = MosaicColors.AmberContainer,
                                        icon = Icons.Default.WarningAmber
                                    )
                                } else {
                                    MosaicBadge(
                                        text = "Nítida (${sharp.toInt()})",
                                        color = MosaicColors.Lime,
                                        containerColor = MosaicColors.LimeContainer
                                    )
                                }
                                if (capture.id in duplicates) {
                                    MosaicBadge(
                                        text = "Similar",
                                        color = MosaicColors.Amber,
                                        containerColor = MosaicColors.AmberContainer
                                    )
                                }
                            }
                        }
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Checkbox(
                                checked = capture.selected,
                                enabled = !busy && capture.fingerprint != null,
                                onCheckedChange = { value ->
                                    state.run(app, show = false) { app.database.projects().select(capture.id, value) }
                                }
                            )
                            IconButton(
                                enabled = !busy,
                                onClick = {
                                    state.run(app, show = false) {
                                        app.storage.deleteMediaAndFile(capture)
                                    }
                                },
                                modifier = Modifier.size(30.dp)
                            ) {
                                Icon(
                                    Icons.Default.DeleteOutline,
                                    contentDescription = "Elimina captura",
                                    tint = MosaicColors.TextMuted,
                                    modifier = Modifier.size(18.dp)
                                )
                            }
                        }
                    }
                } else {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .size(56.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(MosaicColors.SkyContainer)
                                .border(1.dp, MosaicColors.Sky.copy(alpha = 0.4f), RoundedCornerShape(8.dp)),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(Icons.Default.Videocam, contentDescription = null, tint = MosaicColors.Sky)
                        }
                        Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(3.dp)) {
                            Text("Vídeo capturat / importat", style = MaterialTheme.typography.titleSmall)
                            val secs = (capture.durationMs ?: 0L) / 1000L
                            val mib = String.format(Locale.US, "%.1f MB", capture.bytes / (1024.0 * 1024.0))
                            Text(
                                text = "${secs}s · ${capture.width ?: "?"}×${capture.height ?: "?"} · $mib",
                                style = MaterialTheme.typography.bodySmall,
                                color = MosaicColors.TextSecondary
                            )
                        }
                        Button(
                            enabled = !busy,
                            onClick = { selectedVideo = capture.id },
                            contentPadding = PaddingValues(horizontal = 12.dp, vertical = 8.dp),
                            shape = RoundedCornerShape(8.dp)
                        ) {
                            Icon(Icons.Default.MovieFilter, contentDescription = null, modifier = Modifier.size(16.dp))
                            Spacer(Modifier.width(5.dp))
                            Text("Extreu", fontWeight = FontWeight.Bold)
                        }
                        IconButton(
                            enabled = !busy,
                            onClick = {
                                state.run(app, show = false) {
                                    app.storage.deleteMediaAndFile(capture)
                                }
                            },
                            modifier = Modifier.size(32.dp)
                        ) {
                            Icon(
                                Icons.Default.DeleteOutline,
                                contentDescription = "Elimina vídeo",
                                tint = MosaicColors.TextMuted,
                                modifier = Modifier.size(18.dp)
                            )
                        }
                    }
                }
            }
        }
    }

    captures.firstOrNull { it.projectId == project.id && it.id == selectedVideo }?.let { video ->
        ExtractionDialog(dismiss = { selectedVideo = null }) { intervalMs, resolution ->
            selectedVideo = null
            state.run(app) {
                state.transferBanner.value = "Extraient fotogrames nítids del vídeo…"
                val count = app.storage.extract(video, intervalMs, resolution)
                state.message.value = "$count fotogrames extrets i seleccionats per al processament."
            }
        }
    }
}

@Composable
internal fun Thumbnail(file: File, modifier: Modifier) {
    var image by remember(file.path) { mutableStateOf<ImageBitmap?>(null) }
    LaunchedEffect(file.path) {
        image = withContext(Dispatchers.IO) {
            CaptureStorage.decodeExifAwareThumbnail(file, targetMaxPx = 256)?.asImageBitmap()
        }
    }
    if (image != null) {
        Image(
            bitmap = checkNotNull(image),
            contentDescription = "Previsualització de la captura",
            modifier = modifier,
            contentScale = ContentScale.Crop
        )
    } else {
        Box(modifier)
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun ExtractionDialog(dismiss: () -> Unit, extract: (Long, Int) -> Unit) {
    var intervalMs by rememberSaveable { mutableLongStateOf(1000L) }
    var resolution by rememberSaveable { mutableIntStateOf(1600) }
    val intervals = listOf(
        500L to "0.5 s (2 fps)",
        1000L to "1.0 s",
        1500L to "1.5 s",
        2000L to "2.0 s",
        3000L to "3.0 s",
        5000L to "5.0 s",
    )
    AlertDialog(
        onDismissRequest = dismiss,
        title = { Text("Extreu fotogrames per a 3D / 3DGS") },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                Text(
                    "Tria cada quant de temps extreure fotogrames (0.5 s–1.0 s recomanat per a òrbites ràpides o dron):",
                    style = MaterialTheme.typography.bodySmall,
                    color = MosaicColors.TextSecondary
                )
                FlowRow(horizontalArrangement = Arrangement.spacedBy(6.dp), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    for ((ms, label) in intervals) {
                        FilterChip(
                            selected = intervalMs == ms,
                            onClick = { intervalMs = ms },
                            label = { Text(label) }
                        )
                    }
                }
                Text("Resolució màxima del fotograma:", style = MaterialTheme.typography.labelLarge)
                FlowRow(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                    listOf(960, 1280, 1600, 1920).forEach { px ->
                        FilterChip(
                            selected = resolution == px,
                            onClick = { resolution = px },
                            label = { Text("$px px") }
                        )
                    }
                }
            }
        },
        confirmButton = {
            Button(onClick = { extract(intervalMs, resolution) }) {
                Text("Extreu fotogrames", fontWeight = FontWeight.Bold)
            }
        },
        dismissButton = { TextButton(onClick = dismiss) { Text("Cancel·la") } }
    )
}

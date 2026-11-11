package app.mosaicearth.capture.cloud_processing

import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.Login
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.work.ExistingWorkPolicy
import app.mosaicearth.capture.CaptureApp
import app.mosaicearth.capture.CaptureState
import app.mosaicearth.capture.authentication.Session
import app.mosaicearth.capture.local_training.MosaicOptionChip
import app.mosaicearth.capture.projects.CaptureMedia
import app.mosaicearth.capture.projects.MediaKind
import app.mosaicearth.capture.projects.Project
import app.mosaicearth.capture.quality.Quality
import app.mosaicearth.capture.ui.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import java.util.Locale
import java.util.UUID

private data class Prepared(
    val quote: CloudQuote,
    val project: Project,
    val manifest: JSONArray,
    val target: String?,
    val options: JSONObject,
    val bytes: Long,
    val count: Int,
)

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun CloudPanel(
    app: CaptureApp,
    state: CaptureState,
    project: Project,
    captures: List<CaptureMedia>,
    session: Session?,
    busy: Boolean,
) {
    val context = LocalContext.current
    val api = app.cloud

    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        MosaicCard(highlighted = session != null) {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Column(Modifier.weight(1f)) {
                        Text(
                            text = "MosaicEarth Cloud GPU",
                            style = MaterialTheme.typography.titleLarge,
                            color = MosaicColors.TextPrimary,
                        )
                        Text(
                            text = "Fotogrametria pesada OpenDroneMap i 3DGS d’alta precisió als servidors GPU",
                            style = MaterialTheme.typography.bodySmall,
                            color = MosaicColors.TextSecondary,
                        )
                    }
                    MosaicBadge(
                        text = "CLOUD GPU",
                        color = MosaicColors.Sky,
                        containerColor = MosaicColors.SkyContainer,
                        icon = Icons.Default.CloudQueue,
                    )
                }

                if (api == null) {
                    Text(
                        text = "El connector cloud no té cap servidor configurat en aquesta compilació.",
                        color = MosaicColors.Amber,
                        style = MaterialTheme.typography.bodySmall,
                    )
                    return@Column
                }

                if (session == null) {
                    var email by remember { mutableStateOf("") }
                    var password by remember { mutableStateOf("") }
                    Text(
                        text = "Inicia sessió amb el teu compte MosaicEarth (${api.origin}) per processar al núvol amb el teu pla o pagament per ús.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MosaicColors.TextSecondary,
                    )
                    OutlinedTextField(
                        value = email,
                        onValueChange = { email = it.take(254) },
                        modifier = Modifier.fillMaxWidth(),
                        singleLine = true,
                        label = { Text("Correu electrònic MosaicEarth") }
                    )
                    OutlinedTextField(
                        value = password,
                        onValueChange = { password = it.take(512) },
                        modifier = Modifier.fillMaxWidth(),
                        singleLine = true,
                        visualTransformation = PasswordVisualTransformation(),
                        label = { Text("Contrasenya") }
                    )
                    Button(
                        modifier = Modifier.fillMaxWidth().height(46.dp),
                        enabled = !busy && email.isNotBlank() && password.isNotEmpty(),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = MosaicColors.Lime,
                            contentColor = MosaicColors.OnLime,
                        ),
                        shape = RoundedCornerShape(10.dp),
                        onClick = {
                            val loginEmail = email.trim()
                            val loginPassword = password
                            password = ""
                            state.run(app) {
                                val current = api.signIn(loginEmail, loginPassword)
                                app.sessions.save(current)
                                state.setSession(app, current)
                            }
                        }
                    ) {
                        Icon(Icons.AutoMirrored.Filled.Login, contentDescription = null, modifier = Modifier.size(18.dp))
                        Spacer(Modifier.width(6.dp))
                        Text("Inicia sessió a MosaicEarth", fontWeight = FontWeight.Bold)
                    }
                    return@Column
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(6.dp),
                        modifier = Modifier.weight(1f),
                    ) {
                        Icon(Icons.Default.VerifiedUser, contentDescription = null, tint = MosaicColors.Lime, modifier = Modifier.size(16.dp))
                        Text(
                            text = session.display,
                            style = MaterialTheme.typography.labelLarge,
                            color = MosaicColors.TextPrimary,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis,
                        )
                    }
                    TextButton(
                        enabled = !busy,
                        onClick = {
                            state.run(app) {
                                app.sessions.clear()
                                state.setSession(app, null)
                                runCatching { api.revoke(session) }
                            }
                        }
                    ) {
                        Text("Tanca sessió", color = MosaicColors.TextSecondary)
                    }
                }
            }
        }

        if (api == null || session == null) return@Column

        val jobs by remember(project.id, session.ownerKey) {
            app.database.jobs().observe(project.id, session.ownerKey)
        }.collectAsStateWithLifecycle(emptyList())

        var options by remember { mutableStateOf<List<CloudPreset>>(emptyList()) }
        var targets by remember { mutableStateOf<List<CloudProject>>(emptyList()) }
        var mosaics by remember { mutableStateOf<List<CloudProject>>(emptyList()) }
        var cloudEngineFilter by rememberSaveable { mutableStateOf("photogrammetry") }
        var selectedPreset by remember { mutableStateOf<CloudPreset?>(null) }
        var mosaic by remember { mutableStateOf<CloudProject?>(null) }
        var target by remember { mutableStateOf<CloudProject?>(null) }
        var cloudDsm by rememberSaveable { mutableStateOf(true) }
        var cloudDtm by rememberSaveable { mutableStateOf(false) }
        var cloudGsdCm by rememberSaveable { mutableIntStateOf(0) }
        var prepared by remember { mutableStateOf<Prepared?>(null) }
        var publish by remember { mutableStateOf<CloudJob?>(null) }
        var loadError by remember { mutableStateOf(false) }
        var refresh by remember { mutableIntStateOf(0) }

        LaunchedEffect(session.ownerKey, refresh) {
            loadError = false
            try {
                val result = withContext(Dispatchers.IO) {
                    Triple(api.presets(), api.projects(session), api.mosaics(session))
                }
                options = result.first
                targets = result.second
                mosaics = result.third
                selectedPreset = options.firstOrNull {
                    it.engine.equals(cloudEngineFilter, ignoreCase = true) || it.engine.isBlank()
                } ?: options.firstOrNull()
            } catch (cancelled: kotlinx.coroutines.CancellationException) {
                throw cancelled
            } catch (_: Exception) {
                loadError = true
            }
        }

        if (loadError) {
            MosaicCard {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text(
                        text = "No s’han pogut carregar els perfils i projectes de MosaicEarth Cloud.",
                        color = MosaicColors.Amber,
                        style = MaterialTheme.typography.bodySmall,
                    )
                    OutlinedButton(onClick = { refresh++ }) { Text("Torna-ho a provar") }
                }
            }
        }

        val filteredPresets = remember(options, cloudEngineFilter) {
            val matching = options.filter { it.engine.equals(cloudEngineFilter, ignoreCase = true) }
            matching.ifEmpty { options }
        }

        MosaicSegmentedBar(
            options = listOf(
                "Fotogrametria Cloud" to Icons.Default.Terrain,
                "Gaussian Splatting GPU" to Icons.Default.AutoAwesome,
            ),
            selectedIndex = if (cloudEngineFilter == "photogrammetry") 0 else 1,
            onSelect = { idx ->
                val eng = if (idx == 0) "photogrammetry" else "gaussian"
                cloudEngineFilter = eng
                selectedPreset = options.firstOrNull { it.engine.equals(eng, true) } ?: options.firstOrNull()
            },
        )

        MosaicCard {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                if (options.isNotEmpty()) {
                    MosaicSectionTitle("Perfil de processament")
                    SelectMenu(
                        selectedPreset?.label ?: "Tria el perfil de qualitat",
                        filteredPresets,
                        { it.label }
                    ) { selectedPreset = it }

                    selectedPreset?.description?.takeIf { it.isNotBlank() }?.let {
                        Text(it, style = MaterialTheme.typography.bodySmall, color = MosaicColors.TextSecondary)
                    }

                    if (cloudEngineFilter == "photogrammetry") {
                        MosaicSectionTitle("Productes fotogramètrics (OpenDroneMap)")
                        FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                            MosaicOptionChip("MDS (.tif)", cloudDsm) { cloudDsm = !cloudDsm }
                            MosaicOptionChip("MDT Terreny (.tif)", cloudDtm) { cloudDtm = !cloudDtm }
                            for ((cm, lbl) in listOf(0 to "GSD Auto", 2 to "GSD 2 cm", 5 to "GSD 5 cm")) {
                                MosaicOptionChip(lbl, cloudGsdCm == cm) { cloudGsdCm = cm }
                            }
                        }
                    }

                    MosaicSectionTitle("Destinació a MyEarth")
                    SelectMenu(
                        target?.name ?: "Projecte privat nou: ${project.title}",
                        listOf(null) + targets,
                        { it?.name ?: "Projecte privat nou: ${project.title}" }
                    ) { target = it }
                }

                val photos = captures.filter { it.kind == MediaKind.PHOTO && it.selected }
                val bytes = photos.sumOf(CaptureMedia::bytes)
                val mibStr = String.format(Locale.US, "%.1f MiB", bytes / (1024.0 * 1024.0))
                val blurred = photos.count { (it.sharpness ?: 0.0) < Quality.LOW_SHARPNESS }

                Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    MosaicMetricPill(
                        label = "Imatges",
                        value = "${photos.size}",
                        accent = MosaicColors.Lime,
                        modifier = Modifier.weight(1f),
                    )
                    MosaicMetricPill(
                        label = "Mida pujada",
                        value = mibStr,
                        accent = MosaicColors.Sky,
                        modifier = Modifier.weight(1f),
                    )
                    MosaicMetricPill(
                        label = "Nitidesa",
                        value = if (blurred == 0) "Òptima" else "$blurred baixes",
                        accent = if (blurred == 0) MosaicColors.Emerald else MosaicColors.Amber,
                        modifier = Modifier.weight(1f),
                    )
                }

                val minPhotos = if (cloudEngineFilter == "gaussian") 4 else 2
                if (photos.size < minPhotos) {
                    Text(
                        text = "Selecciona com a mínim $minPhotos fotografies a Revisió per enviar aquest treball al núvol.",
                        color = MosaicColors.Amber,
                        style = MaterialTheme.typography.bodySmall,
                    )
                }

                Button(
                    modifier = Modifier.fillMaxWidth().height(48.dp),
                    enabled = photos.size >= minPhotos && selectedPreset != null && !busy && !loadError,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MosaicColors.Lime,
                        contentColor = MosaicColors.OnLime,
                    ),
                    shape = RoundedCornerShape(10.dp),
                    onClick = {
                        val preset = selectedPreset ?: return@Button
                        val targetId = target?.id
                        val jobOpts = JSONObject().apply {
                            if (cloudEngineFilter == "photogrammetry") {
                                put("dsm", cloudDsm)
                                put("dtm", cloudDtm)
                                if (cloudGsdCm > 0) put("orthophotoGsdCm", cloudGsdCm)
                            }
                        }
                        state.run(app) {
                            val manifest = makeManifest(photos, app.storage::file)
                            val quote = api.quote(session, preset.id, manifest, targetId)
                            withContext(Dispatchers.Main) {
                                prepared = Prepared(quote, project, manifest, targetId, jobOpts, bytes, photos.size)
                            }
                        }
                    }
                ) {
                    Icon(Icons.Default.CloudUpload, contentDescription = null, modifier = Modifier.size(19.dp))
                    Spacer(Modifier.width(7.dp))
                    Text("Calcula pressupost i processa al núvol", fontWeight = FontWeight.Bold)
                }
            }
        }

        prepared?.let { request ->
            val q = request.quote
            AlertDialog(
                onDismissRequest = { prepared = null },
                title = { Text("Pressupost MosaicEarth Cloud") },
                text = {
                    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        MosaicBadge(text = q.engine)
                        Text(
                            text = "${request.count} imatges · ${String.format(Locale.US, "%.1f MiB", request.bytes / (1024.0 * 1024.0))}",
                            style = MaterialTheme.typography.bodyMedium,
                        )
                        when {
                            q.coveredByPlan -> Text(
                                text = "Inclòs al teu pla actiu (0,00 €)",
                                color = MosaicColors.Lime,
                                fontWeight = FontWeight.Bold,
                            )
                            q.requiresStripeCheckout -> Text(
                                text = String.format(
                                    Locale.US,
                                    "Import: %.2f € · Cartera: %.2f € · Pagament Stripe: %.2f €",
                                    q.priceEur,
                                    q.walletEur,
                                    q.stripeDueEur
                                ),
                                color = MosaicColors.Amber,
                                fontWeight = FontWeight.SemiBold,
                            )
                            else -> Text(
                                text = String.format(
                                    Locale.US,
                                    "Import: %.2f € (es descomptarà de la cartera: %.2f €)",
                                    q.priceEur,
                                    q.walletEur
                                ),
                                color = MosaicColors.Emerald,
                            )
                        }
                        if (q.conditions.isNotBlank()) {
                            Text(q.conditions, style = MaterialTheme.typography.bodySmall, color = MosaicColors.TextSecondary)
                        }
                        if (q.requiresStripeCheckout) {
                            Text(
                                text = "Es pujaran primer les imatges amb verificació SHA-256 i tot seguit s’obrirà el pagament segur amb Stripe.",
                                style = MaterialTheme.typography.bodySmall,
                                color = MosaicColors.TextSecondary,
                            )
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
                            prepared = null
                            state.run(app) {
                                require(q.expiresAtMillis > System.currentTimeMillis()) {
                                    "El pressupost ha caducat. Demana’n un de nou."
                                }
                                val location = JSONObject().put("mode", request.project.locationMode)
                                request.project.latitude?.let { location.put("latitude", it) }
                                request.project.longitude?.let { location.put("longitude", it) }
                                request.project.horizontalAccuracy?.let { location.put("horizontalAccuracy", it.toDouble()) }
                                request.project.locationTime?.let { location.put("observedAtMillis", it) }
                                val payload = JSONObject()
                                    .put("quoteId", q.id)
                                    .put("files", request.manifest)
                                    .put("projectId", request.target ?: JSONObject.NULL)
                                    .put("title", request.project.title)
                                    .put("description", request.project.description)
                                    .put("scene", request.project.scene.name)
                                    .put("visibility", "private")
                                    .put("location", location)
                                    .put("options", request.options)
                                val job = CloudJob(
                                    id = UUID.randomUUID().toString(),
                                    projectId = request.project.id,
                                    owner = session.ownerKey,
                                    payload = payload.toString(),
                                    totalBytes = request.bytes,
                                    createdAt = System.currentTimeMillis()
                                )
                                app.database.jobs().insert(job)
                                CloudWorker.schedule(app, job.id)
                            }
                        }
                    ) {
                        Text(
                            text = if (q.requiresStripeCheckout) "Puja i paga amb Stripe" else "Confirma i processa",
                            fontWeight = FontWeight.Bold,
                        )
                    }
                },
                dismissButton = { TextButton(onClick = { prepared = null }) { Text("Cancel·la") } }
            )
        }

        for (job in jobs) {
            MosaicCard(highlighted = job.control == JobControl.RUN) {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        MosaicBadge(
                            text = "${job.percent}%",
                            color = if (job.control == JobControl.DONE) MosaicColors.Emerald else MosaicColors.Lime,
                            containerColor = if (job.control == JobControl.DONE) MosaicColors.EmeraldContainer else MosaicColors.LimeContainer,
                        )
                        Text(
                            text = String.format(
                                Locale.US,
                                "%.1f / %.1f MiB",
                                job.uploaded / (1024.0 * 1024.0),
                                job.totalBytes / (1024.0 * 1024.0)
                            ),
                            style = MaterialTheme.typography.labelMedium,
                            color = MosaicColors.TextSecondary,
                        )
                    }
                    Text(job.status, style = MaterialTheme.typography.titleSmall, color = MosaicColors.TextPrimary)
                    LinearProgressIndicator(
                        progress = { (job.percent / 100f).coerceIn(0f, 1f) },
                        modifier = Modifier.fillMaxWidth().height(6.dp).clip(RoundedCornerShape(3.dp)),
                        color = MosaicColors.Lime,
                        trackColor = MosaicColors.InputBg,
                    )
                    job.finalCredits?.let { cents ->
                        Text(
                            text = String.format(Locale.US, "Import final: %.2f €", cents / 100.0),
                            style = MaterialTheme.typography.bodySmall,
                            color = MosaicColors.TextSecondary,
                        )
                    }

                    if (!job.checkoutUrl.isNullOrBlank() && job.control != JobControl.DONE) {
                        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                            Button(
                                colors = ButtonDefaults.buttonColors(
                                    containerColor = MosaicColors.Lime,
                                    contentColor = MosaicColors.OnLime,
                                ),
                                onClick = {
                                    runCatching {
                                        context.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(job.checkoutUrl)))
                                    }
                                }
                            ) { Text("Paga amb Stripe", fontWeight = FontWeight.Bold) }
                            OutlinedButton(
                                onClick = {
                                    state.run(app) {
                                        app.database.jobs().control(job.id, JobControl.RUN)
                                        CloudWorker.schedule(app, job.id, ExistingWorkPolicy.REPLACE)
                                    }
                                }
                            ) { Text("Ja he pagat") }
                        }
                    }

                    Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                        if (job.control == JobControl.RUN) {
                            OutlinedButton(onClick = {
                                state.run(app) { app.database.jobs().control(job.id, JobControl.PAUSE) }
                            }) { Text("Pausa") }
                        }
                        if (job.control == JobControl.PAUSE || job.control == JobControl.RUN) {
                            if (job.control == JobControl.PAUSE && job.checkoutUrl.isNullOrBlank()) {
                                Button(
                                    colors = ButtonDefaults.buttonColors(
                                        containerColor = MosaicColors.Lime,
                                        contentColor = MosaicColors.OnLime,
                                    ),
                                    onClick = {
                                        state.run(app) {
                                            app.database.jobs().control(job.id, JobControl.RUN)
                                            CloudWorker.schedule(app, job.id, ExistingWorkPolicy.REPLACE)
                                        }
                                    }
                                ) { Text("Reprèn", fontWeight = FontWeight.Bold) }
                            }
                            TextButton(onClick = {
                                state.run(app) {
                                    app.database.jobs().control(job.id, JobControl.CANCEL)
                                    CloudWorker.schedule(app, job.id, ExistingWorkPolicy.REPLACE)
                                }
                            }) { Text("Cancel·la", color = MosaicColors.Danger) }
                        }
                        if (job.control == JobControl.DONE && job.status.startsWith("Resultat aprovat") && job.remoteId != null) {
                            Button(
                                colors = ButtonDefaults.buttonColors(
                                    containerColor = MosaicColors.Lime,
                                    contentColor = MosaicColors.OnLime,
                                ),
                                onClick = { mosaic = null; publish = job }
                            ) {
                                Text("Vincula a MyMosaic", fontWeight = FontWeight.Bold)
                            }
                        }
                    }
                }
            }
        }

        publish?.let { job ->
            AlertDialog(
                onDismissRequest = { publish = null },
                title = { Text("Desa a MyEarth / MyMosaic") },
                text = {
                    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text("El resultat ja és privat al teu espai MyEarth. Opcionalment pots afegir-lo directament a un MyMosaic:")
                        if (mosaics.isNotEmpty()) {
                            SelectMenu(
                                mosaic?.name ?: "Sense MyMosaic addicional",
                                listOf(null) + mosaics,
                                { it?.name ?: "Sense MyMosaic addicional" }
                            ) { mosaic = it }
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
                            val mosaicId = mosaic?.id
                            publish = null
                            state.run(app) {
                                api.publish(
                                    session,
                                    checkNotNull(job.remoteId),
                                    "${job.id}-publish-${mosaicId ?: "private"}",
                                    mosaicId
                                )
                                state.message.value = "Resultat vinculat a MyEarth."
                            }
                        }
                    ) { Text("Confirma", fontWeight = FontWeight.Bold) }
                },
                dismissButton = { TextButton(onClick = { publish = null }) { Text("Tanca") } }
            )
        }
    }
}

@Composable
internal fun <T> SelectMenu(label: String, values: List<T>, name: (T) -> String, select: (T) -> Unit) {
    var expanded by remember { mutableStateOf(false) }
    Box {
        OutlinedButton(
            onClick = { expanded = true },
            modifier = Modifier.fillMaxWidth().height(44.dp),
            shape = RoundedCornerShape(8.dp),
            border = BorderStroke(1.dp, MosaicColors.BorderStrong),
            colors = ButtonDefaults.outlinedButtonColors(
                containerColor = MosaicColors.InputBg,
                contentColor = MosaicColors.TextPrimary,
            ),
        ) {
            Text(
                text = label,
                modifier = Modifier.weight(1f),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Icon(Icons.Default.ExpandMore, contentDescription = null, tint = MosaicColors.Lime)
        }
        DropdownMenu(expanded, onDismissRequest = { expanded = false }) {
            for (value in values) {
                DropdownMenuItem(
                    text = { Text(name(value)) },
                    onClick = { select(value); expanded = false }
                )
            }
        }
    }
}

package app.mosaicearth.capture.projects

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Matrix
import android.media.MediaMetadataRetriever
import android.net.Uri
import android.provider.OpenableColumns
import androidx.documentfile.provider.DocumentFile
import androidx.exifinterface.media.ExifInterface
import app.mosaicearth.capture.quality.Quality
import app.mosaicearth.capture.viewer.copyBoundedTo
import kotlinx.coroutines.currentCoroutineContext
import kotlinx.coroutines.ensureActive
import java.io.File
import java.util.Locale
import java.util.UUID

class CaptureStorage(private val appContext: Context, private val dao: ProjectsDao) {
    private val originals = File(appContext.filesDir, "originals").apply { mkdirs() }
    private val frames = File(appContext.filesDir, "frames").apply { mkdirs() }
    val models = File(appContext.filesDir, "models").apply { mkdirs() }

    fun pending(kind: MediaKind): File = File(originals, "${UUID.randomUUID()}.pending.${kind.extension}")

    fun file(media: CaptureMedia): File =
        File(if (media.sourceVideoId == null) originals else frames, "${media.id}.${media.kind.extension}")

    fun coverPhotoFile(mediaId: String, isExtractedFrame: Boolean): File =
        File(if (isExtractedFrame) frames else originals, "$mediaId.jpg")

    fun file(model: Model): File = File(models, "${model.id}.${model.extension}")

    fun previewFile(model: Model): File = File(models, "${model.id}.preview.png")

    suspend fun deleteMediaAndFile(media: CaptureMedia) {
        dao.deleteMedia(media.id)
        runCatching { file(media).delete() }
    }

    suspend fun deleteModelAndFiles(model: Model) {
        dao.deleteModel(model.id)
        runCatching { file(model).delete() }
        runCatching { previewFile(model).delete() }
    }

    suspend fun deleteProjectAndFiles(projectId: String) {
        val mediaItems = dao.mediaSnapshot(projectId)
        val modelItems = dao.modelsSnapshot(projectId)
        dao.deleteProject(projectId)
        for (m in mediaItems) runCatching { file(m).delete() }
        for (md in modelItems) {
            runCatching { file(md).delete() }
            runCatching { previewFile(md).delete() }
        }
    }

    suspend fun commit(projectId: String, source: File, kind: MediaKind, capturedAt: Long, pass: Int): CaptureMedia {
        val media = describe(source.name.substringBefore('.'), projectId, source, kind, capturedAt, pass)
        require(media.bytes > 0) { "El fitxer de captura és buit." }
        val dest = file(media)
        check(source.renameTo(dest)) { "No s’ha pogut desar el fitxer." }
        dao.insert(media)
        maybePopulateProjectGpsFromMedia(projectId, listOf(media))
        return media
    }

    suspend fun importUri(projectId: String, uri: Uri, pass: Int): CaptureMedia {
        val resolver = appContext.contentResolver
        val mime = resolver.getType(uri)?.lowercase(Locale.ROOT).orEmpty()
        val displayName = resolver.query(uri, arrayOf(OpenableColumns.DISPLAY_NAME), null, null, null)
            ?.use { if (it.moveToFirst()) it.getString(0) else null }
            .orEmpty()
        val ext = displayName.substringAfterLast('.', "").lowercase(Locale.ROOT)
        val isVideo = mime.startsWith("video/") || ext in setOf("mp4", "mov", "m4v", "3gp", "webm")
        val kind = if (isVideo) MediaKind.VIDEO else MediaKind.PHOTO
        val maxBytes = if (isVideo) 1024L * 1024L * 1024L else 120L * 1024L * 1024L
        val temp = pending(kind)
        try {
            checkNotNull(resolver.openInputStream(uri)) { "No s’ha pogut llegir el fitxer seleccionat." }
                .use { it.copyBoundedTo(temp, maxBytes) }
            if (kind == MediaKind.PHOTO && !isJpegMagic(temp)) {
                convertImageToJpegInPlace(temp)
            }
            return commit(projectId, temp, kind, System.currentTimeMillis(), pass)
        } finally {
            temp.delete()
        }
    }

    data class FolderImportSummary(val photos: Int, val videos: Int, val gpsTagged: Int)

    suspend fun importFolder(
        projectId: String,
        treeUri: Uri,
        pass: Int,
        onProgress: (suspend (Int, Int) -> Unit)? = null
    ): FolderImportSummary {
        val root = DocumentFile.fromTreeUri(appContext, treeUri)
            ?: error("No s’ha pogut accedir a la carpeta o targeta SD.")
        val candidates = mutableListOf<DocumentFile>()
        fun collect(dir: DocumentFile, depth: Int) {
            if (depth > 5 || candidates.size >= 400) return
            for (child in dir.listFiles()) {
                val name = child.name ?: continue
                if (name.startsWith(".") || name.contains("trashed", ignoreCase = true)) continue
                if (child.isDirectory) {
                    collect(child, depth + 1)
                } else if (child.isFile && isSupportedMediaDocument(child)) {
                    candidates += child
                    if (candidates.size >= 400) return
                }
            }
        }
        collect(root, 0)
        candidates.sortBy { it.name.orEmpty() }
        require(candidates.isNotEmpty()) {
            "No s’han trobat fotografies (JPG/PNG/WEBP/HEIC) ni vídeos (MP4/MOV) a la carpeta seleccionada."
        }
        var photos = 0
        var videos = 0
        val imported = mutableListOf<CaptureMedia>()
        for ((idx, doc) in candidates.withIndex()) {
            currentCoroutineContext().ensureActive()
            onProgress?.invoke(idx + 1, candidates.size)
            runCatching { importUri(projectId, doc.uri, pass) }.getOrNull()?.let { media ->
                imported += media
                if (media.kind == MediaKind.PHOTO) photos++ else videos++
            }
        }
        require(imported.isNotEmpty()) { "No s’ha pogut importar cap fitxer vàlid de la carpeta." }
        maybePopulateProjectGpsFromMedia(projectId, imported)
        val gpsCount = imported.count { it.gpsLatitude != null && it.gpsLongitude != null }
        return FolderImportSummary(photos, videos, gpsCount)
    }

    private suspend fun maybePopulateProjectGpsFromMedia(projectId: String, imported: List<CaptureMedia>) {
        val withGps = imported.filter { it.gpsLatitude != null && it.gpsLongitude != null }
        if (withGps.isEmpty()) return
        val project = dao.projectById(projectId) ?: return
        if (project.latitude != null && project.longitude != null) return
        val lats = withGps.mapNotNull { it.gpsLatitude }.sorted()
        val lons = withGps.mapNotNull { it.gpsLongitude }.sorted()
        if (lats.isEmpty() || lons.isEmpty()) return
        val medLat = lats[lats.size / 2]
        val medLon = lons[lons.size / 2]
        dao.details(
            project.id,
            project.description,
            "EXIF_GPS",
            medLat,
            medLon,
            5.0f,
            System.currentTimeMillis()
        )
    }

    private fun isSupportedMediaDocument(doc: DocumentFile): Boolean {
        val name = doc.name?.lowercase(Locale.ROOT).orEmpty()
        // Skip DJI low-res proxy files (.LRF / .THM / .SRT)
        if (name.endsWith(".lrf") || name.endsWith(".thm") || name.endsWith(".srt")) return false
        val ext = name.substringAfterLast('.', "")
        if (ext in setOf("jpg", "jpeg", "png", "webp", "heic", "heif", "avif", "mp4", "mov", "m4v")) return true
        val mime = doc.type?.lowercase(Locale.ROOT).orEmpty()
        return mime.startsWith("image/") || mime.startsWith("video/")
    }

    private fun isJpegMagic(file: File): Boolean =
        file.inputStream().buffered().use { it.read() == 0xff && it.read() == 0xd8 }

    private fun convertImageToJpegInPlace(file: File) {
        val preservedExif = runCatching { ExifInterface(file) }.getOrNull()
        val rawBmp = BitmapFactory.decodeFile(file.path)
            ?: throw IllegalArgumentException("Format d’imatge no compatible. Usa JPG, PNG, WEBP o HEIC.")
        val orientation = preservedExif?.getAttributeInt(ExifInterface.TAG_ORIENTATION, 1) ?: 1
        val bmp = applyExifMatrix(rawBmp, orientation)
        val temp = File.createTempFile("conv-", ".jpg", originals)
        try {
            check(temp.outputStream().buffered().use { bmp.compress(Bitmap.CompressFormat.JPEG, 95, it) })
            if (preservedExif != null) {
                runCatching {
                    val dstExif = ExifInterface(temp)
                    val tagsToCopy = listOf(
                        ExifInterface.TAG_GPS_LATITUDE,
                        ExifInterface.TAG_GPS_LATITUDE_REF,
                        ExifInterface.TAG_GPS_LONGITUDE,
                        ExifInterface.TAG_GPS_LONGITUDE_REF,
                        ExifInterface.TAG_GPS_ALTITUDE,
                        ExifInterface.TAG_GPS_ALTITUDE_REF,
                        ExifInterface.TAG_FOCAL_LENGTH,
                        ExifInterface.TAG_FOCAL_LENGTH_IN_35MM_FILM,
                        ExifInterface.TAG_DATETIME,
                        ExifInterface.TAG_DATETIME_ORIGINAL,
                        ExifInterface.TAG_MAKE,
                        ExifInterface.TAG_MODEL,
                    )
                    for (tag in tagsToCopy) {
                        preservedExif.getAttribute(tag)?.let { dstExif.setAttribute(tag, it) }
                    }
                    dstExif.setAttribute(ExifInterface.TAG_ORIENTATION, ExifInterface.ORIENTATION_NORMAL.toString())
                    dstExif.saveAttributes()
                }
            }
            check(temp.renameTo(file))
        } finally {
            if (bmp !== rawBmp) rawBmp.recycle()
            bmp.recycle()
            temp.delete()
        }
    }

    suspend fun extract(video: CaptureMedia, intervalMs: Long, resolution: Int): Int {
        require(video.kind == MediaKind.VIDEO && intervalMs in 250..10_000 && resolution in 480..2048)
        val retriever = MediaMetadataRetriever()
        val generated = mutableListOf<CaptureMedia>()
        try {
            retriever.setDataSource(file(video).path)
            val duration = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION)?.toLongOrNull()
                ?: error("No s’ha pogut llegir la durada.")
            val rawWidth = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_WIDTH)?.toIntOrNull()
                ?: error("Vídeo sense amplada.")
            val rawHeight = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_HEIGHT)?.toIntOrNull()
                ?: error("Vídeo sense alçada.")
            val rotation = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_ROTATION)?.toIntOrNull() ?: 0
            require(rawWidth > 0 && rawHeight > 0 && duration > 0)
            require(duration / intervalMs + 1 <= 600) { "Tria un interval més llarg per extreure fins a 600 fotogrames." }
            val (dispW, dispH) = if (rotation == 90 || rotation == 270) rawHeight to rawWidth else rawWidth to rawHeight
            val ratio = (resolution.toDouble() / maxOf(dispW, dispH)).coerceAtMost(1.0)
            val dstW = (dispW * ratio).toInt().coerceAtLeast(1)
            val dstH = (dispH * ratio).toInt().coerceAtLeast(1)
            for (time in 0 until duration step intervalMs) {
                currentCoroutineContext().ensureActive()
                val id = UUID.nameUUIDFromBytes("${video.id}:$time:$resolution".toByteArray()).toString()
                if (dao.mediaById(id) != null) continue
                val out = File(frames, "$id.jpg")
                if (!out.isFile) {
                    val bitmap = retriever.getScaledFrameAtTime(
                        time * 1000,
                        MediaMetadataRetriever.OPTION_CLOSEST,
                        dstW,
                        dstH
                    ) ?: continue
                    val temp = File.createTempFile("frame-", ".pending", frames)
                    try {
                        check(temp.outputStream().use { bitmap.compress(Bitmap.CompressFormat.JPEG, 92, it) })
                        check(temp.renameTo(out))
                    } finally {
                        bitmap.recycle()
                        temp.delete()
                    }
                }
                generated += describe(id, video.projectId, out, MediaKind.PHOTO, video.capturedAt + time, video.pass)
                    .copy(
                        sourceVideoId = video.id,
                        sourceTimeMs = time,
                        gpsLatitude = video.gpsLatitude,
                        gpsLongitude = video.gpsLongitude,
                        gpsAltitude = video.gpsAltitude
                    )
            }
            dao.insertFrames(generated)
            return generated.size
        } finally {
            retriever.release()
        }
    }

    private fun describe(
        id: String,
        project: String,
        source: File,
        kind: MediaKind,
        time: Long,
        pass: Int?
    ): CaptureMedia {
        if (kind == MediaKind.VIDEO) {
            val retriever = MediaMetadataRetriever()
            try {
                retriever.setDataSource(source.path)
                val locStr = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_LOCATION)
                val parsedLoc = parseIso6709Location(locStr)
                val rot = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_ROTATION)?.toIntOrNull()
                val rw = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_WIDTH)?.toIntOrNull()
                val rh = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_HEIGHT)?.toIntOrNull()
                val (vw, vh) = if (rot == 90 || rot == 270) rh to rw else rw to rh
                return CaptureMedia(
                    id = id,
                    projectId = project,
                    kind = kind,
                    capturedAt = time,
                    bytes = source.length(),
                    width = vw,
                    height = vh,
                    orientation = rot,
                    focalLengthMm = null,
                    durationMs = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION)?.toLongOrNull(),
                    sharpness = null,
                    fingerprint = null,
                    selected = false,
                    pass = pass,
                    gpsLatitude = parsedLoc?.first,
                    gpsLongitude = parsedLoc?.second
                )
            } finally {
                retriever.release()
            }
        }
        require(isJpegMagic(source)) { "Cal una fotografia JPEG." }
        val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
        BitmapFactory.decodeFile(source.path, bounds)
        val exif = ExifInterface(source)
        val exifOrientation = exif.getAttributeInt(ExifInterface.TAG_ORIENTATION, ExifInterface.ORIENTATION_NORMAL)
        val (effW, effH) = effectiveDimensions(
            bounds.outWidth.takeIf { it > 0 },
            bounds.outHeight.takeIf { it > 0 },
            exifOrientation
        )
        val latLon = exif.latLong
        val gpsLat = latLon?.getOrNull(0)?.takeIf { it.isFinite() && it in -90.0..90.0 }
        val gpsLon = latLon?.getOrNull(1)?.takeIf { it.isFinite() && it in -180.0..180.0 }
        val rawAlt = exif.getAltitude(Double.NaN)
        val gpsAlt = rawAlt.takeIf { it.isFinite() && it in -1000.0..15000.0 }
        val focalMm = exif.getAttributeDouble(ExifInterface.TAG_FOCAL_LENGTH, 0.0).takeIf { it > 0 }
        val focal35 = exif.getAttributeInt(ExifInterface.TAG_FOCAL_LENGTH_IN_35MM_FILM, 0)
            .takeIf { it in 8..400 }
            ?: estimateFocal35mmFromFocalPlane(exif, focalMm, bounds.outWidth, bounds.outHeight)
        val quality = Quality.analyze(source)
        return CaptureMedia(
            id = id,
            projectId = project,
            kind = kind,
            capturedAt = time,
            bytes = source.length(),
            width = effW,
            height = effH,
            orientation = exifOrientation,
            focalLengthMm = focalMm,
            durationMs = null,
            sharpness = quality?.sharpness,
            fingerprint = quality?.fingerprint,
            selected = quality != null,
            pass = pass,
            gpsLatitude = gpsLat,
            gpsLongitude = gpsLon,
            gpsAltitude = gpsAlt,
            focalLength35mm = focal35
        )
    }

    private fun parseIso6709Location(raw: String?): Pair<Double, Double>? {
        if (raw.isNullOrBlank()) return null
        val match = Regex("([+-]\\d+\\.\\d+)([+-]\\d+\\.\\d+)").find(raw) ?: return null
        val lat = match.groupValues[1].toDoubleOrNull() ?: return null
        val lon = match.groupValues[2].toDoubleOrNull() ?: return null
        return if (lat in -90.0..90.0 && lon in -180.0..180.0) lat to lon else null
    }

    companion object {
        fun estimateFocal35mmFromFocalPlane(
            exif: ExifInterface,
            focalMm: Double?,
            rawWidth: Int,
            rawHeight: Int,
        ): Int? {
            if (focalMm == null || focalMm <= 0.5) return null
            val fpxRes = exif.getAttributeDouble(ExifInterface.TAG_FOCAL_PLANE_X_RESOLUTION, 0.0)
            if (!fpxRes.isFinite() || fpxRes <= 10.0) return null
            val unit = exif.getAttributeInt(ExifInterface.TAG_FOCAL_PLANE_RESOLUTION_UNIT, 2)
            val mmPerUnit = when (unit) {
                2 -> 25.4      // inches
                3 -> 10.0      // cm
                4 -> 1.0       // mm
                5 -> 0.001     // um
                else -> 25.4
            }
            val sensorPixels = maxOf(
                exif.getAttributeInt(ExifInterface.TAG_IMAGE_WIDTH, 0),
                exif.getAttributeInt(ExifInterface.TAG_IMAGE_LENGTH, 0),
                rawWidth,
                rawHeight
            )
            if (sensorPixels <= 0) return null
            val sensorWidthMm = sensorPixels.toDouble() * mmPerUnit / fpxRes
            if (sensorWidthMm !in 2.5..55.0) return null
            val eq35 = kotlin.math.round(focalMm * 36.0 / sensorWidthMm).toInt()
            return eq35.takeIf { it in 8..400 }
        }

        fun effectiveDimensions(rawWidth: Int?, rawHeight: Int?, exifOrientation: Int): Pair<Int?, Int?> {
            val transposed = exifOrientation in setOf(
                ExifInterface.ORIENTATION_TRANSPOSE,
                ExifInterface.ORIENTATION_ROTATE_90,
                ExifInterface.ORIENTATION_TRANSVERSE,
                ExifInterface.ORIENTATION_ROTATE_270
            )
            return if (transposed) rawHeight to rawWidth else rawWidth to rawHeight
        }

        fun applyExifMatrix(bitmap: Bitmap, exifOrientation: Int): Bitmap {
            val matrix = Matrix()
            when (exifOrientation) {
                ExifInterface.ORIENTATION_FLIP_HORIZONTAL -> matrix.setScale(-1f, 1f)
                ExifInterface.ORIENTATION_ROTATE_180 -> matrix.setRotate(180f)
                ExifInterface.ORIENTATION_FLIP_VERTICAL -> {
                    matrix.setRotate(180f)
                    matrix.postScale(-1f, 1f)
                }
                ExifInterface.ORIENTATION_TRANSPOSE -> {
                    matrix.setRotate(90f)
                    matrix.postScale(-1f, 1f)
                }
                ExifInterface.ORIENTATION_ROTATE_90 -> matrix.setRotate(90f)
                ExifInterface.ORIENTATION_TRANSVERSE -> {
                    matrix.setRotate(-90f)
                    matrix.postScale(-1f, 1f)
                }
                ExifInterface.ORIENTATION_ROTATE_270 -> matrix.setRotate(-90f)
                else -> return bitmap
            }
            return Bitmap.createBitmap(bitmap, 0, 0, bitmap.width, bitmap.height, matrix, true)
        }

        fun decodeExifAwareThumbnail(file: File, targetMaxPx: Int = 256): Bitmap? {
            if (!file.isFile) return null
            val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
            BitmapFactory.decodeFile(file.path, bounds)
            val maxSide = maxOf(bounds.outWidth, bounds.outHeight)
            if (maxSide <= 0) return null
            var sample = 1
            while (maxSide / (sample * 2) >= targetMaxPx) sample *= 2
            val raw = BitmapFactory.decodeFile(
                file.path,
                BitmapFactory.Options().apply { inSampleSize = sample }
            ) ?: return null
            val orient = runCatching {
                ExifInterface(file).getAttributeInt(ExifInterface.TAG_ORIENTATION, ExifInterface.ORIENTATION_NORMAL)
            }.getOrDefault(ExifInterface.ORIENTATION_NORMAL)
            val rotated = applyExifMatrix(raw, orient)
            if (rotated !== raw) raw.recycle()
            return rotated
        }
    }
}

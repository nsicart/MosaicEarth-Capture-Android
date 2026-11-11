package app.mosaicearth.capture.viewer

import java.io.File
import java.io.InputStream
import java.nio.ByteBuffer
import java.nio.ByteOrder
import java.util.Locale
import java.util.zip.GZIPInputStream

object ModelFiles {
    const val MAX_BYTES = 96L * 1024 * 1024
    const val MAX_ASSET_BYTES = 512L * 1024 * 1024
    const val MAX_SPLATS = 600_000
    const val MAX_POINTS = 5_000_000
    val formats = setOf("ply", "splat", "spz")
    val allFormats = setOf("ply", "splat", "spz", "glb", "tif", "tiff")

    fun verify(file: File, format: String): Int {
        require(file.length() in 1..MAX_BYTES) { "El fitxer supera el límit del visor o és buit." }
        val count = when (format) {
            "splat" -> {
                require(file.length() % 32 == 0L) { "SPLAT truncat." }
                (file.length() / 32).toInt()
            }
            "ply" -> file.inputStream().buffered().use { readGaussianPly(it, file.length()) }
            "spz" -> file.inputStream().use { raw ->
                GZIPInputStream(raw).use { readSpz(it, file.length()) }
            }
            else -> error("Format Gaussian incompatible.")
        }
        require(count in 1..MAX_SPLATS) { "El visor admet fins a $MAX_SPLATS splats." }
        return count
    }

    fun verifyAsset(file: File, format: String, role: String): Int {
        val normFmt = format.lowercase(Locale.ROOT)
        require(file.isFile && file.length() in 1..MAX_ASSET_BYTES) {
            "El fitxer supera el límit de 512 MiB o és buit."
        }
        return when {
            normFmt in setOf("splat", "spz") || (normFmt == "ply" && role == "gaussian") ->
                verify(file, normFmt)
            normFmt == "ply" ->
                file.inputStream().buffered().use { readPointCloudPly(it, file.length()) }
            normFmt == "glb" ->
                file.inputStream().buffered().use { readGlb(it, file.length()) }
            normFmt in setOf("tif", "tiff") ->
                file.inputStream().buffered().use { readTiff(it, file.length()) }
            else -> throw IllegalArgumentException("Format d’actiu no compatible: $format")
        }
    }

    fun inferRoleOnImport(file: File, format: String, displayName: String): String {
        return when (format.lowercase(Locale.ROOT)) {
            "splat", "spz" -> "gaussian"
            "glb" -> "mesh"
            "tif", "tiff" -> {
                val lower = displayName.lowercase(Locale.ROOT)
                if ("dsm" in lower || "mds" in lower || "dem" in lower || "elev" in lower) "dsm"
                else "orthophoto"
            }
            "ply" -> {
                val isGaussian = runCatching { verify(file, "ply") > 0 }.getOrDefault(false)
                if (isGaussian) "gaussian" else "pointcloud"
            }
            else -> "gaussian"
        }
    }

    private fun readGaussianPly(input: InputStream, length: Long): Int {
        val header = readPlyHeaderText(input)
        val lines = header.lineSequence().map(String::trim).toList()
        require(
            lines.first() == "ply" && "end_header" in lines &&
                "format binary_little_endian 1.0" in lines
        ) { "Cal un PLY Gaussian binari little-endian." }
        val vertex = lines.indexOfFirst { it.startsWith("element vertex ") }
        require(vertex >= 0 && lines.indexOfFirst { it.startsWith("element ") } == vertex) {
            "El PLY ha de començar amb l’element vertex."
        }
        val fields = lines.drop(vertex + 1).takeWhile { !it.startsWith("element ") && it != "end_header" }
            .filter { it.startsWith("property ") }
        val properties = fields.toSet()
        val rowBytes = plyRowBytes(fields)
        val gaussian = setOf(
            "x", "y", "z", "opacity", "scale_0", "scale_1", "scale_2",
            "rot_0", "rot_1", "rot_2", "rot_3", "f_dc_0", "f_dc_1", "f_dc_2"
        )
        require(gaussian.all { "property float $it" in properties || "property float32 $it" in properties }) {
            "El PLY no conté els atributs Gaussian."
        }
        val count = lines[vertex].substringAfter("element vertex ").toInt()
        require(count in 1..MAX_SPLATS && header.length + count.toLong() * rowBytes <= length) {
            "Dades PLY truncades o fora dels límits del visor."
        }
        return count
    }

    private fun readPointCloudPly(input: InputStream, length: Long): Int {
        val header = readPlyHeaderText(input)
        val lines = header.lineSequence().map(String::trim).toList()
        require(lines.firstOrNull() == "ply" && "end_header" in lines) { "Capçalera PLY invàlida." }
        val isBinary = "format binary_little_endian 1.0" in lines
        val isAscii = "format ascii 1.0" in lines
        require(isBinary || isAscii) { "Format PLY no admès." }
        val vertex = lines.indexOfFirst { it.startsWith("element vertex ") }
        require(vertex >= 0) { "El PLY no conté cap element vertex." }
        val fields = lines.drop(vertex + 1).takeWhile { !it.startsWith("element ") && it != "end_header" }
            .filter { it.startsWith("property ") }
        val names = fields.mapNotNull { it.split(Regex("\\s+")).getOrNull(2) }.toSet()
        require("x" in names && "y" in names && "z" in names) { "El PLY no conté coordenades x/y/z." }
        val count = lines[vertex].substringAfter("element vertex ").trim().toIntOrNull() ?: 0
        require(count in 1..MAX_POINTS) { "Nombre de punts PLY fora dels límits." }
        if (isBinary) {
            val rowBytes = plyRowBytes(fields)
            require(header.length + count.toLong() * rowBytes <= length) { "Dades PLY binàries truncades." }
        }
        return count
    }

    private fun readPlyHeaderText(input: InputStream): String {
        val header = StringBuilder()
        while (header.length < 16384) {
            val value = input.read()
            require(value in 9..126) { "Capçalera PLY invàlida." }
            header.append(value.toChar())
            if (value == 10 && (header.endsWith("\nend_header\n") || header.endsWith("\nend_header\r\n"))) break
        }
        return header.toString()
    }

    private fun plyRowBytes(fields: List<String>): Int {
        val fieldWidths = mapOf(
            "float" to 4, "float32" to 4, "double" to 8, "float64" to 8,
            "char" to 1, "uchar" to 1, "int8" to 1, "uint8" to 1, "short" to 2, "ushort" to 2,
            "int16" to 2, "uint16" to 2, "int" to 4, "uint" to 4, "int32" to 4, "uint32" to 4
        )
        return fields.sumOf { field ->
            val tokens = field.split(Regex("\\s+"))
            require(tokens.size == 3 && tokens[1] in fieldWidths) { "Propietat PLY incompatible." }
            fieldWidths.getValue(tokens[1])
        }
    }

    private fun readGlb(input: InputStream, length: Long): Int {
        require(length >= 20) { "Fitxer GLB massa curt." }
        val header = ByteArray(12)
        var off = 0
        while (off < header.size) {
            val r = input.read(header, off, header.size - off)
            require(r > 0) { "GLB truncat." }
            off += r
        }
        val buf = ByteBuffer.wrap(header).order(ByteOrder.LITTLE_ENDIAN)
        val magic = buf.int
        val version = buf.int
        val declaredLen = buf.int.toLong() and 0xFFFFFFFFL
        require(magic == 0x46546C67 && version == 2) { "Cal una malla glTF 2.0 binària (.glb)." }
        require(declaredLen <= length && declaredLen >= 20L) { "Longitud GLB invàlida o truncada." }
        return 1
    }

    private fun readTiff(input: InputStream, length: Long): Int {
        require(length >= 8) { "Fitxer GeoTIFF massa curt." }
        val header = ByteArray(8)
        var off = 0
        while (off < 8) {
            val r = input.read(header, off, 8 - off)
            require(r > 0) { "GeoTIFF truncat." }
            off += r
        }
        val littleEndian = header[0] == 'I'.code.toByte() && header[1] == 'I'.code.toByte() &&
            header[2] == 42.toByte() && header[3] == 0.toByte()
        val bigEndian = header[0] == 'M'.code.toByte() && header[1] == 'M'.code.toByte() &&
            header[2] == 0.toByte() && header[3] == 42.toByte()
        val bigTiffLe = header[0] == 'I'.code.toByte() && header[1] == 'I'.code.toByte() &&
            header[2] == 43.toByte() && header[3] == 0.toByte()
        require(littleEndian || bigEndian || bigTiffLe) { "Capçalera GeoTIFF / TIFF invàlida." }
        return 1
    }

    private fun readSpz(input: InputStream, compressedBytes: Long): Int {
        val header = ByteArray(16)
        var offset = 0
        while (offset < header.size) {
            val read = input.read(header, offset, header.size - offset)
            require(read > 0) { "SPZ truncat." }
            offset += read
        }
        val buffer = ByteBuffer.wrap(header).order(ByteOrder.LITTLE_ENDIAN)
        require(buffer.int == 0x5053474e && buffer.int == 2) { "Cal un SPZ v2 (gzip)." }
        val count = buffer.int
        val degree = buffer.get().toInt()
        require(count in 1..MAX_SPLATS && degree in 0..3 && compressedBytes >= 18) { "SPZ fora dels límits del visor." }
        val expected = count.toLong() * (19 + 3 * ((degree + 1) * (degree + 1) - 1))
        var remaining = expected
        val chunk = ByteArray(16 * 1024)
        while (remaining > 0) {
            val read = input.read(chunk, 0, minOf(remaining, chunk.size.toLong()).toInt())
            require(read > 0) { "SPZ truncat." }
            remaining -= read
        }
        require(input.read() == -1) { "Dades SPZ més llargues del que indica la capçalera." }
        return count
    }
}

fun InputStream.copyBoundedTo(file: File, limit: Long): Long = file.outputStream().buffered().use { out ->
    val buffer = ByteArray(64 * 1024)
    var total = 0L
    while (true) {
        val read = read(buffer)
        if (read < 0) break
        total += read
        require(total <= limit) { "S’ha superat el límit del fitxer." }
        out.write(buffer, 0, read)
    }
    total
}

package app.mosaicearth.capture

import app.mosaicearth.capture.viewer.ModelFiles
import org.junit.Assert.*
import org.junit.Rule
import org.junit.Test
import org.junit.rules.TemporaryFolder
import java.nio.ByteBuffer
import java.nio.ByteOrder
import java.util.zip.GZIPOutputStream

class ModelFilesTest {
    @get:Rule val directory = TemporaryFolder()

    @Test
    fun refusesAnOrdinaryPointCloudPlyForGaussianButAcceptsAsPointCloudAsset() {
        val file = directory.newFile("points.ply")
        file.writeText(
            "ply\nformat binary_little_endian 1.0\nelement vertex 1\n" +
                "property float x\nproperty float y\nproperty float z\nend_header\n"
        )
        file.appendBytes(ByteArray(12))
        assertThrows(IllegalArgumentException::class.java) { ModelFiles.verify(file, "ply") }
        assertEquals("pointcloud", ModelFiles.inferRoleOnImport(file, "ply", "points.ply"))
        assertEquals(1, ModelFiles.verifyAsset(file, "ply", "pointcloud"))
    }

    @Test
    fun acceptsStandardBinaryGaussianProperties() {
        val file = directory.newFile("gaussian.ply")
        val names = listOf(
            "x", "y", "z", "opacity", "scale_0", "scale_1", "scale_2",
            "rot_0", "rot_1", "rot_2", "rot_3", "f_dc_0", "f_dc_1", "f_dc_2"
        )
        file.writeText(
            "ply\nformat binary_little_endian 1.0\nelement vertex 1\n" +
                names.joinToString("") { "property float $it\n" } + "end_header\n"
        )
        assertThrows(IllegalArgumentException::class.java) { ModelFiles.verify(file, "ply") }
        file.appendBytes(ByteArray(names.size * 4))
        assertEquals(1, ModelFiles.verify(file, "ply"))
        assertEquals("gaussian", ModelFiles.inferRoleOnImport(file, "ply", "gaussian.ply"))
    }

    @Test
    fun verifiesGlbAndGeoTiffAssets() {
        val glb = directory.newFile("textured_mesh.glb")
        val glbBytes = ByteBuffer.allocate(24).order(ByteOrder.LITTLE_ENDIAN)
            .putInt(0x46546C67)
            .putInt(2)
            .putInt(24)
            .putInt(4)
            .putInt(0x4E4F534A)
            .putInt(0x20207D7B)
            .array()
        glb.writeBytes(glbBytes)
        assertEquals("mesh", ModelFiles.inferRoleOnImport(glb, "glb", "textured_mesh.glb"))
        assertEquals(1, ModelFiles.verifyAsset(glb, "glb", "mesh"))

        val ortho = directory.newFile("orthophoto.tif")
        ortho.writeBytes(byteArrayOf('I'.code.toByte(), 'I'.code.toByte(), 42, 0, 8, 0, 0, 0, 0, 0))
        assertEquals("orthophoto", ModelFiles.inferRoleOnImport(ortho, "tif", "orthophoto.tif"))
        assertEquals(1, ModelFiles.verifyAsset(ortho, "tif", "orthophoto"))
        assertEquals("dsm", ModelFiles.inferRoleOnImport(ortho, "tif", "flight_dsm.tif"))
    }

    @Test
    fun checksFixedSplatStrideAndLimit() {
        val file = directory.newFile("model.splat")
        file.writeBytes(ByteArray(64))
        assertEquals(2, ModelFiles.verify(file, "splat"))
        file.appendBytes(byteArrayOf(0))
        assertThrows(IllegalArgumentException::class.java) { ModelFiles.verify(file, "splat") }
    }

    @Test
    fun checksSpzHeaderAndDecompressedLength() {
        val file = directory.newFile("model.spz")
        fun writeSpz(version: Int, bytes: Int) {
            val header = ByteBuffer.allocate(16).order(ByteOrder.LITTLE_ENDIAN)
                .putInt(0x5053474e).putInt(version).putInt(1).put(0.toByte()).array()
            GZIPOutputStream(file.outputStream()).use { it.write(header + ByteArray(bytes)) }
        }
        writeSpz(2, 19)
        assertEquals(1, ModelFiles.verify(file, "spz"))
        writeSpz(2, 18)
        assertThrows(IllegalArgumentException::class.java) { ModelFiles.verify(file, "spz") }
        writeSpz(3, 19)
        assertThrows(IllegalArgumentException::class.java) { ModelFiles.verify(file, "spz") }
    }
}

package app.mosaicearth.capture

import app.mosaicearth.capture.local_training.validateArchive
import org.junit.Assert.assertThrows
import org.junit.Rule
import org.junit.Test
import org.junit.rules.TemporaryFolder
import java.io.File
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream

class LocalArchiveTest {
    @get:Rule val directory = TemporaryFolder()

    @Test fun acceptsPosedArchiveAndRejectsRawPhotosOrTraversal() {
        validateArchive(zip("posed.zip", "transforms.json", "images/one.jpg", "images/two.jpg"))
        validateArchive(
            zip(
                "colmap_undistorted.zip",
                "sparse/0/cameras.txt",
                "sparse/0/images.txt",
                "sparse/0/points3D.txt",
                "images/0001.jpg",
                "images/0002.jpg"
            )
        )
        assertThrows(IllegalArgumentException::class.java) {
            validateArchive(zip("raw.zip", "images/one.jpg", "images/two.jpg"))
        }
        assertThrows(IllegalArgumentException::class.java) {
            validateArchive(zip("single_img.zip", "sparse/0/cameras.txt", "sparse/0/images.txt", "images/0001.jpg"))
        }
        assertThrows(IllegalArgumentException::class.java) {
            validateArchive(zip("unsafe.zip", "transforms.json", "one.jpg", "../two.jpg"))
        }
    }

    private fun zip(name: String, vararg names: String): File = directory.newFile(name).also { file ->
        ZipOutputStream(file.outputStream()).use { stream ->
            for (entry in names) {
                stream.putNextEntry(ZipEntry(entry))
                stream.write(byteArrayOf(1))
                stream.closeEntry()
            }
        }
    }
}

package app.mosaicearth.capture

import androidx.exifinterface.media.ExifInterface
import app.mosaicearth.capture.projects.CaptureStorage
import org.junit.Assert.assertEquals
import org.junit.Test

class CaptureDimensionsTest {
    @Test fun swapsDimensionsForPortraitExifOrientations() {
        for (o in listOf(
            ExifInterface.ORIENTATION_NORMAL,
            ExifInterface.ORIENTATION_FLIP_HORIZONTAL,
            ExifInterface.ORIENTATION_ROTATE_180,
            ExifInterface.ORIENTATION_FLIP_VERTICAL
        )) {
            assertEquals(4032 to 3024, CaptureStorage.effectiveDimensions(4032, 3024, o))
        }
        for (o in listOf(
            ExifInterface.ORIENTATION_TRANSPOSE,
            ExifInterface.ORIENTATION_ROTATE_90,
            ExifInterface.ORIENTATION_TRANSVERSE,
            ExifInterface.ORIENTATION_ROTATE_270
        )) {
            assertEquals(3024 to 4032, CaptureStorage.effectiveDimensions(4032, 3024, o))
        }
    }
}

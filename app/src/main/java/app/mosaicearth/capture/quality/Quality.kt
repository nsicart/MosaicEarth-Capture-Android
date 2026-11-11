package app.mosaicearth.capture.quality

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import java.io.File

data class ImageQuality(val sharpness: Double, val fingerprint: Long)

object Quality {
    const val LOW_SHARPNESS = 65.0
    private const val NEAR_DUPLICATE_DISTANCE = 4

    fun nearDuplicate(first: Long, second: Long): Boolean =
        java.lang.Long.bitCount(first xor second) <= NEAR_DUPLICATE_DISTANCE

    fun analyze(file: File): ImageQuality? {
        val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
        BitmapFactory.decodeFile(file.path, bounds)
        val largest = maxOf(bounds.outWidth, bounds.outHeight)
        if (largest <= 0) return null
        var sample = 1
        while (largest / sample > 256) sample *= 2
        val bitmap = BitmapFactory.decodeFile(file.path, BitmapFactory.Options().apply {
            inSampleSize = sample
        }) ?: return null
        return try {
            val scale = 96.0 / maxOf(bitmap.width, bitmap.height)
            val image = Bitmap.createScaledBitmap(bitmap, (bitmap.width * scale).toInt().coerceAtLeast(3),
                (bitmap.height * scale).toInt().coerceAtLeast(3), true)
            val grid = Bitmap.createScaledBitmap(image, 9, 8, true)
            try {
                val width = image.width
                val pixels = IntArray(width * image.height)
                image.getPixels(pixels, 0, width, 0, 0, width, image.height)
                val luminance = IntArray(pixels.size) { gray(pixels[it]) }
                val hashPixels = IntArray(72)
                grid.getPixels(hashPixels, 0, 9, 0, 0, 9, 8)
                ImageQuality(laplacianVariance(luminance, width, image.height),
                    differenceHash(IntArray(72) { gray(hashPixels[it]) }))
            } finally {
                if (grid !== image) grid.recycle()
                if (image !== bitmap) image.recycle()
            }
        } finally {
            bitmap.recycle()
        }
    }

    fun differenceHash(gray: IntArray): Long {
        require(gray.size == 72)
        var hash = 0L
        for (y in 0 until 8) for (x in 0 until 8) {
            hash = (hash shl 1) or if (gray[y * 9 + x] > gray[y * 9 + x + 1]) 1L else 0L
        }
        return hash
    }

    fun laplacianVariance(gray: IntArray, width: Int, height: Int): Double {
        require(width >= 3 && height >= 3 && gray.size == width * height)
        var sum = 0.0
        var squares = 0.0
        for (y in 1 until height - 1) for (x in 1 until width - 1) {
            val i = y * width + x
            val laplacian = 4.0 * gray[i] - gray[i - 1] - gray[i + 1] - gray[i - width] - gray[i + width]
            sum += laplacian
            squares += laplacian * laplacian
        }
        val count = (width - 2) * (height - 2)
        val mean = sum / count
        return (squares / count - mean * mean).coerceAtLeast(0.0)
    }

    private fun gray(pixel: Int): Int =
        (77 * ((pixel ushr 16) and 255) + 150 * ((pixel ushr 8) and 255) + 29 * (pixel and 255)) ushr 8
}

package app.mosaicearth.capture.capture

import android.graphics.Bitmap
import androidx.camera.core.ImageProxy
import app.mosaicearth.capture.quality.Quality
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt
import kotlin.math.sqrt

enum class OverlapZone {
    FIRST_SHOT,
    BLURRY,
    LOW_TEXTURE,
    TOO_HIGH,
    OPTIMAL,
    MARGINAL,
    TOO_LOW,
}

data class LumaFrame(
    val width: Int,
    val height: Int,
    val pixels: IntArray,
    val sharpness: Double,
) {
    fun toGhostBitmap(): Bitmap {
        val argb = IntArray(width * height)
        for (i in pixels.indices) {
            val v = pixels[i].coerceIn(0, 255)
            // Subtle lime-tinted luminance for crisp onion-skin alignment
            val r = (v * 0.78f).toInt().coerceIn(0, 255)
            val g = min(255, (v * 1.05f).toInt())
            val b = (v * 0.72f).toInt().coerceIn(0, 255)
            argb[i] = (0xFF shl 24) or (r shl 16) or (g shl 8) or b
        }
        return Bitmap.createBitmap(argb, width, height, Bitmap.Config.ARGB_8888)
    }
}

data class OverlapReading(
    val overlapPct: Int?,
    val zone: OverlapZone,
    val dxNorm: Float = 0f,
    val dyNorm: Float = 0f,
    val zncc: Float = 0f,
    val sharpness: Double = 0.0,
    val isSteady: Boolean = true,
    val shouldAutoShoot: Boolean = false,
)

object OverlapAnalyzer {
    private const val SHORT_SIDE = 72
    private const val LONG_SIDE = 96
    private const val MIN_SHARPNESS_LIVE = 45.0
    private const val STEADY_MOTION_MAX_MAD = 10.5

    /**
     * Extracts a rotation-corrected luminance frame directly from CameraX YUV_420_888 plane 0
     * without allocating or decoding any JPEG. Runs in < 0.3 ms on ARM64.
     */
    fun extractLumaFrame(image: ImageProxy): LumaFrame? {
        val planes = image.planes
        if (planes.isEmpty()) return null
        val yPlane = planes[0]
        val srcW = image.width
        val srcH = image.height
        if (srcW < 16 || srcH < 16) return null

        val rot = ((image.imageInfo.rotationDegrees % 360) + 360) % 360
        val portrait = if (rot == 90 || rot == 270) srcW >= srcH else srcH > srcW
        val outW = if (portrait) SHORT_SIDE else LONG_SIDE
        val outH = if (portrait) LONG_SIDE else SHORT_SIDE

        val buf = yPlane.buffer
        val rowStride = yPlane.rowStride
        val pixelStride = yPlane.pixelStride
        val cap = buf.limit()
        val out = IntArray(outW * outH)

        for (oy in 0 until outH) {
            val v = (oy + 0.5f) / outH
            for (ox in 0 until outW) {
                val u = (ox + 0.5f) / outW
                val su: Float
                val sv: Float
                when (rot) {
                    90 -> {
                        su = v
                        sv = 1f - u
                    }
                    180 -> {
                        su = 1f - u
                        sv = 1f - v
                    }
                    270 -> {
                        su = 1f - v
                        sv = u
                    }
                    else -> {
                        su = u
                        sv = v
                    }
                }
                val sx = (su * (srcW - 2)).toInt().coerceIn(0, srcW - 2)
                val sy = (sv * (srcH - 2)).toInt().coerceIn(0, srcH - 2)
                val idx00 = sy * rowStride + sx * pixelStride
                val idx10 = idx00 + pixelStride
                val idx01 = idx00 + rowStride
                val idx11 = idx01 + pixelStride
                val p00 = if (idx00 in 0 until cap) (buf.get(idx00).toInt() and 0xFF) else 0
                val p10 = if (idx10 in 0 until cap) (buf.get(idx10).toInt() and 0xFF) else p00
                val p01 = if (idx01 in 0 until cap) (buf.get(idx01).toInt() and 0xFF) else p00
                val p11 = if (idx11 in 0 until cap) (buf.get(idx11).toInt() and 0xFF) else p00
                out[oy * outW + ox] = (p00 + p10 + p01 + p11 + 2) shr 2
            }
        }
        val sharp = Quality.laplacianVariance(out, outW, outH)
        return LumaFrame(outW, outH, out, sharp)
    }

    fun meanAbsDiff(a: LumaFrame, b: LumaFrame): Double {
        if (a.width != b.width || a.height != b.height) return 999.0
        var sum = 0L
        val pa = a.pixels
        val pb = b.pixels
        for (i in pa.indices step 2) {
            sum += abs(pa[i] - pb[i])
        }
        val count = (pa.size + 1) / 2
        return sum.toDouble() / max(1, count)
    }

    /**
     * Estimates visual overlap (0..100%) and 2D normalized translation between [reference] (last captured photo)
     * and [current] (live viewfinder frame) via coarse-to-fine Zero-Mean Normalized Cross-Correlation (ZNCC).
     */
    fun evaluate(
        reference: LumaFrame?,
        current: LumaFrame,
        previousLive: LumaFrame? = null,
    ): OverlapReading {
        val motionMad = if (previousLive != null) meanAbsDiff(previousLive, current) else 0.0
        val sharpOk = current.sharpness >= MIN_SHARPNESS_LIVE
        val isSteady = sharpOk && motionMad <= STEADY_MOTION_MAX_MAD

        if (reference == null || reference.width != current.width || reference.height != current.height) {
            return OverlapReading(
                overlapPct = null,
                zone = if (!sharpOk) OverlapZone.BLURRY else OverlapZone.FIRST_SHOT,
                sharpness = current.sharpness,
                isSteady = isSteady,
                shouldAutoShoot = isSteady,
            )
        }

        val w = current.width
        val h = current.height
        val coarseStep = 4
        val maxDx = (((w * 0.72f).toInt()) / coarseStep) * coarseStep
        val maxDy = (((h * 0.72f).toInt()) / coarseStep) * coarseStep

        // Check scene texture variance before correlation
        val texStd = lumaStdDev(current.pixels)
        if (texStd < 5.5f) {
            return OverlapReading(
                overlapPct = null,
                zone = OverlapZone.LOW_TEXTURE,
                sharpness = current.sharpness,
                isSteady = isSteady,
                shouldAutoShoot = false,
            )
        }

        // Low-pass 3x3 smoothed pyramid for coarse search so sharp 1px edges never fall between 4px grid steps
        val refSmooth = smooth3x3(reference.pixels, w, h)
        val curSmooth = smooth3x3(current.pixels, w, h)

        var bestDx = 0
        var bestDy = 0
        var bestScore = -2f

        // 1. Coarse search (symmetric step 4 px including 0, sample stride 3)
        var dy = -maxDy
        while (dy <= maxDy) {
            val ovH = h - abs(dy)
            var dx = -maxDx
            while (dx <= maxDx) {
                val ovW = w - abs(dx)
                val geom = (ovW * ovH).toFloat() / (w * h).toFloat()
                if (geom >= 0.22f) {
                    val zncc = znccShifted(refSmooth, curSmooth, w, h, dx, dy, stride = 3)
                    // Mild tie-breaker favoring plausible overlap when repeating patterns exist
                    val score = zncc * (0.93f + 0.07f * geom)
                    if (score > bestScore) {
                        bestScore = score
                        bestDx = dx
                        bestDy = dy
                    }
                }
                dx += coarseStep
            }
            dy += coarseStep
        }

        // 2. Fine search around coarse winner on crisp luma (step 1 px, sample stride 2)
        var bestZncc = -1f
        var fBestScore = -2f
        var fDx = bestDx
        var fDy = bestDy
        for (oy in (bestDy - 4)..(bestDy + 4)) {
            if (abs(oy) > maxDy) continue
            val ovH = h - abs(oy)
            for (ox in (bestDx - 4)..(bestDx + 4)) {
                if (abs(ox) > maxDx) continue
                val ovW = w - abs(ox)
                val geom = (ovW * ovH).toFloat() / (w * h).toFloat()
                if (geom < 0.20f) continue
                val zncc = znccShifted(reference.pixels, current.pixels, w, h, ox, oy, stride = 2)
                val score = zncc * (0.94f + 0.06f * geom)
                if (score > fBestScore) {
                    fBestScore = score
                    bestZncc = zncc
                    fDx = ox
                    fDy = oy
                }
            }
        }

        val geomOverlap = ((w - abs(fDx)) * (h - abs(fDy))).toFloat() / (w * h).toFloat()
        val overlapPct = if (bestZncc < 0.34f) {
            (max(0f, bestZncc) * 85f).roundToInt().coerceIn(0, 32)
        } else {
            val viewpointFactor = ((bestZncc - 0.25f) / 0.55f).coerceIn(0.45f, 1.0f)
            (geomOverlap * viewpointFactor * 100f).roundToInt().coerceIn(0, 100)
        }

        if (!sharpOk && motionMad > 6.0) {
            return OverlapReading(
                overlapPct = overlapPct,
                zone = OverlapZone.BLURRY,
                dxNorm = fDx.toFloat() / w,
                dyNorm = fDy.toFloat() / h,
                zncc = bestZncc,
                sharpness = current.sharpness,
                isSteady = false,
                shouldAutoShoot = false,
            )
        }

        val zone = when {
            overlapPct > 84 -> OverlapZone.TOO_HIGH
            overlapPct >= 60 -> OverlapZone.OPTIMAL
            overlapPct >= 45 -> OverlapZone.MARGINAL
            else -> OverlapZone.TOO_LOW
        }

        val autoReady = isSteady && overlapPct in 54..80
        return OverlapReading(
            overlapPct = overlapPct,
            zone = zone,
            dxNorm = fDx.toFloat() / w,
            dyNorm = fDy.toFloat() / h,
            zncc = bestZncc,
            sharpness = current.sharpness,
            isSteady = isSteady,
            shouldAutoShoot = autoReady,
        )
    }

    private fun smooth3x3(px: IntArray, w: Int, h: Int): IntArray {
        val out = px.copyOf()
        for (y in 1 until h - 1) {
            val r0 = (y - 1) * w
            val r1 = y * w
            val r2 = (y + 1) * w
            for (x in 1 until w - 1) {
                val sum =
                    px[r0 + x - 1] + px[r0 + x] + px[r0 + x + 1] +
                    px[r1 + x - 1] + (px[r1 + x] shl 1) + px[r1 + x + 1] +
                    px[r2 + x - 1] + px[r2 + x] + px[r2 + x + 1]
                out[r1 + x] = (sum + 5) / 10
            }
        }
        return out
    }

    private fun lumaStdDev(px: IntArray): Float {
        var sum = 0L
        var sumSq = 0L
        var n = 0
        for (i in px.indices step 3) {
            val v = px[i].toLong()
            sum += v
            sumSq += v * v
            n++
        }
        if (n <= 1) return 0f
        val mean = sum.toDouble() / n
        val variance = (sumSq.toDouble() / n - mean * mean).coerceAtLeast(0.0)
        return sqrt(variance).toFloat()
    }

    /**
     * Computes Zero-Mean Normalized Cross-Correlation where cur(x, y) is compared against ref(x + dx, y + dy).
     */
    private fun znccShifted(
        ref: IntArray,
        cur: IntArray,
        w: Int,
        h: Int,
        dx: Int,
        dy: Int,
        stride: Int,
    ): Float {
        val xStart = max(0, -dx)
        val xEnd = min(w, w - dx)
        val yStart = max(0, -dy)
        val yEnd = min(h, h - dy)
        if (xEnd - xStart < 8 || yEnd - yStart < 8) return -1f

        var sumR = 0L
        var sumC = 0L
        var n = 0
        var y = yStart
        while (y < yEnd) {
            val rRow = (y + dy) * w + dx
            val cRow = y * w
            var x = xStart
            while (x < xEnd) {
                sumR += ref[rRow + x]
                sumC += cur[cRow + x]
                n++
                x += stride
            }
            y += stride
        }
        if (n < 12) return -1f
        val meanR = sumR.toFloat() / n
        val meanC = sumC.toFloat() / n

        var num = 0f
        var denR = 0f
        var denC = 0f
        y = yStart
        while (y < yEnd) {
            val rRow = (y + dy) * w + dx
            val cRow = y * w
            var x = xStart
            while (x < xEnd) {
                val dr = ref[rRow + x] - meanR
                val dc = cur[cRow + x] - meanC
                num += dr * dc
                denR += dr * dr
                denC += dc * dc
                x += stride
            }
            y += stride
        }
        val denom = sqrt(denR * denC)
        return if (denom < 1e-3f) 0f else (num / denom).coerceIn(-1f, 1f)
    }
}

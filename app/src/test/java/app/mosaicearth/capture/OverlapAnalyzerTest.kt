package app.mosaicearth.capture

import app.mosaicearth.capture.capture.LumaFrame
import app.mosaicearth.capture.capture.OverlapAnalyzer
import app.mosaicearth.capture.capture.OverlapZone
import app.mosaicearth.capture.quality.Quality
import org.junit.Assert.*
import org.junit.Test
import kotlin.math.sin

class OverlapAnalyzerTest {

    private fun cropFromPanorama(pano: IntArray, panoW: Int, x0: Int, y0: Int, w: Int = 72, h: Int = 96): LumaFrame {
        val px = IntArray(w * h)
        for (y in 0 until h) {
            for (x in 0 until w) {
                px[y * w + x] = pano[(y + y0) * panoW + (x + x0)]
            }
        }
        return LumaFrame(w, h, px, Quality.laplacianVariance(px, w, h))
    }

    private fun syntheticPanorama(panoW: Int = 360, panoH: Int = 200): IntArray {
        val pano = IntArray(panoW * panoH)
        for (y in 0 until panoH) {
            for (x in 0 until panoW) {
                // Non-periodic multi-scale spatial features (chirped waves + deterministic object patches + crisp edges)
                val chirpX = sin(x * 0.031 + x * x * 0.00019 + y * 0.053) * 48.0
                val chirpY = sin(y * 0.043 + y * y * 0.00023 - x * 0.029) * 42.0
                val bx = x / 14
                val by = y / 14
                val patchHash = ((bx * 73856093) xor (by * 19349663)) and 0xFF
                val patch = (patchHash - 128) * 0.35
                val fineEdge = if (((x / 3 * 17 + y / 3 * 31) xor (x / 5 * 13)) % 11 < 3) 28 else -14
                pano[y * panoW + x] = (128 + chirpX + chirpY + patch + fineEdge).toInt().coerceIn(8, 248)
            }
        }
        return pano
    }

    @Test
    fun detectsStationaryOptimalMarginalAndLostOverlapAccurately() {
        val panoW = 360
        val pano = syntheticPanorama(panoW, 200)
        val ref = cropFromPanorama(pano, panoW, x0 = 40, y0 = 30)

        // 0. First shot when no reference exists
        val first = OverlapAnalyzer.evaluate(null, ref, ref)
        assertEquals(OverlapZone.FIRST_SHOT, first.zone)
        assertTrue(first.shouldAutoShoot)

        // 1. Stationary (0 px shift) -> ~100% overlap -> TOO_HIGH
        val stationary = OverlapAnalyzer.evaluate(ref, ref, ref)
        assertEquals(OverlapZone.TOO_HIGH, stationary.zone)
        assertTrue((stationary.overlapPct ?: 0) >= 95)
        assertFalse(stationary.shouldAutoShoot)

        // 2. ~26% horizontal shift (19 px of 72 px -> 73.6% geometric overlap) -> OPTIMAL + auto-shoot
        val optimal = cropFromPanorama(pano, panoW, x0 = 59, y0 = 30)
        val optRes = OverlapAnalyzer.evaluate(ref, optimal, optimal)
        assertEquals(OverlapZone.OPTIMAL, optRes.zone)
        assertTrue("Expected ~74%, got ${optRes.overlapPct}", (optRes.overlapPct ?: 0) in 65..80)
        assertTrue(optRes.shouldAutoShoot)

        // 3. ~25% vertical shift (24 px of 96 px -> 75% geometric overlap) -> OPTIMAL + auto-shoot
        val optimalVert = cropFromPanorama(pano, panoW, x0 = 40, y0 = 54)
        val optVertRes = OverlapAnalyzer.evaluate(ref, optimalVert, optimalVert)
        assertEquals(OverlapZone.OPTIMAL, optVertRes.zone)
        assertTrue("Expected ~75%, got ${optVertRes.overlapPct}", (optVertRes.overlapPct ?: 0) in 65..82)
        assertTrue(optVertRes.shouldAutoShoot)

        // 4. ~46% horizontal shift (33 px of 72 px -> 54% geometric overlap) -> MARGINAL
        val marginal = cropFromPanorama(pano, panoW, x0 = 73, y0 = 30)
        val margRes = OverlapAnalyzer.evaluate(ref, marginal, marginal)
        assertEquals(OverlapZone.MARGINAL, margRes.zone)
        assertTrue("Expected ~54%, got ${margRes.overlapPct}", (margRes.overlapPct ?: 0) in 45..59)

        // 5. Completely disjoint crop (180 px shift -> 0% true overlap) -> TOO_LOW
        val lost = cropFromPanorama(pano, panoW, x0 = 220, y0 = 30)
        val lostRes = OverlapAnalyzer.evaluate(ref, lost, lost)
        assertEquals(OverlapZone.TOO_LOW, lostRes.zone)
        assertTrue("Expected < 45%, got ${lostRes.overlapPct}", (lostRes.overlapPct ?: 100) < 45)
        assertFalse(lostRes.shouldAutoShoot)
    }

    @Test
    fun blocksAutoCaptureOnMotionBlurOrFlatWall() {
        val flat = LumaFrame(72, 96, IntArray(72 * 96) { 128 }, 0.0)
        val flatRes = OverlapAnalyzer.evaluate(flat, flat, flat)
        assertEquals(OverlapZone.LOW_TEXTURE, flatRes.zone)
        assertFalse(flatRes.shouldAutoShoot)

        // Smooth gradient with sharpness < 45 and high frame-to-frame motion difference
        val blurryPrev = LumaFrame(72, 96, IntArray(72 * 96) { (it % 72) * 2 }, 12.0)
        val blurryCur = LumaFrame(72, 96, IntArray(72 * 96) { ((it % 72) * 2 + 30).coerceAtMost(250) }, 12.0)
        val pano = syntheticPanorama(360, 200)
        val ref = cropFromPanorama(pano, 360, 40, 20)
        val blurRes = OverlapAnalyzer.evaluate(ref, blurryCur, blurryPrev)
        assertEquals(OverlapZone.BLURRY, blurRes.zone)
        assertFalse(blurRes.shouldAutoShoot)
    }
}

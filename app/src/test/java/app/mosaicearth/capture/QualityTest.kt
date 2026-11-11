package app.mosaicearth.capture

import app.mosaicearth.capture.quality.Quality
import org.junit.Assert.*
import org.junit.Test

class QualityTest {
    @Test fun checkerboardHasMoreHighFrequencyContentThanFlatField() {
        val flat = IntArray(64) { 100 }
        val edges = IntArray(64) { i -> if ((i / 8 + i % 8) % 2 == 0) 20 else 210 }
        assertEquals(0.0, Quality.laplacianVariance(flat, 8, 8), 0.0)
        assertTrue(Quality.laplacianVariance(edges, 8, 8) > Quality.LOW_SHARPNESS)
    }

    @Test fun differenceHashAndHammingDistanceAreDeterministic() {
        assertEquals(0L, Quality.differenceHash(IntArray(72) { it % 9 }))
        assertEquals(-1L, Quality.differenceHash(IntArray(72) { 8 - it % 9 }))
        assertTrue(Quality.nearDuplicate(0, 0xf))
        assertFalse(Quality.nearDuplicate(0, 0x1f))
    }
}

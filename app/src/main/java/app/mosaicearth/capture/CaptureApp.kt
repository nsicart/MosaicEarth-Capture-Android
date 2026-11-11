package app.mosaicearth.capture

import android.app.Application
import androidx.room.Room
import app.mosaicearth.capture.authentication.Sessions
import app.mosaicearth.capture.cloud_processing.CloudApi
import app.mosaicearth.capture.projects.CaptureDatabase
import app.mosaicearth.capture.projects.CaptureStorage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob

class CaptureApp : Application() {
    val database by lazy {
        Room.databaseBuilder(this, CaptureDatabase::class.java, "capture.db")
            .addMigrations(CaptureDatabase.MIGRATION_1_2)
            .fallbackToDestructiveMigrationOnDowngrade()
            .enableMultiInstanceInvalidation()
            .build()
    }
    val storage by lazy { CaptureStorage(this, database.projects()) }
    val sessions by lazy { Sessions(this) }
    val cloud by lazy { BuildConfig.CAPTURE_ORIGIN.takeIf(String::isNotBlank)?.let { CloudApi(it) } }
    val ioScope = CoroutineScope(SupervisorJob() + Dispatchers.IO)
}

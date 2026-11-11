package app.mosaicearth.capture.cloud_processing

import androidx.room.*
import app.mosaicearth.capture.projects.Project
import kotlinx.coroutines.flow.Flow

enum class JobControl { RUN, PAUSE, CANCEL, DONE }

@Entity(
    foreignKeys = [
        ForeignKey(
            entity = Project::class,
            parentColumns = ["id"],
            childColumns = ["projectId"],
            onDelete = ForeignKey.CASCADE
        )
    ],
    indices = [Index(value = ["projectId", "owner"])]
)
data class CloudJob(
    @PrimaryKey val id: String,
    val projectId: String,
    val owner: String,
    val payload: String,
    val totalBytes: Long,
    val createdAt: Long,
    val control: JobControl = JobControl.RUN,
    val status: String = "Confirmat",
    val remoteId: String? = null,
    val uploaded: Long = 0,
    val percent: Int = 0,
    val finalCredits: Int? = null,
    val checkoutUrl: String? = null,
)

@Dao
interface CloudJobsDao {
    @Insert
    suspend fun insert(job: CloudJob)

    @Query("SELECT * FROM CloudJob WHERE id = :id")
    suspend fun get(id: String): CloudJob?

    @Query("SELECT * FROM CloudJob WHERE projectId = :project AND owner = :owner ORDER BY createdAt DESC")
    fun observe(project: String, owner: String): Flow<List<CloudJob>>

    @Query("UPDATE CloudJob SET remoteId = :remote WHERE id = :id")
    suspend fun remote(id: String, remote: String)

    @Query("UPDATE CloudJob SET uploaded = :bytes WHERE id = :id")
    suspend fun uploaded(id: String, bytes: Long)

    @Query("UPDATE CloudJob SET status = :status, percent = :percent, finalCredits = :credits, checkoutUrl = :checkoutUrl WHERE id = :id")
    suspend fun progress(id: String, status: String, percent: Int, credits: Int?, checkoutUrl: String? = null)

    @Query("UPDATE CloudJob SET control = :control WHERE id = :id AND control != 'DONE'")
    suspend fun control(id: String, control: JobControl)

    @Query("SELECT * FROM CloudJob WHERE owner = :owner AND control IN ('RUN','CANCEL')")
    suspend fun pending(owner: String): List<CloudJob>
}

package app.mosaicearth.capture.projects

import androidx.room.*
import androidx.room.migration.Migration
import androidx.sqlite.db.SupportSQLiteDatabase
import kotlinx.coroutines.flow.Flow

enum class Scene(val label: String, val steps: List<String>) {
    DRONE_AERIAL(
        "Mapeig aeri / Dron (SD)",
        listOf(
            "Importa les fotos des de la targeta SD o carpeta DCIM del dron amb un solapament del 70–80%.",
            "Revisa la nitidesa i verifica que les metadades GPS EXIF s’han detectat automàticament.",
            "Genera núvol de punts, malla 3D, ortofoto GeoTIFF i MDS localment (0 €) o al núvol."
        )
    ),
    TERRAIN(
        "Terreny / Topografia",
        listOf(
            "Recorre la parcel·la o talús amb preses solapades mantenint l’horitzó o vista elevada.",
            "Afegeix una segona passada creuada o obliqua per reforçar la geometria i l’elevació.",
            "Processa en mode aeri/terreny per obtenir MDS i ortofoto georeferenciats."
        )
    ),
    OBJECT(
        "Objecte petit",
        listOf(
            "Enquadra l’objecte sencer i fes una volta completa.",
            "Repeteix la volta des d’una altra alçada.",
            "Fes passades curtes pels detalls i les zones ocultes."
        )
    ),
    SCULPTURE(
        "Escultura",
        listOf(
            "Fes una volta mantenint la base dins el quadre.",
            "Canvia d’alçada i inclou la part posterior.",
            "Afegeix preses obliqües de les cavitats i els volums."
        )
    ),
    MONUMENT(
        "Monument",
        listOf(
            "Cobreix cada costat accessible amb preses solapades.",
            "Combina vistes generals, obliqües i de detall.",
            "Revisa les parts altes, la base i les zones tapades."
        )
    ),
    FACADE(
        "Façana",
        listOf(
            "Mou-te lateralment amb solapament entre preses.",
            "Fes una passada obliqua en cada sentit.",
            "Alterna la distància i cobreix les parts altes i baixes."
        )
    ),
    BUILDING(
        "Edifici",
        listOf(
            "Cobreix les cares accessibles i travessa les cantonades.",
            "Repeteix des d’una distància diferent.",
            "Revisa el coronament i la connexió amb el terra."
        )
    ),
    STREET(
        "Carrer",
        listOf(
            "Fes una passada lenta amb vistes laterals solapades.",
            "Torna en sentit contrari i cobreix l’altre costat.",
            "Repeteix zones amb vehicles, persones, vidre o oclusions."
        )
    ),
    OUTDOOR(
        "Espai exterior",
        listOf(
            "Divideix l’espai en trams amb punts comuns.",
            "Fes passades creuades mantenint punts de referència.",
            "Revisa les zones amb poca textura o llum variable."
        )
    ),
    FREE(
        "Escena lliure",
        listOf(
            "Comença per les vistes generals solapades.",
            "Canvia de perspectiva mantenint zones comunes.",
            "Afegeix vistes complementàries dels buits."
        )
    );

    val isAerialDefault: Boolean
        get() = this == DRONE_AERIAL || this == TERRAIN
}

@Entity
data class Project(
    @PrimaryKey val id: String,
    val title: String,
    val scene: Scene,
    val createdAt: Long,
    val description: String = "",
    val locationMode: String = "LOCAL",
    val latitude: Double? = null,
    val longitude: Double? = null,
    val horizontalAccuracy: Float? = null,
    val locationTime: Long? = null,
)

enum class MediaKind(val extension: String) { PHOTO("jpg"), VIDEO("mp4") }

@Entity(
    foreignKeys = [
        ForeignKey(
            entity = Project::class,
            parentColumns = ["id"],
            childColumns = ["projectId"],
            onDelete = ForeignKey.CASCADE
        )
    ],
    indices = [Index("projectId")]
)
data class CaptureMedia(
    @PrimaryKey val id: String,
    val projectId: String,
    val kind: MediaKind,
    val capturedAt: Long,
    val bytes: Long,
    val width: Int?,
    val height: Int?,
    val orientation: Int?,
    val focalLengthMm: Double?,
    val durationMs: Long?,
    val sharpness: Double?,
    val fingerprint: Long?,
    val selected: Boolean,
    val pass: Int?,
    val sourceVideoId: String? = null,
    val sourceTimeMs: Long? = null,
    val gpsLatitude: Double? = null,
    val gpsLongitude: Double? = null,
    val gpsAltitude: Double? = null,
    val focalLength35mm: Int? = null,
)

@Entity(
    foreignKeys = [
        ForeignKey(
            entity = Project::class,
            parentColumns = ["id"],
            childColumns = ["projectId"],
            onDelete = ForeignKey.CASCADE
        )
    ],
    indices = [Index("projectId")]
)
data class Model(
    @PrimaryKey val id: String,
    val projectId: String,
    val name: String,
    val extension: String,
    val owner: String? = null,
    val bytes: Long,
    val createdAt: Long,
    val role: String = "gaussian", // "gaussian", "pointcloud", "mesh", "orthophoto", "dsm"
    val latitude: Double? = null,
    val longitude: Double? = null,
    val altitude: Double? = null,
    val cloudAssetId: String? = null,
    val cloudProjectId: String? = null,
) {
    val roleBadge: String
        get() = when (role) {
            "pointcloud" -> "NÚVOL DE PUNTS"
            "mesh" -> "MALLA 3D TEXTURITZADA"
            "orthophoto" -> "ORTOFOTO GEOTIFF"
            "dsm" -> "MDS ELEVACIÓ GEOTIFF"
            else -> "3D GAUSSIAN SPLAT"
        }
}

data class ProjectCardStats(
    val projectId: String,
    val photoCount: Int,
    val videoCount: Int,
    val gpsCount: Int,
    val modelCount: Int,
    val coverMediaId: String?,
    val coverSourceVideoId: String?,
)

@Dao
interface ProjectsDao {
    @Query("SELECT * FROM Project ORDER BY createdAt DESC")
    fun projects(): Flow<List<Project>>

    @Query(
        """
        SELECT p.id AS projectId,
               (SELECT COUNT(*) FROM CaptureMedia m WHERE m.projectId = p.id AND m.kind = 'PHOTO') AS photoCount,
               (SELECT COUNT(*) FROM CaptureMedia m WHERE m.projectId = p.id AND m.kind = 'VIDEO') AS videoCount,
               (SELECT COUNT(*) FROM CaptureMedia m WHERE m.projectId = p.id AND m.kind = 'PHOTO' AND m.gpsLatitude IS NOT NULL AND m.gpsLongitude IS NOT NULL) AS gpsCount,
               (SELECT COUNT(*) FROM Model md WHERE md.projectId = p.id) AS modelCount,
               (SELECT m2.id FROM CaptureMedia m2 WHERE m2.projectId = p.id AND m2.kind = 'PHOTO' ORDER BY m2.capturedAt ASC LIMIT 1) AS coverMediaId,
               (SELECT m2.sourceVideoId FROM CaptureMedia m2 WHERE m2.projectId = p.id AND m2.kind = 'PHOTO' ORDER BY m2.capturedAt ASC LIMIT 1) AS coverSourceVideoId
        FROM Project p
        """
    )
    fun projectStats(): Flow<List<ProjectCardStats>>

    @Query("SELECT * FROM Project WHERE id = :id")
    suspend fun projectById(id: String): Project?

    @Query("SELECT * FROM CaptureMedia WHERE projectId = :projectId ORDER BY capturedAt, id")
    fun media(projectId: String): Flow<List<CaptureMedia>>

    @Query("SELECT * FROM CaptureMedia WHERE projectId = :projectId")
    suspend fun mediaSnapshot(projectId: String): List<CaptureMedia>

    @Query("SELECT * FROM CaptureMedia WHERE projectId = :projectId AND kind = 'PHOTO' AND selected ORDER BY capturedAt, id")
    suspend fun selectedPhotos(projectId: String): List<CaptureMedia>

    @Query("SELECT * FROM CaptureMedia WHERE id = :id")
    suspend fun mediaById(id: String): CaptureMedia?

    @Query("SELECT * FROM Model WHERE projectId = :projectId AND (owner IS NULL OR owner = :owner) ORDER BY createdAt DESC")
    fun models(projectId: String, owner: String?): Flow<List<Model>>

    @Query("SELECT * FROM Model WHERE projectId = :projectId")
    suspend fun modelsSnapshot(projectId: String): List<Model>

    @Insert
    suspend fun insert(project: Project)

    @Insert
    suspend fun insert(media: CaptureMedia)

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    suspend fun insertFrames(media: List<CaptureMedia>)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(model: Model)

    @Query("UPDATE CaptureMedia SET selected = :selected WHERE id = :id AND kind = 'PHOTO'")
    suspend fun select(id: String, selected: Boolean)

    @Query("DELETE FROM CaptureMedia WHERE id = :id")
    suspend fun deleteMedia(id: String)

    @Query("DELETE FROM Model WHERE id = :id")
    suspend fun deleteModel(id: String)

    @Query("DELETE FROM Project WHERE id = :id")
    suspend fun deleteProject(id: String)

    @Query("UPDATE Project SET description = :description, locationMode = :mode, latitude = :latitude, longitude = :longitude, horizontalAccuracy = :accuracy, locationTime = :time WHERE id = :id")
    suspend fun details(
        id: String,
        description: String,
        mode: String,
        latitude: Double?,
        longitude: Double?,
        accuracy: Float?,
        time: Long?
    )

    @Query("UPDATE Model SET cloudAssetId = :cloudAssetId, cloudProjectId = :cloudProjectId WHERE id = :modelId")
    suspend fun markUploadedToCloud(modelId: String, cloudAssetId: String, cloudProjectId: String)
}

@Database(
    entities = [
        Project::class,
        CaptureMedia::class,
        Model::class,
        app.mosaicearth.capture.cloud_processing.CloudJob::class
    ],
    version = 2,
    exportSchema = true
)
abstract class CaptureDatabase : RoomDatabase() {
    abstract fun projects(): ProjectsDao
    abstract fun jobs(): app.mosaicearth.capture.cloud_processing.CloudJobsDao

    companion object {
        val MIGRATION_1_2 = object : Migration(1, 2) {
            override fun migrate(db: SupportSQLiteDatabase) {
                db.execSQL("ALTER TABLE CaptureMedia ADD COLUMN gpsLatitude REAL")
                db.execSQL("ALTER TABLE CaptureMedia ADD COLUMN gpsLongitude REAL")
                db.execSQL("ALTER TABLE CaptureMedia ADD COLUMN gpsAltitude REAL")
                db.execSQL("ALTER TABLE CaptureMedia ADD COLUMN focalLength35mm INTEGER")

                db.execSQL("ALTER TABLE Model ADD COLUMN role TEXT NOT NULL DEFAULT 'gaussian'")
                db.execSQL("ALTER TABLE Model ADD COLUMN latitude REAL")
                db.execSQL("ALTER TABLE Model ADD COLUMN longitude REAL")
                db.execSQL("ALTER TABLE Model ADD COLUMN altitude REAL")
                db.execSQL("ALTER TABLE Model ADD COLUMN cloudAssetId TEXT")
                db.execSQL("ALTER TABLE Model ADD COLUMN cloudProjectId TEXT")

                db.execSQL("ALTER TABLE CloudJob ADD COLUMN checkoutUrl TEXT")
            }
        }
    }
}

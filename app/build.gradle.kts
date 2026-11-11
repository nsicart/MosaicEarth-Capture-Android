import java.net.URI
import java.security.MessageDigest

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
    id("com.google.devtools.ksp")
}

val brushAar = providers.gradleProperty("captureBrushAar").orNull?.let { path ->
    file(path).takeIf { it.isFile } ?: rootProject.file(path)
}
if (brushAar != null) {
    require(brushAar.isFile) { "Missing experimental Brush AAR." }
    val digest = MessageDigest.getInstance("SHA-256")
    brushAar.inputStream().use { input ->
        val buffer = ByteArray(64 * 1024)
        while (true) {
            val read = input.read(buffer)
            if (read < 0) break
            digest.update(buffer, 0, read)
        }
    }
    val expected = "b86218bda0c3408328211ffde471c6543add711f9cba8f11419dd48978031ef1"
    require(digest.digest().joinToString("") { "%02x".format(it) } == expected) { "Unrecognized Brush AAR." }
}

val captureOrigin = providers.gradleProperty("captureSandboxOrigin")
    .orElse("https://app.mosaicearth.app")
    .get()
if (captureOrigin.isNotEmpty()) {
    val origin = URI(captureOrigin)
    require(
        origin.scheme == "https" && origin.host != null && origin.rawUserInfo == null &&
            origin.rawQuery == null && origin.rawFragment == null && origin.rawPath in listOf("", "/")
    ) {
        "captureSandboxOrigin must be an HTTPS origin"
    }
}

val releaseKeystorePath = providers.gradleProperty("captureKeystore").orNull?.let { path ->
    file(path).takeIf { it.isFile } ?: rootProject.file(path)
}
val releaseKeystorePassword = providers.gradleProperty("captureKeystorePassword").orNull
val releaseKeyAlias = providers.gradleProperty("captureKeyAlias").orNull
val releaseKeyPassword = providers.gradleProperty("captureKeyPassword").orNull ?: releaseKeystorePassword

android {
    namespace = "app.mosaicearth.capture"
    compileSdk = 35
    ndkVersion = "27.2.12479018"

    defaultConfig {
        applicationId = "app.mosaicearth.capture"
        minSdk = if (brushAar == null) 27 else 31
        ndk { abiFilters += "arm64-v8a" }
        targetSdk = 35
        versionCode = 5
        versionName = "0.4.1"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        buildConfigField("String", "CAPTURE_ORIGIN", "\"$captureOrigin\"")
        buildConfigField("boolean", "BRUSH_ENABLED", (brushAar != null).toString())
        externalNativeBuild {
            cmake {
                cppFlags += "-std=c++17"
                arguments += "-DANDROID_STL=c++_shared"
            }
        }
    }

    signingConfigs {
        if (releaseKeystorePath != null && releaseKeystorePath.isFile) {
            require(!releaseKeystorePassword.isNullOrBlank() && !releaseKeyAlias.isNullOrBlank()) {
                "Pass -PcaptureKeystorePassword and -PcaptureKeyAlias when signing with -PcaptureKeystore."
            }
            create("releaseSigning") {
                storeFile = releaseKeystorePath
                storePassword = releaseKeystorePassword
                keyAlias = releaseKeyAlias
                keyPassword = releaseKeyPassword
            }
        }
    }

    buildTypes {
        debug {
            applicationIdSuffix = if (brushAar == null) ".dev" else ".brush"
            buildConfigField("boolean", "BRUSH_ENABLED", (brushAar != null).toString())
            buildConfigField("String", "CAPTURE_ORIGIN", "\"$captureOrigin\"")
        }
        release {
            isMinifyEnabled = false
            isShrinkResources = false
            signingConfig = signingConfigs.findByName("releaseSigning") ?: signingConfigs.getByName("debug")
            buildConfigField("boolean", "BRUSH_ENABLED", (brushAar != null).toString())
            buildConfigField("String", "CAPTURE_ORIGIN", "\"$captureOrigin\"")
        }
    }

    externalNativeBuild {
        cmake {
            path = file("src/main/cpp/CMakeLists.txt")
            version = "3.22.1"
        }
    }

    packaging {
        jniLibs {
            pickFirsts += "**/libc++_shared.so"
            pickFirsts += "**/libopencv_java4.so"
        }
    }

    if (brushAar != null) {
        sourceSets.getByName("main").assets.srcDir("../third_party/brush/assets")
    }

    buildFeatures {
        compose = true
        buildConfig = true
        prefab = true
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    lint {
        abortOnError = true
        checkReleaseBuilds = false
    }
}

kotlin { jvmToolchain(17) }
ksp { arg("room.schemaLocation", "$projectDir/schemas") }

dependencies {
    if (brushAar != null) implementation(files(brushAar))
    implementation("org.opencv:opencv:4.10.0")
    implementation("androidx.documentfile:documentfile:1.0.1")
    implementation(platform("androidx.compose:compose-bom:2024.12.01"))
    implementation("androidx.activity:activity-compose:1.10.1")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.material:material-icons-extended")
    implementation("androidx.lifecycle:lifecycle-runtime-compose:2.8.7")
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.exifinterface:exifinterface:1.3.7")
    implementation("androidx.webkit:webkit:1.12.1")
    listOf("camera-core", "camera-camera2", "camera-lifecycle", "camera-video", "camera-view").forEach {
        implementation("androidx.camera:$it:1.4.2")
    }
    implementation("androidx.room:room-runtime:2.6.1")
    implementation("androidx.room:room-ktx:2.6.1")
    ksp("androidx.room:room-compiler:2.6.1")
    implementation("androidx.work:work-runtime-ktx:2.10.0")
    implementation("com.squareup.okhttp3:okhttp:4.12.0")
    testImplementation("junit:junit:4.13.2")
    testImplementation("org.json:json:20240303")
}

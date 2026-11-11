package app.mosaicearth.capture.local_training

import android.app.ActivityManager
import android.content.Context
import android.content.pm.PackageManager
import android.os.BatteryManager
import android.os.Build
import android.os.PowerManager
import android.os.StatFs

data class LocalReadiness(
    val abi: String,
    val vulkanReported: Boolean,
    val availableMemory: Long,
    val availableStorage: Long,
    val battery: Int?,
    val thermal: Int?,
)

fun inspectDevice(context: Context): LocalReadiness {
    val memory = ActivityManager.MemoryInfo().also { context.getSystemService(ActivityManager::class.java).getMemoryInfo(it) }
    val battery = context.getSystemService(BatteryManager::class.java)
        .getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY).takeIf { it in 0..100 }
    val thermal = if (Build.VERSION.SDK_INT >= 29)
        context.getSystemService(PowerManager::class.java).currentThermalStatus else null
    return LocalReadiness(Build.SUPPORTED_ABIS.firstOrNull().orEmpty(),
        context.packageManager.hasSystemFeature(PackageManager.FEATURE_VULKAN_HARDWARE_LEVEL),
        memory.availMem, StatFs(context.filesDir.path).availableBytes, battery, thermal)
}

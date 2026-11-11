package app.mosaicearth.capture.authentication

import android.content.Context
import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyProperties
import android.util.Base64
import org.json.JSONObject
import java.security.KeyStore
import javax.crypto.Cipher
import javax.crypto.KeyGenerator
import javax.crypto.SecretKey
import javax.crypto.spec.GCMParameterSpec

data class Session(val origin: String, val account: String, val display: String, val token: String) {
    val ownerKey get() = "$origin|$account"
}

class Sessions(context: Context) {
    private val preferences = context.getSharedPreferences("capture-session", Context.MODE_PRIVATE)
    private val alias = "mosaicearth-capture-session"
    private val charset = Charsets.UTF_8

    @Synchronized
    fun save(session: Session) {
        val cipher = Cipher.getInstance("AES/GCM/NoPadding").apply { init(Cipher.ENCRYPT_MODE, key()) }
        val json = JSONObject().put("origin", session.origin).put("account", session.account)
            .put("display", session.display).put("token", session.token)
        val payload = cipher.iv + cipher.doFinal(json.toString().toByteArray(charset))
        check(preferences.edit().putString("encrypted", Base64.encodeToString(payload, Base64.NO_WRAP)).commit())
    }

    @Synchronized
    fun load(): Session? {
        val saved = preferences.getString("encrypted", null) ?: return null
        return runCatching {
            val data = Base64.decode(saved, Base64.NO_WRAP)
            val cipher = Cipher.getInstance("AES/GCM/NoPadding").apply {
                init(Cipher.DECRYPT_MODE, key(), GCMParameterSpec(128, data, 0, 12))
            }
            val json = JSONObject(String(cipher.doFinal(data, 12, data.size - 12), charset))
            Session(json.getString("origin"), json.getString("account"), json.getString("display"), json.getString("token"))
        }.getOrNull()
    }

    @Synchronized
    fun clear() {
        check(preferences.edit().remove("encrypted").commit())
    }

    private fun key(): SecretKey {
        val store = KeyStore.getInstance("AndroidKeyStore").apply { load(null) }
        (store.getKey(alias, null) as? SecretKey)?.let { return it }
        return KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, "AndroidKeyStore").run {
            init(KeyGenParameterSpec.Builder(alias, KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT)
                .setBlockModes(KeyProperties.BLOCK_MODE_GCM).setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
                .setKeySize(256).build())
            generateKey()
        }
    }
}

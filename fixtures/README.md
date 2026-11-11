# Test Fixtures

JVM unit tests under `app/src/test/` generate small synthetic `.ply`, `.splat`, `.spz`, `.glb` and `.zip` byte payloads in memory at runtime without personal data or external network calls. `CloudApiTest` uses reserved `.invalid` / `.example` domains and an in-memory OkHttp interceptor.

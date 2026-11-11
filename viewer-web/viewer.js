import {
    AmbientLight,
    Box3,
    BufferGeometry,
    Color,
    DirectionalLight,
    Float32BufferAttribute,
    GridHelper,
    HemisphereLight,
    PerspectiveCamera,
    Points,
    PointsMaterial,
    Scene,
    ShaderMaterial,
    SRGBColorSpace,
    Vector3,
    WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
import { Viewer, SceneFormat, SceneRevealMode, RenderMode } from "@mkkellogg/gaussian-splats-3d";

// In-memory Blob URL short-circuit so GLTFLoader / ImageBitmapLoader never relies on Android WebView network interception for blob: URLs
const blobRegistry = new Map();
if (typeof URL !== "undefined" && typeof URL.createObjectURL === "function") {
    const origCreate = URL.createObjectURL.bind(URL);
    const origRevoke = URL.revokeObjectURL.bind(URL);
    URL.createObjectURL = (obj) => {
        const url = origCreate(obj);
        if (obj instanceof Blob) blobRegistry.set(url, obj);
        return url;
    };
    URL.revokeObjectURL = (url) => {
        blobRegistry.delete(url);
        return origRevoke(url);
    };
}
if (typeof window !== "undefined" && typeof window.fetch === "function") {
    const origFetch = window.fetch.bind(window);
    window.fetch = async (input, init) => {
        const url = typeof input === "string" ? input : (input && input.url) || "";
        if (url.startsWith("blob:") && blobRegistry.has(url)) {
            const blob = blobRegistry.get(url);
            return new Response(blob, {
                status: 200,
                headers: { "Content-Type": blob.type || "application/octet-stream" },
            });
        }
        return origFetch(input, init);
    };
}

const root = document.querySelector("main");
const status = document.querySelector("#status");
const reset = document.querySelector("#reset");
const controlsBar = document.querySelector("#controls");
const statsEl = document.querySelector("#stats");
const params = new URL(location.href).searchParams;
const format = (params.get("format") || "").trim().replace(/^\./, "").toLowerCase();
const role = (params.get("role") || "gaussian").trim().toLowerCase();
const gaussianFormats = { ply: SceneFormat.Ply, splat: SceneFormat.Splat, spz: SceneFormat.Spz };

function getViewportDims() {
    const w = Math.floor(root.clientWidth || window.innerWidth || 0);
    const h = Math.floor(root.clientHeight || window.innerHeight || 0);
    return { w, h };
}

async function waitForViewportSize(timeoutMs = 3000) {
    const initial = getViewportDims();
    if (initial.w > 8 && initial.h > 8) return initial;
    return new Promise((resolve) => {
        let done = false;
        const finish = () => {
            if (done) return;
            done = true;
            if (ro) ro.disconnect();
            const d = getViewportDims();
            resolve({ w: Math.max(320, d.w), h: Math.max(320, d.h) });
        };
        let ro = null;
        if (typeof ResizeObserver !== "undefined") {
            ro = new ResizeObserver(() => {
                const d = getViewportDims();
                if (d.w > 8 && d.h > 8) finish();
            });
            ro.observe(root);
        }
        const poll = () => {
            if (done) return;
            const d = getViewportDims();
            if (d.w > 8 && d.h > 8) finish();
            else requestAnimationFrame(poll);
        };
        requestAnimationFrame(poll);
        setTimeout(finish, timeoutMs);
    });
}

function showStats(tag, detail) {
    if (!statsEl) return;
    statsEl.innerHTML = "";
    const strong = document.createElement("strong");
    strong.textContent = tag;
    statsEl.appendChild(strong);
    if (detail) {
        statsEl.appendChild(document.createTextNode(" · " + detail));
    }
    statsEl.hidden = false;
}

function addButton(label, onClick) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = label;
    btn.addEventListener("click", () => onClick(btn));
    controlsBar.appendChild(btn);
    return btn;
}

function formatCount(n) {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(1) + "k";
    return String(n);
}

function fail(msg) {
    status.textContent = msg || "L’actiu no es pot renderitzar al visor mòbil. Pots exportar-lo o pujar-lo a MosaicEarth.";
    status.hidden = false;
    reset.disabled = true;
    document.body.dataset.viewer = "error";
}

function createMobileWebGLRenderer() {
    try {
        return new WebGLRenderer({ antialias: true, alpha: false });
    } catch (_) {
        return new WebGLRenderer({ antialias: false, alpha: false });
    }
}

function computeRobustWorldBounds(object3d) {
    object3d.updateMatrixWorld(true);
    const fullBox = new Box3().setFromObject(object3d);
    const xs = [], ys = [], zs = [];
    const tmp = new Vector3();

    object3d.traverse((node) => {
        const geom = node.geometry;
        const pos = geom && geom.getAttribute && geom.getAttribute("position");
        if (!pos || pos.count <= 0) return;
        const step = Math.max(1, Math.floor(pos.count / 3000));
        for (let i = 0; i < pos.count; i += step) {
            tmp.fromBufferAttribute(pos, i).applyMatrix4(node.matrixWorld);
            if (Number.isFinite(tmp.x) && Number.isFinite(tmp.y) && Number.isFinite(tmp.z)) {
                xs.push(tmp.x);
                ys.push(tmp.y);
                zs.push(tmp.z);
            }
        }
    });

    if (xs.length >= 16) {
        xs.sort((a, b) => a - b);
        ys.sort((a, b) => a - b);
        zs.sort((a, b) => a - b);
        const q = (arr, p) => arr[Math.min(arr.length - 1, Math.max(0, Math.floor((arr.length - 1) * p)))];
        const center = new Vector3(
            0.5 * (q(xs, 0.12) + q(xs, 0.88)),
            0.5 * (q(ys, 0.12) + q(ys, 0.88)),
            0.5 * (q(zs, 0.12) + q(zs, 0.88)),
        );
        const coreSize = new Vector3(
            q(xs, 0.92) - q(xs, 0.08),
            q(ys, 0.92) - q(ys, 0.08),
            q(zs, 0.92) - q(zs, 0.08),
        );
        const fullSize = fullBox.getSize(new Vector3());
        const coreExtent = Math.max(0.02, coreSize.x, coreSize.y, coreSize.z);
        const fullExtent = Math.max(coreExtent, fullSize.x, fullSize.y, fullSize.z);
        const floorY = q(ys, 0.03);
        return { center, coreSize, coreExtent, fullExtent, floorY };
    }

    const center = fullBox.getCenter(new Vector3());
    const size = fullBox.getSize(new Vector3());
    const extent = Math.max(0.02, size.x, size.y, size.z);
    return { center, coreSize: size, coreExtent: extent, fullExtent: extent, floorY: fullBox.min.y };
}

async function setupThreeOrbitScene() {
    const dims = await waitForViewportSize();
    const scene = new Scene();
    scene.background = new Color(0x090f0b);

    const width = Math.max(64, dims.w);
    const height = Math.max(64, dims.h);
    const camera = new PerspectiveCamera(48, width / height, 0.01, 4000);
    const renderer = createMobileWebGLRenderer();
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.domElement.addEventListener("webglcontextlost", (e) => {
        e.preventDefault();
        fail("Context WebGL perdut per límit de memòria gràfica.");
    });
    root.innerHTML = "";
    root.appendChild(renderer.domElement);

    const hemi = new HemisphereLight(0xffffff, 0x1d2e23, 1.35);
    scene.add(hemi);
    const dir = new DirectionalLight(0xffffff, 1.2);
    dir.position.set(5, 10, 7);
    scene.add(dir);
    const fill = new DirectionalLight(0xd9f2e4, 0.5);
    fill.position.set(-6, 4, -5);
    scene.add(fill);
    scene.add(new AmbientLight(0xffffff, 0.45));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    let animId = 0;
    const loop = () => {
        animId = requestAnimationFrame(loop);
        controls.update();
        renderer.render(scene, camera);
    };
    loop();

    const syncSize = () => {
        const d = getViewportDims();
        if (d.w <= 4 || d.h <= 4) return;
        camera.aspect = d.w / d.h;
        camera.updateProjectionMatrix();
        renderer.setSize(d.w, d.h);
    };
    window.addEventListener("resize", syncSize);
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
        ro = new ResizeObserver(syncSize);
        ro.observe(root);
    }

    let gridHelper = null;
    let gridBtnCreated = false;

    const frameObject = (object3d) => {
        const { center, coreSize, coreExtent, fullExtent, floorY } = computeRobustWorldBounds(object3d);

        if (gridHelper) scene.remove(gridHelper);
        const gridSpan = Math.max(0.25, Math.max(coreSize.x, coreSize.z) * 1.45);
        gridHelper = new GridHelper(gridSpan, 16, 0x4b6e35, 0x1c2b21);
        gridHelper.position.set(center.x, floorY - coreExtent * 0.005, center.z);
        scene.add(gridHelper);

        if (!gridBtnCreated) {
            gridBtnCreated = true;
            const gridBtn = addButton("Graella", (btn) => {
                if (gridHelper) {
                    gridHelper.visible = !gridHelper.visible;
                    btn.classList.toggle("active", gridHelper.visible);
                }
            });
            gridBtn.classList.add("active");
        }

        syncSize();
        camera.near = Math.max(0.0005, coreExtent * 0.001);
        camera.far = Math.max(60, fullExtent * 250);
        camera.position.copy(center).add(new Vector3(0.66 * coreExtent, 0.56 * coreExtent, 1.18 * coreExtent));
        camera.updateProjectionMatrix();
        controls.target.copy(center);
        controls.update();
        controls.saveState();
        reset.onclick = () => {
            controls.reset();
            controls.update();
        };
        reset.disabled = false;
        status.hidden = true;
        document.body.dataset.viewer = "ready";
        return { extent: coreExtent };
    };

    return {
        scene,
        frameObject,
        stop: () => {
            cancelAnimationFrame(animId);
            if (ro) ro.disconnect();
        },
    };
}

async function loadMeshGlb() {
    status.textContent = "Carregant malla 3D texturitzada (.glb)…";
    const ctx = await setupThreeOrbitScene();
    const res = await fetch("/model/scene." + format);
    if (!res.ok) throw new Error("No s'ha pogut llegir el fitxer GLB (" + res.status + ")");
    const arrayBuffer = await res.arrayBuffer();

    const loader = new GLTFLoader();
    const gltf = await loader.parseAsync(arrayBuffer, "");
    if (!gltf || !gltf.scene) throw new Error("Fitxer GLB buit");

    let triangles = 0;
    let vertices = 0;
    const materials = [];
    gltf.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
            const pos = child.geometry.getAttribute("position");
            if (pos) vertices += pos.count;
            if (child.geometry.index) triangles += Math.floor(child.geometry.index.count / 3);
            else if (pos) triangles += Math.floor(pos.count / 3);
            if (child.material) {
                if (Array.isArray(child.material)) materials.push(...child.material);
                else materials.push(child.material);
            }
        }
    });

    ctx.scene.add(gltf.scene);
    ctx.frameObject(gltf.scene);

    let wireframe = false;
    addButton("Filferro", (btn) => {
        wireframe = !wireframe;
        for (const m of materials) m.wireframe = wireframe;
        btn.classList.toggle("active", wireframe);
    });
    showStats("MALLA 3D", `${formatCount(triangles)} tris · ${formatCount(vertices)} vèrtexs`);
}

async function loadPointCloudPly() {
    status.textContent = "Carregant núvol de punts 3D (.ply)…";
    const ctx = await setupThreeOrbitScene();
    const res = await fetch("/model/scene." + format);
    if (!res.ok) throw new Error("No s'ha pogut llegir el núvol PLY (" + res.status + ")");
    const arrayBuffer = await res.arrayBuffer();

    const loader = new PLYLoader();
    const geometry = loader.parse(arrayBuffer);
    const posAttr = geometry.getAttribute("position");
    if (!posAttr || posAttr.count <= 0) throw new Error("Núvol PLY buit");
    geometry.computeBoundingBox();
    const box = geometry.boundingBox;
    const size = box ? box.getSize(new Vector3()) : new Vector3(1, 1, 1);
    const rawExtent = Math.max(0.02, size.x, size.y, size.z);
    const hasColors = Boolean(geometry.getAttribute("color"));
    let ptSize = Math.max(rawExtent * 0.006, 0.004);
    const mat = new PointsMaterial({
        size: ptSize,
        vertexColors: hasColors,
        color: hasColors ? 0xffffff : 0x99cc00,
        sizeAttenuation: true,
    });
    const points = new Points(geometry, mat);
    // Photogrammetry PLY is metric ENU Z-up; rotate -90 deg around X to Three.js Y-up
    points.rotation.x = -Math.PI / 2;
    ctx.scene.add(points);
    const { extent } = ctx.frameObject(points);
    ptSize = Math.max(extent * 0.0075, 0.004);
    mat.size = ptSize;

    addButton("Punts −", () => {
        ptSize = Math.max(extent * 0.001, ptSize * 0.75);
        mat.size = ptSize;
    });
    addButton("Punts +", () => {
        ptSize = Math.min(extent * 0.08, ptSize * 1.33);
        mat.size = ptSize;
    });
    showStats("NÚVOL PLY", `${formatCount(posAttr.count)} punts`);
}

function decodeSimpleTiffToImageData(buffer) {
    const dv = new DataView(buffer);
    if (buffer.byteLength < 8) return null;
    const le = dv.getUint8(0) === 0x49 && dv.getUint8(1) === 0x49;
    const be = dv.getUint8(0) === 0x4d && dv.getUint8(1) === 0x4d;
    if (!le && !be) return null;
    const u16 = (o) => dv.getUint16(o, le);
    const u32 = (o) => dv.getUint32(o, le);
    const ifd = u32(4);
    if (ifd + 2 > buffer.byteLength) return null;
    const count = u16(ifd);
    let width = 0, height = 0, spp = 1, bps = 8, compression = 1, sampleFormat = 1, stripOff = 0;
    for (let i = 0; i < count; i++) {
        const e = ifd + 2 + i * 12;
        if (e + 12 > buffer.byteLength) break;
        const tag = u16(e);
        const type = u16(e + 2);
        const cnt = u32(e + 4);
        const valOff = e + 8;
        const readVal = () => (type === 3 ? u16(valOff) : u32(valOff));
        if (tag === 256) width = readVal();
        else if (tag === 257) height = readVal();
        else if (tag === 258) bps = type === 3 && cnt > 2 ? u16(u32(valOff)) : u16(valOff);
        else if (tag === 259) compression = readVal();
        else if (tag === 273) stripOff = cnt === 1 ? readVal() : u32(u32(valOff));
        else if (tag === 277) spp = readVal();
        else if (tag === 339) sampleFormat = type === 3 && cnt > 2 ? u16(u32(valOff)) : u16(valOff);
    }
    if (compression !== 1 || width <= 0 || height <= 0 || stripOff <= 0) return null;
    const imgData = new ImageData(width, height);
    const out = imgData.data;
    if (bps === 8 && (spp === 3 || spp === 4)) {
        const src = new Uint8Array(buffer, stripOff, Math.min(buffer.byteLength - stripOff, width * height * spp));
        for (let i = 0, p = 0; i < width * height && p + spp <= src.length; i++, p += spp) {
            out[i * 4] = src[p];
            out[i * 4 + 1] = src[p + 1];
            out[i * 4 + 2] = src[p + 2];
            out[i * 4 + 3] = spp === 4 ? src[p + 3] : 255;
        }
        return imgData;
    }
    if (bps === 32 && sampleFormat === 3 && spp === 1) {
        let minZ = Infinity, maxZ = -Infinity;
        const pxCount = width * height;
        for (let i = 0; i < pxCount; i++) {
            const z = dv.getFloat32(stripOff + i * 4, le);
            if (Number.isFinite(z) && z > -9000) {
                if (z < minZ) minZ = z;
                if (z > maxZ) maxZ = z;
            }
        }
        const span = Math.max(0.01, maxZ - minZ);
        for (let i = 0; i < pxCount; i++) {
            const z = dv.getFloat32(stripOff + i * 4, le);
            if (!Number.isFinite(z) || z <= -9000) {
                out[i * 4 + 3] = 0;
            } else {
                const t = Math.max(0, Math.min(1, (z - minZ) / span));
                out[i * 4] = Math.round(35 + 185 * t);
                out[i * 4 + 1] = Math.round(95 + 135 * Math.sin(Math.PI * t));
                out[i * 4 + 2] = Math.round(70 + 80 * (1 - t));
                out[i * 4 + 3] = 255;
            }
        }
        return imgData;
    }
    return null;
}

async function loadRasterPreview() {
    await waitForViewportSize();
    status.textContent = "Carregant capa ràster GeoTIFF…";
    let bitmapSource = null;
    try {
        const res = await fetch("/model/preview.png");
        if (res.ok) {
            const blob = await res.blob();
            bitmapSource = await createImageBitmap(blob);
        }
    } catch (_) {}

    if (!bitmapSource) {
        const tifRes = await fetch("/model/scene." + format);
        if (!tifRes.ok) throw new Error("Missing raster");
        const buf = await tifRes.arrayBuffer();
        const imgData = decodeSimpleTiffToImageData(buf);
        if (!imgData) throw new Error("Unsupported TIFF compression");
        bitmapSource = await createImageBitmap(imgData);
    }

    const canvas = document.createElement("canvas");
    canvas.className = "raster-view";
    root.innerHTML = "";
    root.appendChild(canvas);
    const ctx2d = canvas.getContext("2d");

    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;
    const showGrid = true;

    const fit = () => {
        const d = getViewportDims();
        const cw = Math.max(64, d.w);
        const ch = Math.max(64, d.h);
        canvas.width = cw * (window.devicePixelRatio || 1);
        canvas.height = ch * (window.devicePixelRatio || 1);
        scale = Math.min(canvas.width / bitmapSource.width, canvas.height / bitmapSource.height) * 0.9;
        offsetX = (canvas.width - bitmapSource.width * scale) * 0.5;
        offsetY = (canvas.height - bitmapSource.height * scale) * 0.5;
        draw();
    };

    const draw = () => {
        ctx2d.setTransform(1, 0, 0, 1, 0, 0);
        ctx2d.fillStyle = "#090f0b";
        ctx2d.fillRect(0, 0, canvas.width, canvas.height);

        if (showGrid) {
            ctx2d.strokeStyle = "rgba(153, 204, 0, 0.08)";
            ctx2d.lineWidth = 1;
            const step = 48 * (window.devicePixelRatio || 1);
            for (let x = offsetX % step; x < canvas.width; x += step) {
                ctx2d.beginPath(); ctx2d.moveTo(x, 0); ctx2d.lineTo(x, canvas.height); ctx2d.stroke();
            }
            for (let y = offsetY % step; y < canvas.height; y += step) {
                ctx2d.beginPath(); ctx2d.moveTo(0, y); ctx2d.lineTo(canvas.width, y); ctx2d.stroke();
            }
        }

        ctx2d.imageSmoothingEnabled = scale < 2.5;
        ctx2d.setTransform(scale, 0, 0, scale, offsetX, offsetY);
        ctx2d.drawImage(bitmapSource, 0, 0);
        ctx2d.strokeStyle = "rgba(153, 204, 0, 0.5)";
        ctx2d.lineWidth = Math.max(1 / scale, 0.5);
        ctx2d.strokeRect(0, 0, bitmapSource.width, bitmapSource.height);
    };

    const pointers = new Map();
    let prevDist = 0;
    canvas.addEventListener("pointerdown", (e) => {
        canvas.setPointerCapture(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    });
    canvas.addEventListener("pointermove", (e) => {
        if (!pointers.has(e.pointerId)) return;
        const dpr = window.devicePixelRatio || 1;
        const prev = pointers.get(e.pointerId);
        const cur = { x: e.clientX, y: e.clientY };
        pointers.set(e.pointerId, cur);
        if (pointers.size === 1) {
            offsetX += (cur.x - prev.x) * dpr;
            offsetY += (cur.y - prev.y) * dpr;
            draw();
        } else if (pointers.size === 2) {
            const pts = Array.from(pointers.values());
            const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
            if (prevDist > 0) {
                const factor = dist / prevDist;
                const cx = ((pts[0].x + pts[1].x) * 0.5) * dpr;
                const cy = ((pts[0].y + pts[1].y) * 0.5) * dpr;
                const nextScale = Math.max(0.08, Math.min(40, scale * factor));
                offsetX = cx - ((cx - offsetX) / scale) * nextScale;
                offsetY = cy - ((cy - offsetY) / scale) * nextScale;
                scale = nextScale;
                draw();
            }
            prevDist = dist;
        }
    });
    const endPointer = (e) => {
        pointers.delete(e.pointerId);
        if (pointers.size < 2) prevDist = 0;
    };
    canvas.addEventListener("pointerup", endPointer);
    canvas.addEventListener("pointercancel", endPointer);
    canvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        const dpr = window.devicePixelRatio || 1;
        const cx = e.offsetX * dpr;
        const cy = e.offsetY * dpr;
        const factor = e.deltaY < 0 ? 1.18 : 0.85;
        const nextScale = Math.max(0.08, Math.min(40, scale * factor));
        offsetX = cx - ((cx - offsetX) / scale) * nextScale;
        offsetY = cy - ((cy - offsetY) / scale) * nextScale;
        scale = nextScale;
        draw();
    }, { passive: false });

    addButton("Zoom +", () => { scale = Math.min(40, scale * 1.35); draw(); });
    addButton("Zoom −", () => { scale = Math.max(0.08, scale * 0.74); draw(); });

    window.addEventListener("resize", fit);
    reset.onclick = fit;
    reset.disabled = false;
    fit();
    status.hidden = true;
    document.body.dataset.viewer = "ready";
    const tag = role === "dsm" ? "MDS GEOTIFF" : "ORTOFOTO GEOTIFF";
    showStats(tag, `${bitmapSource.width} × ${bitmapSource.height} px`);
}

// Pure-WebGL Gaussian sprite fallback if WASM / Blob Worker is ever restricted on a custom WebView ROM
async function loadGaussianShaderFallback() {
    const res = await fetch("/model/scene." + format);
    if (!res.ok) throw new Error("No s'ha pogut llegir el fitxer Gaussian");
    const buf = await res.arrayBuffer();
    const bytes = new Uint8Array(buf);
    const dv = new DataView(buf);

    let count = 0;
    let positions = null;
    let colors = null;
    let scales = null;

    if (format === "splat") {
        count = Math.floor(buf.byteLength / 32);
        positions = new Float32Array(count * 3);
        colors = new Float32Array(count * 4);
        scales = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            const off = i * 32;
            positions[i * 3] = dv.getFloat32(off, true);
            positions[i * 3 + 1] = dv.getFloat32(off + 4, true);
            positions[i * 3 + 2] = dv.getFloat32(off + 8, true);
            const sx = dv.getFloat32(off + 12, true);
            const sy = dv.getFloat32(off + 16, true);
            const sz = dv.getFloat32(off + 20, true);
            scales[i] = Math.max(0.002, Math.min(0.25, (sx + sy + sz) / 3));
            colors[i * 4] = bytes[off + 24] / 255;
            colors[i * 4 + 1] = bytes[off + 25] / 255;
            colors[i * 4 + 2] = bytes[off + 26] / 255;
            colors[i * 4 + 3] = bytes[off + 27] / 255;
        }
    } else if (format === "ply") {
        const hdrLimit = Math.min(bytes.length, 16384);
        let hdrEnd = -1;
        const needle = "end_header\n";
        const ascii = new TextDecoder("ascii").decode(bytes.subarray(0, hdrLimit));
        const idx = ascii.indexOf(needle);
        const idxCrLf = ascii.indexOf("end_header\r\n");
        if (idxCrLf >= 0) hdrEnd = idxCrLf + 12;
        else if (idx >= 0) hdrEnd = idx + 11;
        if (hdrEnd < 0) throw new Error("Invalid Gaussian PLY header");

        const lines = ascii.slice(0, hdrEnd).split(/\r?\n/).map((s) => s.trim());
        const vLine = lines.find((l) => l.startsWith("element vertex "));
        count = vLine ? parseInt(vLine.split(/\s+/)[2], 10) : 0;
        if (count <= 0) throw new Error("Empty Gaussian PLY");

        const propOffsets = {};
        let stride = 0;
        let inVertex = false;
        const widths = { float: 4, float32: 4, double: 8, uchar: 1, uint8: 1, char: 1, int8: 1, short: 2, ushort: 2, int: 4, uint: 4 };
        for (const l of lines) {
            if (l.startsWith("element vertex ")) { inVertex = true; continue; }
            if (l.startsWith("element ") || l === "end_header") { if (inVertex) break; }
            if (inVertex && l.startsWith("property ")) {
                const [, t, name] = l.split(/\s+/);
                propOffsets[name] = stride;
                stride += widths[t] || 4;
            }
        }
        positions = new Float32Array(count * 3);
        colors = new Float32Array(count * 4);
        scales = new Float32Array(count);
        const SH_C0 = 0.28209479177387814;
        const ox = propOffsets.x ?? 0, oy = propOffsets.y ?? 4, oz = propOffsets.z ?? 8;
        const oOp = propOffsets.opacity, oS0 = propOffsets.scale_0, oS1 = propOffsets.scale_1, oS2 = propOffsets.scale_2;
        const oDc0 = propOffsets.f_dc_0, oDc1 = propOffsets.f_dc_1, oDc2 = propOffsets.f_dc_2;

        for (let i = 0; i < count; i++) {
            const base = hdrEnd + i * stride;
            if (base + stride > buf.byteLength) { count = i; break; }
            positions[i * 3] = dv.getFloat32(base + ox, true);
            positions[i * 3 + 1] = dv.getFloat32(base + oy, true);
            positions[i * 3 + 2] = dv.getFloat32(base + oz, true);
            const rawOp = oOp !== undefined ? dv.getFloat32(base + oOp, true) : 2.0;
            const alpha = 1.0 / (1.0 + Math.exp(-Math.max(-12, Math.min(12, rawOp))));
            const s0 = oS0 !== undefined ? Math.exp(Math.max(-10, Math.min(2, dv.getFloat32(base + oS0, true)))) : 0.015;
            const s1 = oS1 !== undefined ? Math.exp(Math.max(-10, Math.min(2, dv.getFloat32(base + oS1, true)))) : 0.015;
            const s2 = oS2 !== undefined ? Math.exp(Math.max(-10, Math.min(2, dv.getFloat32(base + oS2, true)))) : 0.015;
            scales[i] = Math.max(0.002, Math.min(0.18, (s0 + s1 + s2) / 3));
            const r = oDc0 !== undefined ? Math.max(0, Math.min(1, 0.5 + SH_C0 * dv.getFloat32(base + oDc0, true))) : 0.7;
            const g = oDc1 !== undefined ? Math.max(0, Math.min(1, 0.5 + SH_C0 * dv.getFloat32(base + oDc1, true))) : 0.8;
            const b = oDc2 !== undefined ? Math.max(0, Math.min(1, 0.5 + SH_C0 * dv.getFloat32(base + oDc2, true))) : 0.7;
            colors[i * 4] = r;
            colors[i * 4 + 1] = g;
            colors[i * 4 + 2] = b;
            colors[i * 4 + 3] = alpha;
        }
    } else {
        throw new Error("Unsupported fallback format");
    }

    const ctx = await setupThreeOrbitScene();
    const geom = new BufferGeometry();
    geom.setAttribute("position", new Float32BufferAttribute(positions.subarray(0, count * 3), 3));
    geom.setAttribute("splatColor", new Float32BufferAttribute(colors.subarray(0, count * 4), 4));
    geom.setAttribute("splatScale", new Float32BufferAttribute(scales.subarray(0, count), 1));

    const pixelScale = Math.max(300, getViewportDims().h * Math.min(window.devicePixelRatio || 1, 2));
    const mat = new ShaderMaterial({
        transparent: true,
        depthWrite: true,
        depthTest: true,
        uniforms: {
            uViewportScale: { value: pixelScale },
            uGain: { value: 2.2 },
        },
        vertexShader: `
            attribute vec4 splatColor;
            attribute float splatScale;
            uniform float uViewportScale;
            uniform float uGain;
            varying vec4 vColor;
            void main() {
                vColor = splatColor;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                float dist = max(0.05, -mvPosition.z);
                gl_PointSize = clamp((splatScale * uGain * uViewportScale) / dist, 1.5, 64.0);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec4 vColor;
            void main() {
                vec2 c = gl_PointCoord * 2.0 - 1.0;
                float r2 = dot(c, c);
                if (r2 > 1.0) discard;
                float gauss = exp(-2.2 * r2);
                float a = vColor.a * gauss;
                if (a < 0.08) discard;
                gl_FragColor = vec4(vColor.rgb, a);
            }
        `,
    });

    const cloud = new Points(geom, mat);
    cloud.rotation.x = -Math.PI / 2;
    ctx.scene.add(cloud);
    ctx.frameObject(cloud);
    showStats("3D GAUSSIAN SPLAT", `${formatCount(count)} splats`);
}

async function loadGaussianSplat() {
    if (!Object.prototype.hasOwnProperty.call(gaussianFormats, format)) throw new Error("Format");
    const dims = await waitForViewportSize();
    status.textContent = "Carregant el model 3D Gaussian Splat…";
    root.innerHTML = "";

    let viewer = null;
    try {
        viewer = new Viewer({
            rootElement: root,
            cameraUp: [0, 1, 0],
            initialCameraPosition: [0, 0, 5],
            initialCameraLookAt: [0, 0, 0],
            sharedMemoryForWorkers: false,
            gpuAcceleratedSort: false,
            enableSIMDInSort: false,
            integerBasedSort: false,
            halfPrecisionCovariancesOnGPU: true,
            ignoreDevicePixelRatio: false,
            sphericalHarmonicsDegree: 1,
            sceneRevealMode: SceneRevealMode.Instant,
            renderMode: RenderMode.Always,
        });
        viewer.renderer.setClearColor(new Color(0x090f0b), 1.0);
        viewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        viewer.renderer.setSize(Math.max(64, dims.w), Math.max(64, dims.h));
        viewer.camera.aspect = Math.max(64, dims.w) / Math.max(64, dims.h);
        viewer.camera.updateProjectionMatrix();

        // Keep camera aspect synchronized on Android WebView resize (gaussian-splats-3d's own ResizeObserver omits camera.aspect!)
        if (typeof ResizeObserver !== "undefined") {
            const camRo = new ResizeObserver(() => {
                const d = getViewportDims();
                if (d.w > 8 && d.h > 8 && viewer && viewer.camera && viewer.renderer) {
                    viewer.camera.aspect = d.w / d.h;
                    viewer.camera.updateProjectionMatrix();
                    viewer.renderer.setSize(d.w, d.h);
                    viewer.forceRenderNextFrame();
                }
            });
            camRo.observe(root);
        }

        viewer.renderer.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            fail("Context WebGL perdut per límit de memòria gràfica.");
        });

        await viewer.addSplatScene("/model/scene." + format, {
            format: gaussianFormats[format],
            rotation: [-Math.SQRT1_2, 0, 0, Math.SQRT1_2],
            progressiveLoad: false,
            showLoadingUI: false,
        });
        const count = viewer.splatMesh.getSplatCount();
        if (count <= 0) throw new Error("Empty model");

        const samples = [[], [], []];
        const point = new Vector3();
        const stride = Math.max(1, Math.floor(count / 4096));
        for (let i = 0; i < count; i += stride) {
            viewer.splatMesh.getSplatCenter(i, point);
            if (Number.isFinite(point.x) && Number.isFinite(point.y) && Number.isFinite(point.z)) {
                samples[0].push(point.x);
                samples[1].push(point.y);
                samples[2].push(point.z);
            }
        }
        if (!samples[0].length) throw new Error("Invalid bounds");
        for (const axis of samples) axis.sort((a, b) => a - b);
        const quantile = (axis, q) => axis[Math.min(axis.length - 1, Math.max(0, Math.floor((axis.length - 1) * q)))];

        // Frame around the dense core (Q15..Q85) so indoor room floaters/walls don't push the camera outside the room
        const center = new Vector3(...samples.map((axis) => 0.5 * (quantile(axis, 0.15) + quantile(axis, 0.85))));
        const coreExtent = Math.max(0.05, ...samples.map((axis) => quantile(axis, 0.88) - quantile(axis, 0.12)));
        const fullExtent = Math.max(coreExtent, ...samples.map((axis) => quantile(axis, 0.99) - quantile(axis, 0.01)));
        const position = center.clone().add(new Vector3(0.58, 0.42, 1.08).multiplyScalar(coreExtent));

        const curDims = getViewportDims();
        if (curDims.w > 8 && curDims.h > 8) {
            viewer.camera.aspect = curDims.w / curDims.h;
        }
        viewer.camera.near = Math.max(0.001, coreExtent * 0.001);
        viewer.camera.far = Math.max(60, fullExtent * 180);
        viewer.camera.updateProjectionMatrix();
        viewer.camera.position.copy(position);
        viewer.controls.target.copy(center);
        viewer.controls.update();
        viewer.controls.saveState();

        const sortCamera = async () => {
            if (viewer.sortPromise) await viewer.sortPromise;
            viewer.camera.updateMatrixWorld();
            await viewer.runSplatSort(true, true);
            if (viewer.sortPromise) await viewer.sortPromise;
            viewer.forceRenderNextFrame();
        };

        viewer.start();
        await sortCamera();

        const upAxes = [
            [0, 1, 0],
            [0, -1, 0],
            [0, 0, 1],
        ];
        let upIdx = 0;
        addButton("Gira eix", async () => {
            upIdx = (upIdx + 1) % upAxes.length;
            viewer.camera.up.set(...upAxes[upIdx]);
            viewer.controls.update();
            await sortCamera();
        });

        reset.onclick = async () => {
            reset.disabled = true;
            upIdx = 0;
            viewer.camera.up.set(0, 1, 0);
            viewer.controls.reset();
            try {
                await sortCamera();
            } finally {
                reset.disabled = false;
            }
        };
        reset.disabled = false;
        status.hidden = true;
        document.body.dataset.viewer = "ready";
        document.body.dataset.splats = String(count);
        showStats("3D GAUSSIAN SPLAT", `${formatCount(count)} splats`);
    } catch (gsErr) {
        console.warn("Primary Gaussian viewer fallback triggered:", gsErr);
        try {
            if (viewer) await viewer.dispose();
        } catch (_) {}
        root.innerHTML = "";
        await loadGaussianShaderFallback();
    }
}

async function main() {
    if (format === "glb" || role === "mesh") {
        await loadMeshGlb();
    } else if (format === "tif" || format === "tiff" || role === "orthophoto" || role === "dsm") {
        await loadRasterPreview();
    } else if (format === "ply" && role === "pointcloud") {
        await loadPointCloudPly();
    } else {
        await loadGaussianSplat();
    }
}

main().catch((error) => {
    console.error(error);
    const detail = error && error.message ? ` (${error.message})` : "";
    fail(`L’actiu no s’ha pogut mostrar al visor mòbil${detail}.`);
});

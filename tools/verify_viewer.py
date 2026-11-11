#!/usr/bin/env python3
"""Render existing Gaussian models with the Android viewer bundle in Chromium."""
import argparse
import functools
import http.server
import io
import pathlib
import threading

from PIL import Image, ImageChops, ImageStat
from playwright.sync_api import sync_playwright

ASSETS = pathlib.Path(__file__).resolve().parents[1] / "app/src/main/assets/viewer"


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/model/scene."):
            if self.path != "/model/scene" + self.server.model.suffix:
                self.send_error(404)
                return
            data = self.server.model.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", "application/octet-stream")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        super().do_GET()

    def log_message(self, *_):
        pass


def foreground_pixels(path):
    with Image.open(path) as image:
        rgb = image.convert("RGB")
        background = rgb.getpixel((0, 0))
        scene = rgb.crop((0, 70, rgb.width, rgb.height))
        return sum(pixel != background for pixel in scene.get_flattened_data())


def render(browser, server, model, out):
    server.model = model
    errors = []
    page = browser.new_page(viewport={"width": 480, "height": 360})
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.on("console", lambda message: errors.append(message.text) if message.type == "error" else None)
    try:
        fmt = model.suffix[1:]
        page.goto(f"http://127.0.0.1:{server.server_port}/index.html?format={fmt}")
        page.locator("body[data-viewer]").wait_for(timeout=30000)
        if page.locator("body").get_attribute("data-viewer") != "ready":
            raise AssertionError(f"{model}: {errors}")
        page.wait_for_timeout(750)
        screenshot = out / f"{model.parent.name}-{fmt}.png"
        page.locator("canvas").first.wait_for(state="visible")
        before = page.screenshot(path=str(screenshot), timeout=90000)
        assert foreground_pixels(screenshot) > 300, f"Blank canvas for {model}"
        page.mouse.move(240, 180)
        page.mouse.down()
        page.mouse.move(285, 192, steps=8)
        page.mouse.up()
        page.wait_for_timeout(400)
        after_orbit = page.screenshot(timeout=90000)
        assert after_orbit != before, f"Orbit did not affect {model}"
        page.mouse.wheel(0, -175)
        page.wait_for_timeout(400)
        assert page.screenshot(timeout=90000) != after_orbit, f"Zoom did not affect {model}"
        reset = page.locator("#reset")
        reset.click()
        page.locator("#reset:enabled").wait_for()
        page.wait_for_timeout(750)
        assert page.locator("body").get_attribute("data-viewer") == "ready"
        reset_image = Image.open(io.BytesIO(page.screenshot(timeout=90000))).convert("RGB")
        initial_image = Image.open(io.BytesIO(before)).convert("RGB")
        mean_delta = max(ImageStat.Stat(ImageChops.difference(initial_image, reset_image)).mean)
        assert mean_delta < 3.0, f"Reset did not recover the original view for {model}: {mean_delta}"
        print(f"{model.parent.name}/{model.name} {page.locator('body').get_attribute('data-splats')} splats; pixels, orbit, zoom, reset OK")
    finally:
        page.close()


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--chrome", default="/usr/bin/google-chrome")
    cli.add_argument("--out", type=pathlib.Path, required=True)
    cli.add_argument("models", nargs="+", type=pathlib.Path)
    args = cli.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Handler, directory=ASSETS))
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        with sync_playwright() as playwright:
            for model in args.models:
                browser = playwright.chromium.launch(executable_path=args.chrome, args=[
                    "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"])
                try:
                    render(browser, server, model, args.out)
                finally:
                    browser.close()
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    main()

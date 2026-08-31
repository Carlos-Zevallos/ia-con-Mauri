"""Mux composed instrument tracks onto the lesson result videos."""
from __future__ import annotations

import subprocess
import wave
from pathlib import Path

import imageio_ffmpeg
from PIL import Image

ASSETS = Path(r"C:\Users\PC-4218\.cursor\projects\d-2026-CLONACI-N-CURSIV\assets")
OUT = Path(__file__).resolve().parents[1] / "public" / "lessons" / "results"
SIZE, FPS = 720, 24


def duration(wav: Path) -> float:
    with wave.open(str(wav), "r") as w:
        return w.getnframes() / float(w.getframerate())


def ken(img: Image.Image, t: float) -> Image.Image:
    src = img.convert("RGB").resize((int(SIZE * 1.14), int(SIZE * 1.14)), Image.Resampling.LANCZOS)
    zoom = 1.0 + 0.07 * t
    c = int(SIZE * zoom)
    left = int((src.width - c) * t)
    top = int((src.height - c) * (1 - t))
    return src.crop((left, top, left + c, top + c)).resize((SIZE, SIZE), Image.Resampling.LANCZOS)


def mux(still: Path, wav: Path, dest: Path) -> None:
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    img = Image.open(still)
    sec = duration(wav)
    total = max(1, int(sec * FPS))
    cmd = [
        ffmpeg, "-y",
        "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{SIZE}x{SIZE}", "-r", str(FPS), "-i", "pipe:0",
        "-i", str(wav),
        "-c:v", "libx264", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "192k",
        "-shortest", "-movflags", "+faststart",
        str(dest),
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    assert proc.stdin
    for f in range(total):
        proc.stdin.write(ken(img, f / max(total - 1, 1)).tobytes())
    proc.stdin.close()
    _, err = proc.communicate()
    if proc.returncode != 0:
        raise SystemExit(err.decode("utf-8", errors="replace")[-3000:])
    print(f"wrote {dest.name} ({dest.stat().st_size} bytes, {sec:.1f}s)")


def main() -> None:
    mux(ASSETS / "nieve-bola.png", OUT / "nieve-hiphop.wav", OUT / "nieve-hiphop.mp4")
    mux(ASSETS / "letra-visual.png", OUT / "nieve-letra-nueva.wav", OUT / "letra-nueva.mp4")
    mux(ASSETS / "idioma-obelisco.png", OUT / "nieve-frances.wav", OUT / "letra-frances.mp4")


if __name__ == "__main__":
    main()

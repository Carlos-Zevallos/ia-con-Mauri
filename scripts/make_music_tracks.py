"""Build square lesson videos from stills."""
from __future__ import annotations

import math
import shutil
import struct
import subprocess
import tempfile
import wave
from pathlib import Path

import imageio_ffmpeg
from PIL import Image

ASSETS = Path(r"C:\Users\PC-4218\.cursor\projects\d-2026-CLONACI-N-CURSIV\assets")
OUT = Path(__file__).resolve().parents[1] / "public" / "lessons" / "results"
GEM = Path(__file__).resolve().parents[1] / "public" / "lessons" / "gemini" / "music"
SIZE, FPS, DURATION, SR = 720, 24, 10.0, 44100


def copy_stills() -> None:
    GEM.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    mapping = {
        "pista-folk-plato.png": OUT / "folk-plato.jpg",
        "pista-remix-luz.png": OUT / "remix-luz.jpg",
        "nieve-ninos.png": GEM / "nieve-ninos.jpg",
        "nieve-bola.png": GEM / "nieve-bola.jpg",
        "letra-visual.png": GEM / "letra-visual.jpg",
        "idioma-obelisco.png": GEM / "idioma-obelisco.jpg",
    }
    for src_name, dest in mapping.items():
        img = Image.open(ASSETS / src_name).convert("RGB")
        img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
        img.save(dest, quality=88)


def ken(img: Image.Image, t: float, reverse: bool) -> Image.Image:
    src = img.convert("RGB").resize((int(SIZE * 1.16), int(SIZE * 1.16)), Image.Resampling.LANCZOS)
    zoom = 1.0 + 0.07 * (1 - t if reverse else t)
    c = int(SIZE * zoom)
    left = int((src.width - c) * t)
    top = int((src.height - c) * (1 - t if reverse else t))
    return src.crop((left, top, left + c, top + c)).resize((SIZE, SIZE), Image.Resampling.LANCZOS)


def write_wav(path: Path, bpm: float, bright: bool) -> None:
    n = int(SR * DURATION)
    beat = 60.0 / bpm
    samples = [0.0] * n

    def add(i: int, v: float) -> None:
        if 0 <= i < n:
            samples[i] += v

    def tone(start: float, length: float, freq: float, amp: float, decay: float) -> None:
        s0 = int(start * SR)
        count = int(length * SR)
        for i in range(count):
            e = math.exp(-i / (decay * SR))
            add(s0 + i, amp * e * math.sin(2 * math.pi * freq * i / SR))

    def noise(start: float, length: float, amp: float, decay: float) -> None:
        s0 = int(start * SR)
        count = int(length * SR)
        seed = 4242
        for i in range(count):
            seed = (1103515245 * seed + 12345) & 0x7FFFFFFF
            e = math.exp(-i / (decay * SR))
            add(s0 + i, amp * e * ((seed / 0x7FFFFFFF) * 2 - 1))

    t = 0.0
    while t < DURATION:
        tone(t, 0.18, 62 if bright else 52, 0.42 if bright else 0.28, 0.1)
        noise(t + beat, 0.1, 0.16 if bright else 0.08, 0.04)
        if bright:
            noise(t + beat * 3, 0.1, 0.14, 0.04)
        for h in range(4 if bright else 2):
            noise(t + h * (beat / (2 if bright else 1)), 0.025, 0.04, 0.01)
        root = 146.8 if bright else 110
        third = root * (5 / 4 if bright else 6 / 5)
        tone(t, beat * 3.6, root, 0.12, 0.55)
        tone(t, beat * 3.6, third, 0.08, 0.6)
        tone(t, beat * 3.6, root * 2, 0.05, 0.5)
        t += beat * 4

    peak = max(0.001, max(abs(x) for x in samples))
    with wave.open(str(path), "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(SR)
        wav.writeframes(
            b"".join(struct.pack("<h", int(max(-1, min(1, x / peak * 0.82)) * 32767)) for x in samples)
        )


def encode(src: Path, out: Path, bpm: float, bright: bool) -> None:
    img = Image.open(src)
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    wav_path = Path(tempfile.gettempdir()) / f"{out.stem}.wav"
    write_wav(wav_path, bpm, bright)
    cmd = [
        ffmpeg, "-y",
        "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{SIZE}x{SIZE}", "-r", str(FPS), "-i", "pipe:0",
        "-i", str(wav_path),
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k",
        "-shortest", "-movflags", "+faststart", str(out),
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    total = int(DURATION * FPS)
    assert proc.stdin
    for f in range(total):
        t = f / max(total - 1, 1)
        proc.stdin.write(ken(img, t, reverse=False).tobytes())
    proc.stdin.close()
    _, err = proc.communicate()
    if proc.returncode != 0:
        raise SystemExit(err.decode("utf-8", errors="replace")[-3000:])
    print(f"wrote {out} ({out.stat().st_size})")


def main() -> None:
    copy_stills()
    encode(ASSETS / "pista-folk-plato.png", OUT / "folk-plato.mp4", 72, False)
    encode(ASSETS / "pista-remix-luz.png", OUT / "remix-luz.mp4", 118, True)


if __name__ == "__main__":
    main()

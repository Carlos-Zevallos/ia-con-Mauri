"""Hip-hop bed for the kids-in-the-snow / snowball result."""
from __future__ import annotations

import math
import struct
import subprocess
import tempfile
import wave
from pathlib import Path

import imageio_ffmpeg
from PIL import Image

ASSETS = Path(r"C:\Users\PC-4218\.cursor\projects\d-2026-CLONACI-N-CURSIV\assets")
OUT = Path(__file__).resolve().parents[1] / "public" / "lessons" / "results"
SIZE, FPS, DURATION, SR = 720, 24, 12.0, 44100
BPM = 96


def ken(img: Image.Image, t: float) -> Image.Image:
    src = img.convert("RGB").resize((int(SIZE * 1.14), int(SIZE * 1.14)), Image.Resampling.LANCZOS)
    zoom = 1.0 + 0.08 * t
    c = int(SIZE * zoom)
    left = int((src.width - c) * 0.5)
    top = int((src.height - c) * (1 - t))
    return src.crop((left, top, left + c, top + c)).resize((SIZE, SIZE), Image.Resampling.LANCZOS)


def write_hiphop(path: Path) -> None:
    n = int(SR * DURATION)
    beat = 60.0 / BPM
    samples = [0.0] * n
    seed = 7

    def rnd() -> float:
        nonlocal seed
        seed = (1103515245 * seed + 12345) & 0x7FFFFFFF
        return (seed / 0x7FFFFFFF) * 2 - 1

    def add(i: int, v: float) -> None:
        if 0 <= i < n:
            samples[i] += v

    def kick(start: float) -> None:
        s0 = int(start * SR)
        for i in range(int(0.22 * SR)):
            t = i / SR
            env = math.exp(-t / 0.09)
            freq = 58 * math.exp(-t / 0.05)
            add(s0 + i, 0.72 * env * math.sin(2 * math.pi * freq * t))

    def snare(start: float) -> None:
        s0 = int(start * SR)
        for i in range(int(0.14 * SR)):
            t = i / SR
            env = math.exp(-t / 0.045)
            add(s0 + i, 0.28 * env * rnd())
            add(s0 + i, 0.12 * env * math.sin(2 * math.pi * 190 * t))

    def hat(start: float, amp: float = 0.07) -> None:
        s0 = int(start * SR)
        for i in range(int(0.035 * SR)):
            t = i / SR
            env = math.exp(-t / 0.012)
            add(s0 + i, amp * env * rnd())

    def bass(start: float, freq: float) -> None:
        s0 = int(start * SR)
        for i in range(int(beat * 0.9 * SR)):
            t = i / SR
            env = min(1, t / 0.01) * math.exp(-t / 0.22)
            add(s0 + i, 0.34 * env * math.sin(2 * math.pi * freq * t))

    def bell(start: float, freq: float, amp: float = 0.08) -> None:
        s0 = int(start * SR)
        for i in range(int(0.35 * SR)):
            t = i / SR
            env = math.exp(-t / 0.18)
            add(s0 + i, amp * env * (math.sin(2 * math.pi * freq * t) + 0.25 * math.sin(2 * math.pi * freq * 2 * t)))

    notes = [130.81, 155.56, 174.61, 196.0, 233.08, 261.63]
    t = 0.0
    bar = 0
    while t < DURATION:
        kick(t)
        kick(t + beat * 2.5)
        snare(t + beat)
        snare(t + beat * 3)
        for h in range(8):
            hat(t + h * (beat / 2), 0.085 if h % 2 == 0 else 0.05)
        bass(t, 55 if bar % 2 == 0 else 41.2)
        bass(t + beat * 2, 65.41 if bar % 2 == 0 else 49)
        # playful icy hook — not Christmas, just bright pentatonic
        bell(t, notes[bar % 6] * 2, 0.07)
        bell(t + beat * 1.5, notes[(bar + 2) % 6] * 2, 0.05)
        bell(t + beat * 2.5, notes[(bar + 4) % 6] * 2, 0.06)
        t += beat * 4
        bar += 1

    peak = max(0.001, max(abs(x) for x in samples))
    with wave.open(str(path), "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(SR)
        wav.writeframes(
            b"".join(struct.pack("<h", int(max(-1, min(1, x / peak * 0.84)) * 32767)) for x in samples)
        )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    img = Image.open(ASSETS / "nieve-bola.png")
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    wav_path = Path(tempfile.gettempdir()) / "nieve-hiphop.wav"
    write_hiphop(wav_path)
    out = OUT / "nieve-hiphop.mp4"
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
        proc.stdin.write(ken(img, f / max(total - 1, 1)).tobytes())
    proc.stdin.close()
    _, err = proc.communicate()
    if proc.returncode != 0:
        raise SystemExit(err.decode("utf-8", errors="replace")[-3000:])
    print(f"wrote {out} ({out.stat().st_size})")


if __name__ == "__main__":
    main()

"""Build a short 9:16 product reel with a lo-fi 90 BPM bed."""
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
OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "lessons" / "results"
FRAMES = [
    ASSETS / "reel-producto-1.png",
    ASSETS / "reel-producto-2.png",
    ASSETS / "reel-producto-3.png",
]
W, H, FPS = 720, 1280, 24
SEC_PER_SHOT = 4.0
DURATION = SEC_PER_SHOT * len(FRAMES)
SR = 44100
BPM = 90


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def ken_burns(img: Image.Image, t: float, reverse: bool) -> Image.Image:
    src = img.convert("RGB")
    src = src.resize((int(W * 1.18), int(H * 1.18)), Image.Resampling.LANCZOS)
    zoom = lerp(1.0, 1.08, t)
    if reverse:
        zoom = lerp(1.08, 1.0, t)
    cw, ch = int(W * zoom), int(H * zoom)
    left = int((src.width - cw) * t)
    top = int((src.height - ch) * (1 - t if reverse else t))
    crop = src.crop((left, top, left + cw, top + ch))
    return crop.resize((W, H), Image.Resampling.LANCZOS)


def write_lofi_wav(path: Path) -> None:
    n = int(SR * DURATION)
    beat = 60.0 / BPM
    samples = [0.0] * n

    def add(i: int, value: float) -> None:
        if 0 <= i < n:
            samples[i] += value

    def tone(start: float, length: float, freq: float, amp: float, decay: float) -> None:
        s0 = int(start * SR)
        count = int(length * SR)
        for i in range(count):
            e = math.exp(-i / (decay * SR))
            add(s0 + i, amp * e * math.sin(2 * math.pi * freq * i / SR))

    def noise(start: float, length: float, amp: float, decay: float) -> None:
        s0 = int(start * SR)
        count = int(length * SR)
        seed = 12345
        for i in range(count):
            seed = (1103515245 * seed + 12345) & 0x7FFFFFFF
            e = math.exp(-i / (decay * SR))
            add(s0 + i, amp * e * ((seed / 0x7FFFFFFF) * 2 - 1))

    t = 0.0
    while t < DURATION:
        # kick
        tone(t, 0.22, 56, 0.55, 0.12)
        tone(t, 0.08, 90, 0.2, 0.04)
        # soft snare on 2 and 4
        noise(t + beat, 0.12, 0.22, 0.05)
        tone(t + beat, 0.1, 180, 0.08, 0.05)
        noise(t + beat * 3, 0.12, 0.2, 0.05)
        # closed hats on 8ths
        for h in range(8):
            noise(t + h * (beat / 2), 0.03, 0.045 if h % 2 == 0 else 0.03, 0.012)
        # warm pad + bass, no vocals, no sirens
        for bar_beat in range(4):
            bt = t + bar_beat * beat
            bass = 110 if bar_beat in (0, 1) else 82.5
            tone(bt, beat * 0.95, bass, 0.16, 0.35)
            tone(bt, beat * 0.95, bass * 2, 0.05, 0.4)
            tone(bt, beat * 0.9, 220, 0.04, 0.5)
            tone(bt, beat * 0.9, 277.2, 0.03, 0.55)
        t += beat * 4

    # vinyl-ish hiss
    seed = 99
    for i in range(n):
        seed = (1103515245 * seed + 12345) & 0x7FFFFFFF
        samples[i] += 0.012 * ((seed / 0x7FFFFFFF) * 2 - 1)
        # slow swell
        samples[i] *= 0.85 + 0.15 * math.sin(2 * math.pi * i / (SR * 8))

    peak = max(0.001, max(abs(x) for x in samples))
    with wave.open(str(path), "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(SR)
        frames = b"".join(struct.pack("<h", int(max(-1, min(1, x / peak * 0.85)) * 32767)) for x in samples)
        wav.writeframes(frames)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    images = [Image.open(p) for p in FRAMES]
    images[0].convert("RGB").resize((W, H), Image.Resampling.LANCZOS).save(
        OUT_DIR / "reel-producto.jpg", quality=88
    )

    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    wav_path = Path(tempfile.gettempdir()) / "lofi-reel.wav"
    write_lofi_wav(wav_path)
    out = OUT_DIR / "reel-producto.mp4"
    cmd = [
        ffmpeg,
        "-y",
        "-f",
        "rawvideo",
        "-pix_fmt",
        "rgb24",
        "-s",
        f"{W}x{H}",
        "-r",
        str(FPS),
        "-i",
        "pipe:0",
        "-i",
        str(wav_path),
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "-c:a",
        "aac",
        "-b:a",
        "128k",
        "-shortest",
        "-movflags",
        "+faststart",
        str(out),
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    frames_per_shot = int(SEC_PER_SHOT * FPS)
    assert proc.stdin is not None
    for idx, img in enumerate(images):
        for f in range(frames_per_shot):
            t = f / max(frames_per_shot - 1, 1)
            frame = ken_burns(img, t, reverse=idx % 2 == 1)
            proc.stdin.write(frame.tobytes())
    proc.stdin.close()
    stdout, stderr = proc.communicate()
    if proc.returncode != 0:
        raise SystemExit(stderr.decode("utf-8", errors="replace")[-4000:])
    print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()

"""Compose MIDI from the lesson prompts and render with FluidSynth + GM instruments."""
from __future__ import annotations

import subprocess
from pathlib import Path

from mido import Message, MetaMessage, MidiFile, MidiTrack, bpm2tempo

ROOT = Path(__file__).resolve().parents[1]
TOOLS = ROOT / "tools"
FS = TOOLS / "fluidsynth" / "fluidsynth-v2.6.0-win10-x64-cpp11" / "bin" / "fluidsynth.exe"
SF2 = TOOLS / "TimGM6mb.sf2"
MID = ROOT / "public" / "lessons" / "results"
WAV = MID
TPB = 480


def ticks(beats: float) -> int:
    return int(beats * TPB)


def track_from_events(events: list, program: int | None, channel: int, tempo_bpm: int) -> MidiTrack:
    events = sorted(events, key=lambda e: (e[0], 0 if e[1] == "off" else 1, e[2]))
    tr = MidiTrack()
    tr.append(MetaMessage("set_tempo", tempo=bpm2tempo(tempo_bpm), time=0))
    if program is not None:
        tr.append(Message("program_change", program=program, channel=channel, time=0))
    last = 0
    for tick, kind, note, vel in events:
        dt = max(0, tick - last)
        if kind == "on":
            tr.append(Message("note_on", note=note, velocity=vel, time=dt, channel=channel))
        else:
            tr.append(Message("note_off", note=note, velocity=0, time=dt, channel=channel))
        last = tick
    tr.append(MetaMessage("end_of_track", time=ticks(1)))
    return tr


def add_note(events, start_beats, dur_beats, note, vel, ch=0):
    events.append((ticks(start_beats), "on", note, vel))
    events.append((ticks(start_beats + dur_beats), "off", note, 0))


def save_and_render(name: str, tracks: list[MidiTrack], bpm: int) -> Path:
    midi_path = MID / f"{name}.mid"
    wav_path = WAV / f"{name}.wav"
    mid = MidiFile(ticks_per_beat=TPB, type=1)
    for t in tracks:
        mid.tracks.append(t)
    midi_path.parent.mkdir(parents=True, exist_ok=True)
    mid.save(midi_path)
    cmd = [
        str(FS),
        "-ni",
        "-g",
        "0.7",
        "-r",
        "44100",
        "-F",
        str(wav_path),
        str(SF2),
        str(midi_path),
    ]
    env_path = str(FS.parent) + ";" + __import__("os").environ.get("PATH", "")
    proc = subprocess.run(cmd, capture_output=True, text=True, env={**__import__("os").environ, "PATH": env_path})
    if proc.returncode != 0:
        raise SystemExit(proc.stderr or proc.stdout)
    print(f"rendered {wav_path} ({wav_path.stat().st_size} bytes)")
    return wav_path


# --- 1) Crea una balada folk nostálgica usando guitarra acústica y piano ---
# Am – F – C – G, 72 BPM, fingerpicked steel guitar + soft piano
def folk_nostalgica() -> Path:
    bpm = 72
    guitar, piano = [], []
    # A3=57 C4=60 E4=64 A2=45 F2=41 F3=53 A3=57 C4=60
    # C3=48 G3=55 C4=60 E4=64  G2=43 G3=55 B3=59 D4=62
    chords = [
        (0, [45, 52, 57, 60, 64]),   # Am
        (4, [41, 48, 53, 57, 60]),   # F
        (8, [48, 55, 60, 64]),       # C
        (12, [43, 50, 55, 59, 62]),  # G
        (16, [45, 52, 57, 60, 64]),  # Am
        (20, [41, 48, 53, 57, 60]),  # F
        (24, [48, 52, 55, 60, 64]),  # C
        (28, [43, 47, 50, 55, 59]),  # G
    ]
    # guitar: bass on 1, then rolling 8ths
    for start, notes in chords:
        bass = notes[0]
        upper = notes[1:]
        add_note(guitar, start, 2.0, bass, 78)
        add_note(guitar, start + 2, 2.0, bass, 70)
        for i, n in enumerate(upper * 4):
            add_note(guitar, start + 0.5 * i + 0.25, 0.5, n, 58 if i % 2 else 66)
        # piano pad
        for n in notes:
            add_note(piano, start, 3.8, n + 12 if n < 55 else n, 42)
        # piano melody (nostalgic)
    melody = [
        (0.0, 1.5, 76), (1.5, 0.5, 74), (2.0, 1.0, 72), (3.0, 1.0, 69),
        (4.0, 1.5, 72), (5.5, 0.5, 74), (6.0, 2.0, 76),
        (8.0, 1.0, 79), (9.0, 1.0, 76), (10.0, 1.0, 74), (11.0, 1.0, 72),
        (12.0, 2.0, 71), (14.0, 2.0, 72),
        (16.0, 1.0, 76), (17.0, 1.0, 79), (18.0, 2.0, 81),
        (20.0, 1.5, 79), (21.5, 0.5, 76), (22.0, 2.0, 74),
        (24.0, 2.0, 72), (26.0, 1.0, 69), (27.0, 1.0, 67),
        (28.0, 4.0, 69),
    ]
    for s, d, n in melody:
        add_note(piano, s, d, n, 64)
    tracks = [
        track_from_events(guitar, 25, 0, bpm),  # steel acoustic guitar
        track_from_events(piano, 0, 1, bpm),    # grand piano
    ]
    return save_and_render("folk-nostalgica", tracks, bpm)


# --- 2) misma base, tempo rápido y constante, voces masculinas ---
def folk_remix() -> Path:
    bpm = 118
    guitar, piano, choir = [], [], []
    chords = [
        (0, [45, 52, 57, 60, 64]),
        (4, [41, 48, 53, 57, 60]),
        (8, [48, 55, 60, 64]),
        (12, [43, 50, 55, 59, 62]),
        (16, [45, 52, 57, 60, 64]),
        (20, [41, 48, 53, 57, 60]),
        (24, [48, 52, 55, 60, 64]),
        (28, [43, 47, 50, 55, 59]),
    ]
    for start, notes in chords:
        add_note(guitar, start, 2.0, notes[0], 82)
        add_note(guitar, start + 2, 2.0, notes[0], 76)
        for i, n in enumerate((notes[1:] * 4)[:8]):
            add_note(guitar, start + 0.5 * i, 0.45, n, 70)
        # driving piano 8ths
        for i, n in enumerate(notes[:3] * 4):
            add_note(piano, start + 0.25 * i, 0.24, n + 12, 68)
        # male choir aahs (GM Choir Aahs)
        for n in (notes[0] + 12, notes[2] + 12 if len(notes) > 2 else notes[1] + 12):
            add_note(choir, start, 3.9, n, 58)
    melody = [
        (0, 1, 81), (1, 1, 79), (2, 1, 76), (3, 1, 74),
        (4, 2, 76), (6, 2, 79),
        (8, 1, 81), (9, 1, 84), (10, 2, 81),
        (12, 1.5, 79), (13.5, 0.5, 76), (14, 2, 74),
        (16, 1, 76), (17, 1, 79), (18, 1, 81), (19, 1, 84),
        (20, 2, 81), (22, 2, 79),
        (24, 2, 76), (26, 2, 72),
        (28, 4, 69),
    ]
    for s, d, n in melody:
        add_note(piano, s, d, n, 78)
        add_note(choir, s, d, n - 12, 50)
    tracks = [
        track_from_events(guitar, 25, 0, bpm),
        track_from_events(piano, 0, 1, bpm),
        track_from_events(choir, 52, 2, bpm),  # choir aahs ~ male voices
    ]
    return save_and_render("folk-remix", tracks, bpm)


# --- 3) Hip hop de la nieve: misma base, distinta letra / idioma ---
def hiphop_backing():
    drums, bass, bells, stab = [], [], [], []
    for bar in range(8):
        s = bar * 4
        add_note(drums, s + 0.0, 0.4, 36, 120)
        add_note(drums, s + 2.5, 0.3, 36, 100)
        add_note(drums, s + 1.0, 0.4, 38, 110)
        add_note(drums, s + 3.0, 0.4, 38, 110)
        for h in range(8):
            add_note(drums, s + 0.5 * h, 0.2, 42, 70 if h % 2 == 0 else 48)
        if bar % 2 == 1:
            add_note(drums, s + 3.5, 0.2, 39, 80)
        bassline = [36, 36, 39, 36, 34, 34, 31, 34]
        for i, n in enumerate(bassline):
            add_note(bass, s + 0.5 * i, 0.45, n, 90)
        hook = [72, 75, 79, 75, 77, 72, 70, 72]
        for i, n in enumerate(hook):
            add_note(bells, s + 0.5 * i, 0.4, n, 72 if i % 2 == 0 else 58)
        if bar % 2 == 0:
            for n in (60, 63, 67):
                add_note(stab, s, 0.35, n, 68)
                add_note(stab, s + 2, 0.35, n, 60)
    return drums, bass, bells, stab


def hiphop_nieve() -> Path:
    return hiphop_variant("nieve-hiphop", "original")


def hiphop_variant(name: str, kind: str) -> Path:
    bpm = 96
    drums, bass, bells, stab = hiphop_backing()
    voice = []
    if kind == "original":
        # letra original, silabas cortas y juguetonas
        phrase = [(0, 0.45, 60), (0.5, 0.45, 60), (1.0, 0.45, 63), (1.5, 0.9, 60),
                  (2.5, 0.45, 67), (3.0, 0.45, 63), (3.5, 0.45, 60)]
    elif kind == "lyrics":
        # misma métrica, contorno distinto = letra nueva
        phrase = [(0, 0.45, 63), (0.5, 0.45, 67), (1.0, 0.45, 70), (1.5, 0.9, 67),
                  (2.5, 0.45, 65), (3.0, 0.45, 63), (3.5, 0.45, 62)]
    else:
        # francés: más ligado, mismas armonías
        phrase = [(0, 0.95, 63), (1.0, 0.95, 60), (2.0, 0.95, 58), (3.0, 0.9, 63)]
    for bar in range(8):
        s = bar * 4
        for off, dur, n in phrase:
            add_note(voice, s + off, dur, n, 96 if kind != "french" else 88)
            add_note(voice, s + off, dur, n - 12, 64)
    tracks = [
        track_from_events(drums, None, 9, bpm),
        track_from_events(bass, 38, 1, bpm),
        track_from_events(bells, 9, 2, bpm),
        track_from_events(stab, 0, 3, bpm),
        track_from_events(voice, 54, 4, bpm),  # synth voice = "canto"
    ]
    return save_and_render(name, tracks, bpm)


if __name__ == "__main__":
    if not FS.exists():
        raise SystemExit(f"missing {FS}")
    hiphop_variant("nieve-hiphop", "original")
    hiphop_variant("nieve-letra-nueva", "lyrics")
    hiphop_variant("nieve-frances", "french")

import { useEffect, useState } from "react";
import { generateLyria } from "../lib/lyria.js";
import LessonTrack from "./LessonTrack.jsx";

export default function LyriaTrack({
  prompt,
  imageUrl,
  poster,
  fallbackSrc,
  onPlayTrack,
}) {
  const [track, setTrack] = useState(null);
  const [busy, setBusy] = useState(Boolean(prompt));
  const [error, setError] = useState("");

  useEffect(() => {
    if (!prompt) return undefined;
    let live = true;
    setBusy(true);
    setError("");
    generateLyria({ prompt, imageUrl })
      .then((data) => {
        if (!live) return;
        setTrack(data);
        setBusy(false);
      })
      .catch((err) => {
        if (!live) return;
        setError(err.message);
        setBusy(false);
      });
    return () => {
      live = false;
    };
  }, [prompt, imageUrl]);

  const src = track?.audioUrl || fallbackSrc;

  return (
    <div className="lyria-track">
      {busy ? (
        <figure className="lesson-figure lesson-track">
          <div className="track-stage">
            {poster ? <img src={poster} alt="" className="lesson-video" /> : <div className="lesson-video" />}
          </div>
          <p className="lyria-status">Gemini está componiendo la pista… puede tardar unos 30–60 s.</p>
        </figure>
      ) : null}
      {error && !src ? (
        <p className="lyria-status bad">
          {error} Crea un archivo <code>.env</code> en la raíz del proyecto con{" "}
          <code>GEMINI_API_KEY</code> de{" "}
          <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">
            Google AI Studio
          </a>{" "}
          y reinicia <code>npm run dev</code>.
        </p>
      ) : null}
      {error && src ? <p className="lyria-status bad">{error} Se muestra la pista guardada.</p> : null}
      {!busy && src ? (
        <LessonTrack src={src} poster={poster} onPlayTrack={onPlayTrack} />
      ) : null}
    </div>
  );
}

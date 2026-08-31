import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function LessonTrack({ src, poster, onPlayTrack }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  const isAudio = /\.mp3($|\?)|^data:audio|^\/lessons\/lyria-cache\//i.test(src || "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.pause();
    el.currentTime = 0;
    setOn(false);
    return () => {
      el.pause();
    };
  }, [src]);

  function playTrack() {
    onPlayTrack?.();
    ref.current?.play();
  }

  const mediaProps = {
    ref,
    src,
    className: isAudio ? "lesson-audio" : "lesson-video",
    controls: on,
    playsInline: true,
    onPlay: () => {
      onPlayTrack?.();
      setOn(true);
    },
    onPause: () => setOn(false),
    onEnded: () => setOn(false),
  };

  return (
    <figure className="lesson-figure lesson-track">
      <div className="track-stage">
        {isAudio ? (
          <>
            {poster ? <img src={poster} alt="" className="lesson-video" /> : <div className="lesson-video" />}
            <audio {...mediaProps} hidden={!on} />
          </>
        ) : (
          <video {...mediaProps} poster={poster} />
        )}
        {on ? null : (
          <button type="button" className="track-play" onClick={playTrack} aria-label="Reproducir pista">
            <Play size={36} fill="currentColor" />
          </button>
        )}
      </div>
    </figure>
  );
}

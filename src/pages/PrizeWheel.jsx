import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { WHEEL_PRIZE, WHEEL_SEGMENTS } from "../data/offer.js";
import { useStore } from "../store.jsx";

const SLICE = 360 / WHEEL_SEGMENTS.length;

export default function PrizeWheel() {
  const navigate = useNavigate();
  const { user, offer, spinOffer, paid, isRoot } = useStore();
  const [spinning, setSpinning] = useState(false);
  const [won, setWon] = useState(Boolean(offer.spun));

  const prizeIndex = WHEEL_SEGMENTS.findIndex((s) => s.value === WHEEL_PRIZE);
  const restAngle = 360 - (prizeIndex * SLICE + SLICE / 2);
  const [rotation, setRotation] = useState(offer.spun ? restAngle : 0);

  const gradient = useMemo(
    () =>
      WHEEL_SEGMENTS.map((_, i) => {
        const color = i % 2 === 0 ? "#d9dce3" : "#b8bec8";
        return `${color} ${i * SLICE}deg ${(i + 1) * SLICE}deg`;
      }).join(", "),
    []
  );

  function spin() {
    if (spinning || won) return;
    setSpinning(true);
    const extraTurns = 6;
    const target = extraTurns * 360 + (360 - (prizeIndex * SLICE + SLICE / 2));
    setRotation(target);
    window.setTimeout(() => {
      spinOffer(WHEEL_PRIZE);
      setSpinning(false);
      setWon(true);
    }, 4200);
  }

  function claim() {
    spinOffer(WHEEL_PRIZE);
    navigate("/offer/plans", { replace: true });
  }

  if (paid || isRoot) return <Navigate to="/home" replace />;

  return (
    <div className="wheel-page">
      <h1>
        Gire y desbloquee su <em>¡Descuento de Año Nuevo!</em>
      </h1>
      <p>No pierda la oportunidad de dominar la IA con una oferta personalizada 🎁</p>

      <div className="wheel-stage">
        <div className="wheel-pointer" aria-hidden />
        <div className="wheel-rim">
          {Array.from({ length: 24 }, (_, i) => (
            <span key={i} className="wheel-light" style={{ transform: `rotate(${i * 15}deg) translateY(-158px)` }} />
          ))}
          <div
            className="wheel-disc"
            style={{
              background: `conic-gradient(from -90deg, ${gradient})`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {WHEEL_SEGMENTS.map((seg, i) => (
              <span
                key={seg.label}
                className="wheel-label"
                style={{ transform: `rotate(${i * SLICE + SLICE / 2}deg)` }}
              >
                <b>{seg.label}</b>
              </span>
            ))}
          </div>
          <button type="button" className="wheel-hub" onClick={spin} disabled={spinning || won}>
            {spinning ? "…" : won ? "50%" : "GIRAR"}
          </button>
        </div>
      </div>

      {!won && !spinning ? (
        <button type="button" className="ui-primary-button wheel-cta" onClick={spin}>
          Girar la ruleta
        </button>
      ) : null}

      {won ? (
        <div className="wheel-win-back">
          <div className="wheel-win-modal" role="dialog" aria-modal="true">
            <h2>¡Felicidades! 🥳</h2>
            <div className="wheel-win-banner">
              <p>
                <strong>{user?.name || "Tú"}</strong>, ha ganado un descuento
              </p>
              <div>50% de descuento</div>
            </div>
            <p className="muted">Se aplicará automáticamente</p>
            <button type="button" className="wheel-win-cta" onClick={claim}>
              OBTENER MI DESCUENTO
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

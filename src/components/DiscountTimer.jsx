import { useEffect, useState } from "react";

export default function DiscountTimer({ expiresAt, compact = false }) {
  const [left, setLeft] = useState(() => Math.max(0, (expiresAt || 0) - Date.now()));

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, (expiresAt || 0) - Date.now()));
    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, [expiresAt]);

  const total = Math.floor(left / 1000);
  const min = String(Math.floor(total / 60)).padStart(2, "0");
  const sec = String(total % 60).padStart(2, "0");

  if (compact) {
    return (
      <span className="offer-timer-compact">
        <strong>{min}</strong>
        <span>min</span>
        <strong>{sec}</strong>
        <span>seg</span>
      </span>
    );
  }

  return (
    <div className="offer-timer">
      <div className="offer-timer-label">El descuento expira en</div>
      <div className="offer-timer-digits">
        <div>
          <strong>{min}</strong>
          <span>min</span>
        </div>
        <div>
          <strong>{sec}</strong>
          <span>seg</span>
        </div>
      </div>
    </div>
  );
}

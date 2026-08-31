const labels = ["Arranque", "Calentando", "A medio camino", "Casi", "Meta"];

function Scene({ step }) {
  if (step === 0) {
    return (
      <svg viewBox="0 0 220 90" className="progress-scene">
        <rect width="220" height="90" rx="18" fill="#FFE8E3" />
        <ellipse cx="110" cy="78" rx="70" ry="8" fill="#FFCBBF" />
        <rect x="96" y="40" width="28" height="28" rx="8" fill="#FF5A3C" />
        <path d="M102 62V46h3.2l4.6 10.2L114.4 46H118v16h-3.1v-9.2L111.2 62h-1.3l-4.6-9.2V62H102Z" fill="white" />
      </svg>
    );
  }
  if (step === 1) {
    return (
      <svg viewBox="0 0 220 90" className="progress-scene">
        <rect width="220" height="90" rx="18" fill="#E8F6EA" />
        <rect x="104" y="42" width="12" height="32" rx="4" fill="#19AA32" />
        <circle cx="96" cy="40" r="12" fill="#53BF65" />
        <circle cx="124" cy="38" r="10" fill="#8CD598" />
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg viewBox="0 0 220 90" className="progress-scene">
        <rect width="220" height="90" rx="18" fill="#E8F4FF" />
        <path d="M20 68 C70 40, 150 40, 200 68" stroke="#4285f4" strokeWidth="6" fill="none" />
        <rect x="96" y="32" width="28" height="28" rx="8" fill="#FF5A3C" />
        <path d="M102 54V38h3.2l4.6 10.2L114.4 38H118v16h-3.1v-9.2L111.2 54h-1.3l-4.6-9.2V54H102Z" fill="white" />
        <rect x="102" y="58" width="16" height="18" rx="4" fill="#1B1C1F" />
      </svg>
    );
  }
  if (step === 3) {
    return (
      <svg viewBox="0 0 220 90" className="progress-scene">
        <rect width="220" height="90" rx="18" fill="#FFF4D6" />
        <polygon points="110,12 128,48 92,48" fill="#FFB800" />
        <rect x="102" y="48" width="16" height="28" fill="#D97706" />
        <circle cx="168" cy="28" r="10" fill="#FFE14A" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 90" className="progress-scene">
      <rect width="220" height="90" rx="18" fill="#FFF8E5" />
      <circle cx="110" cy="42" r="22" fill="#FFE14A" />
      <path d="M110 22 L116 38 L134 38 L120 48 L126 64 L110 54 L94 64 L100 48 L86 38 L104 38 Z" fill="#FF5A3C" />
    </svg>
  );
}

export default function ProgressArt({ index, total }) {
  const ratio = total <= 1 ? 1 : index / (total - 1);
  const step = Math.min(4, Math.floor(ratio * 4 + 0.001));
  return (
    <div className="progress-art">
      <Scene step={step} />
      <div className="progress-art-meta">
        <strong>{labels[step]}</strong>
        <span>
          Cap {index + 1} de {total}
        </span>
      </div>
      <div className="progress-dots" aria-hidden>
        {labels.map((_, i) => (
          <span key={i} className={i <= step ? "on" : ""} />
        ))}
      </div>
    </div>
  );
}

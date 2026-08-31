export default function Logo({ height = 32 }) {
  const mark = Math.max(22, height - 2);
  return (
    <span className="brand-logo" aria-label="IA con Mauri" style={{ height }}>
      <span className="brand-mark" aria-hidden>
        <svg width={mark} height={mark} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="9" fill="#FF5A3C" />
          <path
            d="M7.5 24V9.2h3.4l5.1 10.2 5.1-10.2H24.5V24h-3.2v-9.4L16.7 24h-1.4l-4.6-9.4V24H7.5Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="brand-word">
        <span className="brand-ia">IA</span>
        <span className="brand-con">con</span>
        <span className="brand-mauri">Mauri</span>
      </span>
    </span>
  );
}

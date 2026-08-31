import { useEffect, useState } from "react";
import QRCode from "qrcode";

function MauriMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#FF5A3C" />
      <path
        d="M7.5 24V9.2h3.4l5.1 10.2 5.1-10.2H24.5V24h-3.2v-9.4L16.7 24h-1.4l-4.6-9.4V24H7.5Z"
        fill="white"
      />
    </svg>
  );
}

export default function CertQr({ url, alt }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    let live = true;
    QRCode.toDataURL(url, {
      width: 220,
      margin: 1,
      errorCorrectionLevel: "H",
      color: { dark: "#1b2740", light: "#ffffff" },
    })
      .then((data) => {
        if (live) setSrc(data);
      })
      .catch(() => {
        if (live) setSrc("");
      });
    return () => {
      live = false;
    };
  }, [url]);

  return (
    <span className="cert-qr-frame">
      {src ? <img src={src} alt={alt} className="cert-qr" /> : <span className="cert-qr-fallback" />}
      <span className="cert-qr-mark">
        <MauriMark size={16} />
      </span>
    </span>
  );
}

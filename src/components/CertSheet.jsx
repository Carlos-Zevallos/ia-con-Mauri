import { useEffect, useId, useMemo, useState } from "react";
import CertQr from "./CertQr.jsx";
import Logo from "./Logo.jsx";
import CertSealMark from "./CertSealMark.jsx";
import { iconIdForGuide } from "../lib/certs.js";
import { scanOrigin } from "../lib/publicOrigin.js";

function scallopPath(cx, cy, r0, amp, n = 16, samples = 256) {
  let d = "";
  for (let i = 0; i <= samples; i += 1) {
    const t = (i / samples) * Math.PI * 2;
    const wave = Math.cos(n * t);
    const r = r0 + amp * Math.sign(wave) * Math.pow(Math.abs(wave), 0.45);
    const x = (cx + r * Math.sin(t)).toFixed(2);
    const y = (cy - r * Math.cos(t)).toFixed(2);
    d += `${i === 0 ? "M" : "L"}${x} ${y} `;
  }
  return `${d}Z`;
}

function Seal({ iconId }) {
  const gid = useId().replace(/:/g, "");
  const paths = useMemo(
    () => ({
      outer: scallopPath(60, 60, 48.6, 8.4),
      ring: scallopPath(60, 60, 43.8, 7.55),
    }),
    [],
  );

  return (
    <svg className="cert-seal" viewBox="0 0 120 120" aria-hidden>
      <defs>
        <linearGradient id={`sealGrad-${gid}`} x1="60" y1="4" x2="60" y2="116" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF8A6A" />
          <stop offset="55%" stopColor="#FF5A3C" />
          <stop offset="100%" stopColor="#E0442A" />
        </linearGradient>
      </defs>
      <path
        d={paths.outer}
        fill="none"
        stroke={`url(#sealGrad-${gid})`}
        strokeWidth="3.1"
        strokeLinejoin="round"
      />
      <path
        d={paths.ring}
        fill="none"
        stroke={`url(#sealGrad-${gid})`}
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <g transform="translate(60 60) scale(1.22) translate(-18 -18)">
        <CertSealMark id={iconId} />
      </g>
    </svg>
  );
}

export default function CertSheet({ record, verifyUrl }) {
  const iconId = iconIdForGuide(record.guideId);
  const [scanUrl, setScanUrl] = useState(verifyUrl);

  useEffect(() => {
    let live = true;
    scanOrigin().then((origin) => {
      if (!live || !origin) return;
      setScanUrl(`${origin}${verifyUrl}`);
    });
    return () => {
      live = false;
    };
  }, [verifyUrl]);

  return (
    <div className="cert-sheet">
      <header className="cert-top">
        <Logo height={28} />
        <p className="cert-id">ID del certificado: {record.id}</p>
      </header>

      <div className="cert-hero">
        <h1 className="cert-course">MAESTRO DE {record.title.toUpperCase()}</h1>
        <p className="cert-issued-label">OTORGADO A</p>
        <p className="cert-name">{record.name}</p>
        <p className="cert-body">
          Otorgado por la finalización exitosa de la guía ‘{record.title}’, que representa más de{" "}
          {record.hours} horas de formación y desarrollo de habilidades.
        </p>
      </div>

      <div className="cert-bottom">
        <div className="cert-meta">
          <span>Fecha de emisión</span>
          <strong>{record.issued}</strong>
        </div>
        <div className="cert-seal-wrap">
          <Seal iconId={iconId} />
        </div>
        <div className="cert-meta cert-meta-right">
          <span>Duración del curso</span>
          <strong>{record.hours} horas</strong>
        </div>
      </div>

      <a className="cert-qr-link" href={scanUrl} aria-label="Ver datos del certificado">
        <CertQr url={scanUrl} alt={`QR ${record.id}`} />
      </a>

      <p className="cert-legal">
        Todas las marcas comerciales, logotipos y nombres de marca son propiedad de sus respectivos
        dueños. Su uso no implica respaldo ni afiliación por parte de IA con Mauri
      </p>
    </div>
  );
}

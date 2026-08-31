import { useState } from "react";
import { Check, Info, Lock, X } from "lucide-react";
import { promoCode, soles } from "../data/offer.js";
import { useStore } from "../store.jsx";
import DiscountTimer from "./DiscountTimer.jsx";

function formatCard(value) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function formatExpiry(value) {
  const d = value.replace(/\D/g, "").slice(0, 4);
  if (d.length < 3) return d;
  return `${d.slice(0, 2)}/${d.slice(2)}`;
}

export default function PayModal({
  open,
  product,
  fullPrice,
  salePrice,
  discount,
  expiresAt,
  headline,
  lead,
  onClose,
  onPaid,
}) {
  const { user } = useStore();
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [holder, setHolder] = useState(user?.name || "");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (!open) return null;

  const pct = discount >= 60 ? 60 : discount >= 50 ? 50 : discount || 0;
  const rawSave = fullPrice * ((pct || 0) / 100);
  const computedSave = Number.isInteger(fullPrice) ? Math.round(rawSave) : Math.round(rawSave * 100) / 100;
  const computed = Math.round((fullPrice - computedSave) * 100) / 100;
  const total = salePrice == null ? computed : salePrice;
  const save = Math.round((fullPrice - total) * 100) / 100;
  const code = promoCode(user?.name || "usuario", pct);

  function submit(e) {
    e.preventDefault();
    const digits = card.replace(/\D/g, "");
    if (digits.length < 12 || expiry.length < 4 || cvv.length < 3 || holder.trim().length < 2) {
      setError("Completa los datos de la tarjeta de práctica. No se cobra de verdad.");
      return;
    }
    setBusy(true);
    window.setTimeout(() => {
      setBusy(false);
      onPaid();
    }, 500);
  }

  return (
    <div className="pay-modal-back" onClick={() => !busy && onClose()}>
      <div className="pay-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="pay-modal-x" onClick={onClose} aria-label="Cerrar" disabled={busy}>
          <X size={18} />
        </button>
        {pct ? (
          <div className="pay-modal-alert">
            Su descuento reservado por <DiscountTimer expiresAt={expiresAt} compact />
          </div>
        ) : null}
        <h2>
          {headline || (
            <>
              Únase a más de <em>2,000,000 usuarios</em> para alcanzar sus objetivos
            </>
          )}
        </h2>
        {lead ? <p className="pay-modal-lead">{lead}</p> : null}
        <div className="pay-modal-lines">
          <div>
            <span>{product}</span>
            <span>{soles(fullPrice)}</span>
          </div>
          {pct ? (
            <div className="pay-modal-save">
              <span>{pct}% de Descuento</span>
              <span>−{soles(save)}</span>
            </div>
          ) : null}
          {pct ? (
            <div className="pay-modal-code">
              Código promocional aplicado: <Check size={14} /> {code}
            </div>
          ) : null}
          <div className="pay-modal-total">
            <span>Total</span>
            <span>{soles(total)}</span>
          </div>
          {pct ? (
            <p className="pay-modal-saved">Acabas de ahorrar {soles(save)} ({pct}% de descuento)</p>
          ) : null}
        </div>
        <form className="pay-modal-form" onSubmit={submit}>
          <label className="pay-field">
            <span>Número de tarjeta</span>
            <input
              value={card}
              onChange={(e) => setCard(formatCard(e.target.value))}
              placeholder="XXXX XXXX XXXX XXXX"
              inputMode="numeric"
              autoComplete="cc-number"
            />
          </label>
          <div className="pay-modal-row">
            <label className="pay-field">
              <span>MM/YY</span>
              <input
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                placeholder="MM/YY"
                inputMode="numeric"
                autoComplete="cc-exp"
              />
            </label>
            <label className="pay-field">
              <span>
                CVV <Info size={13} />
              </span>
              <input
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="CVV"
                inputMode="numeric"
                autoComplete="cc-csc"
              />
            </label>
          </div>
          <label className="pay-field">
            <span>Nombre completo como en la tarjeta</span>
            <input
              value={holder}
              onChange={(e) => setHolder(e.target.value)}
              placeholder="Nombre en la tarjeta"
              autoComplete="cc-name"
            />
          </label>
          {error ? <p className="pay-modal-error">{error}</p> : null}
          <button className="pay-modal-cta" type="submit" disabled={busy}>
            <Lock size={16} />
            {busy ? "Confirmando…" : "CONFIRMAR PAGO"}
          </button>
        </form>
      </div>
    </div>
  );
}

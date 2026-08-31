import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Check, ThumbsUp, X } from "lucide-react";
import { planAmount, plans, promoCode, soles, TICKER } from "../data/offer.js";
import { useStore } from "../store.jsx";
import DiscountTimer from "../components/DiscountTimer.jsx";
import PayModal from "../components/PayModal.jsx";

export default function SellingPage() {
  const navigate = useNavigate();
  const { user, offer, bumpOffer, unlockPaid, paid, isRoot, completeOffer, spinOffer } = useStore();
  const [selected, setSelected] = useState(plans.find((p) => p.popular)?.id || plans[0].id);
  const [payOpen, setPayOpen] = useState(false);
  const [bumpOpen, setBumpOpen] = useState(false);

  const discount = offer.discount >= 60 ? 60 : offer.discount >= 50 ? 50 : 50;
  const plan = plans.find((p) => p.id === selected) || plans[1];
  const price = planAmount(plan, discount);
  const code = promoCode(user?.name || "usuario", discount);

  useEffect(() => {
    if (!offer.spun) spinOffer(50);
  }, [offer.spun, spinOffer]);

  if (paid || isRoot) return <Navigate to="/home" replace />;

  function openPay() {
    setPayOpen(true);
  }

  function closePay() {
    setPayOpen(false);
    if (!offer.bumped) {
      bumpOffer();
      setBumpOpen(true);
    }
  }

  function acceptBump() {
    setBumpOpen(false);
  }

  function skipOffer() {
    completeOffer();
    navigate("/home", { replace: true });
  }

  return (
    <div className="selling-page">
      <header className="selling-top">
        <DiscountTimer expiresAt={offer.expiresAt} />
        <button type="button" className="selling-top-cta" onClick={openPay}>
          OBTÉN MI PLAN
        </button>
      </header>

      <div className="selling-ticker" aria-hidden>
        <div className="selling-ticker-track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>

      <div className="selling-body">
        <h1>Elija el mejor plan para usted</h1>

        <div className={`selling-promo${discount >= 60 ? " hot" : ""}`}>
          <span className="selling-promo-badge">
            {discount >= 60 ? "50% 60% DESCUENTO" : `${discount}% DESCUENTO`}
          </span>
          <div>
            <strong>{discount >= 60 ? "¡Nuevo código promocional aplicado!" : "¡Código promocional aplicado!"}</strong>
            <div className="selling-promo-code">{code}</div>
          </div>
          <DiscountTimer expiresAt={offer.expiresAt} compact />
        </div>

        <div className="selling-plans">
          {plans.map((p) => {
            const amount = planAmount(p, discount);
            const active = p.id === selected;
            return (
              <button
                key={p.id}
                type="button"
                className={`selling-plan${active ? " active" : ""}${p.popular ? " popular" : ""}`}
                onClick={() => setSelected(p.id)}
              >
                {p.popular ? (
                  <span className="selling-plan-pop">
                    <ThumbsUp size={14} /> MÁS POPULAR
                  </span>
                ) : null}
                <span className="selling-plan-off">{discount}% OFF</span>
                <h2>{p.title}</h2>
                <div className="selling-plan-price">
                  {soles(amount)} <s>{soles(p.full)}</s>
                </div>
              </button>
            );
          })}
        </div>

        <p className="selling-proof">
          <Check size={18} /> Las personas que usan el plan durante 12 semanas logran el doble de resultados que en 4 semanas
        </p>
        <p className="selling-cite">*Según una investigación de IA con Mauri, 2026.</p>

        <div className="selling-terms">
          Al hacer clic en Obtén Mi Plan, acepto pagar {soles(price)} por un plan de introducción de {plan.weeks}-semana.
          Luego el plan se renueva automáticamente. Puedes cancelar cuando quieras desde Ajustes. Pago de práctica: no se conecta a un banco real.
        </div>

        <button type="button" className="selling-cta" onClick={openPay}>
          OBTÉN MI PLAN
        </button>
        <div className="selling-secure">
          <Check size={14} /> Pago seguro
        </div>
        <div className="selling-brands">Visa · Mastercard · Amex · PayPal</div>
        <button type="button" className="link selling-skip" onClick={skipOffer}>
          Seguir sin pagar
        </button>
      </div>

      {bumpOpen ? (
        <div className="wheel-win-back" onClick={acceptBump}>
          <div className="wheel-win-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pay-modal-x" onClick={acceptBump} aria-label="Cerrar">
              <X size={18} />
            </button>
            <h2>¡Espera! 🎁</h2>
            <div className="wheel-win-banner bump">
              <p>
                <strong>{user?.name || "Tú"}</strong>, desbloqueaste un extra
              </p>
              <div>60% de descuento</div>
            </div>
            <p className="muted">Se aplica ahora y el cronómetro sigue corriendo.</p>
            <button type="button" className="wheel-win-cta" onClick={acceptBump}>
              OBTENER EL 60%
            </button>
          </div>
        </div>
      ) : null}

      <PayModal
        open={payOpen}
        product="Desafío de IA de 28 Días"
        fullPrice={plan.full}
        salePrice={price}
        discount={discount}
        expiresAt={offer.expiresAt}
        onClose={closePay}
        onPaid={() => {
          unlockPaid();
          navigate("/home", { replace: true });
        }}
      />
    </div>
  );
}

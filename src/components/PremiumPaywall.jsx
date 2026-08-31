import { useEffect } from "react";
import { planAmount, plans } from "../data/offer.js";
import { useStore } from "../store.jsx";
import PayModal from "./PayModal.jsx";

export default function PremiumPaywall({ open, onClose, onPaid, guideTitle }) {
  const { offer, unlockPaid, spinOffer } = useStore();
  const plan = plans.find((p) => p.popular) || plans[1];
  const discount = offer.discount >= 60 ? 60 : offer.discount >= 50 ? 50 : 50;
  const price = planAmount(plan, discount);
  const product = guideTitle
    ? `Premium · ${guideTitle}`
    : "Plan Premium IA con Mauri";

  useEffect(() => {
    if (open && !offer.spun) spinOffer(50);
  }, [open, offer.spun, spinOffer]);

  return (
    <PayModal
      open={open}
      product={product}
      fullPrice={plan.full}
      salePrice={price}
      discount={discount}
      expiresAt={offer.expiresAt}
      headline="Activa Premium para seguir"
      lead="Las 2 primeras lecciones de cada IA son gratis. Desde la tercera necesitas Premium. El diploma se libera al terminar cada bloque."
      onClose={onClose}
      onPaid={() => {
        unlockPaid();
        onPaid?.();
      }}
    />
  );
}

import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlarmClock, Check, ChevronLeft, ChevronRight, Flame, Plus, Search, Sparkles, X } from "lucide-react";
import { productivityPack, promptShelves, promptsForShelf } from "../data/prompts.js";
import { soles } from "../data/offer.js";
import { aiTools } from "../data.js";
import { useStore } from "../store.jsx";
import AiIcon from "../components/AiIcon.jsx";
import PayModal from "../components/PayModal.jsx";

function PromptGrid({ items }) {
  return (
    <div className="prompts-list-grid">
      {items.map((p) => {
        const tool = aiTools.find((t) => t.id === p.tool);
        return (
          <Link
            key={p.id}
            to={`/ai-tools/${p.tool}`}
            state={{ prompt: p.prompt, promptTitle: p.title }}
            className="card prompt-card"
          >
            <div className="prompt-card-top">
              <AiIcon id={p.tool} size={32} />
              {p.category ? <span className="chip">{p.category}</span> : null}
            </div>
            <h2>{p.title}</h2>
            <p className="muted">{p.blurb}</p>
            <div className="muted" style={{ marginTop: 10, fontSize: 12, fontWeight: 800 }}>
              {tool?.name || p.tool}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Prompts() {
  const navigate = useNavigate();
  const { hasPromptPack, unlockPromptPack, offer, bumpOffer } = useStore();
  const [q, setQ] = useState("");
  const [shelfId, setShelfId] = useState(null);
  const [packOpen, setPackOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [payOpen, setPayOpen] = useState(false);
  const [bumpOpen, setBumpOpen] = useState(false);

  const discount = offer.discount >= 60 ? 60 : offer.discount >= 50 ? 50 : 0;
  const packSale = discount
    ? Math.round(productivityPack.amount * (1 - discount / 100) * 100) / 100
    : productivityPack.amount;

  const query = q.trim().toLowerCase();
  const shelf = promptShelves.find((s) => s.id === shelfId);

  const shelves = useMemo(() => {
    if (!query) return promptShelves;
    return promptShelves.filter((s) => s.title.toLowerCase().includes(query));
  }, [query]);

  const showFeatured =
    !query ||
    `${productivityPack.title} ${productivityPack.subtitle}`.toLowerCase().includes(query);

  const shelfItems = useMemo(() => {
    if (!shelf) return [];
    const items = promptsForShelf(shelf.id);
    if (!query) return items;
    return items.filter((p) => `${p.title} ${p.blurb} ${p.prompt}`.toLowerCase().includes(query));
  }, [shelf, query]);

  const packItems = useMemo(() => {
    if (!query) return productivityPack.items;
    return productivityPack.items.filter((p) =>
      `${p.title} ${p.blurb} ${p.prompt}`.toLowerCase().includes(query)
    );
  }, [query]);

  function openFeatured() {
    setBuyOpen(true);
  }

  function enterPack() {
    setBuyOpen(false);
    setPackOpen(true);
    setShelfId(null);
  }

  function buyPack() {
    if (hasPromptPack) {
      enterPack();
      return;
    }
    setPayOpen(true);
  }

  function closePromptPay() {
    setPayOpen(false);
    if (!hasPromptPack && !offer.bumped) {
      bumpOffer();
      setBumpOpen(true);
    }
  }

  function goLibrary() {
    setShelfId(null);
    setPackOpen(false);
    setQ("");
  }

  const listing = packOpen || Boolean(shelf);

  return (
    <div className="desktop-layout prompts-lib" style={{ paddingTop: 8 }}>
      <div className="prompts-lib-head">
        <button
          type="button"
          className="prompts-lib-back"
          onClick={() => (listing ? goLibrary() : navigate(-1))}
          aria-label="Volver"
        >
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
        <h1>
          {packOpen ? "Paquete de productividad" : shelf ? shelf.title : "Biblioteca de prompts"}
        </h1>
      </div>

      <label className="prompts-search">
        <Search size={18} strokeWidth={2.2} />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar un prompt"
        />
      </label>

      {packOpen ? (
        <>
          <p className="muted" style={{ margin: "0 0 16px", fontSize: 14 }}>
            {productivityPack.subtitle}
          </p>
          <PromptGrid items={packItems} />
          {!packItems.length ? <p className="muted">Nada con esa búsqueda.</p> : null}
        </>
      ) : shelf ? (
        <>
          <PromptGrid items={shelfItems} />
          {!shelfItems.length ? <p className="muted">Nada con esa búsqueda.</p> : null}
        </>
      ) : (
        <div className="prompts-cat-grid">
          {shelves.map((s) => (
            <button key={s.id} type="button" className="prompts-cat-card" onClick={() => setShelfId(s.id)}>
              <span className="prompts-cat-plus" aria-hidden>
                <Plus size={14} strokeWidth={3} />
              </span>
              <span className="prompts-cat-go" aria-hidden>
                <ChevronRight size={16} strokeWidth={2.6} />
              </span>
              <span className="prompts-cat-title">{s.title}</span>
            </button>
          ))}
          {showFeatured ? (
            <button type="button" className="prompts-feat-card" onClick={openFeatured}>
              <div className="prompts-feat-copy">
                <h2>{productivityPack.title}</h2>
                <p>{productivityPack.subtitle}</p>
              </div>
              <div className="prompts-feat-icons" aria-hidden>
                <span className="prompts-feat-tile fire">
                  <Flame size={22} fill="#ff7a3c" color="#ff7a3c" />
                </span>
                <span className="prompts-feat-tile clock">
                  <AlarmClock size={22} color="#6b4eff" />
                </span>
                <span className="prompts-feat-tile spark">
                  <Sparkles size={20} color="#3b82f6" />
                </span>
              </div>
            </button>
          ) : null}
          {!shelves.length && !showFeatured ? <p className="muted">Nada con esa búsqueda.</p> : null}
        </div>
      )}

      {buyOpen ? (
        <div className="prompts-buy-back" onClick={() => setBuyOpen(false)}>
          <div
            className="prompts-buy-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="prompts-buy-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="prompts-buy-close"
              onClick={() => setBuyOpen(false)}
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
            <div className="prompts-buy-stars" aria-hidden>
              <Sparkles size={28} strokeWidth={2.2} />
            </div>
            <h2 id="prompts-buy-title">{productivityPack.title}</h2>
            <p className="prompts-buy-sub">{productivityPack.subtitle}</p>
            <ul className="prompts-buy-list">
              {productivityPack.benefits.map((b) => (
                <li key={b}>
                  <span className="prompts-buy-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="prompts-buy-price">
              <span className="prompts-buy-badge">ACCESO DE POR VIDA</span>
              <div className="prompts-buy-price-label">Desbloqueo único</div>
              <div className="prompts-buy-amount">
                {discount ? (
                  <>
                    {soles(packSale)} <s>{productivityPack.price}</s>
                  </>
                ) : (
                  productivityPack.price
                )}
              </div>
            </div>
            <button type="button" className="prompts-buy-cta" onClick={buyPack}>
              Comprar y desbloquear
            </button>
          </div>
        </div>
      ) : null}

      {bumpOpen ? (
        <div className="wheel-win-back" onClick={() => setBumpOpen(false)}>
          <div className="wheel-win-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pay-modal-x" onClick={() => setBumpOpen(false)} aria-label="Cerrar">
              <X size={18} />
            </button>
            <h2>¡Espera! 🎁</h2>
            <div className="wheel-win-banner bump">
              <p>Desbloqueaste un extra en este paquete</p>
              <div>60% de descuento</div>
            </div>
            <p className="muted">El precio se actualiza ahora. Completa el pago con tu tarjeta.</p>
            <button
              type="button"
              className="wheel-win-cta"
              onClick={() => {
                setBumpOpen(false);
                setPayOpen(true);
              }}
            >
              OBTENER EL 60%
            </button>
          </div>
        </div>
      ) : null}

      <PayModal
        open={payOpen}
        product={productivityPack.title}
        fullPrice={productivityPack.amount}
        salePrice={packSale}
        discount={discount}
        expiresAt={offer.expiresAt}
        onClose={closePromptPay}
        onPaid={() => {
          unlockPromptPack();
          setPayOpen(false);
          setBuyOpen(false);
          enterPack();
        }}
      />
    </div>
  );
}

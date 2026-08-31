import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AudioLines, Send } from "lucide-react";
import { aiTools } from "../data.js";
import { promptsByTool } from "../data/prompts.js";
import { fillPlaceholders, simulateReply } from "../lib/simulateAi.js";
import { useStore } from "../store.jsx";
import AiIcon from "../components/AiIcon.jsx";

export default function AiChat() {
  const { toolId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const tool = aiTools.find((t) => t.id === toolId) || aiTools[0];
  const { messages, pushMessage, logPromptUse } = useStore();
  const starters = promptsByTool(tool.id).slice(0, 3);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const endRef = useRef(null);
  const incomingRef = useRef("");
  const thread = messages[tool.id] || [];

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [thread.length, busy]);

  useEffect(() => {
    const incoming = location.state?.prompt;
    if (!incoming || incoming === incomingRef.current) return;
    incomingRef.current = incoming;
    const filled = fillPlaceholders(incoming);
    logPromptUse();
    send(filled);
    navigate(location.pathname, { replace: true, state: {} });
  }, [location.state, location.pathname, tool.id]);

  function send(override) {
    const value = (override ?? text).trim();
    if (!value || busy) return;
    pushMessage(tool.id, { role: "user", text: value });
    setText("");
    setBusy(true);
    window.setTimeout(() => {
      const draft = simulateReply(tool, value);
      pushMessage(tool.id, { role: "assistant", title: draft.title, text: draft.body });
      setBusy(false);
    }, 520);
  }

  function useChip(prompt) {
    const filled = fillPlaceholders(prompt);
    logPromptUse();
    send(filled);
  }

  function listenVoice() {
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Rec) {
      setText((prev) => prev || "Describe un clip de 10s: movimiento de cámara dolly, acción del sujeto, iluminación, corte final. Tema: clases.");
      return;
    }
    const rec = new Rec();
    rec.lang = "es-ES";
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    rec.onresult = (e) => {
      const said = e.results[0]?.[0]?.transcript || "";
      if (said) setText((prev) => (prev ? `${prev} ${said}` : said));
    };
    rec.start();
  }

  return (
    <div className="desktop-layout phone-col chat-page">
      <button type="button" className="chat-back" onClick={() => navigate("/ai-tools")}>
        ← Taller
      </button>

      <div className="chat-toolhead">
        <AiIcon id={tool.id} size={48} />
        <div>
          <h1>{tool.name}</h1>
          <p>{tool.category}</p>
        </div>
      </div>

      {starters.length ? (
        <div className="chat-starters">
          <div className="chat-starters-top">
            <strong>Para empezar</strong>
            <button type="button" className="link" onClick={() => navigate("/prompts")}>
              Biblioteca
            </button>
          </div>
          <div className="hscroll">
            {starters.map((p) => (
              <button key={p.id} type="button" className="chip" onClick={() => useChip(p.prompt)}>
                {p.title}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="chat-thread">
        {!thread.length && !busy ? (
          <p className="muted chat-empty">Elige un chip o escribe un pedido. {tool.name} arma un borrador de práctica, sin servicios externos.</p>
        ) : null}
        {thread.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="bubble user">
              {m.text}
            </div>
          ) : (
            <article key={i} className="bubble bot">
              {m.title ? <h2>{m.title}</h2> : null}
              <pre>{m.text}</pre>
            </article>
          )
        )}
        {busy ? <div className="bubble bot typing">{tool.name} está armando el borrador…</div> : null}
        <div ref={endRef} />
      </div>

      <form
        className="chat-dock"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <button type="button" className="voice-btn" onClick={listenVoice} aria-label="Dictar">
          <AudioLines size={18} />
        </button>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Escribe un pedido o pega un prompt…"
          rows={text.length > 72 ? 3 : 1}
        />
        <button type="submit" className="send-btn" disabled={!text.trim() || busy} aria-label="Enviar">
          <Send size={18} />
        </button>
      </form>
      {listening ? <p className="muted chat-listen">Escuchando…</p> : null}
    </div>
  );
}

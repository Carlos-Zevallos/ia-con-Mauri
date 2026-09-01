export function DsCostChart() {
  return (
    <div className="ds-cost-chart" aria-hidden>
      <div className="ds-cost-col">
        <span className="ds-cost-logo">DS</span>
        <div className="ds-cost-bar ds-cost-bar-blue">
          <span>$5M</span>
        </div>
      </div>
      {[
        ["$60M", 60],
        ["$80M", 80],
        ["$100M", 100],
      ].map(([label, h]) => (
        <div key={label} className="ds-cost-col">
          <div className="ds-cost-bar ds-cost-bar-red" style={{ height: `${h * 0.9}px` }}>
            <span>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DsUseGrid() {
  return (
    <div className="ds-use-grid" aria-hidden>
      <div className="ds-use-cell">✎</div>
      <div className="ds-use-cell">NEW POST</div>
      <div className="ds-use-cell">🔍</div>
      <div className="ds-use-cell">📊</div>
      <span className="ds-use-mark">DS</span>
    </div>
  );
}

export function DsModesBar({ active = "Instant" }) {
  return (
    <div className="ds-mock">
      <p className="ds-mock-head">
        Start chatting with Instant <span className="ds-mock-ok">✓</span>
      </p>
      <div className="ds-mock-pills">
        {["Instant", "Expert", "Vision"].map((m) => (
          <span key={m} className={`ds-pill${m === active ? " on" : ""}`}>
            {m === "Instant" ? "+ Instant" : m}
          </span>
        ))}
      </div>
      <div className="ds-mock-box">Message DeepSeek</div>
      <div className="ds-mock-toggles">
        <span className="ds-tog">DeepThink</span>
        <span className="ds-tog blue">Search</span>
      </div>
    </div>
  );
}

export function DsThinkSearch() {
  return (
    <div className="ds-mock">
      <p className="ds-mock-head">Start chatting with Instant</p>
      <div className="ds-mock-toggles big">
        <span className="ds-tog on">DeepThink</span>
        <span className="ds-tog blue">Search</span>
      </div>
      <div className="ds-mock-box">Message DeepSeek</div>
    </div>
  );
}

export function DsMathReply() {
  return (
    <div className="ds-math">
      <p>
        The solution to the equation <strong>12 × 5 − x = 78</strong> is{" "}
        <strong>x = −18</strong>.
      </p>
      <p className="ds-math-brand">DeepSeek</p>
    </div>
  );
}

export function DsKeyPoints({ items }) {
  return (
    <div className="ds-keypoints">
      <p className="ds-keypoints-title">Puntos clave</p>
      <ul>
        {(items || []).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

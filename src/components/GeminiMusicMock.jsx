const menuItems = [
  { icon: "↑", label: "Upload files" },
  { icon: "▦", label: "Add from Drive" },
  { icon: "▣", label: "Show results" },
  { icon: "◐", label: "Create image" },
];

const styles = [
  { label: "90s rap", file: "tile-90s-rap.jpg" },
  { label: "Folk ballad", file: "tile-folk-ballad.jpg" },
  { label: "Lo-fi beat", file: "tile-lofi-beat.jpg" },
  { label: "Acoustic", file: "tile-acoustic.jpg" },
  { label: "Cinematic", file: "tile-cinematic.jpg" },
  { label: "Synthwave", file: "tile-synthwave.jpg" },
  { label: "Jazz club", file: "tile-jazz-club.jpg" },
  { label: "Gospel choir", file: "tile-gospel-choir.jpg" },
  { label: "Indie pop", file: "tile-indie-pop.jpg" },
  { label: "Hyperpop", file: "tile-hyperpop.jpg" },
  { label: "Piano ballad", file: "tile-piano-ballad.jpg" },
  { label: "Afrobeats", file: "tile-afrobeats.jpg" },
];

export function GeminiToolsMenu() {
  return (
    <figure className="lesson-figure">
      <div className="gm-dark">
        <p className="gm-q">What should we focus on?</p>
        <div className="gm-menu">
          {menuItems.map((item) => (
            <div key={item.label} className="gm-item">
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
          <div className="gm-item gm-item-hit">
            <span>♪</span> Create music
            <em>New</em>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function GeminiCreateMusicGrid() {
  return (
    <figure className="lesson-figure">
      <div className="gm-dark gm-create">
        <h3>Create music</h3>
        <p>Try a template or describe a track in chat. Created with Lyria.</p>
        <div className="gm-grid">
          {styles.map((style, i) => (
            <div key={style.label} className={`gm-tile${i === 1 ? " on" : ""}`}>
              <img src={`/lessons/gemini/music/tiles/${style.file}`} alt="" />
              <span>{style.label}</span>
            </div>
          ))}
        </div>
        <div className="gm-composer">
          <span>Describe your track</span>
          <button type="button" tabIndex={-1}>
            Create
          </button>
        </div>
      </div>
    </figure>
  );
}

from pathlib import Path

p = Path(r"d:\2026\CLONACIÓN CURSIV\src\lessons\gemini.js")
text = p.read_text(encoding="utf-8")
marker = '{ kind: "image", scene: "celebrate", caption: "Próximos pasos" },'
start = text.find(marker)
end = text.find("const promptsSteps = [")
print(start, end)
if start < 0 or end < 0:
    raise SystemExit("markers not found")
# keep celebrate block + closing ]; then promptsSteps
keep_head = text[:end]
# find the FIRST ]; after celebrate that closes musicaSteps
close = keep_head.find("];", start)
print("close", close, repr(keep_head[close : close + 20]))
new = text[: close + 2] + "\n\n" + text[end:]
p.write_text(new, encoding="utf-8")
print("ok", len(text), "->", len(new))

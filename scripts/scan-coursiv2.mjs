import fs from "fs";

const s = fs.readFileSync(process.env.TEMP + "\\coursiv.js", "utf8");
const start = s.indexOf("toolGuides:[{name:\"Claude\"");
console.log("start", start);
// find a broader catalog block
const idx = s.indexOf("storyId:\"designing-visuals\"");
console.log("designing", idx);

// dump a chunk of the program/guides config
const keys = ["toolGuides", "useCaseGuides", "storyId", "translationKey:\"claude\"", "name:\"Veo\"", "name:\"Omni\"", "name:\"ChatGPT: A fondo\"", "A fondo", "Claude Code", "Comunicaci"];
for (const k of keys) {
  let i = s.indexOf(k);
  console.log(k, i);
}

// extract all toolGuides name+description+translationKey
const re = /\{name:"([^"]+)",description:"([^"]+)",translationKey:"([^"]+)"\}/g;
const seen = new Map();
let m;
while ((m = re.exec(s))) {
  const key = m[1] + "|" + m[3];
  if (!seen.has(key)) seen.set(key, { name: m[1], description: m[2], key: m[3] });
}
console.log("\nALL TOOLS/GUIDES:");
for (const v of seen.values()) {
  console.log(`- ${v.name} [${v.key}]: ${v.description}`);
}

const storyRe = /storyId:"([^"]+)",title:"([^"]+)",planDescription:"([^"]+)"/g;
console.log("\nSTORIES:");
while ((m = storyRe.exec(s))) {
  console.log(`- ${m[1]} | ${m[2]} | ${m[3]}`);
}

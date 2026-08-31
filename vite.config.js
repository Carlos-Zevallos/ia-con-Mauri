import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { lyriaPlugin } from "./vite-plugin-lyria.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const key = env.GEMINI_API_KEY || env.GOOGLE_API_KEY || env.GOOGLE_GENAI_API_KEY;
  if (key) {
    process.env.GEMINI_API_KEY = key;
  }
  return {
    plugins: [react(), lyriaPlugin()],
    server: {
      port: 5173,
      host: true,
    },
  };
});

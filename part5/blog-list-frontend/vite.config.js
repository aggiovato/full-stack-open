import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3003",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@animations": path.resolve(__dirname, "./src/components/animations"),
      "@customs": path.resolve(__dirname, "./src/components/customs"),
      "@icons": path.resolve(__dirname, "./src/components/icons"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@data": path.resolve(__dirname, "./src/utils/data"),
      "@i18n": path.resolve(__dirname, "./src/i18n"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./testSetup.js",
  },
});

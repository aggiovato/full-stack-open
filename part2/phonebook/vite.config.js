import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@helpers": path.resolve(__dirname, "./src/utils/helpers.js"),
      "@data": path.resolve(__dirname, "./src/utils/data.json"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
});

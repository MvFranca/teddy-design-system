import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DesignSystemTeddy",
      fileName: (format) => `design-system-teddy.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-dom/client"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

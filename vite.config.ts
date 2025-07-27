import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "design_system",
      filename: "remoteEntry.js",
      exposes: {
        './theme': './src/themes/index.ts',
        './ThemeProvider': './src/hooks/ThemeProvider.tsx',
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
  },
});

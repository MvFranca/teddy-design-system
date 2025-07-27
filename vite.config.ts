import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import tailwindConfig from './tailwind.config';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(tailwindConfig),
    dts({
      insertTypesEntry: true,
    }),
    federation({
      name: "teddy_design_system",
      filename: "remoteEntry.js",
      exposes: {
        "./Theme": "./src/ThemeProvider",
        "./tokens": "./src/themes/index",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],

  server: {
    port: 3000,
  },

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    lib: {
      // Aqui é onde especificamos o ponto de entrada
      entry: resolve(__dirname, "src/index.ts"),
      name: "TeddyDesignSystem",
      formats: ["es", "umd"],
      fileName: (format) => `teddy-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});

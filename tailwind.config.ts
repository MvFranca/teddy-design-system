import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-main)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
          contrast: "var(--color-primary-contrast)",
        },
      },
      borderRadius: {
        md: "var(--radius-md)",
      },
    },
  },
  plugins: [],
};
export default config;

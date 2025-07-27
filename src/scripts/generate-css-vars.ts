// src/scripts/generate-css-vars.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { colors, radii } from "../themes/tokens";

// Criar __dirname no contexto ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function toKebabCase(key: string) {
  return key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

function flattenTokens(prefix: string, obj: any): Record<string, string> {
  const result: Record<string, string> = {};

  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);

    if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenTokens(newKey, value));
    } else {
      result[`--${newKey}`] = value;
    }
  }

  return result;
}

const cssVars = {
  ...flattenTokens("color", colors),
  ...flattenTokens("radius", radii),
};

let cssContent = `:root {\n`;
for (const key in cssVars) {
  cssContent += `  ${key}: ${cssVars[key]};\n`;
}
cssContent += `}\n`;

fs.writeFileSync(
  path.resolve(__dirname, "../styles/tokens.css"),
  cssContent
);

console.log("✅ CSS tokens generated.");

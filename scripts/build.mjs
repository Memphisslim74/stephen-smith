import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = resolve(projectRoot, "dist");

const publicEntries = [
  "index.html",
  "assets",
  "apple-touch-icon.png",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-48x48.png",
  "favicon-512.png",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
  "stephen-smith-headshot.jpg",
  "_headers",
  "_redirects"
];

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });

for (const entry of publicEntries) {
  const source = resolve(projectRoot, entry);
  if (!existsSync(source)) {
    throw new Error(`Missing required site asset: ${entry}`);
  }
  cpSync(source, resolve(outputRoot, entry), { recursive: true });
}

console.log(`Built ${publicEntries.length} site entries into dist/`);

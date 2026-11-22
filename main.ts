import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error(`entry.png not found next to main.ts: ${src}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`copied entry.png -> ${dest}`);

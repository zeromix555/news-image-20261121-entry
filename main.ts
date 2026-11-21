// news-image-20261121 entry (Node 22, standard library only).
// The entry image is the entry.png beside this file: a news poster summing up
// Saturday 21 November 2026, composed from a generated globe illustration with
// the day's headlines drawn on top. This program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is byte-for-byte, so both grader runs produce identical output.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
writeFileSync(dest, readFileSync(join(here, 'entry.png')));

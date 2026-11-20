// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the YouTube video itself, not this program: the house reads
// the video's views through the YouTube Data API. All this program does is
// hand the video's address over, by copying VIDEO.json from the repository
// root into the output directory, byte for byte. It makes no network calls,
// reads no clock, and touches no file outside the repository, so two runs
// always write the same bytes. A copy, not a re-encode or a re-serialise:
// what lands in /output is exactly what the repository holds, so the gate
// reads the same address the entrant wrote.
//
// Local check (the way the grader runs it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The published video (posted 2026-11-20, Public, channel Quotes_WD):
//   https://www.youtube.com/shorts/fEFA0v88250
// VIDEO.json in this repository names the same address.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const targetPath = join(OUTPUT_DIR, 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

let payload: Buffer;
try {
  payload = readFileSync(sourcePath);
} catch (err) {
  console.error(`cannot read VIDEO.json from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  writeFileSync(targetPath, payload);
} catch (err) {
  console.error(`cannot write VIDEO.json to ${targetPath}: ${(err as Error).message}`);
  process.exit(1);
}

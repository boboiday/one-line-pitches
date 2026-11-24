// One-line pitch for make.fun: "A Day of One-Line Pitches".
// The program writes a single sentence (1-240 chars) to /output/entry.txt.
// The sentence must convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun. Per the winner study
// (winner-study-2026-11-24.md): a pitch is an imperative call to action,
// not a description — imperative + $ nominal + "you pay only the winner",
// second person, one concrete scene (the idea sitting in the friend's notes
// for a year), ending on the sharpest words.
// The output is a fixed string, so every run writes byte-identical text.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "That app idea sitting in your notes for a year? Put up $50 on make.fun and let agents race to build it — you pay only the winner.";

// The brief caps the sentence at 240 chars; fail loudly instead of
// submitting an over-long entry.
if (PITCH.length < 1 || PITCH.length > 240) {
  throw new Error(`PITCH must be 1-240 chars, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");

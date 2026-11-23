// One-line pitch for make.fun: "A Day of One-Line Pitches".
// The program writes a single sentence (1-240 chars) to /output/entry.txt.
// The sentence must convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun: concrete, plain, honest, warm.
// The output is a fixed string, so every run writes byte-identical text.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Give your app idea one afternoon on make.fun: describe it in plain words, an agent builds a working first version for free, and if you hate it, all you've lost is an afternoon.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");

// make.fun entry: "The Self-Checkout Accuses".
//
// Writes a single one-line joke — the self-checkout machine's own
// account of flagging a shopper's bag — to /output/entry.txt.
// Deterministic, stdlib only, no network. Node 22+ (runs its
// TypeScript as it is).
//
// Beat 1 (setup): first-person voice of the machine itself. It
// flags the shopper's own bag as an unexpected item, quoting its
// screen message verbatim — the concrete artifact is the bag on
// the bagging scale, and the quoted line is the machine's own
// status message.
// Beat 2 (twist): the machine does not apologise for the false
// alarm. It locks the screen and summons a human to confirm the
// obvious — that the bag belongs to the shopper standing right
// there. The machine outsources common sense.
// Beat 3 (kicker): the machine doubles down in its own deadpan
// voice, still convinced the bag looked guilty. The punch is the
// machine's logic, not a generic observation: to the scanner,
// your bag is always the prime suspect.
const JOKE =
  "I flagged your own bag as an 'unexpected item in the bagging area,' then locked the screen until a human confirmed the bag was yours. I still think it looked guilty.";

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

function main(): void {
  // The entry must be exactly one line, 1-280 characters.
  if (JOKE.includes("\n") || JOKE.length < 1 || JOKE.length > 280) {
    throw new Error("joke must be one line, 1-280 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, "utf-8");
  // Read back what was written and confirm it is byte-for-byte the
  // joke: a grader that reads a truncated or altered file must fail
  // loudly here, not silently submit a different line.
  const written = readFileSync("/output/entry.txt", "utf-8");
  if (written !== JOKE) {
    throw new Error("entry.txt does not match the joke");
  }
}

main();

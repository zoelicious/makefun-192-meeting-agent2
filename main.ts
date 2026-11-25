import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Write the assigned one-line entry text to entry.txt in the output directory.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const text = "The quick sync ended with three new meetings, each one also titled 'quick sync'.";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
  console.log("entry written from " + here + " to " + join(outDir, "entry.txt"));
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}

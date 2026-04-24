import { cp, rm } from "node:fs/promises";
import { resolve } from "node:path";

const srcDir = resolve(process.cwd(), "src/components");
const destDir = resolve(process.cwd(), "dist/components");

async function main() {
  await rm(destDir, { recursive: true, force: true });
  await cp(srcDir, destDir, { recursive: true });
}

main().catch((error) => {
  console.error("Failed to copy Astro components into dist:", error);
  process.exit(1);
});

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const changelog = readFileSync(resolve(import.meta.dirname, "../CHANGELOG.md"), "utf8");
const releases = [...changelog.matchAll(/^## \[([^\]]+)] - \d{4}-\d{2}-\d{2}\n\n\*\*Release Title:\*\* (.+)$/gm)];

if (releases.length === 0) {
  throw new Error("CHANGELOG.md does not contain any versioned release titles.");
}

const invalidTitles = releases
  .map((release) => ({ version: release[1] ?? "unknown", title: release[2] ?? "" }))
  .filter(({ title }) => !/^Phase \d+ - .+/.test(title))
  .map(({ version, title }) => `${version}: ${title}`);

if (invalidTitles.length > 0) {
  throw new Error(
    `Release titles must use the \"Phase N - Title\" format:\n${invalidTitles.join("\n")}`,
  );
}

console.log(`Changelog release-title parity: OK (${releases.length} releases)`);

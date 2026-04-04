import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "..");
const examplesPagesDir = resolve(repoRoot, "examples/src/pages");
const srcDir = resolve(repoRoot, "src");

function extractSelfClosingSpInputTags(content: string) {
  return content.match(/<SpInput\b[\s\S]*?\/>/g) ?? [];
}

async function collectAstroFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".astro"))
    .map((entry) => resolve(entry.parentPath, entry.name));
}

async function collectSourceFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        (entry.name.endsWith(".astro") ||
          entry.name.endsWith(".ts") ||
          entry.name.endsWith(".tsx") ||
          entry.name.endsWith(".js") ||
          entry.name.endsWith(".mjs")),
    )
    .map((entry) => resolve(entry.parentPath, entry.name));
}

describe("docs and examples", () => {
  it("documents the stable-id requirement for associated SpInput usage", async () => {
    const readme = await readFile(resolve(repoRoot, "README.md"), "utf8");

    expect(readme).toContain("requires an explicit `id`");
  });

  it("keeps documented SpInput associations paired with explicit ids", async () => {
    const readme = await readFile(resolve(repoRoot, "README.md"), "utf8");
    const exampleFiles = await collectAstroFiles(examplesPagesDir);

    for (const [filePath, content] of [
      [resolve(repoRoot, "README.md"), readme],
      ...(
        await Promise.all(
          exampleFiles.map(async (path) => [path, await readFile(path, "utf8")] as const),
        )
      ),
    ]) {
      const tags = extractSelfClosingSpInputTags(content);

      for (const tag of tags) {
        const requiresStableId = /\b(label|helperText|errorMessage)\s*=/.test(tag);

        if (requiresStableId) {
          expect(tag, `Expected associated SpInput usage in ${filePath} to include id`).toMatch(
            /\bid\s*=/,
          );
        }
      }
    }
  });

  it("keeps adapter source free of package-owned CSS and local style blocks", async () => {
    const sourceFiles = await collectSourceFiles(srcDir);

    for (const filePath of sourceFiles) {
      const content = await readFile(filePath, "utf8");

      expect(content, `Expected ${filePath} to avoid local CSS imports`).not.toMatch(
        /import\s+["'][^"']+\.css["'];?/,
      );
      expect(content, `Expected ${filePath} to avoid local <style> blocks`).not.toContain(
        "<style",
      );
    }
  });
});

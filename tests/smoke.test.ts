import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import * as upstream from "@phcdevworks/spectre-ui";
import { describe, expect, it } from "vitest";

import contractJson from "../astro-adapter.contract.json";

const repoRoot = resolve(import.meta.dirname, "..");
const distDir = resolve(repoRoot, "dist");
const distComponentsDir = resolve(distDir, "components");

describe("built package smoke tests", () => {
  describe("dist artifacts", () => {
    it("produces dist/index.js", () => {
      expect(existsSync(resolve(distDir, "index.js")), "dist/index.js must exist after build").toBe(
        true,
      );
    });

    it("produces dist/index.d.ts", () => {
      expect(
        existsSync(resolve(distDir, "index.d.ts")),
        "dist/index.d.ts must exist after build",
      ).toBe(true);
    });

    it("produces dist/components/", () => {
      expect(
        existsSync(distComponentsDir),
        "dist/components/ must exist after build",
      ).toBe(true);
    });

    it("ships all contract component entrypoints in dist/components/", () => {
      for (const entrypoint of contractJson.componentEntrypoints as string[]) {
        const filename = entrypoint.replace("./components/", "");
        expect(
          existsSync(resolve(distComponentsDir, filename)),
          `Contract entrypoint missing from dist: ${entrypoint}`,
        ).toBe(true);
      }
    });

    it("dist component files are non-empty", () => {
      for (const entrypoint of contractJson.componentEntrypoints as string[]) {
        const filename = entrypoint.replace("./components/", "");
        const content = readFileSync(resolve(distComponentsDir, filename), "utf-8");
        expect(content.length, `dist/components/${filename} must not be empty`).toBeGreaterThan(0);
      }
    });

    it("dist/components/ contains no undeclared component files", () => {
      const contractEntrypoints = new Set(
        (contractJson.componentEntrypoints as string[]).map((ep) =>
          ep.replace("./components/", ""),
        ),
      );
      const distAstroFiles = readdirSync(distComponentsDir).filter((f) => f.endsWith(".astro"));

      const undeclared = distAstroFiles.filter((f) => !contractEntrypoints.has(f));
      expect(
        undeclared,
        `dist/components/ contains Astro files not declared in the contract: ${undeclared.join(", ")}`,
      ).toHaveLength(0);
    });
  });

  describe("dist/index.js exports", () => {
    it("exports all contract-declared components", async () => {
      const distModule = await import("../dist/index.js");
      for (const name of contractJson.rootExports.components as string[]) {
        expect(distModule, `dist/index.js must export component: ${name}`).toHaveProperty(name);
      }
    });

    it("exports all contract-declared recipe helpers", async () => {
      const distModule = await import("../dist/index.js");
      for (const name of contractJson.rootExports.recipeHelpers as string[]) {
        expect(distModule, `dist/index.js must export recipe helper: ${name}`).toHaveProperty(
          name,
        );
      }
    });

    it("passes recipe helper functions through from upstream without redefining", async () => {
      const distModule = await import("../dist/index.js");
      for (const name of contractJson.rootExports.recipeHelpers as string[]) {
        const upstreamValue = upstream[name as keyof typeof upstream];
        if (typeof upstreamValue === "function") {
          expect(
            distModule[name as keyof typeof distModule],
            `${name} must be the same reference as the upstream export`,
          ).toBe(upstreamValue);
        }
      }
    });
  });

  describe("dist/index.d.ts type declarations", () => {
    it("re-exports all contract-declared components", () => {
      const dts = readFileSync(resolve(distDir, "index.d.ts"), "utf-8");
      for (const name of contractJson.rootExports.components as string[]) {
        expect(dts, `dist/index.d.ts must re-export ${name}`).toContain(name);
      }
    });
  });
});

import { readdirSync } from "node:fs";
import { basename, resolve } from "node:path";

import * as upstream from "@phcdevworks/spectre-ui";
import { describe, expect, it } from "vitest";

import packageJson from "../package.json";
import * as adapter from "../src/index";

const repoRoot = resolve(import.meta.dirname, "..");
const componentsDir = resolve(repoRoot, "src/components");

const recipeRuntimeExports = [
  "getBadgeClasses",
  "getButtonClasses",
  "getCardClasses",
  "getIconBoxClasses",
  "getInputClasses",
  "getPricingCardBadgeClasses",
  "getPricingCardClasses",
  "getPricingCardDescriptionClasses",
  "getPricingCardPriceClasses",
  "getPricingCardPriceContainerClasses",
  "getRatingClasses",
  "getRatingStarClasses",
  "getRatingStarsClasses",
  "getRatingTextClasses",
  "getTestimonialAuthorClasses",
  "getTestimonialAuthorInfoClasses",
  "getTestimonialAuthorNameClasses",
  "getTestimonialAuthorTitleClasses",
  "getTestimonialClasses",
  "getTestimonialQuoteClasses",
] as const;

const componentFiles = readdirSync(componentsDir)
  .filter((fileName) => fileName.endsWith(".astro"))
  .sort();

const componentExportNames = componentFiles.map((fileName) => basename(fileName, ".astro"));

describe("package export surface", () => {
  it("keeps package.json component entry points aligned with actual Astro component files", () => {
    const exportKeys = Object.keys(packageJson.exports)
      .filter((key) => key.startsWith("./components/"))
      .sort();

    const expectedComponentKeys = componentFiles.map(
      (fileName) => `./components/${fileName}`,
    );

    expect(exportKeys).toEqual(expectedComponentKeys);
  });

  it("keeps the root runtime export surface intentional and stable", () => {
    const expectedRuntimeExports = [
      ...componentExportNames,
      ...recipeRuntimeExports,
    ].sort();

    expect(Object.keys(adapter).sort()).toEqual(expectedRuntimeExports);
  });

  it("passes upstream recipe helpers through without redefining them", () => {
    for (const exportName of recipeRuntimeExports) {
      expect(adapter[exportName]).toBe(upstream[exportName]);
    }
  });

  it("declares @phcdevworks/spectre-ui as the upstream peer contract", () => {
    expect(packageJson.peerDependencies["@phcdevworks/spectre-ui"]).toBe("^1.1.2");
    expect(packageJson.dependencies).not.toHaveProperty("@phcdevworks/spectre-ui");
  });
});

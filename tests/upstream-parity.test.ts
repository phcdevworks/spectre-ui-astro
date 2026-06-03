import { readdirSync } from "node:fs";
import { resolve } from "node:path";

import * as upstream from "@phcdevworks/spectre-ui";
import { describe, expect, it } from "vitest";

import contractJson from "../astro-adapter.contract.json";

const repoRoot = resolve(import.meta.dirname, "..");
const componentsDir = resolve(repoRoot, "src/components");

function camelToKebab(str: string): string {
  return str.replace(/([A-Z])/g, (_, c: string) => `-${c.toLowerCase()}`).replace(/^-/, "");
}

function deriveUpstreamFamilies(): string[] {
  const candidates = Object.keys(upstream)
    .filter((name) => /^get[A-Z]/.test(name) && name.endsWith("Classes"))
    .map((name) => camelToKebab(name.slice(3, -7)))
    .sort();

  return candidates.filter(
    (family) => !candidates.some((other) => other !== family && family.startsWith(`${other}-`)),
  );
}

function familyToComponentName(family: string): string {
  return "Sp" + family.split("-").map((part) => part[0]!.toUpperCase() + part.slice(1)).join("");
}

describe("upstream UI family parity", () => {
  it("declares all upstream recipe families in the contract", () => {
    const upstreamFamilies = deriveUpstreamFamilies();
    const declaredFamilies = new Set([
      ...(contractJson.componentFamilies.stable as string[]),
      ...(contractJson.componentFamilies.provisional as string[]),
      ...(contractJson.componentFamilies.notYetSupported as string[]),
    ]);

    const undeclared = upstreamFamilies.filter((f) => !declaredFamilies.has(f));
    expect(
      undeclared,
      `Upstream recipe families not declared in the contract. Add them to stable, provisional, or notYetSupported in astro-adapter.contract.json: ${undeclared.join(", ")}`,
    ).toHaveLength(0);
  });

  it("has no contract families absent from upstream", () => {
    const upstreamFamilies = new Set(deriveUpstreamFamilies());
    const stableAndProvisional = [
      ...(contractJson.componentFamilies.stable as string[]),
      ...(contractJson.componentFamilies.provisional as string[]),
    ];

    const orphaned = stableAndProvisional.filter((f) => !upstreamFamilies.has(f));
    expect(
      orphaned,
      `Contract declares stable/provisional families with no upstream recipe: ${orphaned.join(", ")}`,
    ).toHaveLength(0);
  });

  it("provides an Astro component for every stable contract family", () => {
    const componentFiles = readdirSync(componentsDir)
      .filter((f) => f.endsWith(".astro"))
      .map((f) => f.replace(".astro", ""));

    for (const family of contractJson.componentFamilies.stable as string[]) {
      const componentName = familyToComponentName(family);
      expect(
        componentFiles,
        `Stable family "${family}" is declared in the contract but has no Astro component: ${componentName}.astro`,
      ).toContain(componentName);
    }
  });

  it("does not ship Astro components for not-yet-supported families", () => {
    const componentFiles = readdirSync(componentsDir)
      .filter((f) => f.endsWith(".astro"))
      .map((f) => f.replace(".astro", ""));

    for (const family of contractJson.componentFamilies.notYetSupported as string[]) {
      const componentName = familyToComponentName(family);
      expect(
        componentFiles,
        `"${family}" is listed as notYetSupported but ${componentName}.astro exists. Move it to stable or provisional.`,
      ).not.toContain(componentName);
    }
  });
});

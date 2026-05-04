import { existsSync, readdirSync } from "node:fs";
import { basename, resolve } from "node:path";

import packageJson from "../package.json" with { type: "json" };

const repoRoot = resolve(import.meta.dirname, "..");

function collectRuntimeExportPaths(exportsField) {
  const runtimePaths = new Set();

  for (const exportValue of Object.values(exportsField)) {
    if (typeof exportValue === "string") {
      runtimePaths.add(exportValue);
      continue;
    }

    for (const [condition, targetPath] of Object.entries(exportValue)) {
      if (condition !== "types") {
        runtimePaths.add(targetPath);
      }
    }
  }

  return [...runtimePaths].sort();
}

function assertPublishedPathsExist(paths, label) {
  const missingPaths = paths.filter((targetPath) => !existsSync(resolve(repoRoot, targetPath)));

  if (missingPaths.length > 0) {
    throw new Error(
      `Missing published ${label} path(s): ${missingPaths.join(", ")}`,
    );
  }
}

function assertCopiedAstroComponentsExist() {
  const srcComponentsDir = resolve(repoRoot, "src/components");
  const distComponentsDir = resolve(repoRoot, "dist/components");

  const sourceComponentFiles = readdirSync(srcComponentsDir)
    .filter((fileName) => fileName.endsWith(".astro"))
    .sort();

  const distComponentFiles = readdirSync(distComponentsDir)
    .filter((fileName) => fileName.endsWith(".astro"))
    .sort();

  if (sourceComponentFiles.length !== distComponentFiles.length) {
    throw new Error(
      `dist/components Astro file count mismatch. Expected ${sourceComponentFiles.length}, received ${distComponentFiles.length}.`,
    );
  }

  for (const fileName of sourceComponentFiles) {
    const distPath = resolve(distComponentsDir, fileName);

    if (!existsSync(distPath)) {
      throw new Error(`Missing copied Astro component in dist/components: ${fileName}`);
    }
  }

  const srcComponentBasenames = sourceComponentFiles.map((fileName) => basename(fileName));
  const distComponentBasenames = distComponentFiles.map((fileName) => basename(fileName));

  if (srcComponentBasenames.join("|") !== distComponentBasenames.join("|")) {
    throw new Error(
      `dist/components Astro files drifted from src/components. Expected ${srcComponentBasenames.join(", ")}, received ${distComponentBasenames.join(", ")}.`,
    );
  }
}

const runtimePaths = collectRuntimeExportPaths(packageJson.exports);
const typePaths = [packageJson.types];
const mainPaths = [packageJson.main];
const upstreamContractPackage = "@phcdevworks/spectre-ui";
const upstreamPeerRange = packageJson.peerDependencies?.[upstreamContractPackage];
const astroHostPackage = "astro";
const astroPeerRange = packageJson.peerDependencies?.[astroHostPackage];

if ("module" in packageJson) {
  throw new Error("package.json should not declare a separate module field for this ESM-only package.");
}

if ("require" in packageJson.exports["."]) {
  throw new Error('package.json exports["."] must not advertise a CommonJS require entrypoint.');
}

if (packageJson.main !== "./dist/index.js") {
  throw new Error(`package.json main must point to ./dist/index.js, received ${packageJson.main}`);
}

if (packageJson.types !== "./dist/index.d.ts") {
  throw new Error(`package.json types must point to ./dist/index.d.ts, received ${packageJson.types}`);
}

if (packageJson.dependencies?.[upstreamContractPackage]) {
  throw new Error(`${upstreamContractPackage} must not be published as a direct runtime dependency.`);
}

if (packageJson.dependencies?.[astroHostPackage]) {
  throw new Error(`${astroHostPackage} must not be published as a direct runtime dependency for this Astro adapter.`);
}

if (typeof upstreamPeerRange !== "string" || upstreamPeerRange.length === 0) {
  throw new Error(`${upstreamContractPackage} must be declared explicitly in peerDependencies.`);
}

if (typeof astroPeerRange !== "string" || astroPeerRange.length === 0) {
  throw new Error(`${astroHostPackage} must be declared explicitly in peerDependencies.`);
}

assertPublishedPathsExist(runtimePaths, "runtime export");
assertPublishedPathsExist(typePaths, "types");
assertPublishedPathsExist(mainPaths, "main");
assertCopiedAstroComponentsExist();

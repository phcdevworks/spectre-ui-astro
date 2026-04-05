import { existsSync } from "node:fs";
import { resolve } from "node:path";

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

const runtimePaths = collectRuntimeExportPaths(packageJson.exports);
const typePaths = [packageJson.types];
const mainPaths = [packageJson.main];
const upstreamContractPackage = "@phcdevworks/spectre-ui";
const upstreamPeerRange = packageJson.peerDependencies?.[upstreamContractPackage];

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

if (typeof upstreamPeerRange !== "string" || upstreamPeerRange.length === 0) {
  throw new Error(`${upstreamContractPackage} must be declared explicitly in peerDependencies.`);
}

if (packageJson.devDependencies?.[upstreamContractPackage] !== upstreamPeerRange) {
  throw new Error(`${upstreamContractPackage} devDependency must stay aligned with the published peer dependency range.`);
}

assertPublishedPathsExist(runtimePaths, "runtime export");
assertPublishedPathsExist(typePaths, "types");
assertPublishedPathsExist(mainPaths, "main");

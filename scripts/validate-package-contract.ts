import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';

import contractJson from '../astro-adapter.contract.json' with { type: 'json' };
import packageJson from '../package.json' with { type: 'json' };

type ExportValue = string | Record<string, string>;

const repoRoot = resolve(import.meta.dirname, '..');

function collectRuntimeExportPaths(exportsField: Record<string, ExportValue>): string[] {
  const runtimePaths = new Set<string>();

  for (const exportValue of Object.values(exportsField)) {
    if (typeof exportValue === 'string') {
      runtimePaths.add(exportValue);
      continue;
    }

    for (const [condition, targetPath] of Object.entries(exportValue)) {
      if (condition !== 'types') {
        runtimePaths.add(targetPath);
      }
    }
  }

  return [...runtimePaths].sort();
}

function assertPublishedPathsExist(paths: string[], label: string): void {
  const missingPaths = paths.filter((targetPath) => !existsSync(resolve(repoRoot, targetPath)));

  if (missingPaths.length > 0) {
    throw new Error(`Missing published ${label} path(s): ${missingPaths.join(', ')}`);
  }
}

function assertCopiedAstroComponentsExist(): void {
  const srcComponentsDir = resolve(repoRoot, 'src/components');
  const distComponentsDir = resolve(repoRoot, 'dist/components');

  const sourceComponentFiles = readdirSync(srcComponentsDir)
    .filter((fileName) => fileName.endsWith('.astro'))
    .sort();

  const distComponentFiles = readdirSync(distComponentsDir)
    .filter((fileName) => fileName.endsWith('.astro'))
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

  if (srcComponentBasenames.join('|') !== distComponentBasenames.join('|')) {
    throw new Error(
      `dist/components Astro files drifted from src/components. Expected ${srcComponentBasenames.join(', ')}, received ${distComponentBasenames.join(', ')}.`,
    );
  }
}

function assertContractComponentEntrypointParity(exportsMap: Record<string, ExportValue>): void {
  const contractEntrypoints = new Set(contractJson.componentEntrypoints as string[]);
  const packageEntrypoints = new Set(Object.keys(exportsMap).filter((key) => key !== '.'));

  const missing = [...contractEntrypoints].filter((ep) => !packageEntrypoints.has(ep));
  if (missing.length > 0) {
    throw new Error(
      `Component entrypoints declared in contract but missing from package.json exports: ${missing.join(', ')}`,
    );
  }

  const undeclared = [...packageEntrypoints].filter((ep) => !contractEntrypoints.has(ep));
  if (undeclared.length > 0) {
    throw new Error(
      `Component entrypoints in package.json exports not declared in contract: ${undeclared.join(', ')}`,
    );
  }
}

function assertContractRootExportParity(): void {
  const indexSource = readFileSync(resolve(repoRoot, 'src/index.ts'), 'utf-8');
  const recipesSource = readFileSync(resolve(repoRoot, 'src/recipes/index.ts'), 'utf-8');

  const missingComponents = (contractJson.rootExports.components as string[]).filter(
    (name) => !indexSource.includes(name),
  );
  if (missingComponents.length > 0) {
    throw new Error(
      `Components declared in contract but missing from src/index.ts: ${missingComponents.join(', ')}`,
    );
  }

  const allDeclaredHelpers = [
    ...(contractJson.rootExports.recipeHelpers as string[]),
    ...(contractJson.rootExports.typeExports as string[]),
  ];
  const missingHelpers = allDeclaredHelpers.filter((name) => !recipesSource.includes(name));
  if (missingHelpers.length > 0) {
    throw new Error(
      `Recipe helpers/types declared in contract but missing from src/recipes/index.ts: ${missingHelpers.join(', ')}`,
    );
  }
}

function assertThinAdapterInvariants(): void {
  const srcComponentsDir = resolve(repoRoot, 'src/components');
  const astroFiles = readdirSync(srcComponentsDir).filter((f) => f.endsWith('.astro'));

  for (const file of astroFiles) {
    const source = readFileSync(resolve(srcComponentsDir, file), 'utf-8');

    if (/<style[\s>]/i.test(source)) {
      throw new Error(
        `Thin-adapter violation in ${file}: <style> block found. CSS ownership must stay with @phcdevworks/spectre-ui.`,
      );
    }

    if (/--[\w-]+\s*:/.test(source)) {
      throw new Error(
        `Thin-adapter violation in ${file}: CSS custom property definition found. Token definitions must stay upstream.`,
      );
    }
  }
}

const exportsField = packageJson.exports as Record<string, ExportValue>;
const runtimePaths = collectRuntimeExportPaths(exportsField);
const typePaths = [packageJson.types];
const mainPaths = [packageJson.main];
const upstreamContractPackage = '@phcdevworks/spectre-ui';
const upstreamPeerRange = (packageJson.peerDependencies as Record<string, string> | undefined)?.[upstreamContractPackage];
const astroHostPackage = 'astro';
const astroPeerRange = (packageJson.peerDependencies as Record<string, string> | undefined)?.[astroHostPackage];

if ('module' in packageJson) {
  throw new Error('package.json should not declare a separate module field for this ESM-only package.');
}

if ('require' in (exportsField['.'] as Record<string, string>)) {
  throw new Error('package.json exports["."] must not advertise a CommonJS require entrypoint.');
}

if (packageJson.main !== './dist/index.js') {
  throw new Error(`package.json main must point to ./dist/index.js, received ${packageJson.main}`);
}

if (packageJson.types !== './dist/index.d.ts') {
  throw new Error(`package.json types must point to ./dist/index.d.ts, received ${packageJson.types}`);
}

const deps = (packageJson as { dependencies?: Record<string, string> }).dependencies ?? {};
if (deps[upstreamContractPackage]) {
  throw new Error(`${upstreamContractPackage} must not be published as a direct runtime dependency.`);
}

if (deps[astroHostPackage]) {
  throw new Error(`${astroHostPackage} must not be published as a direct runtime dependency for this Astro adapter.`);
}

if (typeof upstreamPeerRange !== 'string' || upstreamPeerRange.length === 0) {
  throw new Error(`${upstreamContractPackage} must be declared explicitly in peerDependencies.`);
}

if (typeof astroPeerRange !== 'string' || astroPeerRange.length === 0) {
  throw new Error(`${astroHostPackage} must be declared explicitly in peerDependencies.`);
}

assertPublishedPathsExist(runtimePaths, 'runtime export');
assertPublishedPathsExist(typePaths, 'types');
assertPublishedPathsExist(mainPaths, 'main');
assertCopiedAstroComponentsExist();
assertContractComponentEntrypointParity(exportsField);
assertContractRootExportParity();
assertThinAdapterInvariants();

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import contractJson from '../astro-adapter.contract.json' with { type: 'json' };
import packageJson from '../package.json' with { type: 'json' };

const repoRoot = resolve(import.meta.dirname, '..');
const readme = readFileSync(resolve(repoRoot, 'README.md'), 'utf-8');

function assertContains(text: string, errorMessage: string): void {
  if (!readme.includes(text)) {
    throw new Error(errorMessage);
  }
}

for (const componentName of contractJson.rootExports.components as string[]) {
  assertContains(
    `### ${componentName}`,
    `README.md is missing a section for component: ${componentName}. Add a "### ${componentName}" heading.`,
  );
}

assertContains(
  '@phcdevworks/spectre-ui/index.css',
  'README.md is missing the upstream CSS import guidance (@phcdevworks/spectre-ui/index.css).',
);

assertContains(
  '@phcdevworks/spectre-ui',
  'README.md must document the @phcdevworks/spectre-ui peer dependency.',
);

assertContains(
  '## Recipe helpers',
  'README.md must include a "## Recipe helpers" section documenting re-exported helpers.',
);

assertContains(
  '## Component family stability',
  'README.md must include a "## Component family stability" section aligned with the contract.',
);

for (const family of contractJson.componentFamilies.stable as string[]) {
  assertContains(
    `| ${family} |`,
    `README.md component family stability table is missing an entry for the stable family: "${family}".`,
  );
}

for (const family of contractJson.componentFamilies.notYetSupported as string[]) {
  assertContains(
    `| ${family} |`,
    `README.md component family stability table is missing an entry for the not-yet-supported family: "${family}".`,
  );
}

const versionMatch = readme.match(/\|\s*Current version\/status\s*\|\s*([^\s|]+)\s*\|/i);
if (!versionMatch) {
  throw new Error(
    'README.md is missing the "Current version/status" row in the Repository Snapshot table.',
  );
}
if (versionMatch[1] !== packageJson.version) {
  throw new Error(
    `README.md "Current version/status" is "${versionMatch[1]}" but package.json version is "${packageJson.version}".`,
  );
}

console.log('README contract parity: OK');

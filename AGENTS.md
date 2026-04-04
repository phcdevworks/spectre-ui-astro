# Spectre UI Astro Agent Guide

This repository is maintained by PHCDevworks and is the Astro adapter package
for the Spectre system.

## Mission

Deliver the upstream Spectre UI contract through Astro-native components while
keeping the adapter thin, SSR-friendly, type-safe, and strictly downstream of
the core Spectre layers.

## Core Rules

1. Use `@phcdevworks/spectre-ui` recipes, classes, and styles as the source of
   truth.
2. Do not introduce token definitions, package-owned CSS, or package-owned core
   styling logic here.
3. Do not re-implement upstream recipe logic when the contract already exists in
   `@phcdevworks/spectre-ui`.
4. Keep Astro components thin, type-safe, SSR-friendly, and
   framework-appropriate.
5. Mirror upstream recipe capabilities instead of drifting from them with
   adapter-specific variants, semantics, or styling behavior.
6. Keep the public export surface intentional, minimal, and aligned with actual
   Astro delivery needs.
7. Treat this package as the reference adapter pattern for future Spectre
   framework adapters.
8. Validate examples, exports, and types whenever component APIs change.

## Working Boundaries

- Token meaning belongs in `@phcdevworks/spectre-tokens`.
- Core CSS, utilities, Tailwind helpers, class recipes, and shared styling logic
  belong in `@phcdevworks/spectre-ui`.
- Astro-native component delivery, slot structure, prop ergonomics, and SSR-safe
  framework integration belong here.
- This package binds upstream contracts for Astro consumption; it does not
  redefine design ownership.
- Treat `@phcdevworks/spectre-ui` as a required upstream peer contract, not a
  convenience layer to mirror more broadly than Astro delivery requires.

## Implementation Guardrails

- Prefer thin wrappers over adapter-owned abstractions.
- Keep prop APIs closely mapped to upstream recipe options where practical.
- If Astro requires adapter-specific behavior, keep it additive and clearly
  scoped to framework ergonomics rather than design logic.
- If an upstream contract is missing or insufficient, fix it upstream or flag it
  explicitly instead of patching around it locally.
- Do not add package-owned CSS files, `<style>` blocks, token aliases, or local
  utility/class systems under `src/`.
- Examples and docs must reflect real exports and supported usage only.

## Validation Flow

1. Update Astro components, exports, or adapter docs.
2. Run `npm run build`.
3. Run `npm run typecheck`.
4. Run `npm test`.
5. Verify examples still match the actual public API.

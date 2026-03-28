# Spectre UI Astro Agent Guide

This repository is maintained by PHCDevworks and is the Astro adapter package
for the Spectre system.

## Mission

Deliver the upstream Spectre UI contract through Astro-native components while
keeping the adapter thin, SSR-friendly, and strictly downstream of the core
Spectre layers.

## Core Rules

1. Use `@phcdevworks/spectre-ui` recipes and styles as the source of truth.
2. Do not introduce token definitions, package-owned CSS, or package-owned core
   styling logic here.
3. Keep Astro components type-safe, SSR-friendly, and framework-appropriate.
4. Mirror upstream recipe capabilities instead of drifting from them.
5. Treat this package as the reference adapter pattern for future Spectre
   framework adapters.
6. Validate examples, exports, and types whenever component APIs change.

## Working Boundaries

- Token meaning belongs in `@phcdevworks/spectre-tokens`.
- Core CSS, utilities, Tailwind helpers, and recipe logic belong in
  `@phcdevworks/spectre-ui`.
- Astro-native component delivery and framework ergonomics belong here.
- This package binds upstream contracts for Astro consumption; it does not
  redefine design ownership.

## Validation Flow

1. Update Astro components or adapter docs.
2. Run `npm run build`.
3. Run `npm run typecheck`.

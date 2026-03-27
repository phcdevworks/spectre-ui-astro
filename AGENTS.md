# Spectre UI Astro Agent Guide

This repository is maintained by PHCDevworks and represents Layer 3 of the
Spectre suite.

## Mission

Expose Spectre UI through Astro-native components while keeping the adapter thin
and aligned with the upstream UI contract.

## Core Rules

1. Use `@phcdevworks/spectre-ui` recipes and styles as the source of truth.
2. Do not introduce token definitions or package-owned CSS here.
3. Keep props type-safe, SSR-friendly, and framework-appropriate.
4. Mirror upstream recipe capabilities instead of drifting from them.
5. Validate examples and types whenever component APIs change.

## Working Boundaries

- Token meaning belongs in `@phcdevworks/spectre-tokens`.
- UI structure belongs in `@phcdevworks/spectre-ui`.
- Astro delivery belongs here.

## Validation Flow

1. Update Astro components or adapter docs.
2. Run `npm run build`.
3. Run `npm run typecheck`.

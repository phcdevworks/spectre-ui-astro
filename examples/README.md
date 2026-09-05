# spectre-ui-astro examples

This directory contains a demo Astro application used for CI build validation and manual verification of `@phcdevworks/spectre-ui-astro`.

## Purpose

The examples app demonstrates consumption of the adapter's published contract through root package imports and recipe helpers. CI builds it against the local adapter on every supported Node matrix entry. It is a validation surface for contributors, not a canonical reference.

## Boundary rules

- **Not a contract authority.** The examples app does not define, extend, or override the adapter's public API. The authoritative contract is `astro-adapter.contract.json` together with `src/index.ts` and `package.json` exports.
- **Stable components only.** Examples must only import and use components and helpers declared as `stable` in `astro-adapter.contract.json`. Do not demonstrate provisional or not-yet-supported families as if they were part of the public API.
- **No local styling.** The examples app may use Spectre layout utilities and design tokens for page layout, but must not introduce CSS that belongs to `@phcdevworks/spectre-ui`.
- **Peer version alignment.** The `@phcdevworks/spectre-ui` dependency in `examples/package.json` must match the peer range declared in the root `package.json`. This is validated by `tests/docs-examples.test.ts`.

## Setup

```bash
# Build the adapter from the repository root first
npm run build
cd examples
npm install --package-lock=false
npm run dev
```

The examples app depends on the adapter package via a local `file:..` link. Rebuild the parent package after source changes, and rerun `npm install --package-lock=false` when dependencies change. Do not use `npm ci` or track an example lockfile for this local-link setup.

## Commands

| Command           | Purpose                                  |
|-------------------|------------------------------------------|
| `npm run dev`     | Start local dev server at localhost:4321 |
| `npm run build`   | Build the static site to `./dist/`       |
| `npm run preview` | Preview the production build             |

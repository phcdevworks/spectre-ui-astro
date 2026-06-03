# spectre-ui-astro examples

This directory contains a demo Astro application used for manual verification of `@phcdevworks/spectre-ui-astro`.

## Purpose

The examples app demonstrates correct consumption of the adapter's published contract: root package imports, direct component entrypoints, and recipe helper usage. It exists as a manual validation surface for contributors, not as a canonical reference.

## Boundary rules

- **Not a contract authority.** The examples app does not define, extend, or override the adapter's public API. The authoritative contract is `astro-adapter.contract.json` together with `src/index.ts` and `package.json` exports.
- **Stable components only.** Examples must only import and use components and helpers declared as `stable` in `astro-adapter.contract.json`. Do not demonstrate provisional or not-yet-supported families as if they were part of the public API.
- **No local styling.** The examples app may use Spectre layout utilities and design tokens for page layout, but must not introduce CSS that belongs to `@phcdevworks/spectre-ui`.
- **Peer version alignment.** The `@phcdevworks/spectre-ui` dependency in `examples/package.json` must match the peer range declared in the root `package.json`. This is validated by `tests/docs-examples.test.ts`.

## Setup

```bash
# From the examples/ directory
npm install
npm run dev
```

The examples app depends on the adapter package via a local `file:..` link. Run `npm install` (not `npm ci`) after changes to the parent package.

## Commands

| Command           | Purpose                                  |
|-------------------|------------------------------------------|
| `npm run dev`     | Start local dev server at localhost:4321 |
| `npm run build`   | Build the static site to `./dist/`       |
| `npm run preview` | Preview the production build             |

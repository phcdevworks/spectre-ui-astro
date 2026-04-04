# Contributing to @phcdevworks/spectre-ui-astro

Thanks for helping improve Spectre. This package is maintained by PHCDevworks
as Layer 3 of the Spectre suite. It exposes Spectre UI through Astro-native
components without duplicating design tokens or CSS logic.

## Spectre Suite Model

Spectre is organized as a strict layered system:

### Layer 1: `@phcdevworks/spectre-tokens`

- Purpose: define semantic design values and token contracts

### Layer 2: `@phcdevworks/spectre-ui`

- Purpose: translate tokens into reusable CSS, utilities, and recipes

### Layer 3: `@phcdevworks/spectre-ui-astro`

- Purpose: adapt Spectre UI for Astro
- Scope: Astro components, type-safe props, framework integration patterns

The rule across the suite is simple: tokens define meaning, UI defines
structure, adapters define delivery.

## Development Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run `npm run build`.
4. Run `npm run typecheck`.
5. Run `npm test`.
6. If needed, validate behavior in the `examples/` app.

`@phcdevworks/spectre-ui` is a required peer dependency for consumers and
should remain the source of truth for shared recipes, classes, and CSS.

## Project Structure

- `src/components/`: Astro components
- `src/recipes/`: recipe and type re-exports
- `examples/`: Astro example app for manual verification
- `dist/`: generated package output

## Contribution Guidelines

### Adapter responsibilities

1. Keep components thin and recipe-driven.
2. Do not introduce token definitions or new CSS in this package.
3. Prefer deriving prop types from `@phcdevworks/spectre-ui`.
4. Preserve SSR safety and semantic HTML.
5. Keep adapter behavior aligned with upstream Spectre UI contracts.

### Code and tooling

- Follow Astro and TypeScript best practices.
- Run `npm run build` for distributable output.
- Run `npm run typecheck` before opening a pull request.
- Run `npm test` to catch export drift, SSR regressions, and doc/example mismatch.
- Use the example app when you need to verify rendering behavior manually.

### Documentation

- Update [README.md](README.md) when component APIs or usage guidance change.
- Keep wording aligned with the rest of the Spectre suite and PHCDevworks
  ownership.

## Pull Request Checklist

1. Keep the change focused.
2. Run `npm run build`.
3. Run `npm run typecheck`.
4. Run `npm test`.
5. Verify the example app if the change affects rendering or component props.
6. Update docs if public behavior or guidance changed.

## Questions

Open an issue or discussion in this repository if you want feedback before
making a larger adapter change.

## Code of Conduct

By participating in this project, you agree to follow the
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the
MIT License.

# Contributing to @phcdevworks/spectre-ui-astro

Thanks for helping improve Spectre. This package is maintained by PHCDevworks as
Layer 4 of the Spectre suite. It exposes Spectre UI through Astro-native
components without duplicating design tokens or CSS logic.

## Spectre Suite Model

Spectre is organized as a strict layered system:

### Layer 1: `@phcdevworks/spectre-tokens`

- Purpose: define semantic design values and token contracts

### Layer 2: `@phcdevworks/spectre-ui`

- Purpose: translate tokens into reusable CSS, utilities, and recipes

### Layer 3: `@phcdevworks/spectre-components`

- Purpose: provide framework-agnostic Lit web component behavior

### Layer 4: `@phcdevworks/spectre-ui-astro`

- Purpose: adapt Spectre UI for Astro
- Scope: Astro components, type-safe props, framework integration patterns

The rule across the suite is simple: tokens define meaning, UI defines
structure, adapters define delivery.

## Development Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run `npm run check` to confirm everything builds, type-checks, and tests
   cleanly before making changes.
4. If needed, validate rendering in the `examples/` app by running
   `npm install && npm run build` from within `examples/`.

`@phcdevworks/spectre-ui` is a required peer dependency for consumers and should
remain the source of truth for shared recipes, classes, and CSS.

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
- Run `npm run check` before opening a pull request — it runs lint, build,
  typecheck, and tests in sequence and is the single CI gate.
- Use the example app when you need to verify rendering behavior manually.

### Documentation

- Update [README.md](README.md) when component APIs or usage guidance change.
- Keep wording aligned with the rest of the Spectre suite and PHCDevworks
  ownership.

## Contract-Impacting Changes

Any change that touches a public API surface requires explicit classification
before review. Public surfaces include Astro component exports, prop behavior,
SSR rendering invariants, `src/index.ts`, `package.json` exports, README
examples, tests, examples, and generated package output.

Step-by-step checklist:

1. Identify the change classification: `additive`, `semantic change`,
   `breaking`, or `N/A`.
2. Update source, tests, README examples, examples, package exports, and
   `CHANGELOG.md [Unreleased]` together.
3. Confirm no local tokens, CSS ownership, Tailwind helpers, or recipe
   reimplementations were added.
4. Regenerate package output with `npm run build` if exports or output changed.
5. Run the full validation command:

   ```bash
   npm run check
   ```

6. Stop for Bradley Potts approval before weakening SSR safety, changing peer
   dependency classification, or making a breaking adapter contract change.

## Pull Request Checklist

1. Keep the change focused.
2. Run `npm run check` — lint, build, typecheck, and tests must all pass.
3. Verify the example app if the change affects rendering or component props.
4. Update `README.md`, `CHANGELOG.md`, and relevant doc files if public behavior
   or guidance changed.

## Questions

Open an issue or discussion in this repository if you want feedback before
making a larger adapter change.

## Code of Conduct

By participating in this project, you agree to follow the
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the
MIT License.

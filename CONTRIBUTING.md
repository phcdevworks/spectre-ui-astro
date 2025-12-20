# Contributing to @phcdevworks/spectre-ui-astro

Thank you for your interest in contributing to Spectre UI Astro!

## Spectre Design System Non-Negotiables (Authoritative)

Spectre is a specification-driven design system with three strict layers. Keep these in mind for any contribution so responsibilities never blur.

### 1. @phcdevworks/spectre-tokens (Foundation, Source of Truth)

- Purpose: single source of truth for design values (colors, surfaces, text roles, spacing, radii, shadows, etc.).
- Exports: CSS variables (`--sp-*`), TypeScript token object, Tailwind-compatible theme mappings.
- Rules: tokens define meaning, not UI behavior; UI must never invent new colors; tokens may provide fallbacks but semantics live here.
- Status: v0.1.0 released with stable semantic roles (surface._, text._, component.\*) and considered correct/locked.

### 2. @phcdevworks/spectre-ui (Framework-Agnostic UI Layer)

- Purpose: converts tokens into real CSS and class recipes.
- Ships: `index.css` (canonical CSS bundle: tokens + base + components + utilities), `base.css` (resets + globals), `components.css` (.sp-btn, .sp-card, .sp-input, etc.), `utilities.css` (.sp-stack, .sp-container, etc.).
- Provides recipes: `getButtonClasses`, `getCardClasses`, `getInputClasses`.
- Rules: UI must consume tokens, not redefine design values; literal values in CSS are fallbacks only; every CSS selector has a matching recipe where applicable; Tailwind preset is optional and non-authoritative.
- Status: v0.1.0 released, hardened and aligned to tokens (no badge or iconbox primitives yet).

### 3. @phcdevworks/spectre-ui-astro (Adapter/Wrapper Only)

- Purpose: thin Astro wrapper around spectre-ui; imports class recipes and outputs correct HTML + classes; exposes a single CSS entry constant.
- Canonical CSS entry: `export const SPECTRE_UI_CSS = "@phcdevworks/spectre-ui/index.css";`
- Astro layout usage: `<link rel="stylesheet" href={SPECTRE_UI_CSS} />`
- Rules: Astro never loads tokens directly, never defines styles, never duplicates CSS; Astro components are HTML + classes only.
- Status: v0.1.0 released with `<SpButton />`, `<SpCard />`, `<SpInput />`; packaging bugs fixed (dist paths, exports).

### Known Gaps (Not Done Yet)

- Badge primitive and IconBox primitive (and their recipes/CSS/Astro wrappers) were intentionally not part of v0.1.0.

### What Needs to Happen Next

- Spectre UI: add CSS primitives (`.sp-badge`, `.sp-iconbox`), variants/sizes, class recipes (`getBadgeClasses()`, `getIconBoxClasses()`), exports (`src/recipes/index.ts`, `src/index.ts`), and tests (class string correctness, CSS selector existence).
- Spectre UI Astro: add wrappers (`<SpBadge />`, `<SpIconBox />`), ensure components copy to `dist`, exports resolve cleanly, and no CSS logic is added.

### Golden Rule (Non-Negotiable)

Tokens define meaning. UI defines structure. Adapters only translate. If a value looks like design, it belongs in tokens. If it is a class, it belongs in spectre-ui. If it is markup, it belongs in Astro.

## Development Setup

1. Clone the repository:

```bash
git clone https://github.com/phcdevworks/spectre-ui-astro.git
cd spectre-ui-astro
```

2. Install dependencies:

```bash
npm install
```

3. Build the package:

```bash
npm run build
```

4. Run type checking:

```bash
npm run typecheck
```

## Project Structure

- `src/components/` - Astro component implementations
- `src/types/` - TypeScript type definitions
- `src/index.ts` - Main entry point with exports
- `dist/` - Built output (generated)

## Guidelines

### Component Development

1. **No style reimplementation**: Always use `@phcdevworks/spectre-ui` for styling
2. **Use recipes**: Import and use functions like `getButtonClasses`, `getCardClasses`, etc.
3. **Type safety**: All props must be fully typed
4. **Accessibility**: Include proper ARIA attributes
5. **SSR compatibility**: Ensure components work server-side

### Code Style

- Use TypeScript for type definitions
- Follow existing code formatting
- Document props with JSDoc comments
- Keep components minimal and focused

### Testing

Before submitting a PR:

1. Ensure `npm run build` completes without errors
2. Run `npm run typecheck` to verify types
3. Test in an actual Astro project

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Update documentation if needed
4. Submit a PR with a clear description

## Questions?

Open an issue on GitHub or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

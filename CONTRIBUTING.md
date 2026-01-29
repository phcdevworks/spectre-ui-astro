# Contributing to Spectre UI Astro

Thanks for helping improve Spectre UI Astro! This package is an Astro adapter that wraps the Spectre UI design system into ergonomic Astro components. It ensures Astro users can leverage the Spectre Design System without manually managing CSS classes or imports.

## Spectre Design Philosophy

Spectre is a **specification-driven design system** built on three strict layers:

### 1. @phcdevworks/spectre-tokens (Foundation)

**Purpose**: Single source of truth for design values (colors, surfaces, text roles, space, radii, shadows, etc.)

**Exports**: CSS variables (`--sp-*`), TypeScript token object, Tailwind-compatible theme mappings

**Rules**:

- Tokens define semantic meaning, not UI behavior
- UI must never invent new colors or values
- Designers own `tokens/*.json`; engineers maintain `src/` transforms
- Contrast targets and accessibility constraints are encoded at the token level

**Status**: v0.1.0 released with stable semantic roles (`surface.*`, `text.*`, `component.*`) and considered correct/locked

### 2. @phcdevworks/spectre-ui (Framework-Agnostic UI Layer)

**Purpose**: Converts tokens into real CSS and class recipes

**Ships**:

- `index.css` (canonical CSS bundle: tokens + base + components + utilities)
- `base.css` (resets + globals)
- `components.css` (`.sp-btn`, `.sp-card`, `.sp-input`, etc.)
- `utilities.css` (`.sp-stack`, `.sp-container`, etc.)
- Type-safe recipes: `getButtonClasses`, `getCardClasses`, `getInputClasses`

**Rules**:

- UI must consume tokens, not redefine design values
- Literal values in CSS are fallbacks only
- Every CSS selector has a matching recipe where applicable
- Tailwind preset is optional and non-authoritative

**Status**: v0.1.0 released, hardened and aligned to tokens

### 3. @phcdevworks/spectre-ui-astro (Astro Adapter)

**Purpose**: Thin Astro wrapper around spectre-ui; automatically wraps recipes and outputs correct HTML + classes

**Key mechanism**:

- Imports class recipes from `@phcdevworks/spectre-ui`
- Exports Astro components that render semantic HTML with Spectre classes
- Provides `SPECTRE_UI_CSS` constant for CSS imports

**Rules**:

- Astro never defines styles, never duplicates CSS, never loads tokens directly
- Package only wraps recipes and provides components
- All design values come from tokens, all CSS comes from spectre-ui

**Status**: v0.1.0 with `SpButton`, `SpCard`, `SpInput`, `SpBadge`, `SpIconBox`

### Golden Rule (Non-Negotiable)

**Tokens define meaning. UI defines structure. Adapters only translate.**

Astro never invents CSS or design values—it only wraps what spectre-ui provides.

- If it's a design token → belongs in `@phcdevworks/spectre-tokens`
- If it's a CSS class or style → belongs in `@phcdevworks/spectre-ui`
- If it's an Astro component (HTML + props + classes) → belongs here

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

5. Test in the examples project:

```bash
cd examples
npm install
npm run dev
```

## Project Structure

```
spectre-ui-astro/
├── src/
│   ├── components/        # Astro component implementations
│   │   ├── SpBadge.astro
│   │   ├── SpButton.astro
│   │   ├── SpCard.astro
│   │   ├── SpIconBox.astro
│   │   └── SpInput.astro
│   ├── recipes/          # TypeScript recipe re-exports
│   │   ├── badge.ts
│   │   ├── button.ts
│   │   ├── card.ts
│   │   ├── iconbox.ts
│   │   ├── input.ts
│   │   └── index.ts
│   └── index.ts          # Main entry point with exports
├── examples/             # Example Astro application
├── dist/                 # Built output (generated)
└── package.json
```

**Responsibilities**:

- **Component developers**: Edit `src/components/` to add or update Astro components
- **Type developers**: Own `src/recipes/` for recipe re-exports and type definitions
- **Build engineers**: Update `tsup.config.ts` when export patterns change

## Contribution Guidelines

### Component Development

1. **Never edit CSS in components** – Always use recipes from `@phcdevworks/spectre-ui`
2. **Import recipes, not styles** – Use `getButtonClasses()`, `getCardClasses()`, etc.
3. **Type safety** – All props must be fully typed with discriminated unions
4. **Accessibility** – Include proper ARIA attributes and semantic HTML
5. **SSR compatibility** – Ensure components work server-side (no client JavaScript unless specified)

### Example (Good Pattern)

```astro
---
import { getButtonClasses } from "@phcdevworks/spectre-ui";
import type { ButtonVariant, ButtonSize } from "@phcdevworks/spectre-ui";

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  class?: string;
}

const { variant = "primary", size = "md", class: className, ...rest } = Astro.props;
const classes = getButtonClasses({ variant, size });
---

<button class:list={[classes, className]} {...rest}>
  <slot />
</button>
```

### Code Quality

- Follow TypeScript best practices
- Follow Astro component conventions
- Add JSDoc comments for public APIs
- Write clear commit messages
- Test changes in the examples project

### Documentation

- Update component props documentation in README.md when adding features
- Include inline code comments for complex logic
- Update this CONTRIBUTING.md if development workflows change

## Pull Request Process

1. **Branch from `main`**
2. **Make your changes** and test in the examples project
3. **Run `npm run build`** to compile components and types
4. **Run `npm run typecheck`** to verify types
5. **Commit generated artifacts** in `dist/` when necessary
6. **Update documentation** or code comments to reflect behavior changes
7. **Open a PR** describing:
   - The motivation for the change
   - What was changed
   - Astro-specific testing notes (SSR behavior, component props, etc.)
8. **Respond to feedback** and make requested changes

## Known Gaps (Not Done Yet)

- Additional component variants (tabs, modals, dropdowns)
- Server-side validation helpers
- Astro integration for automatic CSS imports
- Additional accessibility features and ARIA patterns

## Questions or Issues?

Please open an issue or discussion on GitHub if you're unsure about the best approach for a change. Coordinating early avoids conflicts with:

- Spectre UI updates
- Component API design
- Diverging patterns across the Spectre Suite

## Code of Conduct

This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

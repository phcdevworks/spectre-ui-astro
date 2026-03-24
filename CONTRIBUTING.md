# Contributing to Spectre UI Astro

Thanks for helping improve Spectre UI Astro! This package is an Astro adapter
that wraps the Spectre UI design system into ergonomic Astro components. It
ensures Astro users can leverage the Spectre Design System without manually
managing CSS classes or imports.

## 🏛️ Spectre Design Philosophy

Spectre is a **specification-driven design system** built on a strict hierarchy:

### 1. @phcdevworks/spectre-tokens (Layer 1 - DNA)

- **Purpose**: Single source of truth for design values (colors, spacing,
  typography, semantic roles).
- **Rules**: Defines semantic meaning, not UI behavior. Designers own JSON;
  engineers maintain transforms.

### 2. @phcdevworks/spectre-ui (Layer 2 - The Blueprint)

- **Purpose**: Converts tokens into real CSS and class recipes.
- **Rules**: MUST consume tokens, MUST NOT redefine values. Every CSS selector
  has a matching recipe.

### 3. Framework Adapters (Layer 3 - Delivery)

- **Purpose**: Map Layer 2 to specific frameworks (WordPress, Astro, etc.).
- **Rules**: Adapters never define styles or duplicate CSS.

> **The Golden Rule**: Tokens define _meaning_. UI defines _structure_. Adapters
> define _delivery_.

---

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

- **Component developers**: Edit `src/components/` to add or update Astro
  components
- **Type developers**: Own `src/recipes/` for recipe re-exports and type
  definitions
- **Build engineers**: Update `tsup.config.ts` when export patterns change

## Contribution Guidelines

### Component Development

1. **Never edit CSS in components** – Always use recipes from
   `@phcdevworks/spectre-ui`
2. **Import recipes, not styles** – Use `getButtonClasses()`,
   `getCardClasses()`, etc.
3. **Type safety** – All props must be fully typed with discriminated unions
4. **Accessibility** – Include proper ARIA attributes and semantic HTML
5. **SSR compatibility** – Ensure components work server-side (no client
   JavaScript unless specified)

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

Please open an issue or discussion on GitHub if you're unsure about the best
approach for a change. Coordinating early avoids conflicts with:

- Spectre UI updates
- Component API design
- Diverging patterns across the Spectre Suite

## Code of Conduct

This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By
participating, you are expected to uphold this code. Please report unacceptable
behavior to the project maintainers.

## License

By contributing, you agree that your contributions will be licensed under the
MIT License.

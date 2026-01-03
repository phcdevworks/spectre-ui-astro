# Spectre UI Astro Examples

A complete Astro application demonstrating `@phcdevworks/spectre-ui-astro` components in action.

## Running the Example

```bash
cd examples
npm install
npm run dev
```

Open http://localhost:4321 to see the example app showcasing all available Spectre UI Astro components.

## What's Included

This example demonstrates:

- **Component usage**: `SpButton`, `SpCard`, `SpInput`, `SpBadge`, `SpIconBox` with various props and states
- **CSS integration**: Single `index.css` import from Spectre UI
- **Real layouts**: Hero section, component showcase grid, and contact form
- **Best practices**: Proper semantic HTML, accessibility attributes, and responsive design
- **Variant examples**: All component variants (primary, secondary, ghost, success, danger, etc.)
- **State examples**: Input validation states (default, error, success, disabled)

## Project Structure

```
examples/
├── src/
│   ├── pages/
│   │   ├── index.astro        # Homepage with component demos
│   │   ├── buttons.astro      # Button variants showcase
│   │   ├── forms.astro        # Form components and validation
│   │   ├── marketing.astro    # Marketing layout examples
│   │   └── primitives.astro   # Primitive components (Badge, IconBox)
│   └── layouts/
│       └── BaseLayout.astro   # Base layout with CSS imports
├── astro.config.mjs           # Astro configuration
└── package.json               # Dependencies (links to parent package)
```

## Available Pages

After running the dev server, explore these pages:

1. **Home** (`/`) - Overview and hero section with mixed component demos
2. **Buttons** (`/buttons`) - All button variants, sizes, and states
3. **Forms** (`/forms`) - Input components with validation states
4. **Marketing** (`/marketing`) - Real-world marketing page layouts
5. **Primitives** (`/primitives`) - Badge and IconBox components

## Quick Start

Edit files in `src/pages/` to experiment with different component props and variants. All components are fully typed, so you'll get IntelliSense and type checking in your editor.

### Example: Adding a New Button

```astro
---
import { SpButton } from "@phcdevworks/spectre-ui-astro";
---

<SpButton variant="primary" size="lg" fullWidth>
  Click Me!
</SpButton>
```

### Example: Creating a Card Layout

```astro
---
import { SpCard, SpBadge, SpIconBox } from "@phcdevworks/spectre-ui-astro";
---

<SpCard variant="elevated">
  <div style="display: flex; align-items: center; gap: 1rem;">
    <SpIconBox variant="success" size="md">
      <svg><!-- Your icon --></svg>
    </SpIconBox>
    <div>
      <h3>Feature Title <SpBadge variant="success">New</SpBadge></h3>
      <p>Feature description goes here.</p>
    </div>
  </div>
</SpCard>
```

## Design System Resources

- [Spectre UI Astro Documentation](../README.md)
- [Spectre UI Core](https://github.com/phcdevworks/spectre-ui)
- [Spectre Tokens](https://github.com/phcdevworks/spectre-tokens)

## Contributing

Found an issue with the examples or want to add more demos? Please open an issue or pull request in the main repository.

# Example App

A complete Astro application demonstrating `@phcdevworks/spectre-ui-astro` components.

## Running the Example

```bash
cd examples
npm install
npm run dev
```

Open http://localhost:4321 to see the example app showcasing SpButton, SpCard, and SpInput components.

## What's Included

This example demonstrates:

- **Component usage**: SpButton, SpCard, SpInput with various props and states
- **CSS integration**: Using `SPECTRE_CSS_PATHS` to import Spectre UI styles
- **Real layouts**: Hero section, component showcase grid, and contact form
- **Best practices**: Proper semantic HTML, accessibility attributes, and responsive design

## Files

- `src/pages/index.astro` - Homepage with component demos
- `src/layouts/BaseLayout.astro` - Base layout with CSS imports
- `astro.config.mjs` - Astro configuration
- `package.json` - Dependencies (links to parent package with `file:..`)

## Quick Start

After running the dev server, you'll see:

1. A hero section showcasing the design system
2. Component cards demonstrating buttons, cards, and inputs
3. A working contact form with validation states

Edit `src/pages/index.astro` to experiment with different component props and variants.

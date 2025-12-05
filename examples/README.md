# Example Usage

This directory contains example files demonstrating how to use `@phcdevworks/spectre-ui-astro` in an Astro project.

> **Note for Development**: These examples use the package import `@phcdevworks/spectre-ui-astro` to show the public API. During local development, you may see TypeScript errors since the package isn't published yet. For testing locally, you can temporarily change imports to `../src/index.js`.

## Running the Example App

The `basic/` directory contains a complete Astro application:

```bash
cd examples/basic
npm install
npm run dev
```

Open http://localhost:4321 to see the example app showcasing SpButton, SpCard, and SpInput components.

## Example Files

The root `examples/` directory contains standalone example files for reference:

- `ExampleLayout.astro` - Shows how to import Spectre CSS directly
- `ExampleLayoutWithPaths.astro` - Shows how to use `SPECTRE_CSS_PATHS` constants
- `ExamplePage.astro` - Comprehensive demo of all components
- `buttons.astro` - Focused button playground with all variants and states

These are code examples for documentation, not runnable pages.

## Setup

1. Install the package:

```bash
npm install @phcdevworks/spectre-ui-astro @phcdevworks/spectre-ui
```

2. Import CSS in your layout (see `ExampleLayout.astro` or `ExampleLayoutWithPaths.astro`)

3. Use components in your pages (see `ExamplePage.astro` or `buttons.astro`)

## Files

- `ExampleLayout.astro` - Shows how to import Spectre CSS directly
- `ExampleLayoutWithPaths.astro` - Shows how to use `SPECTRE_CSS_PATHS` constants
- `ExamplePage.astro` - Comprehensive demo of all components
- `buttons.astro` - Focused button playground with all variants and states

## Quick Example

```astro
---
// Import components
import { SpButton, SpCard, SpInput, SPECTRE_CSS_PATHS } from "@phcdevworks/spectre-ui-astro";

// Import CSS (in your layout)
import "@phcdevworks/spectre-ui/dist/base.css";
import "@phcdevworks/spectre-ui/dist/components.css";
import "@phcdevworks/spectre-ui/dist/utilities.css";
---

<SpButton variant="primary" size="lg">
  Get Started
</SpButton>

<SpCard variant="elevated">
  <h2>Card Title</h2>
  <p>Card content goes here.</p>
</SpCard>

<SpInput
  label="Email"
  type="email"
  name="email"
  placeholder="Enter your email"
  required
/>
```

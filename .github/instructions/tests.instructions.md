---
applyTo: 'tests/**/*.ts'
---

Tests in this repository enforce package contract integrity, SSR behavior, docs
parity, and adapter safety.

When editing or adding tests:

- Prefer focused tests for the touched component or contract surface.
- Keep export, docs-example, and rendering tests aligned with any public API
  change.
- Assert behavior that matters to downstream Astro consumers: classes, slot
  output, disabled states, ARIA attributes, tabindex rules, and prop leakage
  prevention.
- Do not weaken tests to accommodate adapter drift that should be fixed in
  source.

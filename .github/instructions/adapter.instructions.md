---
applyTo: 'src/components/**/*.astro,src/components/*.ts,src/index.ts,src/recipes/**/*.ts'
---

Adapter code in this repository must stay thin and downstream of
`@phcdevworks/spectre-ui`.

When editing adapter source:

- Reuse upstream recipe helpers and types instead of recreating styling logic
  locally.
- Do not add local CSS, token definitions, or alternate visual systems.
- Preserve SSR-safe markup and deterministic accessibility wiring.
- Destructure adapter-consumed props explicitly so recipe options and adapter
  ergonomics do not leak into the DOM.
- Keep interactive behavior aligned with `sp-interactive.shared.ts` and keep
  `SpInput` accessibility behavior aligned with `sp-input.shared.ts`.
- If public behavior changes, update exports, tests, examples, and README in the
  same change.

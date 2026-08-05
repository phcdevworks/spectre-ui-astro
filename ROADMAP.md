# Spectre UI Astro Roadmap

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components without redefining token meaning, CSS ownership, or
recipe logic.

This document tracks what's next. For what already shipped and why, see
[CHANGELOG.md](CHANGELOG.md) (release-by-release detail) and git history —
this file does not restate delivered work.

---

## System Phase Context

| Package | Current state |
| - | - |
| `@phcdevworks/spectre-tokens` | v4.1.0 — `TOKEN_REFERENCE.md` generated reference added |
| `@phcdevworks/spectre-ui` | v3.2.0 — `getTextClasses` `transform` option and `getGridClasses` Grid v2 `span` option shipped |
| `@phcdevworks/spectre-ui-astro` | Unreleased — `SpText` `transform` and `SpGrid` `span` parity (Phase 15), consuming spectre-ui 3.2.0 |

---

## Delivered Phases

| Phase | Summary | Shipped in |
| - | - | - |
| 1 | Contract integrity — `astro-adapter.contract.json`, root export/component entrypoint parity, thin-adapter invariants | pre-2.6.0 |
| 2 | Downstream safety — built-package smoke tests, README contract parity, maintainer coverage map, family stability classification | pre-2.6.0 |
| 3 | Alert, Avatar, Spinner, Tag components | 2.6.0 |
| 4 | Nav, Toast, Tooltip, Dropdown, Modal components (token-gated) | 2.7.0 |
| 5 | Layout components — Container, Stack, Section | 2.8.0 |
| 6 v1 | Grid component | 2.9.0 |
| 7 | App shell layout — Sidebar, Footer, Stack `basis`/Container `maxWidth` options, sidebar off-canvas interaction | 2.3.0-range |
| 8 | Sidebar toggle z-index fix, Stack `align` option | 2.4.0-range |
| 9 | Sidebar header/indent, full-height fix | 2.5.0-range |
| 10 | Form-field parity — Checkbox, Radio, Select, Textarea, Fieldset, Label | 3.3.0 |
| 11 | Sidebar composition (`SpSidebarToggle`), Nav `align` forwarding, TypeScript 5/6/7 peer support | 3.4.1–3.7.0 |
| 12 | Spectre v4/v3 alignment — Tailwind integration removed, `getTextClasses` re-export | 4.0.0 |
| 13 | `SpText` component — closes the `text` family gap (Phase 4g parity), requested by `spectre-base` | 4.1.0 |
| 14 | `SpNavItem` component — nav composition parity | 4.2.0 |
| 15 | `SpText` `transform` and `SpGrid` `span` (Grid v2) parity, consuming `spectre-ui@3.2.0` | Unreleased |

Deferred-not-abandoned sub-scope from delivered phases (see "What's Next"
below): Grid v2 column/row offsets and custom track sizing.

---

## What's Next

No phase is fully open right now. The only concrete pending item is
evidence-gated — tracked in [TODO.md](TODO.md) rather than as a numbered
phase here:

- **Grid v2 offsets/track sizing** — column/row offsets, custom track
  sizing. Deferred until a real downstream need exists; column span shipped
  in Phase 15.

New family or contract work beyond the above opens only when
`@phcdevworks/spectre-ui` publishes a new recipe family or
`@phcdevworks/spectre-tokens` publishes a new component-level token group that
gates further families.

---

## Adapter Expansion Rules

- Call the upstream recipe function; do not compute class strings locally
- No `<style>` blocks or CSS custom property definitions
- No visual variants that do not exist in the upstream recipe
- Keep adapter-specific behavior additive and narrowly scoped to Astro
  ergonomics (slots, SSR accessibility wiring, `as` prop)
- Declare the family in `astro-adapter.contract.json` before shipping
- Validate with `npm run check` before handoff

---

## Explicitly Out of Scope

- Do not redefine token meaning here
- Do not own CSS contract surfaces here
- Do not fork or locally reinterpret upstream recipe logic here
- Do not bind upstream families before their recipes publish to npm
- Do not expand framework responsibilities beyond Astro adapter delivery
- Do not treat examples as independent published packages or contract
  authorities

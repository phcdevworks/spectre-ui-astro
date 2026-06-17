# Spectre UI Astro Roadmap

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components without redefining token meaning, CSS ownership, or
recipe logic.

---

## System Phase Context

| Package | Current state |
| ------- | ------------- |
| `@phcdevworks/spectre-tokens` | v2.9.0 — Phase 4 component token groups shipped |
| `@phcdevworks/spectre-ui` | v1.9.0 — Phase 4 recipes shipped (nav, toast, tooltip, dropdown, modal) |
| `@phcdevworks/spectre-ui-astro` | v2.7.0 — Phase 3 and Phase 4 delivered and released. Phase 5 (layout components) open, blocked on upstream `spectre-ui` recipes |

---

## Phase 3: Component Family Expansion — Delivered (v2.6.0)

All four Phase 3 families shipped. `peerDependencies` bumped to `^1.7.0`.

| Family  | Upstream recipe     | Status             |
| ------- | ------------------- | ------------------ |
| alert   | `getAlertClasses`   | Delivered — stable |
| avatar  | `getAvatarClasses`  | Delivered — stable |
| spinner | `getSpinnerClasses` | Delivered — stable |
| tag     | `getTagClasses`     | Delivered — stable |

---

## Phase 4: Token-Gated Expansion — Delivered (v2.7.0)

`@phcdevworks/spectre-tokens` published component-level semantic tokens, and
`@phcdevworks/spectre-ui` shipped the corresponding recipes. `peerDependencies`
bumped to `@phcdevworks/spectre-tokens@^2.9.0` and
`@phcdevworks/spectre-ui@^1.9.0`.

| Family | Required spectre-tokens group | Upstream status |
| - | - | - |
| nav | component.nav | Delivered — stable |
| toast | component.toast | Delivered — stable |
| tooltip | component.tooltip | Delivered — stable |
| dropdown | component.dropdown | Delivered — stable |
| modal | component.modal | Delivered — stable |

Each followed the same delivery pattern as Phase 3.

---

## Phase 5: Layout Components — Blocked

Blocked on `@phcdevworks/spectre-ui` shipping layout recipes (tracked as
"Phase 4b" in that package's roadmap). The underlying `layout.*` tokens are
already published in `@phcdevworks/spectre-tokens@2.9.0` — the gap is the
recipe layer, not tokens.

| Family    | Required spectre-ui recipe | Upstream status |
| --------- | --------------------------- | --------------- |
| container | `getContainerClasses`       | Not shipped      |
| stack     | `getStackClasses`           | Not shipped      |
| section   | `getSectionClasses`         | Not shipped      |

Will follow the same delivery pattern as Phase 3/Phase 4 once unblocked.

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
- Do not treat examples as independent published packages or contract authorities

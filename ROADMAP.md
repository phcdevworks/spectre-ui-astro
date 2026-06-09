# Spectre UI Astro Roadmap

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components without redefining token meaning, CSS ownership, or
recipe logic.

---

## System Phase Context

| Package | Current state |
| ------- | ------------- |
| `@phcdevworks/spectre-tokens` | v2.8.0 — Phase 4 P2 active (component token groups) |
| `@phcdevworks/spectre-ui` | v1.8.0 — Phase 3 P2 active (link, surface states, divider) |
| `@phcdevworks/spectre-ui-astro` | v2.6.0 — Phase 3 complete; Phase 4 gated on upstream tokens |

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

## Phase 4: Token-Gated Expansion — Gated

Phase 4 families require `@phcdevworks/spectre-tokens` to publish
component-level semantic tokens, and `@phcdevworks/spectre-ui` to ship the
corresponding recipes. Watch both upstream changelogs before opening any
Phase 4 work.

| Family   | Required spectre-tokens group | Upstream status |
| -------- | ----------------------------- | --------------- |
| nav      | component.nav                 | Not yet shipped |
| toast    | component.toast               | Not yet shipped |
| tooltip  | component.tooltip             | Not yet shipped |
| dropdown | component.dropdown            | Not yet shipped |
| modal    | component.modal               | Not yet shipped |

Each will follow the same delivery pattern as Phase 3.

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

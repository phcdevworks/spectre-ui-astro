# Spectre UI Astro Roadmap

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components without redefining token meaning, CSS ownership, or
recipe logic.

---

## System Phase Context

| Package                         | Current state                                                                                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@phcdevworks/spectre-tokens`   | v2.9.0 — Phase 4 component token groups shipped                                                                                                                |
| `@phcdevworks/spectre-ui`       | v1.9.0 — Phase 4 recipes shipped (nav, toast, tooltip, dropdown, modal)                                                                                        |
| `@phcdevworks/spectre-ui-astro` | v2.8.0 — Phase 3, Phase 4, and Phase 5 (layout components) delivered and released. Phase 6 (Grid component) open, blocked on upstream `spectre-ui` Grid recipe |

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

| Family   | Required spectre-tokens group | Upstream status    |
| -------- | ----------------------------- | ------------------ |
| nav      | component.nav                 | Delivered — stable |
| toast    | component.toast               | Delivered — stable |
| tooltip  | component.tooltip             | Delivered — stable |
| dropdown | component.dropdown            | Delivered — stable |
| modal    | component.modal               | Delivered — stable |

Each followed the same delivery pattern as Phase 3.

---

## Phase 5: Layout Components — Delivered (v2.8.0)

`@phcdevworks/spectre-ui` v2.1.0 shipped the layout recipes (tracked as "Phase
4b" in that package's roadmap). `peerDependencies` bumped to
`@phcdevworks/spectre-ui@^2.1.0` and `@phcdevworks/spectre-tokens@^3.0.0`.

| Family    | Required spectre-ui recipe | Upstream status    |
| --------- | -------------------------- | ------------------ |
| container | `getContainerClasses`      | Delivered — stable |
| stack     | `getStackClasses`          | Delivered — stable |
| section   | `getSectionClasses`        | Delivered — stable |

Each followed the same delivery pattern as Phase 3/Phase 4.

---

## Phase 6: Grid Component — Blocked

Blocked on `@phcdevworks/spectre-ui` shipping a Grid recipe (tracked as "Phase
4c — Grid Recipe (v1)" in that package's roadmap). The underlying
`breakpoints.*` and `layout.stack.gap.*` tokens are already published — the gap
is the recipe layer, not tokens. This is the first adapter family backed by a
responsive (breakpoint-aware) upstream recipe.

| Family | Required spectre-ui recipe | Upstream status |
| ------ | -------------------------- | --------------- |
| grid   | `getGridClasses`           | Not shipped     |

Will follow the same delivery pattern as Phase 3/4/5 once unblocked. `SpGrid`
props (`columns`, `gap`) map directly to upstream recipe options — no
adapter-local interpretation of column count or breakpoint behavior.

Phase 6 v2 (column span, offsets, per-breakpoint override) is deferred until
upstream `spectre-ui` Phase 4c v2 ships and a real downstream need exists.

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

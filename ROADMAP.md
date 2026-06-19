# Spectre UI Astro Roadmap

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components without redefining token meaning, CSS ownership, or
recipe logic.

---

## System Phase Context

| Package | Current state |
| - | - |
| `@phcdevworks/spectre-tokens` | v3.1.0 — sidebar width and container prose max-width tokens shipped |
| `@phcdevworks/spectre-ui` | v2.3.0 — Stack/Container options, Sidebar, Footer recipes shipped (Phase 4d) |
| `@phcdevworks/spectre-ui-astro` | v2.9.0 — Phase 3, Phase 4, Phase 5, and Phase 6 (Grid component) delivered and released. Phase 7 (app shell layout) implemented, prepared for release |

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

## Phase 6: Grid Component — Delivered (v2.9.0)

`@phcdevworks/spectre-ui` v2.2.0 shipped the Grid recipe (tracked as "Phase
4c — Grid Recipe (v1)" in that package's roadmap). `peerDependencies` bumped
to `@phcdevworks/spectre-ui@^2.2.0`. This was the first adapter family backed
by a responsive (breakpoint-aware) upstream recipe.

| Family | Required spectre-ui recipe | Upstream status |
| - | - | - |
| grid | `getGridClasses` | Delivered — stable |

`SpGrid` props (`columns`, `gap`) map directly to upstream recipe options —
no adapter-local interpretation of column count or breakpoint behavior.

Phase 6 v2 (column span, offsets, per-breakpoint override) is deferred until
upstream `spectre-ui` Phase 4c v2 ships and a real downstream need exists.

---

## Phase 7: App Shell Layout — Implemented, prepared for release

`@phcdevworks/spectre-ui` v2.3.0 shipped the Stack/Container option additions
and new Sidebar/Footer recipes (tracked as "Phase 4d — App Shell Layout:
Stack/Container Options, Sidebar, Footer" in that package's roadmap).
`peerDependencies` bumped to `@phcdevworks/spectre-ui@^2.3.0` and
`@phcdevworks/spectre-tokens@^3.1.0`. `SpNav` already covers the top bar;
this phase adds the sidebar and bottom-bar equivalents plus the width/max-
width options `SpStack` and `SpContainer` were missing.

| Family | Required spectre-ui addition | Upstream status |
| - | - | - |
| stack | width/basis option on `getStackClasses` | Delivered — stable |
| container | `maxWidth` option on `getContainerClasses` | Delivered — stable |
| sidebar | new Sidebar recipe | Delivered — stable |
| footer | new Footer recipe | Delivered — stable |

Followed the same delivery pattern as Phase 3/4/5/6. **Decided: slide-out
drawer on mobile.** Upstream owns the off-canvas CSS contract
(`data-sidebar-open` data-attribute, confirmed against the published
`spectre-ui` README); this package owns the toggle interaction — the first
interactive component in this adapter. `SpSidebar` renders its own
hamburger trigger, click handler, SSR-safe closed-by-default state
(`data-sidebar-open="false"` by default, no layout shift on hydration), and
backdrop-tap-to-close, all within the component itself rather than split
across `SpNav` and `SpSidebar`.

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

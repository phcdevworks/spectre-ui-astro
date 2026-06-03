# Spectre UI Astro Roadmap

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components without redefining token meaning, CSS ownership, or
recipe logic.

## Current State (as of v2.4.x)

The adapter foundation is solid. Phases 1 and 2 are complete:

- Machine-readable adapter contract (`astro-adapter.contract.json`)
- Root export and component entrypoint parity validation
- Upstream UI family parity checks (`tests/upstream-parity.test.ts`)
- Thin-adapter invariant enforcement (no local CSS, no token redefinition)
- Built-package consumer smoke tests (`tests/smoke.test.ts`)
- README contract parity validation (`scripts/validate-readme-contract.ts`)
- Example boundary rules clarified (`examples/README.md`)
- Maintainer contract coverage map in `CONTRIBUTING.md`
- Eight stable component families: badge, button, card, icon-box, input,
  pricing-card, rating, testimonial

Four upstream families are declared in the contract as `notYetSupported` and
are targeted for Phase 3: alert, avatar, spinner, tag.

---

## Phase 3: Component Family Expansion — Next

`@phcdevworks/spectre-ui` v1.7.0 ships recipes for the four `notYetSupported`
families. Binding them is the immediate next step.

### P0: Bind the four ready families

Each family requires the same delivery pattern as existing stable components:

| Family  | Upstream recipe     | Upstream version |
| ------- | ------------------- | ---------------- |
| alert   | `getAlertClasses`   | ^1.7.0           |
| avatar  | `getAvatarClasses`  | ^1.7.0           |
| spinner | `getSpinnerClasses` | ^1.7.0           |
| tag     | `getTagClasses`     | ^1.7.0           |

Deliverables for each family:

1. `src/components/Sp{Family}.astro` — component following the established
   adapter pattern
2. Recipe option types re-exported from `src/recipes/index.ts`
3. Export from `src/index.ts`
4. Component entrypoint in `package.json` exports
5. Entry in `astro-adapter.contract.json` (move from `notYetSupported` to
   `stable`)
6. Focused tests under `tests/sp-{family}.test.ts`
7. SSR rendering coverage in `tests/rendering.test.ts`
8. Component section in `README.md` with prop table and usage examples
9. Update stability table in `README.md`
10. Update examples if consumer usage changes

Dependency notes: bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^1.7.0`
when the first of these components ships, since v1.5.x and v1.6.x do not include
these recipes.

Run `npm run check` after each family lands before moving to the next.

---

## Phase 4: Token-Gated Expansion — Future

`@phcdevworks/spectre-ui` Phase 3 will add Nav, Toast, Tooltip, Dropdown, and
Modal recipes, each gated on `@phcdevworks/spectre-tokens` releasing the
required semantic tokens. Do not bind these until:

1. The required tokens publish to npm in `@phcdevworks/spectre-tokens`
2. `@phcdevworks/spectre-ui` publishes the corresponding recipes
3. `npm view @phcdevworks/spectre-ui version` confirms the published version

Planned families once upstream is ready:

| Family   | Required spectre-tokens group |
| -------- | ----------------------------- |
| nav      | component.nav                 |
| toast    | component.toast               |
| tooltip  | component.tooltip             |
| dropdown | component.dropdown            |
| modal    | component.modal               |

Each will follow the same delivery pattern as Phase 3.

---

## Adapter Expansion Rules

When adding any new component family:

- Call the upstream recipe function; do not compute class strings locally
- Do not introduce `<style>` blocks or CSS custom property definitions
- Do not add visual variants that do not exist in the upstream recipe
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

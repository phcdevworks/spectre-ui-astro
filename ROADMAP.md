# Spectre UI Astro Roadmap

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components without redefining token meaning, CSS ownership, or
recipe logic.

---

## System Phase Context

The three Spectre packages are moving in lock-step:

| Package                         | Active Phase                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------ |
| `@phcdevworks/spectre-tokens`   | Phase 3 — validation integrity; Phase 4 token surface expansion planned        |
| `@phcdevworks/spectre-ui`       | Phase 3 — token-gated semantic surface expansion                               |
| `@phcdevworks/spectre-ui-astro` | **Phase 3 — SpAlert + SpAvatar delivered; SpSpinner + SpTag remaining**        |

Foundation is done across all three. The work now is closing the remaining two
Phase 3 component families before Phase 4 token-gated expansion becomes unblocked.

---

## Phase 3: Component Family Expansion — Active

`@phcdevworks/spectre-ui` ^1.7.0 ships recipes for the four families. Two are
delivered; two remain. `peerDependencies` is already bumped to `^1.7.0`.

| Family  | Upstream recipe     | Status             |
| ------- | ------------------- | ------------------ |
| alert   | `getAlertClasses`   | Delivered — stable |
| avatar  | `getAvatarClasses`  | Delivered — stable |
| spinner | `getSpinnerClasses` | Ready to bind      |
| tag     | `getTagClasses`     | Ready to bind      |

Deliverables for each family:

1. `src/components/Sp{Family}.astro` following the established adapter pattern
2. Recipe option types re-exported from `src/recipes/index.ts`
3. Export from `src/index.ts`
4. Component entrypoint in `package.json` exports
5. Move from `notYetSupported` to `stable` in `astro-adapter.contract.json`
6. Focused tests under `tests/sp-{family}.test.ts`
7. SSR rendering coverage in `tests/rendering.test.ts`
8. Component section in `README.md` with prop table and usage examples
9. Stability table updated in `README.md`
10. Examples updated if consumer usage changes

Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^1.7.0` when the first
of these ships. Run `npm run check` after each family before moving to the next.

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

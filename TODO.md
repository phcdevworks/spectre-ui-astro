# Spectre UI Astro Execution Todo

Active phase: **Phase 3 — Component Family Expansion.**
Phases 1 and 2 are complete. Foundation, contract validation, upstream parity,
thin-adapter invariants, smoke tests, and release tooling are all in place and
CI-enforced. That work is done — do not revisit it.

---

## Phase 3 — Active Now

All four Phase 3 recipes are live in `@phcdevworks/spectre-ui` ^1.7.0.
Add one component at a time. Run `npm run check` before moving to the next.

### Components

- [ ] `SpAlert`
  - `src/components/SpAlert.astro`, recipe/type re-exports in
    `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
    `package.json`, contract entry in `astro-adapter.contract.json`,
    `tests/sp-alert.test.ts`, SSR coverage in `tests/rendering.test.ts`,
    prop table and usage in `README.md`.
  - Done when: exported from root and `./components/SpAlert.astro`,
    covered by SSR + prop tests, documented, and `stable` in the contract.

- [ ] `SpAvatar`
  - Same delivery pattern as `SpAlert`.

- [ ] `SpSpinner`
  - Same delivery pattern as `SpAlert`.

- [ ] `SpTag`
  - Same delivery pattern as `SpAlert`.

### Release

- [ ] Bump `peerDependencies["@phcdevworks/spectre-ui"]` to `^1.7.0` in
  `package.json` and `astro-adapter.contract.json` when the first Phase 3
  component lands.
- [ ] Update `CHANGELOG.md [Unreleased]` for each new component family.
- [ ] Hand off to Bradley Potts for version bump, commit, tag, and publish.

---

## Phase 4 — Gated on Upstream

Do not start until `@phcdevworks/spectre-tokens` publishes component-level
tokens and `@phcdevworks/spectre-ui` ships the corresponding recipes.

| Family   | Required token group        | Upstream status |
| -------- | --------------------------- | --------------- |
| nav      | component.nav               | Not yet shipped |
| toast    | component.toast             | Not yet shipped |
| tooltip  | component.tooltip           | Not yet shipped |
| dropdown | component.dropdown          | Not yet shipped |
| modal    | component.modal             | Not yet shipped |

Check `npm view @phcdevworks/spectre-ui version` and the `spectre-tokens`
changelog before opening any Phase 4 work.

---

## Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Phase 4 families before their upstream recipes publish to npm.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.

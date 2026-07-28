# Spectre UI Astro Execution Todo

Phases 1 through 12 are complete — see [ROADMAP.md](ROADMAP.md) for the
delivered-phases summary and [CHANGELOG.md](CHANGELOG.md) for
release-by-release detail. Design-decision rationale that doesn't belong in a
changelog lives in git history for the commits that made those calls.

The item below is the only thing still open, and it is gated on explicit
maintainer approval before implementation begins.

## Gated: SpText Component

Requested by `spectre-base` (2026-07-23) while converting `spectre-theme/`
PHP templates off hand-rolled CSS onto `sp-*` components; tracked upstream in
`spectre-ui`'s `TODO.md`/`ROADMAP.md` Phase 4g and in `spectre-components`'s
`TODO.md` "Requested by Downstream". The blocking gap is closed:
`@phcdevworks/spectre-ui` Phase 4g shipped `getTextClasses` (single recipe,
`size`/`variant`/`family?` options — `xs`–`6xl` scale,
`default`/`muted`/`subtle`/`meta`/`brand` color roles, `sans`/`serif`/`mono`
family).

- [ ] Needs explicit approval from Bradley Potts before implementation.
- [ ] Bump the declared `@phcdevworks/spectre-ui` peer range to cover the
      version that publishes `getTextClasses`, in both `package.json` and
      `astro-adapter.contract.json`.
- [ ] `src/components/SpText.astro` should accept an `as` prop (`h1`–`h6`,
      `p`, `span`, defaulting to `p`) that swaps the rendered tag without
      changing the `getTextClasses` call — same single-element-many-options
      shape decided in `spectre-ui`'s `TODO.md` Phase 4g, so this adapter does
      not need a separate `SpHeading` component.
- [ ] Same delivery pattern as `SpLabel`/`SpFieldset`: recipe re-export in
      `src/recipes/index.ts`, export in `src/index.ts`, entrypoint in
      `package.json`, contract entry in `astro-adapter.contract.json`,
      `tests/sp-text.test.ts`, SSR coverage in `tests/rendering.test.ts`, prop
      table and usage in `README.md`.

## Explicitly Out of Scope

- No token redefinition, local CSS, or forked recipe logic.
- No Lit web component behavior here.
- Examples are a validation surface, not an independently published package.

# Spectre UI Astro Agent Guide

## Repository Snapshot

| Field            | Value                           |
| ---------------- | ------------------------------- |
| Project team     | `project-design`                |
| Repository role  | Spectre L3b Astro adapter       |
| Package/artifact | `@phcdevworks/spectre-ui-astro` |
| Validation gate  | `npm run check`                 |

## Standard Authority Model

| Agent          | Role                                                              | Authority                |
| -------------- | ----------------------------------------------------------------- | ------------------------ |
| Claude Code    | Lead implementation and validation                                | [CLAUDE.md](CLAUDE.md)   |
| OpenAI Codex   | Documentation, release readiness, stabilization, and repo hygiene | [CODEX.md](CODEX.md)     |
| ChatGPT        | Strategy, coordination, prompt design, and external review        | Support only             |
| GitHub Copilot | Development assistance                                            | [COPILOT.md](COPILOT.md) |
| Google Jules   | Bounded automated maintenance                                     | [JULES.md](JULES.md)     |

Bradley Potts holds final authority for commits, merges, tags, publishing, and
releases.

## Cross-Repo Access

This repo may be worked on standalone or alongside any combination of other
PHCDevworks repos — do not assume the company root or sibling project areas
are present. The following rules are self-contained and apply whether or not
that broader context is available.

**File access.** An agent working in this repo has full read/write access to
every file in this repo. When this repo is present alongside other
PHCDevworks repos (company root or sibling `project-*` areas), the same full
read/write access extends to those repos too — there is no per-repo access
restriction anywhere in this workspace. What differs repo-to-repo is not
*access*, it's *editorial ownership*: each repo's own `CLAUDE.md`/`AGENTS.md`
still governs what changes make sense there (design-token authority, layer
boundaries, etc.) — being able to open and edit a file is not the same as it
being this repo's job to change it.

**Cross-repo changelog sync.** When a change in this repo has direct
downstream or upstream impact on another present repo (e.g. a breaking token
rename, an API contract change), an agent may append a `CHANGELOG.md
[Unreleased]` entry directly into that other repo's own changelog — not just
leave a note asking its owner to add it. Rules:

1. Only append new `[Unreleased]` entries — never edit, reorder, or remove
   another repo's existing changelog entries, version headers, or release
   history.
2. Every cross-repo entry must be self-contained and attributed: which repo
   caused it and why, what changed from the affected repo's perspective, and
   the date added.
3. Add it in the same change that produced the impact, not a later session.
4. This never grants release authority — cutting a release, bumping a version
   header, or publishing a package stays gated by that repo's own release
   process and the human owner's final sign-off.

**TODO/roadmap requests.** When work here surfaces a need that belongs to
another repo, an agent may append the request directly to that repo's own
`TODO.md` under a clearly labeled "Requested by Downstream" section (create
it if absent), stating which repo is requesting it, why, the date, and a
link back if the other repo's `TODO.md`/`ROADMAP.md` is reachable.

No AI agent creates commits, tags, publishes packages, or merges changes in
this repo or any other unless that repo's own agent guide explicitly grants
that authority or the human owner has explicitly requested the action.

## Standard Handoff

Every AI-prepared change should report files changed, validation performed,
public behavior or contract impact, and unresolved risks. Do not edit generated
outputs directly. Do not update [CHANGELOG.md](CHANGELOG.md) unless the change
is release-relevant.

This repository is maintained by PHCDevworks and contains the Astro adapter for
the Spectre system.

## Upstream Requests and Roadmap Self-Expansion

Full directive: project-team [AGENTS.md](../AGENTS.md) "Upstream Requests and
Roadmap Self-Expansion." Applied to this repo:

- This repo is L3b — its upstream is `spectre-ui` (and transitively
  `spectre-tokens`). If an adapter needs a recipe option, shared type, or
  styling behavior that doesn't exist upstream, append the request to
  `spectre-ui/TODO.md` under `## Requested by Downstream`, dated, with the
  reason and a link back to this repo's own TODO.md/ROADMAP.md. Never patch
  around the gap with local styling logic (see Upstream-First Policy above).
- Downstream consumers in `project-web` (`www-phcdevworks-com`,
  `docs-phcdevworks-com`) may append component or contract requests to this
  repo's own `TODO.md` under `## Requested by Downstream`. Keep that section
  visible and separate from self-planned adapter work.
- This repo's own [ROADMAP.md](ROADMAP.md) may be proactively expanded with new
  or reordered phases by the agent's own analysis — but never mark a phase
  delivered without `npm run check` passing, and never open a new component
  phase against a `spectre-ui` recipe family that hasn't actually published
  yet (see Roadmap Priorities in `CLAUDE.md`).
- Surface any new TODO request or roadmap expansion in the handoff for Bradley
  Potts in the same change it was made, and reflect cross-repo-relevant
  changes in the project-team's own ROADMAP.md/TODO.md.

## File Ownership at a Glance

| File / Path                            | Status                                    | Notes                                                          |
| -------------------------------------- | ----------------------------------------- | -------------------------------------------------------------- |
| `src/components/*.astro`               | Source — edit freely                      | Astro component implementations                                |
| `src/recipes/index.ts`                 | Source — edit freely                      | Re-exports from upstream only                                  |
| `src/index.ts`                         | Source — keep in sync                     | Public package exports                                         |
| `dist/`                                | Generated — do not edit by hand           | Output of `npm run build`                                      |
| `package.json` exports                 | Source — keep in sync with `src/index.ts` | Must match source and docs                                     |
| `README.md`                            | Source — keep in sync                     | Consumer-facing docs                                           |
| `CHANGELOG.md`                         | Source — append only                      | Follow Keep a Changelog format                                 |
| `CLAUDE.md`                            | Protected                                 | Lead developer working guide                                   |
| `AGENTS.md`                            | Protected                                 | Shared agent authority guide                                   |
| `CODEX.md`                             | Protected                                 | Codex release and review guide                                 |
| `COPILOT.md`                           | Protected                                 | Copilot support guide                                          |
| `JULES.md`                             | Protected                                 | Jules maintenance scope                                        |
| `.github/copilot-instructions.md`      | Protected                                 | Copilot support guide                                          |
| `spectre.manifest.json`                | Source — keep in sync                     | Update when exports, Spectre dependencies, or stability change |
| `tests/exports.test.ts`                | Source — keep in sync                     | Guards public contract surface                                 |
| `tests/upstream-parity.test.ts`        | Source — keep in sync                     | Guards upstream family parity                                  |
| `tests/smoke.test.ts`                  | Source — keep in sync                     | Guards built-package artifacts                                 |
| `scripts/validate-package-contract.ts` | Source — keep in sync                     | Post-build contract assertions                                 |
| `scripts/validate-readme-contract.ts`  | Source — keep in sync                     | Post-build README parity assertions                            |
| `examples/`                            | Validation surface — not a contract       | Demo app; not independently published                          |

## Mission

Deliver the upstream `@phcdevworks/spectre-ui` contract through Astro-native
components while keeping this package thin, SSR-safe, type-safe, and strictly
downstream of the core Spectre packages.

## Repository Role

This repository contains the Astro adapter for the Spectre system.

Within Spectre:

- `@phcdevworks/spectre-tokens`
  - Owns design values, semantic token meaning, and token contracts.
- `@phcdevworks/spectre-ui`
  - Owns CSS, utilities, Tailwind helpers, class recipes, and shared styling
    behavior.
- `@phcdevworks/spectre-components`
  - Owns framework-agnostic Lit web component behavior and the canonical
    custom-element layer.
- `@phcdevworks/spectre-ui-astro`
  - Owns Astro-native component delivery, framework ergonomics, slot structure,
    SSR-safe rendering, adapter-level typing, and package publishing for Astro
    consumers.

Core rule: adapters deliver upstream contracts in framework-native form. They do
not redefine design ownership.

## Non-Negotiable Rules

1. Use `@phcdevworks/spectre-ui` as the source of truth for recipe logic, class
   generation, shared styling behavior, and adapter-facing styling contracts.
2. Do not introduce token definitions in this repository.
3. Do not introduce package-owned CSS, utilities, Tailwind helpers, or alternate
   styling systems here.
4. Do not re-implement upstream recipe logic when it already exists in
   `@phcdevworks/spectre-ui`.
5. Keep Astro components thin, framework-appropriate, and closely aligned with
   upstream contracts.
6. Preserve SSR safety. Avoid nondeterministic output, unstable IDs, and
   framework-hostile behavior.
7. Keep the public export surface intentional, minimal, and aligned with real
   Astro delivery needs.
8. Keep docs, tests, exports, examples, and package metadata synchronized
   whenever public behavior changes.
9. Treat the example app as a contract surface. If it imports or relies on an
   upstream package, its `package.json` must declare that dependency honestly.
10. Treat Astro as a host-framework contract. Dependency classification must
    make consumer requirements explicit.
11. Do not add or require lockfile-strict example installs for local `file:..`
    package links. Example apps in this repo are demo/validation surfaces, not
    independently reproducible packages, so they must not rely on tracked
    example lockfiles or `npm ci` in CI when consuming the parent package via a
    local file dependency.
12. All `scripts/` tooling is TypeScript (`.ts`), run via
    `node --experimental-strip-types`; never add a new `.js`/`.mjs` script.

## What This Repository Owns

This repository may own:

- Astro component wrappers over upstream Spectre UI recipes and classes
- Astro-specific prop ergonomics
- Slot APIs and semantic HTML choices appropriate for Astro
- SSR-safe accessibility wiring
- Adapter-focused tests
- Packaging logic required to publish Astro component entrypoints correctly
- Documentation specific to Astro installation, usage, and adapter behavior
- Example app wiring that demonstrates correct downstream consumption of the
  adapter and upstream UI package

## What This Repository Does Not Own

This repository must not own:

- Design token values or token semantics
- Core CSS files
- Tailwind preset or theme generation
- Shared class recipe logic
- Alternate design-system behavior that diverges from `@phcdevworks/spectre-ui`
- Adapter-specific visual variants that should exist upstream instead
- Local styling contracts that compete with or bypass upstream Spectre UI

## Upstream-First Policy

If a needed styling behavior, recipe option, shared type, or contract is
missing:

1. Prefer fixing it in `@phcdevworks/spectre-ui`.
2. Only add local adapter behavior when the need is genuinely Astro-specific.
3. Keep any adapter-specific behavior additive and narrowly scoped to Astro
   ergonomics.
4. Do not patch around upstream gaps with local design logic unless the
   limitation is explicitly documented and temporary.

## Thin adapter decision guide

Use this when deciding whether a change belongs in this package:

| Question                                                        | Answer                                   |
| --------------------------------------------------------------- | ---------------------------------------- |
| Is it styling, a visual variant, or recipe logic?               | Belongs in `@phcdevworks/spectre-ui`     |
| Is it a design value, token, or color?                          | Belongs in `@phcdevworks/spectre-tokens` |
| Is it a CSS utility, Tailwind helper, or class recipe?          | Belongs in `@phcdevworks/spectre-ui`     |
| Is it an Astro slot structure, prop type, or SSR constraint?    | Belongs here                             |
| Is it adapter packaging, entrypoint wiring, or `as`-prop logic? | Belongs here                             |

**Red flags that code is in the wrong package:**

- Computing class strings without calling an upstream recipe function
- Defining a color, spacing, or design token locally
- Writing a `<style>` block or any local CSS
- Re-implementing logic that already exists in `@phcdevworks/spectre-ui`
- Adding a visual variant that does not exist upstream

## SSR and Accessibility Rules

1. Prefer deterministic markup.
2. Do not generate unstable IDs for associated labels, helper text, or error
   states when explicit IDs are required.
3. Preserve semantic HTML for the rendered tag.
4. Keep disabled states safe for Astro SSR output and for non-button elements.
5. Ensure accessibility attributes stay aligned with the upstream contract and
   actual rendered behavior.
6. When a component requires an explicit `id` for safe accessible associations,
   enforce that requirement clearly in implementation, types, tests, and docs.

## Public API Discipline

1. Every root export in `src/index.ts` is part of the package contract unless
   explicitly marked internal.
2. Every documented export must exist in build output and package exports.
3. Every declared package export path in `package.json` must resolve to a real
   published file.
4. Component entrypoints under `components/*.astro` must stay aligned with
   actual source files.
5. Avoid broadening the API surface without a clear adapter-level reason.
6. Remove stale convenience exports when they no longer serve the adapter’s core
   responsibility.

## Dependency Policy

1. Treat `@phcdevworks/spectre-ui` as the required upstream package contract for
   consumers of this adapter.
2. Treat Astro as a required host-framework contract for consumers of this
   adapter.
3. Keep dependency classification honest:
   - `peerDependencies` for required consumer contracts such as Astro and
     upstream Spectre packages
   - `devDependencies` for local build, test, lint, and packaging tooling
   - `dependencies` only for true published runtime dependencies that should be
     installed transitively
4. Do not duplicate upstream ownership through convenience dependencies that
   blur package boundaries.
5. Keep version ranges intentional and aligned with the actual supported
   contract.
6. Keep example app dependencies honest. Do not rely on undeclared root-level
   packages to make examples work.

## Validation Requirements

Before merging or publishing changes, run:

```bash
npm run check
```

This runs lint → build → typecheck → test in sequence. For a fresh environment,
run `npm ci` first.

For `examples/`:

- use `npm install`, not `npm ci`, when the example depends on the parent
  package through `file:..`
- do not introduce or require a tracked example `package-lock.json` as a CI
  contract in that setup

## Pull Request Creation

Every agent that opens a PR must populate every section of the repo's PR
template (`.github/pull_request_template.md`):

- **Linked issue** — issue number (`#N`) or `N/A`.
- **Summary of changes** — one or two bullets describing what changed.
- **Adapter contract change type** — exactly one of `additive`,
  `semantic change`, `breaking`, or `N/A`.
- **Type of Change** — check every box that applies.
- **Checklist** — check each completed item; leave blocked items unchecked with
  a brief inline note.

Never submit a PR with an empty body or only the template headings left
unfilled. CodeRabbit's description check blocks such PRs.

## Agent-Specific Guides

- `CLAUDE.md` - primary implementation workflow.
- `CODEX.md` - documentation, release, stabilization, validation review, and
  handoff workflow. Release checks and change-review templates live under
  [`.codex/`](.codex/README.md).
- `JULES.md` - bounded automated maintenance and commit rules.
- `COPILOT.md` and `.github/copilot-instructions.md` - support-assistant
  guardrails.

## Ecosystem Manifest

`spectre.manifest.json` at the root is this package's declaration in the Spectre
ecosystem contract, validated by `@phcdevworks/spectre-manifest`. It records
role, layer, exports, and allowed Spectre dependency targets. `check:ecosystem`
validates it as part of `npm run check`.

Keep `spectre.manifest.json` in sync when:

- Package exports in `package.json` are added or removed
- A Spectre package dependency is added or removed
- The package stability changes

Do not add a `consumers` field — that belongs in the central
`@phcdevworks/spectre-manifest` registry.

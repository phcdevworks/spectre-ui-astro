# ROADMAP.md

# Spectre UI Astro Roadmap

This roadmap is grounded in the current repository shape and public contract of
`@phcdevworks/spectre-ui-astro` as it exists today.

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components and framework ergonomics without redefining token
meaning, CSS ownership, or recipe logic.

The work below is focused on protecting adapter thinness, upstream contract
parity, package export clarity, and downstream consumer safety without expanding
package responsibilities or introducing broad rewrites.

## 1. Current Repo Assessment

### Current strengths

- The repo already has the correct ownership framing:
  - it owns Astro-native component delivery
  - it stays SSR-friendly and type-safe
  - it remains downstream of `@phcdevworks/spectre-ui`
  - it explicitly does not own CSS or token meaning
- The README already documents:
  - required peer dependency on `@phcdevworks/spectre-ui`
  - direct CSS import from the upstream UI package
  - root package exports
  - component entrypoints
  - key source areas
- The repo already has a mature package shape for an adapter package:
  - `src/`
  - `tests/`
  - `scripts/`
  - `examples/`
- The adapter already exposes a real public surface:
  - Astro components from the package root
  - component entrypoints
  - re-exported recipe helpers and related types from `@phcdevworks/spectre-ui`

### Current gaps to harden

- The repo documents a broad public surface, but it does not yet declare one
  single machine-readable contract anchor for:
  - root exports
  - component entrypoints
  - re-exported helper APIs
  - upstream CSS import expectation
- Adapter parity with the upstream `@phcdevworks/spectre-ui` contract should be
  treated as a first-class risk, not an implied expectation.
- Root-export, component-entrypoint, and docs parity can still drift unless
  validated from one declared contract source.
- The “thin adapter” rule is documented, but it should be enforced more
  explicitly against local styling, local CSS ownership, and upstream
  divergence.
- Built-package downstream smoke coverage should verify how Astro consumers
  actually install and import the package.

### Missing policy, docs, or tests that would improve downstream safety

- A small adapter contract manifest that declares the public adapter surface
- Explicit parity checks between stable upstream UI families and exported Astro
  components
- Packaging validation for:
  - root exports
  - component entrypoints
  - type artifacts
- A built-package smoke path proving:
  - Astro component imports work
  - component entrypoints work
  - expected upstream CSS import guidance remains correct
- A short maintainer-facing statement of adapter invariants:
  - no local CSS ownership
  - no token redefinition
  - no upstream recipe drift
  - no framework-specific reinterpretation of design meaning

## 2. Roadmap

## P0: Contract Integrity / Must-Do

### P0.1 Add a Single Adapter Contract Anchor

Objective Declare one machine-readable contract surface for the package and use
it as the basis for export, docs, and parity checks.

Why it matters This package has a real public API: Astro components, component
entrypoints, helper re-exports, and a documented upstream CSS consumption rule.
Those surfaces should be declared once and validated from that declaration
instead of being inferred separately from source, README, and emitted artifacts.

Suggested deliverables

- Add a lightweight manifest such as `astro-adapter.contract.json`
- Declare, at minimum:
  - root public exports
  - component entrypoints
  - stable helper re-exports
  - required upstream dependency expectations
  - explicit non-exports such as local CSS helper shortcuts if they are
    intentionally unsupported
- Use the manifest as the anchor for export and README parity checks

Dependency notes

- This should happen before adding more adapter surface or docs expansion

Risk if skipped

- Contract enforcement stays scattered
- Public-surface drift remains harder to detect cleanly

### P0.2 Root Export and Component Entrypoint Parity

Objective Make the declared public API consistent across source exports, emitted
package artifacts, component entrypoints, package metadata, and README
documentation.

Why it matters This package is a framework adapter. Consumers need to trust both
the root package and direct component entrypoints to remain aligned and
documented.

Suggested deliverables

- Validate root exports against the adapter contract manifest
- Validate component entrypoints against the adapter contract manifest
- Fail on undocumented or missing component entrypoints
- Keep type exports and runtime exports aligned where applicable

Dependency notes

- Depends on the adapter contract manifest

Risk if skipped

- Consumers can get mixed signals about which Astro components and paths are
  stable to import

### P0.3 Upstream UI Contract Parity

Objective Treat upstream alignment with `@phcdevworks/spectre-ui` as a
first-class protected contract rule.

Why it matters This package exists to bind the upstream Spectre UI contract into
Astro, not reinterpret or fork it. Drift in supported families, variants, sizes,
or states creates adapter-level inconsistency.

Suggested deliverables

- Declare stable supported component families in the adapter contract manifest
- Add parity checks for the stable supported families against documented
  upstream recipe/helper surfaces
- Fail when adapter support silently diverges from the stable upstream UI
  surface it claims to bind

Dependency notes

- Depends on the adapter contract manifest
- Should focus on stable supported families only, not every upstream internal
  detail

Risk if skipped

- Adapter drift can accumulate even while local tests appear healthy

### P0.4 Thin-Adapter Enforcement

Objective Enforce the rule that this package binds upstream design and styling
contracts instead of redefining them locally.

Why it matters The README already states that CSS ownership stays with
`@phcdevworks/spectre-ui` and token meaning stays upstream. That rule should be
enforced as an invariant, not only described in docs.

Suggested deliverables

- Add narrowly scoped validation that this package does not introduce local CSS
  contract ownership
- Add checks or guardrails against local token meaning redefinition
- Keep enforcement focused on adapter invariants, not generic lint ambition

Dependency notes

- Can be added alongside export and parity validation

Risk if skipped

- The adapter can slowly become a parallel styling layer instead of a thin
  framework binding

## P1: Downstream Safety

### P1.1 Built-Package Astro Consumer Smoke Coverage

Objective Validate the package as Astro consumers actually use it.

Why it matters Source-level checks are not enough for a framework adapter. The
built package must work through documented import paths and expected Astro usage
patterns.

Suggested deliverables

- Add smoke coverage for:
  - root package component imports
  - direct component entrypoint imports
  - helper/type re-exports where documented
- Confirm expected built type and runtime artifacts exist

Dependency notes

- Best added after the public adapter contract is declared

Risk if skipped

- Packaging or export issues can slip through while source tests stay green

### P1.2 README Contract Parity

Objective Keep README usage guidance aligned with the declared and emitted
adapter contract.

Why it matters For public users, README examples and export inventories are part
of the package surface.

Suggested deliverables

- Validate README contract-facing sections against:
  - the adapter contract manifest
  - package metadata
  - export snapshots if used
- Keep validation focused on:
  - root exports
  - component entrypoints
  - helper re-exports
  - peer dependency expectations
  - required upstream CSS import guidance

Dependency notes

- Depends on P0 contract and export decisions being settled

Risk if skipped

- README examples can drift from actual package behavior

### P1.3 Adapter Example Boundary Clarity

Objective Keep examples useful without letting them become a parallel contract
source.

Why it matters Examples are valuable for onboarding and verification, but the
public contract should remain the declared package surface, not incidental
example markup.

Suggested deliverables

- Clarify example status in docs
- Keep examples aligned to documented supported imports and component families
- Do not let examples define unsupported adapter behavior

Dependency notes

- Lower priority than P0 export and parity work

Risk if skipped

- Examples can become misleading or feel more authoritative than the actual API
  surface

## P2: Later / Controlled Expansion

### P2.1 Contract Coverage Map

Objective Document which script or test protects which contract area.

Why it matters As the adapter matures, maintainers should be able to see where
export, parity, packaging, and thin-adapter rules are enforced.

Suggested deliverables

- Add a short maintainer-facing coverage map in `CONTRIBUTING.md` or equivalent

Risk if skipped

- Future hardening work may duplicate checks or miss blind spots

### P2.2 Controlled Component Family Expansion

Objective Expand Astro-native component coverage only when parity and packaging
discipline are already strong.

Why it matters The adapter already exposes multiple families. Expansion should
happen only when each family can be shipped with stable export, entrypoint,
type, test, and docs coverage.

Suggested deliverables

- Rank current and future component families by:
  - stable
  - provisional
  - not yet supported
- Expand only when the contract surface can stay clear

Risk if skipped

- Adapter breadth can outpace contract clarity

## 3. Explicitly Out of Scope

- Do not redefine token meaning here
- Do not own CSS contract surfaces here
- Do not fork or locally reinterpret upstream recipe logic here
- Do not turn Astro examples into the source of truth
- Do not absorb broader framework-runtime concerns outside adapter delivery

## 4. Recommended Execution Order

1. Add `astro-adapter.contract.json`
2. Harden root export and component-entrypoint parity
3. Add stable upstream UI parity checks
4. Enforce thin-adapter invariants
5. Add built-package Astro smoke coverage
6. Add README contract parity validation
7. Clarify example boundaries
8. Add maintainer coverage mapping
9. Expand supported families only when parity remains clean

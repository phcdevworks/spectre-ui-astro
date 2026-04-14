# TODO.md

# Spectre UI Astro Execution Todo

This todo list is aligned to the current repository and the roadmap in
`ROADMAP.md`. It is intentionally scoped to adapter contract hardening, upstream
parity, package export clarity, and downstream Astro consumer safety.

## P0: Contract Integrity / Must-Do

- Add a single adapter contract manifest File targets:
  - `astro-adapter.contract.json`
  - export/parity validation scripts under `scripts/`
  - `README.md` Acceptance criteria:
  - One machine-readable file declares the public adapter surface
  - The manifest includes:
    - root public exports
    - component entrypoints
    - stable helper/type re-exports
    - peer dependency expectations
    - explicit unsupported local CSS helper shortcuts if relevant
  - Contract-facing validation reads from this manifest instead of scattered
    truth sources

- Harden root export parity File targets:
  - `src/index.ts`
  - `package.json`
  - export validation scripts under `scripts/`
  - `astro-adapter.contract.json` Acceptance criteria:
  - CI fails if root exports drift from the declared contract manifest, package
    metadata, or documented public API

- Harden component entrypoint parity File targets:
  - component entrypoint files under `src/components/`
  - `package.json`
  - export validation scripts under `scripts/`
  - `astro-adapter.contract.json` Acceptance criteria:
  - CI fails if declared component entrypoints are missing, undocumented, or
    inconsistent with the declared public contract

- Add stable upstream UI family parity checks File targets:
  - adapter parity tests under `tests/`
  - `src/components/`
  - `src/recipes/`
  - `astro-adapter.contract.json` Acceptance criteria:
  - Stable supported Astro component families are explicitly declared
  - Validation fails if supported families drift silently from the stable
    upstream UI surface this package claims to bind
  - Checks stay focused on stable supported families only

- Enforce thin-adapter invariants File targets:
  - validation scripts under `scripts/`
  - targeted tests under `tests/`
  - `README.md`
  - `CONTRIBUTING.md` if needed Acceptance criteria:
  - Validation protects the package against:
    - local CSS ownership drift
    - token meaning redefinition
    - upstream recipe/style reinterpretation
  - The adapter remains a thin Astro binding over upstream Spectre layers

## P1: Downstream Safety

- Add built-package Astro consumer smoke tests File targets:
  - smoke tests under `tests/`
  - package build/test scripts if needed Acceptance criteria:
  - Tests exercise:
    - root package Astro component imports
    - direct component entrypoint imports
    - documented helper/type re-exports
  - Tests confirm expected built runtime and type artifacts exist

- Add README contract parity validation File targets:
  - `README.md`
  - parity validation script under `scripts/`
  - `package.json`
  - `astro-adapter.contract.json` Acceptance criteria:
  - CI fails if README contract-facing sections drift from:
    - declared root exports
    - declared component entrypoints
    - stable helper/type re-exports
    - peer dependency expectations
    - required upstream CSS import guidance

- Clarify example boundary rules File targets:
  - `README.md`
  - `examples/`
  - example docs if present Acceptance criteria:
  - Examples remain aligned to the documented contract
  - Examples do not become a parallel source of truth for unsupported behavior

## P2: Later / Controlled Expansion

- Add a maintainer-facing contract coverage map File targets:
  - `CONTRIBUTING.md` Acceptance criteria:
  - Maintainers can quickly see which script or test enforces:
    - root exports
    - component entrypoints
    - upstream parity
    - thin-adapter invariants
    - README parity
    - built-package smoke coverage

- Classify supported component families by stability File targets:
  - `astro-adapter.contract.json`
  - `README.md` if needed Acceptance criteria:
  - Stable, provisional, and not-yet-supported families are clear before further
    expansion

## Explicitly Out of Scope

- Do not redefine token meaning here
- Do not add CSS ownership here
- Do not fork upstream recipe logic here
- Do not expand framework responsibilities beyond Astro adapter delivery

## Recommended Execution Order

1. Add `astro-adapter.contract.json`
2. Harden root exports
3. Harden component entrypoints
4. Add stable upstream parity checks
5. Enforce thin-adapter invariants
6. Add built-package Astro smoke tests
7. Add README parity validation
8. Clarify example boundaries
9. Add maintainer coverage mapping
10. Expand only after parity stays clean

# Spectre UI Astro Roadmap

`@phcdevworks/spectre-ui-astro` is the Astro adapter layer of the Spectre design
suite. It binds the upstream `@phcdevworks/spectre-ui` styling contract into
Astro-native components without redefining token meaning, CSS ownership, or
recipe logic.

This document tracks what's next. For what already shipped and why, see
[CHANGELOG.md](CHANGELOG.md) (release-by-release detail) and git history — this
file does not restate delivered work.

---

## System Phase Context

| Package                         | Current state                                                                |
| ------------------------------- | ---------------------------------------------------------------------------- |
| `@phcdevworks/spectre-tokens`   | v4.11.0 — current adapter peer baseline                                      |
| `@phcdevworks/spectre-ui`       | v5.3.0 — current adapter recipe baseline                                     |
| `@phcdevworks/spectre-ui-astro` | v4.9.0 + Unreleased — full UI 5.3.0 recipe and Components composition parity |

---

## Delivered Phases

| Phase | Summary                                                                                                                                                                                                                                                                                                                                                                                                                        | Shipped in  |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 1     | Contract integrity — `astro-adapter.contract.json`, root export/component entrypoint parity, thin-adapter invariants                                                                                                                                                                                                                                                                                                           | pre-2.6.0   |
| 2     | Downstream safety — built-package smoke tests, README contract parity, maintainer coverage map, family stability classification                                                                                                                                                                                                                                                                                                | pre-2.6.0   |
| 3     | Alert, Avatar, Spinner, Tag components                                                                                                                                                                                                                                                                                                                                                                                         | 2.6.0       |
| 4     | Nav, Toast, Tooltip, Dropdown, Modal components (token-gated)                                                                                                                                                                                                                                                                                                                                                                  | 2.7.0       |
| 5     | Layout components — Container, Stack, Section                                                                                                                                                                                                                                                                                                                                                                                  | 2.8.0       |
| 6 v1  | Grid component                                                                                                                                                                                                                                                                                                                                                                                                                 | 2.9.0       |
| 7     | App shell layout — Sidebar, Footer, Stack `basis`/Container `maxWidth` options, sidebar off-canvas interaction                                                                                                                                                                                                                                                                                                                 | 2.3.0-range |
| 8     | Sidebar toggle z-index fix, Stack `align` option                                                                                                                                                                                                                                                                                                                                                                               | 2.4.0-range |
| 9     | Sidebar header/indent, full-height fix                                                                                                                                                                                                                                                                                                                                                                                         | 2.5.0-range |
| 10    | Form-field parity — Checkbox, Radio, Select, Textarea, Fieldset, Label                                                                                                                                                                                                                                                                                                                                                         | 3.3.0       |
| 11    | Sidebar composition (`SpSidebarToggle`), Nav `align` forwarding, TypeScript 5/6/7 peer support                                                                                                                                                                                                                                                                                                                                 | 3.4.1–3.7.0 |
| 12    | Spectre v4/v3 alignment — Tailwind integration removed, `getTextClasses` re-export                                                                                                                                                                                                                                                                                                                                             | 4.0.0       |
| 13    | `SpText` component — closes the `text` family gap (Phase 4g parity), requested by `spectre-base`                                                                                                                                                                                                                                                                                                                               | 4.1.0       |
| 14    | `SpNavItem` component — nav composition parity                                                                                                                                                                                                                                                                                                                                                                                 | 4.2.0       |
| 15    | `SpText` `transform` and `SpGrid` `span` (Grid v2) parity, consuming `spectre-ui@3.2.0`                                                                                                                                                                                                                                                                                                                                        | 4.3.0       |
| 16    | Production Layout Parity Audit — Grid v2 column/row offsets and custom track sizing (`SpGrid`), Footer sub-recipe re-exports, Dropdown/NavItem `mega` wide-menu support, and compact buttons, consuming `spectre-ui@4.0.0`                                                                                                                                                                                                     | 4.4.0       |
| 17    | Navigation Helper and Layout Parity — `SpFooterLink`, `SpFooterChip`, `SpSidebarLink`, Grid alignment, and Stack gap support, consuming `spectre-ui@4.3.0`                                                                                                                                                                                                                                                                     | 4.6.0       |
| 18    | Accent-rail parity sweep — `SpCard` forwards `accent`/`accentColor`; `SpTestimonial`, `SpPricingCard`, `SpNav`, `SpFooter`, `SpModal`, `SpToast`, `SpTooltip`, and `SpNavItem`'s dropdown menu gain the same; `SpBadge` gains `accentRail`/`accentRailColor`; `SpDropdown`/`SpNavItem` gain the `viewport` full-width menu tier; `getCardBleedClasses` re-exported for full-bleed card children — consuming `spectre-ui@5.2.0` | 4.9.0       |
| 19    | Bootstrap-scale inventory expansion — Tabs/TabPanel, Accordion/AccordionItem, Breadcrumb, ListGroup/ListGroupItem, Offcanvas, Carousel, Table, expanded Alert composition, Pagination, and Stepper; consuming `spectre-ui@5.3.0` and `spectre-tokens@4.11.0`                                                                                                                                                                   | Unreleased  |
| 20    | Full `spectre-ui@5.3.0` recipe parity — ChoiceCard, Datepicker/Day, Display, Heading, Lead, Prose, ExternalAuthButton, FileInput, InputGroup/InputGroupAddon, Popover, Progress, Range, and Switch; every upstream helper/type re-exported; Badge `dot`, Container `padding`, Section `spacing`/`gap`, Grid `colStart`, and NavItem link-state forwarding; parity test fails on any unexported upstream helper                 | Unreleased  |
| 21    | spectre-components composition parity — part components for card bleed, dropdown menu/item/header/divider, footer heading/text/links/divider, nav links, sidebar group/header, table rows, and carousel slides/indicators                                                                                                                                                                                                      | Unreleased  |

---

## What's Next

New adapter families are built proactively for every published
`@phcdevworks/spectre-ui` recipe family that has no Astro component yet — no
downstream request needed. See [TODO.md](TODO.md) for the active work queue.

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

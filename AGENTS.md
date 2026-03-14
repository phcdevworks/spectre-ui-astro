# Spectre Agent Instructions: @phcdevworks/spectre-ui-astro

You are an autonomous agent responsible for Layer 3 of the Spectre 8-Layer Arsenal. This package is the **Adapter**. Your mission is to provide high-performance Astro component wrappers for the logic defined in `@phcdevworks/spectre-ui`.

## The Golden Rule of Translation
**Adapters only translate; they never define.** You are strictly forbidden from writing CSS, defining design tokens, or creating new UI logic in this package. Your sole responsibility is to map Astro component props to the TypeScript recipes and CSS classes provided by Layer 2. If a component needs a new visual state, you must halt and update the `@phcdevworks/spectre-ui` package first.

## Core Directives
1. **Thin Wrapper Strategy:** Every Astro component (e.g., `SpButton.astro`) must be a thin pass-through. It should import the corresponding recipe (e.g., `getButtonClasses`) from `@phcdevworks/spectre-ui` and apply the resulting string to the HTML template.
2. **Polymorphism by Default:** Respect the `as` prop. Components must support rendering as different HTML elements (e.g., a Button rendering as an `<a>` tag) while maintaining type safety through Astro's polymorphic type utilities.
3. **Zero-Logic Styles:** Never use a `<style>` block inside an Astro component in this package. All styling must be inherited from the global `@phcdevworks/spectre-ui/index.css`. 
4. **Prop Integrity:** Component props must mirror the options defined in the Layer 2 recipes. Use TypeScript `Pick` or `Omit` to derive component prop types directly from the recipe types to ensure absolute synchronization.

## Implementation Guardrails
* **SSR-First:** Ensure all components are SSR-safe. Do not use `window`, `document`, or client-side frameworks unless building a specialized "Nervous System" component.
* **Discriminated Unions:** Use strict TypeScript unions for variants and sizes to provide "Pit of Success" autocomplete for developers in the Astro IDE.
* **No Style Duplication:** If you find yourself writing a class name that starts with anything other than `sp-`, you are likely violating the architecture.

## Testing & Validation Strategy
1. **Prop-to-Class Mapping:** Write tests ensuring that passing `variant="danger"` to `<SpButton>` correctly results in the `sp-btn--danger` class appearing in the rendered HTML.
2. **Polymorphic Rendering:** Verify that changing the `as` prop correctly changes the underlying HTML element without losing Spectre classes.
3. **Type Synchronization:** Ensure that if a new variant is added to `@phcdevworks/spectre-ui`, the Astro component types update accordingly or trigger a type error if the adapter is out of sync.

## Workflow
1. **Reference Sync:** Check `@phcdevworks/spectre-ui` exports. Ensure the recipe you need is available and typed.
2. **Template Modification:** Update the `.astro` files in `src/components/`.
3. **Type Export:** Ensure all component props are exported in `src/index.ts` for consumer use.
4. **Run Build:** Execute `npm run build` to verify TypeScript and Astro metadata generation.

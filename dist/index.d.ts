/**
 * @phcdevworks/spectre-ui-astro
 *
 * Astro integration layer for the Spectre design system.
 *
 * @example
 * ```astro
 * ---
 * import { SpButton, SpCard, SpInput } from "@phcdevworks/spectre-ui-astro";
 * ---
 *
 * <SpButton variant="primary" size="lg">
 *   Get Started
 * </SpButton>
 * ```
 */
export { default as SpButton } from "./components/SpButton.astro";
export { default as SpCard } from "./components/SpCard.astro";
export { default as SpInput } from "./components/SpInput.astro";
export type { SpButtonProps, SpButtonVariant, SpButtonSize } from "./types/button";
export type { SpCardProps, SpCardVariant } from "./types/card";
export type { SpInputProps, SpInputState } from "./types/input";
/**
 * CSS Import Path Constants
 */
export declare const SPECTRE_CSS_PATHS: {
    readonly base: "@phcdevworks/spectre-ui/dist/base.css";
    readonly components: "@phcdevworks/spectre-ui/dist/components.css";
    readonly utilities: "@phcdevworks/spectre-ui/dist/utilities.css";
};
//# sourceMappingURL=index.d.ts.map
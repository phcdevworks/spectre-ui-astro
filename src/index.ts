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

// Export Astro components (for Astro projects to import directly)
export { default as SpButton } from "./components/SpButton.astro";
export { default as SpCard } from "./components/SpCard.astro";
export { default as SpInput } from "./components/SpInput.astro";

// Export types
export type {
  SpButtonProps,
  SpButtonVariant,
  SpButtonSize,
  SpButtonState,
  SpButtonElement,
} from "./types/button";

export type {
  SpCardProps,
  SpCardVariant,
  SpCardElement,
} from "./types/card";

export type {
  SpInputProps,
  SpInputState,
  SpInputType,
} from "./types/input";

/**
 * CSS Import Path Constants
 */
export const SPECTRE_CSS_PATHS = {
  base: "@phcdevworks/spectre-ui/dist/base.css",
  components: "@phcdevworks/spectre-ui/dist/components.css",
  utilities: "@phcdevworks/spectre-ui/dist/utilities.css",
} as const;

/**
 * @phcdevworks/spectre-ui-astro
 *
 * Astro integration layer for the Spectre design system.
 *
 * This package provides ergonomic Astro components that wrap
 * @phcdevworks/spectre-ui's design system without reimplementing
 * any design logic.
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

// Export Astro components
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
 *
 * Import these CSS files from @phcdevworks/spectre-ui in your Astro project:
 *
 * @example
 * ```astro
 * ---
 * // In your layout or page:
 * import "@phcdevworks/spectre-ui/dist/base.css";
 * import "@phcdevworks/spectre-ui/dist/components.css";
 * import "@phcdevworks/spectre-ui/dist/utilities.css";
 * ---
 * ```
 */
export const SPECTRE_CSS_PATHS = {
  base: "@phcdevworks/spectre-ui/dist/base.css",
  components: "@phcdevworks/spectre-ui/dist/components.css",
  utilities: "@phcdevworks/spectre-ui/dist/utilities.css",
} as const;

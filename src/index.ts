export { default as SpButton } from "./components/SpButton.astro";
export { default as SpCard } from "./components/SpCard.astro";
export { default as SpInput } from "./components/SpInput.astro";

export const SPECTRE_CSS_PATHS = {
  base: "@phcdevworks/spectre-ui/base.css",
  components: "@phcdevworks/spectre-ui/components.css",
  utilities: "@phcdevworks/spectre-ui/utilities.css",
} as const;

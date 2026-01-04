import { spectreStyles } from "@phcdevworks/spectre-ui";

// Canonical Spectre UI CSS entry (tokens + base + components + utilities)
export const SPECTRE_UI_CSS = spectreStyles.index;

// Components (Astro)
export { default as SpBadge } from "./components/SpBadge.astro";
export { default as SpButton } from "./components/SpButton.astro";
export { default as SpCard } from "./components/SpCard.astro";
export { default as SpIconBox } from "./components/SpIconBox.astro";
export { default as SpInput } from "./components/SpInput.astro";

// Re-export all types and recipes
export * from "./recipes/index";

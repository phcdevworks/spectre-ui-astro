import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getInputClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpInput from "../src/components/SpInput.astro";
import type { SpInputProps } from "../src/components/sp-input.shared";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpInput improvement verification", () => {
  it("passes hovered and focused states to the recipe and prevents attribute leakage", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        hovered: true,
        focused: true,
      } as SpInputProps,
    });

    // Verify classes are applied
    expect(html).toContain(getInputClasses({ hovered: true, focused: true }));

    // Verify attributes do NOT leak to the input element
    // Note: Astro might render 'focused="true"' or just 'focused'
    expect(html).not.toContain('focused="true"');
    expect(html).not.toContain('hovered="true"');
    // Also check for the boolean attribute form if applicable, though less likely for these custom prop names
    expect(html).not.toMatch(/<input[^>]*\bfocused\b/);
    expect(html).not.toMatch(/<input[^>]*\bhovered\b/);
  });
});

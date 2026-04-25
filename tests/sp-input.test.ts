import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getInputClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpInput from "../src/components/SpInput.astro";
import type { SpInputProps } from "../src/components/sp-input.shared";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpInput state behavior", () => {
  it("passes hovered, focused, and active states to the recipe without leaking them to DOM", async () => {
    const html = await container.renderToString(SpInput, {
      props: { hovered: true, focused: true, active: true } as SpInputProps,
    });

    expect(html).toContain(
      getInputClasses({ hovered: true, focused: true, active: true }),
    );
    expect(html).not.toContain('focused="true"');
    expect(html).not.toContain('hovered="true"');
    expect(html).not.toContain('active="true"');
    expect(html).not.toMatch(/<input[^>]*\sfocused\b/);
    expect(html).not.toMatch(/<input[^>]*\shovered\b/);
    expect(html).not.toMatch(/<input[^>]*\sactive\b/);
  });
});

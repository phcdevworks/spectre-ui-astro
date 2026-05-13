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

describe("SpInput accessibility and state synchronization", () => {
  it("synchronizes state='error' and aria-invalid when errorMessage is present", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        errorMessage: "Something went wrong",
      } as SpInputProps,
    });

    // Check for error class
    expect(html).toContain(getInputClasses({ state: "error" }));

    // Check for aria-invalid
    expect(html).toContain('aria-invalid="true"');
  });

  it("merges user-provided aria-describedby with generated IDs", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        helperText: "Help me",
        "aria-describedby": "external-id",
      } as SpInputProps,
    });

    // It should contain both
    expect(html).toContain('aria-describedby="external-id test-input-helper"');
  });

  it("preserves explicit aria-invalid when no error message is present", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        "aria-invalid": "grammar",
      } as SpInputProps,
    });

    expect(html).toContain('aria-invalid="grammar"');
  });
});

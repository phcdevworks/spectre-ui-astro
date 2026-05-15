import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getInputClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpInput from "../src/components/SpInput.astro";
import type { SpInputProps } from "../src/components/sp-input.shared";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpInput behavior", () => {
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

  it("automatically sets visual error state and aria-invalid when errorMessage is present", async () => {
    const html = await container.renderToString(SpInput, {
      props: { id: "test-input", errorMessage: "Invalid input" } as SpInputProps,
    });

    expect(html).toContain(getInputClasses({ state: "error" }));
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain('id="test-input-error"');
    expect(html).toContain('aria-describedby="test-input-error"');
    expect(html).toContain('aria-live="polite"');
    expect(html).toContain('aria-atomic="true"');
  });

  it("merges user-provided aria-describedby with generated IDs", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        helperText: "Help",
        "aria-describedby": "external-id",
      } as SpInputProps,
    });

    expect(html).toContain('aria-describedby="external-id test-input-helper"');
  });

  it("allows overriding aria-invalid even when errorMessage is present", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        errorMessage: "Error",
        "aria-invalid": "grammar",
      } as SpInputProps,
    });

    expect(html).toContain('aria-invalid="grammar"');
    expect(html).not.toContain('aria-invalid="true"');
  });

  it("prioritizes errorId over helperId in aria-describedby when both are present", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        helperText: "Help",
        errorMessage: "Error",
      } as SpInputProps,
    });

    expect(html).toContain('aria-describedby="test-input-error"');
    expect(html).not.toContain("test-input-helper");
  });

  it("prioritizes user-provided aria-invalid over internal state", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        "aria-invalid": "false",
        state: "error"
      } as SpInputProps,
    });

    expect(html).toContain('aria-invalid="false"');
  });
});

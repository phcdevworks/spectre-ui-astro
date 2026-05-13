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

describe("SpInput accessibility and error state synchronization", () => {
  it("merges custom aria-describedby with internal helperText ID", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        helperText: "Helpful text",
        "aria-describedby": "custom-desc",
      } as SpInputProps,
    });

    expect(html).toContain('aria-describedby="test-input-helper custom-desc"');
  });

  it("prioritizes user-provided aria-invalid over internal state", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        "aria-invalid": "grammar",
        state: "error",
      } as SpInputProps,
    });

    expect(html).toContain('aria-invalid="grammar"');
  });

  it("automatically sets aria-invalid and applies error state when errorMessage is provided", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        errorMessage: "Something went wrong",
      } as SpInputProps,
    });

    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain(getInputClasses({ state: "error" }));
    expect(html).toContain('id="test-input-error"');
    expect(html).toContain('aria-describedby="test-input-error"');
  });

  it("omits helper text IDs from aria-describedby when an error message is rendered", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "test-input",
        helperText: "Helpful text",
        errorMessage: "Something went wrong",
      } as SpInputProps,
    });

    expect(html).toContain('aria-describedby="test-input-error"');
    expect(html).not.toContain("test-input-helper");
  });
});

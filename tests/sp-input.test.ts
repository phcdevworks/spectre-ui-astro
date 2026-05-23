import { experimental_AstroContainer as AstroContainer } from "astro/container";
import {
  getInputClasses,
  getInputErrorMessageClasses,
  getInputHelperTextClasses,
  getInputLabelClasses,
  getInputWrapperClasses,
} from "@phcdevworks/spectre-ui";
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
    expect(html).toContain(getInputWrapperClasses());
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
    expect(html).toContain(getInputErrorMessageClasses());
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
    expect(html).toContain(getInputHelperTextClasses());
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
        label: "Label"
      } as SpInputProps,
    });

    expect(html).toContain('aria-describedby="test-input-error"');
    expect(html).not.toContain("test-input-helper");
    expect(html).toContain(getInputLabelClasses({ disabled: false }));
    expect(html).toContain(getInputErrorMessageClasses());
    expect(html).not.toContain(getInputHelperTextClasses());
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

  it("applies aria-live='polite' to the error message", async () => {
    const html = await container.renderToString(SpInput, {
      props: { id: "test-input", errorMessage: "Error occurred" } as SpInputProps,
    });

    expect(html).toContain('aria-live="polite"');
    expect(html).toContain(getInputErrorMessageClasses());
  });

  it("supports 'li' and 'nav' as wrapper tags", async () => {
    const htmlLi = await container.renderToString(SpInput, {
      props: { as: "li" } as SpInputProps,
    });
    expect(htmlLi).toContain("<li");

    const htmlNav = await container.renderToString(SpInput, {
      props: { as: "nav" } as SpInputProps,
    });
    expect(htmlNav).toContain("<nav");
  });

  it("forwards standard HTML input attributes correctly", async () => {
    const props: SpInputProps = {
      name: "test-name",
      value: "test-value",
      placeholder: "test-placeholder",
      type: "email",
      autocomplete: "email",
      "aria-label": "test-label",
      required: true,
      readonly: true,
    };

    const html = await container.renderToString(SpInput, { props });

    expect(html).toContain('name="test-name"');
    expect(html).toContain('value="test-value"');
    expect(html).toContain('placeholder="test-placeholder"');
    expect(html).toContain('type="email"');
    expect(html).toContain('autocomplete="email"');
    expect(html).toContain('aria-label="test-label"');
    expect(html).toMatch(/<input[^>]*\srequired\b/);
    expect(html).toMatch(/<input[^>]*\sreadonly\b/);
    expect(html).toContain('aria-required="true"');
  });

  it("does not set aria-required when required is false or undefined", async () => {
    const html = await container.renderToString(SpInput, {
      props: { required: false } as SpInputProps,
    });
    expect(html).not.toContain('aria-required="true"');
  });
});

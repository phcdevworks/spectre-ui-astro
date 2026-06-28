import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getTextareaClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpTextarea from "../src/components/SpTextarea.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpTextarea class and prop behavior", () => {
  it("applies the base class and no state modifiers by default", async () => {
    const html = await container.renderToString(SpTextarea, { props: {} });

    expect(html).toContain(getTextareaClasses());
  });

  it("applies focused class and does not leak the prop to the DOM", async () => {
    const html = await container.renderToString(SpTextarea, {
      props: { focused: true },
    });

    expect(html).toContain(getTextareaClasses({ focused: true }));
    expect(html).not.toContain('focused="true"');
  });

  it("applies disabled class and renders the disabled attribute", async () => {
    const html = await container.renderToString(SpTextarea, {
      props: { disabled: true },
    });

    expect(html).toContain(getTextareaClasses({ disabled: true }));
    expect(html).toContain("disabled");
    expect(html).toContain('aria-disabled="true"');
  });

  it("renders the value as element content", async () => {
    const html = await container.renderToString(SpTextarea, {
      props: { value: "Hello world" },
    });

    expect(html).toContain("Hello world");
  });
});

describe("SpTextarea explicit attribute support", () => {
  it("renders id, name, rows, placeholder, and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpTextarea, {
      props: {
        id: "bio",
        name: "bio",
        rows: 4,
        placeholder: "Tell us about yourself",
        "aria-describedby": "bio-help",
      },
    });

    expect(html).toContain('id="bio"');
    expect(html).toContain('name="bio"');
    expect(html).toContain('rows="4"');
    expect(html).toContain('placeholder="Tell us about yourself"');
    expect(html).toContain('aria-describedby="bio-help"');
  });

  it("renders required and readonly when provided", async () => {
    const html = await container.renderToString(SpTextarea, {
      props: { required: true, readonly: true },
    });

    expect(html).toContain("required");
    expect(html).toContain("readonly");
  });
});

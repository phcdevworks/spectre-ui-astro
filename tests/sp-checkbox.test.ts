import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getCheckboxClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpCheckbox from "../src/components/SpCheckbox.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpCheckbox class and prop behavior", () => {
  it("applies the base class and no state modifiers by default", async () => {
    const html = await container.renderToString(SpCheckbox, { props: {} });

    expect(html).toContain(getCheckboxClasses());
  });

  it("applies checked class and renders the checked attribute", async () => {
    const html = await container.renderToString(SpCheckbox, {
      props: { checked: true },
    });

    expect(html).toContain(getCheckboxClasses({ checked: true }));
    expect(html).toContain("checked");
  });

  it("applies disabled class and does not leak the prop to the DOM as a custom attribute", async () => {
    const html = await container.renderToString(SpCheckbox, {
      props: { disabled: true },
    });

    expect(html).toContain(getCheckboxClasses({ disabled: true }));
    expect(html).toContain("disabled");
    expect(html).toContain('aria-disabled="true"');
  });

  it("renders as a native checkbox input", async () => {
    const html = await container.renderToString(SpCheckbox, { props: {} });

    expect(html).toContain('type="checkbox"');
  });
});

describe("SpCheckbox explicit attribute support", () => {
  it("renders id, name, value, and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpCheckbox, {
      props: {
        id: "agree",
        name: "terms",
        value: "yes",
        "aria-describedby": "terms-help",
      },
    });

    expect(html).toContain('id="agree"');
    expect(html).toContain('name="terms"');
    expect(html).toContain('value="yes"');
    expect(html).toContain('aria-describedby="terms-help"');
  });

  it("renders required when provided", async () => {
    const html = await container.renderToString(SpCheckbox, {
      props: { required: true },
    });

    expect(html).toContain("required");
  });
});

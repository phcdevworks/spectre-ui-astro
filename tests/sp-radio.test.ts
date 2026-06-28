import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getRadioClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpRadio from "../src/components/SpRadio.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpRadio class and prop behavior", () => {
  it("applies the base class and no state modifiers by default", async () => {
    const html = await container.renderToString(SpRadio, { props: {} });

    expect(html).toContain(getRadioClasses());
  });

  it("applies checked class and renders the checked attribute", async () => {
    const html = await container.renderToString(SpRadio, {
      props: { checked: true },
    });

    expect(html).toContain(getRadioClasses({ checked: true }));
    expect(html).toContain("checked");
  });

  it("applies disabled class and does not leak the prop to the DOM as a custom attribute", async () => {
    const html = await container.renderToString(SpRadio, {
      props: { disabled: true },
    });

    expect(html).toContain(getRadioClasses({ disabled: true }));
    expect(html).toContain("disabled");
    expect(html).toContain('aria-disabled="true"');
  });

  it("renders as a native radio input", async () => {
    const html = await container.renderToString(SpRadio, { props: {} });

    expect(html).toContain('type="radio"');
  });
});

describe("SpRadio explicit attribute support", () => {
  it("renders id, name, value, and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpRadio, {
      props: {
        id: "plan-pro",
        name: "plan",
        value: "pro",
        "aria-describedby": "plan-help",
      },
    });

    expect(html).toContain('id="plan-pro"');
    expect(html).toContain('name="plan"');
    expect(html).toContain('value="pro"');
    expect(html).toContain('aria-describedby="plan-help"');
  });

  it("renders required when provided", async () => {
    const html = await container.renderToString(SpRadio, {
      props: { required: true },
    });

    expect(html).toContain("required");
  });
});

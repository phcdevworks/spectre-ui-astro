import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getFieldsetClasses, getFieldsetLegendClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpFieldset from "../src/components/SpFieldset.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpFieldset class and prop behavior", () => {
  it("applies the base class and no state modifiers by default", async () => {
    const html = await container.renderToString(SpFieldset, { props: {} });

    expect(html).toContain(getFieldsetClasses());
  });

  it("applies disabled class and renders the disabled attribute", async () => {
    const html = await container.renderToString(SpFieldset, {
      props: { disabled: true },
    });

    expect(html).toContain(getFieldsetClasses({ disabled: true }));
    expect(html).toContain("disabled");
    expect(html).toContain('aria-disabled="true"');
  });

  it("renders a legend with the legend recipe class when legend is provided", async () => {
    const html = await container.renderToString(SpFieldset, {
      props: { legend: "Contact details" },
    });

    expect(html).toContain(`<legend class="${getFieldsetLegendClasses()}">Contact details</legend>`);
  });

  it("does not render a legend element when legend is empty or omitted", async () => {
    const html = await container.renderToString(SpFieldset, { props: {} });

    expect(html).not.toContain("<legend");
  });

  it("renders slotted field children", async () => {
    const html = await container.renderToString(SpFieldset, {
      props: {},
      slots: { default: "<input type=\"text\" />" },
    });

    expect(html).toContain("<fieldset");
    expect(html).toContain('<input type="text"');
  });
});

describe("SpFieldset explicit attribute support", () => {
  it("renders id, name, form, and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpFieldset, {
      props: {
        id: "contact",
        name: "contact",
        form: "signup",
        "aria-describedby": "contact-help",
      },
    });

    expect(html).toContain('id="contact"');
    expect(html).toContain('name="contact"');
    expect(html).toContain('form="signup"');
    expect(html).toContain('aria-describedby="contact-help"');
  });
});

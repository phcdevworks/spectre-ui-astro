import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getLabelClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpLabel from "../src/components/SpLabel.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpLabel class and prop behavior", () => {
  it("applies the base class and no state modifiers by default", async () => {
    const html = await container.renderToString(SpLabel, { props: {} });

    expect(html).toContain(getLabelClasses());
  });

  it("applies disabled class and does not leak the prop to the DOM", async () => {
    const html = await container.renderToString(SpLabel, {
      props: { disabled: true },
    });

    expect(html).toContain(getLabelClasses({ disabled: true }));
    expect(html).not.toContain('disabled="true"');
  });

  it("applies required class and does not leak the prop to the DOM", async () => {
    const html = await container.renderToString(SpLabel, {
      props: { required: true },
    });

    expect(html).toContain(getLabelClasses({ required: true }));
    expect(html).not.toContain('required="true"');
  });

  it("renders the for attribute from the htmlFor prop", async () => {
    const html = await container.renderToString(SpLabel, {
      props: { htmlFor: "agree" },
    });

    expect(html).toContain('for="agree"');
  });

  it("renders slotted label text", async () => {
    const html = await container.renderToString(SpLabel, {
      props: {},
      slots: { default: "I agree to the terms" },
    });

    expect(html).toContain("I agree to the terms");
  });
});

describe("SpLabel explicit attribute support", () => {
  it("renders id and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpLabel, {
      props: {
        id: "agree-label",
        "aria-describedby": "agree-help",
      },
    });

    expect(html).toContain('id="agree-label"');
    expect(html).toContain('aria-describedby="agree-help"');
  });
});

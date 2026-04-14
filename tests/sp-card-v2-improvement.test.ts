import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it, beforeAll } from "vitest";
import SpCard from "../src/components/SpCard.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpCard accessibility and attribute guarding improvements", () => {
  it("applies role='button' when interactive and not a native button or link", async () => {
    const html = await container.renderToString(SpCard, {
      props: {
        interactive: true,
        as: "div",
      },
    });

    expect(html).toContain('role="button"');
  });

  it("does not apply role='button' to native buttons or links even if interactive", async () => {
    const buttonHtml = await container.renderToString(SpCard, {
      props: {
        interactive: true,
        as: "button",
      },
    });
    expect(buttonHtml).not.toContain('role="button"');

    const linkHtml = await container.renderToString(SpCard, {
      props: {
        interactive: true,
        as: "a",
      },
    });
    expect(linkHtml).not.toContain('role="button"');
  });

  it("guards tabindex for non-native elements when disabled", async () => {
    const html = await container.renderToString(SpCard, {
      props: {
        as: "div",
        disabled: true,
        tabindex: 0,
      },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("guards tabindex for links when disabled", async () => {
    const html = await container.renderToString(SpCard, {
      props: {
        as: "a",
        disabled: true,
        tabindex: 0,
      },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("does not force tabindex='-1' on native buttons when disabled", async () => {
    // Native buttons handle disabled state naturally
    const html = await container.renderToString(SpCard, {
      props: {
        as: "button",
        disabled: true,
      },
    });

    expect(html).not.toContain('tabindex="-1"');
  });
});

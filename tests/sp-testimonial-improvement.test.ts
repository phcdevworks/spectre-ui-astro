import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getTestimonialClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpTestimonial from "../src/components/SpTestimonial.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpTestimonial improvements", () => {
  it("passes interactive state props to getTestimonialClasses", async () => {
    const props = {
      interactive: true,
      hovered: true,
      focused: true,
      active: true,
    };
    const html = await container.renderToString(SpTestimonial, {
      props,
    });

    const expectedClasses = getTestimonialClasses(props);
    expect(html).toContain(expectedClasses);
  });

  it("applies role='button' to interactive non-native elements", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        interactive: true,
        as: "div",
      },
    });

    expect(html).toContain('role="button"');
  });

  it("does not apply role='button' to non-interactive elements", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        interactive: false,
        as: "div",
      },
    });

    expect(html).not.toContain('role="button"');
  });

  it("does not apply role='button' to native buttons even if interactive", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        interactive: true,
        as: "button",
      },
    });

    expect(html).not.toContain('role="button"');
  });

  it("does not apply role='button' to anchors even if interactive", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        interactive: true,
        as: "a",
      },
    });

    expect(html).not.toContain('role="button"');
  });

  it("applies default tabindex='0' to interactive non-native elements", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        interactive: true,
        as: "div",
      },
    });

    expect(html).toContain('tabindex="0"');
  });

  it("guards target and rel attributes to only render on anchors", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        as: "div",
        target: "_blank",
        rel: "noopener",
      },
    });

    expect(html).not.toContain('target="_blank"');
    expect(html).not.toContain('rel="noopener"');
  });
});

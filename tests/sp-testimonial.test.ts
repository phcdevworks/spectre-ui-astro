import { experimental_AstroContainer as AstroContainer } from "astro/container";
import {
  getTestimonialClasses,
  getTestimonialQuoteClasses,
  getTestimonialAuthorClasses,
  getTestimonialAuthorInfoClasses,
  getTestimonialAuthorNameClasses,
  getTestimonialAuthorTitleClasses,
} from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpTestimonial from "../src/components/SpTestimonial.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpTestimonial SSR rendering", () => {
  it("renders with aria-label", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { "aria-label": "User testimonial" },
    });

    expect(html).toContain('aria-label="User testimonial"');
  });

  it("applies tabindex=-1 to a disabled anchor", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { as: "a", href: "/testimonials/1", disabled: true },
    });

    expect(html).toContain(getTestimonialClasses({ disabled: true }));
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain('href="/testimonials/1"');
  });

  it("preserves custom tabindex when not disabled", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { as: "a", href: "/testimonials/1", tabindex: 0 },
    });

    expect(html).toContain('tabindex="0"');
    expect(html).toContain('href="/testimonials/1"');
  });

  it("applies aria-busy and tabindex=-1 when loading", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { as: "a", href: "/testimonials/1", loading: true },
    });

    expect(html).toContain(getTestimonialClasses({ loading: true, disabled: true }));
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
    expect(html).not.toContain('href="/testimonials/1"');
  });

  it("guards tabindex=-1 for disabled non-button elements", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { as: "div", tabindex: 0, disabled: true },
    });

    expect(html).toContain('tabindex="-1"');
  });
});

describe("SpTestimonial interactive behavior", () => {
  it("passes interactive state props to getTestimonialClasses", async () => {
    const props = { interactive: true, hovered: true, focused: true, active: true };
    const html = await container.renderToString(SpTestimonial, { props });

    expect(html).toContain(getTestimonialClasses(props));
  });

  it("applies role='button' to interactive non-native elements", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { interactive: true, as: "div" },
    });

    expect(html).toContain('role="button"');
  });

  it("does not apply role='button' to non-interactive elements", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { interactive: false, as: "div" },
    });

    expect(html).not.toContain('role="button"');
  });

  it("does not apply role='button' to native buttons or anchors even if interactive", async () => {
    const buttonHtml = await container.renderToString(SpTestimonial, {
      props: { interactive: true, as: "button" },
    });
    expect(buttonHtml).not.toContain('role="button"');

    const anchorHtml = await container.renderToString(SpTestimonial, {
      props: { interactive: true, as: "a" },
    });
    expect(anchorHtml).not.toContain('role="button"');
  });

  it("applies default tabindex=0 to interactive non-native elements", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { interactive: true, as: "div" },
    });

    expect(html).toContain('tabindex="0"');
  });

  it("guards target and rel attributes to only render on anchors", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { as: "div", target: "_blank", rel: "noopener" },
    });

    expect(html).not.toContain('target="_blank"');
    expect(html).not.toContain('rel="noopener"');
  });
});

describe("SpTestimonial slot behavior", () => {
  it("passes fullHeight prop to getTestimonialClasses", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: { fullHeight: true },
    });

    expect(html).toContain(getTestimonialClasses({ fullHeight: true }));
  });

  it("does not render empty wrapper elements for unpopulated slots", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {},
    });

    expect(html).not.toContain(getTestimonialQuoteClasses());
    expect(html).not.toContain(getTestimonialAuthorClasses());
    expect(html).not.toContain(getTestimonialAuthorInfoClasses());
    expect(html).not.toContain(getTestimonialAuthorNameClasses());
    expect(html).not.toContain(getTestimonialAuthorTitleClasses());
  });

  it("renders wrapper elements when slots are populated", async () => {
    const html = await container.renderToString(SpTestimonial, {
      slots: {
        quote: "Great product!",
        "author-name": "Jane Doe",
      },
    });

    expect(html).toContain(getTestimonialQuoteClasses());
    expect(html).toContain(getTestimonialAuthorClasses());
    expect(html).toContain(getTestimonialAuthorInfoClasses());
    expect(html).toContain(getTestimonialAuthorNameClasses());
    expect(html).not.toContain(getTestimonialAuthorTitleClasses());
    expect(html).toContain("Great product!");
    expect(html).toContain("Jane Doe");
  });
});

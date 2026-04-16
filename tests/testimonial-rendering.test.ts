import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getTestimonialClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpTestimonial from "../src/components/SpTestimonial.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpTestimonial SSR rendering", () => {
  it("renders with aria-label", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        "aria-label": "User testimonial",
      },
    });

    expect(html).toContain('aria-label="User testimonial"');
  });

  it("applies tabindex='-1' to disabled anchor testimonial", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        as: "a",
        href: "/testimonials/1",
        disabled: true,
      },
    });

    expect(html).toContain(getTestimonialClasses({ disabled: true }));
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain('href="/testimonials/1"');
  });

  it("preserves custom tabindex when not disabled", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        as: "a",
        href: "/testimonials/1",
        tabindex: 0,
      },
    });

    expect(html).toContain('tabindex="0"');
    expect(html).toContain('href="/testimonials/1"');
  });

  it("handles loading state with aria-busy and tabindex='-1'", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        as: "a",
        href: "/testimonials/1",
        loading: true,
      },
    });

    expect(html).toContain(getTestimonialClasses({ loading: true, disabled: true }));
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
    expect(html).not.toContain('href="/testimonials/1"');
  });

  it("applies tabindex='-1' to disabled non-button elements with custom tabindex", async () => {
    const html = await container.renderToString(SpTestimonial, {
      props: {
        as: "div",
        tabindex: 0,
        disabled: true,
      },
    });

    expect(html).toContain('tabindex="-1"');
  });
});

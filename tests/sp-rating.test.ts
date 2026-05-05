import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, it } from "vitest";
import SpRating from "../src/components/SpRating.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpRating accessibility", () => {
  it("renders aria-label on the root element", async () => {
    const html = await container.renderToString(SpRating, {
      props: { "aria-label": "User rating: 4 out of 5 stars", value: 4 },
    });

    expect(html).toContain('aria-label="User rating: 4 out of 5 stars"');
  });

  it("hides the stars container from screen readers", async () => {
    const html = await container.renderToString(SpRating, {
      props: { value: 3 },
    });

    expect(html).toContain('aria-hidden="true"');
  });

  it("applies tabindex=-1 to non-button tags when disabled or loading", async () => {
    const htmlDisabledDiv = await container.renderToString(SpRating, {
      props: { as: "div", disabled: true },
    });
    expect(htmlDisabledDiv).toContain('tabindex="-1"');

    const htmlLoadingSpan = await container.renderToString(SpRating, {
      props: { as: "span", loading: true },
    });
    expect(htmlLoadingSpan).toContain('tabindex="-1"');

    const htmlDisabledAnchor = await container.renderToString(SpRating, {
      props: { as: "a", href: "/rate", disabled: true },
    });
    expect(htmlDisabledAnchor).toContain('tabindex="-1"');
    expect(htmlDisabledAnchor).not.toContain('href="/rate"');
  });

  it("does not force tabindex=-1 on native buttons when disabled", async () => {
    const html = await container.renderToString(SpRating, {
      props: { as: "button", disabled: true },
    });

    expect(html).not.toContain('tabindex="-1"');
    expect(html).toContain("disabled");
  });
});

describe("SpRating interactive behavior", () => {
  it("applies role='button' when interactive on a non-native tag", async () => {
    const html = await container.renderToString(SpRating, {
      props: { as: "div", interactive: true },
    });

    expect(html).toContain('role="button"');
  });

  it("defaults tabindex to 0 for interactive non-native elements", async () => {
    const html = await container.renderToString(SpRating, {
      props: { as: "div", interactive: true },
    });

    expect(html).toContain('tabindex="0"');
  });

  it("applies different classes when hovered vs not", async () => {
    const htmlNormal = await container.renderToString(SpRating, {
      props: { interactive: true },
    });
    const htmlHovered = await container.renderToString(SpRating, {
      props: { interactive: true, hovered: true },
    });

    const classNormal = (htmlNormal.match(/class="([^"]+)"/) || [])[1];
    const classHovered = (htmlHovered.match(/class="([^"]+)"/) || [])[1];

    expect(classNormal).not.toBe(classHovered);
    expect(classHovered).toBeDefined();
  });
});

describe("SpRating slots", () => {
  it("does not render the text wrapper div when the default slot is empty", async () => {
    const html = await container.renderToString(SpRating, {
      props: { value: 4 },
    });

    expect(html).not.toContain("sp-rating-text");
  });

  it("renders the text wrapper div when the default slot has content", async () => {
    const html = await container.renderToString(SpRating, {
      props: { value: 4 },
      slots: { default: "Excellent service!" },
    });

    expect(html).toContain("sp-rating-text");
    expect(html).toContain("Excellent service!");
  });
});

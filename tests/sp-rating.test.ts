import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, it } from "vitest";
import SpRating from "../src/components/SpRating.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpRating accessibility", () => {
  it("renders aria-label and ARIA value attributes on the root element", async () => {
    const html = await container.renderToString(SpRating, {
      props: { "aria-label": "User rating: 4 out of 5 stars", value: 4, max: 5 },
    });

    expect(html).toContain('aria-label="User rating: 4 out of 5 stars"');
    expect(html).toContain('aria-valuenow="4"');
    expect(html).toContain('aria-valuemin="0"');
    expect(html).toContain('aria-valuemax="5"');
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

  it("renders with id and aria-describedby", async () => {
    const html = await container.renderToString(SpRating, {
      props: { id: "rating-1", "aria-describedby": "rating-desc" },
    });

    expect(html).toContain('id="rating-1"');
    expect(html).toContain('aria-describedby="rating-desc"');
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

describe("SpRating pill and fullWidth prop forwarding", () => {
  it("applies sp-rating--pill class when only pill prop is set", async () => {
    const html = await container.renderToString(SpRating, {
      props: { pill: true },
    });

    expect(html).toContain("sp-rating--pill");
    expect(html).not.toContain('pill="true"');
    expect(html).not.toContain('pill="pill"');
  });

  it("applies sp-rating--full class when only fullWidth prop is set", async () => {
    const html = await container.renderToString(SpRating, {
      props: { fullWidth: true },
    });

    expect(html).toContain("sp-rating--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });

  it("does not add pill or fullWidth classes when both are false", async () => {
    const html = await container.renderToString(SpRating, {
      props: { pill: false, fullWidth: false },
    });

    expect(html).not.toContain("sp-rating--pill");
    expect(html).not.toContain("sp-rating--full");
    expect(html).not.toContain('pill="false"');
    expect(html).not.toContain('fullWidth="false"');
  });

  it("applies pill and fullWidth classes alongside interactive state props", async () => {
    const html = await container.renderToString(SpRating, {
      props: { pill: true, fullWidth: true, interactive: true, hovered: true },
    });

    expect(html).toContain("sp-rating--pill");
    expect(html).toContain("sp-rating--full");
    expect(html).not.toContain('pill="true"');
    expect(html).not.toContain('fullWidth="true"');
  });

  it("applies pill and fullWidth classes when component is in disabled state", async () => {
    const html = await container.renderToString(SpRating, {
      props: { pill: true, fullWidth: true, disabled: true },
    });

    expect(html).toContain("sp-rating--pill");
    expect(html).toContain("sp-rating--full");
    expect(html).not.toContain('pill="true"');
    expect(html).not.toContain('fullWidth="true"');
  });

  it("applies pill and fullWidth classes when component is in loading state", async () => {
    const html = await container.renderToString(SpRating, {
      props: { pill: true, fullWidth: true, loading: true },
    });

    expect(html).toContain("sp-rating--pill");
    expect(html).toContain("sp-rating--full");
    expect(html).not.toContain('pill="true"');
    expect(html).not.toContain('fullWidth="true"');
  });

  it("pill class is absent when prop is omitted entirely", async () => {
    const html = await container.renderToString(SpRating, {
      props: { value: 3 },
    });

    expect(html).not.toContain("sp-rating--pill");
    expect(html).not.toContain('pill="');
  });

  it("fullWidth class is absent when prop is omitted entirely", async () => {
    const html = await container.renderToString(SpRating, {
      props: { value: 3 },
    });

    expect(html).not.toContain("sp-rating--full");
    expect(html).not.toContain('fullWidth="');
  });
});

describe("SpRating slots and structure", () => {
  it("does not render the text wrapper span when the default slot is empty", async () => {
    const html = await container.renderToString(SpRating, {
      props: { value: 4 },
    });

    expect(html).not.toContain("sp-rating-text");
  });

  it("renders the text wrapper span when the default slot has content", async () => {
    const html = await container.renderToString(SpRating, {
      props: { value: 4 },
      slots: { default: "Excellent service!" },
    });

    expect(html).toContain("sp-rating-text");
    expect(html).toContain("Excellent service!");
  });

  it("has valid HTML when rendered as a span (no div inside span)", async () => {
    const html = await container.renderToString(SpRating, {
      props: { as: "span", value: 3 },
      slots: { default: "Text" },
    });

    expect(html).toContain("<span");
    expect(html).not.toContain("<div");
  });
});

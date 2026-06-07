import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getTagClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpTag from "../src/components/SpTag.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpTag class and prop behavior", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpTag, { props: {} });
    expect(html).toContain(getTagClasses());
  });

  it("renders correct classes for each variant without leaking the prop", async () => {
    for (const variant of ["default", "primary", "secondary", "success", "warning", "danger", "info", "neutral", "accent", "cta", "outline", "ghost"] as const) {
      const html = await container.renderToString(SpTag, { props: { variant } });
      expect(html).toContain(`sp-tag--${variant}`);
      expect(html).not.toContain(`variant="${variant}"`);
    }
  });

  it("renders correct size classes without leaking the prop", async () => {
    for (const size of ["sm", "md", "lg"] as const) {
      const html = await container.renderToString(SpTag, { props: { size } });
      expect(html).toContain(`sp-tag--${size}`);
      expect(html).not.toContain(`size="${size}"`);
    }
  });

  it("applies dismissible class and does not leak the prop", async () => {
    const html = await container.renderToString(SpTag, { props: { dismissible: true } });
    expect(html).toContain("sp-tag--dismissible");
    expect(html).not.toContain('dismissible="true"');
    expect(html).not.toContain('dismissible="dismissible"');
  });

  it("applies selected class and aria-pressed, does not leak prop", async () => {
    const html = await container.renderToString(SpTag, { props: { selected: true } });
    expect(html).toContain("sp-tag--selected");
    expect(html).toContain('aria-pressed="true"');
    expect(html).not.toContain('selected="true"');
  });

  it("applies hovered class and does not leak prop", async () => {
    const html = await container.renderToString(SpTag, { props: { hovered: true } });
    expect(html).toContain("sp-tag--hover");
    expect(html).not.toContain('hovered="true"');
  });

  it("applies focused class and does not leak prop", async () => {
    const html = await container.renderToString(SpTag, { props: { focused: true } });
    expect(html).toContain("sp-tag--focus");
    expect(html).not.toContain('focused="true"');
  });

  it("applies active class and does not leak prop", async () => {
    const html = await container.renderToString(SpTag, { props: { active: true } });
    expect(html).toContain("sp-tag--active");
    expect(html).not.toContain('active="true"');
  });

  it("applies fullWidth class and does not leak prop", async () => {
    const html = await container.renderToString(SpTag, { props: { fullWidth: true } });
    expect(html).toContain("sp-tag--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });
});

describe("SpTag disabled and loading state", () => {
  it("applies disabled class and aria-disabled, does not leak prop", async () => {
    const html = await container.renderToString(SpTag, { props: { disabled: true } });
    expect(html).toContain("sp-tag--disabled");
    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toMatch(/(^|\s)disabled="true"/);
    expect(html).not.toMatch(/(^|\s)disabled="disabled"/);
  });

  it("applies loading class and aria-busy, does not leak prop", async () => {
    const html = await container.renderToString(SpTag, { props: { loading: true } });
    expect(html).toContain("sp-tag--loading");
    expect(html).toContain('aria-busy="true"');
    expect(html).not.toContain('loading="true"');
  });

  it("treats loading as functionally disabled", async () => {
    const html = await container.renderToString(SpTag, { props: { loading: true } });
    expect(html).toContain('aria-disabled="true"');
  });
});

describe("SpTag interactivity and tabindex", () => {
  it("applies tabindex=0 when interactive", async () => {
    const html = await container.renderToString(SpTag, { props: { interactive: true } });
    expect(html).toContain('tabindex="0"');
    expect(html).not.toContain('interactive="true"');
  });

  it("applies tabindex=-1 when disabled on a non-native element", async () => {
    const html = await container.renderToString(SpTag, { props: { disabled: true } });
    expect(html).toContain('tabindex="-1"');
  });

  it("does not apply tabindex on a plain non-interactive tag", async () => {
    const html = await container.renderToString(SpTag, { props: {} });
    expect(html).not.toContain("tabindex=");
  });

  it("automatically infers interactive state when rendered as 'a' or 'button'", async () => {
    const aHtml = await container.renderToString(SpTag, { props: { as: "a", href: "#" } });
    expect(aHtml).toContain("sp-tag--interactive");

    const buttonHtml = await container.renderToString(SpTag, { props: { as: "button" } });
    expect(buttonHtml).toContain("sp-tag--interactive");
  });

  it("applies role='button' only to interactive non-native elements", async () => {
    const spanHtml = await container.renderToString(SpTag, { props: { interactive: true } });
    expect(spanHtml).toContain('role="button"');

    const buttonHtml = await container.renderToString(SpTag, { props: { as: "button" } });
    expect(buttonHtml).not.toContain('role="button"');

    const aHtml = await container.renderToString(SpTag, { props: { as: "a", href: "#" } });
    expect(aHtml).not.toContain('role="button"');
  });
});

describe("SpTag polymorphic rendering", () => {
  it("renders as span by default", async () => {
    const html = await container.renderToString(SpTag, { props: {} });
    expect(html).toContain("<span");
  });

  it("renders as the specified element without leaking 'as'", async () => {
    for (const as of ["div", "li", "a", "button"] as const) {
      const html = await container.renderToString(SpTag, { props: { as } });
      expect(html).toContain(`<${as}`);
      expect(html).not.toContain(`as="${as}"`);
    }
  });

  it("renders as 'a' with href and guards href when disabled", async () => {
    const html = await container.renderToString(SpTag, { props: { as: "a", href: "https://example.com" } });
    expect(html).toContain('href="https://example.com"');

    const disabledHtml = await container.renderToString(SpTag, { props: { as: "a", href: "https://example.com", disabled: true } });
    expect(disabledHtml).not.toContain('href="https://example.com"');
  });

  it("renders as 'button' with type and handles disabled state natively", async () => {
    const html = await container.renderToString(SpTag, { props: { as: "button", type: "submit" } });
    expect(html).toContain('<button');
    expect(html).toContain('type="submit"');

    const disabledHtml = await container.renderToString(SpTag, { props: { as: "button", disabled: true } });
    expect(disabledHtml).toContain("disabled");
  });
});

describe("SpTag element and slot rendering", () => {
  it("renders slot content", async () => {
    const html = await container.renderToString(SpTag, {
      props: { variant: "primary" },
      slots: { default: "Featured" },
    });
    expect(html).toContain("Featured");
  });

  it("renders id and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpTag, {
      props: { id: "tag-1", "aria-describedby": "desc-1" },
    });
    expect(html).toContain('id="tag-1"');
    expect(html).toContain('aria-describedby="desc-1"');
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpTag, {
      props: { "data-testid": "my-tag" },
    });
    expect(html).toContain('data-testid="my-tag"');
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpTag, {
      props: { class: "my-custom", variant: "success" },
    });
    expect(html).toContain("sp-tag--success");
    expect(html).toContain("my-custom");
  });
});

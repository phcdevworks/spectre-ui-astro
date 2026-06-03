import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getAlertClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpAlert from "../src/components/SpAlert.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpAlert class and prop behavior", () => {
  it("renders default info variant classes", async () => {
    const html = await container.renderToString(SpAlert, { props: {} });
    expect(html).toContain(getAlertClasses());
  });

  it("renders correct classes for each variant without leaking the prop", async () => {
    for (const variant of ["info", "success", "warning", "danger", "neutral"] as const) {
      const html = await container.renderToString(SpAlert, { props: { variant } });
      expect(html).toContain(`sp-alert--${variant}`);
      expect(html).not.toContain(`variant="${variant}"`);
    }
  });

  it("renders correct size classes without leaking the prop", async () => {
    for (const size of ["sm", "md", "lg"] as const) {
      const html = await container.renderToString(SpAlert, { props: { size } });
      expect(html).toContain(`sp-alert--${size}`);
      expect(html).not.toContain(`size="${size}"`);
    }
  });

  it("applies dismissed class and does not leak the prop", async () => {
    const html = await container.renderToString(SpAlert, { props: { dismissed: true } });
    expect(html).toContain("sp-alert--dismissed");
    expect(html).not.toContain('dismissed="true"');
    expect(html).not.toContain('dismissed="dismissed"');
  });

  it("applies fullWidth class and does not leak the prop", async () => {
    const html = await container.renderToString(SpAlert, { props: { fullWidth: true } });
    expect(html).toContain("sp-alert--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });

  it("applies focused class and does not leak the prop", async () => {
    const html = await container.renderToString(SpAlert, { props: { focused: true } });
    expect(html).toContain("sp-alert--focus");
    expect(html).not.toContain('focused="true"');
  });

  it("applies active class and does not leak the prop", async () => {
    const html = await container.renderToString(SpAlert, { props: { active: true } });
    expect(html).toContain("sp-alert--active");
    expect(html).not.toContain('active="true"');
  });

  it("applies hovered class and does not leak the prop", async () => {
    const html = await container.renderToString(SpAlert, { props: { hovered: true } });
    expect(html).toContain("sp-alert--hover");
    expect(html).not.toContain('hovered="true"');
  });
});

describe("SpAlert disabled and loading state", () => {
  it("applies disabled class and aria-disabled, does not leak prop", async () => {
    const html = await container.renderToString(SpAlert, { props: { disabled: true } });
    expect(html).toContain("sp-alert--disabled");
    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toMatch(/(^|\s)disabled="true"/);
    expect(html).not.toMatch(/(^|\s)disabled="disabled"/);
  });

  it("applies loading class and aria-busy, does not leak prop", async () => {
    const html = await container.renderToString(SpAlert, { props: { loading: true } });
    expect(html).toContain("sp-alert--loading");
    expect(html).toContain('aria-busy="true"');
    expect(html).not.toContain('loading="true"');
  });

  it("treats loading as functionally disabled", async () => {
    const html = await container.renderToString(SpAlert, { props: { loading: true } });
    expect(html).toContain('aria-disabled="true"');
  });
});

describe("SpAlert interactivity and tabindex", () => {
  it("applies tabindex=0 when interactive", async () => {
    const html = await container.renderToString(SpAlert, { props: { interactive: true } });
    expect(html).toContain('tabindex="0"');
    expect(html).not.toContain('interactive="true"');
  });

  it("applies tabindex=-1 when disabled on a non-native element", async () => {
    const html = await container.renderToString(SpAlert, { props: { disabled: true } });
    expect(html).toContain('tabindex="-1"');
  });

  it("does not apply tabindex on a plain non-interactive alert", async () => {
    const html = await container.renderToString(SpAlert, { props: {} });
    expect(html).not.toContain("tabindex=");
  });

  it("automatically infers interactive state when rendered as 'a' or 'button'", async () => {
    const aHtml = await container.renderToString(SpAlert, { props: { as: "a", href: "#" } });
    expect(aHtml).toContain("sp-alert--interactive");

    const buttonHtml = await container.renderToString(SpAlert, { props: { as: "button" } });
    expect(buttonHtml).toContain("sp-alert--interactive");
  });

  it("applies role='button' only to interactive non-native elements", async () => {
    const divHtml = await container.renderToString(SpAlert, { props: { interactive: true } });
    expect(divHtml).toContain('role="button"');

    const buttonHtml = await container.renderToString(SpAlert, { props: { as: "button" } });
    expect(buttonHtml).not.toContain('role="button"');

    const aHtml = await container.renderToString(SpAlert, { props: { as: "a", href: "#" } });
    expect(aHtml).not.toContain('role="button"');
  });
});

describe("SpAlert polymorphic rendering", () => {
  it("renders as 'a' with href and guards href when disabled", async () => {
    const html = await container.renderToString(SpAlert, { props: { as: "a", href: "https://example.com" } });
    expect(html).toContain('<a');
    expect(html).toContain('href="https://example.com"');

    const disabledHtml = await container.renderToString(SpAlert, { props: { as: "a", href: "https://example.com", disabled: true } });
    expect(disabledHtml).not.toContain('href="https://example.com"');
  });

  it("renders as 'button' with type and handles disabled state", async () => {
    const html = await container.renderToString(SpAlert, { props: { as: "button", type: "submit" } });
    expect(html).toContain('<button');
    expect(html).toContain('type="submit"');

    const disabledHtml = await container.renderToString(SpAlert, { props: { as: "button", disabled: true } });
    expect(disabledHtml).toContain('disabled');
  });
});

describe("SpAlert element and slot rendering", () => {
  it("renders as div by default", async () => {
    const html = await container.renderToString(SpAlert, { props: {} });
    expect(html).toContain("<div");
  });

  it("renders as the specified element without leaking 'as'", async () => {
    const html = await container.renderToString(SpAlert, { props: { as: "aside" } });
    expect(html).toContain("<aside");
    expect(html).not.toContain('as="aside"');
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpAlert, {
      props: { variant: "success" },
      slots: { default: "Operation complete." },
    });
    expect(html).toContain("Operation complete.");
  });
});

describe("SpAlert explicit attribute support", () => {
  it("renders id and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpAlert, {
      props: { id: "alert-1", "aria-describedby": "desc-1" },
    });
    expect(html).toContain('id="alert-1"');
    expect(html).toContain('aria-describedby="desc-1"');
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpAlert, {
      props: { "data-testid": "my-alert" },
    });
    expect(html).toContain('data-testid="my-alert"');
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpAlert, {
      props: { class: "my-custom", variant: "warning" },
    });
    expect(html).toContain("sp-alert--warning");
    expect(html).toContain("my-custom");
  });
});

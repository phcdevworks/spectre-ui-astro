import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getTooltipClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpTooltip from "../src/components/SpTooltip.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpTooltip class and prop behavior", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpTooltip, { props: {} });
    expect(html).toContain(getTooltipClasses());
  });

  it("renders correct classes for each placement without leaking the prop", async () => {
    for (const placement of ["top", "bottom", "left", "right"] as const) {
      const html = await container.renderToString(SpTooltip, { props: { placement } });
      expect(html).toContain(`sp-tooltip--${placement}`);
      expect(html).not.toContain(`placement="${placement}"`);
    }
  });

  it("applies visible class and does not leak the prop", async () => {
    const html = await container.renderToString(SpTooltip, { props: { visible: true } });
    expect(html).toContain("sp-tooltip--visible");
    expect(html).not.toContain('visible="true"');
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpTooltip, { props: { class: "my-tooltip", placement: "bottom" } });
    expect(html).toContain("sp-tooltip--bottom");
    expect(html).toContain("my-tooltip");
  });
});

describe("SpTooltip ARIA, element, and slot rendering", () => {
  it("renders role='tooltip' by default", async () => {
    const html = await container.renderToString(SpTooltip, { props: {} });
    expect(html).toContain('role="tooltip"');
  });

  it("allows overriding role via rest spread", async () => {
    const html = await container.renderToString(SpTooltip, { props: { role: "note" } });
    expect(html).toContain('role="note"');
    expect(html).not.toContain('role="tooltip"');
  });

  it("renders as div by default", async () => {
    const html = await container.renderToString(SpTooltip, { props: {} });
    expect(html).toContain("<div");
  });

  it("renders as the specified element without leaking 'as'", async () => {
    const html = await container.renderToString(SpTooltip, { props: { as: "span" } });
    expect(html).toContain("<span");
    expect(html).not.toContain('as="span"');
  });

  it("renders id when provided", async () => {
    const html = await container.renderToString(SpTooltip, { props: { id: "my-tooltip" } });
    expect(html).toContain('id="my-tooltip"');
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpTooltip, {
      props: {},
      slots: { default: "More information" },
    });
    expect(html).toContain("More information");
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpTooltip, {
      props: { "data-testid": "my-tooltip" },
    });
    expect(html).toContain('data-testid="my-tooltip"');
  });
});

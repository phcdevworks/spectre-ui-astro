import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, it } from "vitest";
import SpSpinner from "../src/components/SpSpinner.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpSpinner rendering", () => {
  it("renders a div with sp-spinner class by default", async () => {
    const html = await container.renderToString(SpSpinner);
    expect(html).toContain("<div");
    expect(html).toContain("sp-spinner");
    expect(html).toContain('role="status"');
  });

  it("renders as different tags via the 'as' prop", async () => {
    const htmlSpan = await container.renderToString(SpSpinner, {
      props: { as: "span" },
    });
    expect(htmlSpan).toContain("<span");

    const htmlI = await container.renderToString(SpSpinner, {
      props: { as: "i" },
    });
    expect(htmlI).toContain("<i");
  });

  it("applies size classes", async () => {
    const html = await container.renderToString(SpSpinner, {
      props: { size: "lg" },
    });
    expect(html).toContain("sp-spinner--lg");
  });

  it("passes through standard attributes", async () => {
    const html = await container.renderToString(SpSpinner, {
      props: { id: "my-spinner", "aria-label": "Loading results", "data-testid": "spinner" },
    });
    expect(html).toContain('id="my-spinner"');
    expect(html).toContain('aria-label="Loading results"');
    expect(html).toContain('data-testid="spinner"');
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpSpinner, {
      slots: { default: "Loading..." },
    });
    expect(html).toContain("Loading...");
  });

  it("does not leak adapter props to the DOM", async () => {
    const html = await container.renderToString(SpSpinner, {
      props: { size: "sm" },
    });
    expect(html).not.toContain('size="');
  });
});

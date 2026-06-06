import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import { SpSpinner } from "../src/index";

describe("SpSpinner", () => {
  it("renders with default classes and role", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SpSpinner);

    expect(result).toContain('class="sp-spinner');
    expect(result).toContain('role="status"');
    expect(result).toContain("<div");
  });

  it("renders as a different element using the 'as' prop", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SpSpinner, {
      props: { as: "span" },
    });

    expect(result).toContain("<span");
    expect(result).toContain('class="sp-spinner');
  });

  it("applies size classes", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SpSpinner, {
      props: { size: "lg" },
    });

    expect(result).toContain('class="sp-spinner sp-spinner--lg"');
  });

  it("passes through additional classes", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SpSpinner, {
      props: { class: "custom-class" },
    });

    expect(result).toContain('class="sp-spinner');
    expect(result).toContain("custom-class");
  });

  it("renders an explicit id", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SpSpinner, {
      props: { id: "my-spinner" },
    });

    expect(result).toContain('id="my-spinner"');
  });

  it("renders an aria-label", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SpSpinner, {
      props: { "aria-label": "Loading content" },
    });

    expect(result).toContain('aria-label="Loading content"');
  });

  it("does not leak adapter-only props to the DOM", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SpSpinner, {
      props: { size: "md", as: "div" },
    });

    expect(result).not.toContain('size="md"');
    expect(result).not.toContain('as="div"');
  });

  it("renders slot content", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SpSpinner, {
      slots: { default: "Loading..." },
    });

    expect(result).toContain("Loading...");
  });
});

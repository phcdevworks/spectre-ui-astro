import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getGridClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpGrid from "../src/components/SpGrid.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpGrid rendering", () => {
  it("defaults to the single-column grid classes", async () => {
    const html = await container.renderToString(SpGrid, {
      slots: { default: "Content" },
    });

    expect(html).toContain(getGridClasses());
    expect(html).toContain("Content");
  });

  it("applies columns and gap classes when requested", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { columns: 4, gap: "lg" },
    });

    expect(html).toContain(getGridClasses({ columns: 4, gap: "lg" }));
  });

  it("does not leak columns or gap props to the DOM", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { columns: 4, gap: "lg" },
    });

    expect(html).not.toContain('columns="4"');
    expect(html).not.toContain('gap="lg"');
  });

  it("renders the requested element via the 'as' prop", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { as: "ul" },
      slots: { default: "<li>Item</li>" },
    });

    expect(html).toContain("<ul");
  });

  it("merges a custom class with the upstream classes", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { class: "custom-class" },
    });

    expect(html).toContain(`${getGridClasses()} custom-class`);
  });
});

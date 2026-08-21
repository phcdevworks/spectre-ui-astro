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

  it("applies align classes when requested", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { align: "center" },
    });

    expect(html).toContain(getGridClasses({ align: "center" }));
  });

  it("does not leak the align prop to the DOM", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { align: "center" },
    });

    expect(html).not.toContain('align="center"');
  });

  it("applies span classes for a single span value", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { span: 6 },
    });

    expect(html).toContain(getGridClasses({ span: 6 }));
  });

  it("applies span classes for a per-breakpoint span object", async () => {
    const spanOptions = { base: "full" as const, md: 6 as const, lg: 4 as const };
    const html = await container.renderToString(SpGrid, {
      props: { span: spanOptions },
    });

    expect(html).toContain(getGridClasses({ span: spanOptions }));
  });

  it("does not leak the span prop to the DOM", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { span: 6 },
    });

    expect(html).not.toContain('span="6"');
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

  it("applies columnGap and rowGap classes", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { columnGap: "sm", rowGap: "lg" },
    });

    expect(html).toContain(getGridClasses({ columnGap: "sm", rowGap: "lg" }));
    expect(html).not.toContain('columnGap="sm"');
    expect(html).not.toContain('rowGap="lg"');
  });

  it("applies offset classes for a single value and a per-breakpoint object", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { offset: 2 },
    });
    expect(html).toContain(getGridClasses({ offset: 2 }));

    const offsetOptions = { base: 0 as const, md: 2 as const, lg: 4 as const };
    const htmlPerBreakpoint = await container.renderToString(SpGrid, {
      props: { offset: offsetOptions },
    });
    expect(htmlPerBreakpoint).toContain(getGridClasses({ offset: offsetOptions }));
  });

  it("applies rowSpan and rowOffset classes", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { rowSpan: 3, rowOffset: 1 },
    });

    expect(html).toContain(getGridClasses({ rowSpan: 3, rowOffset: 1 }));
    expect(html).not.toContain('rowSpan="3"');
    expect(html).not.toContain('rowOffset="1"');
  });

  it("applies order classes for a single value and a per-breakpoint object", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { order: "first" },
    });
    expect(html).toContain(getGridClasses({ order: "first" }));

    const orderOptions = { base: "last" as const, md: 2 as const };
    const htmlPerBreakpoint = await container.renderToString(SpGrid, {
      props: { order: orderOptions },
    });
    expect(htmlPerBreakpoint).toContain(getGridClasses({ order: orderOptions }));
  });

  it("applies leadingTracks classes", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { leadingTracks: { weight: 2 } },
    });

    expect(html).toContain(getGridClasses({ leadingTracks: { weight: 2 } }));
  });

  it("applies fixedTracks classes", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { fixedTracks: { count: 3 } },
    });

    expect(html).toContain(getGridClasses({ fixedTracks: { count: 3 } }));
  });

  it("applies explicitTemplate classes", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { explicitTemplate: { template: "edge-fluid-edge" } },
    });

    expect(html).toContain(
      getGridClasses({ explicitTemplate: { template: "edge-fluid-edge" } }),
    );

    const htmlWithWeight = await container.renderToString(SpGrid, {
      props: { explicitTemplate: { template: "label-fluid-fluid", weight: 2 } },
    });

    expect(htmlWithWeight).toContain(
      getGridClasses({
        explicitTemplate: { template: "label-fluid-fluid", weight: 2 },
      }),
    );
  });
});

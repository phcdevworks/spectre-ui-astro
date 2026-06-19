import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getStackClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpStack from "../src/components/SpStack.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpStack rendering", () => {
  it("defaults to the vertical stack classes", async () => {
    const html = await container.renderToString(SpStack, {
      slots: { default: "Content" },
    });

    expect(html).toContain(getStackClasses({ direction: "vertical" }));
    expect(html).toContain("Content");
  });

  it("applies horizontal stack classes when requested", async () => {
    const html = await container.renderToString(SpStack, {
      props: { direction: "horizontal" },
    });

    expect(html).toContain(getStackClasses({ direction: "horizontal" }));
  });

  it("does not leak the direction prop to the DOM", async () => {
    const html = await container.renderToString(SpStack, {
      props: { direction: "horizontal" },
    });

    expect(html).not.toContain('direction="horizontal"');
  });

  it("renders the requested element via the 'as' prop", async () => {
    const html = await container.renderToString(SpStack, {
      props: { as: "ul" },
      slots: { default: "<li>Item</li>" },
    });

    expect(html).toContain("<ul");
  });

  it("merges a custom class with the upstream classes", async () => {
    const html = await container.renderToString(SpStack, {
      props: { class: "custom-class" },
    });

    expect(html).toContain(`${getStackClasses({ direction: "vertical" })} custom-class`);
  });

  it("applies basis classes when requested", async () => {
    const html = await container.renderToString(SpStack, {
      props: { basis: "sidebar" },
    });

    expect(html).toContain(getStackClasses({ basis: "sidebar" }));
  });

  it("does not leak the basis prop to the DOM", async () => {
    const html = await container.renderToString(SpStack, {
      props: { basis: "sidebar" },
    });

    expect(html).not.toContain('basis="sidebar"');
  });
});

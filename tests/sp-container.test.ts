import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpContainer from "../src/components/SpContainer.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpContainer rendering", () => {
  it("renders as a div by default", async () => {
    const html = await container.renderToString(SpContainer, {
      slots: { default: "Content" },
    });

    expect(html).toContain("<div");
    expect(html).toContain(getContainerClasses());
    expect(html).toContain("Content");
  });

  it("renders the requested element via the 'as' prop", async () => {
    const html = await container.renderToString(SpContainer, {
      props: { as: "main" },
      slots: { default: "Content" },
    });

    expect(html).toContain("<main");
    expect(html).not.toContain("<div");
  });

  it("merges a custom class with the upstream classes", async () => {
    const html = await container.renderToString(SpContainer, {
      props: { class: "custom-class" },
    });

    expect(html).toContain(`${getContainerClasses()} custom-class`);
  });

  it("renders id and aria attributes without duplication", async () => {
    const html = await container.renderToString(SpContainer, {
      props: { id: "main-container", "aria-label": "Main content" },
    });

    expect(html.match(/id="main-container"/g)).toHaveLength(1);
    expect(html).toContain('aria-label="Main content"');
  });
});

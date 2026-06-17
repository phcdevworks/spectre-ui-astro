import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getSectionClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpSection from "../src/components/SpSection.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpSection rendering", () => {
  it("renders as a section by default", async () => {
    const html = await container.renderToString(SpSection, {
      slots: { default: "Content" },
    });

    expect(html).toContain("<section");
    expect(html).toContain(getSectionClasses());
    expect(html).toContain("Content");
  });

  it("renders the requested element via the 'as' prop", async () => {
    const html = await container.renderToString(SpSection, {
      props: { as: "article" },
      slots: { default: "Content" },
    });

    expect(html).toContain("<article");
    expect(html).not.toContain("<section");
  });

  it("merges a custom class with the upstream classes", async () => {
    const html = await container.renderToString(SpSection, {
      props: { class: "custom-class" },
    });

    expect(html).toContain(`${getSectionClasses()} custom-class`);
  });

  it("renders id and aria attributes without duplication", async () => {
    const html = await container.renderToString(SpSection, {
      props: { id: "intro", "aria-label": "Introduction" },
    });

    expect(html.match(/id="intro"/g)).toHaveLength(1);
    expect(html).toContain('aria-label="Introduction"');
  });
});

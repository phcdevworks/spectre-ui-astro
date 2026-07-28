import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getTextClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpText from "../src/components/SpText.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpText rendering", () => {
  it("renders as a paragraph by default", async () => {
    const html = await container.renderToString(SpText, {
      slots: { default: "Content" },
    });

    expect(html).toContain("<p");
    expect(html).toContain(getTextClasses());
    expect(html).toContain("Content");
  });

  it("renders the requested element via the 'as' prop", async () => {
    const html = await container.renderToString(SpText, {
      props: { as: "h2" },
      slots: { default: "Heading" },
    });

    expect(html).toContain("<h2");
    expect(html).not.toContain("<p");
  });

  it("forwards size, variant, and family to the upstream recipe", async () => {
    const html = await container.renderToString(SpText, {
      props: { size: "lg", variant: "muted", family: "mono" },
    });

    expect(html).toContain(
      getTextClasses({ size: "lg", variant: "muted", family: "mono" }),
    );
  });

  it("merges a custom class with the upstream classes", async () => {
    const html = await container.renderToString(SpText, {
      props: { class: "custom-class" },
    });

    expect(html).toContain(`${getTextClasses()} custom-class`);
  });

  it("renders id and aria attributes without duplication", async () => {
    const html = await container.renderToString(SpText, {
      props: { id: "intro", "aria-label": "Introduction" },
    });

    expect(html.match(/id="intro"/g)).toHaveLength(1);
    expect(html).toContain('aria-label="Introduction"');
  });
});

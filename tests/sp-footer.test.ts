import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getFooterClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpFooter from "../src/components/SpFooter.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpFooter class and prop behavior", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpFooter, { props: {} });
    expect(html).toContain(getFooterClasses());
  });

  it("applies bordered class and does not leak the prop", async () => {
    const html = await container.renderToString(SpFooter, { props: { bordered: true } });
    expect(html).toContain("sp-footer--bordered");
    expect(html).not.toContain('bordered="true"');
  });

  it("applies fullWidth class and does not leak the prop", async () => {
    const html = await container.renderToString(SpFooter, { props: { fullWidth: true } });
    expect(html).toContain("sp-footer--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpFooter, {
      props: { class: "my-footer", bordered: true },
    });
    expect(html).toContain("sp-footer--bordered");
    expect(html).toContain("my-footer");
  });
});

describe("SpFooter element and slot rendering", () => {
  it("renders as footer by default", async () => {
    const html = await container.renderToString(SpFooter, { props: {} });
    expect(html).toContain("<footer");
  });

  it("renders as the specified element without leaking 'as'", async () => {
    for (const as of ["div", "section"] as const) {
      const html = await container.renderToString(SpFooter, { props: { as } });
      expect(html).toContain(`<${as}`);
      expect(html).not.toContain(`as="${as}"`);
    }
  });

  it("renders aria-label and id when provided", async () => {
    const html = await container.renderToString(SpFooter, {
      props: { id: "main-footer", "aria-label": "Footer" },
    });
    expect(html).toContain('id="main-footer"');
    expect(html).toContain('aria-label="Footer"');
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpFooter, {
      props: { "data-testid": "my-footer" },
    });
    expect(html).toContain('data-testid="my-footer"');
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpFooter, {
      props: {},
      slots: { default: "<p>&copy; 2026</p>" },
    });
    expect(html).toContain("2026");
  });
});

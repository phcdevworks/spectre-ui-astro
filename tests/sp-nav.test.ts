import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getNavClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpNav from "../src/components/SpNav.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpNav class and prop behavior", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpNav, { props: {} });
    expect(html).toContain(getNavClasses());
  });

  it("applies bordered class and does not leak the prop", async () => {
    const html = await container.renderToString(SpNav, { props: { bordered: true } });
    expect(html).toContain("sp-nav--bordered");
    expect(html).not.toContain('bordered="true"');
  });

  it("applies sticky class and does not leak the prop", async () => {
    const html = await container.renderToString(SpNav, { props: { sticky: true } });
    expect(html).toContain("sp-nav--sticky");
    expect(html).not.toContain('sticky="true"');
  });

  it("applies fullWidth class and does not leak the prop", async () => {
    const html = await container.renderToString(SpNav, { props: { fullWidth: true } });
    expect(html).toContain("sp-nav--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });

  it("applies alignment classes and does not leak the prop", async () => {
    for (const align of ["start", "center", "end"] as const) {
      const html = await container.renderToString(SpNav, { props: { align } });
      expect(html).toContain(getNavClasses({ align }));
      expect(html).toContain(`sp-nav--align-${align}`);
      expect(html).not.toContain(`align="${align}"`);
    }
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpNav, { props: { class: "my-nav", bordered: true } });
    expect(html).toContain("sp-nav--bordered");
    expect(html).toContain("my-nav");
  });
});

describe("SpNav element and slot rendering", () => {
  it("renders as nav by default", async () => {
    const html = await container.renderToString(SpNav, { props: {} });
    expect(html).toContain("<nav");
  });

  it("renders as the specified element without leaking 'as'", async () => {
    for (const as of ["div", "header", "section"] as const) {
      const html = await container.renderToString(SpNav, { props: { as } });
      expect(html).toContain(`<${as}`);
      expect(html).not.toContain(`as="${as}"`);
    }
  });

  it("renders aria-label and id when provided", async () => {
    const html = await container.renderToString(SpNav, {
      props: { id: "main-nav", "aria-label": "Main" },
    });
    expect(html).toContain('id="main-nav"');
    expect(html).toContain('aria-label="Main"');
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpNav, {
      props: { "data-testid": "my-nav" },
    });
    expect(html).toContain('data-testid="my-nav"');
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpNav, {
      props: {},
      slots: { default: "<a href=\"/\">Home</a>" },
    });
    expect(html).toContain("Home");
  });
});

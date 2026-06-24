import { experimental_AstroContainer as AstroContainer } from "astro/container";
import {
  getSidebarClasses,
  getSidebarBackdropClasses,
  getSidebarToggleClasses,
} from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpSidebar from "../src/components/SpSidebar.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpSidebar class and prop behavior", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpSidebar, { props: {} });
    expect(html).toContain(getSidebarClasses());
    expect(html).toContain(getSidebarBackdropClasses());
  });

  it("applies bordered class and does not leak the prop", async () => {
    const html = await container.renderToString(SpSidebar, { props: { bordered: true } });
    expect(html).toContain("sp-sidebar--bordered");
    expect(html).not.toContain('bordered="true"');
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpSidebar, {
      props: { class: "my-sidebar", bordered: true },
    });
    expect(html).toContain("sp-sidebar--bordered");
    expect(html).toContain("my-sidebar");
  });
});

describe("SpSidebar SSR-safe interactive state", () => {
  it("renders closed by default with no layout shift on hydration", async () => {
    const html = await container.renderToString(SpSidebar, { props: {} });
    expect(html).toContain('data-sidebar-open="false"');
  });

  it("renders a hamburger toggle button with an accessible label", async () => {
    const html = await container.renderToString(SpSidebar, { props: {} });
    expect(html).toContain("data-sidebar-toggle");
    expect(html).toContain('aria-label="Toggle sidebar"');
  });

  it("applies the toggle classes from getSidebarToggleClasses", async () => {
    const html = await container.renderToString(SpSidebar, { props: {} });
    expect(html).toContain(getSidebarToggleClasses());
  });

  it("renders a custom toggle label when provided", async () => {
    const html = await container.renderToString(SpSidebar, {
      props: { toggleLabel: "Open navigation" },
    });
    expect(html).toContain('aria-label="Open navigation"');
    expect(html).not.toContain('toggleLabel="Open navigation"');
  });

  it("renders a backdrop element for click-to-close", async () => {
    const html = await container.renderToString(SpSidebar, { props: {} });
    expect(html).toContain("data-sidebar-backdrop");
  });
});

describe("SpSidebar element and slot rendering", () => {
  it("renders the sidebar as aside by default", async () => {
    const html = await container.renderToString(SpSidebar, { props: {} });
    expect(html).toContain("<aside");
  });

  it("renders as the specified element without leaking 'as'", async () => {
    for (const as of ["div", "nav"] as const) {
      const html = await container.renderToString(SpSidebar, { props: { as } });
      expect(html).toContain(`<${as}`);
      expect(html).not.toContain(`as="${as}"`);
    }
  });

  it("renders aria-label and id on the sidebar element", async () => {
    const html = await container.renderToString(SpSidebar, {
      props: { id: "primary-sidebar", "aria-label": "Primary" },
    });
    expect(html).toContain('id="primary-sidebar"');
    expect(html).toContain('aria-label="Primary"');
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpSidebar, {
      props: { "data-testid": "my-sidebar" },
    });
    expect(html).toContain('data-testid="my-sidebar"');
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpSidebar, {
      props: {},
      slots: { default: '<a href="/">Home</a>' },
    });
    expect(html).toContain("Home");
  });
});

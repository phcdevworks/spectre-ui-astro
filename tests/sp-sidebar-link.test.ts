import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getSidebarLinkClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpSidebarLink from "../src/components/SpSidebarLink.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpSidebarLink rendering", () => {
  it("defaults to the parent level classes and href", async () => {
    const html = await container.renderToString(SpSidebarLink, {
      props: { href: "/docs" },
      slots: { default: "Docs" },
    });

    expect(html).toContain(getSidebarLinkClasses({ level: "parent" }));
    expect(html).toContain('href="/docs"');
    expect(html).toContain("Docs");
  });

  it("applies child level classes when requested", async () => {
    const html = await container.renderToString(SpSidebarLink, {
      props: { level: "child", href: "/docs/install" },
    });

    expect(html).toContain(getSidebarLinkClasses({ level: "child" }));
  });

  it("applies active classes and aria-current", async () => {
    const html = await container.renderToString(SpSidebarLink, {
      props: { active: true, href: "/docs" },
    });

    expect(html).toContain(getSidebarLinkClasses({ active: true }));
    expect(html).toContain('aria-current="page"');
  });

  it("suppresses href and sets aria-disabled and tabindex when disabled", async () => {
    const html = await container.renderToString(SpSidebarLink, {
      props: { disabled: true, href: "/docs" },
    });

    expect(html).toContain(getSidebarLinkClasses({ disabled: true }));
    expect(html).not.toContain('href="/docs"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
  });

  it("does not leak recipe props to the DOM", async () => {
    const html = await container.renderToString(SpSidebarLink, {
      props: { active: true, hovered: true, focused: true, level: "child", href: "/docs" },
    });

    expect(html).not.toContain('active="true"');
    expect(html).not.toContain('hovered="true"');
    expect(html).not.toContain('focused="true"');
    expect(html).not.toContain('level="child"');
  });
});

import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getFooterLinkClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpFooterLink from "../src/components/SpFooterLink.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpFooterLink rendering", () => {
  it("renders default classes and href", async () => {
    const html = await container.renderToString(SpFooterLink, {
      props: { href: "/about" },
      slots: { default: "About" },
    });

    expect(html).toContain(getFooterLinkClasses());
    expect(html).toContain('href="/about"');
    expect(html).toContain("About");
  });

  it("applies active classes and aria-current", async () => {
    const html = await container.renderToString(SpFooterLink, {
      props: { active: true, href: "/about" },
    });

    expect(html).toContain(getFooterLinkClasses({ active: true }));
    expect(html).toContain('aria-current="page"');
  });

  it("suppresses href and sets aria-disabled and tabindex when disabled", async () => {
    const html = await container.renderToString(SpFooterLink, {
      props: { disabled: true, href: "/about" },
    });

    expect(html).toContain(getFooterLinkClasses({ disabled: true }));
    expect(html).not.toContain('href="/about"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
  });

  it("does not leak recipe props to the DOM", async () => {
    const html = await container.renderToString(SpFooterLink, {
      props: { active: true, hovered: true, focused: true, href: "/about" },
    });

    expect(html).not.toContain('active="true"');
    expect(html).not.toContain('hovered="true"');
    expect(html).not.toContain('focused="true"');
  });
});

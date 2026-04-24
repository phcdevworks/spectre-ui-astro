import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, it } from "vitest";
import SpBadge from "../src/components/SpBadge.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpBadge class and prop behavior", () => {
  it("applies focused class and does not leak the prop to DOM", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { focused: true },
    });

    expect(html).toContain("sp-badge--focus");
    expect(html).not.toContain('focused="true"');
    expect(html).not.toContain('focused="focused"');
  });

  it("applies active class and does not leak the prop to DOM", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { active: true },
    });

    expect(html).toContain("sp-badge--active");
    expect(html).not.toContain('active="true"');
    expect(html).not.toContain('active="active"');
  });
});

describe("SpBadge tabindex guarding", () => {
  it("applies tabindex=0 when interactive on a non-native element", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { interactive: true, as: "div" },
    });

    expect(html).toContain('tabindex="0"');
  });

  it("applies tabindex=-1 when disabled on a non-button element", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { disabled: true, as: "a", href: "https://example.com" },
    });

    expect(html).toContain('tabindex="-1"');
  });
});

import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it, beforeAll } from "vitest";
import SpBadge from "../src/components/SpBadge.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpBadge tabindex guarding", () => {
  it("should have tabindex=0 when interactive=true and Tag is not a native interactive element", async () => {
    const html = await container.renderToString(SpBadge, {
      props: {
        interactive: true,
        as: "div",
      },
    });

    // Currently it doesn't have tabindex=0 unless provided
    expect(html).toContain('tabindex="0"');
  });

  it("should have tabindex=-1 when disabled and Tag is not a button", async () => {
    const html = await container.renderToString(SpBadge, {
      props: {
        disabled: true,
        as: "a",
        href: "https://example.com"
      },
    });

    // Currently it might have no tabindex or default tabindex
    expect(html).toContain('tabindex="-1"');
  });
});

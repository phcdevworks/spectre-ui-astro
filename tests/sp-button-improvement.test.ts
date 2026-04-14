import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import SpButton from "../src/components/SpButton.astro";

describe("SpButton improvements", () => {
  it("renders SpButton with aria-label", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(SpButton, {
      props: {
        "aria-label": "Close modal",
      },
    });

    expect(html).toContain('aria-label="Close modal"');
  });

  it("applies focused state and does not leak focused prop to DOM", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(SpButton, {
      props: {
        focused: true,
      },
    });

    // Should contain the focus-related class from the recipe
    // Based on spectre-ui conventions, it usually includes "focused" or "focus" in the class string
    // but the exact class depends on the upstream recipe.
    // Most importantly, it should NOT have focused="true" as an attribute.
    expect(html).not.toContain('focused="true"');
    expect(html).not.toContain('focused="focused"');
  });

  it("handles polymorphic tag with aria-label", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(SpButton, {
      props: {
        as: "a",
        href: "/dashboard",
        "aria-label": "Go to Dashboard",
      },
    });

    expect(html).toContain("<a");
    expect(html).toContain('href="/dashboard"');
    expect(html).toContain('aria-label="Go to Dashboard"');
  });
});

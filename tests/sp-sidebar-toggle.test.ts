import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getSidebarToggleClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";

import SpSidebarToggle from "../src/components/SpSidebarToggle.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpSidebarToggle", () => {
  it("targets the shell derived from the required sidebar id", async () => {
    const html = await container.renderToString(SpSidebarToggle, {
      props: { for: "docs-sidebar" },
    });

    expect(html).toContain('data-sidebar-shell-target="docs-sidebar-shell"');
    expect(html).toContain('aria-controls="docs-sidebar-shell"');
    expect(html).toContain('aria-expanded="false"');
    expect(html).toContain('aria-label="Toggle sidebar"');
    expect(html).toContain(getSidebarToggleClasses());
    expect(html).not.toContain('for="docs-sidebar"');
  });

  it("supports a custom label, class, attributes, and icon slot", async () => {
    const html = await container.renderToString(SpSidebarToggle, {
      props: {
        for: "account-sidebar",
        label: "Open account navigation",
        class: "custom-toggle",
        "data-testid": "account-toggle",
      },
      slots: { "toggle-icon": "Menu" },
    });

    expect(html).toContain('aria-label="Open account navigation"');
    expect(html).toContain("custom-toggle");
    expect(html).toContain('data-testid="account-toggle"');
    expect(html).toContain("Menu");
    expect(html).not.toContain(' label="Open account navigation"');
  });
});

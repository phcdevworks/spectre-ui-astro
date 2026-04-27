import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, it } from "vitest";
import SpButton from "../src/components/SpButton.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpButton behavior", () => {
  it("renders with aria-label", async () => {
    const html = await container.renderToString(SpButton, {
      props: { "aria-label": "Close modal" },
    });

    expect(html).toContain('aria-label="Close modal"');
  });

  it("applies focused state and does not leak the prop to DOM", async () => {
    const html = await container.renderToString(SpButton, {
      props: { focused: true },
    });

    expect(html).not.toContain('focused="true"');
    expect(html).not.toContain('focused="focused"');
  });

  it("renders as anchor with href and aria-label", async () => {
    const html = await container.renderToString(SpButton, {
      props: { as: "a", href: "/dashboard", "aria-label": "Go to Dashboard" },
    });

    expect(html).toContain("<a");
    expect(html).toContain('href="/dashboard"');
    expect(html).toContain('aria-label="Go to Dashboard"');
  });

  it("guards tabindex=0 for non-native interactive elements", async () => {
    const html = await container.renderToString(SpButton, {
      props: { as: "span" },
    });

    expect(html).toContain('tabindex="0"');
  });

  it("guards tabindex=-1 for disabled non-native elements", async () => {
    const html = await container.renderToString(SpButton, {
      props: { as: "span", disabled: true },
    });

    expect(html).toContain('tabindex="-1"');
  });
});

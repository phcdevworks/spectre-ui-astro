import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getIconBoxClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpIconBox from "../src/components/SpIconBox.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpIconBox behavior", () => {
  it("renders with interactive state props", async () => {
    const html = await container.renderToString(SpIconBox, {
      props: { interactive: true, hovered: true, focused: true, active: true },
    });

    expect(html).toContain(
      getIconBoxClasses({ interactive: true, hovered: true, focused: true, active: true }),
    );
  });

  it("applies role='button' for interactive non-native elements", async () => {
    const html = await container.renderToString(SpIconBox, {
      props: { as: "span", interactive: true },
    });

    expect(html).toContain('role="button"');
  });

  it("renders aria-label", async () => {
    const html = await container.renderToString(SpIconBox, {
      props: { "aria-label": "Close" },
    });

    expect(html).toContain('aria-label="Close"');
  });

  it("guards tabindex=-1 for disabled non-button elements", async () => {
    const html = await container.renderToString(SpIconBox, {
      props: { as: "div", disabled: true },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("applies tabindex='0' for enabled interactive non-native elements", async () => {
    const html = await container.renderToString(SpIconBox, {
      props: { as: "span", interactive: true },
    });

    expect(html).toContain('tabindex="0"');
  });

  it("does not apply role='button' to native buttons or anchors", async () => {
    const buttonHtml = await container.renderToString(SpIconBox, {
      props: { as: "button", interactive: true },
    });
    expect(buttonHtml).not.toContain('role="button"');

    const anchorHtml = await container.renderToString(SpIconBox, {
      props: { as: "a", interactive: true },
    });
    expect(anchorHtml).not.toContain('role="button"');
  });
});

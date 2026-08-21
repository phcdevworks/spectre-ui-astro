import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getFooterChipClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpFooterChip from "../src/components/SpFooterChip.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpFooterChip rendering", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpFooterChip, {
      slots: { default: "v4.5.0" },
    });

    expect(html).toContain(getFooterChipClasses());
    expect(html).toContain("v4.5.0");
  });

  it("applies disabled classes and aria-disabled", async () => {
    const html = await container.renderToString(SpFooterChip, {
      props: { disabled: true },
    });

    expect(html).toContain(getFooterChipClasses({ disabled: true }));
    expect(html).toContain('aria-disabled="true"');
  });

  it("does not leak recipe props to the DOM", async () => {
    const html = await container.renderToString(SpFooterChip, {
      props: { disabled: true, hovered: true, focused: true },
    });

    expect(html).not.toContain('hovered="true"');
    expect(html).not.toContain('focused="true"');
  });
});

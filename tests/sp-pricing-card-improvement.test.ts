import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getPricingCardClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpPricingCard from "../src/components/SpPricingCard.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpPricingCard improvement verification", () => {
  it("guards tabindex for non-button tags when disabled", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: {
        as: "div",
        disabled: true,
        tabindex: 0,
      },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("guards tabindex for non-button tags when loading", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: {
        as: "section",
        loading: true,
        tabindex: 0,
      },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("guards tabindex for anchors when disabled", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: {
        as: "a",
        href: "https://example.com",
        disabled: true,
      },
    });

    expect(html).not.toContain('href="https://example.com"');
    expect(html).toContain('tabindex="-1"');
  });

  it("does not guard tabindex for native buttons", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: {
        as: "button",
        disabled: true,
        tabindex: 0,
      },
    });

    expect(html).toContain('tabindex="0"');
    expect(html).toContain('disabled');
  });
});

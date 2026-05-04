import { experimental_AstroContainer as AstroContainer } from "astro/container";
import {
  getPricingCardClasses,
  getPricingCardBadgeClasses,
  getPricingCardPriceContainerClasses,
  getPricingCardDescriptionClasses,
} from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpPricingCard from "../src/components/SpPricingCard.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpPricingCard behavior", () => {
  it("guards tabindex for disabled non-button tags", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: { as: "div", disabled: true, tabindex: 0 },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("guards tabindex for loading non-button tags", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: { as: "section", loading: true, tabindex: 0 },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("suppresses href and guards tabindex for disabled anchors", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: { as: "a", href: "https://example.com", disabled: true },
    });

    expect(html).not.toContain('href="https://example.com"');
    expect(html).toContain('tabindex="-1"');
  });

  it("does not guard tabindex for native buttons when disabled", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: { as: "button", disabled: true, tabindex: 0 },
    });

    expect(html).toContain('tabindex="0"');
    expect(html).toContain("disabled");
  });

  it("applies role='button' and default tabindex=0 when interactive", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: { as: "div", interactive: true },
    });

    expect(html).toContain('role="button"');
    expect(html).toContain('tabindex="0"');
  });

  it("passes state props to recipe and does not leak them to DOM", async () => {
    const props = {
      interactive: true,
      hovered: true,
      focused: true,
      active: true,
    };
    const html = await container.renderToString(SpPricingCard, { props });

    expect(html).toContain(getPricingCardClasses(props));
    expect(html).not.toContain('interactive="true"');
    expect(html).not.toContain('hovered="true"');
    expect(html).not.toContain('focused="true"');
    expect(html).not.toContain('active="true"');
  });

  it("passes fullHeight to recipe and does not leak it to DOM", async () => {
    const props = {
      fullHeight: true,
    };
    const html = await container.renderToString(SpPricingCard, { props });

    expect(html).toContain(getPricingCardClasses(props));
    expect(html).not.toContain('fullHeight="true"');
  });

  describe("slot behavior", () => {
    it("does not render empty wrapper divs when slots are not provided", async () => {
      const html = await container.renderToString(SpPricingCard, {
        props: {},
      });

      expect(html).not.toContain(getPricingCardBadgeClasses());
      expect(html).not.toContain(getPricingCardPriceContainerClasses());
      expect(html).not.toContain(getPricingCardDescriptionClasses());
    });

    it("renders wrapper divs when slots are provided", async () => {
      const html = await container.renderToString(SpPricingCard, {
        slots: {
          badge: "Hot",
          price: "$99",
          description: "Best deal",
        },
      });

      expect(html).toContain(getPricingCardBadgeClasses());
      expect(html).toContain(getPricingCardPriceContainerClasses());
      expect(html).toContain(getPricingCardDescriptionClasses());
      expect(html).toContain("Hot");
      expect(html).toContain("$99");
      expect(html).toContain("Best deal");
    });
  });
});

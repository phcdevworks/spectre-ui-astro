import { experimental_AstroContainer as AstroContainer } from "astro/container";
import {
  getButtonClasses,
  getCardClasses,
  getIconBoxClasses,
  getInputClasses,
  getPricingCardBadgeClasses,
  getPricingCardClasses,
  getPricingCardDescriptionClasses,
  getPricingCardPriceClasses,
  getPricingCardPriceContainerClasses,
  getRatingClasses,
  getRatingStarClasses,
  getRatingStarsClasses,
  getRatingTextClasses,
} from "@phcdevworks/spectre-ui";
import { getBadgeClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";

import SpBadge from "../src/components/SpBadge.astro";
import SpButton from "../src/components/SpButton.astro";
import SpCard from "../src/components/SpCard.astro";
import SpIconBox from "../src/components/SpIconBox.astro";
import SpInput from "../src/components/SpInput.astro";
import SpPricingCard from "../src/components/SpPricingCard.astro";
import SpRating from "../src/components/SpRating.astro";
import type { SpInputProps } from "../src/components/sp-input.shared";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SSR rendering", () => {
  it("renders SpInput associations from explicit ids only", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "email",
        label: "Email",
        helperText: "We will never share your email.",
        size: "lg",
        fullWidth: true,
      } satisfies SpInputProps,
    });

    expect(html).toContain('for="email"');
    expect(html).toContain('id="email"');
    expect(html).toContain('id="email-helper"');
    expect(html).toContain('aria-describedby="email-helper"');
    expect(html).not.toContain("email-error");
    expect(html).toContain(getInputClasses({ size: "lg", fullWidth: true }));
  });

  it("prefers the error association in aria-describedby", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        id: "password",
        label: "Password",
        helperText: "Use a strong password.",
        errorMessage: "Password must be at least 8 characters.",
        state: "error",
      } satisfies SpInputProps,
    });

    expect(html).toContain('for="password"');
    expect(html).toContain('id="password-error"');
    expect(html).toContain('aria-describedby="password-error"');
    expect(html).toContain('aria-invalid="true"');
    expect(html).not.toContain('aria-describedby="password-helper"');
    expect(html).toContain(getInputClasses({ state: "error" }));
  });

  it("rejects associated SpInput usage without a stable id", async () => {
    // @ts-expect-error SpInput associations require an explicit stable id.
    const props = { label: "Email" } satisfies SpInputProps;

    await expect(
      container.renderToString(SpInput, {
        props,
      }),
    ).rejects.toThrow(/requires an explicit `id`/);
  });

  it("allows standalone SpInput usage without an id when no associations are rendered", async () => {
    const html = await container.renderToString(SpInput, {
      props: {
        placeholder: "Search",
        size: "sm",
      } satisfies SpInputProps,
    });

    expect(html).toContain('placeholder="Search"');
    expect(html).not.toContain("<label");
    expect(html).not.toContain("aria-describedby=");
    expect(html).not.toContain('id="undefined"');
    expect(html).toContain(getInputClasses({ size: "sm" }));
  });

  it("renders SpButton with upstream classes and Astro-safe disabled anchor behavior", async () => {
    const html = await container.renderToString(SpButton, {
      props: {
        as: "a",
        href: "/docs",
        loading: true,
        variant: "primary",
        size: "lg",
      },
    });

    expect(html).toContain(getButtonClasses({ variant: "primary", size: "lg", loading: true, disabled: true }));
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
    expect(html).not.toContain('href="/docs"');
  });

  it("renders SpIconBox with upstream classes and safe disabled anchor behavior", async () => {
    const html = await container.renderToString(SpIconBox, {
      props: {
        as: "a",
        href: "/docs",
        loading: true,
        variant: "primary",
        size: "md",
      },
    });

    expect(html).toContain(getIconBoxClasses({ variant: "primary", size: "md", loading: true, disabled: true }));
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('tabindex="-1"');
    expect(html).not.toContain('href="/docs"');
  });

  it("renders SpCard with upstream classes and semantic element behavior", async () => {
    const html = await container.renderToString(SpCard, {
      props: {
        as: "button",
        variant: "outline",
        interactive: true,
        disabled: true,
      },
    });

    expect(html).toContain(getCardClasses({ variant: "outline", interactive: true, disabled: true }));
    expect(html).toContain('type="button"');
    expect(html).toContain("disabled");
    expect(html).toContain('aria-disabled="true"');
  });


  it("renders SpPricingCard with upstream slot wrapper classes and safe disabled anchor behavior", async () => {
    const html = await container.renderToString(SpPricingCard, {
      props: {
        as: "a",
        href: "/pricing",
        featured: true,
        loading: true,
      },
      slots: {
        header: "Pro",
        badge: "Most Popular",
        price: "9",
        description: "For growing teams",
        default: "<button>Choose plan</button>",
        footer: "Billed monthly",
      },
    });

    expect(html).toContain(
      getPricingCardClasses({ featured: true, loading: true, disabled: true }),
    );
    expect(html).toContain(getPricingCardBadgeClasses());
    expect(html).toContain(getPricingCardPriceContainerClasses());
    expect(html).toContain(getPricingCardPriceClasses());
    expect(html).toContain(getPricingCardDescriptionClasses());
    expect(html).toContain("Most Popular");
    expect(html).toContain("9");
    expect(html).toContain("For growing teams");
    expect(html).toContain("aria-disabled=\"true\"");
    expect(html).toContain("aria-busy=\"true\"");
    expect(html).toContain("tabindex=\"-1\"");
    expect(html).not.toContain("href=\"/pricing\"");
  });

  it("renders SpRating with upstream classes and loading-safe button behavior", async () => {
    const html = await container.renderToString(SpRating, {
      props: {
        as: "button",
        value: 3,
        max: 5,
        loading: true,
      },
      slots: {
        default: "Rated 3 out of 5",
      },
    });

    expect(html).toContain(getRatingClasses({ loading: true, disabled: true }));
    expect(html).toContain(getRatingStarsClasses());
    expect(html).toContain(getRatingTextClasses());
    expect(html).toContain(getRatingStarClasses(true));
    expect(html).toContain(getRatingStarClasses(false));
    expect(html).toContain("Rated 3 out of 5");
    expect(html).toContain("type=\"button\"");
    expect(html).toContain("disabled");
    expect(html).toContain("aria-disabled=\"true\"");
    expect(html).toContain("aria-busy=\"true\"");
  });

  it("renders SpBadge with upstream classes and safe disabled anchor behavior", async () => {
    const html = await container.renderToString(SpBadge, {
      props: {
        as: "a",
        href: "/docs",
        loading: true,
        variant: "primary",
        size: "sm",
      },
    });

    expect(html).toContain(getBadgeClasses({ variant: "primary", size: "sm", loading: true, disabled: true }));
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('tabindex="-1"');
    expect(html).not.toContain('href="/docs"');
  });

  it("renders SpBadge with upstream classes and accessibility improvements", async () => {
    const html = await container.renderToString(SpBadge, {
      props: {
        as: "span",
        interactive: true,
        hovered: true,
        disabled: true,
      },
    });

    expect(html).toContain(getBadgeClasses({ interactive: true, hovered: true, disabled: true }));
    expect(html).toContain('role="button"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
  });

  it("renders SpButton with role='button' for non-native elements and handles hovered/active props", async () => {
    const html = await container.renderToString(SpButton, {
      props: {
        as: "span",
        hovered: true,
        active: true,
        loading: true,
      },
    });

    expect(html).toContain(getButtonClasses({ hovered: true, active: true, loading: true, disabled: true }));
    expect(html).toContain('role="button"');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
  });
});

import { experimental_AstroContainer as AstroContainer } from "astro/container";
import {
  getAlertClasses,
  getBadgeClasses,
  getButtonClasses,
  getCardClasses,
  getCheckboxClasses,
  getContainerClasses,
  getDropdownClasses,
  getFieldsetClasses,
  getFieldsetLegendClasses,
  getFooterClasses,
  getGridClasses,
  getIconBoxClasses,
  getInputClasses,
  getInputErrorMessageClasses,
  getInputHelperTextClasses,
  getInputLabelClasses,
  getInputWrapperClasses,
  getLabelClasses,
  getModalClasses,
  getModalOverlayClasses,
  getNavClasses,
  getPricingCardBadgeClasses,
  getPricingCardClasses,
  getPricingCardDescriptionClasses,
  getPricingCardPriceClasses,
  getPricingCardPriceContainerClasses,
  getRadioClasses,
  getRatingClasses,
  getRatingStarClasses,
  getRatingStarsClasses,
  getRatingTextClasses,
  getSectionClasses,
  getSelectClasses,
  getSidebarClasses,
  getSpinnerClasses,
  getStackClasses,
  getTagClasses,
  getTextareaClasses,
  getToastClasses,
  getTooltipClasses,
} from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";

import SpAlert from "../src/components/SpAlert.astro";
import SpBadge from "../src/components/SpBadge.astro";
import SpButton from "../src/components/SpButton.astro";
import SpCard from "../src/components/SpCard.astro";
import SpCheckbox from "../src/components/SpCheckbox.astro";
import SpContainer from "../src/components/SpContainer.astro";
import SpDropdown from "../src/components/SpDropdown.astro";
import SpFieldset from "../src/components/SpFieldset.astro";
import SpFooter from "../src/components/SpFooter.astro";
import SpGrid from "../src/components/SpGrid.astro";
import SpIconBox from "../src/components/SpIconBox.astro";
import SpInput from "../src/components/SpInput.astro";
import SpLabel from "../src/components/SpLabel.astro";
import SpModal from "../src/components/SpModal.astro";
import SpNav from "../src/components/SpNav.astro";
import SpPricingCard from "../src/components/SpPricingCard.astro";
import SpRadio from "../src/components/SpRadio.astro";
import SpRating from "../src/components/SpRating.astro";
import SpSection from "../src/components/SpSection.astro";
import SpSelect from "../src/components/SpSelect.astro";
import SpSidebar from "../src/components/SpSidebar.astro";
import SpSpinner from "../src/components/SpSpinner.astro";
import SpStack from "../src/components/SpStack.astro";
import SpTag from "../src/components/SpTag.astro";
import SpTextarea from "../src/components/SpTextarea.astro";
import SpToast from "../src/components/SpToast.astro";
import SpTooltip from "../src/components/SpTooltip.astro";
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
    expect(html).toContain(getInputWrapperClasses());
    expect(html).toContain(getInputLabelClasses({ disabled: false }));
    expect(html).toContain(getInputHelperTextClasses());
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
    expect(html).toContain(getInputLabelClasses({ disabled: false }));
    expect(html).toContain(getInputErrorMessageClasses());
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

    expect(html).toContain(getBadgeClasses({ variant: "primary", size: "sm", loading: true, disabled: true, interactive: true }));
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

  it("renders SpAlert with upstream classes and correct ARIA for disabled state", async () => {
    const html = await container.renderToString(SpAlert, {
      props: {
        variant: "warning",
        size: "lg",
        disabled: true,
      },
    });

    expect(html).toContain(getAlertClasses({ variant: "warning", size: "lg", disabled: true }));
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
    expect(html).not.toMatch(/(^|\s)disabled="true"/);
    expect(html).not.toContain('variant="warning"');
  });

  it("renders SpAlert with loading state and aria-busy", async () => {
    const html = await container.renderToString(SpAlert, {
      props: { variant: "info", loading: true },
    });

    expect(html).toContain(getAlertClasses({ variant: "info", loading: true, disabled: true }));
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain('loading="true"');
  });

  it("renders SpSpinner with upstream classes and correct ARIA defaults", async () => {
    const html = await container.renderToString(SpSpinner, {
      props: { variant: "primary", size: "lg" },
    });

    expect(html).toContain(getSpinnerClasses({ variant: "primary", size: "lg" }));
    expect(html).toContain('role="status"');
    expect(html).toContain('aria-label="Loading"');
    expect(html).not.toContain('variant="primary"');
    expect(html).not.toContain('size="lg"');
  });

  it("renders SpSpinner with loading state and aria-busy", async () => {
    const html = await container.renderToString(SpSpinner, {
      props: { loading: true, "aria-label": "Saving" },
    });

    expect(html).toContain(getSpinnerClasses({ loading: true, disabled: true }));
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('aria-label="Saving"');
    expect(html).not.toContain('loading="true"');
  });

  it("renders SpTag with upstream classes and correct ARIA for disabled state", async () => {
    const html = await container.renderToString(SpTag, {
      props: { variant: "primary", size: "sm", disabled: true },
    });

    expect(html).toContain(getTagClasses({ variant: "primary", size: "sm", disabled: true }));
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('tabindex="-1"');
    expect(html).not.toMatch(/(^|\s)disabled="true"/);
    expect(html).not.toContain('variant="primary"');
  });

  it("renders SpTag as 'a' and guards href when loading", async () => {
    const html = await container.renderToString(SpTag, {
      props: { as: "a", href: "/docs", loading: true, variant: "info" },
    });

    expect(html).toContain(getTagClasses({ variant: "info", loading: true, disabled: true, interactive: true }));
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('tabindex="-1"');
    expect(html).not.toContain('href="/docs"');
  });

  it("renders SpTag with selected state and aria-pressed", async () => {
    const html = await container.renderToString(SpTag, {
      props: { selected: true, variant: "primary" },
    });

    expect(html).toContain("sp-tag--selected");
    expect(html).toContain('aria-pressed="true"');
    expect(html).not.toContain('selected="true"');
  });

  it("renders SpNav with upstream classes", async () => {
    const html = await container.renderToString(SpNav, {
      props: { bordered: true, sticky: true },
      slots: { default: "<a href=\"/\">Home</a>" },
    });

    expect(html).toContain(getNavClasses({ bordered: true, sticky: true }));
    expect(html).toContain("<nav");
    expect(html).toContain("Home");
  });

  it("renders SpToast with upstream classes, icon slot, and live region ARIA", async () => {
    const html = await container.renderToString(SpToast, {
      props: { variant: "success" },
      slots: { icon: "<svg></svg>", default: "Saved successfully" },
    });

    expect(html).toContain(getToastClasses({ variant: "success" }));
    expect(html).toContain('role="status"');
    expect(html).toContain('aria-live="polite"');
    expect(html).toContain("Saved successfully");
  });

  it("renders SpTooltip with upstream classes and role='tooltip'", async () => {
    const html = await container.renderToString(SpTooltip, {
      props: { placement: "bottom", visible: true },
      slots: { default: "More information" },
    });

    expect(html).toContain(getTooltipClasses({ placement: "bottom", visible: true }));
    expect(html).toContain('role="tooltip"');
    expect(html).toContain("More information");
  });

  it("renders SpDropdown with upstream classes", async () => {
    const html = await container.renderToString(SpDropdown, {
      props: { fullWidth: true },
      slots: { default: "Menu" },
    });

    expect(html).toContain(getDropdownClasses({ fullWidth: true }));
    expect(html).toContain("Menu");
  });

  it("renders SpModal with overlay/modal classes and dialog ARIA when open", async () => {
    const html = await container.renderToString(SpModal, {
      props: { open: true, fullWidth: true, "aria-labelledby": "modal-title" },
      slots: { default: "<h2 id=\"modal-title\">Confirm</h2>" },
    });

    expect(html).toContain(getModalOverlayClasses({ open: true }));
    expect(html).toContain(getModalClasses({ open: true, fullWidth: true }));
    expect(html).toContain('role="dialog"');
    expect(html).toContain('aria-modal="true"');
    expect(html).toContain('aria-labelledby="modal-title"');
    expect(html).not.toContain('aria-hidden="true"');
    expect(html).toContain("Confirm");
  });

  it("renders SpContainer with upstream classes", async () => {
    const html = await container.renderToString(SpContainer, {
      slots: { default: "Content" },
    });

    expect(html).toContain(getContainerClasses());
    expect(html).toContain("Content");
  });

  it("renders SpSection with upstream classes", async () => {
    const html = await container.renderToString(SpSection, {
      slots: { default: "Content" },
    });

    expect(html).toContain(getSectionClasses());
    expect(html).toContain("Content");
  });

  it("renders SpStack with direction-mapped upstream classes", async () => {
    const html = await container.renderToString(SpStack, {
      props: { direction: "horizontal" },
      slots: { default: "Content" },
    });

    expect(html).toContain(getStackClasses({ direction: "horizontal" }));
    expect(html).toContain("Content");
  });

  it("renders SpGrid with columns/gap-mapped upstream classes", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { columns: 3, gap: "lg" },
      slots: { default: "Content" },
    });

    expect(html).toContain(getGridClasses({ columns: 3, gap: "lg" }));
    expect(html).toContain("Content");
  });

  it("renders SpFooter with upstream classes", async () => {
    const html = await container.renderToString(SpFooter, {
      props: { bordered: true },
      slots: { default: "Content" },
    });

    expect(html).toContain(getFooterClasses({ bordered: true }));
    expect(html).toContain("<footer");
    expect(html).toContain("Content");
  });

  it("renders SpSidebar with upstream classes and SSR-safe closed state", async () => {
    const html = await container.renderToString(SpSidebar, {
      props: { bordered: true },
      slots: { default: "<a href=\"/\">Home</a>" },
    });

    expect(html).toContain(getSidebarClasses({ bordered: true }));
    expect(html).toContain("<aside");
    expect(html).toContain('data-sidebar-open="false"');
    expect(html).toContain("Home");
  });

  it("renders SpCheckbox with upstream classes", async () => {
    const html = await container.renderToString(SpCheckbox, {
      props: { checked: true, id: "agree" },
    });

    expect(html).toContain(getCheckboxClasses({ checked: true }));
    expect(html).toContain('type="checkbox"');
    expect(html).toContain('id="agree"');
  });

  it("renders SpRadio with upstream classes", async () => {
    const html = await container.renderToString(SpRadio, {
      props: { checked: true, name: "plan", value: "pro" },
    });

    expect(html).toContain(getRadioClasses({ checked: true }));
    expect(html).toContain('type="radio"');
    expect(html).toContain('name="plan"');
  });

  it("renders SpSelect with upstream classes and slotted options", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { disabled: true },
      slots: { default: '<option value="a">A</option>' },
    });

    expect(html).toContain(getSelectClasses({ disabled: true }));
    expect(html).toContain("<select");
    expect(html).toContain('<option value="a">A</option>');
  });

  it("renders SpTextarea with upstream classes and value content", async () => {
    const html = await container.renderToString(SpTextarea, {
      props: { focused: true, value: "Hello" },
    });

    expect(html).toContain(getTextareaClasses({ focused: true }));
    expect(html).toContain("<textarea");
    expect(html).toContain("Hello");
  });

  it("renders SpFieldset with upstream classes and a legend", async () => {
    const html = await container.renderToString(SpFieldset, {
      props: { disabled: true, legend: "Contact details" },
      slots: { default: "<input type=\"text\" />" },
    });

    expect(html).toContain(getFieldsetClasses({ disabled: true }));
    expect(html).toContain(`<legend class="${getFieldsetLegendClasses()}">Contact details</legend>`);
    expect(html).toContain("<fieldset");
  });

  it("renders SpLabel with upstream classes and the for attribute", async () => {
    const html = await container.renderToString(SpLabel, {
      props: { required: true, htmlFor: "agree" },
      slots: { default: "I agree to the terms" },
    });

    expect(html).toContain(getLabelClasses({ required: true }));
    expect(html).toContain('for="agree"');
    expect(html).toContain("I agree to the terms");
  });
});

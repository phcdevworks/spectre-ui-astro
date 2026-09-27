import { experimental_AstroContainer as AstroContainer } from "astro/container";
import {
  getBadgeClasses,
  getChoiceCardClasses,
  getContainerClasses,
  getDatepickerClasses,
  getDatepickerGridClasses,
  getDatepickerHeaderClasses,
  getDatepickerWeekdayClasses,
  getDayClasses,
  getDisplayClasses,
  getExternalAuthButtonClasses,
  getExternalAuthButtonIconClasses,
  getFileInputClasses,
  getGridClasses,
  getHeadingClasses,
  getInputGroupAddonClasses,
  getInputGroupClasses,
  getLeadClasses,
  getNavLinkClasses,
  getPopoverArrowClasses,
  getPopoverBodyClasses,
  getPopoverClasses,
  getPopoverHeaderClasses,
  getProgressBarClasses,
  getProgressClasses,
  getProgressLabelClasses,
  getProseClasses,
  getRadioClasses,
  getCheckboxClasses,
  getRangeClasses,
  getSectionClasses,
  getSwitchClasses,
} from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";

import SpBadge from "../src/components/SpBadge.astro";
import SpChoiceCard from "../src/components/SpChoiceCard.astro";
import SpContainer from "../src/components/SpContainer.astro";
import SpDatepicker from "../src/components/SpDatepicker.astro";
import SpDay from "../src/components/SpDay.astro";
import SpDisplay from "../src/components/SpDisplay.astro";
import SpExternalAuthButton from "../src/components/SpExternalAuthButton.astro";
import SpFileInput from "../src/components/SpFileInput.astro";
import SpGrid from "../src/components/SpGrid.astro";
import SpHeading from "../src/components/SpHeading.astro";
import SpInputGroup from "../src/components/SpInputGroup.astro";
import SpInputGroupAddon from "../src/components/SpInputGroupAddon.astro";
import SpLead from "../src/components/SpLead.astro";
import SpNavItem from "../src/components/SpNavItem.astro";
import SpPopover from "../src/components/SpPopover.astro";
import SpProgress from "../src/components/SpProgress.astro";
import SpProse from "../src/components/SpProse.astro";
import SpRange from "../src/components/SpRange.astro";
import SpSection from "../src/components/SpSection.astro";
import SpSwitch from "../src/components/SpSwitch.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

const count = (html: string, needle: string) => html.split(needle).length - 1;

describe("form control families", () => {
  it("renders SpChoiceCard as a label wrapping a native radio", async () => {
    const html = await container.renderToString(SpChoiceCard, {
      props: { name: "plan", value: "pro", checked: true, id: "plan-pro" },
      slots: { default: "Pro plan" },
    });

    expect(html).toContain(`class="${getChoiceCardClasses()}"`);
    expect(html).toContain("<label");
    expect(html).toContain('type="radio"');
    expect(html).toContain(getRadioClasses({ checked: true }));
    expect(html).toContain('name="plan"');
    expect(html).toContain('id="plan-pro"');
    expect(html).toContain("checked");
    expect(html).toContain("Pro plan");
  });

  it("renders SpChoiceCard checkbox mode with forced recipe states", async () => {
    const html = await container.renderToString(SpChoiceCard, {
      props: { type: "checkbox", selected: true, disabled: true, focused: true },
    });

    expect(html).toContain(
      getChoiceCardClasses({ selected: true, disabled: true, focused: true }),
    );
    expect(html).toContain('type="checkbox"');
    expect(html).toContain(getCheckboxClasses({ disabled: true }));
    expect(html).not.toContain("selected=");
    expect(html).not.toContain("focused=");
  });

  it("renders SpSwitch as a checkbox with the switch role", async () => {
    const html = await container.renderToString(SpSwitch, {
      props: { size: "lg", checked: true, disabled: true, "aria-label": "Notifications" },
    });

    expect(html).toContain(getSwitchClasses({ size: "lg", checked: true, disabled: true }));
    expect(html).toContain('type="checkbox"');
    expect(html).toContain('role="switch"');
    expect(html).toContain('aria-label="Notifications"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toContain("size=");
  });

  it("renders SpFileInput with state and native file attributes", async () => {
    const html = await container.renderToString(SpFileInput, {
      props: { size: "sm", state: "invalid", fullWidth: true, accept: "image/*", multiple: true },
    });

    expect(html).toContain(
      getFileInputClasses({ size: "sm", state: "invalid", fullWidth: true }),
    );
    expect(html).toContain('type="file"');
    expect(html).toContain('accept="image/*"');
    expect(html).toContain("multiple");
    expect(html).toContain('aria-invalid="true"');
    expect(html).not.toContain("fullWidth");
  });

  it("renders SpRange and mirrors the value for the WebKit fill", async () => {
    const html = await container.renderToString(SpRange, {
      props: { value: 30, min: 10, max: 60, step: 5, focused: true },
    });

    expect(html).toContain(getRangeClasses({ focused: true }));
    expect(html).toContain('type="range"');
    expect(html).toContain('value="30"');
    expect(html).toContain('min="10"');
    expect(html).toContain('max="60"');
    expect(html).toContain("--sp-component-range-value:40%");
  });

  it("omits the SpRange fill when no value is set", async () => {
    const html = await container.renderToString(SpRange, { props: {} });

    expect(html).toContain(getRangeClasses());
    expect(html).not.toContain("--sp-component-range-value");
  });

  it("renders SpInputGroup and SpInputGroupAddon", async () => {
    const group = await container.renderToString(SpInputGroup, {
      props: { disabled: true, "aria-label": "Amount" },
      slots: { default: "<input />" },
    });
    expect(group).toContain(getInputGroupClasses({ disabled: true }));
    expect(group).toContain('role="group"');
    expect(group).toContain('aria-label="Amount"');

    const addon = await container.renderToString(SpInputGroupAddon, {
      slots: { default: "$" },
    });
    expect(addon).toContain(`class="${getInputGroupAddonClasses()}"`);
    expect(addon).toContain("<span");
  });
});

describe("typography families", () => {
  it("renders SpHeading with the level as default element", async () => {
    const html = await container.renderToString(SpHeading, {
      props: { level: "h3" },
      slots: { default: "Title" },
    });
    expect(html).toContain(getHeadingClasses({ level: "h3" }));
    expect(html).toContain("<h3");
  });

  it("lets SpHeading decouple visual level from element", async () => {
    const html = await container.renderToString(SpHeading, {
      props: { level: "h4", as: "h2" },
    });
    expect(html).toContain(getHeadingClasses({ level: "h4" }));
    expect(html).toContain("<h2");

    const fallback = await container.renderToString(SpHeading, {});
    expect(fallback).toContain(getHeadingClasses());
    expect(fallback).toContain("<h2");
  });

  it("renders SpDisplay, SpLead, and SpProse", async () => {
    const display = await container.renderToString(SpDisplay, {
      props: { level: 2 },
      slots: { default: "Hero" },
    });
    expect(display).toContain(getDisplayClasses({ level: 2 }));
    expect(display).toContain("<h2");

    const lead = await container.renderToString(SpLead, {
      slots: { default: "Intro" },
    });
    expect(lead).toContain(`class="${getLeadClasses()}"`);
    expect(lead).toContain("<p");

    const prose = await container.renderToString(SpProse, {
      props: { as: "article" },
      slots: { default: "<p>Body</p>" },
    });
    expect(prose).toContain(`class="${getProseClasses()}"`);
    expect(prose).toContain("<article");
  });
});

describe("action and overlay families", () => {
  it("renders SpExternalAuthButton with a provider icon slot", async () => {
    const html = await container.renderToString(SpExternalAuthButton, {
      props: { fullWidth: true, loading: true },
      slots: { icon: "<svg></svg>", default: "Continue with provider" },
    });

    expect(html).toContain(
      getExternalAuthButtonClasses({ fullWidth: true, loading: true, disabled: true }),
    );
    expect(html).toContain(`class="${getExternalAuthButtonIconClasses()}"`);
    expect(html).toContain('type="button"');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain("disabled");
  });

  it("renders SpExternalAuthButton as a link without an icon wrapper", async () => {
    const html = await container.renderToString(SpExternalAuthButton, {
      props: { as: "a", href: "/auth/start" },
      slots: { default: "Continue" },
    });

    expect(html).toContain('href="/auth/start"');
    expect(html).not.toContain(getExternalAuthButtonIconClasses());
    expect(html).not.toContain("type=");
  });

  it("renders SpPopover with header, body, arrow, and labelled dialog", async () => {
    const html = await container.renderToString(SpPopover, {
      props: { id: "help", placement: "right", open: true, title: "Details" },
      slots: { default: "More information" },
    });

    expect(html).toContain(getPopoverClasses({ placement: "right", open: true }));
    expect(html).toContain(getPopoverHeaderClasses());
    expect(html).toContain(getPopoverBodyClasses());
    expect(html).toContain(getPopoverArrowClasses());
    expect(html).toContain('role="dialog"');
    expect(html).toContain('id="help-header"');
    expect(html).toContain('aria-labelledby="help-header"');
    expect(html).toContain("More information");
  });

  it("renders SpPopover without header or arrow when not requested", async () => {
    const html = await container.renderToString(SpPopover, {
      props: { arrow: false },
    });

    expect(html).toContain(getPopoverClasses());
    expect(html).not.toContain(getPopoverHeaderClasses());
    expect(html).not.toContain(getPopoverArrowClasses());
    expect(html).not.toContain("aria-labelledby");
  });

  it("renders a determinate SpProgress with a labelled progressbar", async () => {
    const html = await container.renderToString(SpProgress, {
      props: { id: "upload", value: 150, max: 200, label: "Uploading", variant: "success", size: "lg" },
    });

    expect(html).toContain(getProgressClasses({ size: "lg" }));
    expect(html).toContain(getProgressBarClasses({ variant: "success" }));
    expect(html).toContain(`class="${getProgressLabelClasses()}"`);
    expect(html).toContain('role="progressbar"');
    expect(html).toContain('aria-valuenow="150"');
    expect(html).toContain('aria-valuemax="200"');
    expect(html).toContain('aria-labelledby="upload-label"');
    expect(html).toContain("width:75%");
  });

  it("renders SpProgress as indeterminate when no value is given", async () => {
    const html = await container.renderToString(SpProgress, {
      props: { "aria-label": "Loading" },
    });

    expect(html).toContain(getProgressBarClasses({ indeterminate: true }));
    expect(html).not.toContain("aria-valuenow");
    expect(html).not.toContain("width:");
    expect(html).toContain('aria-busy="true"');
  });
});

describe("calendar families", () => {
  it("renders SpDay as a pressed button for the selected date", async () => {
    const html = await container.renderToString(SpDay, {
      props: { date: "2026-09-27", selected: true, today: true },
      slots: { default: "27" },
    });

    expect(html).toContain(getDayClasses({ selected: true, today: true }));
    expect(html).toContain('type="button"');
    expect(html).toContain('aria-pressed="true"');
    expect(html).toContain('aria-current="date"');
    expect(html).toContain('data-date="2026-09-27"');
  });

  it("renders a deterministic SpDatepicker month grid", async () => {
    const html = await container.renderToString(SpDatepicker, {
      props: {
        id: "cal",
        year: 2026,
        month: 9,
        selected: "2026-09-15",
        today: "2026-09-27",
        max: "2026-09-29",
        disabledDates: ["2026-09-10"],
      },
    });

    expect(html).toContain(getDatepickerClasses());
    expect(html).toContain(getDatepickerHeaderClasses());
    expect(html).toContain(getDatepickerGridClasses());
    expect(count(html, getDatepickerWeekdayClasses())).toBe(7);
    expect(html).toContain('title="Sunday"');
    expect(html).toContain('id="cal-title"');
    expect(html).toContain("September 2026");
    expect(html).toContain('aria-labelledby="cal-title"');
    // September 2026 starts on a Tuesday and spans five weeks.
    expect(count(html, "data-date=")).toBe(35);
    expect(html).toContain('data-date="2026-08-30"');
    expect(html).toContain('data-date="2026-10-03"');
    expect(html).toContain(getDayClasses({ selected: true }));
    expect(html).toContain(getDayClasses({ today: true }));
    expect(html).toContain(getDayClasses({ outsideMonth: true }));
    expect(html).toContain(getDayClasses({ disabled: true }));
    expect(html).toContain('aria-label="Tuesday, September 15, 2026"');
  });

  it("supports Monday-first weeks and hidden outside days", async () => {
    const html = await container.renderToString(SpDatepicker, {
      props: { year: 2026, month: 2, weekStartsOn: 1, showOutsideDays: false },
    });

    expect(html).toContain('title="Monday"');
    expect(count(html, "data-date=")).toBe(28);
    expect(html).not.toContain(getDayClasses({ outsideMonth: true }));
  });

  it("rejects an out-of-range month", async () => {
    await expect(
      container.renderToString(SpDatepicker, { props: { year: 2026, month: 13 } }),
    ).rejects.toThrow("month");
  });
});

describe("existing components forward newly audited recipe options", () => {
  it("forwards SpBadge dot", async () => {
    const html = await container.renderToString(SpBadge, { props: { dot: true } });
    expect(html).toContain(getBadgeClasses({ dot: true }));
    expect(html).not.toContain("dot=");
  });

  it("forwards SpContainer padding", async () => {
    const html = await container.renderToString(SpContainer, { props: { padding: "lg" } });
    expect(html).toContain(getContainerClasses({ padding: "lg" }));
    expect(html).not.toContain("padding=");
  });

  it("forwards SpSection spacing and gap", async () => {
    const html = await container.renderToString(SpSection, {
      props: { spacing: "lg", gap: "md" },
    });
    expect(html).toContain(getSectionClasses({ spacing: "lg", gap: "md" }));
    expect(html).not.toContain("spacing=");
    expect(html).not.toContain("gap=");
  });

  it("forwards SpGrid colStart", async () => {
    const html = await container.renderToString(SpGrid, {
      props: { columns: 12, colStart: { base: 1, md: 3 } },
    });
    expect(html).toContain(getGridClasses({ columns: 12, colStart: { base: 1, md: 3 } }));
    expect(html).not.toContain("colStart");
  });

  it("forwards SpNavItem active and disabled link states", async () => {
    const active = await container.renderToString(SpNavItem, {
      props: { href: "/docs", label: "Docs", active: true },
    });
    expect(active).toContain(getNavLinkClasses({ active: true }));
    expect(active).toContain('aria-current="page"');

    const disabled = await container.renderToString(SpNavItem, {
      props: { href: "/soon", label: "Soon", disabled: true },
    });
    expect(disabled).toContain(getNavLinkClasses({ disabled: true }));
    expect(disabled).not.toContain('href="/soon"');
    expect(disabled).toContain('aria-disabled="true"');
  });
});

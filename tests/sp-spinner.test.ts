import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getSpinnerClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpSpinner from "../src/components/SpSpinner.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpSpinner class and prop behavior", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpSpinner, { props: {} });
    expect(html).toContain(getSpinnerClasses());
  });

  it("renders correct classes for each variant without leaking the prop", async () => {
    for (const variant of ["primary", "secondary", "success", "warning", "danger", "info", "neutral", "accent", "cta"] as const) {
      const html = await container.renderToString(SpSpinner, { props: { variant } });
      expect(html).toContain(`sp-spinner--${variant}`);
      expect(html).not.toContain(`variant="${variant}"`);
    }
  });

  it("renders correct size classes without leaking the prop", async () => {
    for (const size of ["sm", "md", "lg"] as const) {
      const html = await container.renderToString(SpSpinner, { props: { size } });
      expect(html).toContain(`sp-spinner--${size}`);
      expect(html).not.toContain(`size="${size}"`);
    }
  });

  it("applies disabled class and aria-disabled, does not leak prop", async () => {
    const html = await container.renderToString(SpSpinner, { props: { disabled: true } });
    expect(html).toContain("sp-spinner--disabled");
    expect(html).toContain('aria-disabled="true"');
    expect(html).not.toMatch(/(^|\s)disabled="true"/);
    expect(html).not.toMatch(/(^|\s)disabled="disabled"/);
  });

  it("applies loading class and aria-busy, does not leak prop", async () => {
    const html = await container.renderToString(SpSpinner, { props: { loading: true } });
    expect(html).toContain("sp-spinner--loading");
    expect(html).toContain('aria-busy="true"');
    expect(html).not.toContain('loading="true"');
  });

  it("treats loading as functionally disabled", async () => {
    const html = await container.renderToString(SpSpinner, { props: { loading: true } });
    expect(html).toContain('aria-disabled="true"');
  });
});

describe("SpSpinner ARIA and accessibility", () => {
  it("renders role='status' by default", async () => {
    const html = await container.renderToString(SpSpinner, { props: {} });
    expect(html).toContain('role="status"');
  });

  it("uses default aria-label 'Loading' when none provided", async () => {
    const html = await container.renderToString(SpSpinner, { props: {} });
    expect(html).toContain('aria-label="Loading"');
  });

  it("uses provided aria-label over the default", async () => {
    const html = await container.renderToString(SpSpinner, { props: { "aria-label": "Saving changes" } });
    expect(html).toContain('aria-label="Saving changes"');
    expect(html).not.toContain('aria-label="Loading"');
  });

  it("renders id when provided", async () => {
    const html = await container.renderToString(SpSpinner, { props: { id: "my-spinner" } });
    expect(html).toContain('id="my-spinner"');
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpSpinner, { props: { "data-testid": "spinner" } });
    expect(html).toContain('data-testid="spinner"');
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpSpinner, { props: { class: "my-spinner", variant: "primary" } });
    expect(html).toContain("sp-spinner--primary");
    expect(html).toContain("my-spinner");
  });
});

describe("SpSpinner element and slot rendering", () => {
  it("renders as div", async () => {
    const html = await container.renderToString(SpSpinner, { props: {} });
    expect(html).toContain("<div");
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpSpinner, {
      props: {},
      slots: { default: "Loading..." },
    });
    expect(html).toContain("Loading...");
  });
});

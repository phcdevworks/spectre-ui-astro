import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getToastClasses, getToastIconClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpToast from "../src/components/SpToast.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpToast class and prop behavior", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpToast, { props: {} });
    expect(html).toContain(getToastClasses());
  });

  it("renders correct classes for each variant without leaking the prop", async () => {
    for (const variant of ["info", "success", "warning", "danger"] as const) {
      const html = await container.renderToString(SpToast, { props: { variant } });
      expect(html).toContain(`sp-toast--${variant}`);
      expect(html).not.toContain(`variant="${variant}"`);
    }
  });

  it("applies dismissed class and does not leak the prop", async () => {
    const html = await container.renderToString(SpToast, { props: { dismissed: true } });
    expect(html).toContain("sp-toast--dismissed");
    expect(html).not.toContain('dismissed="true"');
  });

  it("applies fullWidth class and does not leak the prop", async () => {
    const html = await container.renderToString(SpToast, { props: { fullWidth: true } });
    expect(html).toContain("sp-toast--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpToast, { props: { class: "my-toast", variant: "success" } });
    expect(html).toContain("sp-toast--success");
    expect(html).toContain("my-toast");
  });
});

describe("SpToast ARIA and accessibility", () => {
  it("renders role='status', aria-live and aria-atomic by default", async () => {
    const html = await container.renderToString(SpToast, { props: {} });
    expect(html).toContain('role="status"');
    expect(html).toContain('aria-live="polite"');
    expect(html).toContain('aria-atomic="true"');
  });

  it("renders aria-label when provided", async () => {
    const html = await container.renderToString(SpToast, { props: { "aria-label": "Notification" } });
    expect(html).toContain('aria-label="Notification"');
  });
});

describe("SpToast element and icon slot rendering", () => {
  it("renders as div by default", async () => {
    const html = await container.renderToString(SpToast, { props: {} });
    expect(html).toContain("<div");
  });

  it("renders as the specified element without leaking 'as'", async () => {
    for (const as of ["li", "section"] as const) {
      const html = await container.renderToString(SpToast, { props: { as } });
      expect(html).toContain(`<${as}`);
      expect(html).not.toContain(`as="${as}"`);
    }
  });

  it("does not render an icon wrapper when no icon slot is provided", async () => {
    const html = await container.renderToString(SpToast, { props: { variant: "danger" } });
    expect(html).not.toContain(getToastIconClasses({ variant: "danger" }));
  });

  it("renders an icon wrapper with toast icon classes when an icon slot is provided", async () => {
    const html = await container.renderToString(SpToast, {
      props: { variant: "danger" },
      slots: { icon: "<svg></svg>", default: "Something went wrong" },
    });
    expect(html).toContain(getToastIconClasses({ variant: "danger" }));
    expect(html).toContain("<svg></svg>");
    expect(html).toContain("Something went wrong");
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpToast, {
      props: {},
      slots: { default: "Saved successfully" },
    });
    expect(html).toContain("Saved successfully");
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpToast, {
      props: { "data-testid": "my-toast" },
    });
    expect(html).toContain('data-testid="my-toast"');
  });
});

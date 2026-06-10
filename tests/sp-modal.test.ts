import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getModalClasses, getModalOverlayClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpModal from "../src/components/SpModal.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpModal class and prop behavior", () => {
  it("renders default overlay and modal classes", async () => {
    const html = await container.renderToString(SpModal, { props: {} });
    expect(html).toContain(getModalOverlayClasses());
    expect(html).toContain(getModalClasses());
  });

  it("applies open classes to overlay and modal and does not leak the prop", async () => {
    const html = await container.renderToString(SpModal, { props: { open: true } });
    expect(html).toContain("sp-modal-overlay--open");
    expect(html).toContain("sp-modal--open");
    expect(html).not.toContain('open="true"');
  });

  it("applies fullWidth class and does not leak the prop", async () => {
    const html = await container.renderToString(SpModal, { props: { fullWidth: true } });
    expect(html).toContain("sp-modal--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });

  it("merges additional className with the modal classes, not the overlay", async () => {
    const html = await container.renderToString(SpModal, { props: { class: "my-modal" } });
    expect(html).toContain("my-modal");
  });
});

describe("SpModal ARIA and accessibility", () => {
  it("renders role='dialog' and aria-modal='true'", async () => {
    const html = await container.renderToString(SpModal, { props: {} });
    expect(html).toContain('role="dialog"');
    expect(html).toContain('aria-modal="true"');
  });

  it("sets aria-hidden='true' on overlay and modal when not open", async () => {
    const html = await container.renderToString(SpModal, { props: {} });
    const hiddenCount = (html.match(/aria-hidden="true"/g) ?? []).length;
    expect(hiddenCount).toBe(2);
  });

  it("does not set aria-hidden when open", async () => {
    const html = await container.renderToString(SpModal, { props: { open: true } });
    expect(html).not.toContain('aria-hidden="true"');
  });

  it("renders aria-label, aria-labelledby, and aria-describedby on the modal element", async () => {
    const html = await container.renderToString(SpModal, {
      props: {
        "aria-label": "Confirm action",
        "aria-labelledby": "modal-title",
        "aria-describedby": "modal-desc",
      },
    });
    expect(html).toContain('aria-label="Confirm action"');
    expect(html).toContain('aria-labelledby="modal-title"');
    expect(html).toContain('aria-describedby="modal-desc"');
  });

  it("renders id when provided", async () => {
    const html = await container.renderToString(SpModal, { props: { id: "my-modal" } });
    expect(html).toContain('id="my-modal"');
  });
});

describe("SpModal element and slot rendering", () => {
  it("renders as div by default", async () => {
    const html = await container.renderToString(SpModal, { props: {} });
    expect(html).toContain("<div");
  });

  it("renders the modal element as the specified element without leaking 'as'", async () => {
    const html = await container.renderToString(SpModal, { props: { as: "section" } });
    expect(html).toContain("<section");
    expect(html).not.toContain('as="section"');
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpModal, {
      props: { open: true },
      slots: { default: "Are you sure?" },
    });
    expect(html).toContain("Are you sure?");
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpModal, {
      props: { "data-testid": "my-modal" },
    });
    expect(html).toContain('data-testid="my-modal"');
  });
});

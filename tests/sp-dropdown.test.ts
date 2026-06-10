import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getDropdownClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpDropdown from "../src/components/SpDropdown.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpDropdown class and prop behavior", () => {
  it("renders default classes", async () => {
    const html = await container.renderToString(SpDropdown, { props: {} });
    expect(html).toContain(getDropdownClasses());
  });

  it("applies fullWidth class and does not leak the prop", async () => {
    const html = await container.renderToString(SpDropdown, { props: { fullWidth: true } });
    expect(html).toContain("sp-dropdown--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });

  it("merges additional className with recipe classes", async () => {
    const html = await container.renderToString(SpDropdown, { props: { class: "my-dropdown", fullWidth: true } });
    expect(html).toContain("sp-dropdown--full");
    expect(html).toContain("my-dropdown");
  });
});

describe("SpDropdown element and slot rendering", () => {
  it("renders as div by default", async () => {
    const html = await container.renderToString(SpDropdown, { props: {} });
    expect(html).toContain("<div");
  });

  it("renders as the specified element without leaking 'as'", async () => {
    const html = await container.renderToString(SpDropdown, { props: { as: "nav" } });
    expect(html).toContain("<nav");
    expect(html).not.toContain('as="nav"');
  });

  it("renders id when provided", async () => {
    const html = await container.renderToString(SpDropdown, { props: { id: "my-dropdown" } });
    expect(html).toContain('id="my-dropdown"');
  });

  it("renders slot content", async () => {
    const html = await container.renderToString(SpDropdown, {
      props: {},
      slots: { default: "Menu trigger" },
    });
    expect(html).toContain("Menu trigger");
  });

  it("renders extra attributes via rest spread", async () => {
    const html = await container.renderToString(SpDropdown, {
      props: { "data-testid": "my-dropdown" },
    });
    expect(html).toContain('data-testid="my-dropdown"');
  });
});

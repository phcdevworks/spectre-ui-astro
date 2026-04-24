import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getCardClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpCard from "../src/components/SpCard.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpCard class and state behavior", () => {
  it("renders with loading state correctly", async () => {
    const html = await container.renderToString(SpCard, {
      props: { loading: true, variant: "outline" },
    });

    expect(html).toContain(getCardClasses({ variant: "outline", loading: true, disabled: true }));
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('aria-disabled="true"');
  });

  it("suppresses href when loading on an anchor", async () => {
    const html = await container.renderToString(SpCard, {
      props: { as: "a", href: "https://example.com", loading: true },
    });

    expect(html).not.toContain('href="https://example.com"');
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('aria-busy="true"');
  });

  it("passes hovered and focused states to the recipe", async () => {
    const html = await container.renderToString(SpCard, {
      props: { hovered: true, focused: true },
    });

    expect(html).toContain(getCardClasses({ hovered: true, focused: true }));
  });
});

describe("SpCard accessibility and tabindex guarding", () => {
  it("applies role='button' when interactive on a non-native element", async () => {
    const html = await container.renderToString(SpCard, {
      props: { interactive: true, as: "div" },
    });

    expect(html).toContain('role="button"');
  });

  it("does not apply role='button' to native buttons or links", async () => {
    const buttonHtml = await container.renderToString(SpCard, {
      props: { interactive: true, as: "button" },
    });
    expect(buttonHtml).not.toContain('role="button"');

    const linkHtml = await container.renderToString(SpCard, {
      props: { interactive: true, as: "a" },
    });
    expect(linkHtml).not.toContain('role="button"');
  });

  it("guards tabindex for disabled non-native elements", async () => {
    const html = await container.renderToString(SpCard, {
      props: { as: "div", disabled: true, tabindex: 0 },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("guards tabindex for disabled anchors", async () => {
    const html = await container.renderToString(SpCard, {
      props: { as: "a", disabled: true, tabindex: 0 },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("does not force tabindex=-1 on native buttons when disabled", async () => {
    const html = await container.renderToString(SpCard, {
      props: { as: "button", disabled: true },
    });

    expect(html).not.toContain('tabindex="-1"');
  });
});

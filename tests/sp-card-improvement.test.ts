import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getCardClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpCard from "../src/components/SpCard.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpCard improvement verification", () => {
  it("renders with loading state correctly", async () => {
    const html = await container.renderToString(SpCard, {
      props: {
        loading: true,
        variant: "outline",
      },
    });

    expect(html).toContain(getCardClasses({ variant: "outline", loading: true, disabled: true }));
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('aria-disabled="true"');
  });

  it("handles loading links safely", async () => {
    const html = await container.renderToString(SpCard, {
      props: {
        as: "a",
        href: "https://example.com",
        loading: true,
      },
    });

    expect(html).not.toContain('href="https://example.com"');
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('aria-busy="true"');
  });

  it("passes hovered and focused states to the recipe", async () => {
    const html = await container.renderToString(SpCard, {
      props: {
        hovered: true,
        focused: true,
      },
    });

    expect(html).toContain(getCardClasses({ hovered: true, focused: true }));
  });
});

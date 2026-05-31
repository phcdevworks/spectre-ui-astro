import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getBadgeClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpBadge from "../src/components/SpBadge.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpBadge class and prop behavior", () => {
  it("applies focused class and does not leak the prop to DOM", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { focused: true },
    });

    expect(html).toContain("sp-badge--focus");
    expect(html).not.toContain('focused="true"');
    expect(html).not.toContain('focused="focused"');
  });

  it("applies active class and does not leak the prop to DOM", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { active: true },
    });

    expect(html).toContain("sp-badge--active");
    expect(html).not.toContain('active="true"');
    expect(html).not.toContain('active="active"');
  });

  it("applies fullWidth class and does not leak the prop to DOM", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { fullWidth: true },
    });

    expect(html).toContain("sp-badge--full");
    expect(html).not.toContain('fullWidth="true"');
    expect(html).not.toContain('fullWidth="fullWidth"');
  });
});

describe("SpBadge interactivity and tabindex guarding", () => {
  it("applies tabindex=0 when interactive on a non-native element", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { interactive: true, as: "div" },
    });

    expect(html).toContain('tabindex="0"');
  });

  it("applies tabindex=-1 when disabled on a non-button element", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { disabled: true, as: "a", href: "https://example.com" },
    });

    expect(html).toContain('tabindex="-1"');
  });

  it("automatically applies interactive classes when rendered as 'button'", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { as: "button" },
    });

    const interactiveClasses = getBadgeClasses({ interactive: true });
    expect(html).toContain(interactiveClasses);
    expect(html).not.toContain('role="button"');
  });

  it("automatically applies interactive classes when rendered as 'a'", async () => {
    const html = await container.renderToString(SpBadge, {
      props: { as: "a", href: "#" },
    });

    const interactiveClasses = getBadgeClasses({ interactive: true });
    expect(html).toContain(interactiveClasses);
  });
});

describe("SpBadge explicit attribute support", () => {
  it("renders id and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpBadge, {
      props: {
        id: "my-badge",
        "aria-describedby": "description-id",
      },
    });

    expect(html).toContain('id="my-badge"');
    expect(html).toContain('aria-describedby="description-id"');
  });

  it("does not leak id or aria-describedby twice when provided", async () => {
    const html = await container.renderToString(SpBadge, {
      props: {
        id: "my-badge",
        "aria-describedby": "description-id",
      },
    });

    // Check for single occurrence of id="my-badge"
    const idMatches = html.match(/id="my-badge"/g);
    expect(idMatches).toHaveLength(1);

    // Check for single occurrence of aria-describedby="description-id"
    const ariaMatches = html.match(/aria-describedby="description-id"/g);
    expect(ariaMatches).toHaveLength(1);
  });
});

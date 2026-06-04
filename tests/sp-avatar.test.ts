import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, it } from "vitest";
import SpAvatar from "../src/components/SpAvatar.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpAvatar class and prop behavior", () => {
  it("applies focused state and does not leak the prop to DOM", async () => {
    const html = await container.renderToString(SpAvatar, {
      props: { focused: true },
    });

    expect(html).toContain("sp-avatar--focus");
    expect(html).not.toContain('focused="true"');
  });

  it("applies loading state and sets aria-busy", async () => {
    const html = await container.renderToString(SpAvatar, {
      props: { loading: true },
    });

    expect(html).toContain("sp-avatar--loading");
    expect(html).toContain('aria-busy="true"');
  });

  it("applies fullWidth and placeholder classes", async () => {
    const html = await container.renderToString(SpAvatar, {
      props: { fullWidth: true, placeholder: true },
    });

    expect(html).toContain("sp-avatar--full");
    expect(html).toContain("sp-avatar--placeholder");
  });
});

describe("SpAvatar polymorphic rendering", () => {
  it("renders as a button when as='button'", async () => {
    const html = await container.renderToString(SpAvatar, {
      props: { as: "button" },
    });

    expect(html).toContain("<button");
    expect(html).toContain('sp-avatar--interactive');
  });

  it("renders as an anchor with href", async () => {
    const html = await container.renderToString(SpAvatar, {
      props: { as: "a", href: "/profile" },
    });

    expect(html).toContain("<a");
    expect(html).toContain('href="/profile"');
    expect(html).toContain('sp-avatar--interactive');
  });

  it("guards tabindex=0 for non-native interactive elements", async () => {
    const html = await container.renderToString(SpAvatar, {
      props: { as: "div", interactive: true },
    });

    expect(html).toContain('tabindex="0"');
    expect(html).toContain('role="button"');
  });

  it("suppresses href and sets tabindex=-1 when disabled", async () => {
    const html = await container.renderToString(SpAvatar, {
      props: { as: "a", href: "/profile", disabled: true },
    });

    expect(html).not.toContain('href="/profile"');
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('aria-disabled="true"');
  });
});

describe("SpAvatar explicit attribute support", () => {
  it("renders id and aria-describedby", async () => {
    const html = await container.renderToString(SpAvatar, {
      props: { id: "my-avatar", "aria-describedby": "desc" },
    });

    expect(html).toContain('id="my-avatar"');
    expect(html).toContain('aria-describedby="desc"');
  });
});

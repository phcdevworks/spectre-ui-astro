import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getSelectClasses } from "@phcdevworks/spectre-ui";
import { beforeAll, describe, expect, it } from "vitest";
import SpSelect from "../src/components/SpSelect.astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

describe("SpSelect class and prop behavior", () => {
  it("applies the base class and no state modifiers by default", async () => {
    const html = await container.renderToString(SpSelect, { props: {} });

    expect(html).toContain(getSelectClasses());
  });

  it("applies focused class and does not leak the prop to the DOM", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { focused: true },
    });

    expect(html).toContain(getSelectClasses({ focused: true }));
    expect(html).not.toContain('focused="true"');
  });

  it("applies disabled class and renders the disabled attribute", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { disabled: true },
    });

    expect(html).toContain(getSelectClasses({ disabled: true }));
    expect(html).toContain("disabled");
    expect(html).toContain('aria-disabled="true"');
  });

  it("renders slotted option children", async () => {
    const html = await container.renderToString(SpSelect, {
      props: {},
      slots: { default: '<option value="a">A</option>' },
    });

    expect(html).toContain("<select");
    expect(html).toContain('<option value="a">A</option>');
  });

  it("applies size and shape classes", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { size: "lg", fullWidth: true, pill: true },
    });

    expect(html).toContain(
      getSelectClasses({ size: "lg", fullWidth: true, pill: true }),
    );
  });

  it("applies invalid state class and aria-invalid", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { state: "invalid" },
    });

    expect(html).toContain(getSelectClasses({ state: "invalid" }));
    expect(html).toContain('aria-invalid="true"');
  });

  it("applies success state class", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { state: "success" },
    });

    expect(html).toContain(getSelectClasses({ state: "success" }));
  });

  it("respects an explicit aria-invalid override", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { state: "invalid", "aria-invalid": "false" },
    });

    expect(html).toContain('aria-invalid="false"');
  });

  it("applies loading class and aria-busy, and does not leak the prop to the DOM", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { loading: true },
    });

    expect(html).toContain(getSelectClasses({ loading: true }));
    expect(html).toContain('aria-busy="true"');
    expect(html).not.toContain('loading="true"');
  });
});

describe("SpSelect explicit attribute support", () => {
  it("renders id, name, multiple, and aria-describedby when provided", async () => {
    const html = await container.renderToString(SpSelect, {
      props: {
        id: "country",
        name: "country",
        multiple: true,
        "aria-describedby": "country-help",
      },
    });

    expect(html).toContain('id="country"');
    expect(html).toContain('name="country"');
    expect(html).toContain("multiple");
    expect(html).toContain('aria-describedby="country-help"');
  });

  it("renders required when provided", async () => {
    const html = await container.renderToString(SpSelect, {
      props: { required: true },
    });

    expect(html).toContain("required");
  });
});

import assert from "node:assert/strict";

import {
  resolveSpInputAccessibility,
  type SpInputProps,
} from "../src/components/sp-input.shared";

const associatedProps = {
  id: "typed-email",
  label: "Email",
  helperText: "Typed helper",
} satisfies SpInputProps;

const standaloneProps = {
  type: "text",
  placeholder: "Standalone input",
} satisfies SpInputProps;

// @ts-expect-error SpInput associations require an explicit stable id.
const invalidAssociatedProps = { label: "Missing id" } satisfies SpInputProps;

void associatedProps;
void standaloneProps;
void invalidAssociatedProps;

const helperCase = resolveSpInputAccessibility({
  id: "email",
  label: "Email",
  helperText: "We will never share your email.",
});

assert.equal(helperCase.inputId, "email");
assert.equal(helperCase.helperId, "email-helper");
assert.equal(helperCase.errorId, undefined);
assert.equal(helperCase.describedBy, "email-helper");

const errorCase = resolveSpInputAccessibility({
  id: "password",
  label: "Password",
  helperText: "Use a strong password.",
  errorMessage: "Password must be at least 8 characters.",
});

assert.equal(errorCase.helperId, "password-helper");
assert.equal(errorCase.errorId, "password-error");
assert.equal(errorCase.describedBy, "password-error");

const standaloneCase = resolveSpInputAccessibility({});

assert.equal(standaloneCase.inputId, undefined);
assert.equal(standaloneCase.helperId, undefined);
assert.equal(standaloneCase.errorId, undefined);
assert.equal(standaloneCase.describedBy, undefined);

assert.throws(
  () =>
    resolveSpInputAccessibility({
      label: "Email",
    }),
  /requires an explicit `id`/,
);

console.log("SpInput SSR validation passed.");

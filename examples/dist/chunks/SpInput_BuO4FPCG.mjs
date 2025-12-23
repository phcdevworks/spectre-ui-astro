import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, b as renderTemplate } from './astro/server_CfgvOo0p.mjs';
import { getInputClasses } from '@phcdevworks/spectre-ui';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$SpInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SpInput;
  const {
    label,
    state = "default",
    size = "md",
    fullWidth = false,
    helperText,
    errorMessage,
    id,
    class: className,
    ...rest
  } = Astro2.props;
  const inputId = id ?? `sp-input-${Math.random().toString(36).slice(2)}`;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  const describedBy = errorMessage ? errorId : helperText ? helperId : void 0;
  const classes = getInputClasses({ state, size, fullWidth });
  const finalClass = [classes, className].filter(Boolean).join(" ");
  delete rest.class;
  return renderTemplate`${maybeRenderHead()}<div class="sp-input-wrapper"> ${label && renderTemplate`<label class="sp-label"${addAttribute(inputId, "for")}> ${label} </label>`} <input${addAttribute(inputId, "id")}${addAttribute(finalClass, "class")}${addAttribute(state === "error" ? "true" : void 0, "aria-invalid")}${addAttribute(describedBy, "aria-describedby")}${spreadAttributes(rest)}> ${helperText && !errorMessage && renderTemplate`<p class="sp-helper-text"${addAttribute(helperId, "id")}> ${helperText} </p>`} ${errorMessage && renderTemplate`<p class="sp-error-message"${addAttribute(errorId, "id")}> ${errorMessage} </p>`} </div>`;
}, "/workspaces/spectre-ui-astro/dist/components/SpInput.astro", void 0);

export { $$SpInput as $ };

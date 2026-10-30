export function pickAriaProps(obj: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('aria-') && value !== undefined) out[key] = value;
  }
  return out;
}

/** More than one option can be selected as soon as one is a checkbox, also when mixed with radios. */
export const isMultiSelectable = (items: { role?: string }[]) => items.some((item) => item.role === 'checkbox');

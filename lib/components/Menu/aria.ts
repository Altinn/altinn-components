export function pickAriaProps(obj: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('aria-') && value !== undefined) out[key] = value;
  }
  return out;
}

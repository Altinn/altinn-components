export function pickAriaProps(obj: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('aria-') && value !== undefined) out[key] = value;
  }
  return out;
}

/** More than one option can be selected as soon as one is a checkbox, also when mixed with radios. */
export const isMultiSelectable = (items: { role?: string }[]) => items.some((item) => item.role === 'checkbox');

/** Index of the group whose title names the whole list: the only titled group, and the first. -1 if none. */
export const findListTitleIndex = (groups: ({ title?: string; hidden?: boolean } | undefined)[]) => {
  const visible = groups.map((group, index) => ({ group, index })).filter(({ group }) => !group?.hidden);
  const titled = visible.filter(({ group }) => Boolean(group?.title));
  return titled.length === 1 && titled[0].index === visible[0]?.index ? titled[0].index : -1;
};

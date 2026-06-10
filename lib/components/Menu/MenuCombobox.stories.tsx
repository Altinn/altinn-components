import type { Meta } from '@storybook/react-vite';
import { expect, userEvent, waitFor } from 'storybook/test';
import { Menu } from './Menu';

const meta = { title: 'Menu/Combobox', component: Menu } satisfies Meta<typeof Menu>;
export default meta;

const items = [
  {
    role: 'checkbox',
    name: 'owner',
    value: 'skatt',
    title: 'Skatteetaten',
    checked: true,
    onClick: () => {},
  },
  { role: 'checkbox', name: 'owner', value: 'nav', title: 'NAV', checked: false },
  { role: 'checkbox', name: 'owner', value: 'dab', title: 'Digdir', checked: false },
];

export const StructureAndNavigation = {
  render: () => (
    <Menu
      id="owner"
      open
      keyboardEvents
      searchable
      a11yMode="combobox"
      search={{ name: 'owner', placeholder: 'Søk' }}
      // biome-ignore lint/suspicious/noExplicitAny: test fixture
      items={items as any}
    />
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const doc = canvasElement.ownerDocument;
    const input = doc.querySelector('input') as HTMLInputElement;
    const listbox = doc.querySelector('[role="listbox"]') as HTMLElement;

    // Valid combobox-with-listbox: combobox role on the input, controlling the listbox.
    expect(input.getAttribute('role')).toBe('combobox');
    expect(input.getAttribute('aria-controls')).toBe(listbox.id);
    // The search input is NOT inside the listbox.
    expect(listbox.querySelector('input')).toBeNull();
    // Options are role="option" with aria-selected reflecting the checked state.
    const options = [...listbox.querySelectorAll('[role="option"]')];
    expect(options).toHaveLength(3);
    expect(options.map((o) => o.getAttribute('aria-selected'))).toEqual(['true', 'false', 'false']);

    // ArrowDown moves the active descendant through the options (does not leave the list).
    input.focus();
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(input.getAttribute('aria-activedescendant')).toBeTruthy());
    const active = doc.getElementById(input.getAttribute('aria-activedescendant')!);
    expect(active?.getAttribute('role')).toBe('option');
    expect(listbox.contains(active)).toBe(true);
    expect(active?.textContent).toContain('NAV');

    // Enter selects the active option (useMenu dispatches a click on it).
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(active?.textContent).toContain('NAV'));
  },
};

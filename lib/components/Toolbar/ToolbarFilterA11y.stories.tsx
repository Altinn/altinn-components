import type { Meta } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Toolbar } from './Toolbar';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter';
import { inboxFilters } from './example.data';

const meta = {
  title: 'Toolbar/ToolbarFilter (a11y)',
  component: ToolbarFilter,
} satisfies Meta<typeof ToolbarFilter>;

export default meta;

const filters: ToolbarFilterProps['filters'] = [
  {
    name: 'partyScope',
    label: 'Velg aktør',
    title: 'Velg aktør',
    items: [
      { role: 'radio', name: 'partyScope', value: 'ALL_PARTIES', title: 'Alle aktører' },
      { role: 'radio', name: 'partyScope', value: 'PERSONS', title: 'Personer' },
    ],
  },
  {
    name: 'status',
    label: 'Status',
    title: 'Status',
    items: [
      { role: 'checkbox', name: 'status', value: 'unread', title: 'Ulest' },
      { role: 'checkbox', name: 'status', value: 'requires-action', title: 'Krever handling' },
    ],
  },
];

export const TriggerButtonAria = {
  render: () => (
    <Toolbar>
      <ToolbarFilter filters={filters} />
    </Toolbar>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    const partyBtn = await canvas.findByRole('button', { name: /Velg aktør/i });

    expect(partyBtn).toHaveAttribute('aria-haspopup', 'menu');
    expect(partyBtn).toHaveAttribute('aria-expanded', 'false');
    expect(partyBtn).not.toHaveAttribute('aria-controls');

    await userEvent.click(partyBtn);
    await waitFor(() => expect(partyBtn).toHaveAttribute('aria-expanded', 'true'));
    const controls = partyBtn.getAttribute('aria-controls');
    expect(controls).toBe('toolbar-filter-menu-partyScope');
    expect(doc.getElementById(controls!)?.getAttribute('role')).toBe('menu');

    const statusBtn = await canvas.findByRole('button', { name: /^Status/i });
    await userEvent.click(statusBtn);
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-controls', 'toolbar-filter-menu-status'));
    expect(statusBtn.getAttribute('aria-controls')).not.toBe(controls);
  },
};

export const AddMenuItemIdsAreUnique = {
  render: () => (
    <Toolbar>
      <ToolbarFilter
        filters={inboxFilters.map((f) => ({ ...f, removable: true }))}
        filterState={{ status: ['requires-action'] }}
      />
    </Toolbar>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    await userEvent.click(await canvas.findByRole('button', { name: /Legg til/i }));
    await waitFor(() => expect(doc.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());

    const items = [...doc.querySelectorAll('#tool-filter-add [role="menuitem"]')] as HTMLElement[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      expect(doc.querySelectorAll(`[id="${CSS.escape(item.id)}"]`).length).toBe(1);
    }
  },
};

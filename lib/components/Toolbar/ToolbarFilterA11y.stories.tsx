import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Toolbar } from './Toolbar';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter';
import { ToolbarMenu } from './ToolbarMenu';
import { inboxFilters } from './example.data';
import type { FilterState } from './useFilter';

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

/** Focus moves to the active option itself. */
const activeOption = (list: HTMLElement) => {
  const active = list.ownerDocument.activeElement as HTMLElement | null;
  return active && list.contains(active) ? active : null;
};
const hasFocusInside = (el: HTMLElement) => el.contains(el.ownerDocument.activeElement);

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

    // A filter without a search field opens a list of values, not a menu.
    expect(partyBtn).toHaveAttribute('aria-haspopup', 'listbox');
    expect(partyBtn).toHaveAttribute('aria-expanded', 'false');
    expect(partyBtn).not.toHaveAttribute('aria-controls');

    await userEvent.click(partyBtn);
    await waitFor(() => expect(partyBtn).toHaveAttribute('aria-expanded', 'true'));
    const controls = partyBtn.getAttribute('aria-controls');
    expect(controls).toBe('toolbar-filter-menu-partyScope-listbox');
    const listbox = doc.getElementById(controls!) as HTMLElement;
    expect(listbox.getAttribute('role')).toBe('listbox');
    expect(listbox).toHaveAccessibleName('Velg aktør');
    expect(listbox).not.toHaveAttribute('aria-multiselectable');
    expect(within(listbox).getAllByRole('option')).toHaveLength(2);

    // Nothing is a menu, and the panel around the list has no role of its own.
    expect(doc.querySelectorAll('[role="menu"], [role="menuitemradio"], [role="menuitemcheckbox"]')).toHaveLength(0);
    expect(listbox.closest('[role="dialog"]')).toBeNull();

    const statusBtn = await canvas.findByRole('button', { name: /^Status/i });
    await userEvent.click(statusBtn);
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-controls', 'toolbar-filter-menu-status-listbox'));
    expect(statusBtn.getAttribute('aria-controls')).not.toBe(controls);
    expect(doc.getElementById('toolbar-filter-menu-status-listbox')).toHaveAttribute('aria-multiselectable', 'true');
  },
};

export const ListboxKeyboard = {
  // Behaviour only, the look is covered by the stories above.
  parameters: { screenshot: { skip: true } },
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    return (
      <Toolbar>
        <ToolbarFilter filters={filters} filterState={filterState} onFilterStateChange={setFilterState} />
      </Toolbar>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    const statusBtn = await canvas.findByRole('button', { name: /^Status/i });
    await userEvent.click(statusBtn);

    // The list takes focus and points out its active option.
    const listbox = await waitFor(() => doc.getElementById('toolbar-filter-menu-status-listbox') as HTMLElement);
    await waitFor(() => expect(hasFocusInside(listbox)).toBe(true));
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Ulest'));
    expect(activeOption(listbox)).toHaveAttribute('role', 'option');

    // Arrow keys, Home, End and type-ahead move the active option.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Krever handling'));
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Ulest'));
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Krever handling'));
    await userEvent.keyboard('u');
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Ulest'));

    // Space selects a checkbox option and leaves the list open.
    await userEvent.keyboard(' ');
    await waitFor(() =>
      expect(within(listbox).getByRole('option', { name: 'Ulest' })).toHaveAttribute('aria-selected', 'true'),
    );
    expect(statusBtn).toHaveAttribute('aria-expanded', 'true');

    // Enter after a click toggles the option once, also when the click left focus on the option itself.
    const requiresAction = within(listbox).getByRole('option', { name: 'Krever handling' });
    await userEvent.click(requiresAction);
    await waitFor(() => expect(requiresAction).toHaveAttribute('aria-selected', 'true'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(requiresAction).toHaveAttribute('aria-selected', 'false'));
    listbox.focus();

    // Tab closes the list and puts focus back on the button.
    await userEvent.tab();
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(statusBtn).toHaveFocus());

    // Enter on a radio option selects it, closes the list and returns focus.
    const partyBtn = await canvas.findByRole('button', { name: /Velg aktør/i });
    await userEvent.click(partyBtn);
    const partyList = await waitFor(() => doc.getElementById('toolbar-filter-menu-partyScope-listbox') as HTMLElement);
    await waitFor(() => expect(hasFocusInside(partyList)).toBe(true));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeOption(partyList)).toHaveTextContent('Personer'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(partyBtn).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(partyBtn).toHaveFocus());
  },
};

export const LongListFollowsTheKeys = {
  parameters: { screenshot: { skip: true } },
  render: () => (
    <Toolbar>
      <ToolbarMenu
        id="long"
        label="Velg"
        title="Velg nummer"
        items={Array.from({ length: 40 }, (_, i) => ({ id: `n-${i}`, title: `Nummer ${i + 1}` }))}
      />
    </Toolbar>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    // The button says what it is for, then the chosen value.
    const button = await canvas.findByRole('button', { name: 'Velg nummer: Velg' });
    await userEvent.click(button);

    const listbox = within(doc.body).getByRole('listbox', { name: 'Velg nummer' });
    const panel = doc.getElementById('long-panel') as HTMLElement;
    await waitFor(() => expect(hasFocusInside(listbox)).toBe(true));

    // The list is longer than its panel, which scrolls.
    expect(panel.scrollHeight).toBeGreaterThan(panel.clientHeight);

    const expectActiveInView = async (name: string) =>
      waitFor(() => {
        const active = activeOption(listbox) as HTMLElement;
        expect(active).toHaveTextContent(name);
        const activeRect = active.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();
        expect(activeRect.top).toBeGreaterThanOrEqual(panelRect.top - 1);
        expect(activeRect.bottom).toBeLessThanOrEqual(panelRect.bottom + 1);
      });

    // The keys never move the active option out of sight.
    await userEvent.keyboard('{End}');
    await expectActiveInView('Nummer 40');
    expect(panel.scrollTop).toBeGreaterThan(0);
    await userEvent.keyboard('{Home}');
    await expectActiveInView('Nummer 1');
    for (let i = 0; i < 25; i++) {
      await userEvent.keyboard('{ArrowDown}');
    }
    await expectActiveInView('Nummer 26');

    // Closed and opened again, the panel starts from the top with the first option active.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(button).toHaveAttribute('aria-expanded', 'false'));
    await userEvent.click(button);
    await waitFor(() => expect(hasFocusInside(listbox)).toBe(true));
    expect(panel.scrollTop).toBe(0);
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Nummer 1'));
  },
};

export const SearchableFilterIsDialog = {
  parameters: { screenshot: { skip: true } },
  render: () => (
    <Toolbar>
      <ToolbarFilter
        filters={[
          {
            name: 'owner',
            label: 'Tjenesteeier',
            title: 'Velg tjenesteeier',
            searchable: true,
            search: { name: 'owner-search', placeholder: 'Søk' },
            items: [
              { role: 'checkbox', name: 'owner', value: 'skatt', title: 'Skatteetaten' },
              { role: 'checkbox', name: 'owner', value: 'nav', title: 'NAV' },
            ],
          },
        ]}
      />
    </Toolbar>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    const button = await canvas.findByRole('button', { name: /Tjenesteeier/i });
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    await userEvent.click(button);

    // With a search field the panel holds more than a list, so it is a dialog named by its title.
    const dialog = await within(doc.body).findByRole('dialog', { name: 'Velg tjenesteeier' });
    expect(button).toHaveAttribute('aria-controls', dialog.id);
    expect(dialog).not.toHaveAttribute('aria-modal');

    // Inside it the search field is a combobox that controls the listbox.
    const input = within(dialog).getByRole('combobox', { name: 'Søk' });
    const listbox = within(dialog).getByRole('listbox');
    await waitFor(() => expect(input).toHaveFocus());
    expect(input).toHaveAttribute('aria-controls', listbox.id);
    expect(listbox.id).toBe('toolbar-filter-menu-owner-listbox');
    expect(doc.querySelectorAll('[role="menu"]')).toHaveLength(0);

    // Arrow keys move through the options while focus stays in the search field, and typing still types.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(input.getAttribute('aria-activedescendant')).toBeTruthy());
    await userEvent.keyboard('n a');
    expect(input).toHaveValue('n a');
    await userEvent.clear(input);

    // Tab past the last control closes the dialog and puts focus back on the button.
    input.focus();
    await userEvent.tab();
    await waitFor(() => expect(button).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(button).toHaveFocus());
  },
};

export const FullscreenIsModalDialog = {
  globals: {
    viewport: { value: 'mobile1' },
  },
  // storycap captures after the viewport has been reset, so a baseline here would show the desktop rendering.
  parameters: { screenshot: { skip: true } },
  render: () => (
    <Toolbar>
      <ToolbarFilter filters={filters} />
    </Toolbar>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    // Guard: this must run below the 1024px breakpoint, where the dropdown covers the page.
    expect(window.innerWidth).toBeLessThan(1024);

    const statusBtn = await canvas.findByRole('button', { name: /^Status/i });
    expect(statusBtn).toHaveAttribute('aria-haspopup', 'dialog');
    await userEvent.click(statusBtn);

    // Covering the page, the dropdown is a modal dialog named by its title, with the list inside.
    const dialog = await within(doc.body).findByRole('dialog', { name: 'Status' });
    // A native modal dialog, opened with showModal().
    expect(dialog.tagName).toBe('DIALOG');
    expect(dialog.matches(':modal')).toBe(true);
    expect(statusBtn).toHaveAttribute('aria-controls', dialog.id);
    const listbox = within(dialog).getByRole('listbox');
    await waitFor(() => expect(hasFocusInside(listbox)).toBe(true));

    // The browser makes the page behind inert: it cannot be focused, so it cannot be reached with a screen reader either.
    statusBtn.focus();
    expect(statusBtn).not.toHaveFocus();
    expect(hasFocusInside(listbox)).toBe(true);

    // Tab stays inside the dialog: the browser does that for a modal dialog. The synthetic Tab in this test
    // does not follow the browser's rules, so it is not checked here.
    expect(statusBtn).toHaveAttribute('aria-expanded', 'true');

    // The close button is inside the dialog and has a name.
    await userEvent.click(within(dialog).getByRole('button', { name: /Lukk|Close/ }));
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-expanded', 'false'));

    // Closed, the page is usable again and focus is back on the button.
    expect(dialog.matches(':modal')).toBe(false);
    await waitFor(() => expect(statusBtn).toHaveFocus());
  },
};

export const RemoveButtonsNameTheirFilter = {
  parameters: { screenshot: { skip: true } },
  render: () => (
    <Toolbar>
      <ToolbarFilter
        filters={filters.map((f) => ({ ...f, removable: true }))}
        filterState={{ status: ['unread'], partyScope: ['PERSONS'] }}
      />
    </Toolbar>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Each chip's remove button says which filter it removes, so they can be told apart in a list of buttons.
    expect(await canvas.findByRole('button', { name: 'Fjern filter: Status' })).toBeInTheDocument();
    expect(canvas.getByRole('button', { name: 'Fjern filter: Velg aktør' })).toBeInTheDocument();
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

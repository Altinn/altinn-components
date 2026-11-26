import type { Meta } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Toolbar, ToolbarFilter } from './';
import { SelectDateFilter } from './SelectDateFilter';
import { timeFilter } from './example.data';
import { useInboxFilter } from './example.hooks';

const meta = {
  title: 'Toolbar/SelectDateFilter',
  component: SelectDateFilter,
  parameters: {},
  args: {},
} satisfies Meta<typeof SelectDateFilter>;

export default meta;

export const Datepicker = () => {
  const inboxFilter = useInboxFilter({
    filters: [{ ...timeFilter, as: SelectDateFilter }],
    defaultFilterState: {},
  });
  return (
    <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>
  );
};

export const RemovableDatepicker = () => {
  const inboxFilter = useInboxFilter({
    filters: [{ ...timeFilter, as: SelectDateFilter, removable: true }],
    defaultFilterState: {},
  });

  return (
    <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>
  );
};

export const CustomName = () => {
  const items = timeFilter.items.map((item) => {
    return {
      ...item,
      name: 'date',
    };
  });

  const inboxFilter = useInboxFilter({
    filters: [{ ...timeFilter, items, name: 'date', as: SelectDateFilter }],
    defaultFilterState: {},
  });
  return (
    <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>
  );
};

export const FocusFollowsTheView = {
  // Behaviour only, the look is covered by the stories above.
  parameters: { screenshot: { skip: true } },
  render: () => <Datepicker />,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    // The panel holds a list and a date form, so the button opens a dialog.
    const button = await canvas.findByRole('button', { name: 'Dato ...: Tid' });
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    await userEvent.click(button);

    const dialog = await within(doc.body).findByRole('dialog', { name: 'Dato ...' });
    expect(button).toHaveAttribute('aria-controls', dialog.id);
    const listbox = within(dialog).getByRole('listbox');
    await waitFor(() => expect(listbox.contains(doc.activeElement)).toBe(true));
    expect(listbox.id).toBeTruthy();
    expect(within(listbox).getAllByRole('option')).toHaveLength(7);
    expect(doc.querySelectorAll('[role="menu"], [role="datepicker"]')).toHaveLength(0);

    // Opening the date form removes the list. Focus moves to the first control in the form.
    await userEvent.click(within(listbox).getByRole('option', { name: 'Spesifiser dato ...' }));
    const back = await within(dialog).findByRole('button', { name: 'Tilbake' });
    await waitFor(() => expect(back).toHaveFocus());

    // Going back removes the form. Focus moves to the list.
    await userEvent.click(back);
    await waitFor(() => expect(within(dialog).getByRole('listbox').contains(doc.activeElement)).toBe(true));
  },
};

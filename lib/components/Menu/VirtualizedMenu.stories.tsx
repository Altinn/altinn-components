import type { Meta } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Flex } from '../Page';
import { ToolbarMenu } from '../Toolbar';
import { Menu } from './Menu';
import type { MenuItemProps } from './MenuItem';
import { useRandomMenuItems } from './example.hooks';

export interface RawDataItem {
  id: string;
  groupId: string;
  name: string;
  orgNumber?: string;
  birthdate?: string;
  parentId?: string;
}

const meta = {
  title: 'Menu/VirtualizedMenu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    variant: 'default',
  },
} satisfies Meta<typeof Menu>;

export default meta;

export const NotVirtualized = () => {
  const { items, groups } = useMemo(() => useRandomMenuItems(10), []);
  return <Menu searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
};
NotVirtualized.parameters = {
  //can't screenshot tests with useRandomMenuItems
  screenshot: { skip: true },
};

export const Virtualized = () => {
  const { items, groups } = useMemo(() => useRandomMenuItems(10000), []);
  return <Menu virtualized searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
};
Virtualized.parameters = {
  //can't screenshot tests with useRandomMenuItems
  screenshot: { skip: true },
};

export const ToolbarVirtualizedMenu = () => {
  const { items, groups } = useMemo(() => useRandomMenuItems(10000), []);
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const currentAccountName = items.find((item) => item.id === currentAccount)?.title;
  return (
    <Flex padding={3}>
      <ToolbarMenu
        size="md"
        items={items}
        groups={groups}
        virtualized
        searchable
        title="Title"
        onSelectId={setCurrentAccount}
        label={currentAccountName ?? 'Select account'}
      />
    </Flex>
  );
};
ToolbarVirtualizedMenu.parameters = {
  //can't screenshot with useRandomMenuItems
  screenshot: { skip: true },
};

ToolbarVirtualizedMenu.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const doc = canvasElement.ownerDocument;

  // The button says what it is for, then the chosen value.
  const button = canvas.getByRole('button', { name: 'Title: Select account' });
  await userEvent.click(button);

  const input = await within(doc.body).findByRole('combobox');
  await waitFor(() => expect(input).toHaveFocus());
  const listbox = doc.getElementById('toolbar-menu-listbox') as HTMLElement;
  await waitFor(() => expect(within(listbox).getAllByRole('option').length).toBeGreaterThan(0));

  // A group title is the name of its group and is not read as a row. Positions are counted within the group.
  const favourites = within(listbox).getByRole('group', { name: 'Favoritter' });
  const favourite = within(favourites).getByRole('option');
  expect(favourite).toHaveAttribute('aria-posinset', '1');
  expect(favourite).toHaveAttribute('aria-setsize', '1');
  expect(within(listbox).getByText('Favoritter')).toHaveAttribute('aria-hidden', 'true');

  // Arrow keys move through rows that are not rendered yet. The list follows, so the active option stays in view.
  for (let i = 0; i < 40; i++) {
    await userEvent.keyboard('{ArrowDown}');
  }
  await waitFor(() => {
    const active = doc.getElementById(input.getAttribute('aria-activedescendant') ?? '');
    expect(active).toBeTruthy();
    const activeRect = (active as HTMLElement).getBoundingClientRect();
    const listRect = listbox.getBoundingClientRect();
    expect(activeRect.top).toBeGreaterThanOrEqual(listRect.top - 1);
    expect(activeRect.bottom).toBeLessThanOrEqual(listRect.bottom + 1);
  });
  expect(listbox.scrollTop).toBeGreaterThan(0);

  // Closed and opened again, the list starts from the top.
  await userEvent.keyboard('{Escape}');
  await waitFor(() => expect(button).toHaveAttribute('aria-expanded', 'false'));
  await userEvent.click(button);
  await waitFor(() => expect(button).toHaveAttribute('aria-expanded', 'true'));
  await waitFor(() => expect(listbox.scrollTop).toBe(0));
};

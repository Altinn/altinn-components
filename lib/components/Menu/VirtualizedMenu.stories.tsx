import type { Meta } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
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

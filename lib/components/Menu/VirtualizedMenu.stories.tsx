import type { Meta } from '@storybook/react-vite';
import { ToolbarMenu } from '../Toolbar/ToolbarMenu';
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
  const { items, groups } = useRandomMenuItems(10);
  return <Menu searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
};

export const Virtualized = () => {
  const { items, groups } = useRandomMenuItems(10000);
  return <Menu virtualized searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
};

export const ToolbarVirtualizedMenu = () => {
  const { items, groups } = useRandomMenuItems(10000);

  return <ToolbarMenu size="md" items={items} groups={groups} virtualized searchable title="Title" label="Label" />;
};

import type { Meta, StoryObj } from '@storybook/react';
import { AccountMenu, type AccountMenuProps } from '..';
import { accountMenu } from '../../../examples';

const meta = {
  title: 'Account/AccountMenu',
  component: AccountMenu,
  tags: ['autodocs'],
  parameters: {},
  args: accountMenu as AccountMenuProps,
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithoutGroups: Story = {
  args: {
    items: accountMenu.items.filter((item) => item.type !== 'group') as AccountMenuProps['items'],
  },
};

export const WithoutSubunits: Story = {
  args: {
    items: accountMenu.items.filter((item) => !item.parentId) as AccountMenuProps['items'],
  },
};

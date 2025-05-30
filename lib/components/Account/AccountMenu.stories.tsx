import type { Meta, StoryObj } from '@storybook/react';
import { AccountMenu, type AccountMenuProps } from '..';
import { accountMenu, defaultAccounts, useAccountMenu } from '../../../examples';

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
  args: {
    items: accountMenu.items.filter((item) => item.type !== 'group') as AccountMenuProps['items'],
    onSelectAccount: (id: string) => console.log('ID', id),
  },
};

export const Controlled = () => {
  const accountMenu = useAccountMenu({ accounts: defaultAccounts });
  return <AccountMenu {...(accountMenu as AccountMenuProps)} />;
};

export const WithoutSubunits: Story = {
  args: {
    items: accountMenu.items
      .filter((item) => !item.parentId)
      .map((item) => {
        return {
          ...item,
          description: undefined,
        };
      }) as AccountMenuProps['items'],
  },
};

export const WithGroups: Story = {
  args: {
    items: accountMenu.items as AccountMenuProps['items'],
  },
};

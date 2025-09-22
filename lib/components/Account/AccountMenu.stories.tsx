import type { Meta } from '@storybook/react-vite';
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

export const Default = () => {
  const { items, groups, search } = useAccountMenu({
    accounts: defaultAccounts?.map((item) => {
      return { ...item, favourite: false };
    }),
  });
  return <AccountMenu search={search} groups={groups} items={items} />;
};

export const WithFavourites = () => {
  const { items, groups, search } = useAccountMenu({
    accounts: defaultAccounts?.filter((item) => item.type !== 'group'),
  });
  return <AccountMenu search={search} groups={groups} items={items} />;
};

export const WithGroups = () => {
  const { items, groups, search } = useAccountMenu({
    accounts: defaultAccounts,
    includeGroups: true,
  });
  return <AccountMenu search={search} groups={groups} items={items} />;
};

export const VirtualizedMenu = () => {
  const { items, groups, search } = useAccountMenu({
    accounts: defaultAccounts,
  });

  return <>{items && <AccountMenu search={search} groups={groups} items={items} isVirtualized={true} />}</>;
};

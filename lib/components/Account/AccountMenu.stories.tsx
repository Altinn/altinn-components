import type { Meta } from '@storybook/react-vite';
import { AccountMenu, type AccountMenuProps } from '..';
import { accountMenu, defaultAccounts, useAccountMenu } from '../../../examples';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';

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
  const isDesktop = useIsDesktop();
  const { items, groups, search } = useAccountMenu({
    accounts: defaultAccounts,
  });

  return (
    <>
      {items && (
        <AccountMenu
          search={search}
          groups={groups}
          items={items}
          menuItemsVirtual={{
            isVirtualized: true,
            scrollRefStyles: {
              maxHeight: isDesktop ? 'calc(100vh - 6rem)' : 'calc(100vh - 5rem)',
              paddingBottom: '0.5rem',
            },
          }}
        />
      )}
    </>
  );
};

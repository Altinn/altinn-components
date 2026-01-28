import type { Meta } from '@storybook/react-vite';
import { AccountMenu, type AccountMenuItemProps, type AccountMenuProps } from '..';
import { accountMenu, defaultAccounts, useAccountMenu } from '../../../examples';

const meta = {
  title: 'Account/AccountMenu',
  component: AccountMenu,
  tags: ['autodocs'],
  parameters: {},
  args: accountMenu as unknown as AccountMenuProps,
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

export const SingleCompany = () => {
  const { items, groups, search } = useAccountMenu({
    accounts: defaultAccounts,
    includeGroups: true,
  });

  const filteredItems = items
    ?.filter((item) => item.id === 'user' || item.id.startsWith('diaspora'))
    ?.map((item) => {
      return {
        ...item,
        controls: undefined,
      };
    });

  const firstCompany = filteredItems.find((item) => item.role === 'company');

  return (
    <AccountMenu
      search={search}
      groups={{
        ...groups,
        [firstCompany?.groupId || 'company']: {
          title: 'Virksomheter',
        },
      }}
      items={filteredItems}
    />
  );
};

export const TwoCompanies = () => {
  const { items, groups, search } = useAccountMenu({
    accounts: defaultAccounts,
    includeGroups: true,
  });

  const filteredItems = items
    ?.filter((item) => item.id === 'user' || item.id.startsWith('diaspora') || item.id.startsWith('sogndal'))
    ?.map((item) => {
      return {
        ...item,
        controls: undefined,
      };
    });

  const firstCompany = filteredItems.find((item) => item.role === 'company');

  return (
    <AccountMenu
      search={search}
      groups={{
        ...groups,
        [firstCompany?.groupId || 'company']: {
          title: 'Virksomheter',
        },
      }}
      items={filteredItems}
    />
  );
};

export const VirtualizedMenu = () => {
  const { items, groups, search } = useAccountMenu({
    accounts: defaultAccounts,
  });

  return <>{items && <AccountMenu search={search} groups={groups} items={items} virtualized={true} />}</>;
};

export const CustomFilter = () => {
  const { items, groups } = useAccountMenu({
    accounts: defaultAccounts,
  });

  const filterAccount = (item: AccountMenuItemProps, q: string) => {
    if (item?.name?.toLowerCase().includes(q)) {
      return true;
    }

    return false;
  };

  return (
    <>
      <AccountMenu
        search={{
          name: 's',
          placeholder: 'cusoasd',
        }}
        groups={groups}
        filterAccount={filterAccount as AccountMenuProps['filterAccount']}
        items={items}
        virtualized={true}
      />
    </>
  );
};

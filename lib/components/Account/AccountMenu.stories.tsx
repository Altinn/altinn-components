import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccountMenu, type AccountMenuProps, Heading, PageBase, Toolbar } from '..';
import { accountMenu, defaultAccounts, useAccountList, useAccountMenu } from '../../../examples';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';

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

export const VirtualizedMenu = () => {
  const isDesktop = useIsDesktop();
  const { items, groups } = useAccountList({
    accounts: defaultAccounts,
  });

  const menuItems = items?.map((item) => {
    return {
      ...item,
      collapsible: false,
      linkIcon: true,
    };
  }) as AccountMenuProps['items'];

  return (
    <PageBase>
      <Heading>Velg aktør før du går videre</Heading>
      {items && (
        <AccountMenu
          groups={groups}
          items={menuItems}
          menuItemsVirtual={{
            isVirtualized: true,
            scrollRefStyles: {
              maxHeight: isDesktop ? 'calc(100vh - 6rem)' : 'calc(100vh - 5rem)',
              paddingBottom: '0.5rem',
            },
          }}
        />
      )}
    </PageBase>
  );
};

export const WithToolbar = () => {
  const { toolbar, items, groups } = useAccountList({
    accounts: defaultAccounts,
  });

  const menuItems = items?.map((item) => {
    return {
      ...item,
      collapsible: false,
      linkIcon: true,
    };
  }) as AccountMenuProps['items'];

  return (
    <PageBase>
      <Heading>Velg aktør før du går videre</Heading>
      <Toolbar {...toolbar} />
      {items && <AccountMenu groups={groups} items={menuItems} />}
    </PageBase>
  );
};

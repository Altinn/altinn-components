import type { Meta } from '@storybook/react-vite';
import { type Account, type GlobalMenuProps, Header, type HeaderProps } from '../';
import { header, inboxMenu, useHeader } from '../../../examples';

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...header,
    search: {
      name: 'inbox-search',
      placeholder: 'Søk i Altinn',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

export const Login = (args: HeaderProps) => {
  const header = useHeader({ ...args, accountId: null });
  return <Header {...(header as HeaderProps)} />;
};

export const CurrentAccount = (args: HeaderProps) => {
  const header = useHeader({ ...args });
  return <Header {...(header as HeaderProps)} />;
};

export const CompanyAccount = (args: HeaderProps) => {
  const header = useHeader({ ...args });
  const currentAccount = header?.menu?.accountMenu?.items[1] as Account;
  return <Header {...(header as HeaderProps)} currentAccount={currentAccount} />;
};

export const SubmenuExpanded = (args: HeaderProps) => {
  const header = useHeader({ ...args });
  const menuItems = [
    {
      ...args.menu.items[0],
      items: inboxMenu.items.slice(1),
      expanded: true,
    },
    ...args.menu.items.slice(1, 3),
  ];

  const globalMenu = {
    ...header.menu,
    items: menuItems,
  } as GlobalMenuProps;

  return <Header {...header} menu={globalMenu as GlobalMenuProps} />;
};

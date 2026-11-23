import type { Meta, StoryObj } from '@storybook/react-vite';
import { desktopMenu, globalMenu, localeSwitcher, loggedOutMenu, loginMenu, mobileMenu } from '../../../examples';
import { globalMenuDesignReference } from '../../../examples/layout/globalMenuDesignReference';
import type { MenuItemProps, MenuProps } from '../Menu';
import { GlobalMenu, type GlobalMenuProps } from './GlobalMenu';

const meta = {
  title: 'Layout/GlobalMenu',
  component: GlobalMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    ...globalMenu,
  },
} satisfies Meta<typeof GlobalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop = (args: GlobalMenuProps) => {
  return <GlobalMenu {...args} />;
};

export const MobileMenu = (args: GlobalMenuProps) => {
  return <GlobalMenu {...args} menu={mobileMenu} />;
};

export const Login: Story = {
  args: {
    menu: loginMenu,
    logoutButton: undefined,
  },
};

export const DesignReference = () => {
  return <GlobalMenu {...globalMenuDesignReference} />;
};

/** Selects one item (top level or nested) by id and deselects the rest */
const selectItem = (menu: MenuProps, id: string): MenuProps => {
  const select = (items: MenuItemProps[] = []): MenuItemProps[] =>
    items.map((item) => ({
      ...item,
      selected: item.id === id,
      items: Array.isArray(item.items) ? select(item.items) : item.items,
    }));
  return { ...menu, items: select(menu.items) };
};

/** Logged in as a person (green), desktop. Inbox folders live in the sidebar, so only primary items are shown. */
export const LoggedInPersonDesktop: Story = {
  globals: { theme: 'person' },
  args: {
    menu: desktopMenu,
    localeSwitcher,
  },
};

/** Logged in as a person (green), mobile. The inbox is expanded with its folders, since there is no sidebar. */
export const LoggedInPersonMobile: Story = {
  globals: { theme: 'person' },
  args: {
    menu: mobileMenu,
    localeSwitcher,
  },
};

/** Logged in as a person (green), mobile. A folder in the inbox is selected. */
export const LoggedInPersonMobileSubItemSelected: Story = {
  globals: { theme: 'person' },
  args: {
    menu: selectItem(mobileMenu, 'sent'),
    localeSwitcher,
  },
};

/** Before login (grey). Same on desktop and mobile. */
export const LoggedOut: Story = {
  globals: { theme: 'neutral' },
  args: {
    menu: loggedOutMenu,
    logoutButton: undefined,
    localeSwitcher,
  },
};

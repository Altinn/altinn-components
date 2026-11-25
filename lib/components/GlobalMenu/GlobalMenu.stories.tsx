import type { Meta, StoryObj } from '@storybook/react-vite';
import { desktopMenu, globalMenu, localeSwitcher, loggedOutMenu, mobileMenu } from '../../../examples';
import type { MenuItemProps, MenuProps } from '../Menu';
import { GlobalMenu } from './GlobalMenu';

const meta = {
  title: 'Layout/GlobalMenu',
  component: GlobalMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Design reference for how the main menu should look across all Altinn 3 applications.',
      },
    },
  },
  args: {
    ...globalMenu,
  },
} satisfies Meta<typeof GlobalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

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

/** Desktop: inbox folders live in the sidebar, so only primary items are shown. A primary item is selected. */
export const Desktop: Story = {
  args: {
    menu: desktopMenu,
    localeSwitcher,
  },
};

/** Mobile: the inbox is expanded with its folders, since there is no sidebar. A folder is selected. */
export const Mobile: Story = {
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

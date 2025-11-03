import { InformationSquareIcon, LeaveIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { globalMenu, loginMenu, mobileMenu } from '../../../examples';
import type { MenuProps } from '../Menu';
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

export const InterimMenu = (args: GlobalMenuProps) => {
  const inboxMenuItem = args?.menu?.items?.find((item) => item.id === 'inbox');

  const items = [
    {
      ...inboxMenuItem,
      title: 'Innboks',
      badge: {
        label: 'Beta',
      },
    },
    {
      id: 'm2',
      icon: InformationSquareIcon,
      title: 'Om Innboks Beta',
    },
    {
      id: 'm2',
      icon: LeaveIcon,
      title: 'Avslutt beta',
    },
  ];

  return (
    <GlobalMenu
      {...args}
      menu={
        {
          ...args?.menu,
          items: items,
        } as MenuProps
      }
    />
  );
};

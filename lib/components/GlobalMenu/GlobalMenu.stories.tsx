import type { Meta, StoryObj } from '@storybook/react-vite';
import { globalMenu, loginMenu, mobileMenu } from '../../../examples';
import { globalMenuDesignReference } from '../../../examples/layout/globalMenuDesignReference';
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

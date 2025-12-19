import { MenuGridIcon, MenuHamburgerIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabMenu } from './TabMenu';

const meta = {
  title: 'MenuV2/TabMenu',
  component: TabMenu,
  parameters: {},
  decorators: [
    (Story, { args }) => {
      const style = {
        backgroundColor: args?.variant === 'tinted' ? 'var(--ds-color-background-tinted)' : '',
        padding: '.5em',
      };

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
  args: {
    variant: 'default',
    items: [
      {
        id: '1',
        icon: MenuGridIcon,
        title: 'Tab 1',
      },
      {
        id: '2',
        icon: MenuHamburgerIcon,
        title: 'Tab 2',
        selected: true,
      },
    ],
  },
} satisfies Meta<typeof TabMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const MediumTinted: Story = {
  args: {
    variant: 'tinted',
    size: 'md',
  },
};

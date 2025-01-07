import type { Meta, StoryObj } from '@storybook/react';
import { ActionFooter } from './ActionFooter';
import { ActionMenu, type ActionMenuProps } from './ActionMenu';

const menu: ActionMenuProps = {
  items: [
    {
      id: '1',
      icon: 'arrow-redo',
      title: 'Del og gi tilgang',
    },
    {
      id: '2',
      icon: 'eye',
      title: 'Marker som lest',
    },
    {
      id: '3',
      icon: 'archive',
      title: 'Flytt til arkiv',
    },
    {
      id: '4',
      icon: 'trash',
      title: 'Flytt til papirkurv',
    },
  ],
};

const meta = {
  title: 'LayoutAction/ActionFooter',
  component: ActionFooter,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ActionFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  args: {
    children: <ActionMenu {...menu} />,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { ActionMenu } from './ActionMenu';

const meta = {
  title: 'LayoutAction/ActionMenu',
  component: ActionMenu,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    theme: 'global-dark',
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
  },
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

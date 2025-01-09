import type { Meta, StoryObj } from '@storybook/react';
import { PageMenu } from './PageMenu';

const meta = {
  title: 'Page/PageMenu',
  component: PageMenu,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
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
} satisfies Meta<typeof PageMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BulkActionbar: Story = {
  args: {
    color: 'accent',
    theme: 'base',
  },
};

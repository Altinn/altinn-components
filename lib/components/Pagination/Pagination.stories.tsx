import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta = {
  title: 'Pagination/Pagination',
  component: Pagination,
  parameters: {},
  args: {
    'aria-label': 'Velg side',
    prev: {
      title: 'Forrige',
      'aria-label': 'Forrige',
    },
    next: {
      title: 'Neste',
      'aria-label': 'Neste',
    },
    items: [
      {
        id: '1',
        title: '1',
        'aria-label': 'Side 1',
      },
      {
        id: '2',
        title: '2',
        'aria-label': 'Side 2',
        selected: true,
      },
      {
        hidden: true,
      },
      {
        id: '9',
        'aria-label': 'Side 9',
        title: '9',
      },
      {
        id: '10',
        'aria-label': 'Side 10',
        title: '10',
      },
    ],
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Mini: Story = {
  args: {
    size: 'mini',
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta = {
  title: 'Pagination/Pagination',
  component: Pagination,
  parameters: {},
  args: {
    'aria-label': 'Velg side',
    prev: {
      label: 'Forrige',
      'aria-label': 'Forrige',
    },
    next: {
      label: 'Neste',
      'aria-label': 'Neste',
    },
    items: [
      {
        id: '1',
        label: '1',
        'aria-label': 'Side 1',
      },
      {
        id: '2',
        label: '2',
        'aria-label': 'Side 2',
        selected: true,
      },
      {
        hidden: true,
      },
      {
        id: '9',
        'aria-label': 'Side 9',
        label: '9',
      },
      {
        id: '10',
        'aria-label': 'Side 10',
        label: '10',
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

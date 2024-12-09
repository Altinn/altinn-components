import type { Meta, StoryObj } from '@storybook/react';

import { HistoryItemBase } from './HistoryItemBase';

const meta = {
  title: 'History/HistoryItemBase',
  component: HistoryItemBase,
  tags: ['autodocs'],
  parameters: {},
  args: {
    createdAt: '2024-09-22 13:34',
    createdAtLabel: '22. september 2024 kl 13.34',
    children: 'Children',
  },
} satisfies Meta<typeof HistoryItemBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Person: Story = {
  args: {
    createdBy: {
      type: 'person',
      name: 'Eirik Horneland',
    },
  },
};

export const Company: Story = {
  args: {
    createdBy: {
      type: 'company',
      name: 'Bergen Bar',
    },
  },
};

export const Logo: Story = {
  args: {
    createdBy: {
      type: 'company',
      name: 'Skatteetaten',
      imageUrl:
        'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
    },
  },
};

export const Icon: Story = {
  args: {
    icon: 'pencil-line',
  },
};

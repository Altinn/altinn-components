import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HistoryItem } from './HistoryItem';

const meta = {
  title: 'History/HistoryItem',
  component: HistoryItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    createdAt: '2024-09-22 13:34',
    createdAtLabel: '22. september 2024 kl 13.34',
    createdBy: {
      name: 'Eirik Horneland',
    },
    summary: 'Brann slo Glimt 4-1 på Stadion.',
  },
} satisfies Meta<typeof HistoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Attachments: Story = {
  args: {
    attachments: {
      title: '6 vedlegg',
      items: [
        {
          href: '#',
          label: '1-0 Castro.pdf',
        },
        {
          href: '#',
          label: '2-0 Kornvig.pdf',
        },
        {
          href: '#',
          label: '3-0 Kartum.pdf',
        },
        {
          href: '#',
          label: '3-1 Zinkernagel.pdf',
        },
        {
          href: '#',
          label: '4-1 Castro.pdf',
        },
      ],
    },
  },
};

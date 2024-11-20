import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HistoryList } from './HistoryList';

const meta = {
  title: 'History/HistoryList',
  component: HistoryList,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
      {
        createdAt: '2024-09-22 13:34',
        createdAtLabel: '22. september 2024 kl 13.34',
        createdBy: {
          name: 'Eirik Horneland',
        },
        summary: 'Brann slo Glimt 4-1 på Stadion.',
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
      {
        createdAt: '2004-09-09 13:34',
        createdAtLabel: '22. september 2024 kl 13.34',
        createdBy: {
          name: 'Eirik Horneland',
        },
        summary: 'Brann vant 1-0 i Haugesund.',
        attachments: {
          title: '1 vedlegg',
          items: [
            {
              href: '#',
              label: 'Målet til Heggebø.pdf',
            },
          ],
        },
      },
    ],
  },
} satisfies Meta<typeof HistoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

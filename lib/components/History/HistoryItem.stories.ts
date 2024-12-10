import type { Meta, StoryObj } from '@storybook/react';
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

export const Transmissions: Story = {
  args: {
    size: 'sm',
    summary: 'Leveransen er godkjent',
    transmissions: {
      title: '2 forsendelser',
      items: [
        {
          sender: {
            type: 'company',
            name: 'Skatteetaten',
            imageUrl:
              'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
          },
          title: 'Leveransen er godkjent',
          badge: {
            label: 'Godkjent',
          },
          attachments: {
            title: '1 vedlegg',
            items: [
              {
                href: '#',
                label: 'Godkjent leveranse.pdf',
              },
            ],
          },
        },
        {
          title: 'Tredjepartsopplysninger ble levert',
          sender: {
            type: 'person',
            name: 'Hassan El Fakiri',
          },
          attachments: {
            title: '2 vedlegg',
            items: [
              {
                href: '#',
                label: '1-0 Castro.pdf',
              },
              {
                href: '#',
                label: '2-0 Kornvig.pdf',
              },
            ],
          },
        },
      ],
    },
  },
};

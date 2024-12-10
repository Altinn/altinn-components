import type { Meta, StoryObj } from '@storybook/react';
import { TransmissionItem } from './TransmissionItem';

const meta = {
  title: 'Transmission/TransmissionItem',
  component: TransmissionItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    createdAt: '2024-09-22 13:34',
    createdAtLabel: '22. september 2024 kl 13.34',
    sender: {
      type: 'person',
      name: 'Eirik Horneland',
    },
    title: 'Leveransen er godkjent, men inneholder feil',
    description: '22.09.2024 kl 13.34',
    badge: {
      label: 'Godkjent',
    },
    summary:
      'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding og feilliste under',
  },
} satisfies Meta<typeof TransmissionItem>;

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

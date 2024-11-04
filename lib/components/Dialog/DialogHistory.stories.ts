import type { Meta, StoryObj } from '@storybook/react';
import { DialogHistory } from './DialogHistory';

const meta = {
  title: 'Dialog/Sections/DialogHistory',
  component: DialogHistory,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
      {
        createdBy: {
          name: 'Kari Nordmann',
        },
        createdAt: '2023-03-11 08:00',
        summary: 'Skattemeldingen ble levert.',
        attachments: [
          {
            label: 'Kvittering på innsendt skattemelding.pdf',
          },
        ],
      },
      {
        createdBy: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/Skatteetaten.636ef817.png',
        },
        createdAt: '2023-03-11 08:00',
        summary: 'Vi har mottatt nye opplysninger og oppdatert skattemeldingen din.',
        attachments: [
          {
            label: 'Nye opplysninger til Skattemeldingen.pdf',
          },
        ],
      },
      {
        createdBy: {
          name: 'Kari Nordmann',
        },
        createdAt: '2023-03-11 08:00',
        summary: 'Skattemeldingen ble levert.',
        attachments: [
          {
            label: 'Kvittering på innsendt skattemelding.pdf',
          },
        ],
      },
      {
        createdBy: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/Skatteetaten.636ef817.png',
        },
        createdAt: '2023-03-11 08:00',
        summary: 'Skattemeldingen din for 2022 er tilgjengelig.',
      },
    ],
  },
} satisfies Meta<typeof DialogHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

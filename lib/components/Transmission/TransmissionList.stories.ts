import type { Meta, StoryObj } from '@storybook/react';

import { TransmissionList } from './TransmissionList';

const meta = {
  title: 'Transmission/TransmissionList',
  component: TransmissionList,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
      {
        createdAt: '2024-09-22 13:34',
        createdAtLabel: '22. september 2024 kl 13.34',
        badge: {
          label: 'Godkjent, med feil',
        },
        sender: {
          name: 'Skatteetaten',
          type: 'company',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        title: 'Leveransen er godkjent, men inneholder feil',
        description: '22. sept 11.10',
        summary:
          'Leveransen er godkjent, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding og feilliste under.',
        attachments: {
          title: '6 vedlegg',
          items: [
            {
              href: '#',
              label: 'Feilliste.pdf',
            },
          ],
        },
      },
      {
        createdAt: '2004-09-09 11:05',
        createdAtLabel: '22. september 2024 kl 11.05',
        sender: {
          name: 'Eirik Horneland',
        },
        badge: {
          label: 'Sendt inn',
        },
        title: 'Tredjepartsopplysninger ble sendt inn',
        description: '22. sept 11.05',
        summary: 'Dere får tilbakemelding om en kort stund.',
        attachments: {
          title: '1 vedlegg',
          items: [
            {
              href: '#',
              label: 'Innsendte opplysninger.pdf',
            },
          ],
        },
      },
    ],
  },
} satisfies Meta<typeof TransmissionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

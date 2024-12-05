import type { Meta, StoryObj } from '@storybook/react';
import { TransmissionSection } from './TransmissionSection';

const meta = {
  title: 'Transmission/TransmissionSection',
  component: TransmissionSection,
  tags: ['autodocs'],
  parameters: {},
  args: {
    title: '6 forsendelser',
    items: [
      {
        createdAt: '1999-01-01',
        createdAtLabel: 'Skatteetaten, 1. mars 2024',
        sender: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        badge: {
          label: 'Godkjent, med feil',
        },
        title: 'Leveransen er godkjent, men inneholder feil',
        summary:
          'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        attachments: {
          title: '2 vedlegg',
          items: [
            {
              label: 'Dokument 1.pdf',
              href: '',
            },
            {
              label: 'Dokument 2.pdf',
              href: '',
            },
          ],
        },
      },
      {
        sender: {
          name: 'Per Olav Olsen',
        },
        title: 'Tredjepartsopplysninger ble levert',
        createdAtLabel: '1. mars 2024',
        summary:
          'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
      },
      {
        createdAt: '1999-01-01',
        createdAtLabel: 'Skatteetaten, 1. mars 2024',
        sender: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        badge: {
          label: 'Godkjent',
        },
        title: 'Leveransen er godkjent',
        summary:
          'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        attachments: {
          title: '2 vedlegg',
          items: [
            {
              label: 'Dokument 1.pdf',
              href: '',
            },
            {
              label: 'Dokument 2.pdf',
              href: '',
            },
          ],
        },
      },
      {
        sender: {
          name: 'Kari Susanne Pettersen',
        },
        title: 'Tredjepartsopplysninger ble levert',
        createdAtLabel: '1. mars 2024',
        summary:
          'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
      },

      {
        createdAt: '1999-01-01',
        createdAtLabel: 'Skatteetaten, 1. mars 2024',
        sender: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        badge: {
          label: 'Avvist',
        },
        title: 'Leveransen er avvist',
        summary:
          'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        attachments: {
          title: '2 vedlegg',
          items: [
            {
              label: 'Dokument 1.pdf',
              href: '',
            },
            {
              label: 'Dokument 2.pdf',
              href: '',
            },
          ],
        },
      },
      {
        sender: {
          name: 'Siren Søftebø',
        },
        title: 'Tredjepartsopplysninger ble levert',
        createdAtLabel: '1. mars 2024',
        summary:
          'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
      },
    ],
  },
} satisfies Meta<typeof TransmissionSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithSearch = {
  args: {
    toolbar: {
      search: {
        label: 'Søk i forsendelser',
        placeholder: 'Søk i forsendelser',
      },
    },
  },
};

export const WithFilters = {
  args: {
    toolbar: {
      ...WithSearch.args.toolbar,
      filters: [
        {
          name: 'type',
          label: 'Alle typer',
          optionType: 'checkbox',
          options: [
            {
              groupId: '1',
              label: 'Innsending',
              value: 'submission',
            },
            {
              groupId: '1',
              label: 'Rettelse',
              value: 'correction',
            },
            {
              groupId: '2',
              label: 'Godkjent',
              value: 'acceptance',
            },
            {
              groupId: '2',
              label: 'Avvist',
              value: 'rejection',
            },
            {
              groupId: '3',
              label: 'Avgjørelse',
              value: 'decisision',
            },
            {
              groupId: '3',
              label: 'Forespørsel',
              value: 'request',
            },
            {
              groupId: '4',
              label: 'Varsel',
              value: 'alert',
            },
          ],
        },
      ],
    },
  },
};

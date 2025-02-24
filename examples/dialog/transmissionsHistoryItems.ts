import type { ActivityItemProps } from '../../lib';
import { skatt } from '../avatar';

export const transmissionsHistoryItems: ActivityItemProps[] = [
  {
    createdBy: skatt,
    createdAt: '2023-10-15 08:00',
    createdAtLabel: '15. oktober 2023 kl 08.00',
    description: 'Du må levere tredjepartsopplysninger for boligselskap.',
    attachments: {
      items: [
        {
          href: '#',
          label: 'Rapportering av tredjepartsopplysninger for boligselskap.pdf',
        },
      ],
    },
  },
  {
    createdBy: skatt,
    createdAt: '2024-01-02 08:00',
    createdAtLabel: '2. januar 2024 kl 08.00',
    description: 'Du kan nå levere tredjepartsopplysninger.',
  },
  {
    createdAt: '2024-01-05 09:10',
    createdAtLabel: '5. januar 2024 kl 09.10',
    description: 'Leveransen er godkjent, men inneholder feil',
    transmissions: {
      title: '2 forsendelser',
      items: [
        {
          type: {
            value: 'submission',
            label: 'Sendt',
          },
          sender: {
            name: 'Per Olav Olsen',
          },
          title: 'Tredjepartsopplysninger ble levert',
          createdAt: '2024-01-05 07:30',
          createdAtLabel: '5. januar 2024 kl 07.30',
          description:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        },
        {
          type: {
            value: 'acceptance',
            label: 'Godkjent',
          },
          createdAt: '2024-01-05 09:10',
          createdAtLabel: '5. januar 2024 kl 09.10',
          sender: skatt,
          title: 'Leveransen er godkjent, men inneholder feil',
          description:
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
      ],
    },
  },
  {
    createdAt: '2024-01-09 12:22',
    createdAtLabel: '9. januar 2024 kl 12.22',
    description: 'Leveransen er godkjent',
    transmissions: {
      title: '2 forsendelser',
      items: [
        {
          type: {
            value: 'submission',
            label: 'Sendt',
          },
          sender: {
            name: 'Kari Susanne Pettersen',
          },
          title: 'Tredjepartsopplysninger ble levert',
          createdAt: '2024-01-09 10:45',
          createdAtLabel: '9. januar 2024 kl 10.45',
          description:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        },
        {
          type: {
            value: 'acceptance',
            label: 'Godkjent',
          },
          createdAt: '2024-01-09 12:22',
          createdAtLabel: '9. januar 2024 kl 12.22',
          sender: skatt,
          title: 'Leveransen er godkjent',
          description:
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
      ],
    },
  },
  {
    createdAt: '2024-01-15 14:45',
    createdAtLabel: '15. januar 2024 kl 14.45',
    description: 'Leveransen er avvist',
    transmissions: {
      title: '2 forsendelser',
      items: [
        {
          type: {
            value: 'submission',
            label: 'Sendt',
          },
          sender: {
            name: 'Siren Søftebø',
          },
          title: 'Tredjepartsopplysninger ble levert',
          createdAt: '2024-01-14 13:25',
          createdAtLabel: '15. januar 2024 kl 13.25',
          description:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        },
        {
          type: {
            value: 'rejection',
            label: 'Avvist',
          },
          createdAt: '2024-01-15 14:45',
          createdAtLabel: '15. januar 2024 kl 14.45',
          sender: skatt,
          title: 'Leveransen er avvist',
          description:
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
      ],
    },
  },
  {
    createdBy: skatt,
    createdAt: '2024-01-31 08:00',
    createdAtLabel: '31. januar 2024 kl 08.00',
    description: 'Skjemaet er lukket for ordinær rapportering. Du kan gjøre korreksjoner tom. 15. februar.',
  },
  {
    createdAt: '2024-01-21 13:45',
    createdAtLabel: '21. januar 2024 kl 13.45',
    description: 'Tredjepartsopplysninger ble levert',
    transmissions: {
      title: '1 forsendelse',
      items: [
        {
          type: {
            value: 'correction',
            label: 'Rettelse',
          },
          sender: {
            name: 'Siren Søftebø',
          },
          title: 'Tredjepartsopplysninger ble levert',
          createdAt: '2024-01-14 13:25',
          createdAtLabel: '15. januar 2024 kl 13.25',
          description:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        },
      ],
    },
  },
];

import type { TransmissionItemProps } from '../../../../components';
import { skatt } from '../avatar';

export const transmissionList: TransmissionItemProps[] = [
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
    summary:
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
    summary:
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
    summary:
      'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
  },
];

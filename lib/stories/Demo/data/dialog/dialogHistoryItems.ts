import type { DialogHistoryItemProps } from '../../../../components';
import { skatt } from '../avatar';

export const dialogHistoryItems: DialogHistoryItemProps[] = [
  {
    createdAt: '',
    createdAtLabel: '15. februar 2024 kl. 08.45',
    createdBy: skatt,
    summary: 'Skjemaet er lukket for rapportering og korreksjoner.',
  },
  {
    createdAt: '',
    createdAtLabel: '2. januar 2024 kl 08.00',
    createdBy: skatt,
    summary: 'Du kan nå levere tredjepartsopplysninger.',
  },
  {
    createdAt: '',
    createdAtLabel: '15. oktober 2023 kl 08.00',
    createdBy: skatt,
    summary: 'Du må levere tredjepartsopplysninger for boligselskap.',
    attachments: {
      title: '1 vedlegg',
      items: [
        {
          href: '#',
          label: 'Rapportering av tredjepartsopplysninger for boligselskap.pdf',
        },
      ],
    },
  },
];

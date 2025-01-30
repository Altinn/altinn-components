import type { DialogListItemProps } from '../../lib';
import { skatt } from '../avatar';

export const dialogListItems: DialogListItemProps[] = [
  {
    groupId: '2023-02',
    updatedAt: '2023-02-15 08:45',
    updatedAtLabel: '15. februar 2023 kl. 08.45',
    sender: skatt,
    title: 'Tredjepartsopplysninger for boligselskap',
    summary: 'Skjemaet er lukket for rapportering og korreksjoner.',
  },
  {
    groupId: '2023-01',
    updatedAt: '2023-01-02 08:00',
    updatedAtLabel: '2. januar 2023 kl 08.00',
    sender: skatt,
    title: 'Tredjepartsopplysninger for boligselskap',
    summary: 'Du kan nå levere tredjepartsopplysninger.',
  },
  {
    groupId: '2023-10',
    updatedAt: '2023-10-15 08:00',
    updatedAtLabel: '15. oktober 2023 kl 08.00',
    sender: skatt,
    title: 'Tredjepartsopplysninger for boligselskap',
    summary: 'Du må levere tredjepartsopplysninger for boligselskap.',
    attachmentsCount: 1,
  },
];

import type { DialogListItemProps } from '../../../components';
import { skatt } from './avatar';

export const dialogs: DialogListItemProps[] = [
  {
    id: '1',
    groupId: '2023-02',
    updatedAt: '2023-02-15 08:45',
    updatedAtLabel: '15. februar 2023 kl. 08.45',
    sender: skatt,
    title: 'Dialog 1',
    summary: 'Skjemaet er lukket for rapportering og korreksjoner.',
    status: {
      value: 'in-progress',
      label: 'Under arbeid',
    },
  },
  {
    id: '2',
    groupId: '2023-01',
    updatedAt: '2023-01-02 08:00',
    updatedAtLabel: '2. januar 2023 kl 08.00',
    sender: skatt,
    title: 'Dialog 2',
    summary: 'Du kan nå levere tredjepartsopplysninger.',
    status: {
      value: 'completed',
      label: 'Avsluttet',
    },
  },
  {
    id: '3',
    groupId: '2023-10',
    updatedAt: '2023-10-15 08:00',
    updatedAtLabel: '15. oktober 2023 kl 08.00',
    sender: skatt,
    title: 'Dialog 3',
    summary: 'Du må levere tredjepartsopplysninger for boligselskap.',
    attachmentsCount: 1,
    status: {
      value: 'requires-attention',
      label: 'Krever handling',
    },
  },
];

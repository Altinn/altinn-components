import type { DialogListItemProps } from '../../lib';
import { skatt } from '../avatar';

export const dialogListItemsDate: DialogListItemProps[] = [
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
    groupId: '2024-05',
    updatedAt: '2024-05-02 08:00',
    updatedAtLabel: '2. may 2024 kl 08.00',
    sender: skatt,
    title: 'Tredjepartsopplysninger for boligselskap',
    summary: 'Du kan nå levere tredjepartsopplysninger.',
  },
  {
    groupId: '2025-05',
    updatedAt: '2025-05-02 08:00',
    updatedAtLabel: '2. may 2025 kl 08.00',
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

export const dialogListItemsRoute: DialogListItemProps[] = [
  {
    groupId: 'draft',
    updatedAt: '2023-02-15 08:45',
    updatedAtLabel: '15. februar 2023 kl. 08.45',
    sender: skatt,
    title: 'Utkast - Tredjepartsopplysninger for boligselskap',
    summary: 'Skjemaet er lukket for rapportering og korreksjoner.',
  },
  {
    groupId: 'bin',
    updatedAt: '2023-01-02 08:00',
    updatedAtLabel: '2. januar 2023 kl 08.00',
    sender: skatt,
    title: 'Papirkurv - Tredjepartsopplysninger for boligselskap',
    summary: 'Du kan nå levere tredjepartsopplysninger.',
  },
  {
    groupId: 'archive',
    updatedAt: '2024-05-02 08:00',
    updatedAtLabel: '2. may 2024 kl 08.00',
    sender: skatt,
    title: 'Arkiv - Tredjepartsopplysninger for boligselskap',
    summary: 'Du kan nå levere tredjepartsopplysninger.',
  },
  {
    groupId: 'inbox',
    updatedAt: '2025-05-02 08:00',
    updatedAtLabel: '2. may 2025 kl 08.00',
    sender: skatt,
    title: 'Innbox - Tredjepartsopplysninger for boligselskap',
    summary: 'Du kan nå levere tredjepartsopplysninger.',
  },
  {
    groupId: 'sent',
    updatedAt: '2023-10-15 08:00',
    updatedAtLabel: '15. oktober 2023 kl 08.00',
    sender: skatt,
    title: 'Sendt - Tredjepartsopplysninger for boligselskap',
    summary: 'Du må levere tredjepartsopplysninger for boligselskap.',
    attachmentsCount: 1,
  },
];

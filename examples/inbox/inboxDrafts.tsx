import type { DialogListProps } from '../../lib';
import { enova, mattilsynet } from '../avatar';
export const inboxDrafts: DialogListProps = {
  groups: {
    drafts: { title: '2 utkast' },
  },
  items: [
    {
      id: 'enova-draft',
      groupId: 'drafts',
      title: 'Støtte til fjernvarme',
      status: { value: 'draft', label: 'Utkast' },
      updatedAt: '2025-03-07T23:27:37.384Z',
      updatedAtLabel: 'Anna Aahjem, 8. mars 2025 kl. 00.27',
      sender: enova,
    },
    {
      id: 'import-draft',
      groupId: 'drafts',
      title: 'Dispensasjon for import av kjæledyr',
      status: { value: 'draft', label: 'Utkast' },
      updatedAt: '2024-10-18T09:40:00.000Z',
      updatedAtLabel: 'Felix Horn Myhre, 18. oktober 2024 kl. 11.40',
      sender: mattilsynet,
    },
  ],
};

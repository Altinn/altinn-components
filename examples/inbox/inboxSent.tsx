import type { DialogListProps } from '../../lib';
import { enova, mattilsynet } from '../avatar';
export const inboxSent: DialogListProps = {
  groups: {
    '01': { title: '2025' },
    '02': { title: '2024' },
  },
  items: [
    {
      id: 'sent-1',
      groupId: '01',
      title: 'Støtte til fjernvarme',
      updatedAt: '2025-03-07T23:27:37.384Z',
      updatedAtLabel: '8. mars 2025 kl. 00.27',
      sender: enova,
    },
    {
      id: 'sent-2',
      groupId: '01',
      title: 'Melding om elulykke',
      updatedAt: '2025-02-07T22:27:37.384Z',
      updatedAtLabel: '22. februar 2025 kl. 22.27',
      status: {
        value: 'requires-attention',
        label: 'Krever handling',
      },
      sender: enova,
    },
    {
      id: 'import-draft',
      groupId: '02',
      title: 'Dispensasjon for import av kjæledyr',
      updatedAt: '2024-10-18T09:40:00.000Z',
      updatedAtLabel: '18. oktober 2024 kl. 11.40',
      sender: mattilsynet,
    },
  ],
};

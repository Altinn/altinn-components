import type { DialogListProps } from '../../lib';
import { enova } from '../avatar';
export const inboxSearchResults: DialogListProps = {
  groups: {
    inbox: { title: '1 treff i innboks' },
    drafts: { title: '1 treff i utkast' },
    sent: { title: '1 treff i sendt' },
    archive: { title: '0 treff i arkivert' },
    trash: { title: '0 treff i papirkurv' },
  },
  items: [
    {
      id: 'enova-progress',
      groupId: 'inbox',
      as: 'a',
      title: 'Støtte til energitiltak',
      status: { value: 'in-progress', label: 'Under arbeid' },
      summary: 'Søknad er sendt til behandling. Forventet behandlingstid: 2 uker.',
      updatedAt: '2025-03-07T23:28:37.908Z',
      updatedAtLabel: '8. mars 2025 kl. 00.28',
      sender: enova,
      dueAt: undefined,
      dueAtLabel: undefined,
    },
    {
      id: '6edd84aa-65ab-46c4-a186-7e423867f330',
      groupId: 'drafts',
      title: 'Støtte til fjernvarme',
      updatedAt: '2025-03-13T11:28:37.907Z',
      updatedAtLabel: '13. mars 2025 kl. 12.28',
      sender: enova,
      dueAt: undefined,
      dueAtLabel: undefined,
      badge: { label: 'Utkast' },
    },
    {
      id: 'enova-sent',
      groupId: 'sent',
      title: 'Melding om elulykke',
      updatedAt: '2025-03-09T18:28:37.908Z',
      updatedAtLabel: '9. mars 2025 kl. 19.28',
      sender: enova,
      dueAt: undefined,
      dueAtLabel: undefined,
      badge: { label: 'Sendt' },
    },
  ],
};

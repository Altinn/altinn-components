import type { DialogActivityProps } from '../../lib';
import { skatt } from '../avatar';

export const dialogActivityLogItems: DialogActivityProps[] = [
  {
    createdAt: '2023-03-11 08:00',
    createdAtLabel: '11. mars 2023 kl 08.00',
    description: 'Dialogen ble opprettet.',
  },
  {
    size: 'md',
    type: 'information',
    createdBy: skatt,
    createdAt: '2023-03-11 08:00',
    createdAtLabel: '11. mars 2023 kl 08.00',
    description: 'Skattemeldingen din er tilgjengelig.',
  },
  {
    createdAt: '2023-03-11 08:05',
    createdAtLabel: '11. mars 2023 kl 08.05',
    description: 'Varsling ble sendt til deg, Aune Heggebø og Felix Horn Myhre.',
  },
  {
    transmissions: [
      {
        id: '2',
        sender: skatt,
        createdAt: '2023-03-12 14:45',
        createdAtLabel: '12. mars 2023 kl 14.40',
        title: 'Tilbakemelding på tredjepartsopplysninger.',
        badge: {
          theme: 'surface-active',
          color: 'company',
          label: 'Godkjent',
        },
      },
    ],
  },
  {
    createdAt: '2023-03-11 09:05',
    createdAtLabel: '11. mars 2023 kl 09.05',
    description: 'Dialogen ble åpnet av Felix Horn Myhre.',
  },
  {
    createdAt: '2023-03-12 09:15',
    createdAtLabel: '12. mars 2023 kl 09.15',
    description: 'Dialogen ble åpnet av deg.',
  },
  {
    size: 'md',
    type: 'information',
    createdBy: {
      name: 'Aune Heggebø',
    },
    createdAt: '2023-03-12 14:40',
    createdAtLabel: '12. mars 2023 kl 14.40',
    description: 'Skattemeldingen ble levert.',
  },
  {
    createdAt: '2023-03-12 11:22',
    createdAtLabel: '12. mars 2023 kl 11.22',
    description: 'Dialogen ble åpnet av Aune Heggebø.',
  },
  {
    createdAt: '2023-03-12 14:35',
    createdAtLabel: '12. mars 2023 kl 14.35',
    description: 'Dialogen ble send til innsending.',
  },
  {
    transmissions: [
      {
        id: '2',
        sender: {
          name: 'Mette Saltnes',
        },
        createdAt: '2023-03-12 14:45',
        createdAtLabel: '12. mars 2023 kl 14.40',
        title: 'Innsending av tredjepartsopplysninger',
        badge: {},
      },
    ],
  },
  {
    type: 'information',
    createdBy: skatt,
    createdAt: '2023-04-09 08:00',
    createdAtLabel: '9. april 2023 kl 08.00',
    description: 'Vi har mottatt nye opplysninger og oppdatert Skattemeldingen din.',
  },
  {
    createdAt: '2023-03-11 08:05',
    createdAtLabel: '11. mars 2023 kl 08.05',
    description: 'Varsling ble sendt til deg, Aune Heggebø og Felix Horn Myhre.',
  },
  {
    createdAt: '2023-03-11 09:15',
    createdAtLabel: '11. mars 2023 kl 09.15',
    description: 'Dialogen ble åpnet av deg.',
  },
  {
    createdAt: '2023-03-11 08:00',
    createdAtLabel: '11. mars 2023 kl 08.00',
    description: 'Dialogen ble åpnet av Aune Heggebø.',
  },
  {
    type: 'information',
    createdBy: {
      name: 'Aune Heggebø',
    },
    createdAt: '2023-07-02 12:45',
    createdAtLabel: '2. juli 2023 kl 12.45',
    description: 'Skattemeldingen ble levert.',
  },
  {
    createdAt: '2023-07-12 12:45',
    createdAtLabel: '2. juli 2023 kl 12.50',
    description: 'Dialogen ble avsluttet.',
  },
];

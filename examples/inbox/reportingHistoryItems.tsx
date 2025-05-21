import type { DialogActivityProps } from '../../lib';
import { ssb as sender } from '../avatar';

export const reportingHistoryItems: DialogActivityProps[] = [
  {
    createdBy: sender,
    createdAt: '',
    createdAtLabel: '24. november 2024 kl 15.30',
    description: 'Du må levere bedriftsdata innen 1. januar.',
  },
  {
    createdAt: '',
    createdAtLabel: '27. november 2024 kl 10.24',
    description: 'Bedriftsdata ble levert.',
    transmissions: [
      {
        id: '1',
        createdAtLabel: '27. november 2024 kl 10.24',
        sender: {
          type: 'person',
          name: 'Ola Nordmann',
        },
        title: 'Bedriftsdata',
        description: 'Bedriftsdata er levert.',
        attachments: {
          items: [
            {
              label: 'Bedriftsdata.pdf',
              href: '',
            },
          ],
        },
      },
    ],
  },
  {
    createdBy: sender,
    createdAt: '',
    createdAtLabel: '29. november 2024 kl 10.24',
    description: 'Saken er sendt til manuell behandling.',
  },
];

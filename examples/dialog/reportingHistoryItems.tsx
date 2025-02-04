import type { ActivityItemProps } from '../../lib';
import { ssb as sender } from '../avatar';

export const reportingHistoryItems: ActivityItemProps[] = [
  {
    createdBy: sender,
    createdAt: '',
    createdAtLabel: '24. november 2024 kl 15.30',
    description: 'Du må levere bedriftsdata innen 1. januar.',
    attachments: {
      title: '1 vedlegg',
      items: [
        {
          label: 'Vedtak om innlevering av bedriftsdata.pdf',
          href: '',
        },
      ],
    },
  },
  {
    createdAt: '',
    createdAtLabel: '27. november 2024 kl 10.24',
    description: 'Bedriftsdata ble levert.',
    transmissions: {
      title: '1 forsendelse',
      items: [
        {
          createdAtLabel: '27. november 2024 kl 10.24',
          sender: {
            type: 'person',
            name: 'Ola Nordmann',
          },
          title: 'Bedriftsdata',
          description: 'Bedriftsdata er levert.',
          attachments: {
            title: '1 vedlegg',
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
  },
  {
    createdBy: sender,
    createdAt: '',
    createdAtLabel: '29. november 2024 kl 10.24',
    description: 'Saken er sendt til manuell behandling.',
  },
];

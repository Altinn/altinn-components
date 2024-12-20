import type { DialogHistoryItemProps } from '../../lib';
import { ssb as sender } from '../avatar';

export const reportingHistoryItems: DialogHistoryItemProps[] = [
  {
    createdBy: sender,
    createdAt: '',
    createdAtLabel: '24. november 2024 kl 15.30',
    summary: 'Du må levere bedriftsdata innen 1. januar.',
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
    summary: 'Bedriftsdata ble levert.',
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
          summary: 'Bedriftsdata er levert.',
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
    summary: 'Saken er sendt til manuell behandling.',
  },
];

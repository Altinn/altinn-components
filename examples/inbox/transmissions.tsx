import type { DialogHistoryItemProps } from '../../lib';

export const transmissions: DialogHistoryItemProps[] = [
  {
    id: 't1',
    variant: 'transmission',
    type: 'submission',
    byline: '13. mars 2024 kl. 08.00',
    sender: { type: 'person', name: 'Mia Hundvin' },
    createdAt: '2024-03-13T07:00:00.000Z',
    createdAtLabel: '13. mars 2024 kl. 08.00',
    title: 'Bedriftsdata er sendt inn',
    summary: undefined,
    attachments: {
      items: [{ label: 'Kvittering på innsending.pdf', href: '#-0' }],
    },
  },
  {
    id: 't2',
    byline: '14. mars 2024 kl. 08.05',
    variant: 'transmission',
    type: 'rejection',
    sender: {
      type: 'company',
      name: 'Statistisk sentralbyrå',
      imageUrl:
        'https://cdn.sanity.io/images/z3it2oa7/production/610b0696bb3c942b0493841b348780535b035275-44x44.png?w=96',
    },
    createdAt: '2024-03-14T07:05:00.000Z',
    createdAtLabel: '14. mars 2024 kl. 08.05',
    title: 'Bedriftsdata er avvist',
    summary: 'Rapporteringen av bedriftsdata er avvist.',
    badge: {
      color: 'error',
      label: 'Avvist',
    },
    children: (
      <>
        <h3>Ting du må rette på</h3>
        <ul>
          <li>Bruke riktig navn</li>
          <li>Ikke lyve om alderen din</li>
        </ul>
      </>
    ),
    attachments: {
      items: [
        {
          label: 'Bedriftsdata – godkjent innrapportering.pdf',
          href: '#-0',
        },
      ],
    },
  },
  {
    id: 't3',
    variant: 'transmission',
    byline: '16. mars 2024 kl. 08.30',
    sender: { type: 'person', name: 'Knut Hamsun' },
    createdAt: '2024-03-16T07:30:00.000Z',
    createdAtLabel: '16. mars 2024 kl. 08.30',
    title: 'Korrigerte bedriftsdata er sendt inn.',
    type: 'submission',
    summary: undefined,
    attachments: {
      items: [{ label: 'Kvittering på innsendte data.pdf', href: '#-0' }],
    },
  },
  {
    id: 't4',
    variant: 'transmission',
    type: 'acceptance',
    byline: '17. mars 2024 kl. 08.50',
    sender: {
      type: 'company',
      name: 'Statistisk sentralbyrå',
      imageUrl:
        'https://cdn.sanity.io/images/z3it2oa7/production/610b0696bb3c942b0493841b348780535b035275-44x44.png?w=96',
    },
    createdAt: '2024-03-17T07:50:00.000Z',
    createdAtLabel: '17. mars 2024 kl. 08.50',
    title: 'Bedriftsdata er godkjent',
    summary: 'Rapporteringen av bedriftsdata er godkjent.',
    badge: {
      color: 'success',
      label: 'Godkjent',
    },
    attachments: {
      items: [
        {
          label: 'Bedriftsdata – godkjent innrapportering.pdf',
          href: '#-0',
        },
      ],
    },
  },
];

import { TransmissionList, type TransmissionListProps } from '../../../lib';
import { skatt } from '../../avatar';

const pair1 = [
  {
    id: '1.2',
    type: { value: 'acceptance', label: 'Godkjent' },
    byline: 'Skattetaten, 17. mars 2025 kl 11.30',
    sender: skatt,
    unread: true,
    title: 'Innsendingen er godkjent',
  },
  {
    id: '1.1',
    type: { value: 'submission' },
    byline: 'Felix Horn Myhre, 16. mars 2025 kl 08.30',
    sender: {
      name: 'Felix Horn Myhre',
    },
    title: 'Tredjepartsopplysninger ble sendt',
  },
];

const pair2 = [
  {
    id: '2.2',
    type: { value: 'rejection', label: 'Avvist' },
    byline: 'Skattetaten, 20. mars 2025 kl 11.30',
    sender: skatt,
    unread: true,
    title: 'Innsendingen er avvist',
  },
  {
    id: '2.1',
    type: { value: 'submission' },
    byline: 'Mathias Dyngeland, 18. mars 2025 kl 08.30',
    sender: {
      name: 'Mathias Dyngeland',
    },
    title: 'Tredjepartsopplysninger ble sendt',
  },
];

const pair3 = pair1.map((item) => ({
  ...item,
  unread: false,
}));

const pair4 = pair2.map((item) => ({
  ...item,
  unread: false,
}));

export const tredjepart = {
  id: 'tredjepart',
  groupId: '2025-02',
  status: {
    value: 'not-applicable',
  },
  sentCount: 4,
  receivedCount: 4,
  updatedAt: '2024-10-18T09:40:00.000Z',
  updatedAtLabel: '18. oktober 2024 kl. 11.40',
  title: 'Tredjepartsopplysninger for boligselskap 2023',
  badge: { variant: 'tinted', label: 'Ulest' },
  sender: skatt,
  history: {
    items: [
      {
        id: '1',
        children: <TransmissionList items={pair2 as TransmissionListProps['items']} />,
      },
      {
        id: '2',
        children: <TransmissionList items={pair1 as TransmissionListProps['items']} />,
      },
      {
        id: '3',
        children: <TransmissionList items={pair3 as TransmissionListProps['items']} />,
      },
      {
        id: '4',
        children: <TransmissionList items={pair4 as TransmissionListProps['items']} />,
      },
    ],
  },
};

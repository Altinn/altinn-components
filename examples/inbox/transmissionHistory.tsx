import { type DialogHistoryProps, TransmissionList } from '../../lib';
import { transmissions } from './transmissions';
export const transmissionHistory: DialogHistoryProps = {
  items: [
    {
      id: 't0',
      items: [
        {
          children: <TransmissionList items={[{ ...transmissions[3], unread: true }, transmissions[2]]} />,
        },
      ],
    },
    {
      id: 't1',
      items: [
        {
          children: <TransmissionList items={[{ ...transmissions[1], unread: true }, transmissions[0]]} />,
        },
      ],
    },
    {
      id: 't2',
      items: [
        {
          children: <TransmissionList items={[{ ...transmissions[1], unread: false }, transmissions[0]]} />,
        },
      ],
    },
    {
      id: 't3',
      items: [
        {
          children: <TransmissionList items={[{ ...transmissions[1], unread: false }, transmissions[0]]} />,
        },
      ],
    },
    {
      id: 't4',
      items: [
        {
          children: <TransmissionList items={[{ ...transmissions[1], unread: false }, transmissions[0]]} />,
        },
      ],
    },
  ],
};

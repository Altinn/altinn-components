import type { DialogHistoryProps } from '../../lib';
import { TransmissionList } from '../../lib';
import { transmissions } from './transmissions';

export const dialogActivityLog: DialogHistoryProps = {
  items: [
    {
      id: 'a0',
      items: [
        {
          children: <TransmissionList items={[transmissions[0]]} />,
        },
      ],
    },
    {
      id: 'a1',
      items: [
        {
          children: <TransmissionList items={[transmissions[1]]} />,
        },
      ],
    },
    {
      id: 'a2',
      items: [
        {
          id: 'ddc58b65-2c26-4b06-ac08-56692bca1258',
          byline: '14. mars 2024 kl. 08.15',
          summary: (
            <>
              Varsel sendt til <strong>Theresa Harmanen</strong>, <strong>Kim Rene Teige</strong> og{' '}
              <strong>Audun Karlsen</strong>.
            </>
          ),
        },
      ],
    },
    {
      id: 'a3',
      items: [
        {
          children: <TransmissionList items={[transmissions[2]]} />,
        },
      ],
    },
    {
      id: 'a4',
      items: [
        {
          children: <TransmissionList items={[transmissions[3]]} />,
        },
      ],
    },
    {
      id: 'a5',
      items: [
        {
          id: 'ddc58b65-2c26-4b06-ac08-56692bca1258',
          byline: '17. mars 2024 kl. 09.15',
          summary: (
            <>
              Varsel sendt til <strong>Theresa Harmanen</strong>, <strong>Kim Rene Teige</strong> og{' '}
              <strong>Audun Karlsen</strong>.
            </>
          ),
        },
      ],
    },
  ],
};

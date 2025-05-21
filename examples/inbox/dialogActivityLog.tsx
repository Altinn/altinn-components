import type { DialogHistoryProps } from '../../lib';
import { transmissions } from './transmissions';

export const dialogActivityLog: DialogHistoryProps = {
  items: [
    {
      id: 'a0',
      items: [{ ...transmissions[0] }],
    },
    {
      id: 'a1',
      items: [
        {
          ...transmissions[1],
          link: {
            as: 'div',
            label: (
              <>
                Svar på <a href="#a2">{transmissions[0].title}</a>
              </>
            ),
          },
        },
      ],
    },
    {
      id: 'a2',
      items: [
        {
          id: 'ddc58b65-2c26-4b06-ac08-56692bca1258',
          variant: 'activity',
          byline: '14. mars 2024 kl. 08.15',
          children: (
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
      items: [{ ...transmissions[2] }],
    },
    {
      id: 'a4',
      items: [
        {
          ...transmissions[3],
          link: {
            label: (
              <>
                Svar på <u>{transmissions[2].title}</u>
              </>
            ),
          },
        },
      ],
    },
    {
      id: 'a5',
      items: [
        {
          id: 'ddc58b65-2c26-4b06-ac08-56692bca1258',
          variant: 'activity',
          byline: '17. mars 2024 kl. 09.15',
          children: (
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

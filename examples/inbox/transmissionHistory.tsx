import type { DialogHistoryProps } from '../../lib';
import { transmissions } from './transmissions';
export const transmissionHistory: DialogHistoryProps = {
  items: [
    {
      id: 't0',
      expandLabel: (
        <>
          Svar på <u>{transmissions[2].title}</u>
        </>
      ),
      items: [
        {
          ...transmissions[3],
          items: [
            {
              ...transmissions[2],
            },
          ],
        },
      ],
    },
    {
      id: 't1',
      expandLabel: (
        <>
          Svar på <u>{transmissions[0].title}</u>
        </>
      ),
      items: [
        {
          ...transmissions[1],
          items: [
            {
              ...transmissions[0],
            },
          ],
        },
      ],
    },
  ],
};

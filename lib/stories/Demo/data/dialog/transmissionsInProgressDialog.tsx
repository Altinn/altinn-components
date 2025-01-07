import type { DialogProps } from '../../../../components';
import { skatt } from '../avatar';

import { transmissionsHistoryItems } from './transmissionsHistoryItems';
import { transmissionsTimeline } from './transmissionsTimeline';

const historyItems = transmissionsHistoryItems?.filter(
  (item) => item.createdAt && new Date(item.createdAt) < new Date('2024-02-02'),
);
const latestHistoryItem = historyItems[historyItems?.length - 1];

export const transmissionsInProgressDialog: DialogProps = {
  id: 'transmissions',
  status: {
    value: 'in-progress',
    label: 'Under arbeid',
  },
  updatedAt: '2024-02-02 09:00',
  updatedAtLabel: '2. januar 2024 kl 09.00',
  sender: skatt,
  title: 'Tredjepartsopplysninger for boligselskap',
  summary: 'Skjemaet er lukket for ordinær rapportering. Du kan gjøre korreksjoner tom. 15. februar.',
  actions: [
    {
      id: '1',
      priority: 'secondary',
      label: 'Lever korreksjoner',
    },
  ],
  history: {
    updatedAtLabel: '3 dager siden',
    summary: latestHistoryItem.summary,
    items: historyItems,
  },
  timeline: transmissionsTimeline,
  additionalInfo: {
    title: 'Mer informasjon',
    children: (
      <p>
        Sameier med 9 eller flere boligseksjoner skal levere opplysninger om sameiers andel av felles inntekter,
        utgifter, formue og gjeld. <a href="https://altinn.no">Mer informasjon.</a>
      </p>
    ),
  },
};

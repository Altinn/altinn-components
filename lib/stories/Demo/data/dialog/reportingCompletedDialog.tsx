import type { DialogProps } from '../../../../components';
import { reportingHistoryItems } from './reportingHistoryItems';
import { reportingInProgressDialog } from './reportingInProgressDialog';

const latestHistoryItem = reportingHistoryItems[reportingHistoryItems?.length - 1];

export const reportingCompletedDialog: DialogProps = {
  ...reportingInProgressDialog,
  status: {
    value: 'completed',
    label: 'Avsluttet',
  },
  updatedAtLabel: '27. november 2024 kl 10.30',
  summary: 'Bedriftsdata er godkjent.',
  body: undefined,
  attachments: {
    title: '1 vedlegg',
    items: [
      {
        href: '#',
        label: 'Godkjent bedriftsdata.pdf',
      },
    ],
  },
  history: {
    updatedAtLabel: '4 dager siden',
    summary: latestHistoryItem?.summary,
    expandLabel: 'Vis historikk',
    collapseLabel: 'Skjul historikk',
    items: reportingHistoryItems,
  },
};

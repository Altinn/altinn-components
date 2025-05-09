import type { DialogProps } from '../../lib';
import { reportingHistoryItems } from './reportingHistoryItems';
import { reportingInProgressDialog } from './reportingInProgressDialog';

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
    expandLabel: 'Vis historikk',
    collapseLabel: 'Skjul historikk',
    items: reportingHistoryItems,
  },
};

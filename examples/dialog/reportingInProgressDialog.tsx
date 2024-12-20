import type { DialogProps } from '../../lib';
import { reportingDialog } from './reportingDialog';
import { reportingHistoryItems } from './reportingHistoryItems';

const historyItems = reportingHistoryItems.slice(0, 2);
const latestHistoryItem = historyItems[historyItems.length - 1];

export const reportingInProgressDialog: DialogProps = {
  ...reportingDialog,
  status: {
    value: 'in-progress',
    label: 'Under arbeid',
  },
  dueAt: undefined,
  dueAtLabel: undefined,
  updatedAtLabel: '27. november 2024 kl 10.30',

  summary: 'Saken er sendt til manuell behandling. Forventet behandlingstid: 2 uker.',
  body: (
    <>
      <h2>Hva skjer nå?</h2>
      <p>Saken din har fått saksbehandler og blir behandlet manuelt.</p>
      <ul>
        <li>
          <strong>Din saksbehandler:</strong> Siri Saksbehander
        </li>
        <li>
          <strong>Ditt saksnummer:</strong> XRT0987
        </li>
      </ul>
      <p>Oppgi saksnummer ved kontakt.</p>
    </>
  ),
  actions: undefined,
  attachments: undefined,
  history: {
    updatedAtLabel: '2 dager siden',
    summary: latestHistoryItem?.summary,
    expandLabel: 'Vis historikk',
    collapseLabel: 'Skjul historikk',
    items: historyItems,
  },
};

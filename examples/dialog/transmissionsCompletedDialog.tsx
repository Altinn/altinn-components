import type { DialogProps } from '../../lib';
import { skatt } from '../avatar';

import { transmissionsHistoryItems } from './transmissionsHistoryItems';

const historyItems = transmissionsHistoryItems;

export const transmissionsCompletedDialog: DialogProps = {
  id: 'transmissions',
  status: {
    value: 'completed',
    label: 'Avsluttet',
  },
  updatedAt: '2024-02-15 09:00',
  updatedAtLabel: '15. februar 2024 kl 09.00',
  sender: skatt,
  title: 'Tredjepartsopplysninger for boligselskap',
  summary: 'Skjemaet er lukket for rapportering og korreksjoner.',
  body: <p>Opplysningene du har rapportert blir forhåndsutfylt i skattemeldingen til sameierne.</p>,
  attachments: {
    title: '2 vedlegg',
    items: [
      { label: 'Rapporterte opplysninger.pdf', href: '#' },
      { label: 'Tilbakemeldinger fra Skatteetaten.pdf', href: '#' },
    ],
  },
  history: {
    items: historyItems,
  },
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

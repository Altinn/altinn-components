import type { DialogProps } from '../../../../components';
import { skatt } from '../avatar';

import { transmissionsTimeline } from './transmissionsTimeline';

export const transmissionsDialog: DialogProps = {
  id: 'transmissions',
  updatedAt: '2024-02-02 09:00',
  updatedAtLabel: '2. januar 2024 kl 09.00',
  sender: skatt,
  title: 'Tredjepartsopplysninger for boligselskap',
  summary:
    'Her finner du alle innsendinger og tilbakemeldinger for tredjepartsopplysninger for boligselskap 2023. Frist for å levere er 20. januar 2024.',
  actions: [
    {
      id: '1',
      priority: 'secondary',
      label: 'Lever tredjepartsopplysninger',
    },
  ],
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

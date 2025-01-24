import type { DialogProps } from '../../lib';
import { ssb } from '../avatar';

export const reportingDialog: DialogProps = {
  id: 'reporting',
  status: {
    value: 'requires-attention',
    label: 'Krever handling',
  },
  sender: ssb,
  dueAt: '2024-10-31',
  dueAtLabel: 'Frist: 31. oktober 2024',
  title: 'Rapportering av bedriftsdata',
  summary: 'Du må levere bedriftsdata innen 31. oktober.',
  attachments: {
    title: '1 vedlegg',
    items: [
      {
        href: '#',
        label: 'Vedtak om rapportering av bedriftsdata.pdf',
      },
    ],
  },
  actions: [
    {
      id: '1',
      priority: 'primary',
      label: 'Rapporter bedriftsdata',
    },
  ],
  additionalInfo: {
    title: 'Mer informasjon',
    children: (
      <p>
        Din bedrift er en av 8.000 virksomheter som har opplysningsplikt i 2024. Statistikken er viktig for samfunnet og
        det er ikke valgfritt å delta. Hvis dere ikke sender opplysningene innen fristen, vil foretaket kunne få
        tvangsmulkt. <a href="https://www.ssb.no/innrapportering/ledige-stillinger">Les mer på SSB.no</a>
      </p>
    ),
  },
  contactInfo: {
    title: 'Kontakt SSB',
    description: 'Sentralbordet er åpent mandag–fredag 9.00-11.25 og 12–14.',
    items: [
      {
        icon: 'phone',
        label: 'Ring 62 88 50 00',
      },
      {
        icon: 'pencil',
        label: 'Skriv til oss',
      },
    ],
  },
};

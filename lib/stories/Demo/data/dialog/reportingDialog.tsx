import type { DialogProps } from '../../../../components';
import { ssb } from '../avatar';

export const reportingDialog: DialogProps = {
  id: 'reporting',
  status: {
    value: 'requires-attention',
    label: 'Krever handling',
  },
  sender: ssb,
  updatedAt: '2024-03-15 08:00',
  updatedAtLabel: '15. mars 2024 kl. 08.00',
  dueAt: '2024-10-31',
  dueAtLabel: 'Frist: 31. oktober 2024',
  title: 'Rapportering av bedriftsdata',
  summary: 'Du må levere bedriftsdata innen 31. oktober.',
  seenBy: {
    seenByEndUser: true,
    seenByOthersCount: 4,
    label: "Sett av deg + 4"
  },
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
    title: 'Ta kontakt',
    children: <p>Little itpsum.</p>,
  },
};

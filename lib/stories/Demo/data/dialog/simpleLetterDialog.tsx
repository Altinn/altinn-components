import type { DialogProps } from '../../../../components';
import { skatt } from '../avatar';

export const simpleLetterDialog: DialogProps = {
  id: 'aksjeoppgave',
  sender: skatt,
  updatedAt: '2024-03-01 09:30',
  updatedAtLabel: '1. mars 2024 kl 09.30',
  title: 'Aksjeoppgaven 2023',
  summary: 'Aksjeoppgaven for 2023 er klar.',
  attachments: {
    title: '2 vedlegg',
    items: [
      {
        href: '#',
        label: 'RF1088F Forenklet aksjeoppgave.pdf',
      },
      {
        href: '#',
        label: 'RF1088D Detaljert aksjeoppgave.pdf',
      },
    ],
  },
  additionalInfo: {
    title: 'Mer informasjon',
    children: (
      <p>
        Alle aksjonærer mottar aksjeoppgaven fra Skatteetaten. Den gir en oversikt over dine aksjer i norske
        aksjeselskap. Aksjeoppgaven inneholder også utenlandske selskap registrert på Oslo Børs og egenkapitalbevis i
        norske sparebanker.
      </p>
    ),
  },
  contactInfo: {
    title: 'Ta kontakt',
    children: (
      <p>
        Du kan kontakte oss på telefon 800 80 000 eller på skatteetaten.no/kontakt. Ditt referansenummer er SK985-09.
        Hvis du ringer fra utlandet er telefonnummeret +47 22 07 70 00
      </p>
    ),
  },
};

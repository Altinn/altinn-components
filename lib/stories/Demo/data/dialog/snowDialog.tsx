import type { DialogProps } from '../../../../components';
import { oslo } from '../avatar';

export const snowDialog: DialogProps = {
  id: 'reporting',
  status: {
    value: 'requires-attention',
    label: 'Krever handling',
  },
  sender: oslo,
  updatedAt: '2023-12-25 12:34',
  updatedAtLabel: '25. desember 2023 kl. 12.34',
  dueAt: '2024-10-31',
  title: 'Melding om bortkjøring av snø',
  summary: 'Melding om bortkjøring av snø mangler opplysninger om adresse. Se over opplysninger og send inn skjema på nytt.',
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
        label: 'Bortkjøring av snø – kvittering.pdf',
      },
    ],
  },
  actions: [
    {
      id: '1',
      priority: 'primary',
      label: 'Til skjema',
    },
  ],
  additionalInfo: {
    title: 'Mer informasjon',
    children: (
      <p>
        Hvis snøen skaper problemer, stiller vi opp og kjører bort snøen for deg. Vi kan også flytte snøen internt på eiendommen, dersom det er ønskelig og mulighet for det.
      </p>
    ),
  },
  contactInfo: {
    title: 'Ta kontakt',
    children: <p>Little ipsum.</p>,
  },
};

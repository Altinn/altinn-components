import type { DialogProps } from '../../../../components';
import { oslo } from '../avatar';

export const extendedLetterDialog: DialogProps = {
  id: 'nabovarsel',
  sender: oslo,
  updatedAt: '2024-12-12 15:27',
  updatedAtLabel: '12. desember 2024 kl 15.27',
  title: 'Nabovarsel for Wilhelms gt 10',
  summary: 'Nabovarsel for byggeplaner i for Wilhelms gate 10, 0169 Oslo (gårdsnr. 217, bruksnr. 486).',
  body: (
    <>
      <p>
        Du mottar nabovarselet fordi Borhaven Arkitekter AS har planer om å bygge eller gjøre endringer i nærheten av
        følgende eiendom:
      </p>
      <p>
        <em>Eugenies gate 13B, gårdsnr. 217, bruksnr. 501, seksjonsnr. 0, festenr. 0.</em>
      </p>
    </>
  ),
  attachments: {
    title: '7 vedlegg',
    items: [
      {
        href: '#',
        label: 'Nabovarsel.pdf',
      },
      {
        href: '#',
        label: 'A10-01 Situasjonsplan.pdf',
      },
      {
        href: '#',
        label: 'A40-01 Fasade Nord Ny.pdf',
      },
      {
        href: '#',
        label: 'A40-01 Fasade Øst Ny.pdf',
      },
      {
        href: '#',
        label: 'A40-01 Fasade Vest Ny.pdf',
      },
      {
        href: '#',
        label: 'A40-01 Fasade Sør Ny.pdf',
      },
      {
        href: '#',
        label: 'A30-01 Snitt A Ny.pdf',
      },
      {
        href: '#',
        label: 'A30-03 Snitt B Ny.pdf',
      },
      {
        href: '#',
        label: 'Redegjørelse Wilhelms gt 10.pdf',
      },
    ],
  },
  actions: [
    {
      id: '1',
      priority: 'secondary',
      label: 'Gi tilbakemelding',
    },
  ],
  additionalInfo: {
    title: 'Mer informasjon',
    children: (
      <p>
        Hvis du mener at byggeplanene påvirker deg negativt, må du sende inn merknader innen 14 dager. Har du ingen
        merknader trenger du ikke å gjør enoe som helst. <a href="/">Mer om nabovarsel.</a>
      </p>
    ),
  },
  contactInfo: {
    title: 'Ta kontakt',
    children: <p>Spørsmål om byggeplanene kan rettes til ansvarlig arkitekt Borhaven Arkitekter på tlf. 905 05 345.</p>,
  },
};

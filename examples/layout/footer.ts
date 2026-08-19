import { type FooterProps, clearConsent } from '../../lib';

export const footer: FooterProps = {
  address: 'Postboks 1382 Vika, 0114 Oslo.',
  address2: 'Org.nr. 991 825 827',
  menu: {
    items: [
      {
        id: '1',
        title: 'Hjelp og kontakt',
        href: 'https://info.altinn.no/hjelp/',
      },
      {
        id: '2',
        title: 'Om Altinn',
        href: 'https://info.altinn.no/om-altinn/',
      },
      {
        id: '3',
        title: 'Driftsmeldinger',
        href: 'https://info.altinn.no/om-altinn/driftsmeldinger/',
      },
      {
        id: '4',
        title: 'Personvern',
        href: 'https://info.altinn.no/om-altinn/personvern/',
      },
      {
        id: '5',
        title: 'Tilgjengelighet',
        href: 'https://info.altinn.no/om-altinn/tilgjengelighet/',
      },
      {
        id: '6',
        title: 'Endre samtykke for informasjonskapsler',
        as: 'button',
        onClick: clearConsent,
      },
    ],
  },
};

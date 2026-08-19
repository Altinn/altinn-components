import { type FooterProps, clearConsent } from '../../lib';

export const footer: FooterProps = {
  address: 'Postboks 1382 Vika, 0114 Oslo.',
  address2: 'Org.nr. 991 825 827',
  menu: {
    items: [
      {
        id: '1',
        title: 'Hjelp og kontakt',
      },
      {
        id: '2',
        title: 'Om Altinn',
      },
      {
        id: '3',
        title: 'Driftsmeldinger',
      },
      {
        id: '4',
        title: 'Personvern',
      },
      {
        id: '5',
        title: 'Tilgjengelighet',
      },
      {
        id: '6',
        title: 'Endre samtykke for informasjonskapsler',
        href: '#',
        onClick: clearConsent,
      },
    ],
  },
};

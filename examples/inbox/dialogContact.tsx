import type { DialogContactProps } from '../../lib';
export const dialogContact: DialogContactProps = {
  title: 'Trenger du hjelp?',
  children: <p>Spørsmål om innholdet må du stille til den som har sendt deg meldingen.</p>,
  buttons: [{ label: 'Chat med oss' }, { label: 'Skriv til oss' }, { label: 'Ring 800 00 000' }],
  helpLink: {
    children: 'Hjelp meg å forstå meldingen',
    href: 'https://info.altinn.no/nyheter/om-nye-altinn/',
    as: 'a',
  },
};

import type { DialogProps } from '../../../../components';
import { nav as sender } from '../avatar';

export const metadataDialog: DialogProps = {
  id: 'metadata',
  sender,
  recipient: { name: 'Bergen bar' },
  updatedAt: '2024-12-01 09:30',
  updatedAtLabel: '1. desember 2024 kl 09.30',
  title: 'Sykmelding Sander Svendsen',
  summary: 'Sander Svendsen er sykmeldt i 4 dager fra 2. juli.',
  body: (
    <>
      <h6>Sykmeldingen gjelder</h6>
      <p>2.–5. desember 2024.</p>
      <h6>Nærmeste leder</h6>
      <p>
        <a href="/">Ikke oppgitt.</a>
      </p>
      <h6>Ansvarlig lege</h6>
      <p>Mark Medisin + 47 23369090</p>
    </>
  ),
  actions: [
    {
      id: '1',
      priority: 'primary',
      label: 'Oppgi nærmeste leder',
    },
  ],
  history: {
    updatedAtLabel: 'Sander Svendsens sykehistorikk',
    summary: '73 dager sykmeldt i år',
    expandLabel: 'Vis historikk',
    collapseLabel: 'Skjul historikk',
    items: [
      {
        createdAt: '',
        createdAtLabel: '1. januar 2024',
        summary: '14 dager sykmeldt fra 12. januar–26. januar.',
      },
      {
        createdAt: '',
        createdAtLabel: '4. februar 2024',
        summary: '7 dagers sykmeldt fra 6. februar–12. februar.',
      },
      {
        createdAt: '',
        createdAtLabel: '15. april 2024',
        summary: '45 dagers sykmeldt fra 15. april–30. mai 2024.',
      },
      {
        createdBy: {
          type: 'company',
          name: 'Bergen bar',
        },
        createdAt: '',
        createdAtLabel: '1. mai 2024',
        summary: 'Inntektsmelding ble sendt',
      },
      {
        createdAt: '',
        createdAtLabel: '4. november 2024',
        summary: '7 dagers sykmeldt fra 4. november–11. november.',
      },
      {
        createdAt: '',
        createdAtLabel: '4. november 2024',
        summary: '7 dagers sykmeldt fra 4. november–11. november.',
      },
    ],
  },
  additionalInfo: {
    title: 'Mer informasjon',
    children: (
      <p>
        Virksomheten får melding når det skjer noe nytt i et sykesykmeldt. Hvilke meldinger man får, avhenger av rollen
        man har. <a href="#koko">Slik går du som arbeidsgiver går frem for å håndtere sykepenger</a>.
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

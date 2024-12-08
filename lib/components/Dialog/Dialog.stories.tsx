import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

const meta = {
  title: 'Dialog/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {},
  decorators: [
    withThemeByDataAttribute({
      themes: {
        company: 'company',
        person: 'person',
      },
      defaultTheme: 'company',
    }),
  ],
  argTypes: { body: { control: 'text' } },
  args: {
    seenBy: {
      as: 'a',
      href: '#',
      label: 'Sett av deg + 2',
      seenByEndUser: true,
      seenByOthersCount: 24,
    },
    activityLog: {
      as: 'a',
      href: '#',
      label: 'Aktivitetslogg',
    },
    menu: {
      id: 'context-menu',
      items: [
        {
          groupId: '1',
          id: '1',
          icon: 'arrow-redo',
          title: 'Del og gi tilgang',
        },
        {
          groupId: '1',
          id: '2',
          icon: 'eye',
          title: 'Marker som lest',
        },
        {
          groupId: '2',
          id: '3',
          icon: 'archive',
          title: 'Flytt til arkiv',
        },
        {
          groupId: '2',
          id: '4',
          icon: 'trash',
          title: 'Flytt til papirkurv',
        },
        {
          groupId: '3',
          id: '4',
          icon: 'clock-dashed',
          title: 'Aktivitetslogg',
        },
      ],
    },
    updatedAt: '2024-11-25 15:30',
    updatedAtLabel: '25. november 1999 kl 15.30',
    title: 'Title',
    summary: 'Summary',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    body: (
      <>
        <h2>Heading 2</h2>
        <p>Body can be displayed using HTML.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </>
    ),
  },
};

export const Attachments: Story = {
  args: {
    attachments: {
      title: '2 vedlegg',
      items: [
        {
          label: 'Dokument 1.pdf',
          href: '',
        },
        {
          label: 'Dokument 2.pdf',
          href: '',
        },
      ],
    },
  },
};

export const Transmissions: Story = {
  args: {
    sender: {
      type: 'company',
      name: 'Skatteetaten',
      imageUrl:
        'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
    },
    title: 'Tredjepartsopplysninger for boligselskap',
    summary:
      'Her finner du alle innsendinger og tilbakemeldinger for tredjepartsopplysninger for boligselskap 2023. Frist for å levere er 20. januar 2024.',
    actions: [
      {
        label: 'Lever tredjepartsopplysninger',
      },
    ],
    additionalInfo: (
      <p>
        Sameier med 9 eller flere boligseksjoner skal levere opplysninger om sameiers andel av felles inntekter,
        utgifter, formue og gjeld. <a href="https://altinn.no">Mer informasjon.</a>
      </p>
    ),
    history: {
      title: 'Hva har skjedd?',
      items: [
        {
          createdAtLabel: '15. februar 2024 kl. 08.45',
          createdBy: {
            type: 'company',
            name: 'Skatteetaten',
            imageUrl:
              'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
          },
          summary: 'Skjemaet er lukket for rapportering og korreksjoner.',
        },
        {
          createdAtLabel: '2. januar 2024 kl 08.00',
          createdBy: {
            type: 'company',
            name: 'Skatteetaten',
            imageUrl:
              'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
          },
          summary: 'Du kan nå levere tredjepartsopplysninger.',
        },
        {
          createdAtLabel: '15. oktober 2023 kl 08.00',
          createdBy: {
            type: 'company',
            name: 'Skatteetaten',
            imageUrl:
              'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
          },
          summary: 'Du må levere tredjepartsopplysninger for boligselskap.',
          attachments: [
            {
              label: 'Rapportering av tredjepartsopplysninger for boligselskap.pdf',
            },
          ],
        },
      ],
    },
    transmissions: {
      title: '6 forsendelser',
      items: [
        {
          createdAt: '1999-01-01',
          createdAtLabel: 'Skatteetaten, 1. mars 2024',
          sender: {
            type: 'company',
            name: 'Skatteetaten',
            imageUrl:
              'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
          },
          badge: {
            label: 'Godkjent, med feil',
          },
          title: 'Leveransen er godkjent, men inneholder feil',
          summary:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
          attachments: {
            title: '2 vedlegg',
            items: [
              {
                label: 'Dokument 1.pdf',
                href: '',
              },
              {
                label: 'Dokument 2.pdf',
                href: '',
              },
            ],
          },
        },
        {
          sender: {
            name: 'Per Olav Olsen',
          },
          title: 'Tredjepartsopplysninger ble levert',
          createdAtLabel: '1. mars 2024',
          summary:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        },
        {
          createdAt: '1999-01-01',
          createdAtLabel: 'Skatteetaten, 1. mars 2024',
          sender: {
            type: 'company',
            name: 'Skatteetaten',
            imageUrl:
              'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
          },
          badge: {
            label: 'Godkjent',
          },
          title: 'Leveransen er godkjent',
          summary:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
          attachments: {
            title: '2 vedlegg',
            items: [
              {
                label: 'Dokument 1.pdf',
                href: '',
              },
              {
                label: 'Dokument 2.pdf',
                href: '',
              },
            ],
          },
        },
        {
          sender: {
            name: 'Kari Susanne Pettersen',
          },
          title: 'Tredjepartsopplysninger ble levert',
          createdAtLabel: '1. mars 2024',
          summary:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        },

        {
          createdAt: '1999-01-01',
          createdAtLabel: 'Skatteetaten, 1. mars 2024',
          sender: {
            type: 'company',
            name: 'Skatteetaten',
            imageUrl:
              'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
          },
          badge: {
            label: 'Avvist',
          },
          title: 'Leveransen er avvist',
          summary:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
          attachments: {
            title: '2 vedlegg',
            items: [
              {
                label: 'Dokument 1.pdf',
                href: '',
              },
              {
                label: 'Dokument 2.pdf',
                href: '',
              },
            ],
          },
        },
        {
          sender: {
            name: 'Siren Søftebø',
          },
          title: 'Tredjepartsopplysninger ble levert',
          createdAtLabel: '1. mars 2024',
          summary:
            'Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.',
        },
      ],
    },
  },
};

export const Actions: Story = {
  args: {
    actions: [
      {
        id: '1',
        priority: 'primary',
        label: 'Primary',
      },
      {
        id: '2',
        priority: 'secondary',
        label: 'Secondary',
      },
    ],
  },
};

export const RequiresAttention: Story = {
  args: {
    status: { label: 'Krever handling', value: 'requires-attention' },
    sender: {
      name: 'Statistisk sentralbyrå',
      imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
    },
    recipient: {
      name: 'Bergen Bar',
    },
    title: 'Rapportering av bedriftsdata',
    summary: 'Du må levere bedriftsdata innen 1. januar.',
    additionalInfo: (
      <p>
        Din bedrift er en av 8.000 virksomheter som har opplysningsplikt i 2024. Statistikken er viktig for samfunnet og
        det er ikke valgfritt å delta. Hvis dere ikke sender opplysningene innen fristen, vil foretaket kunne få
        tvangsmulkt. <a href="https://www.ssb.no/innrapportering/ledige-stillinger">Les mer på SSB.no</a>
      </p>
    ),
    actions: [
      {
        id: '1',
        priority: 'primary',
        label: 'Rapporter bedriftsdata',
      },
    ],
    dueAt: '2025-01-01',
    dueAtLabel: 'Frist: 1. januar 2025',
    attachments: {
      title: '1 vedlegg',
      items: [
        {
          label: 'Vedtak om innlevering av bedriftsdata.pdf',
          href: '',
        },
      ],
    },
  },
};

export const InProgress: Story = {
  args: {
    ...RequiresAttention.args,
    status: { value: 'in-progress', label: 'Under arbeid' },

    dueAt: null,
    dueAtLabel: null,
    updatedAtLabel: '27. november 2024 kl 10.30',

    summary: 'Saken er sendt til manuell behandling. Forventet behandlingstid: 2 uker.',
    body: (
      <>
        <h2>Hva skjer nå?</h2>
        <p>Saken din har fått saksbehandler og blir behandlet manuelt.</p>
        <ul>
          <li>
            <strong>Din saksbehandler:</strong> Siri Saksbehander
          </li>
          <li>
            <strong>Ditt saksnummer:</strong> XRT0987
          </li>
        </ul>
        <p>Oppgi saksnummer ved kontakt.</p>
      </>
    ),
    actions: null,
    attachments: {},
    additionalInfo: (
      <p>
        Din bedrift er en av 8.000 virksomheter som har opplysningsplikt i 2024. Statistikken er viktig for samfunnet og
        det er ikke valgfritt å delta. Hvis dere ikke sender opplysningene innen fristen, vil foretaket kunne få
        tvangsmulkt. <a href="https://www.ssb.no/innrapportering/ledige-stillinger">Les mer på SSB.no</a>
      </p>
    ),

    history: {
      title: 'Hva har skjedd?',
      items: [
        {
          createdBy: {
            type: 'person',
            name: 'Ola Nordmann',
          },
          createdAtLabel: '27. november 2024 kl 10.24',
          summary: 'Bedriftsdata ble levert.',
        },
        {
          createdBy: {
            type: 'company',
            name: 'Statistisk sentralbyrå',
            imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
          },
          createdAtLabel: '24. november 2024 kl 15.30',
          summary: 'Du må levere bedriftsdata innen 1. januar.',
          attachments: {
            title: '1 vedlegg',
            items: [
              {
                label: 'Vedtak om innlevering av bedriftsdata.pdf',
                href: '',
              },
            ],
          },
        },
      ],
    },
  },
};

export const Draft: Story = {
  args: {
    status: { value: 'draft', label: 'Utkast' },

    sender: {
      name: 'Statistisk sentralbyrå',
      imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
    },

    recipient: {
      name: 'Bergen Bar',
    },

    title: 'Registrere enkeltmannsforetak',
    summary: 'Skjema er opprettet.',

    actions: [
      {
        id: '1',
        priority: 'primary',
        label: 'Gå til skjema',
      },
      {
        id: '2',
        priority: 'secondary',
        label: 'Forkast',
      },
    ],

    attachments: {},
  },
};

export const Sent: Story = {
  args: {
    ...Draft.args,
    status: { value: 'sent', label: 'Sendt' },
    actions: null,
    summary: 'Skjema er sendt inn.',
    attachments: {
      title: '1 vedlegg',
      items: [
        {
          href: '#',
          label: 'Kvittering på innsendt skjema.pdf',
        },
      ],
    },
  },
};

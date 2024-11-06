import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Dialog } from './Dialog';

const meta = {
  title: 'Dialog/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {},
  argTypes: { body: { control: 'text' } },
  args: {
    menu: [
      {
        items: [{ label: 'Menu 1' }],
      },
    ],
    updatedAt: '1999-05-26',
    updatedAtLabel: '26. mai 1999',
    title: 'Title',
    summary: 'Summary',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    body:
      '## Body\n\n' +
      'Body will be loaded async.\n\n' +
      '### Syntax\n\n' +
      'body supporters basic headings from h2 -> h4 + lists.\n\n' +
      '- List 1\n' +
      '- List 2\n' +
      '- List 3\n',
  },
};

export const Attachments: Story = {
  args: {
    attachments: {
      items: [
        {
          label: 'Dokument 1.pdf',
        },
        {
          label: 'Dokument 2.pdf',
        },
      ],
    },
  },
};

export const Action: Story = {
  args: {
    action: [
      {
        label: 'Primary',
      },
      {
        label: 'Secondary',
      },
    ],
  },
};

export const SeenBy: Story = {
  args: {
    ...Action.args,
    seenBy: {
      as: 'a',
      href: '#',
      label: 'Sett av deg + 24',
      seenByEndUser: true,
      seenByOthersCount: 24,
    },
    activityLog: {
      as: 'a',
      href: '#',
      label: 'Aktivitetslogg',
    },
  },
};

export const Example: Story = {
  args: {
    status: { value: 'requires-attention' },
    sender: {
      name: 'Statistisk sentralbyrå',
      imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
    },
    recipient: {
      name: 'Bergen Bar',
    },
    title: 'Rapportering av bedriftsdata',
    summary: 'Du må levere bedriftsdata innen 31. oktober.',
    additionalInfo:
      'Din bedrift er pålagt å rapportere inn bedriftsdata innen **31. oktober**. ' +
      'Vi bruker svarene dine kun til å utarbeide statistikk, og enkeltsvar vil aldri bli offentliggjort. Du kan når som helst kontakte oss og kreve av opplysningene om deg blir slettet.',
    action: [
      {
        label: 'Rapporter bedriftsdata',
      },
    ],
    attachments: {
      items: [
        {
          label: 'Vedtak om innlevering av bedriftsdata.pdf',
        },
      ],
    },
  },
};

export const HistoryContact: Story = {
  args: {
    status: { value: 'requires-attention' },
    sender: {
      name: 'Statistisk sentralbyrå',
      imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
    },
    recipient: {
      name: 'Bergen Bar',
    },
    title: 'Rapportering av bedriftsdata',
    summary: 'Innrapporteringen inneholder feil. Se over og lever på nytt.',
    additionalInfo:
      'Din bedrift er pålagt å rapportere inn bedriftsdata innen **31. oktober**. ' +
      'Vi bruker svarene dine kun til å utarbeide statistikk, og enkeltsvar vil aldri bli offentliggjort. Du kan når som helst kontakte oss og kreve av opplysningene om deg blir slettet.',
    action: [
      {
        label: 'Rapporter bedriftsdata',
      },
    ],
    attachments: {
      items: [
        {
          label: 'Feilliste.pdf',
        },
      ],
    },
    history: [
      {
        createdAt: '2004-01-01 13:34',
        createdBy: {
          name: 'Eirik Horneland',
        },
        summary: 'Rapportering ble sendt inn.',
        attachments: [
          {
            label: 'Kvittering.pdf',
          },
        ],
      },
      {
        createdAt: '2004-01-01 13:34',
        createdBy: {
          imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',

          name: 'Statistisk sentralbyrå',
        },
        summary: 'Du må levere bedriftsdata innen 31. oktober.',
        attachments: [
          {
            label: 'Vedtak om innlevering av bedriftsdata.pdf',
          },
        ],
      },
    ],
    contactInfo:
      'Kontakt oss på svar@ssb.no eller ring 62 88 56 08.\n\n' +
      'Svartjenesten er åpen alle hverdager fra kl. 9-21 og lørdager fra kl. 10-16.',
  },
};

export const Signering: Story = {
  args: {
    status: { value: 'requires-attention' },

    sender: {
      name: 'Statistisk sentralbyrå',
      imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
    },

    recipient: {
      name: 'Bergen Bar',
    },

    title: 'Registrere enkeltmannsforetak',
    summary: 'Skjema er klar til signering.',
    additionalInfo:
      'Din bedrift er pålagt å rapportere inn bedriftsdata innen **31. oktober**. Vi bruker svarene dine kun til å utarbeide statistikk, og enkeltsvar vil aldri bli offentliggjort. Du kan når som helst kontakte oss og kreve av opplysningene om deg blir slettet.',

    action: [
      {
        label: 'Gå til signering',
      },
    ],

    attachments: {},

    history: {
      items: [
        {
          updatedAt: '2004-01-01 13:34',

          updatedBy: {
            name: 'Eirik Horneland',
          },

          summary: 'Rapportering ble sendt inn.',

          attachments: [
            {
              label: 'Kvittering.pdf',
            },
          ],
        },
        {
          updatedAt: '2004-01-01 13:34',

          updatedBy: {
            imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
            name: 'Statistisk sentralbyrå',
          },

          summary: 'Du må levere bedriftsdata innen 31. oktober.',

          attachments: [
            {
              label: 'Vedtak om innlevering av bedriftsdata.pdf',
            },
          ],
        },
      ],
    },

    contact: {
      title: 'Ta kontakt',
      body: 'Ta kontakt for mer informasjon på telefon 99 00 00 00.',
    },
  },
};

export const BrregDraft: Story = {
  args: {
    status: { value: 'draft' },

    sender: {
      name: 'Statistisk sentralbyrå',
      imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
    },

    recipient: {
      name: 'Bergen Bar',
    },

    title: 'Registrere enkeltmannsforetak',
    summary: 'Skjema er opprettet.',

    action: [
      {
        label: 'Gå til skjema',
      },
      {
        label: 'Forkast',
      },
    ],

    attachments: {},
    additionalInfo:
      'Enkeltpersonforetak må registreres i Enhetsregisteret for å få et organisasjonsnummer. Enkelte må også registreres i Foretaksregisteret.',
  },
};

export const BrregSign: Story = {
  args: {
    ...BrregDraft.args,
    status: { value: 'requires-attention' },
    summary: 'Skjema er klar til signering.',

    action: [
      {
        label: 'Til signering',
      },
      {
        label: 'Avslå signering',
      },
    ],

    history: {
      items: [
        {
          createdAt: '2004-01-01 13:34',
          createdBy: {
            type: 'person',
            name: 'Eirik Horneland',
          },
          summary: 'Rapportering ble sendt inn.',
          attachments: [
            {
              label: 'Kvittering.pdf',
            },
          ],
        },
        {
          createdAt: '2004-01-01 13:34',
          createdBy: {
            imageUrl: 'https://digdir-proto-proto.vercel.app/_next/static/media/SSB.0ca4474e.png',
            name: 'Statistisk sentralbyrå',
          },

          summary: 'Du må levere bedriftsdata innen 31. oktober.',

          attachments: [
            {
              label: 'Vedtak om innlevering av bedriftsdata.pdf',
            },
          ],
        },
      ],
    },
  },
};

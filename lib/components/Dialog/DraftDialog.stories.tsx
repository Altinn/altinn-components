import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Meta, StoryObj } from '@storybook/react';
import {
  dialogContextMenu,
  extendedLetterDialog,
  metadataDialog,
  reportingCompletedDialog,
  reportingDialog,
  reportingDraftDialog,
  reportingInProgressDialog,
  simpleLetterDialog,
  transmissionsCompletedDialog,
  transmissionsDialog,
  transmissionsInProgressDialog,
} from '../../examples';
import { DraftDialog } from './DraftDialog';

const meta = {
  title: 'Dialog/DraftDialog',
  component: DraftDialog,
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
    sender: {
      type: 'company',
      name: 'Skatteetaten',
      imageUrl:
        'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
    },
    recipientLabel: 'til',
    recipient: {
      type: 'person',
      name: 'Roar Recipient',
    },
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
    backButton: {
      label: 'Tilbake',
    },
    menu: dialogContextMenu,
    updatedAt: '2024-11-25 15:30',
    updatedAtLabel: '25. november 1999 kl 15.30',
    title: 'Title',
    summary: 'Summary',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleLetter: Story = {
  args: simpleLetterDialog,
};

export const ExtendedLetter: Story = {
  args: extendedLetterDialog,
};

export const TypographyMetadata: Story = {
  args: metadataDialog,
};

export const ReportingRequired: Story = {
  args: reportingDialog,
};

export const ReportingDraft: Story = {
  args: reportingDraftDialog,
};

export const ReportingInProgress: Story = {
  args: reportingInProgressDialog,
};

export const ReportingCompleted: Story = {
  args: reportingCompletedDialog,
};

export const Transmissions: Story = {
  args: transmissionsDialog,
};

export const TransmissionsInProgress: Story = {
  args: transmissionsInProgressDialog,
};

export const TransmissionsCompleted: Story = {
  args: transmissionsCompletedDialog,
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
    actions: undefined,
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

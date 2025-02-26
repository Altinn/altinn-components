import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '..';
import {
  dialogContextMenu,
  extendedLetterDialog,
  metadataDialog,
  reportingCompletedDialog,
  reportingDialog,
  reportingDraftDialog,
  reportingInProgressDialog,
  simpleLetterDialog,
} from '../../../examples';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog/Examples',
  component: Dialog,
  tags: ['autodocsi', 'beta'],
  parameters: {},
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
      seenByOthersCount: 2,
    },
    activityLog: {
      as: 'a',
      href: '#',
      label: 'Aktivitetslogg',
    },
    backButton: {
      label: 'Tilbake',
    },
    contextMenu: dialogContextMenu,
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

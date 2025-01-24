import type { Meta, StoryObj } from '@storybook/react';
import { dialogContextMenu, reportingDraftDialog } from '../../../examples';
import { DraftDialog } from './DraftDialog';

const meta: Meta<typeof DraftDialog> = {
  title: 'Dialog/DraftDialog',
  component: DraftDialog,
  tags: ['autodocs', 'alpha'],
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
} satisfies Meta<typeof DraftDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: reportingDraftDialog,
};

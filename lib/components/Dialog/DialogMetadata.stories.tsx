import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogMetadata } from './DialogMetadata';

const meta = {
  title: 'Inbox/Dialog/DialogMetadata',
  component: DialogMetadata,
  tags: ['autodocsi', 'beta'],
  parameters: {},
  args: {
    updatedAt: '1999-05-26',
    updatedAtLabel: '26. mai 1999 kl 22:45',
  },
} satisfies Meta<typeof DialogMetadata>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Draft: Story = {
  args: {
    draftsLabel: 'Utkast',
  },
};

export const RequiresAttention: Story = {
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling',
    },
    dueAt: '2000-01-01',
    dueAtLabel: 'Frist: 1. januar 2001',
  },
};

export const InProgress: Story = {
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid',
    },
    sentCount: 1,
    attachmentsCount: 1,
  },
};

export const Completed: Story = {
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet',
    },
    sentCount: 1,
    attachmentsCount: 1,
    receivedCount: 1,
  },
};

export const NotApplicable: Story = {
  args: {
    status: {
      value: 'not-applicable',
    },
  },
};

export const Transmissions: Story = {
  args: {
    status: {
      value: 'not-applicable',
    },
    sentCount: 2,
    receivedCount: 4,
  },
};

export const ActivityLog: Story = {
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet',
    },
    activityLog: {
      label: 'Aktivitetslogg',
      onClick: () => alert('Open activity log'),
    },
  },
};

export const WithExtendedStatus: Story = {
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid',
    },
    extendedStatusLabel: 'Venter på svar',
    sentCount: 1,
    attachmentsCount: 2,
  },
};

export const WithTooltips: Story = {
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid',
    },
    extendedStatusLabel: 'Venter på svar',
    sentCount: 1,
    receivedCount: 2,
    attachmentsCount: 2,
    tooltips: {
      status: 'Tjenesteiers status',
      extendedStatus: 'Utvidet status',
      sent: 'Sendte meldinger',
      received: 'Meldinger mottatt',
      attachments: 'Vedlegg',
      updatedAt: 'Sist oppdatert',
      dueAt: 'Frist',
      trashedAt: 'Slettet',
      archivedAt: 'Arkivert',
      transmissions: 'Overførsler',
      activityLog: 'Aktivitetslogg',
    },
  },
};

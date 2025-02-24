import type { Meta, StoryObj } from '@storybook/react';
import { DialogMetadata } from './DialogMetadata';

const meta = {
  title: 'Dialog/DialogMetadata',
  component: DialogMetadata,
  tags: ['autodocsi', 'beta'],
  parameters: {},
  args: {
    updatedAt: '1999-05-26',
    updatedAtLabel: '26. mai 1999',
  },
} satisfies Meta<typeof DialogMetadata>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Draft: Story = {
  args: {
    status: {
      value: 'draft',
      label: 'Utkast',
    },
    updatedAtLabel: 'Ole Gunnar Solskjær, 26. mai 1999',
  },
};

export const Sent: Story = {
  args: {
    status: {
      value: 'sent',
      label: 'Sendt',
    },
  },
};

export const DueDate: Story = {
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling',
    },
    attachmentsCount: 3,
    dueAt: '2000-01-01',
    dueAtLabel: 'Frist: 1. januar 2001',
  },
};

export const SeenByEndUser: Story = {
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet',
    },
    attachmentsCount: 1,
    seenBy: {
      seenByEndUser: true,
      seenByOthersCount: 0,
      label: 'Sett av deg',
    },
  },
};

export const SeenByOthers: Story = {
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid',
    },
    seenBy: {
      seenByEndUser: false,
      seenByOthersCount: 4,
      label: 'Sett av 4',
    },
  },
};

export const SeenByEndUserAndOthers: Story = {
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid',
    },
    seenBy: {
      seenByEndUser: true,
      seenByOthersCount: 4,
      label: 'Sett av deg + 4',
    },
  },
};

export const SeenByAndActivityLog: Story = {
  args: {
    updatedAt: undefined,
    updatedAtLabel: undefined,
    seenBy: {
      seenByEndUser: true,
      seenByOthersCount: 4,
      label: 'Sett av deg + 4',
      as: 'button',
    },
    activityLog: {
      label: 'Aktivitetslogg',
      as: 'button',
    },
  },
};

export const SeenByLog: Story = {
  args: {
    updatedAt: undefined,
    updatedAtLabel: undefined,
    seenBy: {
      seenByEndUser: true,
      seenByOthersCount: 4,
      label: 'Sett av deg + 4',
      as: 'button',
    },
  },
};

export const ActivityLog: Story = {
  args: {
    updatedAt: undefined,
    updatedAtLabel: undefined,
    activityLog: {
      label: 'Aktivitetslogg',
      as: 'button',
    },
  },
};

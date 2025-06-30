import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Dialog, DialogActions, DialogActivityLog, DialogAttachments, TransmissionList } from '..';
import { dialog, dialogActivityLog, transmissionHistory } from '../../../examples';

const meta: Meta<typeof Dialog> = {
  title: 'Inbox/Dialog',
  component: Dialog,
  tags: ['autodocsi', 'beta'],
  parameters: {},
  argTypes: { children: { control: 'text' } },
  args: {
    ...dialog,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <p>Summary.</p>{' '}
        <DialogAttachments
          title="2 vedlegg"
          items={[
            { label: 'Dokument 1.pdf', href: '#' },
            { label: 'Dokument 2.pdf', href: '#' },
          ]}
        />
        <DialogActions
          items={[
            { id: '1', priority: 'primary', label: 'Primær' },
            { id: '2', priority: 'secondary', label: 'Sekundær' },
          ]}
        />
      </>
    ),
  },
};

export const RequiresAttention: Story = {
  args: {
    ...dialog,
    status: { value: 'requires-attention', label: 'Krever handling' },
    updatedAt: '2025-02-14T23:27:37.383Z',
    updatedAtLabel: '15. februar 2025 kl. 08.30',
    attachmentsCount: 1,
    dueAt: '2025-05-31T21:59:59.999Z',
    dueAtLabel: 'Frist: 31. mai 2025',
    history: {
      items: [
        {
          byline: 'I dag kl 14.00',
          summary: 'Dialogen ble opprettet',
        },
      ],
    },
    children: (
      <>
        <p>Du må levere bedriftsdata innen 31. mai.</p>
        <DialogActions items={[{ id: '1', priority: 'primary', label: 'Til rapportering' }]} />
      </>
    ),
  },
};

export const InProgress: Story = {
  args: {
    ...dialog,
    sentCount: 1,
    status: { value: 'in-progress', label: 'Under arbeid' },
    updatedAt: '2025-02-14T23:27:37.383Z',
    updatedAtLabel: '20. februar 2025 kl. 00.27',
    attachmentsCount: 1,
    history: {
      items: [
        {
          children: (
            <TransmissionList
              items={[
                {
                  id: '1',
                  byline: 'Jakob Nielsen, 20. februar kl 00.27',
                  sender: { name: 'Jakob Nielsen' },
                  title: 'Bedriftsdata er sendt inn',
                  attachments: {
                    items: [
                      {
                        href: '#',
                        label: 'Bedriftsdata.pdf',
                      },
                    ],
                  },
                },
              ]}
            />
          ),
        },
        {
          byline: '15. februar 2025 kl. 08.30',
          summary: 'Dialogen ble opprettet',
        },
      ],
    },
    children: (
      <>
        <p>Bedriftsdata er mottatt. Du vil få et varsel når innsendingen er behandlet.</p>
      </>
    ),
  },
};

export const Completed: Story = {
  args: {
    sentCount: 5,
    receivedCount: 5,
    history: {
      items: [
        {
          children: (
            <TransmissionList
              items={[
                {
                  id: '2',
                  byline: 'SSB, 20. februar kl 00.27',
                  sender: dialog.sender,
                  title: 'Bedriftsdata er godkjent',
                  type: {
                    value: 'acceptance',
                    label: 'Godkjent',
                  },
                  unread: true,
                  badge: {
                    color: 'company',
                    label: 'Ny tilbakemelding',
                  },
                  attachments: {
                    items: [
                      {
                        href: '#',
                        label: 'Vedtak om godkjenning.pdf',
                      },
                    ],
                  },
                },
                {
                  id: '1',
                  byline: 'Jakob Nielsen, 20. februar kl 00.27',
                  sender: { name: 'Jakob Nielsen' },
                  title: 'Bedriftsdata er sendt inn',
                  attachments: {
                    items: [
                      {
                        href: '#',
                        label: 'Bedriftsdata.pdf',
                      },
                    ],
                  },
                },
              ]}
            />
          ),
        },
        {
          byline: '15. februar 2025 kl. 08.30',
          summary: 'Dialogen ble opprettet',
        },
      ],
      maxItems: 3,
      expandLabel: 'Vis mer',
      collapseLabel: 'Vis mindre',
    },
  },
};

export const Transmissions: Story = {
  args: {
    children: undefined,
    status: undefined,
    sentCount: 5,
    receivedCount: 5,
    badge: {
      color: 'company',
      label: '2 uleste',
    },
    history: {
      ...transmissionHistory,
      maxItems: 3,
      expandLabel: 'Vis mer',
      collapseLabel: 'Vis mindre',
    },
  },
};

export const ActivityLog = () => {
  const [activityLogOpen, setActivityLogOpen] = useState(false);

  return (
    <>
      <Dialog
        {...dialog}
        sentCount={5}
        receivedCount={5}
        history={{
          ...transmissionHistory,
          maxItems: 3,
          expandLabel: 'Vis mer',
          collapseLabel: 'Vis mindre',
        }}
        activityLog={{
          label: 'Aktivitetslogg',
          onClick: () => setActivityLogOpen(!activityLogOpen),
        }}
      />
      <DialogActivityLog
        {...dialogActivityLog}
        title={dialog.title}
        open={activityLogOpen}
        onClose={() => setActivityLogOpen(false)}
      />
    </>
  );
};

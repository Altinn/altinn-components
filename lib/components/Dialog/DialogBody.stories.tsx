import type { Meta, StoryObj } from '@storybook/react';
import { DialogActions, DialogAttachments, DialogBody } from '..';

const meta = {
  title: 'Dialog/DialogBody',
  component: DialogBody,
  tags: ['beta'],
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

    updatedAt: '1999-05-26 22:59:00',
    updatedAtLabel: '25. mai 1999 kl 22.59',
    children: <p>A summary of the dialog.</p>,
    seenBy: {
      as: 'button',
      seenByEndUser: true,
      label: 'Sett av deg',
    },
    activityLog: {
      as: 'button',
      label: 'Aktivitetslogg',
    },
  },
} satisfies Meta<typeof DialogBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  tags: ['skip-test'],
};

export const ExtendedContent: Story = {
  args: {
    children: (
      <>
        <p>
          <strong>Sander Svendsen</strong> er sykmeldt i 4 dager fra 2. juli–5. juli 2024. Du må oppgi nærmeste leder.
        </p>
        <h6>Ansvarlig lege</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Nærmeste leder</h6>
        <p>Ikke oppgitt.</p>
      </>
    ),
  },
};

export const WithAttachments: Story = {
  args: {
    children: (
      <>
        <p>A summary of the dialog.</p>
        <DialogAttachments
          title="2 attachments"
          items={[
            { href: '#', label: 'Document 1.pdf' },
            { href: '#', label: 'Document 2.pdf' },
          ]}
        />
      </>
    ),
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <>
        <p>A summary of the dialog.</p>
        <DialogActions
          items={[
            { id: '1', priority: 'primary', label: 'Primary CTA' },
            { id: '2', priority: 'secondary', label: 'Secondary' },
          ]}
        />
      </>
    ),
  },
};

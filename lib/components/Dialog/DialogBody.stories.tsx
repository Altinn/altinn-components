import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogActions, DialogAttachments, DialogBody } from '..';

const meta = {
  title: 'Inbox/Dialog/DialogBody',
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
      name: 'Recipient name',
    },
    children: <p>Dialog summary.</p>,
    seenByLog: {
      collapsible: true,
      title: 'Sett av deg+3',
      items: [
        {
          id: '1',
          type: 'person',
          name: 'Felix Horn Myhre',
          seenAt: '2025-01-01 08:30',
          seenAtLabel: '1. januar kl 08.30',
        },
        {
          id: '2',
          type: 'person',
          name: 'Mathias Dyngeland',
          isEndUser: true,
          seenAt: '2025-02-03 08:45',
          seenAtLabel: '6. januar kl 08.45',
        },
        {
          id: '3',
          type: 'person',
          name: 'Aune Heggebø',
          seenAt: '2025-04-15 11:22',
          seenAtLabel: '15. april kl 11.22',
        },
      ],
    },
  },
} satisfies Meta<typeof DialogBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <p>Dialog summary.</p>
        <DialogAttachments title="1 attachment" items={[{ href: '#', label: 'Document.pdf' }]} />
        <DialogActions
          items={[
            { id: '1', priority: 'primary', label: 'Primary' },
            { id: '2', priority: 'secondary', label: 'Secondary' },
          ]}
        />
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  tags: ['skip-test'],
};

export const Summary: Story = {
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

export const ExtendedContent: Story = {
  args: {
    children: (
      <>
        <p>Dialog summary.</p>
        <h6>Header 6</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Header 6</h6>
        <p>Ikke oppgitt.</p>
      </>
    ),
  },
};

export const WithAttachments: Story = {
  args: {
    children: (
      <>
        <p>Dialog summary.</p>
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

export const WithAttachmentsMetadata: Story = {
  args: {
    children: (
      <>
        <p>Dialog summary.</p>
        <DialogAttachments
          title="4 attachments"
          items={[
            {
              href: '#',
              label: 'Short document.pdf',
              metadata: 'PDF, 2.3 MB',
              badge: { variant: 'outline', label: 'Utløper om 2 uker' },
            },
            {
              href: '#',
              label: 'A long document title that it will wrap mulitple lines.pdf',
              metadata: 'PDF, 2.3 MB',
              badge: {
                variant: 'outline',
                label: 'Utløper om 2 uker',
                color: 'neutral',
              },
            },
            {
              href: '#',
              metadata: 'PDF, 1.5 MB',
              label: 'Another document with a ridicoulous title that should wrap multiple lines.pdf',
            },
            {
              disabled: true,
              href: '#',
              metadata: 'PDF, 1.5 MB',
              label: 'Disabled document.pdf',
              badge: { variant: 'tinted', label: 'Utløpt', color: 'neutral' },
            },
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
        <p>Dialog summary.</p>
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

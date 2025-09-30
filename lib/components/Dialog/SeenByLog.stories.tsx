import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button, List, ModalBase, ModalBody, ModalHeader, SeenByLog, type SeenByLogProps, Transmission } from '../';
import { skatt } from '../../../examples/avatar';

const meta = {
  title: 'Inbox/Dialog/SeenByLog',
  component: SeenByLog,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    title: 'Sett av deg+4',
    endUserLabel: 'Deg',
    items: [
      {
        id: '5',
        type: 'person',
        name: 'Joachim Soltvedt',
        seenAt: '2025-05-17 08:15',
        seenAtLabel: '17. mai kl 08.15',
      },
      {
        id: '4',
        type: 'person',
        name: 'Freyr Alexandersson',
        seenAt: '2025-04-15 12:25',
        seenAtLabel: '16. april kl 12.25',
      },
      {
        id: '3',
        type: 'person',
        name: 'Aune Heggebø',
        seenAt: '2025-04-15 11:22',
        seenAtLabel: '15. april kl 11.22',
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
        id: '1',
        type: 'person',
        name: 'Felix Horn Myhre',
        seenAt: '2025-01-01 08:30',
        seenAtLabel: '1. januar kl 08.30',
      },
    ],
  },
} satisfies Meta<typeof SeenByLog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsible: Story = {
  args: {
    collapsible: true,
  },
};

export const NoTitle: Story = {
  args: {
    title: undefined,
  },
};

export const SeenByLogModal = (args: SeenByLogProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Hvem har sett dialogen?" onClose={onClose} />
        <ModalBody>
          <SeenByLog items={args.items} size="md" />
        </ModalBody>
      </ModalBase>
    </>
  );
};

export const TransmissionSeenBy = (args: SeenByLogProps) => {
  return (
    <List>
      <Transmission
        id="1"
        seenByLog={{ ...args, collapsible: true }}
        sender={skatt}
        title="Forsendelsen er godkjent."
        type={{ value: 'acceptance', label: 'Godkjent' }}
        attachments={{
          items: [
            {
              href: '#',
              label: 'Dokument 1.pdf',
            },
            {
              href: '#',
              label: 'Dokument 2.pdf',
            },
          ],
        }}
      >
        <p>Forsendelsen din er godkjent.</p>
      </Transmission>
    </List>
  );
};

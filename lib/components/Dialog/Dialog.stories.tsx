import { ChatIcon, PencilIcon, PhoneIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { dialogContextMenu } from '../../../examples';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog/Dialog',
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
    updatedAt: '2024-11-25 15:30',
    updatedAtLabel: '25. november 1999 kl 15.30',
    title: 'Tittel',
    summary: 'En oppsummering av dialogen så langt.',
    additionalInfo: {
      title: 'Mer informasjon',
      children: <p>Lorem ipsum dolor sit amet.</p>,
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    attachments: {
      title: '1 vedlegg',
      items: [
        {
          href: '#',
          label: 'Dokument.pdf',
        },
      ],
    },
    actions: [
      {
        id: '1',
        priority: 'primary',
        label: 'Primær',
      },
      {
        id: '2',
        priority: 'secondary',
        label: 'Sekundær',
      },
    ],
  },
};

export const ContactInfo: Story = {
  args: {
    contactInfo: {
      title: 'Trenger du hjelp?',
      description: 'Kontakt Skatteetaten mellom kl 08–16.',
      items: [
        {
          icon: ChatIcon,
          label: 'Chat med oss',
        },
        {
          icon: PhoneIcon,
          label: 'Ring 800 80 000',
        },
        {
          icon: PencilIcon,
          label: 'Skriv til oss',
        },
      ],
    },
  },
};

export const RequiresAttention: Story = {
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling',
    },
    actions: [
      {
        id: '1',
        priority: 'primary',
        label: 'Til signering',
      },
    ],
  },
};

export const MultipleAttachments: Story = {
  args: {
    attachments: {
      title: '5 vedlegg',
      items: [
        {
          href: '#',
          label: 'Dokument 1.pdf',
        },
        {
          href: '#',
          label: 'Dokument 2.pdf',
        },
        {
          href: '#',
          label: 'Dokument 3.pdf',
        },
        {
          href: '#',
          label: 'Dokument 4.pdf',
        },
        {
          href: '#',
          label: 'Dokument 5.pdf',
        },
      ],
    },
  },
};

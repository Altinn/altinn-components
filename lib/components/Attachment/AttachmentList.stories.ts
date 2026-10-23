import { PadlockLockedIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { attachments } from '../../../examples/attachments.tsx';
import type { AttachmentLinkProps } from './AttachmentLink.tsx';
import { AttachmentList } from './AttachmentList';

const meta = {
  title: 'Typography/AttachmentList',
  component: AttachmentList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    items: attachments,
  },
} satisfies Meta<typeof AttachmentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const restrictedAttachments: AttachmentLinkProps[] = [
  {
    label: '4-1 Castro',
    href: '4-1 Castro.pdf',
    metadata: 'PDF',
    disabled: true,
    badge: {
      variant: 'subtle',
      color: 'neutral',
      label: 'Utløpt',
    },
  },
  {
    label: '4-1 Castro',
    href: '',
    metadata: 'PDF',
    icon: PadlockLockedIcon,
    disabled: true,
    badge: {
      variant: 'subtle',
      color: 'neutral',
      label: 'Ikke tilgang',
    },
  },
  {
    label: '4-1 Castro',
    href: '',
    metadata: 'PDF',
    disabled: false,
    badge: {
      color: 'warning',
      label: 'Utløper om 2 uker',
    },
  },
];

export const RestrictedAccess: Story = {
  args: {
    items: restrictedAttachments,
  },
};

export const Default: Story = {
  args: {},
};

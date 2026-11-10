import { PadlockLockedIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { attachments } from '../../../examples/attachments.tsx';
import type { AttachmentLinkProps } from './AttachmentLink.tsx';
import { AttachmentList } from './AttachmentList';

const restrictedAttachments: AttachmentLinkProps[] = [
  {
    label: '5-0 Berg',
    href: '5-0 Berg.pdf',
    metadata: 'PDF',
    disabled: true,
    badge: {
      variant: 'subtle',
      color: 'neutral',
      label: 'Utløpt',
    },
  },
  {
    label: '5-1 Dahl',
    href: '5-1 Dahl.pdf',
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
    label: '5-2 Eriksen',
    href: '5-2 Eriksen.pdf',
    metadata: 'PDF',
    disabled: false,
    badge: {
      color: 'warning',
      label: 'Utløper om 2 uker',
    },
  },
];

const meta = {
  title: 'Typography/AttachmentList',
  component: AttachmentList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    items: [...attachments, ...restrictedAttachments],
  },
} satisfies Meta<typeof AttachmentList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Regular attachments followed by expired, inaccessible and soon-to-expire ones. */
export const Default: Story = {
  args: {},
};

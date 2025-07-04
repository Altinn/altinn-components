import type { Meta, StoryObj } from '@storybook/react-vite';
import { SeenByLogItem } from './SeenByLogItem';

const meta = {
  title: 'Inbox/Dialog/SeenByLogItem',
  component: SeenByLogItem,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    id: '1',
    type: 'person',
    name: 'Felix Horn Myhre',
    seenAt: '2025-01-01 08:30',
    seenAtLabel: '1. januar kl 08.30',
  },
} satisfies Meta<typeof SeenByLogItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const EndUser: Story = {
  args: { isEndUser: true, endUserLabel: 'Deg' },
};

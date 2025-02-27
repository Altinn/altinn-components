import type { Meta, StoryObj } from '@storybook/react';
import { dialogActivityLogItems, dialogHistoryItems } from '../../../examples';
import { DialogHistory } from './DialogHistory';

const meta = {
  title: 'Dialog/DialogHistory',
  component: DialogHistory,
  tags: ['beta'],
  parameters: {},
  args: {
    items: dialogHistoryItems,
  },
} satisfies Meta<typeof DialogHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ActivityLog: Story = {
  args: {
    items: dialogActivityLogItems,
  },
};

export const Collapsible: Story = {
  args: {
    expandLabel: 'Vis historikk',
    collapseLabel: 'Skjul historikk',
    collapsible: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { dialogHistoryItems } from '../../../examples';
import { DialogHistory } from './DialogHistory';

const meta = {
  title: 'Dialog/DialogHistory',
  component: DialogHistory,
  tags: ['autodocs'],
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

export const Collapsible: Story = {
  args: {
    collapsible: true,
    expandLabel: 'Vis historikk',
    collapseLabel: 'Skjul historikk',
  },
};

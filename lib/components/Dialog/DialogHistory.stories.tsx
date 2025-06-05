import type { Meta, StoryObj } from '@storybook/react-vite';
import { dialogActivityLog, transmissionHistory } from '../../../examples';
import { DialogHistory } from './DialogHistory';

const meta = {
  title: 'Inbox/Dialog/DialogHistory',
  component: DialogHistory,
  tags: ['beta', 'skip-test'],
  parameters: {},
  args: {
    ...transmissionHistory,
    expandLabel: 'Vis historikk',
    collapseLabel: 'Skjul historikk',
  },
} satisfies Meta<typeof DialogHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { collapsible: true },
};

export const CollapsibleExpanded: Story = {
  args: {
    expanded: true,
    collapsible: true,
  },
};

export const ItemExpanded: Story = {
  args: {
    items: transmissionHistory.items.map((item, index) => {
      return {
        ...item,
        expanded: !index,
      };
    }),
    collapsible: true,
  },
};

export const EverythingExpanded: Story = {
  args: {
    ...transmissionHistory,
    expanded: true,
  },
};

export const ActivityLog: Story = {
  args: dialogActivityLog,
};

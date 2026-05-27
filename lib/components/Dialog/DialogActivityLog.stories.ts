import type { Meta, StoryObj } from '@storybook/react-vite';
import { dialog, dialogActivityLog } from '../../../examples';
import { DialogActivityLog } from './DialogActivityLog.tsx';

const meta = {
  title: 'Inbox/Dialog/DialogActivityLog',
  component: DialogActivityLog,
  tags: [],
  args: {
    ...dialogActivityLog,
    title: dialog.title,
  },
} satisfies Meta<typeof DialogActivityLog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {
      alert('Close activityLog');
    },
  },
};

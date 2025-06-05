import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogTouchedBy } from './DialogTouchedBy';

const meta = {
  title: 'Inbox/Dialog/DialogTouchedBy',
  component: DialogTouchedBy,
  tags: ['autodocsi', 'beta'],
  parameters: {},
  args: {
    touchedBy: [
      {
        name: 'Donald Duck',
      },
      {
        name: 'Pelle Khan',
      },
      {
        name: 'Langbein',
      },
    ],
  },
} satisfies Meta<typeof DialogTouchedBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

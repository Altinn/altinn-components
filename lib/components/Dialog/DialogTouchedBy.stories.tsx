import type { Meta, StoryObj } from '@storybook/react';
import { DialogTouchedBy } from './DialogTouchedBy';

const meta = {
  title: 'Dialog/Atoms/DialogTouchedBy',
  component: DialogTouchedBy,
  tags: ['autodocs'],
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

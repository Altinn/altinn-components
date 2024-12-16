import type { Meta, StoryObj } from '@storybook/react';
import { DialogSeenBy } from './DialogSeenBy';

const meta = {
  title: 'Dialog/DialogSeenBy',
  component: DialogSeenBy,
  tags: ['autodocs'],
  parameters: {},
  args: {
    seenByEndUser: true,
    seenByOthersCount: 2,
    label: '',
  },
} satisfies Meta<typeof DialogSeenBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unseen: Story = {
  args: {
    seenByEndUser: false,
    seenByOthersCount: 0,
  },
};

export const seenByEndUser: Story = {
  args: {
    seenByEndUser: true,
    seenByOthersCount: 0,
  },
};

export const seenByEndUserAndOthers: Story = {
  args: {
    seenByEndUser: true,
    seenByOthersCount: 10,
  },
};

export const ExampleLabel = ({
  seenByEndUser,
  seenByOthersCount,
}: { seenByEndUser: boolean; seenByOthersCount: number }) => {
  const seenByLabel = [];

  if (seenByEndUser) {
    seenByLabel.push('deg');
  }

  if (seenByOthersCount) {
    seenByLabel.push(seenByOthersCount);
  }

  const label = 'Sett av ' + seenByLabel.join('+');
  return <DialogSeenBy seenByEndUser={seenByEndUser} seenByOthersCount={seenByOthersCount} label={label} />;
};

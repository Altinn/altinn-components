import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import { DialogSeenBy } from './DialogSeenBy';

const meta = {
  title: 'Dialog/DialogSeenBy',
  component: DialogSeenBy,
  tags: ['autodocs'],
  parameters: {},
  args: {
    seenByEndUser: true,
    seenByOthersCount: 2,
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

export const ExampleLabel = ({ seenByEndUser, seenByOthersCount }) => {
  let seen = false;
  const seenByLabel = [];

  if (seenByEndUser) {
    seen = true;
    seenByLabel.push('deg');
  }

  if (seenByOthersCount) {
    seen = true;
    seenByLabel.push(seenByOthersCount);
  }

  const label = 'Sett av ' + seenByLabel.join('+');
  return <DialogSeenBy seenByEndUser={seenByEndUser} seenByOthersCount={seenByOthersCount} label={label} />;
};

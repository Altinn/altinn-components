import type { Meta, StoryObj } from '@storybook/react';
import { accounts, dialogs } from './';
import { Inbox } from './Inbox';

const meta = {
  title: 'Demo/Inbox/Inbox',
  component: Inbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    inboxId: 'inbox',
    accounts,
    accountId: 'a0',
    dialogs,
  },
} satisfies Meta<typeof Inbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const BulkMode: Story = {
  args: {
    selectedIds: ['d1'],
  },
};

export const DialogOpen: Story = {
  args: {
    dialogId: 'd1',
  },
};

export const SavedSearches: Story = {
  args: {
    inboxId: 'bookmarks',
  },
};

export const ProfilePage: Story = {
  args: {
    inboxId: 'profile',
  },
};

export const SettingsPage: Story = {
  args: {
    inboxId: 'settings',
  },
};

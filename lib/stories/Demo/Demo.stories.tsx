import type { Meta, StoryObj } from '@storybook/react';
import { App } from './';
import { accounts } from './data';

const meta = {
  title: 'Demo',
  component: App,
  tags: ['autodocs', 'beta'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accounts,
    pageId: 'docs',
  },
};

export const DocsElements: Story = {
  args: {
    accounts,
    pageId: 'docs/elements',
  },
};

export const Inbox: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'inbox',
  },
};

export const InboxBulk: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'inbox',
    selectedIds: ['inbox/inbox/1', 'inbox/inbox/2'],
  },
};

export const InboxDialog: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'inbox/inbox/1',
  },
};

export const InboxBookmarks: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'inbox/bookmarks',
  },
};

export const User: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user',
  },
};

export const UserSettings: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user/settings',
  },
};

export const UserNotifications: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user/notifications',
  },
};

export const UserAccounts: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user/accounts',
  },
};

export const UserAccountsDetails: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user/accounts/id',
  },
};

export const UserLog: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user/log',
  },
};

export const Company: Story = {
  args: {
    accounts,
    accountId: accounts[1].id,
    pageId: 'company',
  },
};

export const CompanySettings: Story = {
  args: {
    accounts,
    accountId: accounts[1].id,
    pageId: 'company/settings',
  },
};

export const CompanyUsers: Story = {
  args: {
    accounts,
    accountId: accounts[1].id,
    pageId: 'company/users',
  },
};

export const CompanyUserAdmin: Story = {
  args: {
    accounts,
    accountId: accounts[1].id,
    pageId: 'company/users/id',
  },
};

export const CompanyLog: Story = {
  args: {
    accounts,
    accountId: accounts[1].id,
    pageId: 'company/log',
  },
};

export const Categories: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'category',
  },
};

export const CategorySection: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'category/personale',
  },
};

export const CategoryPage: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'category/personale/lonn',
  },
};

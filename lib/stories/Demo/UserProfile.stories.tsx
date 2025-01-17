import type { Meta, StoryObj } from '@storybook/react';
import { App } from './';
import { accounts } from './data';

const meta = {
  title: 'Demo/UserProfile',
  component: App,
  tags: ['autodocs', 'beta'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user',
  },
};

export const Settings: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user/settings',
  },
};

export const ActivityLog: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user/log',
  },
};


/*

export const NotificationSettings: Story = {
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

*/
import type { Meta, StoryObj } from '@storybook/react';
import { App } from './App';
import { accounts } from './data';

const meta = {
  title: 'Demo/Navigation',
  component: App,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'global',
  },
};

export const Categories: Story = {
  args: {
    theme: 'global',
    accounts,
    accountId: accounts[0].id,
    pageId: 'category',
  },
};

export const CategorySection: Story = {
  args: {
    theme: 'global',
    accounts,
    accountId: accounts[0].id,
    pageId: 'category/personale',
  },
};

export const CategoryPage: Story = {
  args: {
    theme: 'global',
    accounts,
    accountId: accounts[0].id,
    pageId: 'category/personale/lonn',
  },
};

export const UserInbox: Story = {
  args: {
    theme: 'person',
    accounts,
    accountId: accounts[0].id,
    pageId: 'inbox',
  },
};

export const UserDialog: Story = {
  args: {
    theme: 'person',
    accounts,
    accountId: accounts[0].id,
    pageId: 'inbox/inbox/1',
  },
};

export const UserBookmarks: Story = {
  args: {
    theme: 'person',
    accounts,
    accountId: accounts[0].id,
    pageId: 'inbox/bookmarks',
  },
};

export const UserProfile: Story = {
  args: {
    theme: 'person',
    accounts,
    accountId: accounts[0].id,
    pageId: 'profile',
  },
};

export const CompanyInbox: Story = {
  args: {
    theme: 'company',
    accounts,
    accountId: accounts[1].id,
    pageId: 'inbox',
  },
};

export const CompanyProfile: Story = {
  args: {
    theme: 'company',
    accounts,
    accountId: accounts[1].id,
    pageId: 'profile',
  },
};

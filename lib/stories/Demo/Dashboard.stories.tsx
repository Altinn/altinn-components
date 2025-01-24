import type { Meta, StoryObj } from '@storybook/react';
import { App } from './';
import { accounts } from './data';

const meta = {
  title: 'Demo/Dashboard',
  component: App,
  tags: ['autodocs', 'beta', 'skip-test'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: 'user',
  },
};

export const Company: Story = {
  args: {
    accounts,
    accountId: accounts[1].id,
    pageId: 'company',
  },
};

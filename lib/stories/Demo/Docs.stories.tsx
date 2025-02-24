import type { Meta, StoryObj } from '@storybook/react';
import { App } from './';
import { accounts } from './data';

const meta = {
  title: 'Demo',
  component: App,
  tags: ['autodocs', 'beta', 'skip-test'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const About: Story = {
  args: {
    accounts,
    pageId: 'docs',
  },
};

export const GlobalLayout: Story = {
  args: {
    accounts,
    pageId: 'docs/layout',
  },
};

export const BuildingPages: Story = {
  args: {
    accounts,
    pageId: 'docs/pages',
  },
};

export const Elements: Story = {
  args: {
    accounts,
    pageId: 'docs/elements',
  },
};

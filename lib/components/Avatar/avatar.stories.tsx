import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './';
import {expect, within} from "@storybook/test";

const meta = {
  title: 'Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs', 'stable'],
  parameters: {},
  args: {
    name: 'Jane Doe',
    type: 'person',
    size: 'xl',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Person: Story = {
  args: {
    type: 'person',
    name: 'Jane Doe',
    size: 'xl',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const initial = canvas.getByText('J');
    await expect(initial).toBeInTheDocument();
  },
};

export const Company: Story = {
  args: {
    type: 'company',
    name: 'Boligeksperten',
  },
};

export const Logo: Story = {
  args: {
    type: 'company',
    imageUrl: 'https://avatars.githubusercontent.com/u/1536293?s=200&v=4',
    size: 'xl',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './';

const meta = {
  title: 'Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'Jane Doe',
    type: 'person',
    variant: 'circle',
    color: 'light',
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
};

export const Company: Story = {
  args: {
    type: 'company',
    name: 'Boligeksperten',
    variant: 'square',
  },
};

export const Logo: Story = {
  args: {
    variant: 'square',
    imageUrl: 'https://avatars.githubusercontent.com/u/1536293?s=200&v=4',
    size: 'xl',
    color: 'dark',
  },
};

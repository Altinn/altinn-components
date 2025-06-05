import type { Meta, StoryObj } from '@storybook/react-vite';
import { Byline } from './Byline';

const meta = {
  title: 'Typography/Byline',
  component: Byline,
  tags: ['autodocs'],
  parameters: {},
  args: {
    datetime: '2024-12-12 11:15',
  },
} satisfies Meta<typeof Byline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '12. desember 2024 kl 11.15',
  },
};

export const Avatar: Story = {
  args: {
    avatar: {
      type: 'person',
      name: 'Per Person',
    },
    children: (
      <>
        <strong>Per Person,</strong> 12. desember 2024
      </>
    ),
  },
};

export const LargeAvatar: Story = {
  args: {
    size: 'lg',
    avatar: {
      type: 'person',
      name: 'Per Person',
    },
    children: (
      <>
        <strong>Skatteetaten</strong> til Per Person
      </>
    ),
  },
};

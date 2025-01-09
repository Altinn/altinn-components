import type { Meta, StoryObj } from '@storybook/react';

import { HeaderButton } from './HeaderButton';

const meta = {
  title: 'Layout/Header/HeaderButton',
  component: HeaderButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof HeaderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Icon: Story = {
  args: {
    icon: 'inbox',
  },
};

export const Person: Story = {
  args: {
    avatar: {
      type: 'person',
      name: 'Aurora Mikalsen',
    },
  },
};

export const Company: Story = {
  args: {
    avatar: {
      type: 'company',
      name: 'Bergen bar',
    },
    badge: {
      color: 'alert',
      label: '2',
    },
  },
};

export const CompanyGroup: Story = {
  args: {
    avatarGroup: {
      defaultType: 'company',
      items: [
        {
          name: 'Bergen bar',
        },
        {
          name: 'Sportsklubben Brann',
        },
      ],
    },
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
    avatar: {
      type: 'company',
      name: 'Bergen bar',
    },
  },
};

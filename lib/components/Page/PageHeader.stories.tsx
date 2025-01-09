import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';

const meta = {
  title: 'Page/PageHeader',
  component: PageHeader,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    title: 'Page title',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Company: Story = {
  args: {
    avatar: {
      type: 'company',
      name: 'Zero Zulu',
    },
    title: 'Zero Zulu',
  },
};

export const Person: Story = {
  args: {
    avatar: {
      name: 'Zero Zulu',
    },
    title: 'Zero Zulu',
  },
};

export const Icon: Story = {
  args: {
    icon: 'teddy-bear',
    title: 'Zero Zulu',
  },
};

export const People: Story = {
  args: {
    avatarGroup: {
      defaultType: 'person',
      items: [
        {
          name: 'Albert Åberg',
        },
        {
          name: 'Birger Meling',
        },
        {
          name: 'Celine Dion',
        },
      ],
    },
  },
};

export const Companies: Story = {
  args: {
    avatarGroup: {
      defaultType: 'company',
      items: [
        {
          name: 'Albert Åberg',
        },
        {
          name: 'Birger Meling',
        },
        {
          name: 'Celine Dion',
        },
      ],
    },
  },
};

export const CompanyAndPerson: Story = {
  args: {
    avatarGroup: {
      items: [
        {
          type: 'company',
          name: 'Albert Åberg',
        },
        {
          type: 'person',
          name: 'Birger Meling',
        },
      ],
    },
  },
};

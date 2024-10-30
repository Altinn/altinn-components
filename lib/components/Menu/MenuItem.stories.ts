import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MenuItem } from './MenuItem';

const meta = {
  title: 'Menu/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'inbox',
    title: 'Innboks',
  },
};

export const DefaultBadge: Story = {
  args: {
    icon: 'inbox',
    title: 'Innboks',
    badge: 4,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
    color: 'strong',
  },
};

export const LargeBadge: Story = {
  args: {
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
    badge: 4,
    color: 'strong',
  },
};

export const Person: Story = {
  args: {
    avatar: {
      type: 'person',
      name: 'Eirik Horneland',
    },
    title: 'Eirik Horneland',
  },
};

export const PersonGroup: Story = {
  args: {
    avatarGroup: {
      items: [
        {
          type: 'person',
          name: 'Eirik Horneland',
        },
        {
          type: 'person',
          name: 'Japhet Sery Larsen',
        },
        {
          type: 'person',
          name: 'Aune Heggebø',
        },
      ],
    },
    title: '3 personer',
  },
};

export const Company: Story = {
  args: {
    avatar: {
      type: 'company',
      name: 'Sportsklubben Brann',
    },
    title: 'Sportsklubben Brann',
  },
};

export const CompanyGroup: Story = {
  args: {
    avatarGroup: {
      type: 'company',
      items: [
        {
          name: 'Sportsklubben Brann',
        },
        {
          name: 'Bergen Næringsråd',
        },
        {
          name: 'Bergen bar',
        },
      ],
    },
    title: '3 virksomheter',
  },
};

export const PersonAccount: Story = {
  args: {
    ...Person.args,
    size: 'lg',
    description: 'Født: XX.XX.XXXX',
  },
};

export const CompanyAccount: Story = {
  args: {
    ...Company.args,
    size: 'lg',
    description: 'Org nr.: XX.XX.XXXX',
  },
};

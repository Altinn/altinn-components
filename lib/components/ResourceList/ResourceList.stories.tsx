import type { Meta, StoryObj } from '@storybook/react';
import { ResourceList } from './ResourceList';

const items = [
  {
    title: 'Utlån av bøker',
    description: 'Nasjonalbiblioteket',
    avatar: {
      name: 'Nasjonalbiblioteket',
      imageUrl: 'https://altinncdn.no/orgs/nbib/nasjonalbiblioteket.png',
      imageUrlAlt: 'nasjonalbiblioteket logo',
    },
  },
  {
    title: 'Fiskekvoter',
    description: 'Fiskeridirektoratet',
    avatar: {
      name: 'Fiskeridirektoratet',
      imageUrl: 'https://altinncdn.no/orgs/fd/fiskeridirektoratet.png',
      imageUrlAlt: 'fiskeridirektoratet logo',
    },
  },
  {
    title: 'Tolldeklarasjon',
    description: 'Toll- og avgiftsdirektoratet',
    avatar: {
      name: 'Toll- og avgiftsdirektoratet',
    },
  },
];

const meta = {
  title: 'Resource/List',
  component: ResourceList,
  tags: ['autodocs'],
  parameters: {},
  args: {
    spacing: 'md',
    items,
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    spacing: {
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof ResourceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { items },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ResourceList } from './ResourceList';

const items = [
  {
    id: '1',
    resourceName: 'Utlån',
    ownerName: 'Nasjonalbiblioteket',
    ownerLogoUrl: 'https://altinncdn.no/orgs/nbib/nasjonalbiblioteket.png',
    ownerLogoUrlAlt: 'nasjonalbiblioteket logo',
  },
  {
    id: '2',
    resourceName: 'FiskInfo',
    ownerName: 'Fiskeridirektoratet',
    ownerLogoUrl: 'https://altinncdn.no/orgs/fd/fiskeridirektoratet.png',
    ownerLogoUrlAlt: 'fiskeridirektoratet logo',
  },
  {
    id: '3',
    resourceName: 'Skattekort',
    ownerName: 'Toll- og avgiftsdirektoratet',
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

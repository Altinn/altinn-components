import type { Meta, StoryObj } from '@storybook/react';
import resources from '../../../test-data/resources.json';
import { ResourceList } from './ResourceList';

const items = resources.map((resource) => ({
  id: resource.identifier,
  ownerName: resource.ownerName ?? '',
  resourceName: resource.resourceName,
  ownerLogoUrl: resource.ownerImageUrl ?? '',
  ownerLogoUrlAlt: `${resource.ownerName} logo`,
}));

const meta = {
  title: 'Access/List/ResourceList',
  component: ResourceList,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items,
    defaultItemSize: 'md',
  },
  argTypes: {
    defaultItemSize: {
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

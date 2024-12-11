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
  title: 'List/ResourceList',
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

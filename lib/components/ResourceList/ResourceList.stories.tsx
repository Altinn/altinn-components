import type { Meta, StoryObj } from '@storybook/react';
import resources from '../../../test-data/resources.json';
import { ResourceList } from './ResourceList';
import { Size } from '../../types';

const items = (itemSize: Size) => resources.map((resource) => ({
  id: resource.identifier,
  ownerName: resource.ownerName ?? '',
  resourceName: resource.resourceName,
  ownerLogoUrl: resource.ownerImageUrl ?? '',
  ownerLogoUrlAlt: `${resource.ownerName} logo`,
  size: itemSize
}));

const meta = {
  title: 'Access/List/ResourceList',
  component: ResourceList,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    defaultItemSize: "md",
  },
  argTypes: {
    defaultItemSize: {
      options: ["xs", "sm", "md", "lg", "xl"],
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
  render: (args) => (
    <ResourceList {...args} items={items(args.defaultItemSize || 'md')} />
  ),
  args: {
    items: items('md'),
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Grid, ListItem, type ListItemProps } from '../';
import { categoryItems } from '../../../examples';

const meta = {
  title: 'Page/Grid',
  component: Grid,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    as: 'ul',
    children: (
      <>
        {categoryItems?.map((item) => (
          <ListItem {...(item as ListItemProps)} key={item?.href} linkIcon={true} />
        ))}
      </>
    ),
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    cols: 3,
    size: 'lg',
    children: (
      <>
        {categoryItems?.map((item) => (
          <ListItem
            {...(item as ListItemProps)}
            title={{ children: item.title, size: 'md', weight: 'bold' }}
            variant="subtle"
            key={item?.href}
            linkIcon={true}
          />
        ))}
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    cols: 4,
    size: 'sm',
    children: (
      <>
        {categoryItems?.map((item) => (
          <ListItem {...(item as ListItemProps)} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />
        ))}
      </>
    ),
  },
};

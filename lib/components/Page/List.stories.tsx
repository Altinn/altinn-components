import type { Meta, StoryObj } from '@storybook/react-vite';
import { List, ListItem, type ListItemProps } from '../';
import { categoryItems } from '../../../examples';

const meta = {
  title: 'Page/List',
  component: List,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    children: (
      <>
        {categoryItems?.map((item) => (
          <ListItem {...(item as ListItemProps)} key={item?.href} variant="subtle" linkIcon={true} />
        ))}
      </>
    ),
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
  },
};

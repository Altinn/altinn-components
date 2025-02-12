import type { Meta, StoryObj } from '@storybook/react';
import { ListBase, ListItem } from './';

const meta = {
  title: 'List/ListBase',
  component: ListBase,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ListBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ListItem title="Item 1" linkIcon />
        <ListItem title="Item 2" linkIcon />
        <ListItem title="Item 3" linkIcon />
      </>
    ),
  },
};

export const NonInteractive: Story = {
  args: {
    children: (
      <>
        <ListItem title="Item 1" interactive={false} />
        <ListItem title="Item 2" interactive={false} />
        <ListItem title="Item 3" interactive={false} />
      </>
    ),
  },
};

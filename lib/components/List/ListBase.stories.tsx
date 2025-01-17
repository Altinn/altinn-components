import type { Meta, StoryObj } from '@storybook/react';
import { ListBase, ListItem } from './';

const meta = {
  title: 'List/ListBase',
  component: ListBase,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: (
      <>
        <ListItem title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
      </>
    ),
  },
} satisfies Meta<typeof ListBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

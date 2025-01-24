import type { Meta, StoryObj } from '@storybook/react';
import { Flex, type SnackbarColor, SnackbarColorEnum, SnackbarItem, type SnackbarItemProps } from '..';

const meta = {
  title: 'Atoms/SnackbarItem',
  component: SnackbarItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    message: 'A message to you.',
  },
} satisfies Meta<typeof SnackbarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Colors = (args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];

  return (
    <Flex direction="col" spacing={3}>
      {colors.map((color) => (
        <SnackbarItem {...args} color={color} key={color} />
      ))}
    </Flex>
  );
};

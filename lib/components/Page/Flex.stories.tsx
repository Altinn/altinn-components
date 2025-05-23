import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../';

const meta = {
  title: 'Page/Flex',
  component: Flex,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    children: (
      <>
        <Flex style={{ backgroundColor: 'red', width: '100%' }}>1</Flex>
        <Flex style={{ backgroundColor: 'green', width: '100%' }}>2</Flex>
        <Flex style={{ backgroundColor: 'blue', width: '100%' }}>3</Flex>
      </>
    ),
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Size: Story = {
  args: {
    size: 'xl',
  },
};

export const Spacing: Story = {
  args: {
    spacing: 'lg',
  },
};

export const Column: Story = {
  args: { direction: 'col' },
};

export const ColumnSpacing: Story = {
  args: { direction: 'col', spacing: 'md' },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressIcon } from './ProgressIcon';

const meta = {
  title: 'Components/Icon/ProgressIcon',
  component: ProgressIcon,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ProgressIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
  },
};

export const Progress25: Story = {
  args: {
    value: 25,
  },
};

export const Progress50: Story = {
  args: {
    value: 50,
  },
};

export const Progress75: Story = {
  args: {
    value: 75,
  },
};

export const Progress100: Story = {
  args: {
    value: 100,
  },
};

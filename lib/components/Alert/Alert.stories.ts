import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'info',
    heading: 'Info',
    message: 'This is an info alert',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    heading: 'Success',
    message: 'This is a success alert',
  },
};

export const Warning: Story = {
  args: {
    heading: 'Warning',
    message: 'This is a warning alert',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    heading: 'Danger',
    message: 'This is a danger alert',
    variant: 'danger',
  },
};

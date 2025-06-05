import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from './TextField';

const meta = {
  title: 'Forms/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

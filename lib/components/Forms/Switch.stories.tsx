import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'switch',
    value: '1',
    label: 'Switch',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

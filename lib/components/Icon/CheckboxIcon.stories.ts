import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxIcon } from './CheckboxIcon';

const meta = {
  title: 'Components/Icon/CheckboxIcon',
  component: CheckboxIcon,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof CheckboxIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Hover: Story = {
  args: {
    checked: false,
    hover: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

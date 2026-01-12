import type { Meta, StoryObj } from '@storybook/react-vite';
import { Datepicker } from './Datepicker';

const meta: Meta<typeof Datepicker> = {
  title: 'Next/Datepicker',
  component: Datepicker,
  tags: ['autodocs'],
  parameters: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

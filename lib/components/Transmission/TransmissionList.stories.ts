import type { Meta, StoryObj } from '@storybook/react';
import { transmissionList } from '../../../examples';
import { TransmissionList } from './TransmissionList';

const meta = {
  title: 'Transmission/TransmissionList',
  component: TransmissionList,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    items: transmissionList,
  },
} satisfies Meta<typeof TransmissionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

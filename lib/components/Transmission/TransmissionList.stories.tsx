import type { Meta, StoryObj } from '@storybook/react-vite';
import { TransmissionList, type TransmissionListProps } from '..';
import { transmissions } from '../../../examples';

const meta = {
  title: 'Inbox/TransmissionList',
  component: TransmissionList,
  tags: ['beta'],
  parameters: {},
  args: {
    items: transmissions as TransmissionListProps['items'],
  },
} satisfies Meta<typeof TransmissionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Outgoing: Story = {
  args: {
    items: transmissions.filter((item) => item?.type?.value === 'submission') as TransmissionListProps['items'],
  },
};

export const Incoming: Story = {
  args: {
    items: transmissions.filter((item) => item?.type?.value !== 'submission') as TransmissionListProps['items'],
  },
};

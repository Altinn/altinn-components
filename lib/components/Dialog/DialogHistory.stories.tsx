import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogHistory, TransmissionList } from '..';
import { transmissions } from '../../../examples';

const meta = {
  title: 'Inbox/Dialog/DialogHistory',
  component: DialogHistory,
  tags: ['beta', 'skip-test'],
  parameters: {},
  args: {
    expandLabel: 'Vis flere detaljer',
    collapseLabel: 'Skjul detajer',
  },
} satisfies Meta<typeof DialogHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        byline: 'I dag kl 12:00',
        datetime: '2023-10-01T12:00:00Z',
        summary: 'Dialogen ble opprettet.',
      },
    ],
  },
};

export const Transmissions: Story = {
  args: {
    items: [
      {
        id: '3',
        children: <TransmissionList items={[transmissions[1], transmissions[2]]} />,
      },
      {
        id: '2',
        children: <TransmissionList items={[transmissions[1], transmissions[0]]} />,
      },

      {
        id: '3',
        children: <TransmissionList items={[transmissions[1], transmissions[2]]} />,
      },
      {
        id: '4',
        children: <TransmissionList items={[transmissions[1], transmissions[0]]} />,
      },

      {
        id: '5',
        children: <TransmissionList items={[transmissions[1], transmissions[2]]} />,
      },
      {
        id: '6',
        children: <TransmissionList items={[transmissions[1], transmissions[0]]} />,
      },
    ],
    maxItems: 2,
  },
};

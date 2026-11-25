import type { Meta, StoryObj } from '@storybook/react-vite';
import { TransmissionList, type TransmissionListProps } from '..';
import { transmissions } from '../../../examples';

const meta = {
  title: 'Inbox/TransmissionList',
  component: TransmissionList,
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

/** A transmission the user isn't allowed to see. It keeps its date, but shows only `hiddenLabel` and can't be expanded. */
export const WithHiddenTransmission: Story = {
  args: {
    items: [
      ...(transmissions.slice(0, 1) as TransmissionListProps['items']),
      {
        id: 'hidden',
        byline: '4. oktober 2026 kl. 08.17',
        hiddenLabel: 'Forsendelse du ikke har tilgang til å se.',
      },
    ],
  },
};

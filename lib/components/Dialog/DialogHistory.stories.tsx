import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { DialogHistory, SeenByLog, TransmissionList } from '..';
import { seenByLog, transmissions } from '../../../examples';

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

export const TransmissionsUnread = () => {
  const [read, setRead] = useState<string[]>([]);

  const RenderChild = ({
    id,
    children,
  }: {
    id: string;
    children?: React.ReactNode;
  }) => {
    useEffect(() => {
      setRead((prev) => [...prev, id]);
    }, [id]);

    return children;
  };

  const list = [
    transmissions[1],
    transmissions[0],
    transmissions[1],
    transmissions[0],
    transmissions[1],
    transmissions[0],
  ].map((item, index) => {
    const id = 't' + index;
    return {
      ...item,
      unread: item.unread && !read.includes(id),
      children: (
        <RenderChild id={id}>
          <p>Åpnet</p>
        </RenderChild>
      ),
      id,
    };
  });

  const items = [
    {
      id: '3',
      unread: list[0].unread,
      children: <TransmissionList items={[list[0], list[1]]} />,
    },
    {
      id: '2',
      unread: list[2].unread,
      children: <TransmissionList items={[list[2], list[3]]} />,
    },

    {
      id: '3',
      unread: list[4].unread,
      children: <TransmissionList items={[list[4], list[5]]} />,
    },
  ];

  return <DialogHistory items={items} />;
};

export const MultipleActivities: Story = {
  args: {
    items: [
      {
        byline: 'I dag kl 12:00',
        datetime: '2023-10-01T12:00:00Z',
        summary: 'Dialogen ble slettet.',
      },
      {
        id: '1',
        items: [
          {
            byline: 'I dag kl 12:00',
            datetime: '2023-10-01T12:00:00Z',
            summary: 'Dialogen ble slettet.',
          },
          {
            children: <TransmissionList items={[transmissions[1], transmissions[2]]} />,
          },
          {
            byline: 'Kl 10:00',
            datetime: '2023-10-01T12:00:00Z',
            summary: 'Dialogen ble opprettet.',
          },
          {
            children: <SeenByLog {...seenByLog} />,
          },
        ],
      },
      {
        byline: 'I dag kl 12:00',
        datetime: '2023-10-01T12:00:00Z',
        summary: 'Dialogen ble opprettet.',
      },
    ],
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';

import { DialogListItem } from './DialogListItem';
import { DialogStatusEnum } from './DialogStatus';

import { ListBase } from '../List';
import { MetaItem } from '../Meta';

const getStatusLabel = (value) => {
  switch (value) {
    case 'draft':
      return 'Utkast';
    case 'sent':
      return 'Sendt';
    case 'requires-attention':
      return 'Krever handling';
    case 'in-progress':
      return 'Under arbeid';
    case 'completed':
      return 'Avsluttet';
    default:
      return '';
  }
};

const sizes = ['lg', 'md', 'sm', 'xs'];
const statuslist = Object.keys(DialogStatusEnum)?.map((value) => {
  return {
    value,
    label: getStatusLabel(value),
  };
});

const meta = {
  title: 'Dialog/DialogListItem',
  component: DialogListItem,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
  args: {
    title: 'Title',
    summary: 'Summary',
    sender: {
      type: 'company',
      name: 'Sender name',
    },
    recipient: {
      type: 'person',
      name: 'Recipient name',
    },
    status: {
      value: 'completed',
    },
  },
} satisfies Meta<typeof DialogListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const selectable: Story = {
  args: {
    select: {
      checked: false,
    },
  },
};

export const selected: Story = {
  args: {
    selected: true,
    select: {
      checked: true,
    },
  },
};

export const seenByEndUser: Story = {
  args: {
    seenByEndUser: true,
  },
};

export const TouchedBy: Story = {
  args: {
    touchedBy: [
      {
        name: 'Lars',
      },
      {
        name: 'Trine',
      },
    ],
  },
};

export const Draft: Story = {
  args: {
    status: {
      value: 'draft',
    },
  },
};

export const Sent: Story = {
  args: {
    status: {
      value: 'sent',
    },
  },
};

export const RequiresAttention: Story = {
  args: {
    status: {
      value: 'requires-attention',
    },
  },
};

export const InProgress: Story = {
  args: {
    status: {
      value: 'in-progress',
    },
  },
};

export const Completed: Story = {
  args: {
    status: {
      value: 'completed',
    },
  },
};

export const GroupedView: Story = {
  args: {
    grouped: true,
  },
};

export const LongSummary: Story = {
  args: {
    title: 'Long summary',
    summary:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.',
  },
};

export const LongTitle: Story = {
  args: {
    title:
      'Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    summary: 'Short summary.',
  },
};

export const SelectableSelected = (args) => {
  const [items, setItems] = useState({
    1: {
      id: '1',
      title: 'Item 1',
      selected: true,
    },
    2: {
      id: '2',
      title: 'Item 2',
      selected: false,
    },
    3: {
      id: '3',
      title: 'Item 2',
      selected: false,
    },
  });

  const onSelect = ({ id }) => {
    setItems((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          selected: !prevState[id].selected,
        },
      };
    });
  };

  return (
    <ListBase>
      {Object.values(items)?.map((item) => {
        return (
          <Fragment key={item?.id}>
            <DialogListItem
              {...args}
              title={item.title}
              onClick={item.selected ? () => onSelect(item) : null}
              selected={item.selected}
              select={{ checked: item?.selected, onChange: () => onSelect(item) }}
            />
            <MetaItem>selected:{item.selected ? 'true' : 'false'}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Statuses = (args) => {
  return (
    <ListBase>
      {statuslist?.map((status) => {
        return (
          <Fragment key={status?.value}>
            <DialogListItem {...args} status={status} />
            <MetaItem>{status?.value}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Sizes = (args) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <DialogListItem {...args} size={size} />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

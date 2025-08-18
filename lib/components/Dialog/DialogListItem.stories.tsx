import type { Meta } from '@storybook/react-vite';
import { Fragment, useState } from 'react';
import { contextMenu, seenByLog } from '../../../examples';
import { skatt } from '../../../examples/avatar';

import { ContextMenu, DialogListItem, type DialogListItemProps, type DialogListItemSize, ListItemSelect } from '..';

import { List } from '../List';
import { MetaItem } from '../Metadata';

const sizes = ['xl', 'lg', 'md', 'sm', 'xs'] as DialogListItemSize[];

const meta = {
  title: 'Inbox/DialogListItem',
  component: DialogListItem,
  tags: ['autodocsi', 'beta'],
  argTypes: {},
  args: {
    title: 'Title',
    summary: 'Summary',
    sender: skatt,
    recipient: {
      type: 'person',
      name: 'Recipient name',
    },
    updatedAt: '2024-11-25 15:30',
    updatedAtLabel: '25. november 2024 kl 15.30',
    status: {},
  },
  decorators: [
    (Story) => (
      <List>
        <Story />
      </List>
    ),
  ],
} satisfies Meta<typeof DialogListItem>;

export default meta;

export const Default = {
  args: {},
};

export const Unread = {
  args: {
    unread: true,
    badge: { label: 'Ny' },
  },
};

export const SeenByEndUser = {
  args: {
    seenByLog: {
      title: 'Sett av bruker',
      items: [
        {
          id: '1',
          name: 'John Doe',
          seenAt: '2024-11-25 15:30',
          seenAtLabel: '25. november 2024 kl 15.30',
          isEndUser: true,
        },
      ],
    },
  },
};

export const SeenByMultiple = {
  args: {
    seenByLog,
  },
};

export const UnopenedContent = {
  args: {
    seenByLog,
    badge: { label: 'Uåpnet innhold' },
  },
};

export const MarkedAsUnread = {
  args: {
    seenByLog,
    unread: true,
  },
};

export const GroupedAvatars = {
  args: {
    grouped: true,
  },
};

export const RequiresAttention = {
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling',
    },
  },
};

export const DueAt = {
  args: {
    ...RequiresAttention.args,
    dueAt: '2025-01-01',
    dueAtLabel: 'Frist: 1. januar 2025',
  },
};

export const InProgress = {
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid',
    },
  },
};

export const Completed = {
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet',
    },
  },
};

export const AttachmentsCount = {
  args: {
    ...Completed.args,
    attachmentsCount: 2,
  },
};

export const AttachmentsLabel = {
  args: {
    ...AttachmentsCount.args,
    attachmentsLabel: '2 vedlegg',
  },
};

export const Draft = {
  args: {
    summary: undefined,
    recipient: undefined,
    draftsLabel: 'Utkast',
  },
};

export const DraftAndStatus = {
  args: {
    ...RequiresAttention.args,
    draftsLabel: 'Utkast',
  },
};

export const SentCount = {
  args: {
    ...InProgress.args,
    sentCount: 1,
  },
};

export const ReceivedCount = {
  args: {
    ...Completed.args,
    receivedCount: 2,
  },
};

export const Transmissions = {
  args: {
    summary: undefined,
    sentCount: 2,
    receivedCount: 3,
  },
};

export const Archived = {
  args: {
    summary: undefined,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert',
    badge: {
      size: 'sm',
      color: 'neutral',
      variant: 'subtle',
      label: 'Arkiv',
    },
  },
};

export const Trashed = {
  args: {
    summary: undefined,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Papirkurv',
    badge: {
      size: 'sm',
      color: 'neutral',
      variant: 'subtle',
      label: 'Papirkurv',
    },
  },
};

export const Loading = {
  args: {
    loading: true,
  },
};

export const LongTitle = {
  args: {
    title:
      'Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.',
  },
};

export const LongSummary = {
  args: {
    summary:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.',
  },
};

interface SelectableItem {
  id: string;
  title: string;
  selected: boolean;
}
export const Selectable = (args: DialogListItemProps) => {
  const [items, setItems] = useState<Record<string, SelectableItem>>({
    '1': {
      id: '1',
      title: 'Item 1',
      selected: true,
    },
    '2': {
      id: '2',
      title: 'Item 2',
      selected: false,
    },
    '3': {
      id: '3',
      title: 'Item 2',
      selected: false,
    },
  });

  const onSelect = ({ id }: { id: string }) => {
    setItems((prevState: Record<string, SelectableItem>) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          selected: !prevState[id].selected,
        },
      };
    });
  };

  return Object.values(items)?.map((item) => {
    return (
      <Fragment key={item?.id}>
        <DialogListItem
          {...args}
          title={item.title}
          selected={item.selected}
          controls={<ListItemSelect onChange={() => onSelect(item)} checked={item?.selected} aria-label={item.id} />}
        />
        <MetaItem as={'li'}>selected:{item.selected ? 'true' : 'false'}</MetaItem>
      </Fragment>
    );
  });
};

export const Sizes = (args: DialogListItemProps) => {
  return sizes?.map((size) => {
    return (
      <Fragment key={size}>
        <DialogListItem {...args} size={size} status={{ value: 'in-progress', label: 'Under arbeid' }} />

        <MetaItem as={'li'}>{size}</MetaItem>
      </Fragment>
    );
  });
};

export const AsLink = (args: DialogListItemProps) => {
  return (
    <DialogListItem
      {...args}
      status={{ value: 'in-progress', label: 'Under arbeid' }}
      ariaLabel="Title"
      as="a"
      href="//vg.no"
    />
  );
};

export const CustomControls = (args: DialogListItemProps) => {
  return (
    <DialogListItem
      {...args}
      status={{ value: 'in-progress', label: 'Under arbeid' }}
      controls={<ContextMenu {...contextMenu} />}
      ariaLabel="Title"
      as="a"
      href="//vg.no"
    />
  );
};

export const HighlightWords = (args: DialogListItemProps) => {
  return (
    <DialogListItem
      {...args}
      status={{ value: 'in-progress', label: 'Under arbeid' }}
      controls={<ContextMenu {...contextMenu} />}
      title="Title with highlighted text"
      summary="Summary with highlighted text"
      highlightWords={['title', 'highlight']}
      ariaLabel="Title"
      as="a"
      href="//vg.no"
    />
  );
};

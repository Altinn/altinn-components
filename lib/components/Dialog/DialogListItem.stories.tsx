import type { Meta } from '@storybook/react';
import { Fragment, useState } from 'react';
import { skatt } from '../../../examples/avatar';

import { DialogListItem, type DialogListItemProps, type DialogListItemSize } from './DialogListItem';
import { DialogStatusEnum, type DialogStatusValue } from './DialogStatus';

import { ListBase } from '../List';
import { MetaItem } from '../Meta';

const getStatusLabel = (value: string) => {
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

const sizes = ['lg', 'md', 'sm', 'xs'] as DialogListItemSize[];

const meta: Meta<typeof DialogListItem> = {
  title: 'Dialog/DialogListItem',
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
} satisfies Meta<typeof DialogListItem>;

export default meta;

export const Default = {
  args: {},
};

export const GroupedAvatars = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem
        {...args}
        grouped={true}
        recipient={{
          type: 'company',
          name: 'Frontenders Inc',
        }}
      />
      <DialogListItem
        {...args}
        grouped={true}
        recipient={{
          type: 'company',
          name: 'Designers Ltd',
        }}
      />
    </ListBase>
  );
};

export const SeenVsUnseen = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem {...args} label="Ny" />
      <DialogListItem {...args} seen={true} seenBy={{ seenByEndUser: true, label: 'Sett av deg' }} />
    </ListBase>
  );
};

export const SeenBy = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem {...args} seen seenBy={{ seenByEndUser: true, label: 'Sett av deg' }} />
      <MetaItem>Seen by end user. Dialog is marked as seen.</MetaItem>
      <DialogListItem {...args} seenBy={{ seenByOthersCount: 4, label: 'Sett av 4' }} />
      <MetaItem>Seen by others. Dialog is not marked as seen.</MetaItem>
      <DialogListItem
        {...args}
        seen
        seenBy={{
          seenByOthersCount: 4,
          seenByEndUser: true,
          label: 'Sett av deg + 4',
        }}
      />
      <MetaItem>Seen by end user and others. Dialog is marked as seen.</MetaItem>
    </ListBase>
  );
};

export const InboxStatuses = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem {...args} status={{ value: 'requires-attention', label: 'Krever handling' }} />
      <DialogListItem {...args} status={{ value: 'in-progress', label: 'Under arbeid' }} />
      <DialogListItem {...args} status={{ value: 'completed', label: 'Avsluttet' }} />
    </ListBase>
  );
};

export const DraftAndSent = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem {...args} status={{ value: 'draft', label: 'Utkast' }} />
      <DialogListItem {...args} status={{ value: 'sent', label: 'Sendt' }} />
    </ListBase>
  );
};

export const ArchivedAndTrashed = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem
        {...args}
        label="Arkivert"
        status={{ value: 'completed', label: 'Avsluttet' }}
        seen={true}
        seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
        archivedAt="2024-11-27"
        archivedAtLabel="Arkivert av Kjell Olsen, 27. nov 2024"
      />
      <DialogListItem
        {...args}
        label="Papirkurv"
        status={{ value: 'completed', label: 'Avsluttet' }}
        seen={true}
        seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
        trashedAt="2024-11-27"
        trashedAtLabel="Slettet av Kjell Olsen, 27. nov 2024"
      />
    </ListBase>
  );
};

export const Statuses = (args: DialogListItemProps) => {
  return (
    <ListBase>
      {Object.keys(DialogStatusEnum).map((status: string) => {
        return (
          <Fragment key={status}>
            <DialogListItem
              {...args}
              status={{
                value: status as DialogStatusValue,
                label: getStatusLabel(status),
              }}
            />
            <MetaItem>{status}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Loading = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem {...args} loading label="Ulest" />
      <MetaItem>Loading</MetaItem>
      <DialogListItem {...args} label="Ulest" />
      <MetaItem>Loaded</MetaItem>
    </ListBase>
  );
};

export const Variants = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem {...args} label="Ulest" status={{ value: 'requires-attention', label: 'Krever handling' }} />
      <MetaItem>Dialog is new and has not been seen by anybody</MetaItem>
      <DialogListItem
        {...args}
        seen={true}
        seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
        status={{ value: 'requires-attention', label: 'Krever handling' }}
      />
      <MetaItem>Dialog has been seen</MetaItem>
      <DialogListItem
        {...args}
        label="Arkivert"
        status={{ value: 'completed', label: 'Avsluttet' }}
        seen={true}
        seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
        archivedAt="2024-11-27"
        archivedAtLabel="Arkivert av Kjell Olsen, 27. nov 2024"
      />
      <MetaItem>Dialog has been moved to archive</MetaItem>
      <DialogListItem
        {...args}
        label="Papirkurv"
        status={{ value: 'completed', label: 'Avsluttet' }}
        seen={true}
        seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
        trashedAt="2024-11-27"
        trashedAtLabel="Slettet av Kjell Olsen, 27. nov 2024"
      />
      <MetaItem>Dialog has been moved to trash</MetaItem>
    </ListBase>
  );
};

export const DueAt = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem
        {...args}
        status={{ label: 'Krever handling', value: 'requires-attention' }}
        dueAt="2025-01-01"
        dueAtLabel="Frist: 1. januar 2025"
      />
      <MetaItem>Dialog requires action wihtin a spesific due date.</MetaItem>
    </ListBase>
  );
};

export const Attachments = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem {...args} attachmentsCount={2} />
      <MetaItem>Dialog has attachments.</MetaItem>
    </ListBase>
  );
};

export const TouchedBy = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem {...args} touchedBy={[{ name: 'Kari Nordmann' }]} />
      <MetaItem>Dialog has been touched by a single actor.</MetaItem>
      <DialogListItem {...args} touchedBy={[{ name: 'Kari Nordmann' }, { name: 'Ola Nordmann' }]} />
      <MetaItem>Dialog has been touched by two actors.</MetaItem>
      <DialogListItem
        {...args}
        touchedBy={[{ name: 'Kari Nordmann' }, { name: 'Ola Nordmann' }, { name: 'Per Nordmann' }]}
      />
      <MetaItem>Dialog has been touched by a multiple actors.</MetaItem>
    </ListBase>
  );
};

export const TextLength = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem
        {...args}
        title="Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
      />
      <MetaItem>Long title</MetaItem>
      <DialogListItem
        {...args}
        summary="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
      />
      <MetaItem>Long summary</MetaItem>
    </ListBase>
  );
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

  return (
    <ListBase>
      {Object.values(items)?.map((item) => {
        return (
          <Fragment key={item?.id}>
            <DialogListItem
              {...args}
              title={item.title}
              onClick={item.selected ? () => onSelect(item) : undefined}
              selected={item.selected}
              select={{
                checked: item?.selected,
                onChange: () => onSelect(item),
              }}
            />
            <MetaItem>selected:{item.selected ? 'true' : 'false'}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Sizes = (args: DialogListItemProps) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <DialogListItem {...args} size={size} status={{ value: 'in-progress', label: 'Under arbeid' }} />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

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
  render: (args: DialogListItemProps) => (
    <ListBase>
      <DialogListItem {...args} />
    </ListBase>
  ),
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
    <>
      <ListBase>
        <DialogListItem {...args} seen label="Ny" seenBy={{ seenByEndUser: true, label: 'Sett av deg' }} />
        <DialogListItem {...args} seenBy={{ seenByOthersCount: 4, label: 'Sett av 4' }} />
        <DialogListItem
          {...args}
          seen
          seenBy={{
            seenByOthersCount: 4,
            seenByEndUser: true,
            label: 'Sett av deg + 4',
          }}
        />
      </ListBase>
    </>
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
      <DialogListItem {...args} summary={undefined} status={{ value: 'draft', label: 'Utkast' }} />
      <DialogListItem {...args} summary={undefined} status={{ value: 'sent', label: 'Sendt' }} />
    </ListBase>
  );
};

export const ArchivedAndTrashed = (args: DialogListItemProps) => {
  return (
    <ListBase>
      <DialogListItem
        {...args}
        summary={undefined}
        label="Arkivert"
        status={{ value: 'completed', label: 'Avsluttet' }}
        seen={true}
        seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
        archivedAt="2024-11-27"
        archivedAtLabel="Arkivert av Kjell Olsen, 27. nov 2024"
      />
      <DialogListItem
        {...args}
        summary={undefined}
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
  return Object.keys(DialogStatusEnum).map((status: string) => {
    return (
      <Fragment key={status}>
        <ListBase>
          <DialogListItem
            {...args}
            status={{
              value: status as DialogStatusValue,
              label: getStatusLabel(status),
            }}
          />
        </ListBase>
        <MetaItem>{status}</MetaItem>
      </Fragment>
    );
  });
};

const Loading = (args: DialogListItemProps) => {
  return (
    <>
      <ListBase>
        <DialogListItem {...args} loading label="Ulest" />
      </ListBase>
      <MetaItem>Loading</MetaItem>
      <ListBase>
        <DialogListItem {...args} label="Ulest" />
      </ListBase>
      <MetaItem>Loaded</MetaItem>
    </>
  );
};

Loading.parameters = {
  tags: ['skip-test'],
};

export { Loading };

export const Variants = (args: DialogListItemProps) => {
  return (
    <>
      <ListBase>
        <DialogListItem {...args} label="Ulest" status={{ value: 'requires-attention', label: 'Krever handling' }} />
      </ListBase>
      <MetaItem>Dialog is new and has not been seen by anybody</MetaItem>
      <ListBase>
        <DialogListItem
          {...args}
          seen={true}
          seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
          status={{ value: 'requires-attention', label: 'Krever handling' }}
        />
      </ListBase>
      <MetaItem>Dialog has been seen</MetaItem>
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
      </ListBase>
      <MetaItem>Dialog has been moved to archive</MetaItem>
      <ListBase>
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
      <MetaItem>Dialog has been moved to trash</MetaItem>
    </>
  );
};

export const DueAt = (args: DialogListItemProps) => {
  return (
    <>
      <ListBase>
        <DialogListItem
          {...args}
          status={{ label: 'Krever handling', value: 'requires-attention' }}
          dueAt="2025-01-01"
          dueAtLabel="Frist: 1. januar 2025"
        />
      </ListBase>
      <MetaItem>Dialog requires action wihtin a spesific due date.</MetaItem>
    </>
  );
};

export const Attachments = (args: DialogListItemProps) => {
  return (
    <>
      <ListBase>
        <DialogListItem {...args} attachmentsCount={2} />
      </ListBase>
      <MetaItem>Dialog has attachments.</MetaItem>
    </>
  );
};

export const TouchedBy = (args: DialogListItemProps) => {
  return (
    <>
      <ListBase>
        <DialogListItem {...args} touchedBy={[{ name: 'Kari Nordmann' }]} />
      </ListBase>
      <MetaItem>Dialog has been touched by a single actor.</MetaItem>
      <ListBase>
        <DialogListItem {...args} touchedBy={[{ name: 'Kari Nordmann' }, { name: 'Ola Nordmann' }]} />
      </ListBase>
      <MetaItem>Dialog has been touched by two actors.</MetaItem>
      <ListBase>
        <DialogListItem
          {...args}
          touchedBy={[{ name: 'Kari Nordmann' }, { name: 'Ola Nordmann' }, { name: 'Per Nordmann' }]}
        />
      </ListBase>
      <MetaItem>Dialog has been touched by a multiple actors.</MetaItem>
    </>
  );
};

export const TextLength = (args: DialogListItemProps) => {
  return (
    <>
      <ListBase>
        <DialogListItem
          {...args}
          title="Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
        />
      </ListBase>
      <MetaItem>Long title</MetaItem>
      <ListBase>
        <DialogListItem
          {...args}
          summary="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
        />
      </ListBase>
      <MetaItem>Long summary</MetaItem>
    </>
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

  return Object.values(items)?.map((item) => {
    return (
      <Fragment key={item?.id}>
        <ListBase>
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
        </ListBase>
        <MetaItem>selected:{item.selected ? 'true' : 'false'}</MetaItem>
      </Fragment>
    );
  });
};

export const Sizes = (args: DialogListItemProps) => {
  return sizes?.map((size) => {
    return (
      <Fragment key={size}>
        <ListBase>
          <DialogListItem {...args} size={size} status={{ value: 'in-progress', label: 'Under arbeid' }} />
        </ListBase>
        <MetaItem>{size}</MetaItem>
      </Fragment>
    );
  });
};

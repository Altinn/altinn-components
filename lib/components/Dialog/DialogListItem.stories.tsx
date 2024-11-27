import { withThemeByDataAttribute } from '@storybook/addon-themes';
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
  decorators: [
    withThemeByDataAttribute({
      themes: {
        company: 'company',
        person: 'person',
      },
      defaultTheme: 'company',
    }),
  ],
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
    updatedAt: '2024-11-25 15:30',
    updatedAtLabel: '25. november 2024 kl 15.30',
    status: {},
  },
} satisfies Meta<typeof DialogListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Variants = (args) => {
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
        size="md"
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
        size="md"
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

export const DueAt = (args) => {
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

export const Attachments = (args) => {
  return (
    <ListBase>
      <DialogListItem {...args} attachmentsCount={2} />
      <MetaItem>Dialog has attachments.</MetaItem>
    </ListBase>
  );
};

export const SeenBy = (args) => {
  return (
    <ListBase>
      <DialogListItem {...args} seen={true} seenBy={{ seenByEndUser: true, label: 'Sett av deg' }} />
      <MetaItem>Seen by end user. Dialog is marked as seen.</MetaItem>
      <DialogListItem {...args} seenBy={{ seenByOthersCount: 4, label: 'Sett av 4' }} />
      <MetaItem>Seen by others. Dialog is not marked as seen.</MetaItem>
      <DialogListItem
        {...args}
        seen={true}
        seenBy={{ seenByOthersCount: 4, seenByEndUser: true, label: 'Sett av deg + 4' }}
      />
      <MetaItem>Seen by end user and others. Dialog is marked as seen.</MetaItem>
    </ListBase>
  );
};

export const TouchedBy = (args) => {
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

export const TextLength = (args) => {
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

export const Selectable = (args) => {
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

export const Sizes = (args) => {
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

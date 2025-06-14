import { ClockDashedIcon, CogIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { Fragment, useState } from 'react';
import { skatt } from '../../../examples/avatar';

import {
  ContextMenu,
  DialogListItem,
  type DialogListItemProps,
  type DialogListItemSize,
  DialogStatusEnum,
  type DialogStatusValue,
  ListItemSelect,
} from '..';

import { List } from '../List';
import { MetaItem } from '../Metadata';

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

const sizes = ['xl', 'lg', 'md', 'sm', 'xs'] as DialogListItemSize[];

const meta: Meta<typeof DialogListItem> = {
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
} satisfies Meta<typeof DialogListItem>;

export default meta;

export const Default = {
  render: (args: DialogListItemProps) => (
    <List>
      <DialogListItem {...args} />
    </List>
  ),
  args: {},
};

export const GroupedAvatars = (args: DialogListItemProps) => {
  return (
    <List>
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
    </List>
  );
};

export const SeenVsUnseen = (args: DialogListItemProps) => {
  return (
    <List>
      <DialogListItem {...args} badge={{ theme: 'surface', label: 'Ny' }} />
      <DialogListItem {...args} seen={true} seenBy={{ seenByEndUser: true, label: 'Sett av deg' }} />
    </List>
  );
};

export const SeenBy = (args: DialogListItemProps) => {
  return (
    <>
      <List>
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
      </List>
    </>
  );
};

export const InboxStatuses = (args: DialogListItemProps) => {
  return (
    <List>
      <DialogListItem {...args} status={{ value: 'requires-attention', label: 'Krever handling' }} />
      <DialogListItem {...args} status={{ value: 'in-progress', label: 'Under arbeid' }} />
      <DialogListItem {...args} status={{ value: 'completed', label: 'Avsluttet' }} />
    </List>
  );
};

export const DraftAndSent = (args: DialogListItemProps) => {
  return (
    <List>
      <DialogListItem
        {...args}
        summary={undefined}
        badge={{ label: 'Utkast' }}
        //        status={{ value: "draft", label: "Utkast" }}
      />
      <DialogListItem
        {...args}
        summary={undefined}
        badge={{ label: 'Sendt' }}
        //        status={{ value: "sent", label: "Sendt" }}
      />
    </List>
  );
};

export const ArchivedAndTrashed = (args: DialogListItemProps) => {
  return (
    <List>
      <DialogListItem
        {...args}
        color="neutral"
        summary={undefined}
        //        label="Arkivert"
        badge={{ label: 'Arkivert' }}
        status={{ value: 'completed', label: 'Avsluttet' }}
        seen={true}
        seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
        archivedAt="2024-11-27"
        archivedAtLabel="Arkivert av Kjell Olsen, 27. nov 2024"
      />
      <DialogListItem
        {...args}
        color="neutral"
        summary={undefined}
        //        label="Papirkurv"
        badge={{ label: 'Papirkurv' }}
        status={{ value: 'completed', label: 'Avsluttet' }}
        seen={true}
        seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
        trashedAt="2024-11-27"
        trashedAtLabel="Slettet av Kjell Olsen, 27. nov 2024"
      />
    </List>
  );
};

export const Statuses = (args: DialogListItemProps) => {
  return Object.keys(DialogStatusEnum).map((status: string) => {
    return (
      <Fragment key={status}>
        <List>
          <DialogListItem
            {...args}
            status={{
              value: status as DialogStatusValue,
              label: getStatusLabel(status),
            }}
          />
        </List>
        <MetaItem>{status}</MetaItem>
      </Fragment>
    );
  });
};

const Loading = (args: DialogListItemProps) => {
  return (
    <>
      <List>
        <DialogListItem {...args} loading label="Ulest" />
      </List>
      <MetaItem>Loading</MetaItem>
      <List>
        <DialogListItem {...args} label="Ulest" />
      </List>
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
      <List>
        <DialogListItem {...args} label="Ulest" status={{ value: 'requires-attention', label: 'Krever handling' }} />
      </List>
      <MetaItem>Dialog is new and has not been seen by anybody</MetaItem>
      <List>
        <DialogListItem
          {...args}
          seen={true}
          seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
          status={{ value: 'requires-attention', label: 'Krever handling' }}
        />
      </List>
      <MetaItem>Dialog has been seen</MetaItem>
      <List>
        <DialogListItem
          {...args}
          label="Arkivert"
          status={{ value: 'completed', label: 'Avsluttet' }}
          seen={true}
          seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
          archivedAt="2024-11-27"
          archivedAtLabel="Arkivert av Kjell Olsen, 27. nov 2024"
        />
      </List>
      <MetaItem>Dialog has been moved to archive</MetaItem>
      <List>
        <DialogListItem
          {...args}
          label="Papirkurv"
          status={{ value: 'completed', label: 'Avsluttet' }}
          seen={true}
          seenBy={{ seenByEndUser: true, label: 'Sett av deg' }}
          trashedAt="2024-11-27"
          trashedAtLabel="Slettet av Kjell Olsen, 27. nov 2024"
        />
      </List>
      <MetaItem>Dialog has been moved to trash</MetaItem>
    </>
  );
};

export const DueAt = (args: DialogListItemProps) => {
  return (
    <>
      <List>
        <DialogListItem
          {...args}
          status={{ label: 'Krever handling', value: 'requires-attention' }}
          dueAt="2025-01-01"
          dueAtLabel="Frist: 1. januar 2025"
        />
      </List>
      <MetaItem>Dialog requires action wihtin a spesific due date.</MetaItem>
    </>
  );
};

export const Attachments = (args: DialogListItemProps) => {
  return (
    <>
      <List>
        <DialogListItem {...args} attachmentsCount={2} />
      </List>
      <MetaItem>Dialog has attachments.</MetaItem>
    </>
  );
};

export const TouchedBy = (args: DialogListItemProps) => {
  return (
    <>
      <List>
        <DialogListItem {...args} touchedBy={[{ name: 'Kari Nordmann' }]} />
      </List>
      <MetaItem>Dialog has been touched by a single actor.</MetaItem>
      <List>
        <DialogListItem {...args} touchedBy={[{ name: 'Kari Nordmann' }, { name: 'Ola Nordmann' }]} />
      </List>
      <MetaItem>Dialog has been touched by two actors.</MetaItem>
      <List>
        <DialogListItem
          {...args}
          touchedBy={[{ name: 'Kari Nordmann' }, { name: 'Ola Nordmann' }, { name: 'Per Nordmann' }]}
        />
      </List>
      <MetaItem>Dialog has been touched by a multiple actors.</MetaItem>
    </>
  );
};

export const TextLength = (args: DialogListItemProps) => {
  return (
    <>
      <List>
        <DialogListItem
          {...args}
          title="Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
        />
      </List>
      <MetaItem>Long title</MetaItem>
      <List>
        <DialogListItem
          {...args}
          summary="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
        />
      </List>
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
        <List>
          <DialogListItem
            {...args}
            title={item.title}
            selected={item.selected}
            controls={<ListItemSelect onChange={() => onSelect(item)} checked={item?.selected} aria-label={item.id} />}
          />
        </List>
        <MetaItem>selected:{item.selected ? 'true' : 'false'}</MetaItem>
      </Fragment>
    );
  });
};

export const Sizes = (args: DialogListItemProps) => {
  return sizes?.map((size) => {
    return (
      <Fragment key={size}>
        <List>
          <DialogListItem {...args} size={size} status={{ value: 'in-progress', label: 'Under arbeid' }} />
        </List>
        <MetaItem>{size}</MetaItem>
      </Fragment>
    );
  });
};

export const AsLink = (args: DialogListItemProps) => {
  return (
    <List>
      <DialogListItem
        {...args}
        status={{ value: 'in-progress', label: 'Under arbeid' }}
        ariaLabel="Title"
        as="a"
        href="//vg.no"
      />
    </List>
  );
};

export const CustomControls = (args: DialogListItemProps) => {
  return (
    <List>
      <DialogListItem
        {...args}
        status={{ value: 'in-progress', label: 'Under arbeid' }}
        controls={
          <ContextMenu
            id="menu-2"
            items={[
              { id: 'settings', title: 'Innstillinger', icon: CogIcon },
              { id: 'log', title: 'Aktivitetslogg', icon: ClockDashedIcon },
            ]}
          />
        }
        ariaLabel="Title"
        as="a"
        href="//vg.no"
      />
    </List>
  );
};

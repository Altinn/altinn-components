import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';

import {
  type AvatarGroupProps,
  Button,
  List,
  ListBase,
  ListItem,
  ListItemBase,
  ListItemHeader,
  type ListItemProps,
  MetaItem,
} from '../';

const colors = ['neutral', 'accent', 'transparent'] as ListItemProps['color'][];
const sizes = ['xl', 'lg', 'md', 'sm', 'xs'] as ListItemProps['size'][];

const meta = {
  title: 'List/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: 'id',
    title: 'Title',
    description: 'Description',
    size: 'sm',
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const MediaTypes = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem {...args} />
      <MetaItem>No media</MetaItem>
      <ListItem {...args} icon="teddy-bear" />
      <MetaItem>Icon</MetaItem>
      <ListItem
        {...args}
        avatar={{
          type: 'person',
          name: 'Erik Huseklepp',
        }}
      />
      <MetaItem>Person</MetaItem>
      <ListItem
        {...args}
        avatar={{
          type: 'company',
          name: 'Sportsklubben Brann',
        }}
      />
      <MetaItem>Company</MetaItem>
      <ListItem
        {...args}
        avatar={{
          type: 'company',
          name: 'Politiets sikkerhetstjeneste',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/D4D0BAQH7Yv86kmHN5g/company-logo_200_200/company-logo_200_200/0/1688735908848?e=1738195200&v=beta&t=f-Mkzd03bqzdQN4IT0h89VQ9_Jri1iJ6XphYYnjsgEo',
        }}
      />
      <MetaItem>Logo</MetaItem>
      <ListItem
        {...args}
        avatarGroup={{
          items: [
            {
              type: 'person',
              name: 'Albert Åberg',
            },
            {
              type: 'person',
              name: 'Birger Meling',
            },
            {
              type: 'person',
              name: 'Celine Dion',
            },
          ],
        }}
      />
      <MetaItem>People group</MetaItem>
      <ListItem
        {...args}
        avatarGroup={{
          items: [
            {
              type: 'company',
              name: 'Albert Åberg',
            },
            {
              type: 'company',
              name: 'Birger Meling',
            },
            {
              type: 'company',
              name: 'Celine Dion',
            },
          ],
        }}
      />
      <MetaItem>Company group</MetaItem>
    </ListBase>
  );
};

export const Loading = (args: ListItemProps) => {
  return (
    <ListBase>
      {sizes.map((size) => {
        return (
          <Fragment key={size}>
            <ListItem {...args} icon="teddy-bear" size={size} loading={true} />
            <ListItem {...args} icon="teddy-bear" size={size} loading={false} />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Controls = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem {...args} linkIcon="chevron-right" />
      <MetaItem>Link icon, emphasising that this will take you somewhere</MetaItem>
      <ListItem {...args} linkIcon="chevron-right" linkText="Åpne" />
      <MetaItem>Link icon + link text, emphasising that this will take you somewhere</MetaItem>
      <ListItem {...args} collapsible badge={{ label: 'Admin' }} />
      <MetaItem>Collapsible item with badge</MetaItem>
      <ListItem {...args} collapsible expanded />
      <MetaItem>Collapsible and expanded item</MetaItem>
      <ListItem
        {...args}
        badge={{ label: 'Admin' }}
        linkIcon="chevron-right"
        menu={{
          id: 'menu',
          items: [
            { id: 'settings', title: 'Innstillinger', icon: 'cog' },
            { id: 'log', title: 'Aktivitetslogg', icon: 'clock-dashed' },
          ],
        }}
      />
      <MetaItem>List item with badge, linkIcon and context menu</MetaItem>

      <ListItem
        {...args}
        controls={
          <Button icon="pencil" size="sm" variant="outline">
            Rediger
          </Button>
        }
      />
      <MetaItem>List item with custom controls</MetaItem>
    </ListBase>
  );
};

export const Selectable = (args: ListItemProps) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <ListItem
              {...args}
              size={size}
              select={{
                checked: false,
              }}
            />

            <ListItem
              {...args}
              size={size}
              select={{
                checked: true,
              }}
              selected={true}
            />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Colors = (args: ListItemProps) => {
  return (
    <ListBase>
      {colors.map((color) => {
        return (
          <Fragment key={color}>
            <ListItem {...args} icon="teddy-bear" color={color} linkIcon="chevron-right" />
            <MetaItem>{color}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Sizes = (args: ListItemProps) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <ListItem {...args} icon="teddy-bear" size={size} linkIcon="chevron-right" />
            <ListItem {...args} avatar={{ name: 'Avatar' }} size={size} linkIcon="chevron-right" />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Collapsible = (args: ListItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  const people = [
    {
      name: 'Per Ove Ludvigsen',
      role: 'Sportlig leder',
      rights: 'Admin',
    },
    {
      name: 'Eirik Horneland',
      role: 'Trener',
      rights: 'Admin',
    },
    {
      name: 'Erik Huseklepp',
      role: 'Assistenttrener',
      rights: 'Lese og skrive',
    },
    {
      name: 'Hassan El Fakiri',
      role: 'Toppspillerutvikler',
      rights: 'Ingen rettigheter',
    },
  ];

  const items: ListItemProps[] = people.map((item, index) => {
    return {
      avatar: {
        ...item,
        type: 'person',
      },
      title: item?.name,
      description: item?.role,
      badge: { label: item?.rights },
      menu: {
        id: 'menu' + index,
        items: [
          {
            id: 'item1',
            title: 'Hallo',
          },
        ],
      },
    };
  });

  const avatarGroup: AvatarGroupProps = {
    items: people.map((item) => {
      return {
        name: item?.name,
        type: 'person',
      };
    }),
  };

  return (
    <ListItemBase>
      <ListItemHeader
        {...args}
        avatarGroup={avatarGroup}
        collapsible={true}
        expanded={expanded}
        onClick={onToggle}
        as="button"
      />
      {expanded && <List spacing="none" defaultItemSize="xs" defaultItemColor="transparent" items={items} />}
    </ListItemBase>
  );
};

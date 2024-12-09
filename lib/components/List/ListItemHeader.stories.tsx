import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';

import { Button, ListBase, ListItemHeader, MetaItem } from '../';

const sizes = ['lg', 'md', 'sm', 'xs'];

const meta = {
  title: 'List/ListItemHeader',
  component: ListItemHeader,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: 'id',
    title: 'Title',
    description: 'Description',
    size: 'md',
  },
} satisfies Meta<typeof ListItemHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const MediaTypes = (args) => {
  return (
    <ListBase>
      <ListItemHeader {...args} />
      <MetaItem>No media</MetaItem>
      <ListItemHeader {...args} icon="teddy-bear" />
      <MetaItem>Icon</MetaItem>
      <ListItemHeader
        {...args}
        avatar={{
          type: 'person',
          name: 'Erik Huseklepp',
        }}
      />
      <MetaItem>Person</MetaItem>
      <ListItemHeader
        {...args}
        avatar={{
          type: 'company',
          name: 'Sportsklubben Brann',
        }}
      />
      <MetaItem>Company</MetaItem>
      <ListItemHeader
        {...args}
        avatar={{
          type: 'company',
          name: 'Politiets sikkerhetstjeneste',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/D4D0BAQH7Yv86kmHN5g/company-logo_200_200/company-logo_200_200/0/1688735908848?e=1738195200&v=beta&t=f-Mkzd03bqzdQN4IT0h89VQ9_Jri1iJ6XphYYnjsgEo',
        }}
      />
      <MetaItem>Logo</MetaItem>
      <ListItemHeader
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
      <ListItemHeader
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

export const Loading = (args) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <ListItemHeader {...args} icon="teddy-bear" size={size} loading={true} />
            <ListItemHeader {...args} icon="teddy-bear" size={size} loading={false} />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Controls = (args) => {
  return (
    <ListBase>
      <ListItemHeader {...args} linkIcon="chevron-right" />
      <MetaItem>Link icon, emphasising that this will take you somewhere</MetaItem>
      <ListItemHeader {...args} linkIcon="chevron-right" linkText="Åpne" />
      <MetaItem>Link icon + link text, emphasising that this will take you somewhere</MetaItem>
      <ListItemHeader {...args} collapsible badge={{ label: 'Admin' }} />
      <MetaItem>Collapsible item with badge</MetaItem>
      <ListItemHeader {...args} collapsible expanded />
      <MetaItem>Collapsible and expanded item</MetaItem>
      <ListItemHeader
        {...args}
        badge={{ label: 'Admin' }}
        linkIcon="chevron-right"
        menu={{
          items: [
            { title: 'Innstillinger', icon: 'cog' },
            { title: 'Aktivitetslogg', icon: 'clock-dashed' },
          ],
        }}
      />
      <MetaItem>List item with badge, linkIcon and context menu</MetaItem>

      <ListItemHeader
        {...args}
        controls={
          <div style={{ position: 'absolute', right: 0, display: 'flex', alignItems: 'center', margin: '0.625rem' }}>
            <Button icon="pencil" size="sm" variant="outline">
              Rediger
            </Button>
          </div>
        }
      />
      <MetaItem>List item with custom controls</MetaItem>
    </ListBase>
  );
};

export const Selectable = (args) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <ListItemHeader
              {...args}
              size={size}
              select={{
                checked: false,
              }}
            />

            <ListItemHeader
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

export const Colors = (args) => {
  return (
    <ListBase>
      <ListItemHeader {...args} />
      <MetaItem>Default</MetaItem>
      <ListItemHeader {...args} color="accent" />
      <MetaItem>Accent</MetaItem>
    </ListBase>
  );
};

export const Sizes = (args) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <ListItemHeader
              {...args}
              icon="teddy-bear"
              size={size}
              selected={size === args?.size}
              linkIcon="chevron-right"
            />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Collapsible = (args) => {
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

  const items = people?.map((item) => {
    return {
      avatar: {
        ...item,
        type: 'person',
      },
      title: item?.name,
      description: item?.role,
      badge: { label: item?.rights },
      linkIcon: 'menu-elipsis-horizontal',
    };
  });

  const avatarGroup = {
    items: people?.map((item) => {
      return {
        name: item?.name,
        type: 'person',
      };
    }),
  };

  return (
    <Fragment>
      <ListItemHeader
        {...args}
        avatarGroup={avatarGroup}
        collapsible={true}
        expanded={expanded}
        onClick={onToggle}
        as="button"
      />
      {expanded && <List size="sm" spacing="none" items={items} />}
    </Fragment>
  );
};
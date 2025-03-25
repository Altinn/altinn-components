import { ClockDashedIcon, CogIcon, HeadCloudIcon, PencilIcon, TeddyBearIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  Button,
  ContextMenu,
  Icon,
  ListBase,
  ListItem,
  type ListItemProps,
  Section,
} from '../';

const themes = ['default', 'subtle', 'surface', 'base', 'transparent'] as ListItemProps['theme'][];

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as ListItemProps['size'][];

const avatarGroupsProps = {
  items: [
    {
      name: 'Alfa',
    },
    {
      name: 'Beta',
    },
    {
      name: 'Charlie',
    },
  ],
} as AvatarGroupProps;

const meta = {
  title: 'List/ListItem',
  component: ListItem,
  //  tags: ["autodocs"],
  parameters: {},
  args: {
    id: 'id',
    as: 'button',
    title: 'Title',
    titleAs: 'h2',
    onClick: () => alert('onClick'),
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ListBase>
      <ListItem {...args} />
    </ListBase>
  ),
  args: {
    icon: {
      theme: 'surface',
      svgElement: TeddyBearIcon,
    },
    badge: {
      theme: 'subtle',
      label: 'New',
    },
    linkIcon: true,
  },
};

export const IconTypes = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem {...args} icon={TeddyBearIcon} />
      <ListItem {...args} icon={{ theme: 'surface', svgElement: TeddyBearIcon }} />
    </ListBase>
  );
};

export const Avatars = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem
        {...args}
        avatar={{
          type: 'person',
          name: 'Erik Huseklepp',
        }}
      />
      <ListItem
        {...args}
        avatar={{
          type: 'company',
          name: 'Sportsklubben Brann',
        }}
      />
      <ListItem
        {...args}
        avatar={{
          type: 'company',
          name: 'Politiets sikkerhetstjeneste',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/D4D0BAQH7Yv86kmHN5g/company-logo_200_200/company-logo_200_200/0/1688735908848?e=1738195200&v=beta&t=f-Mkzd03bqzdQN4IT0h89VQ9_Jri1iJ6XphYYnjsgEo',
        }}
      />
    </ListBase>
  );
};

export const AvatarGroups = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem
        {...args}
        avatarGroup={{
          ...avatarGroupsProps,
          defaultType: 'person',
        }}
      />
      <ListItem
        {...args}
        avatarGroup={{
          ...avatarGroupsProps,
          defaultType: 'company',
        }}
      />
    </ListBase>
  );
};

export const Badges = (args: ListItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <ListBase>
      <ListItem {...args} icon={TeddyBearIcon} description="This item is a link." linkIcon />
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        badge={{ label: '2 ting' }}
        description="Adding a badge."
        collapsible
        expanded={expanded}
        onClick={toggleExpanded}
      />
    </ListBase>
  );
};

export const LoadingState = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem {...args} icon={TeddyBearIcon} loading={true} />
      <ListItem {...args} icon={TeddyBearIcon} loading={false} />
    </ListBase>
  );
};

export const Selectable = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem
        {...args}
        select={{
          checked: false,
        }}
      />
      <ListItem
        {...args}
        select={{
          checked: true,
        }}
        selected={true}
      />
    </ListBase>
  );
};

export const Collapsible = (args: ListItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <ListBase>
      <ListItem
        {...args}
        icon={{ theme: 'surface', svgElement: TeddyBearIcon }}
        badge={{ label: 'Badge' }}
        description={expanded ? '' : 'Click to expand'}
        collapsible={true}
        expanded={expanded}
        onClick={onToggle}
        as="button"
      >
        {expanded && (
          <Section padding={4}>
            <p>Item is expanded</p>
          </Section>
        )}
      </ListItem>
    </ListBase>
  );
};

export const CollapsibleExpanded = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem
        {...args}
        icon={{ theme: 'surface', svgElement: TeddyBearIcon }}
        badge={{ label: 'Badge' }}
        collapsible={true}
        expanded={true}
        selected={true}
      >
        <Section padding={4}>
          <p>Item is expanded and selected</p>
        </Section>
      </ListItem>
    </ListBase>
  );
};

export const Theme = (args: ListItemProps) => {
  return (
    <ListBase>
      {themes?.map((theme) => {
        return (
          <ListItem
            {...args}
            icon={TeddyBearIcon}
            title={theme}
            description={'theme:' + theme}
            theme={theme}
            linkIcon
            key={theme}
          />
        );
      })}
    </ListBase>
  );
};

export const Size = (args: ListItemProps) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <ListItem
            {...args}
            icon={{ svgElement: TeddyBearIcon, theme: 'surface' }}
            title={size}
            description={'theme:' + size}
            size={size}
            linkIcon
            key={size}
          />
        );
      })}
    </ListBase>
  );
};

export const OverridingIcon = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem
        {...args}
        description="Custom icon with Avatar + Icon"
        icon={
          <span style={{ position: 'relative' }}>
            <Avatar name="Alfa" size="md" />
            <span style={{ position: 'absolute', bottom: -2, right: -2 }}>
              <Icon svgElement={TeddyBearIcon} size="xs" theme="subtle" />
            </span>
          </span>
        }
      />
      <ListItem
        {...args}
        description="Custom icon with Icon + Avatar"
        icon={
          <span style={{ position: 'relative' }}>
            <Icon svgElement={TeddyBearIcon} size="md" theme="subtle" />
            <span style={{ position: 'absolute', bottom: -2, right: -2 }}>
              <Avatar name="Alfa" size="xs" />
            </span>
          </span>
        }
      />
      <ListItem {...args} description="Smaller AvatarGroup" icon={<AvatarGroup {...avatarGroupsProps} />} />
    </ListBase>
  );
};

export const OverridingBadge = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem
        {...args}
        description="Badge replaced by AvatarGroup"
        badge={<AvatarGroup {...avatarGroupsProps} size="sm" />}
        linkIcon
      />
    </ListBase>
  );
};

export const OverridingLabel = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        label={
          <span>
            A <em>custom</em> label{' '}
          </span>
        }
      />
    </ListBase>
  );
};

export const CustomControls = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        linkIcon
        badge={
          <ContextMenu
            id="menu-2"
            size="sm"
            items={[
              { id: 'settings', title: 'Innstillinger', icon: CogIcon },
              { id: 'log', title: 'Aktivitetslogg', icon: ClockDashedIcon },
            ]}
          />
        }
      />
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        controls={
          <ContextMenu
            id="menu"
            size="sm"
            items={[
              { id: 'settings', title: 'Innstillinger', icon: CogIcon },
              { id: 'log', title: 'Aktivitetslogg', icon: ClockDashedIcon },
            ]}
          />
        }
      />
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        controls={
          <Button icon={PencilIcon} size="sm" variant="outline" onClick={() => alert('Button clicked')}>
            Rediger
          </Button>
        }
      />
    </ListBase>
  );
};

export const OverideTitleAs = (args: ListItemProps) => {
  return (
    <ListBase>
      <ListItem {...args} icon={HeadCloudIcon} titleAs="h2" title="Title as h2" />
      <ListItem {...args} icon={HeadCloudIcon} titleAs="h3" title="Title as h3" />
      <ListItem {...args} icon={HeadCloudIcon} titleAs="p" title="Title as p" />
    </ListBase>
  );
};

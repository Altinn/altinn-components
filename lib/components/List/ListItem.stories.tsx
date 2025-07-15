import { ClockDashedIcon, CogIcon, HeadCloudIcon, PencilIcon, TeddyBearIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  Button,
  ContextMenu,
  Icon,
  List,
  ListItem,
  type ListItemProps,
  Section,
} from '../';

const variants = ['default', 'subtle', 'tinted'] as ListItemProps['variant'][];

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
    ariaLabel: 'Aria label',
    onClick: () => alert('onClick'),
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <List>
      <ListItem {...args} />
    </List>
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
    <List>
      <ListItem {...args} icon={TeddyBearIcon} />
      <ListItem {...args} icon={{ theme: 'surface', svgElement: TeddyBearIcon }} />
    </List>
  );
};

export const Avatars = (args: ListItemProps) => {
  return (
    <List>
      <ListItem
        {...args}
        icon={{
          type: 'person',
          name: 'Erik Huseklepp',
        }}
      />
      <ListItem
        {...args}
        icon={{
          type: 'company',
          name: 'Sportsklubben Brann',
        }}
      />
      <ListItem
        {...args}
        icon={{
          type: 'company',
          name: 'Politiets sikkerhetstjeneste',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/D4D0BAQH7Yv86kmHN5g/company-logo_200_200/company-logo_200_200/0/1688735908848?e=1738195200&v=beta&t=f-Mkzd03bqzdQN4IT0h89VQ9_Jri1iJ6XphYYnjsgEo',
        }}
      />
    </List>
  );
};

export const AvatarGroups = (args: ListItemProps) => {
  return (
    <List>
      <ListItem
        {...args}
        icon={{
          ...avatarGroupsProps,
          defaultType: 'person',
        }}
      />
      <ListItem
        {...args}
        icon={{
          ...avatarGroupsProps,
          defaultType: 'company',
        }}
      />
    </List>
  );
};

export const Badges = (args: ListItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <List>
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
    </List>
  );
};

export const LoadingState = (args: ListItemProps) => {
  return (
    <List>
      <ListItem {...args} icon={TeddyBearIcon} loading={true} />
      <ListItem {...args} icon={TeddyBearIcon} loading={false} />
    </List>
  );
};

export const Selectable = (args: ListItemProps) => {
  return (
    <List>
      <ListItem
        {...args}
        select={{
          'aria-label': 'Label',
          name: 'select',
        }}
      />
      <ListItem
        {...args}
        select={{
          'aria-label': 'Label',
          name: 'select',
          checked: true,
        }}
        selected={true}
      />
    </List>
  );
};

export const Collapsible = (args: ListItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <List>
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
    </List>
  );
};

export const CollapsibleExpanded = (args: ListItemProps) => {
  return (
    <List>
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
    </List>
  );
};

export const NonInteractive = () => {
  return (
    <List>
      <ListItem
        title="Non-interactive"
        icon={{ theme: 'surface', svgElement: TeddyBearIcon }}
        badge={{ label: 'Badge' }}
        interactive={false}
      >
        <Section padding={4}>
          <p>Item is expanded and selected</p>
        </Section>
      </ListItem>
    </List>
  );
};

export const Variants = (args: ListItemProps) => {
  return (
    <List>
      {variants?.map((variant) => {
        return (
          <>
            <ListItem
              {...args}
              icon={TeddyBearIcon}
              title={variant}
              description={'Variant:' + variant}
              variant={variant}
              shadow="none"
              linkIcon
              key={variant}
            />
          </>
        );
      })}
    </List>
  );
};

export const Shadows = (args: ListItemProps) => {
  return (
    <List>
      {variants?.map((variant) => {
        return (
          <>
            <ListItem
              {...args}
              icon={TeddyBearIcon}
              title={variant}
              description={'Variant:' + variant}
              variant={variant}
              shadow="xs"
              linkIcon
              key={variant}
            />
          </>
        );
      })}
    </List>
  );
};

export const Border = (args: ListItemProps) => {
  return (
    <List>
      {variants?.map((variant) => {
        return (
          <>
            <ListItem
              {...args}
              icon={TeddyBearIcon}
              title={variant}
              description={'Variant:' + variant}
              variant={variant}
              border="solid"
              linkIcon
              key={variant}
            />
          </>
        );
      })}
    </List>
  );
};

export const Sizes = (args: ListItemProps) => {
  return (
    <List>
      {sizes?.map((size) => {
        return (
          <ListItem
            {...args}
            icon={{ svgElement: TeddyBearIcon, theme: 'surface' }}
            label={size}
            size={size}
            linkIcon
            key={size}
          />
        );
      })}
    </List>
  );
};

export const OverridingIcon = (args: ListItemProps) => {
  return (
    <List>
      <ListItem
        {...args}
        description="Custom icon with Avatar + Icon"
        icon={
          <span>
            <Avatar name="Alfa" />
            <Icon
              svgElement={TeddyBearIcon}
              theme="surface"
              style={{
                position: 'absolute',
                bottom: -4,
                right: -4,
                fontSize: '.5em',
              }}
            />
          </span>
        }
      />
      <ListItem
        {...args}
        description="Custom icon with Icon + Avatar"
        icon={
          <span>
            <Icon svgElement={TeddyBearIcon} theme="surface" />
            <Avatar
              name="Alfa"
              style={{
                position: 'absolute',
                bottom: -4,
                right: -4,
                fontSize: '.5em',
              }}
            />
          </span>
        }
      />
    </List>
  );
};

export const OverridingBadge = (args: ListItemProps) => {
  return (
    <List>
      <ListItem
        {...args}
        description="Badge replaced by AvatarGroup"
        badge={<AvatarGroup {...avatarGroupsProps} size="sm" />}
        linkIcon
      />
    </List>
  );
};

export const OverridingLabel = (args: ListItemProps) => {
  return (
    <List>
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        label={
          <span>
            A <em>custom</em> label{' '}
          </span>
        }
      />
    </List>
  );
};

export const CustomControls = (args: ListItemProps) => {
  return (
    <List>
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        linkIcon
        badge={
          <ContextMenu
            id="menu-2"
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
          <Button icon={PencilIcon} size="xs" variant="outline" onClick={() => alert('Button clicked')}>
            Rediger
          </Button>
        }
      />
    </List>
  );
};

export const OverrideTitleAs = (args: ListItemProps) => {
  return (
    <List>
      <ListItem {...args} icon={HeadCloudIcon} title="Title as h2" />
      <ListItem {...args} icon={HeadCloudIcon} title={{ as: 'h3', children: 'Title as H3' }} />
      <ListItem {...args} icon={HeadCloudIcon} title={{ as: 'p', children: 'Title as P' }} />
      <ListItem {...args} icon={HeadCloudIcon} title={{ as: 'span', children: 'Title as span' }} />
      <ListItem {...args} icon={HeadCloudIcon} title={{ as: 'h2', children: 'Title as H2' }} />
    </List>
  );
};

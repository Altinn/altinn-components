import { ClockDashedIcon, CogIcon, HeadCloudIcon, PencilIcon, TeddyBearIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
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

const shadows = ['none', 'xs', 'sm', 'md', 'lg'] as ListItemProps['shadow'][];

const borders = ['none', 'solid', 'dotted'] as ListItemProps['border'][];

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
  parameters: {},
  args: {
    title: 'Title',
    description: 'Description',
    variant: 'default',
    size: 'md',
    shadow: 'xs',
    border: 'none',
    loading: false,
    selected: false,
    expanded: false,
    collapsible: false,
    linkIcon: true,
    interactive: true,
    disabled: false,
    icon: {
      theme: 'surface',
      svgElement: TeddyBearIcon,
    },
    badge: {
      theme: 'subtle',
      label: 'New',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    shadow: {
      control: 'select',
      options: shadows,
    },
    border: {
      control: 'select',
      options: borders,
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    expanded: {
      control: 'boolean',
    },
    collapsible: {
      control: 'boolean',
    },
    linkIcon: {
      control: 'boolean',
    },
    interactive: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['button', 'div', 'a', 'li'],
    },
    // Disable complex controls
    icon: { control: false },
    badge: { control: false },
    children: { control: false },
    onClick: { control: false },
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
};

export const IconTypes: Story = {
  render: (args) => (
    <List>
      <ListItem {...args} icon={TeddyBearIcon} />
      <ListItem {...args} icon={{ theme: 'surface', svgElement: TeddyBearIcon }} />
    </List>
  ),
};

export const Avatars: Story = {
  render: (args) => (
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
  ),
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

export const LoadingState: Story = {
  render: (args) => (
    <List>
      <ListItem {...args} loading={true} />
      <ListItem {...args} loading={false} />
    </List>
  ),
  args: {
    icon: TeddyBearIcon,
  },
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

export const Variants: Story = {
  render: (args) => (
    <List>
      {variants?.map((variant) => (
        <ListItem
          key={variant}
          {...args}
          title={variant}
          description={`Variant: ${variant}`}
          variant={variant}
          shadow="none"
          linkIcon
        />
      ))}
    </List>
  ),
  args: {
    icon: TeddyBearIcon,
  },
};

export const Shadows = (args: ListItemProps) => {
  return (
    <List>
      {shadows?.map((shadow) => {
        return (
          <>
            <ListItem
              {...args}
              icon={TeddyBearIcon}
              title={shadow}
              description={'Shadow:' + shadow}
              shadow={shadow}
              linkIcon
              key={shadow}
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
      {borders?.map((border) => {
        return (
          <>
            <ListItem
              {...args}
              icon={TeddyBearIcon}
              title={border}
              description={'Border:' + border}
              border={border}
              linkIcon
              key={border}
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
            title={size}
            description={'Size: ' + size}
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
            <Avatar name="Alfa" size="md" />
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
              size="xs"
              style={{
                position: 'absolute',
                bottom: -4,
                right: -4,
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
        badge={{ label: 'New', theme: 'subtle' }}
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
        onClick={() => alert('ListItem clicked')}
        as={'button'}
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
    </List>
  );
};

export const InteractiveWithControls = (args: ListItemProps) => {
  const [listItemClicks, setListItemClicks] = useState(0);
  const [buttonClicks, setButtonClicks] = useState(0);

  const handleListItemClick = () => {
    setListItemClicks((prev) => prev + 1);
  };

  const handleButtonClick = () => {
    setButtonClicks((prev) => prev + 1);
  };

  return (
    <Section>
      <List>
        <ListItem
          {...args}
          icon={TeddyBearIcon}
          title="Interactive ListItem with Controls"
          description={`ListItem clicks: ${listItemClicks}, Button clicks: ${buttonClicks}`}
          onClick={handleListItemClick}
          controls={
            <Button icon={PencilIcon} size="xs" variant="outline" onClick={handleButtonClick}>
              Edit
            </Button>
          }
          as="button"
        />
      </List>
    </Section>
  );
};

InteractiveWithControls.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Get the elements
  const listItemHeader = canvas.getByText('Interactive ListItem with Controls');
  const controlButton = canvas.getByText('Edit');
  const listItem = listItemHeader.closest('button') as HTMLElement;

  // Verify initial state
  await expect(listItemHeader).toBeVisible();
  await expect(controlButton).toBeVisible();
  await expect(listItem).toBeVisible();
  await expect(listItem).toHaveTextContent('ListItem clicks: 0, Button clicks: 0');

  // Click the control button
  await userEvent.click(controlButton);
  await expect(listItem).toHaveTextContent('ListItem clicks: 0, Button clicks: 1');

  // Click the main list item (but not the control button area)
  await userEvent.click(listItem);
  await expect(listItem).toHaveTextContent('ListItem clicks: 1, Button clicks: 1');

  // Click the control button again
  await userEvent.click(controlButton);
  await expect(listItem).toHaveTextContent('ListItem clicks: 1, Button clicks: 2');

  // Click the list item again
  await userEvent.click(listItem);
  await expect(listItem).toHaveTextContent('ListItem clicks: 2, Button clicks: 2');
};

export const KeyboardNavigation = (args: ListItemProps) => {
  const [interactions, setInteractions] = useState<string[]>([]);

  const handleListItemClick = () => {
    setInteractions((prev) => [...prev, 'listitem-click']);
  };

  const handleButtonClick = () => {
    setInteractions((prev) => [...prev, 'button-click']);
  };

  const handleKeyPress = () => {
    setInteractions((prev) => [...prev, 'listitem-keypress']);
  };

  return (
    <Section>
      <List>
        <ListItem
          {...args}
          icon={TeddyBearIcon}
          title="Keyboard Navigation Test"
          description={`Interactions: ${interactions.join(', ')}`}
          onClick={handleListItemClick}
          onKeyPress={handleKeyPress}
          controls={
            <Button icon={PencilIcon} size="xs" variant="outline" onClick={handleButtonClick}>
              Edit
            </Button>
          }
          as="button"
        />
      </List>
    </Section>
  );
};

KeyboardNavigation.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Get the elements
  const listItemButton = canvas.getByRole('button', {
    name: /Keyboard Navigation Test/i,
  });
  const controlButton = canvas.getByRole('button', {
    name: /Edit/i,
  });

  // Focus the list item and press Enter
  listItemButton.focus();
  await userEvent.keyboard('{Enter}');
  await expect(listItemButton).toHaveTextContent('listitem-keypress');
  await expect(listItemButton).toHaveTextContent('listitem-click');

  // Tab to the control button and press Enter
  await userEvent.keyboard('{Tab}');
  await expect(controlButton).toHaveFocus();
  await userEvent.keyboard('{Enter}');
  await expect(listItemButton).toHaveTextContent('button-click');

  // Tab back to list item and press space (should trigger click)
  await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
  await expect(listItemButton).toHaveFocus();
  await userEvent.keyboard(' ');
  await expect(listItemButton).toHaveTextContent('listitem-click');
  await expect(listItemButton).toHaveTextContent('listitem-keypress');
};

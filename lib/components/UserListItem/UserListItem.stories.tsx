import { EyeIcon, TrashIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { ContextMenu } from '../ContextMenu';
import { List } from '../List';
import { UserListItem, type UserListItemProps } from './UserListItem';

const meta = {
  title: 'Access/UserListItem',
  component: UserListItem,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    id: 'user-1',
    size: 'md',
    loading: false,
    name: 'Julie Josefine Beritsen',
    description: 'født 01.02.1993',
    type: 'person',
    roleNames: ['Styrets leder'],
    shadow: 'sm',
    linkIcon: false,
    collapsible: false,
    as: 'div',
    interactive: true,
    subUnit: false,
    titleAs: 'h3',
    border: 'none',
    color: 'company',
    expanded: false,
    children: <p>Custom content</p>,
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
    shadow: {
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    type: {
      options: ['person', 'company', 'system'],
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      options: ['div', 'button', 'a', 'span'],
      control: {
        type: 'select',
      },
    },
    titleAs: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'],
      control: {
        type: 'select',
      },
    },
    border: {
      options: ['none', 'solid', 'dotted'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['inherit', 'accent', 'company', 'person', 'neutral'],
      control: {
        type: 'select',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    interactive: {
      control: {
        type: 'boolean',
      },
    },
    linkIcon: {
      control: {
        type: 'boolean',
      },
    },
    collapsible: {
      control: {
        type: 'boolean',
      },
    },
    expanded: {
      control: {
        type: 'boolean',
      },
    },
    subUnit: {
      control: {
        type: 'boolean',
      },
    },
    // Disable complex controls
    children: { control: false },
    onClick: { control: false },
    controls: { control: false },
    id: { control: false },
  },
} satisfies Meta<typeof UserListItem>;

export default meta;

export const Default = (args: UserListItemProps) => {
  return (
    <List>
      <UserListItem {...args} onClick={() => alert(`You clicked me - yay!`)} />
    </List>
  );
};

export const MultipleRoles = (args: UserListItemProps) => {
  return (
    <List>
      <UserListItem
        {...args}
        name="Narvesen AS"
        type="company"
        description="Org.nr.: 123456789"
        roleNames={['Regnskapsfører', 'Klientadministrator', 'Hovedadministrator']}
        interactive={true}
        linkIcon={true}
        onClick={() => alert(`You clicked the link - yay!`)}
        as={'a'}
      />
    </List>
  );
};

export const WithSubUnits = (args: UserListItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <List>
      <UserListItem
        {...args}
        name="Narvesen AS"
        type="company"
        description={undefined}
        roleNames={['Regnskapsfører']}
        expanded={isOpen}
        collapsible={true}
        onClick={() => setIsOpen(!isOpen)}
        as={'button'}
      >
        <div style={{ padding: '0.5rem 0 0.5rem 1rem' }}>
          <List spacing={'sm'}>
            <UserListItem
              id="subunit1"
              name="Narvesen AS"
              type="company"
              size="xs"
              description="Org.nr. 987654321"
              roleNames={['Regnskapsfører']}
              interactive={false}
              shadow="none"
            />
            <UserListItem
              id="subunit2"
              name="Narvesen AS"
              type="company"
              size="xs"
              description="↳ Org.nr. 987654322, underenhet"
              shadow="none"
              interactive={false}
              subUnit={true}
            />
            <UserListItem
              id="subunit3"
              name="Dattersen AS"
              type="company"
              size="xs"
              description="↳ Org.nr. 987654323, underenhet"
              interactive={false}
              shadow="none"
              subUnit={true}
            />
          </List>
        </div>
      </UserListItem>
    </List>
  );
};

export const DifferentHeadingLevelsAndSizes = (args: UserListItemProps) => {
  return (
    <List>
      <UserListItem
        {...args}
        name="XLarge h1 org"
        type="company"
        description="Org.nr. 123456680"
        interactive={false}
        titleAs="h1"
        size="xl"
      />
      <UserListItem
        {...args}
        name="Large h2 org"
        type="company"
        description="Org.nr. 123456669"
        interactive={false}
        titleAs="h2"
        size="lg"
      />
      <UserListItem
        {...args}
        name="Medium h3 org (default)"
        type="company"
        description="Org.nr. 123456670"
        interactive={false}
        size="md"
      />
      <UserListItem
        {...args}
        name="Small h4 org"
        type="company"
        description="Org.nr. 123456641"
        interactive={false}
        size="sm"
        titleAs="h4"
      />
      <UserListItem
        {...args}
        name="Xsmall h5 org"
        type="company"
        description="Org.nr. 123456621"
        interactive={false}
        size="xs"
        titleAs="h5"
      />
    </List>
  );
};

export const WithControls = (args: UserListItemProps) => {
  const menu = (menuId: string) => (
    <ContextMenu
      id={'menu' + menuId}
      items={[
        { id: 'settings' + menuId, title: 'See accesses', icon: EyeIcon },
        { id: 'delete' + menuId, title: 'Delete user', icon: TrashIcon },
      ]}
    />
  );
  return (
    <List>
      <UserListItem
        {...args}
        name="Ådne Makrussen"
        roleNames={['Styrets leder']}
        controls={menu('1')}
        linkIcon={true}
        onClick={() => alert(`You clicked the link - yay!`)}
        as={'button'}
      />
      <UserListItem
        {...args}
        name="Jack Ripper"
        roleNames={undefined}
        controls={menu('2')}
        linkIcon={true}
        onClick={() => alert(`You clicked the link - yay!`)}
        as={'button'}
      />
      <UserListItem
        {...args}
        name="Bankmarked AS"
        type="company"
        description="Org.nr.: 987654321"
        roleNames={['Regnskapsfører']}
        controls={menu('3')}
        linkIcon={true}
        onClick={() => alert(`You clicked the link - yay!`)}
        as={'button'}
      />
    </List>
  );
};

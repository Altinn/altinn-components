import {
  BellIcon,
  Buildings2Icon,
  HandshakeIcon,
  HeartFillIcon,
  HeartIcon,
  InboxIcon,
  PencilIcon,
  PlusIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import {
  AccountList,
  type AccountListItemProps,
  type AccountListProps,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  Section,
  SettingsItem,
  Toolbar,
  Typography,
} from '..';
import { accountList, defaultAccounts, useAccountList } from '../../../examples';

const meta = {
  title: 'Account/AccountList',
  component: AccountList,
  tags: ['autodocs'],
  parameters: {},
  args: accountList as AccountListProps,
} satisfies Meta<typeof AccountList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: accountList.items?.filter((item) => item.type !== 'group'),
  },
};

export const WithGroups: Story = {
  args: {
    items: accountList.items,
  },
};

const getContextMenu = ({ name, id, isCurrentEndUser, favourite = false, onToggleFavourite }: AccountListItemProps) => {
  return {
    id: id + '-menu',
    items: [
      {
        id: 'inbox',
        groupId: 'apps',
        icon: InboxIcon,
        title: 'Gå til Innboks',
      },
      {
        id: 'admin',
        groupId: 'apps',
        icon: HandshakeIcon,
        title: 'Tilgangsstyring',
      },
      {
        id: 'fav',
        groupId: 'context',
        icon: favourite ? HeartFillIcon : HeartIcon,
        title: favourite ? 'Fjern fra favoritter' : 'Legg til favoritter',
        onClick: () => onToggleFavourite?.(id),
      },
      {
        id: 'new-group',
        groupId: 'new',
        icon: PlusIcon,
        title: 'Ny gruppe',
        onClick: () => alert('Ny gruppe'),
      },
    ],
    groups: {
      apps: {
        title: name,
      },
      context: {
        hidden: isCurrentEndUser,
      },
      group: {
        hidden: isCurrentEndUser,
      },
      new: {
        hidden: isCurrentEndUser,
      },
    },
  };
};

export const AccountSettings = () => {
  const { toolbar, items, groups, onToggleFavourite } = useAccountList({
    accounts: defaultAccounts,
  });

  const collapsibleItems = items?.map((item) => {
    if (item.expanded) {
      return {
        ...item,
        children: <AccountDetails {...(item as AccountListItemProps)} onToggleFavourite={onToggleFavourite} />,
      };
    }
    return {
      ...item,
      contextMenu: getContextMenu(item as AccountListItemProps),
    };
  });

  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      {items && <AccountList groups={groups} items={collapsibleItems as AccountListItemProps[]} />}
    </Section>
  );
};

const AccountDetails = ({ type, ...props }: AccountListItemProps) => {
  switch (type) {
    case 'company':
      return <CompanyDetails {...(props as AccountListItemProps)} />;
    case 'person':
      return <PersonDetails {...(props as AccountListItemProps)} />;
    case 'group':
      return <GroupDetails {...(props as AccountListItemProps)} />;
    default:
      return <PersonDetails {...(props as AccountListItemProps)} />;
  }
};

export const AccountToolbar = ({ id, isCurrentEndUser, favourite, onToggleFavourite }: AccountListItemProps) => {
  return (
    <Flex spacing={2} size="xs">
      {!isCurrentEndUser && (
        <Button icon={favourite ? HeartFillIcon : HeartIcon} onClick={() => onToggleFavourite?.(id)} variant="outline">
          {favourite ? 'Fjern favoritt' : 'Legg til favoritt'}
        </Button>
      )}
      <Button icon={InboxIcon} variant="outline">
        Gå til Innboks
      </Button>
      <Button icon={HandshakeIcon} variant="outline">
        Tilgangsstyring
      </Button>
    </Flex>
  );
};

export const CompanyDetails = ({ id, parentId, uniqueId, ...props }: AccountListItemProps) => {
  const { items } = useAccountList({
    accounts: defaultAccounts as AccountListItemProps[],
  });

  const parentAccount = items?.find((item) => item.id === parentId);

  return (
    <Section color="company" padding={6} spacing={2}>
      <AccountToolbar {...props} id={id} />
      <Divider />
      <List spacing={0} size="sm">
        <SettingsItem
          icon={{ svgElement: Buildings2Icon, theme: 'default' }}
          title="Organisasjonsnummer"
          value={uniqueId}
          linkIcon
        />
        {parentAccount && (
          <>
            <Divider as="li" />
            <SettingsItem
              icon={{ svgElement: Buildings2Icon, theme: 'default' }}
              title="Overordnet organisasjon"
              value={parentAccount.name}
              linkIcon
            />
          </>
        )}
        <Divider as="li" />
        <SettingsItem
          icon={{ svgElement: HandshakeIcon, theme: 'default' }}
          title="Rolle og rettigheter"
          value="Daglig leder"
          linkIcon
        />
        <Divider as="li" />
        <SettingsItem
          color="neutral"
          icon={{ svgElement: BellIcon, theme: 'default' }}
          title="Ingen varslinger"
          badge={<Typography size="xs">Sett opp varsling</Typography>}
          linkIcon
        />
      </List>
    </Section>
  );
};

export const PersonDetails = ({ id, ...props }: AccountListItemProps) => {
  return (
    <Section color="company" padding={6} spacing={2}>
      <AccountToolbar {...props} id={id} />

      <Divider />
    </Section>
  );
};

export const GroupDetails = ({ accountIds }: AccountListItemProps) => {
  const { items } = useAccountList({
    accounts: defaultAccounts as AccountListItemProps[],
  });

  const groupItems = accountIds
    ? items?.filter((item) => accountIds.includes(item.id))
    : items?.filter((item) => item.type === 'company');

  return (
    <Section color="company" padding={6} spacing={2}>
      <Flex spacing={2} size="xs">
        <Button icon={InboxIcon} variant="outline">
          Innboks
        </Button>
        <Button icon={PencilIcon} variant="outline">
          Rediger gruppe
        </Button>
      </Flex>
      <Divider />
      <Section spacing={4}>
        <Heading size="sm">6 medlemmer</Heading>
        <List size="sm" spacing={0}>
          {groupItems?.map((item, index) => {
            return (
              <Fragment key={item.title}>
                {index > 0 && <Divider />}
                <SettingsItem
                  icon={item.icon}
                  title={item.title}
                  description={{
                    children: item.description as string,
                    size: 'xxs',
                  }}
                  linkIcon
                />
              </Fragment>
            );
          })}
        </List>
      </Section>
    </Section>
  );
};

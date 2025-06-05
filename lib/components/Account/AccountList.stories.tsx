import {
  BellIcon,
  Buildings2Icon,
  HandshakeIcon,
  HeartFillIcon,
  HeartIcon,
  HouseIcon,
  InboxIcon,
  MobileIcon,
  PaperplaneIcon,
  PlusIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment } from 'react';
import {
  AccountList,
  type AccountListItemProps,
  type AccountListProps,
  type BadgeProps,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  Section,
  SettingsItem,
  Toolbar,
} from '..';
import { accountList, defaultAccounts, useAccountList, useAccountSettings } from '../../../examples';

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

export const Controlled = () => {
  const { toolbar, items, groups, onToggle, onToggleFavourite } = useAccountList({
    accounts: defaultAccounts,
  });

  const controlledItems = items?.map((item) => {
    return {
      ...item,
      onClick: () => onToggle(item.id),
      onToggleFavourite: () => onToggleFavourite(item.id),
      contextMenu: getContextMenu(item as AccountListItemProps),
    };
  });

  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      {items && <AccountList groups={groups} items={controlledItems as AccountListItemProps[]} />}
    </Section>
  );
};

export const Collapsible = () => {
  const { toolbar, items, groups, expandedId, onToggle, onToggleFavourite } = useAccountList({
    accounts: defaultAccounts,
  });

  const collapsibleItems = items?.map((item) => {
    if (expandedId === item.id) {
      return {
        ...item,
        collapsible: true,
        expanded: true,
        onClick: () => onToggle(item.id),
        children: <AccountDetails {...(item as AccountListItemProps)} onToggleFavourite={onToggleFavourite} />,
      };
    }
    return {
      ...item,
      collapsible: true,
      onClick: () => onToggle(item.id),
      onToggleFavourite: () => onToggleFavourite(item.id),
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

interface AccountDetailsProps extends AccountListItemProps {
  smsAlerts?: boolean;
  emailAlerts?: boolean;
  email?: string;
  phone?: string;
  address?: string;
}

const AccountDetails = (props: AccountDetailsProps) => {
  if (props.isCurrentEndUser) {
    return <UserDetails {...props} />;
  }

  switch (props.type) {
    case 'group':
      return <GroupDetails {...props} />;
    case 'company':
      return <CompanyDetails {...props} />;
    case 'person':
      return <PersonDetails {...props} />;
    default:
      return <PersonDetails {...props} />;
  }
};

export const AccountToolbar = ({ id, type, isCurrentEndUser, favourite, onToggleFavourite }: AccountDetailsProps) => {
  return (
    <Flex spacing={2} size="xs">
      {!isCurrentEndUser && (
        <Button
          variant={favourite ? 'tinted' : 'outline'}
          icon={favourite ? HeartFillIcon : HeartIcon}
          onClick={() => onToggleFavourite?.(id)}
        >
          {favourite ? 'Fjern favoritt' : 'Legg til favoritt'}
        </Button>
      )}
      <Button icon={InboxIcon} variant="outline">
        Gå til Innboks
      </Button>
      {type !== 'group' && (
        <Button icon={HandshakeIcon} variant="outline">
          Tilgangsstyring
        </Button>
      )}
    </Flex>
  );
};

export const NotificationSettings = ({
  smsAlerts = true,
  emailAlerts = false,
  email = 'dirk@digdir.no',
  phone = '92020222',
}: AccountDetailsProps) => {
  const badge =
    smsAlerts && emailAlerts
      ? { label: 'SMS og E-post' }
      : smsAlerts
        ? { label: 'SMS' }
        : emailAlerts
          ? { label: 'E-post' }
          : { variant: 'text', label: 'Sett opp varsling' };

  const title = smsAlerts || emailAlerts ? 'Varslinger er på' : 'Ingen varslinger';

  const value = smsAlerts && emailAlerts ? [email, phone].join(', ') : smsAlerts ? phone : emailAlerts && email;

  return (
    <List size="sm">
      <SettingsItem icon={BellIcon} title={title} value={value} badge={badge as BadgeProps} linkIcon />
    </List>
  );
};

export const CompanyDetails = ({ id, parentId, uniqueId = 'XXXXXXXXX', ...props }: AccountDetailsProps) => {
  const { items } = useAccountSettings({ accounts: defaultAccounts });

  const parentAccount = items?.find((item) => item.id === parentId);

  return (
    <Section color="company" padding={6} spacing={2}>
      <AccountToolbar {...props} id={id} />
      <Divider />
      <NotificationSettings {...props} id={id} />
      <List size="sm">
        <Divider as="li" />
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
        <SettingsItem
          icon={{ svgElement: HandshakeIcon, theme: 'default' }}
          title="Rolle og rettigheter"
          value="Daglig leder"
          linkIcon
        />
      </List>
    </Section>
  );
};

export const PersonDetails = ({
  id,
  uniqueId = 'XXXXXX YYYYYY',
  isCurrentEndUser,
  address,
  ...props
}: AccountDetailsProps) => {
  return (
    <Section color="person" padding={6} spacing={2}>
      <AccountToolbar {...props} id={id} />
      <Divider />
      <NotificationSettings {...props} id={id} />
      <List size="sm">
        <Divider as="li" />
        <SettingsItem icon={Buildings2Icon} title="Fødselsnummer" value={uniqueId} linkIcon />
        <SettingsItem
          icon={{ svgElement: HandshakeIcon, theme: 'default' }}
          title="Rolle og rettigheter"
          value="Verge"
          linkIcon
        />
      </List>
    </Section>
  );
};

export const UserDetails = ({
  id = 'user',
  uniqueId = 'XXXXXX YYYYYY',
  phone = '99009900',
  address = 'Strømsveien 102, 0162 Oslo',
  email = 'dirk@digdir.no',
  ...props
}: AccountDetailsProps) => {
  return (
    <Section color="person" padding={6} spacing={2}>
      <AccountToolbar {...props} id={id} isCurrentEndUser={true} />
      <Divider />
      <List size="sm">
        <SettingsItem
          icon={MobileIcon}
          title="Varslinger på SMS"
          value={phone}
          badge={{ label: 'Endre mobil', variant: 'text' }}
          linkIcon
        />
        <SettingsItem
          icon={PaperplaneIcon}
          title="Varslinger på e-post"
          value={email}
          badge={{ label: 'Endre e-post', variant: 'text' }}
          linkIcon
        />
        <Divider as="li" />
        <SettingsItem
          icon={HouseIcon}
          title="Adresse"
          value={address}
          badge={{ label: 'Endre Adresse', variant: 'text' }}
          linkIcon
        />
      </List>
    </Section>
  );
};

export const GroupDetails = ({ id = 'group', accountIds }: AccountDetailsProps) => {
  const { items } = useAccountList({
    accounts: defaultAccounts as AccountListItemProps[],
  });

  const groupItems = accountIds
    ? items?.filter((item) => accountIds.includes(item.id))
    : items?.filter((item) => item.type === 'company');

  return (
    <Section color="company" padding={6} spacing={2}>
      <AccountToolbar name="group" type="group" id={id} />
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

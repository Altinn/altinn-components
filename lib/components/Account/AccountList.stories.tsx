import {
  BellIcon,
  HandshakeIcon,
  HashtagIcon,
  HeartFillIcon,
  HeartIcon,
  HouseHeartIcon,
  InboxIcon,
  MobileIcon,
  PaperplaneIcon,
  PlusIcon,
} from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { type ChangeEvent, Fragment, type ReactNode, useState } from 'react';
import {
  AccountList,
  AccountListItemDetails,
  type AccountListItemDetailsProps,
  type AccountListItemProps,
  type AccountListProps,
  AccountNotificationSettings,
  type AccountNotificationSettingsProps,
  type BadgeProps,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  List,
  Section,
  SettingsItem,
  type SettingsItemProps,
  SettingsModal,
  type SettingsModalProps,
  TextField,
  TextareaField,
  Toolbar,
  Typography,
} from '..';
import { type UseAccountsProps, accountList, defaultAccounts, useAccountList, useSettings } from '../../../examples';

const meta = {
  title: 'Account/AccountList',
  component: AccountList,
  tags: ['autodocs'],
  parameters: {},
  args: accountList as AccountListProps,
} satisfies Meta<typeof AccountList>;

export default meta;

interface GetContextMenuProps {
  id: string;
  name?: string;
  isCurrentEndUser?: boolean;
  favourite?: boolean;
  onToggleFavourite?: (id: string) => void;
  onModal?: (id: string, type: string) => void;
}

const getContextMenu = ({
  id,
  name,
  isCurrentEndUser,
  favourite = false,
  onToggleFavourite,
  onModal,
}: GetContextMenuProps) => {
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
        onClick: () => onModal?.(id, 'groups'),
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

export const Default = ({ includeGroups = false }: UseAccountsProps) => {
  const { toolbar, items, groups, onToggle, onToggleFavourite } = useAccountList({
    accounts: defaultAccounts,
    includeGroups,
  });

  const q = toolbar.search?.value?.toLowerCase() || '';

  const controlledItems = items?.map((item) => {
    return {
      ...item,
      highlightWords: q ? [q] : undefined,
      onClick: () => onToggle(item.id),
      onToggleFavourite: () => onToggleFavourite(item.id),
    };
  });

  return (
    <Section spacing={6}>
      {items && <AccountList groups={groups} items={controlledItems as AccountListItemProps[]} />}
    </Section>
  );
};

export const Loading = () => {
  const { items } = useAccountList({
    accounts: defaultAccounts,
  });

  const loadingItems = items
    ?.map((item) => ({
      ...item,
      groupId: 'loading',
      interactive: false,
      loading: true,
    }))
    ?.slice(0, 3);

  const loadingGroups = {
    loading: {
      title: 'Laster aktører ...',
    },
  };

  return (
    <Section spacing={6}>
      <AccountList items={loadingItems} groups={loadingGroups} />
    </Section>
  );
};

interface ModalProps {
  id?: string;
  type?: string;
}

const AddressSettingsModal = ({ open, onClose }: SettingsModalProps) => {
  const user = defaultAccounts[0];
  return (
    <SettingsModal icon={HouseHeartIcon} title="Endre adresse" open={open} onClose={onClose}>
      <TextareaField label="Adresse" value={user?.address} size="sm" readOnly />
      <Typography size="sm">
        <p>Altinn bruker adressen din fra Folkeregisteret. Gå videre for å endre adresse.</p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Gå videre</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

const AlertSettingsModal = ({ open, onClose }: SettingsModalProps) => {
  return (
    <SettingsModal icon={BellIcon} title="Endre varslingsadresser" open={open} onClose={onClose}>
      <TextField label="Mobiltelefon" value="99005599" size="sm" readOnly />
      <TextField label="E-postadresse" value="mathias@hotmail.com" size="sm" readOnly />
      <Typography size="sm">
        <p>
          Altin bruker kontaktinformasjon fra Kontakt- og reservasjonsregisteret, et felles kontaktregister for stat og
          kommune. Gå videre for å endre.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Gå videre</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

interface ControlledProps {
  includeGroups?: boolean;
  contextMenu?: boolean;
  collapsible?: boolean;
  color?: 'neutral';
  variant?: 'subtle' | 'tinted' | 'default';
}

export const Controlled = ({
  includeGroups = false,
  collapsible = false,
  contextMenu = false,
  variant,
  color,
}: ControlledProps) => {
  const { toolbar, items, groups, expandedId, onToggle, onToggleFavourite, onSettingsChange } = useAccountList({
    accounts: defaultAccounts,
    includeGroups,
  });

  const [modal, setModal] = useState<ModalProps>({});

  const onModal = (id: string, type: string) => {
    setModal({
      id,
      type,
    });
  };

  const onClose = () => setModal({});

  const modalId = modal?.id;
  const modalItem = modalId && items?.find((item) => item.id === modal.id);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, checked, name, value } = e.target;

    if (type === 'checkbox') {
      modalId && onSettingsChange(modalId, { [name]: checked });
    } else {
      modalId && onSettingsChange(modalId, { [name]: value });
    }
  };

  const q = toolbar?.search?.value;
  const results = toolbar?.results;

  const listGroups = toolbar?.active ? results?.groups : groups;
  const listItems = toolbar?.active ? results?.items : items;

  const collapsibleItems = listItems?.map((item) => {
    if (collapsible && expandedId === item.id) {
      return {
        ...item,
        collapsible,
        expanded: true,
        as: 'button',
        onClick: () => onToggle(item.id),
        highlightWords: q?.split(' '),
        children: (
          <AccountDetails {...(item as AccountListItemProps)} onToggleFavourite={onToggleFavourite} onModal={onModal} />
        ),
      };
    }
    return {
      ...item,
      as: 'button',
      variant,
      highlightWords: q?.split(' '),
      collapsible,
      onClick: () => onToggle(item.id),
      onToggleFavourite: () => onToggleFavourite(item.id),
      contextMenu: contextMenu && getContextMenu({ ...item, onModal }),
    };
  });

  return (
    <Section spacing={6} color={color}>
      <Toolbar {...toolbar} />
      <AccountList groups={listGroups} items={collapsibleItems as AccountListItemProps[]} />
      {modalId && modal?.type === 'contact' && <AlertSettingsModal open={true} onClose={onClose} />}
      {modalId && modal?.type === 'address' && <AddressSettingsModal open={true} onClose={onClose} />}
      {modalId && modal?.type === 'groups' && (
        <AccountGroupsModal {...modalItem} items={items as AccountListItemProps[]} open={true} onClose={onClose} />
      )}
      {modalId && modal?.type === 'notifications' && (
        <AccountNotificationsModal {...modalItem} open={true} onClose={onClose} onChange={onChange} />
      )}
    </Section>
  );
};

export const ControlledTinted = () => {
  return <Controlled color="neutral" variant="subtle" />;
};

export const Collapsible = () => {
  return <Controlled collapsible={true} contextMenu={true} />;
};

export const CollapsibleWithGroups = () => {
  return <Controlled includeGroups={true} collapsible={true} contextMenu={true} />;
};

interface AccountDetailsProps extends AccountListItemProps {
  smsAlerts?: boolean;
  emailAlerts?: boolean;
  email?: string;
  phone?: string;
  address?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onModal?: (id: string, type: string) => void;
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

const getNotificationSettings = ({
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
          : { variant: 'text', label: 'Legg til' };

  const title = smsAlerts || emailAlerts ? 'Varslinger er på' : 'Ingen varslinger';
  const value = smsAlerts && emailAlerts ? [email, phone].join(', ') : smsAlerts ? phone : emailAlerts && email;

  return {
    title,
    value,
    badge: badge as BadgeProps,
  };
};

export const CompanyDetails = ({
  id,
  parentId,
  uniqueId = 'XXXXXXXXX',
  title,
  description,
  icon,
  onChange,
  onModal,
  ...props
}: AccountDetailsProps) => {
  const { items } = useSettings({ accounts: defaultAccounts });

  const notificationSettings = getNotificationSettings({
    id,
    ...props,
  });

  const settings = [
    {
      icon: HandshakeIcon,
      title: 'Rolle og tilganger',
      value: 'Ektefelle',
      badge: { label: '2 tilganger' },
      linkIcon: true,
      as: 'button',
    },
    {
      ...notificationSettings,
      icon: BellIcon,
      linkIcon: true,
      onClick: () => onModal?.(id, 'notifications'),
      as: 'button',
    },
    {
      icon: HashtagIcon,
      title: 'Organisasjonsnummer',
      value: 'XXX YYY ZZZ',
    },
  ];

  const buttons = [{ label: 'Gå til innboks' }, { label: 'Tilgangsstyring' }];

  const parentAccount = items?.find((item) => 'id' in item && item.id === parentId) || {
    id,
    icon,
    title,
    uniqueId,
  };

  const childAcconts = items
    ?.filter((item) => 'parentId' in item && item.parentId === parentAccount.id)
    ?.map((child) => {
      return {
        avatar: child?.icon,
        title: child?.title,
        description: 'XXX XXX XXX',
        selected: child.id === id,
        href: '#',
      };
    });

  const organization = childAcconts && [
    {
      avatar: parentAccount.icon,
      title: parentAccount.title,
      description: 'YYY YYY YYY',
      href: '#',
      selected: parentAccount.id === id,
      items: childAcconts,
    },
  ];

  return (
    <AccountListItemDetails
      color="company"
      organization={organization as AccountListItemDetailsProps['organization']}
      buttons={buttons as AccountListItemDetailsProps['buttons']}
      settings={settings as AccountListItemDetailsProps['settings']}
    />
  );
};

export const PersonDetails = ({
  id,
  uniqueId = 'XXXXXX YYYYYY',
  isCurrentEndUser,
  address,
  onModal,
  ...props
}: AccountDetailsProps) => {
  const notificationSettings = getNotificationSettings({
    id,
    ...props,
  });

  const settings = [
    {
      icon: HandshakeIcon,
      title: 'Rolle og tilganger',
      value: 'Ektefelle',
      badge: { label: '2 tilganger' },
      linkIcon: true,
      as: 'button',
    },
    {
      ...notificationSettings,
      icon: BellIcon,
      linkIcon: true,
      onClick: () => onModal?.(id, 'notifications'),
      as: 'button',
    },
    {
      icon: HashtagIcon,
      title: 'Fødselsnummer',
      value: uniqueId,
    },
  ];

  const buttons = [{ label: 'Gå til innboks' }, { label: 'Tilgangsstyring' }];

  return (
    <AccountListItemDetails
      color="person"
      buttons={buttons as AccountListItemDetailsProps['buttons']}
      settings={settings as AccountListItemDetailsProps['settings']}
    />
  );
};

export const UserDetails = ({
  id = 'user',
  phone = '99009900',
  address = 'Strømsveien 102, 0162 Oslo',
  email = 'dirk@digdir.no',
  onModal,
}: AccountDetailsProps) => {
  const settings = [
    {
      icon: MobileIcon,
      title: 'Mobiltelefon',
      value: phone,
      badge: { label: 'Endre', variant: 'text' },
      onClick: () => onModal?.(id, 'contact'),
      linkIcon: true,
      as: 'button',
    },
    {
      icon: PaperplaneIcon,
      title: 'E-postadresse',
      value: email,
      badge: { label: 'Endre e-post', variant: 'text' },
      onClick: () => onModal?.(id, 'contact'),
      linkIcon: true,
      as: 'button',
    },
    {
      icon: HouseHeartIcon,
      title: 'Adresse',
      value: address,
      badge: { label: 'Endre adresse', variant: 'text' },
      onClick: () => onModal?.(id, 'address'),
      linkIcon: true,
      as: 'button',
    },
  ];

  const buttons = [{ label: 'Gå til innboks' }, { label: 'Tilgangsstyring' }];

  return (
    <AccountListItemDetails
      color="person"
      buttons={buttons as AccountListItemDetailsProps['buttons']}
      settings={settings as AccountListItemDetailsProps['settings']}
    />
  );
};

export const GroupDetails = ({ accountIds }: AccountDetailsProps) => {
  const { items } = useAccountList({
    accounts: defaultAccounts as AccountListItemProps[],
  });

  const groupItems = accountIds
    ? items?.filter((item) => accountIds.includes(item.id))
    : items?.filter((item) => item.type === 'company');

  return (
    <Section color="company" padding={6} spacing={2}>
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

interface AccountModalProps {
  title?: SettingsItemProps['title'];
  icon?: SettingsItemProps['icon'];
  description?: SettingsItemProps['description'];
  open?: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const AccountModal = ({
  icon,
  title = 'Navn på aktør',
  description,
  open = false,
  onClose,
  children,
}: AccountModalProps) => {
  return (
    <SettingsModal
      open={open}
      onClose={onClose}
      icon={icon}
      title={title as string}
      description={description as string}
    >
      {children}
    </SettingsModal>
  );
};

interface AccountNotificationsModalProps extends AccountModalProps, AccountNotificationSettingsProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AccountNotificationsModal = ({ open = true, onClose, onChange, ...props }: AccountNotificationsModalProps) => {
  return (
    <SettingsModal {...(props as SettingsModalProps)} open={open} onClose={onClose}>
      <AccountNotificationSettings {...(props as AccountNotificationSettingsProps)} />
      <ButtonGroup size="md">
        <Button>Lagre og avslutt</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

interface AccountGroupsModalProps extends AccountModalProps {
  items?: AccountListItemProps[];
}

const AccountGroupsModal = ({ icon, title, description, items, open, onClose }: AccountGroupsModalProps) => {
  return (
    <AccountModal icon={icon} title={title} description={description} open={open} onClose={onClose}>
      <Section spacing={4}>
        <Heading size="sm">{items?.length + ' grupper'}</Heading>
        <List size="sm" spacing={0}>
          {items
            ?.filter((item) => item.type === 'group')
            ?.map((item, index) => {
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
                    controls={
                      <Button size="xs" variant="outline">
                        Legg til
                      </Button>
                    }
                  />
                </Fragment>
              );
            })}
        </List>
      </Section>
      <Button variant="outline" icon={PlusIcon}>
        Ny gruppe
      </Button>
    </AccountModal>
  );
};

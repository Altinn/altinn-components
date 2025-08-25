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
import { type ChangeEvent, Fragment, type ReactNode, useState } from 'react';
import {
  AccountList,
  type AccountListItemProps,
  type AccountListProps,
  AccountNotificationSettings,
  type AccountNotificationSettingsProps,
  type BadgeProps,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  List,
  Modal,
  ModalBase,
  ModalBody,
  ModalHeader,
  Section,
  SettingsItem,
  type SettingsItemProps,
  Toolbar,
  Typography,
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

export const Controlled = () => {
  const { toolbar, items, groups, onToggle, onToggleFavourite } = useAccountList({
    accounts: defaultAccounts,
  });

  const q = toolbar.search?.value?.toLowerCase() || '';

  const controlledItems = items?.map((item) => {
    return {
      ...item,
      highlightWords: q ? [q] : undefined,
      onClick: () => onToggle(item.id),
      onToggleFavourite: () => onToggleFavourite(item.id),
      contextMenu: getContextMenu(item),
    };
  });

  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      {items && <AccountList groups={groups} items={controlledItems as AccountListItemProps[]} />}
    </Section>
  );
};

interface ModalProps {
  id?: string;
  type?: string;
}

export const Collapsible = () => {
  const { toolbar, items, groups, expandedId, onToggle, onToggleFavourite, onSettingsChange } = useAccountList({
    accounts: defaultAccounts,
  });

  const [modal, setModal] = useState<ModalProps>({});

  const onModal = (id: string, type: string) => {
    console.log('XX', id);
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

  const collapsibleItems = items?.map((item) => {
    if (expandedId === item.id) {
      return {
        ...item,
        collapsible: true,
        expanded: true,
        onClick: () => onToggle(item.id),
        children: (
          <AccountDetails {...(item as AccountListItemProps)} onToggleFavourite={onToggleFavourite} onModal={onModal} />
        ),
      };
    }
    return {
      ...item,
      collapsible: true,
      onClick: () => onToggle(item.id),
      onToggleFavourite: () => onToggleFavourite(item.id),
      contextMenu: getContextMenu({ ...item, onModal }),
    };
  });

  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      {items && <AccountList groups={groups} items={collapsibleItems as AccountListItemProps[]} />}
      {modalId && modal?.type === 'contact' && (
        <Modal open={true} onClose={onClose}>
          <Typography>
            <h1>Endre mobil og e-post</h1>
            <p>Mobiltelefon og e-post endres i kontakt- og reservasjonsregisteret.</p>
            <ButtonGroup>
              <Button>Gå videre</Button>
            </ButtonGroup>
          </Typography>
        </Modal>
      )}
      {modalId && modal?.type === 'address' && (
        <Modal open={true} onClose={onClose}>
          <Typography>
            <h1>Endre adresse</h1>
            <p>Adresseendring gjøres hos Skatteetaten i Folkeregisteret.</p>
            <ButtonGroup>
              <Button>Gå videre</Button>
            </ButtonGroup>
          </Typography>
        </Modal>
      )}{' '}
      {modalId && modal?.type === 'groups' && (
        <AccountGroupsModal {...modalItem} items={items as AccountListItemProps[]} open={true} onClose={onClose} />
      )}
      {modalId && modal?.type === 'notifications' && (
        <AccountNotificationsModal {...modalItem} open={true} onClose={onClose} onChange={onChange} />
      )}
    </Section>
  );
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
  onClick,
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
      <SettingsItem
        as="button"
        onClick={onClick}
        icon={BellIcon}
        title={title}
        value={value}
        badge={badge as BadgeProps}
        linkIcon
      />
    </List>
  );
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
  const { items } = useAccountSettings({ accounts: defaultAccounts });

  const parentAccount = items?.find((item) => item.id === parentId);

  return (
    <Section color="company" padding={6} spacing={2}>
      <AccountToolbar {...props} id={id} />
      <Divider />
      <NotificationSettings {...props} id={id} as="button" onClick={() => onModal?.(id, 'notifications')} />
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
  onModal,
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
          onClick={() => onModal?.(id, 'contact')}
          as="button"
          linkIcon
        />
        <SettingsItem
          icon={PaperplaneIcon}
          title="Varslinger på e-post"
          value={email}
          badge={{ label: 'Endre e-post', variant: 'text' }}
          onClick={() => onModal?.(id, 'contact')}
          as="button"
          linkIcon
        />
        <Divider as="li" />
        <SettingsItem
          icon={HouseIcon}
          title="Adresse"
          value={address}
          badge={{ label: 'Endre adresse', variant: 'text' }}
          onClick={() => onModal?.(id, 'address')}
          as="button"
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
    <ModalBase open={open} onClose={onClose}>
      <ModalHeader onClose={onClose}>
        <List>
          <SettingsItem icon={icon} title={title} description={description} interactive={false} />
        </List>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalBase>
  );
};

interface AccountNotificationsModalProps extends AccountModalProps, AccountNotificationSettingsProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AccountNotificationsModal = ({
  icon,
  title,
  description,
  open,
  onClose,
  onChange,
  ...props
}: AccountNotificationsModalProps) => {
  return (
    <AccountModal icon={icon} title={title} description={description} open={open} onClose={onClose}>
      <AccountNotificationSettings {...props} onChange={onChange} />
      <ButtonGroup>
        <Button onClick={onClose}>Lagre og avslutt</Button>
        <Button variant="outline" onClick={onClose}>
          Avbryt
        </Button>
      </ButtonGroup>
    </AccountModal>
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

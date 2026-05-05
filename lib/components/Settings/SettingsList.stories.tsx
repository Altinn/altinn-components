import {
  BellIcon,
  GlobeIcon,
  HandshakeIcon,
  HouseHeartIcon,
  InboxIcon,
  MobileIcon,
  SunIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  BookmarkModal,
  BookmarkSettingsList,
  Button,
  ContextMenu,
  type ContextMenuProps,
  Heading,
  ItemControls,
  Layout,
  type LayoutProps,
  PageBase,
  SettingsList,
  type SettingsListProps,
  type SettingsModalProps,
  Toolbar,
  type ToolbarMenuProps,
} from '..';

import {
  type UseSettingsProps,
  defaultAccounts,
  useAccountList,
  useAdmin,
  useBookmarks,
  useProfile,
  useSettings,
  useSettingsToolbar,
} from '../../../examples';

import {
  AccountAlertsModal,
  AddressSettingsModal,
  CompanyAlertsModal,
  CompanyInfoModal,
  ContactProfileModal,
  EmailSettingsModal,
  PhoneSettingsModal,
} from '../../components/Settings/SettingsModal.stories';

const meta = {
  title: 'Settings/SettingsList',
  component: SettingsList,
  tags: ['beta', 'autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    items: [
      {
        id: '1',
        icon: HandshakeIcon,
        title: 'Din rolle',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
      },
      {
        id: '2',
        icon: MobileIcon,
        title: 'Mobiltelefon',
        value: '+47 900 00 000',
        linkIcon: true,
      },
      {
        id: '3',
        icon: HouseHeartIcon,
        title: 'Adresse',
        badge: { variant: 'text', label: 'Legg til' },
        linkIcon: true,
      },
      {
        id: '4',
        icon: SunIcon,
        title: 'Modus',
        value: 'Auto',
        badge: { variant: 'text', label: 'Endre' },
        linkIcon: true,
      },
      {
        id: '5',
        icon: BellIcon,
        title: 'Varslinger',
        value: 'Alle',
        badge: { label: 'SMS og e-post' },
        linkIcon: true,
      },
      {
        id: '6',
        icon: GlobeIcon,
        title: 'Språk',
        badge: { variant: 'text', label: 'Legg til' },
        linkIcon: true,
      },
    ],
  },
} satisfies Meta<typeof SettingsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Grouped: Story = {
  args: {
    groups: {
      1: { title: 'Gruppe 1' },
      2: { title: 'Gruppe 2' },
    },
    items: [
      {
        id: '1',
        groupId: '1',
        icon: HandshakeIcon,
        title: 'Din rolle',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
      },
      {
        id: '2',
        groupId: '1',
        icon: MobileIcon,
        title: 'Mobiltelefon',
        value: '+47 900 00 000',
        linkIcon: true,
      },
      {
        id: '3',
        groupId: '1',
        icon: HouseHeartIcon,
        title: 'Adresse',
        badge: { variant: 'text', label: 'Legg til' },
        linkIcon: true,
      },
      {
        id: '4',
        groupId: '2',
        icon: SunIcon,
        title: 'Modus',
        value: 'Auto',
        badge: { variant: 'text', label: 'Endre' },
        linkIcon: true,
      },
      {
        id: '5',
        groupId: '2',
        icon: BellIcon,
        title: 'Varslinger',
        value: 'Alle',
        badge: { label: 'SMS og e-post' },
        linkIcon: true,
      },
      {
        id: '6',
        groupId: '2',
        icon: GlobeIcon,
        title: 'Språk',
        badge: { variant: 'text', label: 'Legg til' },
        linkIcon: true,
      },
    ],
  },
};

export const Companies: Story = {
  args: {
    groups: {
      1: { title: 'Virksomheter' },
    },
    items: [
      {
        id: '1',
        icon: {
          name: 'Bergen Bar & Cafe',
          type: 'company',
        },
        title: 'Bergen Bar & Cafe',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '1',
      },
      {
        id: '2',
        icon: {
          name: 'Bergen Bar & Cafe',
          type: 'company',
          variant: 'outline',
        },
        title: 'Bergen Bar & Cafe',
        value: 'Ingen spesiell rolle',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '1',
      },
      {
        id: '3',
        icon: {
          name: 'Tre kokker og en pizza',
          type: 'company',
        },
        title: 'Tre kokker og en pizza',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '3',
      },
      {
        id: '4',
        icon: {
          name: 'Tre kokker og en pizza',
          type: 'company',
          variant: 'outline',
        },
        title: 'Tre kokker og en pizza',
        value: 'Ingen spesiell rolle',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '3',
      },
      {
        id: '5',
        icon: {
          name: 'Stavangerkameratene',
          type: 'company',
        },
        title: 'Stavangerkameratene',
        value: 'Styremedlem',
        badge: { label: '1 rettigheter' },
        linkIcon: true,
        groupId: '2',
      },
      {
        id: '6',
        icon: {
          name: 'Børs cafe',
          type: 'company',
          variant: 'outline',
        },
        title: 'Børs cafe',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '2',
      },
      {
        id: '7',
        icon: {
          name: 'Stavanger Brekk',
          type: 'company',
          variant: 'outline',
        },
        title: 'Stavanger Børs',
        value: 'Daglig leder',
        badge: { label: '12 rettigheter' },
        linkIcon: true,
        groupId: '2',
      },
      {
        id: '8',
        icon: {
          name: 'Utestedet Stavanger AS',
          type: 'company',
          variant: 'outline',
        },
        title: 'Utestedet Stavanger AS',
        value: 'Ingen spesiell rolle',
        badge: { label: '2 rettigheter' },
        linkIcon: true,
        groupId: '2',
      },
    ],
  },
};

export const SearchResult: Story = {
  args: {
    groups: {
      search: { title: '1 treff' },
    },
    items: [
      {
        id: '1',
        icon: HandshakeIcon,
        title: 'Din rolle',
        highlightWords: ['rolle'],
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: 'search',
      },
      {
        id: '2',
        icon: {
          name: 'Bergen Bar & Cafe',
          type: 'company',
        },
        title: 'Bergen Bar & Cafe',
        highlightWords: ['rolle'],
        value: 'Ingen roller',
        badge: { label: '1 rettighet' },
        linkIcon: true,
        groupId: 'search',
      },
      {
        id: '3',
        icon: {
          name: 'Bergen Barnehage',
          type: 'company',
        },
        title: 'Bergen Barnehage',
        highlightWords: ['rolle'],
        value: 'Ingen roller',
        badge: { label: '2 rettigheter' },
        linkIcon: true,
        groupId: 'search',
      },
    ],
  },
};

interface ControlledSettingsModalProps extends SettingsModalProps {
  id?: string;
  groupId?: string;
  title?: string;
}

const ControlledSettingsModal = ({ id, icon, groupId, open, onClose, ...item }: ControlledSettingsModalProps) => {
  if (id?.startsWith('accountAlerts')) {
    return <AccountAlertsModal {...item} icon={icon} open={open} onClose={onClose} />;
  }

  switch (groupId) {
    case 'profile':
      return <ContactProfileModal {...item} open={open} onClose={onClose} />;
    case 'alerts':
      return (
        <>
          <ContactProfileModal {...item} readOnly={true} open={open && id === 'smsAlerts'} onClose={onClose} />
          <ContactProfileModal {...item} readOnly={true} open={open && id === 'emailAlerts'} onClose={onClose} />
        </>
      );
    case 'contact':
      return (
        <>
          <PhoneSettingsModal {...item} open={open && id === 'phone'} onClose={onClose} />
          <EmailSettingsModal {...item} open={open && id === 'email'} onClose={onClose} />
          <AddressSettingsModal {...item} open={open && id === 'address'} onClose={onClose} />
        </>
      );
    case 'companyInfo':
      return <CompanyInfoModal {...item} open={open} onClose={onClose} />;

    case 'companyAlerts':
      return (
        <>
          <CompanyAlertsModal {...item} type="phone" open={open && id === 'companyPhone'} onClose={onClose} />
          <CompanyAlertsModal {...item} type="email" open={open && id === 'companyEmail'} onClose={onClose} />
        </>
      );
    default:
      return;
  }
};

interface ControlledSettingsProps extends UseSettingsProps {
  layout?: LayoutProps;
  title?: string;
}

export const ControlledSettings = ({
  layout = { theme: 'settings' },
  title = 'Controlled settings',
  groups,
  includeGroups,
  excludeGroups,
}: ControlledSettingsProps) => {
  const toolbar = useSettingsToolbar({});

  const query = {
    q: toolbar?.search?.value?.toString().toLowerCase(),
  };

  const { onSettingsChange, results, ...settings } = useSettings({
    accounts: defaultAccounts,
    query,
    includeGroups,
    excludeGroups,
  });

  const [id, setId] = useState<string>('');

  const onClose = () => {
    setId('');
  };

  const items = settings?.items.map((item) => {
    const { id, variant } = item;

    if (!variant || variant === 'default') {
      return {
        ...item,
        description: undefined,
        as: 'button',
        onClick: () => id && setId(id),
      };
    }

    return item;
  });

  const item = (id && items.find((item) => item.id === id)) || {
    title: '',
    description: '',
  };

  const allGroups = {
    ...settings?.groups,
    ...groups,
  };

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl">{title}</Heading>
        <Toolbar {...toolbar} />
        {query?.q ? (
          <SettingsList groups={results?.groups} items={results?.items as SettingsListProps['items']} />
        ) : (
          <SettingsList groups={allGroups} items={items as SettingsListProps['items']} />
        )}
        <ControlledSettingsModal
          {...(item as ControlledSettingsModalProps)}
          title={item?.title as string}
          description={item?.description as string}
          open={!!id}
          onClose={onClose}
        />
      </PageBase>
    </Layout>
  );
};

export const PersonSettings = () => {
  const { currentAccount, layout } = useProfile({ pageId: 'profile' });

  return (
    <ControlledSettings
      title={`Innstillinger for ${currentAccount?.name}`}
      layout={layout}
      includeGroups={['personalia', 'alerts', 'alertsLink', 'accountsLink', 'accounts', 'bookmarksLink', 'other']}
      groups={{
        personalia: {
          title: 'Dine personopplysninger',
        },
        alerts: {
          title: 'Kontaktinformasjon og varslinger',
        },
        accountsLink: {
          title: 'Dine aktører',
        },
        bookmarksLink: {
          title: 'Andre innstillinger',
        },
        other: {
          title: '',
        },
      }}
    />
  );
};

import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
export type AccountListItemType = 'person' | 'company' | 'group';

export interface AccountSettingsControlsProps {
  id: string;
  type: AccountListItemType;
  isCurrentEndUser?: boolean; // Optional, used to indicate if this account is the current end user
  isDeleted?: boolean;
  favourite?: boolean; // Optional, used for marking favourite accounts
  isPreselectedParty?: boolean;
  favouriteLabel?: string; // Optional, label for the favourite icon
  onToggleFavourite?: (id: string) => void; // Optional, callback for toggling favourite status
  accountLabel?: string; // Optional, used for displaying a badge
  loading?: boolean;
}

export const AlertSettings = () => {
  const { layout } = useProfile({ pageId: 'alerts' });

  return <ControlledSettings title="Varslinger" layout={layout} includeGroups={['smsAlerts', 'emailAlerts']} />;
};

export const BookmarkSettings = () => {
  const { layout } = useProfile({ pageId: 'bookmarks' });
  const { expandedId, onClose, items, search, groups } = useBookmarks({
    grouped: true,
  });
  const modalProps = expandedId && items.find((item) => item.id === expandedId);

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && (
          <BookmarkModal
            {...modalProps}
            title="Rediger lagret søk"
            open={expandedId !== ''}
            onClose={onClose}
            buttons={[
              { label: 'Lagre', onClick: () => onClose() },
              { label: 'Slett', variant: 'outline', onClick: () => onClose() },
            ]}
          />
        )}
      </PageBase>
    </Layout>
  );
};

export const CompanySettings = () => {
  const { accountMenu, currentAccount, layout } = useAdmin({
    defaultAccountId: 'diaspora',
    pageId: 'settings',
  });
  const toolbar = useSettingsToolbar({
    accountMenu: accountMenu as ToolbarMenuProps,
  });

  return (
    <ControlledSettings
      layout={layout}
      title={currentAccount?.name ? `Innstillinger for ${currentAccount.name}` : ''}
      includeGroups={['companyAlerts', 'companyInfo']}
      query={{
        q: toolbar?.search?.value,
      }}
      groups={{
        companyAlerts: {
          title: 'Varslingsadresser for virksomheten',
        },
        companyInfo: {
          title: 'Opplysninger om virksomheten',
        },
      }}
    />
  );
};

const AccountSettingsControls = ({
  id,
  type,
  isCurrentEndUser = false,
  favourite = false,
  isPreselectedParty = false,
  favouriteLabel,
  onToggleFavourite,
}: AccountSettingsControlsProps) => {
  const contextMenu = {
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

  return (
    <ItemControls>
      {!isCurrentEndUser && !isPreselectedParty && type !== 'group' && (
        <Button
          size="xs"
          variant="ghost"
          rounded
          aria-label={favouriteLabel || 'Toggle favourite'}
          onClick={() => onToggleFavourite?.(id)}
        >
          {favourite ? <HeartFillIcon /> : <HeartIcon />}
        </Button>
      )}
      {contextMenu && <ContextMenu {...(contextMenu as ContextMenuProps)} />}
    </ItemControls>
  );
};

export const AccountSettings = () => {
  const { layout } = useProfile({ pageId: 'accounts' });
  const { toolbar, items, groups, expandedId, onToggle, onToggleFavourite } = useAccountList({
    accounts: defaultAccounts,
  });

  const listItems = items
    ?.filter((item) => !item.isCurrentEndUser)
    .map((item) => {
      return {
        ...item,
        badge: undefined,
        linkIcon: true,
        collapsible: true,
        expanded: expandedId === item.id,
        as: 'button',
        onClick: () => onToggle(item.id),
        controls: <AccountSettingsControls {...item} onToggleFavourite={onToggleFavourite} />,
      };
    });

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Aktører</Heading>
        <Toolbar {...toolbar} />
        <SettingsList groups={groups} items={listItems as SettingsListProps['items']} />
      </PageBase>
    </Layout>
  );
};

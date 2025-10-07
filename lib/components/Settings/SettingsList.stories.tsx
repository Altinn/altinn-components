import { BellIcon, GlobeIcon, HandshakeIcon, HouseHeartIcon, MobileIcon, SunIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Heading, PageBase, SettingsList, type SettingsListProps, type SettingsModalProps, Toolbar } from '..';

import { type UseSettingsProps, defaultAccounts, useAdmin, useSettings, useSettingsToolbar } from '../../../examples';

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
  parameters: {},
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

export const ControlledSettings = ({ query = {}, groups, includeGroups, excludeGroups }: UseSettingsProps) => {
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
    <>
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
    </>
  );
};

export const SearchSettings = () => {
  const toolbar = useSettingsToolbar({});

  return (
    <PageBase>
      <Heading size="xl">Alle innstillinger</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings
        query={{
          q: toolbar?.search?.value,
        }}
      />
    </PageBase>
  );
};

export const AlertSettings = () => {
  const toolbar = useSettingsToolbar({});

  return (
    <PageBase>
      <Heading size="xl">Mine varslinger</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings
        query={{
          q: toolbar?.search?.value,
        }}
        includeGroups={['alerts', 'profile', 'person', 'company']}
      />
    </PageBase>
  );
};

export const AccountSettings = () => {
  const toolbar = useSettingsToolbar({});

  return (
    <PageBase>
      <Heading size="xl">Innstillinger</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings
        query={{
          q: toolbar?.search?.value,
        }}
        includeGroups={['contact', 'accountSettings', 'other']}
      />
    </PageBase>
  );
};

export const PersonSettings = () => {
  const { accountMenu, currentAccount } = useAdmin({
    defaultAccountId: 'person',
  });
  const toolbar = useSettingsToolbar({ accountMenu });

  return (
    <PageBase color="person">
      <Heading size="xl">Innstillinger for {currentAccount?.name}</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings
        query={{
          q: toolbar?.search?.value,
        }}
        includeGroups={['contact']}
        groups={{
          contact: {
            title: 'Kontaktinformasjon',
          },
        }}
      />
    </PageBase>
  );
};

export const CompanySettings = () => {
  const { accountMenu, currentAccount } = useAdmin({
    defaultAccountId: 'diaspora',
  });
  const toolbar = useSettingsToolbar({ accountMenu });

  return (
    <PageBase color="company">
      <Heading size="xl">Innstillinger for {currentAccount?.name}</Heading>
      <Toolbar {...toolbar} />
      <ControlledSettings
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
    </PageBase>
  );
};

export const AdminSettings = () => {
  const { currentAccount } = useAdmin({ defaultAccountId: 'diaspora' });

  if (currentAccount?.type === 'person') {
    return <PersonSettings />;
  }

  return <CompanySettings />;
};

export const DashboardSettings = () => {
  return (
    <ControlledSettings
      includeGroups={['contact']}
      groups={{
        contact: {
          title: '',
        },
      }}
    />
  );
};

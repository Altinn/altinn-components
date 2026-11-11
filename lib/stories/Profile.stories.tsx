import { BellIcon, HeartIcon } from '@navikt/aksel-icons';
import * as AccountListStories from '../components/Account/AccountList.stories';
import * as ActivityLogStories from '../components/ActivityLog/ActivityLog.stories';
import * as SettingsStories from '../components/Settings/SettingsList.stories';

import { useAccounts, useProfile, useSettings } from '../../examples';
import {
  DashboardHeader,
  type DashboardHeaderProps,
  Layout,
  PageBase,
  type SettingsItemProps,
  SettingsList,
} from '../components';

const meta = {
  title: 'Demo/Profile',
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

export const ProfilePage = () => {
  return <SettingsStories.PersonSettings />;
};

export const DashboardPage = () => {
  const { layout } = useProfile({});
  const { defaultAccount } = useAccounts({});
  const { items } = useSettings({});

  const linkSettings = [
    {
      icon: HeartIcon,
      title: 'Mine aktører',
      description: 'Administrer aktører, favoritter og grupper.',
      href: '/iframe.html?id=demo-profile--accounts-page',
      groupId: '1',
      badge: { label: '20 aktører' },
    },
    {
      icon: BellIcon,
      title: 'Mine varslinger',
      description: 'Varslinger og varslingsprofiler.',
      href: '/iframe.html?id=demo-profile--notifications',
      groupId: '1',
      badge: { label: '3 profiler' },
    },
  ].map((item) => ({
    ...item,
    variant: 'link',
    as: 'a',
    groupId: '1',
    linkIcon: true,
  }));

  const contactSettings =
    items
      ?.filter((item) => item.groupId === 'contact')
      ?.map((item) => ({
        ...item,
        groupId: '0',
      })) || [];

  const dashboardItems = [...contactSettings, ...linkSettings]?.map((item, index) => {
    return {
      ...item,
      id: 's' + index,
    };
  });

  const groups = {
    '1': { title: 'Min profil' },
    '0': { title: '' },
  };

  return (
    <Layout {...layout}>
      <PageBase>
        <DashboardHeader {...(defaultAccount as DashboardHeaderProps)} />
        <SettingsList groups={groups} items={dashboardItems as SettingsItemProps[]} />
      </PageBase>
    </Layout>
  );
};

export const AccountsPage = () => {
  const { layout } = useProfile({ pageId: 'accounts' });
  return (
    <AccountListStories.ControlledPage
      layout={layout}
      title="Aktørinnstillinger"
      collapsible={true}
      contextMenu={true}
      virtualized={true}
    />
  );
};

export const Notifications = () => {
  return <SettingsStories.AlertSettings />;
};

export const SavedSearches = () => {
  return <SettingsStories.BookmarkSettings />;
};

export const ActivityLogPage = () => {
  return <ActivityLogStories.ProfileActivityLog />;
};

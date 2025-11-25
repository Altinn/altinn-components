import { BellIcon, CogIcon, HeartIcon } from "@navikt/aksel-icons";
import * as SettingsStories from "../components/Settings/SettingsList.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";
import * as AccountListStories from "../components/Account/AccountList.stories";

import {
  Heading,
  Layout,
  PageBase,
  SettingsList,
  Breadcrumbs,
  DashboardHeader,
  type DashboardHeaderProps,
  type SettingsItemProps,
} from "../components";
import { useProfile, useAccounts, useSettings } from "../../examples";

const meta = {
  title: "Demo/Profile",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const DashboardPage = () => {
  const { layout } = useProfile({});
  const { defaultAccount } = useAccounts({});
  const { items } = useSettings({});

  const linkSettings = [
    {
      icon: HeartIcon,
      title: "Mine aktører",
      description: "Administrer aktører, favoritter og grupper.",
      href: "/iframe.html?id=demo-profile--accounts-page",
      groupId: "1",
      badge: { label: "20 aktører" },
    },
    {
      icon: BellIcon,
      title: "Mine varslinger",
      description: "Varslinger og varslingsprofiler.",
      href: "/iframe.html?id=demo-profile--alerts-page",
      groupId: "1",
      badge: { label: "3 profiler" },
    },
    {
      icon: CogIcon,
      title: "Flere innstillinger",
      href: "/iframe.html?id=demo-profile--settings-page",
      as: "a",
    },
  ].map((item) => ({
    ...item,
    variant: "link",
    as: "a",
    groupId: "1",
    linkIcon: true,
  }));

  const contactSettings =
    items
      ?.filter((item) => item.groupId === "contact")
      ?.map((item) => ({
        ...item,
        groupId: "0",
      })) || [];

  const dashboardItems = [...contactSettings, ...linkSettings]?.map(
    (item, index) => {
      return {
        ...item,
        id: "s" + index,
      };
    }
  );

  const groups = {
    "1": { title: "Min profil" },
    "0": { title: "" },
  };

  return (
    <Layout {...layout}>
      <PageBase>
        <DashboardHeader {...(defaultAccount as DashboardHeaderProps)} />
        <SettingsList
          groups={groups}
          items={dashboardItems as SettingsItemProps[]}
        />
      </PageBase>
    </Layout>
  );
};

export const AccountsPage = () => {
  const { breadcrumbs, layout } = useProfile({ pageId: "accounts" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Mine aktører</Heading>
        <AccountListStories.Collapsible />
      </PageBase>
    </Layout>
  );
};

export const AccountsPageVirtualized = () => {
  const { breadcrumbs, layout } = useProfile({ pageId: "accounts" });
  return (
    <Layout {...layout} useGlobalHeader={true}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Mine aktører (Virtualized)</Heading>
        <AccountListStories.Virtualized />
      </PageBase>
    </Layout>
  );
};

export const AlertsPage = () => {
  const { breadcrumbs, layout } = useProfile({ pageId: "alerts" });
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <SettingsStories.AlertSettings />
      </PageBase>
    </Layout>
  );
};

export const SettingsPage = () => {
  const { breadcrumbs, layout } = useProfile({ pageId: "settings" });

  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <SettingsStories.AccountSettings />
      </PageBase>
    </Layout>
  );
};

export const ActivityLogPage = () => {
  const { breadcrumbs, layout } = useProfile({
    pageId: "activity-log",
  });
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Aktivitetslogg</Heading>
        <ActivityLogStories.Controlled />
      </PageBase>
    </Layout>
  );
};

export const UsersPage = () => {
  const { breadcrumbs, layout } = useProfile({ pageId: "users" });
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Brukere med fullmakt til din profil</Heading>
      </PageBase>
    </Layout>
  );
};

export const AccessPage = () => {
  const { breadcrumbs, layout } = useProfile({ pageId: "access" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tilganger du har gitt til andre</Heading>
      </PageBase>
    </Layout>
  );
};

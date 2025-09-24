import * as DashboardStories from "./Dashboard/Dashboard.stories";
import * as SettingsStories from "./Settings/Settings.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";
import * as AccountListStories from "../components/Account/AccountList.stories";

import { Heading, Layout, PageBase, Breadcrumbs } from "../components";
import { useProfile } from "../../examples";

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
  return (
    <Layout {...layout}>
      <DashboardStories.UserDashboard />
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

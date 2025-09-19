import * as SettingsStories from "./Profile/Settings.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";
import * as AccountListStories from "../components/Account/AccountList.stories";

import {
  Heading,
  Layout,
  PageBase,
  Breadcrumbs,
  DashboardHeader,
  type DashboardHeaderProps,
  DashboardCard,
  type DashboardCardProps,
  Grid,
} from "../components";
import { useProfileLayout } from "../../examples";
import { HeartIcon, BellIcon, CogIcon } from "@navikt/aksel-icons";

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
  const { breadcrumbs, account, ...layout } = useProfileLayout({});
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <DashboardHeader
          icon={account?.icon as DashboardHeaderProps["icon"]}
          title={account?.name}
          description={account?.description}
        />
        <Grid cols={3}>
          <DashboardCard
            href="/iframe.html?id=demo-profile--accounts-page"
            icon={HeartIcon as DashboardCardProps["icon"]}
            title="Mine aktører"
          >
            <p>Mine aktører, favoritter og grupper.</p>
          </DashboardCard>
          <DashboardCard
            href="/iframe.html?id=demo-profile--alerts-page"
            icon={BellIcon as DashboardCardProps["icon"]}
            title="Mine varslinger"
          >
            <p>Mine varslingsadresser og varslinger per aktør.</p>
          </DashboardCard>
          <DashboardCard
            href="/iframe.html?id=demo-profile--settings-page"
            icon={CogIcon as DashboardCardProps["icon"]}
            title="Innstillinger"
          >
            <p>Kontaktinformasjon og andre innstillinger.</p>
          </DashboardCard>
        </Grid>

        <SettingsStories.DashboardSettings />
      </PageBase>
    </Layout>
  );
};

export const AccountsPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "accounts" });
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
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "alerts" });
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
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "settings" });

  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <SettingsStories.AllSettings />
      </PageBase>
    </Layout>
  );
};

export const ActivityLogPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({
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
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "users" });
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
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "access" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tilganger du har gitt til andre</Heading>
      </PageBase>
    </Layout>
  );
};

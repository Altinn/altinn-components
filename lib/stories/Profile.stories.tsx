import * as SettingsStories from "./Profile/Settings.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";
import * as AccountListStories from "../components/Account/AccountList.stories";
import * as AccountSettingsStories from "../components/Account/AccountSettingsList.stories";

import {
  Heading,
  Layout,
  PageBase,
  Breadcrumbs,
  DashboardHeader,
  SettingsSection,
  Toolbar,
} from "../components";
import { useProfileLayout } from "../../examples";

const meta = {
  title: "Demo/Profile",
  tags: ["beta", "autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const DashboardPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({});
  return (
    <Layout {...layout}>
      <DashboardHeader
        type="person"
        name="Mathias Dyngeland"
        description="Fødselsnr: XXXXXX YYYYYY"
      >
        <SettingsStories.DashboardSettings />
      </DashboardHeader>
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

export const UsersPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "users" });
  return (
    <Layout {...layout}>
      <PageBase>
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

export const SettingsPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "settings" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Innstillinger</Heading>
        <Toolbar
          search={{ name: "search", placeholder: "Søk i innstillinger" }}
        />
        <Heading size="lg">Kontaktinformasjon</Heading>
        <SettingsSection>
          <SettingsStories.ContactSettings />
        </SettingsSection>
        <Heading size="lg">Varslinger</Heading>
        <SettingsSection>
          <SettingsStories.MoreSettings />
        </SettingsSection>
        <Heading size="lg">Flere innstillinger</Heading>
        <SettingsSection>
          <SettingsStories.CollapsibleSettings />
        </SettingsSection>
      </PageBase>
    </Layout>
  );
};

export const NotificationsPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "settings" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Varslingsinnstillinger</Heading>
        <SettingsSection>
          <SettingsStories.NotificationSettings />
        </SettingsSection>
        <Heading size="lg">Varslinger per aktør</Heading>
        <SettingsSection>
          <AccountSettingsStories.Controlled />
        </SettingsSection>
      </PageBase>
    </Layout>
  );
};

export const ActivityLogPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({
    pageId: "log",
  });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Aktivitetslogg</Heading>
        <ActivityLogStories.Controlled />
      </PageBase>
    </Layout>
  );
};

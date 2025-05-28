import * as SettingsStories from "./Profile/Settings.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";
import * as AccountListStories from "../components/Account/AccountList.stories";
import { BellIcon, CogIcon, PersonRectangleIcon } from "@navikt/aksel-icons";

import {
  Heading,
  Layout,
  PageBase,
  Breadcrumbs,
  DashboardHeader,
  List,
  SettingsItem,
  Divider,
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

export const Dashboard = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({});
  return (
    <Layout {...layout}>
      <DashboardHeader type="person" name="Mathias Dyngeland">
        <List size="sm">
          <SettingsItem
            icon={PersonRectangleIcon}
            title="mathias@dyngeland.no"
            description="99009900"
            linkIcon
            as="a"
            badge={<span data-size="xs">Endre profil</span>}
            href="/?path=/story/demo-profile--settings"
          />
          <Divider />
          <SettingsItem
            as="a"
            href="/?path=/story/demo-profile--notifications"
            icon={BellIcon}
            title="Varslinger er på"
            description="Alle varslinger"
            badge={{ label: "SMS og Epost" }}
            linkIcon
          />
          <Divider />
          <SettingsItem
            icon={CogIcon}
            title="Flere innstillinger"
            linkIcon
            as="a"
            href="/?path=/story/demo-profile--settings"
          />
        </List>
      </DashboardHeader>
    </Layout>
  );
};

export const Accounts = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "accounts" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <AccountListStories.AccountSettings />
      </PageBase>
    </Layout>
  );
};

export const Users = () => {
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

export const Access = () => {
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

export const Settings = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "settings" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Kontaktinformasjon</Heading>
        <SettingsStories.ContactSettings />
        <Heading size="lg">Flere innstillinger</Heading>
        <SettingsStories.MoreSettings />
      </PageBase>
    </Layout>
  );
};

export const Notifications = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "settings" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Varslingsinnstillinger</Heading>
        <SettingsStories.NotificationSettings />
        <Heading size="lg">Varslinger per aktør</Heading>
        <SettingsStories.AccountSettings />
      </PageBase>
    </Layout>
  );
};

export const Log = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({
    pageId: "log",
  });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Aktivitetslogg</Heading>
        <ActivityLogStories.Default />
      </PageBase>
    </Layout>
  );
};

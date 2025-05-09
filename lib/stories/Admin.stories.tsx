import * as SettingsStories from "./Admin/Settings.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";
import { BellIcon, Buildings2Icon, CogIcon } from "@navikt/aksel-icons";

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
import { useAdminLayout } from "../../examples";

const meta = {
  title: "Demo/Admin",
  tags: ["beta", "autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const Dashboard = () => {
  const { settings, account, layout } = useAdminLayout({});
  return (
    <Layout {...layout}>
      <DashboardHeader
        type="company"
        name={account?.name || "Company"}
        description={settings?.companyId}
      >
        <List size="sm">
          <SettingsItem
            icon={Buildings2Icon}
            title="Forretningsadresse"
            value={settings?.address}
            linkIcon
            as="a"
            badge={<span data-size="xs">Endre</span>}
            href="/?path=/story/demo-profile--settings"
          />
          <Divider />
          <SettingsItem
            as="a"
            href="/?path=/story/demo-profile--notifications"
            icon={BellIcon}
            title="Varslingsadresser"
            description="kontakt@digdir.no, + 47 99999999"
            badge={<span data-size="xs">Endre</span>}
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

export const Users = () => {
  const { account, breadcrumbs, layout } = useAdminLayout({ pageId: "users" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Brukere med fullmakt til {account?.name}</Heading>
      </PageBase>
    </Layout>
  );
};

export const Access = () => {
  const { account, breadcrumbs, layout } = useAdminLayout({ pageId: "access" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tilganger til {account?.name}</Heading>
      </PageBase>
    </Layout>
  );
};

export const Requests = () => {
  const { breadcrumbs, layout } = useAdminLayout({ pageId: "requests" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
      </PageBase>
    </Layout>
  );
};

export const ApiSettings = () => {
  const { breadcrumbs, layout } = useAdminLayout({ pageId: "api-settings" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
      </PageBase>
    </Layout>
  );
};

export const ReverseAccess = () => {
  const { breadcrumbs, layout } = useAdminLayout({ pageId: "reverse-access" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
      </PageBase>
    </Layout>
  );
};

export const ClientAdmin = () => {
  const { breadcrumbs, layout } = useAdminLayout({ pageId: "client-admin" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
      </PageBase>
    </Layout>
  );
};

export const Settings = () => {
  const { account, breadcrumbs, layout } = useAdminLayout({
    pageId: "settings",
  });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Innstillinger for {account?.name}</Heading>
        <SettingsStories.PrimarySettings />
        <Heading size="lg">Flere innstillinger</Heading>
        <SettingsStories.SecondarySettings />
      </PageBase>
    </Layout>
  );
};

export const Log = () => {
  const { breadcrumbs, layout } = useAdminLayout({
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

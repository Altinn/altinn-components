import * as SettingsStories from "./Admin/Settings.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";

import {
  Heading,
  Layout,
  PageBase,
  Breadcrumbs,
  DashboardHeader,
  SettingsSection,
  Toolbar,
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

export const DashboardPage = () => {
  const { settings, account, layout } = useAdminLayout({});
  return (
    <Layout {...layout}>
      <DashboardHeader
        type="company"
        name={account?.name || "Company"}
        description={settings?.companyId}
      >
        <SettingsStories.DashboardSettings />
      </DashboardHeader>
    </Layout>
  );
};

export const UsersPage = () => {
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

export const AccessPage = () => {
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

export const RequestsPage = () => {
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

export const ApiSettingsPage = () => {
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

export const ReverseAccessPage = () => {
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

export const ClientAdminPage = () => {
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

export const SettingsPage = () => {
  const { account, breadcrumbs, layout } = useAdminLayout({
    pageId: "settings",
  });
  return (
    <Layout {...layout}>
      <PageBase color="company">
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Innstillinger for {account?.name}</Heading>
        <Toolbar search={{ name: "search", placeholder: "Søk" }} />
        <Heading size="lg">Varslingsadresser for virksomheten</Heading>
        <SettingsSection>
          <SettingsStories.AlertSettings />
        </SettingsSection>
        <Heading size="lg">Virksomhetsopplysninger</Heading>
        <SettingsSection>
          <SettingsStories.CompanySettings />
        </SettingsSection>
      </PageBase>
    </Layout>
  );
};

export const ActivityLogPage = () => {
  const { breadcrumbs, layout } = useAdminLayout({
    pageId: "activity-log",
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

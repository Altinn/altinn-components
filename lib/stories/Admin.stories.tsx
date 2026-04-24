import * as DashboardStories from "../components/Dashboard/Dashboard.stories";
import * as SettingsStories from "../components/Settings/SettingsList.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";

import { Heading, Layout, PageBase, Toolbar, Breadcrumbs } from "../components";
import { useAdmin } from "../../examples";

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
  const { currentAccount, layout } = useAdmin({});

  return (
    <Layout {...layout}>
      {currentAccount?.type === "company" ? (
        <DashboardStories.CompanyDashboard />
      ) : (
        <DashboardStories.PersonDashboard />
      )}
    </Layout>
  );
};

export const UsersPage = () => {
  const { currentAccount, breadcrumbs, color, layout, toolbar } = useAdmin({
    pageId: "users",
  });
  return (
    <Layout {...layout}>
      <PageBase color={color}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">
          Brukere med fullmakt til {currentAccount?.name}
        </Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>
  );
};

export const AccessPage = () => {
  const { currentAccount, breadcrumbs, color, layout, toolbar } = useAdmin({
    pageId: "access",
  });
  return (
    <Layout {...layout}>
      <PageBase color={color}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tilganger til {currentAccount?.name}</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>
  );
};

export const RequestsPage = () => {
  const { breadcrumbs, color, layout, toolbar } = useAdmin({
    pageId: "requests",
  });
  return (
    <Layout {...layout}>
      <PageBase color={color}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>
  );
};

export const ApiSettingsPage = () => {
  const { breadcrumbs, color, layout, toolbar } = useAdmin({
    pageId: "api-settings",
  });
  return (
    <Layout {...layout}>
      <PageBase color={color}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>
  );
};

export const ReverseAccessPage = () => {
  const { breadcrumbs, color, layout, toolbar } = useAdmin({
    pageId: "reverse-access",
  });
  return (
    <Layout {...layout}>
      <PageBase color={color}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>
  );
};

export const ClientAdminPage = () => {
  const { breadcrumbs, color, layout, toolbar } = useAdmin({
    pageId: "client-admin",
  });
  return (
    <Layout {...layout}>
      <PageBase color={color}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tittel</Heading>
        <Toolbar {...toolbar} />
      </PageBase>
    </Layout>
  );
};

export const SettingsPage = () => {
  return <SettingsStories.CompanySettings />;
};

export const ActivityLogPage = () => {
  const { breadcrumbs, color, layout } = useAdmin({
    pageId: "activity-log",
  });
  return (
    <Layout {...layout}>
      <PageBase color={color}>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Aktivitetslogg</Heading>
        <ActivityLogStories.Default />
      </PageBase>
    </Layout>
  );
};

import {
  PageBase,
  DashboardHeader,
  DashboardCard,
  type DashboardCardProps,
  Grid,
  type DashboardHeaderProps,
  SettingsList,
} from "../../components";
import { useAdmin, useAccounts, useSettings } from "../../../examples";
import { HeartIcon, BellIcon, CogIcon } from "@navikt/aksel-icons";

const meta = {
  title: "Demo/Dashboard",
  tags: ["beta", "autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const CompanyDashboard = () => {
  const { currentAccount } = useAdmin({
    defaultAccountId: "diaspora",
  });
  const { items } = useSettings({ query: { groupIds: ["companyInfo"] } });

  return (
    <PageBase color="company">
      <DashboardHeader
        icon={currentAccount?.icon as DashboardHeaderProps["icon"]}
        title={currentAccount?.name || "Company"}
        description={currentAccount?.description}
      />

      <Grid cols={3}>
        <DashboardCard
          href="/iframe.html?id=demo-admin--users-page"
          icon={HeartIcon as DashboardCardProps["icon"]}
          title="Brukere"
        >
          <p>Hvem har tilgang til virksomheten?</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-admin--access-page"
          icon={BellIcon as DashboardCardProps["icon"]}
          title="Tilganger"
        >
          <p>Hvilke tilganger har virksomheten?</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-admin--settings-page"
          icon={CogIcon as DashboardCardProps["icon"]}
          title="Innstillinger"
        >
          <p>Varslinger og andre innstillinger.</p>
        </DashboardCard>
      </Grid>

      <SettingsList items={items} />
    </PageBase>
  );
};

export const PersonDashboard = () => {
  const { currentAccount } = useAdmin({ defaultAccountId: "freyr" });
  const { items } = useSettings({ query: { groupIds: ["contact"] } });

  return (
    <PageBase color="person">
      <DashboardHeader
        icon={currentAccount?.icon as DashboardHeaderProps["icon"]}
        title={currentAccount?.name || "Company"}
        description={currentAccount?.description}
      />

      <Grid cols={3}>
        <DashboardCard
          href="/iframe.html?id=demo-admin--users-page"
          icon={HeartIcon as DashboardCardProps["icon"]}
          title="Brukere"
        >
          <p>Hvem har tilgang til virksomheten?</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-admin--access-page"
          icon={BellIcon as DashboardCardProps["icon"]}
          title="Tilganger"
        >
          <p>Hvilke tilganger har virksomheten?</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-admin--settings-page"
          icon={CogIcon as DashboardCardProps["icon"]}
          title="Innstillinger"
        >
          <p>Varslinger og andre innstillinger.</p>
        </DashboardCard>
      </Grid>

      <SettingsList items={items} />
    </PageBase>
  );
};

export const UserDashboard = () => {
  const { defaultAccount } = useAccounts({});
  const { items } = useSettings({ query: { groupIds: ["contact"] } });

  return (
    <PageBase color="person">
      <DashboardHeader
        icon={defaultAccount?.icon as DashboardHeaderProps["icon"]}
        title={defaultAccount?.name}
        description={
          defaultAccount?.description as DashboardHeaderProps["description"]
        }
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
      <SettingsList items={items} />
    </PageBase>
  );
};

import { BellIcon, CogIcon, HeartIcon } from '@navikt/aksel-icons';
import { useAccounts, useAdmin, useSettings } from '../../../examples';
import {
  DashboardCard,
  type DashboardCardProps,
  DashboardHeader,
  type DashboardHeaderProps,
  Grid,
  PageBase,
  SettingsList,
} from '../../components';

const meta = {
  title: 'Page/Dashboard/Dashboard',
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {},
};

export default meta;

export const CompanyDashboard = () => {
  const { currentAccount } = useAdmin({
    defaultAccountId: 'diaspora',
  });
  const { items } = useSettings({});

  const filteredItems = items?.filter((item) => item.groupId === 'companyInfo');

  return (
    <PageBase color="company">
      <DashboardHeader
        icon={currentAccount?.icon as DashboardHeaderProps['icon']}
        title={currentAccount?.name || 'Company'}
        description={currentAccount?.description}
      />

      <Grid cols={3}>
        <DashboardCard
          href="/iframe.html?id=demo-admin--users-page"
          icon={HeartIcon as DashboardCardProps['icon']}
          title="Brukere"
        >
          <p>Hvem har tilgang til virksomheten?</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-admin--access-page"
          icon={BellIcon as DashboardCardProps['icon']}
          title="Tilganger"
        >
          <p>Hvilke tilganger har virksomheten?</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-admin--settings-page"
          icon={CogIcon as DashboardCardProps['icon']}
          title="Innstillinger"
        >
          <p>Varslinger og andre innstillinger.</p>
        </DashboardCard>
      </Grid>

      <SettingsList items={filteredItems} />
    </PageBase>
  );
};

export const PersonDashboard = () => {
  const { currentAccount } = useAdmin({ defaultAccountId: 'freyr' });
  const { items } = useSettings({});
  const filteredItems = items?.filter((item) => item.groupId === 'contact');

  return (
    <PageBase color="person">
      <DashboardHeader
        icon={currentAccount?.icon as DashboardHeaderProps['icon']}
        title={currentAccount?.name || 'Company'}
        description={currentAccount?.description}
      />

      <Grid cols={3}>
        <DashboardCard
          href="/iframe.html?id=demo-admin--users-page"
          icon={HeartIcon as DashboardCardProps['icon']}
          title="Brukere"
        >
          <p>Hvem har tilgang til virksomheten?</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-admin--access-page"
          icon={BellIcon as DashboardCardProps['icon']}
          title="Tilganger"
        >
          <p>Hvilke tilganger har virksomheten?</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-admin--settings-page"
          icon={CogIcon as DashboardCardProps['icon']}
          title="Innstillinger"
        >
          <p>Varslinger og andre innstillinger.</p>
        </DashboardCard>
      </Grid>

      <SettingsList items={filteredItems} />
    </PageBase>
  );
};

export const UserDashboard = () => {
  const { defaultAccount } = useAccounts({});
  const { items } = useSettings({});
  const filteredItems = items?.filter((item) => item.groupId === 'contact');

  return (
    <PageBase color="person">
      <DashboardHeader
        icon={defaultAccount?.icon as DashboardHeaderProps['icon']}
        title={defaultAccount?.name}
        description={defaultAccount?.description as DashboardHeaderProps['description']}
      />
      <Grid cols={3}>
        <DashboardCard
          href="/iframe.html?id=demo-profile--accounts-page"
          icon={HeartIcon as DashboardCardProps['icon']}
          title="Mine aktører"
        >
          <p>Mine aktører, favoritter og grupper.</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-profile--alerts-page"
          icon={BellIcon as DashboardCardProps['icon']}
          title="Mine varslinger"
        >
          <p>Mine varslingsadresser og varslinger per aktør.</p>
        </DashboardCard>
        <DashboardCard
          href="/iframe.html?id=demo-profile--settings-page"
          icon={CogIcon as DashboardCardProps['icon']}
          title="Innstillinger"
        >
          <p>Kontaktinformasjon og andre innstillinger.</p>
        </DashboardCard>
      </Grid>
      <SettingsList items={filteredItems} />
    </PageBase>
  );
};

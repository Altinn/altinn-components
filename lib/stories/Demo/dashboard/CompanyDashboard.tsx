import { Button, Flex, Grid, Heading, ListItem, PageBase, Section, Typography } from '../../../components';

import { AccountsSection, DashboardHeader, DashboardSection, NotificationsSection, useAppContext } from '..';

const notifications = [
  {
    avatar: {
      type: 'person',
      name: 'Per Harald Larsen',
    },
    message: 'Per Harald Larsen ber om tilgang til X',
  },
  {
    avatar: {
      type: 'person',
      name: 'Hans Lokøy',
    },
    message: 'Hans Lokøy ber om tilgang til X, Y og Z',
  },
  {
    avatar: {
      type: 'company',
      name: 'Fiken Regnskap',
    },
    message: 'Fiken Regnskap ber om tilgang som regnskapsfører',
  },
];

export const CompanyDashboard = () => {
  const { currentAccount, accounts } = useAppContext();

  return (
    <PageBase color="company" spacing={6}>
      <DashboardHeader {...currentAccount} type="company">
        <Flex justify="start" spacing={2}>
          <Button variant="outline" size="md" icon="pencil">
            Rediger tilganger
          </Button>
        </Flex>
      </DashboardHeader>

      <Heading size="lg">{notifications?.length} uleste varslinger</Heading>

      <NotificationsSection items={notifications} />

      <Heading size="lg">Område</Heading>
      <DashboardSection>
        <p>123</p>
      </DashboardSection>

      <Heading size="lg">Område</Heading>
      <DashboardSection>
        <p>123</p>
      </DashboardSection>
    </PageBase>
  );
};

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
      <Typography>
          <h6>Forretningsadresse</h6>
          <p>Idrettsveien 1, 5020 Bergen</p>
          <h6>3 varslingsadresser</h6>
          <p>bedrift@bergenbar.no, leder@bergenbar.no, styreleder@bergenbar.no</p>
        </Typography>

        <Flex justify="start" spacing={2}>
        <Button variant="outline" size="md" icon="pencil">
            Endre varslingsadresser
          </Button>
          <Button variant="outline" size="md" icon="pencil">
            Samordnet registermld
          </Button>
        </Flex>
      </DashboardHeader>

      <Heading size="lg">{notifications?.length} uleste varslinger</Heading>

      <NotificationsSection items={notifications} />

      <Heading size="lg">Område</Heading>
      <DashboardSection>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </DashboardSection>

      <Heading size="lg">Område</Heading>
      <DashboardSection>
        <p>123</p>
      </DashboardSection>
    </PageBase>
  );
};

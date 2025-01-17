import { AccountsSection, DashboardHeader, NotificationsSection, useAppContext } from '..';
import { Button, Flex, Grid, Heading, ListItem, PageBase, Section, Typography } from '../../../components';

export const UserDashboard = () => {
  const { currentAccount, accounts, setPageId } = useAppContext();

  const accessItems = accounts?.filter((item) => item.id !== currentAccount.id)?.map(item => {
    return {
      ...item,
      description: "2 varslingsadresser"
    }
  });

  return (
    <PageBase color="person" spacing={6}>
      <DashboardHeader {...currentAccount} type="person">
        <Typography>
          <h6>E-post</h6>
          <p>mathias.dyngeland@brann.no</p>
          <h6>Telefon</h6>
          <p>55 00 00 00</p>
          <h6>Adresse</h6>
          <p>Idrettsveien 1, 5020 Bergen</p>
        </Typography>
        <Flex justify="start" spacing={2}>
          <Button variant="outline" size="sm" icon="pencil" onClick={() => setPageId('user/settings')}>
            Endre telefon/e-post
          </Button>
          <Button variant="outline" size="sm" icon="pencil" onClick={() => setPageId('user/settings')}>
            Endre adresse
          </Button>
        </Flex>
      </DashboardHeader>

      <Flex justify="between" items="center">
        <Flex direction="col">
          <Heading size="lg">Dine aktører</Heading>
        </Flex>
      </Flex>

      <AccountsSection items={accessItems} />
    </PageBase>
  );
};

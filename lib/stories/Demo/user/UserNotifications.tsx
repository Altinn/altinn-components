import {
  AccountsSection,
  AddressSettings,
  DashboardHeader,
  NotificationsItem,
  NotificationsSection,
  useNavigation,
} from '..';
import {
  Button,
  Flex,
  Grid,
  Heading,
  ListBase,
  ListItem,
  PageBase,
  PageNav,
  Section,
  TextField,
  Typography,
} from '../../../components';

export const UserNotifications = () => {
  const { breadcrumbs, currentAccount } = useNavigation();

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />

      <Heading size="xl">Varslingsinnstillinger for {currentAccount?.name}</Heading>
      <AddressSettings />
    </PageBase>
  );
};

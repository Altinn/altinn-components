import {
  AccountsSection,
  AddressSettings,
  DashboardHeader,
  NotificationsItem,
  NotificationsSection,
  SettingsSection,
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

export const SettingsPage = () => {
  const { breadcrumbs, currentAccount, section } = useNavigation();

  return (
    <PageBase color="person" spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />

      <Heading size="xl">{section?.title}</Heading>
      <SettingsSection>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </SettingsSection>

      <Heading size="lg">Område</Heading>
      <SettingsSection>
        <p>1</p>
        <p>2</p>
      </SettingsSection>
      <Heading size="lg">Område</Heading>
      <SettingsSection>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </SettingsSection>
    </PageBase>
  );
};

import { SettingsSection, useNavigation } from '..';
import { Heading, PageBase, PageHeader, PageNav, Section, Typography } from '../../../components';
export const UserFavourites = () => {
  const { currentAccount, breadcrumbs } = useNavigation();
  return (
    <PageBase spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Heading size="xl">Favoritter og grupper</Heading>
      <SettingsSection />
    </PageBase>
  );
};

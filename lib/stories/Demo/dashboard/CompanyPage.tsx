import { ActivityLogPage, CompanyDashboard, CompanyUserId, CompanyUsers, SettingsPage, useNavigation } from '..';

export const CompanyPage = () => {
  const { sectionId, articleId } = useNavigation();

  if (articleId) {
    return <CompanyUserId />;
  }

  switch (sectionId) {
    case 'users':
      return <CompanyUsers />;
    case 'access':
      return <SettingsPage />;
    case 'log':
      return <ActivityLogPage />;
    case 'settings':
      return <SettingsPage />;
    default:
      return <CompanyDashboard />;
  }
};

import { ActivityLogPage, CompanyDashboard, CompanyUserId, CompanyUsers, SettingsPage, useNavigation } from '..';
import { CompanyAccess } from './CompanyAccess';

export const CompanyPage = () => {
  const { sectionId } = useNavigation();

  switch (sectionId) {
    case 'users':
      return <CompanyUsers />;
    case 'access':
      return <CompanyAccess />;
    case 'log':
      return <ActivityLogPage />;
    case 'settings':
      return <SettingsPage />;
    default:
      return <CompanyDashboard />;
  }
};

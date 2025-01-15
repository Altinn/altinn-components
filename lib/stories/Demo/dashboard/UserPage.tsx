import {
  ActivityLogPage,
  UserAccountId,
  UserAccounts,
  UserDashboard,
  UserFavourites,
  UserNotifications,
  UserSettings,
  useNavigation,
} from '..';
export const UserPage = () => {
  const { sectionId, articleId } = useNavigation();

  if (articleId) {
    return <UserAccountId />;
  }

  switch (sectionId) {
    case 'settings':
      return <UserSettings />;
    case 'favourites':
      return <UserFavourites />;
    case 'notifications':
      return <UserNotifications />;
    case 'accounts':
      return <UserAccounts />;
    case 'log':
      return <ActivityLogPage />;
    default:
      return <UserDashboard />;
  }
};

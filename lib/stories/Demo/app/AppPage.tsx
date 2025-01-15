'use client';
import { ActivityLogPage, CategoryPage, CompanyPage, DocsPage, InboxPage, UserPage, useNavigation } from '../';

export const AppPage = () => {
  const { pageId, parentId, sectionId, articleId } = useNavigation();

  if (articleId === 'log') {
    return <ActivityLogPage />;
  }

  switch (parentId) {
    case 'inbox':
      return <InboxPage />;
    case 'user':
      return <UserPage />;
    case 'company':
      return <CompanyPage />;
    case 'category':
      return <CategoryPage />;
    default:
      return <DocsPage />;
  }
};

import type { ReactNode } from 'react';
import { DocsLayout, CategoryLayout, CompanyLayout, InboxLayout, UserLayout } from '../';
import { Layout, type LayoutProps } from '../../../components';
import { useLayout, useNavigation } from '../hooks';

interface AppLayoutTypeProps {
  parentId: string | undefined;
  children: ReactNode;
}

export const AppLayoutType = ({ children }: AppLayoutTypeProps) => {
  const { header, footer } = useLayout();
  const { parentId } = useNavigation();
  switch (parentId) {
    case 'docs':
      return <DocsLayout>{children}</DocsLayout>;
    case 'inbox':
      return <InboxLayout>{children}</InboxLayout>;
    case 'company':
      return <CompanyLayout>{children}</CompanyLayout>;
    case 'user':
      return <UserLayout>{children}</UserLayout>;
    case 'category':
      return <CategoryLayout>{children}</CategoryLayout>;
    default:
      return (
        <Layout header={header} footer={footer}>
          {children}
        </Layout>
      );
  }
};

export const AppLayout = ({ children }: LayoutProps) => {
  const { parentId } = useNavigation();
  return <AppLayoutType parentId={parentId}>{children}</AppLayoutType>;
};

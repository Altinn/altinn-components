import { type ReactNode, useMemo } from 'react';
import { LayoutBase, LayoutBody, LayoutContent, Header, Footer, type LayoutProps } from '../../components';
import { header, footer, sitemap, loginMenu } from './data';
import { InboxLayout, CategoryLayout, ProfileLayout, useAppContext } from './';

interface AppLayoutTypeProps {
  parentId: string | undefined;
  children: ReactNode;
}

export const AppLayoutType = ({ parentId, children }: AppLayoutTypeProps) => {
  switch (parentId) {
    case 'inbox':
      return <InboxLayout>{children}</InboxLayout>;
    case 'profile':
      return <ProfileLayout>{children}</ProfileLayout>;
    case 'category':
      return <CategoryLayout>{children}</CategoryLayout>;
    default:
      return (
        <LayoutBody>
          <LayoutContent>{children}</LayoutContent>
        </LayoutBody>
      );
  }
};

export const AppLayout = ({ children }: LayoutProps) => {
  const { accounts, currentAccount, setAccountId, pageId, setPageId } = useAppContext();

  const menuItems = sitemap.map((item) => {
    return {
      ...item,
      onClick: () => setPageId?.(item.id),
    };
  });

  const parents = pageId?.split('/');
  const parentId = parents?.[0];

  const menu = currentAccount
    ? {
        items: menuItems,
        currentAccount,
        accounts,
        onSelectAccount: setAccountId,
      }
    : loginMenu;

  const theme = useMemo(() => {
    if (parentId === 'inbox') {
      return currentAccount?.type;
    } else if (parentId === 'profile') {
      return 'neutral';
    } else {
      return 'global';
    }
  }, [parentId, currentAccount]);


  return (
    <LayoutBase theme={theme}>
      <Header {...header} currentAccount={currentAccount} menu={menu} />
      <AppLayoutType parentId={parentId}>{children}</AppLayoutType>
      <Footer {...footer} />
    </LayoutBase>
  );
};

import React from 'react';
import { LayoutBody, LayoutSidebar, LayoutContent, type LayoutProps, Menu } from '../../components';
import { sitemap } from './data';
import { useAppContext } from './';
export const AdminLayout = ({ children }: LayoutProps) => {
  const { currentAccount, pageId, setPageId } = useAppContext();

  const parentId = 'admin';
  const parent = sitemap.find((item) => item.id === parentId);
  const menuItems = parent?.items?.map((item) => {
    const id = (parentId === item.id && parentId) || [parentId, item.id].join('/');

    if (id === parentId) {
      return {
        ...item,
        avatar: currentAccount,
        selected: pageId === id,
        onClick: () => setPageId(id),
      };
    }

    return {
      ...item,
      id,
      selected: pageId === id,
      onClick: () => setPageId(id),
    };
  });

  return (
    <LayoutBody>
      <LayoutSidebar>
        <Menu items={menuItems} />
      </LayoutSidebar>
      <LayoutContent>{children}</LayoutContent>
    </LayoutBody>
  );
};

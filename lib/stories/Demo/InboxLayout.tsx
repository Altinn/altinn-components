import React from 'react';
import { LayoutBody, LayoutSidebar, LayoutContent, type LayoutProps, Menu } from '../../components';
import { sitemap } from './data';
import { useAppContext } from './';
export const InboxLayout = ({ children }: LayoutProps) => {
  const { pageId, setPageId } = useAppContext();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];

  const parent = sitemap.find((item) => item.id === parentId);

  const menuItems = parent?.items?.map((item) => {
    const id = [parentId, item.id].join('/');

    return {
      ...item,
      id,
      selected: pageId?.startsWith(id),
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

import { LayoutBody, LayoutSidebar, LayoutContent, type LayoutProps, Menu } from '../../components';
import { sitemap } from './data';
import { useAppContext } from './';

export const CategoryLayout = ({ children }: LayoutProps) => {
  const { pageId, setPageId } = useAppContext();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];
  const sectionId = parents?.[1];


  if (sectionId) {
    const parent = sitemap.find((item) => item.id === parentId);
    const section = parent?.items.find((item) => item.id === sectionId);

    const menuItems = section?.items?.map((item) => {
      const id = [parentId, sectionId, item.id].join('/');
      return {
        ...item,
        groupId: '3',
        id,
      };
    }) || [];

    const items = [
      { ...parent, groupId: '1' },
      { ...section, groupId: '2', id: [parentId, section?.id].join('/') },
      ...menuItems,
    ]?.map((item) => {
      return {
        ...item,
        selected: pageId === item.id,
        onClick: () => item?.id && setPageId?.(item.id),
      };
    });

    return (
      <LayoutBody>
        <LayoutSidebar>
          <Menu items={items} />
        </LayoutSidebar>
        <LayoutContent>{children}</LayoutContent>
      </LayoutBody>
    );
  }

  return (
    <LayoutBody>
      <LayoutContent>{children}</LayoutContent>
    </LayoutBody>
  );
};

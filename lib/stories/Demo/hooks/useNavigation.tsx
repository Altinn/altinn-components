import { useMemo } from 'react';
import { useAppContext } from '..';
import type { AvatarProps, MenuItemProps } from '../../../components';
import { sitemap } from '../data';

export const useNavigation = (): {
  currentAccount: AvatarProps;
  parent: { id: string; title: string } | undefined;
  parentId: string | undefined;
  section: { id: string; title: string } | undefined;
  sectionId: string | undefined;
  article: { id: string; title: string } | undefined;
  articleId: string | undefined;
  child: { id: string; title: string } | undefined;
  childId: string | undefined;
  breadcrumbs: { id?: string; title: string; label: string | undefined; as: string; onClick: () => void }[];
  breadcrumbsId: string;
  pageId: string | undefined;
  setPageId: (id: string) => void;
} => {
  const { pageId, setPageId, currentAccount } = useAppContext();

  const { parentId, sectionId, articleId, childId, parent, section, article, child, breadcrumbs, breadcrumbsId } = useMemo(() => {
    const parents = pageId?.split('/') ?? [];
    const parentId = parents?.[0];
    const sectionId = parents?.[1];
    const articleId = parents?.[2];
    const childId = parents?.[3];

    let parent: MenuItemProps | undefined;
    let section: MenuItemProps | undefined;
    let article: MenuItemProps | undefined;
    let child: MenuItemProps | undefined;

    const paths: MenuItemProps[] = [{ title: 'Forside' } as MenuItemProps];

    if (parentId) {
      parent = sitemap.find((item) => item.id === parentId) || { id: parentId, title: 'Parent' };
      paths.push(parent);
    }

    if (sectionId) {
      section = parent?.items?.find((item) => item.id === sectionId) || { id: sectionId, title: 'Section' };
      paths.push(section);
    }

    if (articleId) {
      article = section?.items?.find((item) => item.id === articleId) || { id: articleId, title: 'Article' };
      paths.push(article);
    }

    if (childId) {
      child = article?.items?.find((item) => item.id === childId) || { id: articleId, title: 'Child' };
      paths.push(child);
    }

    const backIds: string[] = [];

    const breadcrumbs = paths
      .filter((item) => item.title)
      .map((item) => {
        const { id, title } = item;

        id && backIds.push(id);

        const backId = backIds.join('/');

        if (id === 'user' || id === 'company') {
          return {
            ...item,
            label: currentAccount?.name,
            as: 'button',
            onClick: () => setPageId?.(backId),
          };
        }

        return {
          ...item,
          label: title,
          as: 'button',
          onClick: () => setPageId?.(backId),
        };
      });

    const breadcrumbsIds = breadcrumbs?.filter((item) => item.id).map((item) => item.id);
    const breadcrumbsId = breadcrumbsIds.join('/');

    return { parentId, sectionId, articleId, childId, parent, section, article, child, breadcrumbs, breadcrumbsId };
  }, [pageId, setPageId, currentAccount]);

  return {
    currentAccount,
    parent,
    parentId,
    section,
    sectionId,
    article,
    articleId,
    child,
    childId,
    breadcrumbs,
    breadcrumbsId,
    pageId,
    setPageId,
  };
};

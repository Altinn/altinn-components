import { CategoryArticle, CategorySection, HomePage, useAppContext } from '..';

export const CategoryPage = () => {
  const { pageId } = useAppContext();

  const parents = pageId?.split('/');
  const sectionId = parents?.[1];
  const articleId = parents?.[2];

  if (articleId) {
    return <CategoryArticle />;
  }

  if (sectionId) {
    return <CategorySection />;
  }

  return <HomePage />;
};

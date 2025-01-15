import { Default, Elements, Theming, useAppContext } from '..';
export const DocsPage = () => {
  const { pageId } = useAppContext();

  const parents = pageId?.split('/');
  const sectionId = parents?.[1];
  const dialogId = parents?.[2];

  switch (sectionId) {
    case 'elements':
      return <Elements />;
    default:
      return <Default />;
  }
};

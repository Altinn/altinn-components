import { BookmarksPage, InboxDialog, InboxSection, useAppContext } from '..';
export const InboxPage = () => {
  const { pageId } = useAppContext();

  const parents = pageId?.split('/');
  const sectionId = parents?.[1];
  const dialogId = parents?.[2];

  if (dialogId) {
    return <InboxDialog />;
  }

  switch (sectionId) {
    case 'bookmarks':
      return <BookmarksPage />;
    default:
      return <InboxSection />;
  }
};

import React from 'react';
import { PageBase, Toolbar, BookmarksSection } from '../../components';
import { useAppContext } from './';
import { bookmarks } from './data';
export const BookmarksPage = () => {
  const { accountMenu } = useAppContext();

  const editableBookmarks = bookmarks.map((item) => {
    return {
      ...item,
      editable: true,
    };
  });

  return (
    <PageBase spacing="md" margin="lg">
      <Toolbar accountMenu={accountMenu} />
      <BookmarksSection
        title="3 lagrede søk"
        items={editableBookmarks}
        updatedAtLabel="Sist oppdatert: 2 timer siden"
      />
    </PageBase>
  );
};

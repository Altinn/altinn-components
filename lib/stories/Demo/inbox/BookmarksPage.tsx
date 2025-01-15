import { useState } from 'react';
import { useAppContext } from '..';
import { BookmarksSection, PageBase, Toolbar } from '../../../components';
import { bookmarks } from '../data';
export const BookmarksPage = () => {
  const { accountMenu } = useAppContext();

  const [expandedId, setExpandedId] = useState<string>('');

  const onToggle = (id: string) => {
    setExpandedId((prevState) => {
      if (prevState === id) {
        return '';
      }
      return id;
    });
  };

  return (
    <PageBase spacing={3} margin="page">
      <Toolbar accountMenu={accountMenu} />
      <BookmarksSection
        title="3 lagrede søk"
        description="Sist oppdatert: 2 timer siden"
        untitled="Uten tittel"
        titleField={{
          label: 'Tittel',
          placeholder: 'Uten tittel',
          helperText: 'Gi bokmerket et navn.',
        }}
        saveButton={{
          label: 'Lagre endringer',
          onClick: () => onToggle(expandedId),
        }}
        removeButton={{
          label: 'Slett bokmerke',
        }}
        items={bookmarks}
        expandedId={expandedId}
        onToggle={onToggle}
      />
    </PageBase>
  );
};

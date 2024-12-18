'use client';
import {
    PageBase,
    BookmarksSection, BookmarksListItemProps
} from '../../components';
import { InboxToolbar } from './InboxToolbar';

export function BookmarksPage() {
  const bookmarks: BookmarksListItemProps[] = [
    {
      id: '1',
      title: 'Mitt eget søk',
      params: [
        {type: "search", label: "Skatt", value: "Skatt"},
        {type: "filter", label: "Under arbeid", value: "Under arbeid"}
      ],
    },
    {
      id: '2',
      params: [
        {type: "search", label: "Skatt", value: "Skatt"},
        {type: "filter", label: "Under arbeid", value: "Under arbeid"}
      ],
    },
    {
      id: '3',
      params: [
        {type: "filter", label: "Brønnøysundregistrene", value: "Brønnøysundregistrene"},
        {type: "filter", label: "Krever handling", value: "Krever handling"}
      ],
    },
  ];


  const count = bookmarks.length;
  const title = (count > 1 && count + ' lagrede søk') || (count && '1 lagret søk') || 'Ingen lagrede søk';

  return (
    <PageBase margin="md" spacing="lg">
      <InboxToolbar />
      <BookmarksSection title={title} items={bookmarks} description="Sist oppdatert i går, kl 08.00" />
    </PageBase>
  );
}

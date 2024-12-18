'use client';
import {
  Heading,
  BookmarksList,
  MetaItem,
  PageBase,
  Section,
  SectionFooter,
  SectionHeader, type BookmarksListItemProps,
} from '../../components';
import { InboxToolbar } from './InboxToolbar';

export function BookmarksPage() {
  const contextMenu = {
    items: [
      {
        icon: "pencil",
        title: "Rediger søk"
      },
      {
        icon: "trash",
        title: "Slett søk"
      }
    ]
  }

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

  const bookmarksWithContextMenu = bookmarks.map((bookmark) => {
    return {
      ...bookmark,
      contextMenu
    }
  })

  const count = bookmarks.length;
  const title = (count > 1 && count + ' lagrede søk') || (count && '1 lagret søk') || 'Ingen lagrede søk';

  return (
    <PageBase margin="lg" spacing="lg">
      <InboxToolbar />
      <Section color="subtle" spacing="lg" inset>
      <SectionHeader>
          <Heading size="sm">{title}</Heading>
        </SectionHeader>
        <BookmarksList items={bookmarksWithContextMenu} />
        <SectionFooter>
          <MetaItem>Sist oppdatert: 10 minutter siden.</MetaItem>
        </SectionFooter>
      </Section>
    </PageBase>
  );
}

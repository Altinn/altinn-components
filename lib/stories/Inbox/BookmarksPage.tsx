'use client';
import {
  Heading,
  BookmarksList,
  ListBase,
  ListItem,
  MetaItem,
  PageBase,
  Section,
  SectionFooter,
  SectionHeader,
  Typography,
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

  const bookmarks = [
    {
      id: '1',
      title: 'Mitt eget søk',
      params: [
        {type: "search", label: "Skatt"},
        {type: "filter", label: "Under arbeid"}
      ],
    },
    {
      id: '2',
      params: [
        {type: "search", label: "Skatt"},
        {type: "filter", label: "Under arbeid"}
      ],
    },
    {
      id: '3',
      params: [
        {type: "filter", label: "Brønnøysundregistrene"},
        {type: "filter", label: "Krever handling"}
      ],
    },
  ].map(item => {
    return {
      ...item,
      menu: {...contextMenu, id: [item.id, "-menu"].join("-")}
    }
  });


  const count = bookmarks.length;
  const title = (count > 1 && count + ' lagrede søk') || (count && '1 lagret søk') || 'Ingen lagrede søk';

  return (
    <PageBase margin="lg" spacing="lg">
      <InboxToolbar />
      <Section padding color="subtle" spacing="lg" inset>
      <SectionHeader>
          <Heading size="sm">{title}</Heading>
        </SectionHeader>
        <BookmarksList spacing="none" items={bookmarks} />
        <SectionFooter padding>
          <MetaItem>Sist oppdatert: 10 minutter siden.</MetaItem>
        </SectionFooter>
      </Section>
    </PageBase>
  );
}

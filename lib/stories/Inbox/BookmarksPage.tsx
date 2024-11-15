'use client';
import {
  Heading,
  ListBase,
  ListItem,
  MetaItem,
  PageBase,
  SectionBase,
  SectionFooter,
  SectionHeader,
  Typography,
} from '../../components';
import { InboxToolbar } from './InboxToolbar';

export function BookmarksPage() {
  const bookmarks = [
    {
      id: '1',
      title: '123',
    },
    {
      id: '2',
      title: '123',
    },
    {
      id: '3',
      title: '123',
    },
  ];

  const count = bookmarks.length;
  const title = (count > 1 && count + ' lagrede søk') || (count && '1 lagret søk') || 'Ingen lagrede søk';

  return (
    <PageBase margin="lg" spacing="lg">
      <InboxToolbar />
      <SectionBase spacing="lg">
        <SectionHeader padding>
          <Heading size="md">{title}</Heading>
        </SectionHeader>
        <ListBase spacing="sm">
          {bookmarks.map((item) => (
            <ListItem {...item} key={item.id} />
          ))}
        </ListBase>
        <SectionFooter padding>
          <MetaItem>Sist oppdatert: 10 minutter siden.</MetaItem>
        </SectionFooter>
      </SectionBase>
    </PageBase>
  );
}

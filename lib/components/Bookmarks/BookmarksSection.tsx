import { BookmarksList, Heading, MetaItem, SectionBase, SectionFooter, SectionHeader } from '../';
import type { BookmarksListItemProps } from '../';

export interface BookmarksSectionProps {
  title?: string;
  items: BookmarksListItemProps[];
  updatedAtLabel?: string;
}

export const BookmarksSection = ({ title, items, updatedAtLabel }) => {
  return (
    <SectionBase padding color="subtle" spacing="lg" inset>
      <SectionHeader>
        <Heading size="sm">{title}</Heading>
      </SectionHeader>
      <BookmarksList items={items} />
      <SectionFooter padding>
        <MetaItem>{updatedAtLabel}</MetaItem>
      </SectionFooter>
    </SectionBase>
  );
};

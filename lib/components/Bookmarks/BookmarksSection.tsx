import { BookmarksList, Heading, MetaItem, Section, SectionFooter, SectionHeader } from '../';
import type { BookmarksListItemProps } from '../';

export interface BookmarksSectionProps {
  title?: string;
  items: BookmarksListItemProps[];
  updatedAtLabel?: string;
}

export const BookmarksSection = ({ title, items, updatedAtLabel }: BookmarksSectionProps) => {
  return (
    <Section padding="lg" color="surface" spacing="lg" inset>
      <SectionHeader>
        <Heading size="sm">{title}</Heading>
      </SectionHeader>
      <BookmarksList items={items} />
      <SectionFooter>
        <MetaItem>{updatedAtLabel}</MetaItem>
      </SectionFooter>
    </Section>
  );
};

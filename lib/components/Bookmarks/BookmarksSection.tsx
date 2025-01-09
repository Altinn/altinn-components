import { BookmarksListItem, Heading, ListBase, Section, Typography } from '../';
import type { BookmarksListItemProps, TextFieldProps } from '../';

export interface BookmarksSectionProps {
  title?: string;
  description?: string;
  items: BookmarksListItemProps[];
  untitled?: string;
  titleField?: TextFieldProps;
  expandedId?: string;
  onToggle?: (id: string) => void;
  loading?: boolean;
}

export const BookmarksSection = ({
  loading,
  title,
  description,
  items,
  untitled = 'Untitled bookmark',
  titleField,
  expandedId,
  onToggle,
}: BookmarksSectionProps) => {
  return (
    <Section padding={6} theme="surface-hover" spacing={4} bleed>
      <Heading size="md">{title}</Heading>
      {items.length > 0 && (
        <ListBase spacing="xs">
          {items.map((item) => (
            <BookmarksListItem
              {...item}
              key={item.id}
              loading={loading || item.loading}
              onToggle={() => onToggle?.(item.id)}
              expanded={expandedId === item.id}
              untitled={untitled}
              titleField={titleField}
            />
          ))}
        </ListBase>
      )}
      <Typography size="xs">{description}</Typography>
    </Section>
  );
};

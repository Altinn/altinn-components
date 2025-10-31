import { BookmarksListItem, EditableBookmark, Heading, List, Section, Typography } from '../';
import type { EditableBookmarkProps, TextFieldProps } from '../';

export interface BookmarksSectionProps {
  title?: string;
  description?: string;
  items: EditableBookmarkProps[];
  untitled?: string;
  titleField?: TextFieldProps;
  loading?: boolean;
}

export const BookmarksSection = ({
  loading,
  title,
  description,
  items,
  untitled = 'Untitled bookmark',
  titleField,
}: BookmarksSectionProps) => {
  return (
    <Section padding={6} spacing={4} bleed>
      <Heading size="md">{title}</Heading>
      {loading ? (
        <List>
          <BookmarksListItem title={title} loading={loading} size="sm" />
        </List>
      ) : (
        items.length > 0 && (
          <List spacing="xs">
            {items.map((item) => (
              <EditableBookmark
                {...item}
                key={item.id}
                loading={loading || item.loading}
                untitled={untitled}
                titleField={titleField}
                size="sm"
              />
            ))}
          </List>
        )
      )}
      <Typography size="xs">{description}</Typography>
    </Section>
  );
};

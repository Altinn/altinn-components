import { BookmarksListItem, Heading, ListBase, Section, Typography } from '../';
import type { BookmarksListItemProps, ButtonProps, TextFieldProps } from '../';

export interface BookmarksSectionProps {
  title?: string;
  description?: string;
  items: BookmarksListItemProps[];
  untitled?: string;
  titleField?: TextFieldProps;
  saveButton?: ButtonProps;
  removeButton?: ButtonProps;
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
  saveButton,
  removeButton,
  expandedId,
  onToggle,
}: BookmarksSectionProps) => {
  return (
    <Section padding="xl" color="surface" spacing="lg" inset>
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
              saveButton={saveButton}
              removeButton={removeButton}
            />
          ))}
        </ListBase>
      )}
      <Typography size="xs">{description}</Typography>
    </Section>
  );
};

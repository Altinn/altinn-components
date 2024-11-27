import { ListBase, type ListSpacing } from '..';
import { BookmarksListItem, type BookmarksListItemProps } from './BookmarksListItem';

export interface BookmarksListProps {
  items: BookmarksListItemProps[];
  spacing: ListSpacing;
}

export const BookmarksList = ({ items, spacing }: BookmarksListProps) => {
  return (
    <ListBase spacing={spacing}>
      {items?.map((item) => (
        <BookmarksListItem {...item} key={item.id} />
      ))}
    </ListBase>
  );
};

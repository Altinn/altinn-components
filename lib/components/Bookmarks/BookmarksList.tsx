import { ListBase } from '..';
import { BookmarksListItem, type BookmarksListItemProps } from './BookmarksListItem';

export interface BookmarksListProps {
  items: BookmarksListItemProps[];
}

export const BookmarksList = ({ items }: BookmarksListProps) => {
  return (
    <ListBase spacing="xs">
      {items?.map((item) => (
        <BookmarksListItem {...item} key={item.id} />
      ))}
    </ListBase>
  );
};

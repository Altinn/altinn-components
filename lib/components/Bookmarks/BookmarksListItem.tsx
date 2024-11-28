import { ListItem, type ListItemProps } from '..';
import { type QueryItemProps, QueryLabel } from './QueryLabel';

export interface BookmarksListItemProps extends ListItemProps {
  id: string;
  /** Optional title */
  title?: string;
  /** Query params */
  params?: QueryItemProps[];
}

export const BookmarksListItem = ({ size = 'sm', title, description, params, ...rest }: BookmarksListItemProps) => {
  return (
    <ListItem size={size} icon="magnifying-glass" linkIcon="chevron-right" {...rest}>
      {!title && <QueryLabel params={params} />}
    </ListItem>
  );
};

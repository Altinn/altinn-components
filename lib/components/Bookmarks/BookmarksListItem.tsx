import { ListItem, type ListItemInputProps } from '..';
import { type QueryItemProps, QueryLabel } from './QueryLabel';

export interface BookmarksListItemProps extends ListItemInputProps {
  id: string;
  /** Optional title */
  title?: string;
  /** Query params */
  params?: QueryItemProps[];
}

export const BookmarksListItem = ({ size = 'sm', title, description, params, ...rest }: BookmarksListItemProps) => {
  return (
    <ListItem size={size} title={title} linkIcon="chevron-right" {...rest}>
      {!title && <QueryLabel params={params} />}
    </ListItem>
  );
};

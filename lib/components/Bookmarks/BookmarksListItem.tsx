import { ListItem, type ListItemProps } from '..';
import { type QueryItemProps, QueryLabel } from './QueryLabel';

export interface BookmarksListItemProps extends ListItemProps {
  /** Query params */
  params?: QueryItemProps[];
}

export const BookmarksListItem = ({ loading, title, params, ...rest }: BookmarksListItemProps) => {
  return (
    <ListItem {...rest} loading={loading} title={title} label={!title && !loading && <QueryLabel params={params} />} />
  );
};

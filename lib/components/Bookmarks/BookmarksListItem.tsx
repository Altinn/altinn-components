import { ListItem, type ListItemProps, type QueryItemProps, QueryLabel } from '..';

export interface BookmarksListItemProps extends ListItemProps {
  /** Query params */
  params?: QueryItemProps[];
  ariaLabel?: string;
}

export const BookmarksListItem = ({ loading, title, ariaLabel, params, ...rest }: BookmarksListItemProps) => {
  return (
    <ListItem
      {...rest}
      loading={loading}
      title={title}
      ariaLabel={ariaLabel}
      label={!title && !loading && <QueryLabel params={params} />}
    />
  );
};

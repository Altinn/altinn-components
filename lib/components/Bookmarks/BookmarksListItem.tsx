import { ListItem, type ListItemProps, type QueryItemProps, QueryLabel } from '..';

export interface BookmarksListItemProps extends ListItemProps {
  /** Query params */
  params?: QueryItemProps[];
  ariaLabel?: string;
  icon?: ListItemProps['icon'];
}

export const BookmarksListItem = ({ loading, title, ariaLabel, params, icon, ...rest }: BookmarksListItemProps) => {
  return (
    <ListItem
      {...rest}
      loading={loading}
      icon={icon}
      title={title}
      ariaLabel={ariaLabel}
      description={!loading && params && <QueryLabel params={params} />}
      label={!title && !loading && !params && <QueryLabel params={params} />}
    />
  );
};

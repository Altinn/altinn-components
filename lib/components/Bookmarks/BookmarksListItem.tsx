import { ListItemBase, ListItemHeader, type ListItemInputProps } from '..';
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
    <ListItemBase {...rest}>
      {!title && (
        <ListItemHeader size={size} title={title} linkIcon="chevron-right" {...rest}>
          <QueryLabel params={params} />
        </ListItemHeader>
      )}
    </ListItemBase>
  );
};

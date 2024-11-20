import type { ElementType } from 'react';
import { ListItemBase, ListItemLabel, ListItemMedia, type ListItemSize } from '..';
import { type QueryItemProps, QueryLabel } from './QueryLabel';

export interface BookmarksListItemProps {
  id: string;
  /** Element type to render */
  as?: ElementType;
  /** ELement link */
  href?: string;
  /** Optional onClick */
  onClick?(): void;
  /** Size of list item */
  size?: ListItemSize;
  /** Optional title */
  title?: string;
  /** Optional description */
  description?: string;
  /** Query params */
  params?: QueryItemProps[];
}

export const BookmarksListItem = ({ size = 'sm', title, description, params, ...rest }: BookmarksListItemProps) => {
  return (
    <ListItemBase size={size} linkIcon="chevron-right" {...rest}>
      <ListItemMedia size={size} icon={'magnifying-glass'} />
      <ListItemLabel title={title} size={size}>
        {!title && <QueryLabel params={params} />}
      </ListItemLabel>
    </ListItemBase>
  );
};

import type { ElementType } from 'react';
import { ListItem, type ListItemInputProps, type QueryItemProps, QueryLabel } from '..';
import type { BadgeProps } from '../Badge';

export interface SuggestListItemProps extends ListItemInputProps {
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  badge?: BadgeProps | undefined;
  loading?: boolean;
  /** Query params */
  params?: QueryItemProps[];
}

export const SuggestListItem = ({ as = 'a', params, ...rest }: SuggestListItemProps) => {
  return <ListItem label={<QueryLabel params={params} />} {...rest} />;
};

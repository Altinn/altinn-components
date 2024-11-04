import type { LayoutTheme } from '../Layout';
import { ListBase } from '../List';
import { ListItem, type ListItemProps } from './ListItem';
import type { ListItemSize } from './ListItemBase';

export interface ListProps {
  size?: ListItemSize;
  theme?: LayoutTheme;
  items?: ListItemProps[];
}

export const List = ({ theme, size = 'md', items }: ListProps) => {
  return (
    <ListBase theme={theme} size={size}>
      {items?.map((item, index) => {
        return <ListItem {...item} size={size} key={'item' + index} />;
      })}
    </ListBase>
  );
};

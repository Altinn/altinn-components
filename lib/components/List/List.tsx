import { ListBase, type ListSpacing, type ListTheme } from '../List';
import { ListItem, type ListItemProps } from './ListItem';
import type { ListItemSize } from './ListItemBase';

export interface ListProps {
  size?: ListItemSize;
  spacing?: ListSpacing;
  theme?: ListTheme;
  items?: ListItemProps[];
}

export const List = ({ theme, size = 'md', spacing = 'md', items = [] }: ListProps) => {
  return (
    <ListBase theme={theme} spacing={spacing}>
      {items.map((item, index) => {
        return <ListItem {...item} size={size} key={'item' + index} />;
      })}
    </ListBase>
  );
};

import { ListBase, type ListSpacing, type ListTheme } from '../List';
import { ListItem, type ListItemProps } from './ListItem';
import type { ListItemColor, ListItemSize } from './ListItemBase';

export interface ListProps {
  spacing?: ListSpacing;
  theme?: ListTheme;
  items?: ListItemProps[];
  defaultItemColor?: ListItemColor;
  defaultItemSize?: ListItemSize;
}

export const List = ({ theme, defaultItemSize, defaultItemColor, spacing = 'md', items = [] }: ListProps) => {
  return (
    <ListBase theme={theme} spacing={spacing}>
      {items.map((item, index) => {
        return (
          <ListItem
            {...item}
            size={item?.size || defaultItemSize}
            color={item?.color || defaultItemColor}
            key={'item' + index}
          />
        );
      })}
    </ListBase>
  );
};

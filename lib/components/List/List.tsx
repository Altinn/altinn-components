import {
  ListBase,
  type ListBaseProps,
  ListItem,
  type ListItemColor,
  type ListItemProps,
  type ListItemSize,
  type ListItemTheme,
} from '..';

export interface ListProps extends Omit<ListBaseProps, 'children'> {
  items?: ListItemProps[];
  defaultItemColor?: ListItemColor;
  defaultItemTheme?: ListItemTheme;
  defaultItemSize?: ListItemSize;
}

export const List = ({ defaultItemSize, defaultItemTheme, defaultItemColor, items = [], ...rest }: ListProps) => {
  return (
    <ListBase {...rest}>
      {items.map((item, index) => {
        return (
          <ListItem
            {...item}
            size={item?.size || defaultItemSize}
            color={item?.color || defaultItemColor}
            theme={item?.theme || defaultItemTheme}
            key={'item' + index}
          />
        );
      })}
    </ListBase>
  );
};

import {
  ListBase,
  type ListBaseProps,
  ListItem,
  type ListItemColor,
  type ListItemProps,
  type ListItemSize,
  type ListItemVariant,
} from '..';

export interface ListProps extends Omit<ListBaseProps, 'children'> {
  items?: ListItemProps[];
  defaultItemColor?: ListItemColor;
  defaultItemVariant?: ListItemVariant;
  defaultItemSize?: ListItemSize;
}

export const List = ({ defaultItemSize, defaultItemVariant, defaultItemColor, items = [], ...rest }: ListProps) => {
  return (
    <ListBase {...rest}>
      {items.map((item, index) => {
        return (
          <ListItem
            {...item}
            size={item?.size || defaultItemSize}
            color={item?.color || defaultItemColor}
            variant={item?.variant || defaultItemVariant}
            key={`item-${item.id ?? index}`}
          />
        );
      })}
    </ListBase>
  );
};

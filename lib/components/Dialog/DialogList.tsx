import type { LayoutTheme } from '../Layout';
import { ListBase } from '../List';
import { DialogListItem, type DialogListItemProps } from './DialogListItem';
import type { DialogListItemSize } from './DialogListItemBase';

export interface DialogListProps {
  size?: DialogListItemSize;
  theme?: LayoutTheme;
  items?: DialogListItemProps[];
}

export const DialogList = ({ theme, size = 'md', items }: DialogListProps) => {
  return (
    <ListBase theme={theme} size={size}>
      {items?.map((item, index) => {
        return <DialogListItem {...item} size={size} key={'item' + index} />;
      })}
    </ListBase>
  );
};

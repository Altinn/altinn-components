import type { ElementType, MouseEventHandler } from 'react';
import { MetaItem, type MetaItemSize } from '../Meta';

export interface DialogActivityLogProps {
  size?: MetaItemSize;
  label?: string;
  as?: ElementType;
  onClick?: MouseEventHandler;
  href?: string;
}

export const DialogActivityLog = ({ size = 'xs', label = 'Activity log', ...rest }: DialogActivityLogProps) => {
  return (
    <MetaItem {...rest} size={size} icon={'clock-dashed'}>
      {label}
    </MetaItem>
  );
};

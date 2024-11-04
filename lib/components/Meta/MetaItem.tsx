import type { ElementType, ReactNode } from 'react';
import type { IconName } from '../Icon';
import { MetaItemBase, type MetaItemSize, type MetaItemVariant } from './MetaItemBase';
import { MetaItemLabel } from './MetaItemLabel';
import { MetaItemMedia } from './MetaItemMedia';

export interface MetaItemProps {
  /**  Render as element */
  as?: ElementType;
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Icon name */
  icon?: IconName;
  /** Label */
  children?: ReactNode;
  /** classname */
  className?: string;
}

export const MetaItem = ({ size = 'xs', variant = 'text', icon, children, ...rest }: MetaItemProps) => {
  return (
    <MetaItemBase variant={variant} size={size} {...rest}>
      {icon && <MetaItemMedia icon={icon} size={size} />}
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};

import type { ElementType, ReactNode } from 'react';
import type { SvgElement } from '../Icon';
import { MetaItemBase, type MetaItemSize, type MetaItemVariant } from './MetaItemBase';
import { MetaItemLabel } from './MetaItemLabel';
import { MetaItemMedia } from './MetaItemMedia';

export interface MetaItemProps {
  loading?: boolean;
  reverse?: boolean;
  /**  Render as element */
  as?: ElementType;
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Icon name */
  icon?: SvgElement;
  /** Label */
  children?: ReactNode;
  /** classname */
  className?: string;
  /** OnClick handler */
  onClick?: () => void;
}

export const MetaItem = ({
  loading,
  reverse,
  size = 'xs',
  variant = 'text',
  icon,
  children,
  ...rest
}: MetaItemProps) => {
  return (
    <MetaItemBase loading={loading} reverse={reverse} variant={variant} size={size} {...rest}>
      {!loading && icon && <MetaItemMedia size={size} icon={icon} />}
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};

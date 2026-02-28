import type { ElementType, ReactNode } from 'react';
import {
  MetaItemBase,
  MetaItemIcon,
  type MetaItemIconProps,
  MetaItemLabel,
  type MetaItemSize,
  type MetaItemVariant,
  Tooltip,
} from '..';

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
  icon?: MetaItemIconProps['icon'];
  /** Label */
  children?: ReactNode;
  /** Tooltip */
  tooltip?: string;
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
  tooltip,
  ...rest
}: MetaItemProps) => {
  if (tooltip) {
    return (
      <Tooltip placement="bottom" content={tooltip}>
        <MetaItemBase loading={loading} reverse={reverse} variant={variant} size={size} {...rest}>
          {!loading && icon && <MetaItemIcon icon={icon} />}
          <MetaItemLabel variant={variant} size={size}>
            {children}
          </MetaItemLabel>
        </MetaItemBase>
      </Tooltip>
    );
  }

  return (
    <MetaItemBase loading={loading} reverse={reverse} variant={variant} size={size} {...rest}>
      {!loading && icon && <MetaItemIcon icon={icon} />}
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};

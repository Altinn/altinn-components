import type { ReactNode } from 'react';
import { MetaItemBase, MetaItemIcon, MetaItemLabel, type MetaItemSize, type MetaItemVariant } from '..';
import type { SvgElement } from '../Icon';

export interface MetaTimestampProps {
  loading?: boolean;
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Datetime in ISO format */
  datetime?: string;
  /** Icon name */
  icon?: SvgElement;
  /** Label */
  children?: ReactNode;
}

export const MetaTimestamp = ({
  loading,
  size = 'xs',
  variant = 'text',
  datetime,
  icon,
  children,
}: MetaTimestampProps) => {
  return (
    <MetaItemBase loading={loading} as="time" variant={variant} datetime={datetime} size={size}>
      {!loading && icon && <MetaItemIcon size={size} icon={icon} />}
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};

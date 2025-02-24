import type { ReactNode } from 'react';
import type { SvgElement } from '../Icon';
import { Skeleton } from '../Skeleton';
import { MetaItemBase, type MetaItemSize, type MetaItemVariant } from './MetaItemBase';
import { MetaItemLabel } from './MetaItemLabel';
import { MetaItemMedia } from './MetaItemMedia';

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
    <Skeleton loading={loading}>
      <MetaItemBase as="time" variant={variant} datetime={datetime} size={size}>
        {!loading && icon && <MetaItemMedia size={size} icon={icon} />}
        <MetaItemLabel variant={variant} size={size}>
          {children}
        </MetaItemLabel>
      </MetaItemBase>
    </Skeleton>
  );
};

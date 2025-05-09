import type { ReactNode } from 'react';
import { MetaItemBase, MetaItemIcon, MetaItemLabel, type MetaItemSize, type MetaItemVariant } from '..';

export interface MetaProgressProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Progress of 100 */
  progress?: number;
  /** Label */
  children?: ReactNode;
}

export const MetaProgress = ({ size = 'xs', variant = 'text', progress = 0, children }: MetaProgressProps) => {
  return (
    <MetaItemBase variant={variant} size={size}>
      <MetaItemIcon size={size} progress={progress} />
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};

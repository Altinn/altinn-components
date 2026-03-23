import type { ReactNode } from 'react';
import { MetaItemBase, MetaItemIcon, MetaItemLabel, type MetaItemSize, type MetaItemVariant } from '..';

export interface MetaProgressProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Progress of 100 */
  progress?: number;
  /** Tooltip */
  tooltip?: string;
  /** Label */
  children?: ReactNode;
}

export const MetaProgress = ({ size = 'xs', variant = 'text', progress = 0, tooltip, children }: MetaProgressProps) => {
  return (
    <MetaItemBase variant={variant} size={size} tooltip={tooltip}>
      <MetaItemIcon size={size} progress={progress} />
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};

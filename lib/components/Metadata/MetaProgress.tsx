import type { ReactNode } from 'react';
import { MetaItemBase, MetaItemIcon, MetaItemLabel, type MetaItemSize, type MetaItemVariant, Tooltip } from '..';

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
  if (tooltip) {
    return (
      <Tooltip placement="bottom" content={tooltip}>
        <MetaItemBase variant={variant} size={size}>
          <MetaItemIcon size={size} progress={progress} />
          <MetaItemLabel variant={variant} size={size}>
            {children}
          </MetaItemLabel>
        </MetaItemBase>
      </Tooltip>
    );
  }

  return (
    <MetaItemBase variant={variant} size={size}>
      <MetaItemIcon size={size} progress={progress} />
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};

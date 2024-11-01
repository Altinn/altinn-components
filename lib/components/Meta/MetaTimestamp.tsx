import type { ReactNode } from 'react';

import type { IconName } from '../Icon';
import { MetaItemBase, type MetaItemSize, type MetaItemVariant } from './MetaItemBase';
import { MetaItemLabel } from './MetaItemLabel';
import { MetaItemMedia } from './MetaItemMedia';

export interface MetaTimestampProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Datetime in ISO format */
  datetime?: string;
  /** Icon name */
  icon?: IconName;
  /** Label */
  children?: ReactNode;
}

export const MetaTimestamp = ({ size = 'xs', variant = 'text', datetime, icon, children }: MetaTimestampProps) => {
  return (
    <MetaItemBase as="time" variant={variant} datetime={datetime} size={size}>
      {icon ? <MetaItemMedia size={size} icon={icon} /> : ''}
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};

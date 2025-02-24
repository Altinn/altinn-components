import { ClockDashedIcon } from '@navikt/aksel-icons';
import type { ElementType, MouseEventHandler } from 'react';
import { MetaItem, type MetaItemSize } from '../Meta';

export interface DialogActivityLogProps {
  loading?: boolean;
  size?: MetaItemSize;
  label?: string;
  as?: ElementType;
  onClick?: MouseEventHandler;
  href?: string;
}

export const DialogActivityLog = ({
  size = 'xs',
  label = 'Activity log',
  onClick,
  ...rest
}: DialogActivityLogProps) => {
  return (
    <MetaItem {...rest} size={size} icon={ClockDashedIcon}>
      {label}
    </MetaItem>
  );
};

import { Tooltip as DsTooltip, type TooltipProps as DsTooltipProps, type Size } from '@digdir/designsystemet-react';
import styles from './tooltip.module.css';

export type TooltipProps = {
  children: React.ReactNode;
  content: string;
  hidden?: boolean;
  size?: Size;
} & Omit<DsTooltipProps, 'content | children'>;

export const Tooltip = ({ size = 'xs' as Size, placement, children, content, hidden }: TooltipProps) => {
  return (
    <DsTooltip aria-hidden={hidden} data-size={size} content={content} placement={placement} className={styles.tooltip}>
      {children}
    </DsTooltip>
  );
};

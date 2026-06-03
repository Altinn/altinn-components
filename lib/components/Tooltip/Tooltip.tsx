import { Tooltip as DsTooltip, type TooltipProps as DsTooltipProps, type Size } from '@digdir/designsystemet-react';
import styles from './tooltip.module.css';

export type TooltipProps = {
  children: React.ReactNode;
  content: string;
  size?: Size;
} & Omit<DsTooltipProps, 'content | children'>;

export const Tooltip = ({ size = 'xs' as Size, placement, children, content }: TooltipProps) => {
  if (!content) {
    return children;
  }

  return (
    <DsTooltip data-size={size} content={content} placement={placement} className={styles.tooltip}>
      {children}
    </DsTooltip>
  );
};

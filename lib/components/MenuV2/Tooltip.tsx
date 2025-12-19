import { Tooltip as DsTooltip, type TooltipProps as DsTooltipProps } from '@digdir/designsystemet-react';
import styles from './tooltip.module.css';

export type TooltipProps = {
  children: React.ReactNode;
  content: string;
  hidden?: boolean;
  size?: 'xs' | 'sm';
} & Omit<DsTooltipProps, 'content | children'>;

export const Tooltip = ({ size = 'xs', placement, children, content, hidden }: TooltipProps) => {
  return (
    <DsTooltip
      aria-hidden={hidden}
      data-size={size as any}
      content={content}
      placement={placement}
      className={styles.tooltip}
    >
      {children}
    </DsTooltip>
  );
};

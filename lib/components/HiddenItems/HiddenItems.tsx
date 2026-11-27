import cx from 'classnames';
import type { ReactNode } from 'react';
import { Tooltip } from '../Tooltip';
import styles from './hiddenItems.module.css';

export interface HiddenItemsProps {
  label: ReactNode;
  tooltip?: string;
  className?: string;
}

export const HiddenItems = ({ label, tooltip, className }: HiddenItemsProps) => (
  <div className={cx(styles.hiddenItems, className)}>
    {tooltip ? (
      <Tooltip content={tooltip}>
        <span
          className={styles.tooltip}
          // biome-ignore lint/a11y/noNoninteractiveTabindex: a tooltip needs a focusable trigger, as Designsystemet asks for text triggers
          tabIndex={0}
          // Tooltip sets aria-label to its text, which hides the label from screen readers. Without it, Designsystemet uses aria-description.
          aria-label={undefined}
        >
          {label}
        </span>
      </Tooltip>
    ) : (
      label
    )}
  </div>
);

import cx from 'classnames';
import type { ReactNode } from 'react';
import { AvatarGroup, type AvatarProps, ButtonBase, ButtonLabel } from '..';
import styles from './SeenByLogButton.module.css';

export interface SeenByLogButtonProps {
  ariaLabel?: string;
  children?: ReactNode;
  items: AvatarProps[];
  className?: string;
  onClick?: () => void;
}

/**
 * SeenByLog Button
 */

export const SeenByLogButton = ({ ariaLabel, items, children, className, onClick }: SeenByLogButtonProps) => {
  if (!items) {
    return;
  }

  return (
    <ButtonBase
      ariaLabel={ariaLabel}
      className={cx(styles.button, className)}
      variant="link"
      size="xs"
      onClick={onClick}
    >
      <AvatarGroup items={items} className={styles.icon} />
      {children && <ButtonLabel className={styles.label}>{children}</ButtonLabel>}
    </ButtonBase>
  );
};

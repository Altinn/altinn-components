import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import { IconButton } from '../Button';
import styles from './snackbarBase.module.css';

export type SnackbarColor = 'default' | 'accent';

interface SnackbarBaseProps {
  as?: ElementType;
  color?: SnackbarColor;
  href?: string;
  className?: string;
  dismissable?: boolean;
  onDismiss?: () => void;
  children?: ReactNode;
}

export const SnackbarBase = ({
  as,
  children,
  className,
  color,
  dismissable = true,
  onDismiss,
  ...rest
}: SnackbarBaseProps) => {
  const Component = as || 'div';

  return (
    <Component className={cx(styles.item, className)} data-color={color} {...rest}>
      <div className={styles.content}>{children}</div>
      {dismissable && (
        <div className={styles.action}>
          <IconButton icon="x-mark" variant="text" onClick={onDismiss} className={styles.dismiss} />
        </div>
      )}
    </Component>
  );
};

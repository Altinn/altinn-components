import cx from 'classnames';
import type { ReactNode } from 'react';
import type { ButtonSize } from './Button';
import styles from './buttonLabel.module.css';

export interface ButtonLabelProps {
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
}

export const ButtonLabel = ({ className, size, children }: ButtonLabelProps) => {
  return (
    <span className={cx(styles.label, className)} data-size={size}>
      {children}
    </span>
  );
};

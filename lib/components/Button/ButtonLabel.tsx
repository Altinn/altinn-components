import type { ReactNode } from 'react';
import type { ButtonSize } from './ButtonBase';
import styles from './buttonLabel.module.css';

export interface ButtonLabelProps {
  size: ButtonSize;
  children: ReactNode;
}

export const ButtonLabel = ({ size, children }: ButtonLabelProps) => {
  return (
    <span className={styles.label} data-size={size}>
      {children}
    </span>
  );
};

import type { MouseEventHandler, ReactNode } from 'react';
import { ButtonBase, ButtonLabel } from '../Button';
import styles from './logoutButton.module.css';

export interface LogoutButtonProps {
  label?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler;
}

export const LogoutButton = ({ label = 'Logout', children, onClick }: LogoutButtonProps) => {
  return (
    <ButtonBase className={styles.button} variant="outline" size="lg" onClick={onClick}>
      <ButtonLabel className={styles.label} size="lg">
        {children || label}
      </ButtonLabel>
    </ButtonBase>
  );
};

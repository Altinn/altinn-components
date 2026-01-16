import type { MouseEventHandler, ReactNode } from 'react';
import { Button } from '../Button';
import styles from './logoutButton.module.css';

export interface LogoutButtonProps {
  label?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler;
}

export const LogoutButton = ({ label = 'Logout', children, onClick }: LogoutButtonProps) => {
  return (
    <Button className={styles.button} variant="outline" size="lg" onClick={onClick}>
      {children || label}
    </Button>
  );
};

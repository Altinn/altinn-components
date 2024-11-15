import type { MouseEventHandler, ReactNode } from 'react';
import { ButtonBase, ButtonLabel } from '../';
import styles from './drawerButton.module.css';

export interface DrawerButtonProps {
  label?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler;
}

export const DrawerButton = ({ label, children, onClick }: DrawerButtonProps) => {
  return (
    <ButtonBase variant="solid" size="md" className={styles.button} onClick={onClick}>
      <ButtonLabel size="md">{children || label}</ButtonLabel>
    </ButtonBase>
  );
};

import type { FocusEventHandler, ReactNode } from 'react';
import { Button, ButtonLabel } from '../';
import styles from './drawerButton.module.css';

export interface DrawerButtonProps {
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
  onBlurCapture?: FocusEventHandler<HTMLButtonElement> | undefined;
  onFocus?: FocusEventHandler<HTMLButtonElement> | undefined;
}

export const DrawerButton = ({ label, children, onClick, ...restProps }: DrawerButtonProps) => {
  return (
    <Button variant="solid" size="md" className={styles.button} onClick={onClick} {...restProps}>
      <ButtonLabel size="md">{children || label}</ButtonLabel>
    </Button>
  );
};

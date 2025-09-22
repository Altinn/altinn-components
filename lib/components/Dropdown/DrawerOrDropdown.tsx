import type { MouseEventHandler, ReactNode } from 'react';
import { DrawerBody, DrawerButton, DrawerFooter, DrawerHeader } from '../';
import type { DrawerButtonProps, DropdownSize } from '../';
import { Backdrop } from './Backdrop';
import styles from './drawerOrDropdown.module.css';

export interface DrawerOrDropdownProps {
  children: ReactNode;
  drawerTitle?: string;
  open?: boolean;
  size?: DropdownSize;
  onClose?: MouseEventHandler;
  drawerButton?: DrawerButtonProps;
}

export const DrawerOrDropdown = ({
  open = false,
  size = 'auto',
  onClose,
  drawerButton,
  children,
  drawerTitle,
}: DrawerOrDropdownProps) => {
  return (
    <>
      {open && <Backdrop onClick={onClose} />}
      <div className={styles.drawerOrDropdown} data-expanded={open} data-size={size}>
        <DrawerHeader className={styles.header} title={drawerTitle} onClose={onClose} />
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter className={styles.footer}>
          {drawerButton && (
            <DrawerButton
              onClick={drawerButton?.onClick}
              onFocus={drawerButton?.onFocus}
              onBlurCapture={drawerButton.onBlurCapture}
            >
              {drawerButton?.label}
            </DrawerButton>
          )}
        </DrawerFooter>
      </div>
    </>
  );
};

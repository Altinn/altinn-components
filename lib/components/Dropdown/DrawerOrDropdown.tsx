import type { MouseEventHandler, ReactNode } from 'react';
import { DrawerBody, DrawerButton, DrawerFooter, DrawerHeader } from '../';
import type { DrawerButtonProps } from '../';
import { Backdrop } from './Backdrop';
import styles from './drawerOrDropdown.module.css';

export interface DrawerOrDropdownProps {
  drawerTitle: string;
  children: ReactNode;
  open?: boolean;
  onClose?: MouseEventHandler;
  drawerButton?: DrawerButtonProps;
}

export const DrawerOrDropdown = ({
  open = false,
  onClose,
  drawerButton,
  children,
  drawerTitle,
}: DrawerOrDropdownProps) => {
  return (
    <>
      {open && <Backdrop onClick={onClose} />}
      <div className={styles.drawerOrDropdown} data-expanded={open}>
        <DrawerHeader className={styles.header} title={drawerTitle} onClose={onClose} />
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter className={styles.footer}>
          {drawerButton && <DrawerButton onClick={drawerButton?.onClick}>{drawerButton?.label}</DrawerButton>}
        </DrawerFooter>
      </div>
    </>
  );
};

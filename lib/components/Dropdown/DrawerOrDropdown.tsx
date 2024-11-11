import type { MouseEventHandler, ReactNode } from 'react';
import { DrawerBase, DrawerBody, DrawerButton, DrawerFooter, DrawerHeader, DropdownBase } from '../';
import type { DrawerButtonProps } from '../';
import { Backdrop } from './Backdrop';
import styles from './drawerOrDropdown.module.css';

export interface DrawerOrDropdownProps {
  title: string;
  children: ReactNode;
  expanded?: boolean;
  onClose?: MouseEventHandler;
  button?: DrawerButtonProps;
}

export const DrawerOrDropdown = ({ expanded = false, title, onClose, button, children }: DrawerOrDropdownProps) => {
  return (
    <>
      {expanded && <Backdrop onClick={onClose} />}
      <DropdownBase className={styles.dropdown} expanded={expanded}>
        {children}
      </DropdownBase>
      <DrawerBase className={styles.drawer} placement="bottom" expanded={expanded}>
        <DrawerHeader title={title} onClose={onClose} />
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter>{button && <DrawerButton onClick={button?.onClick}>{button?.label}</DrawerButton>}</DrawerFooter>
      </DrawerBase>
    </>
  );
};

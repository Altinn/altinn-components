import type { MouseEventHandler, ReactNode } from 'react';
import { DrawerBase, DrawerBody, DrawerButton, DrawerFooter, DrawerHeader, DropdownBase } from '../';
import type { DrawerButtonProps } from '../';
import { Backdrop } from './Backdrop';

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
      <DropdownBase layout="desktop" padding open={open}>
        {children}
      </DropdownBase>
      <DrawerBase layout="mobile" placement="bottom" open={open}>
        <DrawerHeader title={drawerTitle} onClose={onClose} />
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter>
          {drawerButton && <DrawerButton onClick={drawerButton?.onClick}>{drawerButton?.label}</DrawerButton>}
        </DrawerFooter>
      </DrawerBase>
    </>
  );
};

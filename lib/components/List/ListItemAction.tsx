import type { ReactNode } from 'react';
import { ContextMenu, type ContextMenuProps } from '../ContextMenu';
import styles from './listItemAction.module.css';

interface ListItemLinkProps {
  menu?: ContextMenuProps;
  children?: ReactNode;
}

export const ListItemAction = ({ menu, children }: ListItemLinkProps) => {
  return <div className={styles.action}>{children ? children : <>{menu && <ContextMenu {...menu} />}</>}</div>;
};

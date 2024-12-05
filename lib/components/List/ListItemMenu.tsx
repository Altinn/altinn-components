import { ContextMenu, type ContextMenuProps } from '../ContextMenu';
import styles from './listItemMenu.module.css';

export interface ListItemMenuProps extends ContextMenuProps {
  id: string;
}

/**
 * List item context menu
 */

export const ListItemMenu = ({ id = 'list-item-menu', ...props }: ListItemMenuProps) => {
  return <ContextMenu {...props} id={id} placement="right" className={styles.menu} />;
};

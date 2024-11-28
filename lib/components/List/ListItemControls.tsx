import type { ReactNode } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { ContextMenu, type ContextMenuProps } from '../ContextMenu';
import { Icon, type IconName } from '../Icon';
import styles from './listItemControls.module.css';

interface ListItemControlsProps {
  badge?: BadgeProps;
  linkText?: string;
  linkIcon?: IconName;
  menu?: ContextMenuProps;
  children?: ReactNode;
}

export const ListItemControls = ({ badge, linkText, linkIcon, menu, children }: ListItemControlsProps) => {
  return (
    <div className={styles.controls} data-menu={menu && true}>
      {children ? (
        children
      ) : (
        <>
          {badge && <Badge {...badge} />}
          {linkText && <span className={styles.linkText}>{linkText}</span>}
          {linkIcon && <Icon name={linkIcon} className={styles.linkIcon} />}
          {menu && <ContextMenu {...menu} className={styles.menu} />}
        </>
      )}
    </div>
  );
};

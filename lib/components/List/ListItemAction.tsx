import type { ReactNode } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { ContextMenu, type ContextMenuProps } from '../ContextMenu';
import { Icon, type IconName } from '../Icon';
import styles from './listItemAction.module.css';

interface ListItemActionProps {
  badge?: BadgeProps;
  menu?: ContextMenuProps;
  linkText?: string;
  linkIcon?: IconName;
  children?: ReactNode;
}

export const ListItemAction = ({ linkText, linkIcon, menu, badge, children }: ListItemActionProps) => {
  return (
    <div className={styles.action}>
      {children ? (
        children
      ) : (
        <>
          {badge && <Badge {...badge} />}
          {menu && <ContextMenu {...menu} />}
          {linkText && <span className={styles.linkText}>{linkText}</span>}
          {linkIcon && <Icon name={linkIcon} className={styles.linkIcon} />}
        </>
      )}
    </div>
  );
};

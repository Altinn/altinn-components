import cx from 'classnames';
import type { ReactNode } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { ContextMenu, type ContextMenuProps } from '../ContextMenu';
import { Icon, type IconName } from '../Icon';
import styles from './listItemControls.module.css';

interface ListItemControlsProps {
  className?: string;
  badge?: BadgeProps | undefined;
  linkText?: string;
  linkIcon?: IconName;
  menu?: ContextMenuProps;
  children?: ReactNode;
}

export const ListItemControls = ({ className, badge, linkText, linkIcon, menu, children }: ListItemControlsProps) => {
  return (
    <div className={cx(styles.controls, className)}>
      {children ? (
        children
      ) : (
        <>
          {badge && <Badge {...badge} />}
          {linkText && <span className={styles.linkText}>{linkText}</span>}
          {linkIcon && <Icon name={linkIcon} className={styles.linkIcon} />}
          {menu && <ContextMenu {...menu} size="sm" className={styles.menu} />}
        </>
      )}
    </div>
  );
};

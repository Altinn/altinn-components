import type { ReactNode } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { Icon, type IconName } from '../Icon';
import styles from './listItemFooter.module.css';

interface ListItemFooterProps {
  badge?: BadgeProps;
  linkText?: string;
  linkIcon?: IconName;
  children?: ReactNode;
}

export const ListItemFooter = ({ badge, linkText, linkIcon, children }: ListItemFooterProps) => {
  return (
    <footer className={styles.footer}>
      {children ? (
        children
      ) : (
        <>
          {badge && <Badge {...badge} />}
          {linkText && <span className={styles.linkText}>{linkText}</span>}
          {linkIcon && <Icon name={linkIcon} className={styles.linkIcon} />}
        </>
      )}
    </footer>
  );
};

import { ReactNode } from 'react';

import styles from './menu.module.css';

export interface MenuGroupProps {
  children?: ReactNode;
}

export const MenuGroup = ({ children }: MenuBaseProps) => {
  return <section className={styles.group}>{children}</section>;
};

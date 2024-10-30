import type { ReactNode } from 'react';
import styles from './header.module.css';

export interface HeaderBaseProps {
  children?: ReactNode;
}

export const HeaderBase = ({ children }: HeaderBaseProps) => {
  return <header className={styles.header}>{children}</header>;
};

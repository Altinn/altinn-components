import type { ReactNode } from 'react';
import type { LayoutColor } from './LayoutBase';
import styles from './layoutContent.module.css';

interface LayoutContentProps {
  color?: LayoutColor;
  children?: ReactNode;
  id?: string;
}

/**
 * Content layout container. Should be a child of LayoutBody.
 *
 *
 */
export const LayoutContent = ({ color, children, id = 'main-content' }: LayoutContentProps) => {
  return (
    <main className={styles.content} data-color={color} id={id}>
      {children}
    </main>
  );
};

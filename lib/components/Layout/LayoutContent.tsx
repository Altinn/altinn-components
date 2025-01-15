import type { LayoutBaseProps } from './LayoutBase';
import styles from './layoutContent.module.css';

/**
 * Content layout container. Should be a child of LayoutBody.
 *
 *
 */
export const LayoutContent = ({ color, children }: LayoutBaseProps) => {
  return (
    <main className={styles.content} data-color={color}>
      {children}
    </main>
  );
};

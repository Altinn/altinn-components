import type { LayoutBaseProps } from './LayoutBase';
import styles from './layoutContent.module.css';

/**
 * Content layout container. Should be a child of LayoutBody.
 *
 *
 */
export const LayoutContent = ({ theme, children }: LayoutBaseProps) => {
  return (
    <main className={styles.content} data-theme={theme}>
      {children}
    </main>
  );
};

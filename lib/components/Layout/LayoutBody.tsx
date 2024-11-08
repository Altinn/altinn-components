import type { LayoutBaseProps } from './LayoutBase';
import styles from './layoutBody.module.css';

/**
 * Body layout container. Should be a child of LayoutBase.
 * Defines a max-width for the application body.
 *
 */

export const LayoutBody = ({ theme, children }: LayoutBaseProps) => {
  return (
    <div className={styles.body} data-theme={theme}>
      {children}
    </div>
  );
};

import type { ElementType } from 'react';
import styles from './menuListDivider.module.css';

export interface MenuListDividerProps {
  ref?: React.Ref<HTMLLIElement>;
  as?: ElementType;
  style?: React.CSSProperties;
  index?: number;
}

export const MenuListDivider = ({ ref, as = 'li', style, index }: MenuListDividerProps) => {
  const Component = as;
  return (
    <Component
      className={styles.item}
      role={as === 'li' ? 'presentation' : undefined}
      aria-hidden="true"
      ref={ref}
      style={style}
      data-index={index}
    >
      <hr className={styles.divider} />
    </Component>
  );
};

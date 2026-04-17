import type { ElementType } from 'react';
import styles from './menuListHeading.module.css';

export interface MenuListHeadingProps {
  as?: ElementType;
  ref?: React.Ref<HTMLLIElement>;
  title: string;
  level?: number;
  index?: number;
  style?: React.CSSProperties;
}

export const MenuListHeading = ({ as = 'li', ref, title, level = 1, index, style }: MenuListHeadingProps) => {
  const Component = as;
  return (
    <Component className={styles.heading} aria-level={level} data-index={index} ref={ref} style={style}>
      {title}
    </Component>
  );
};

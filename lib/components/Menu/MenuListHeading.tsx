import type { ElementType } from 'react';
import styles from './menuListHeading.module.css';

export interface MenuListHeadingProps {
  ref?: React.Ref<HTMLLIElement>;
  id?: string;
  title: string;
  level: number;
  index?: number;
  style?: React.CSSProperties;
  /** `li` in a menu or listbox, a heading element in a plain list. */
  as?: ElementType;
  hidden?: boolean;
}

export const MenuListHeading = ({ ref, id, title, index, style, as = 'li', hidden }: MenuListHeadingProps) => {
  const Component = as;
  return (
    <Component
      className={styles.heading}
      id={id}
      role={as === 'li' ? 'presentation' : undefined}
      aria-hidden={hidden || undefined}
      data-index={index}
      ref={ref}
      style={style}
    >
      {title}
    </Component>
  );
};

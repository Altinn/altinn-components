import cx from 'classnames';
import type { ElementType } from 'react';
import styles from './menuList.module.css';

export interface MenuListGroupProps {
  ref?: React.Ref<HTMLLIElement>;
  as?: ElementType;
  hidden?: boolean;
  index?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  role?: React.AriaRole;
}

export const MenuListGroup = ({
  ref,
  as = 'li',
  hidden,
  index,
  style,
  children,
  role = 'presentation',
}: MenuListGroupProps) => {
  const Component = as;
  return (
    <Component
      ref={ref}
      className={cx(styles.group)}
      style={style}
      data-index={index}
      aria-hidden={hidden || undefined}
      role={as === 'li' ? role : undefined}
    >
      {children}
    </Component>
  );
};

import cx from 'classnames';
import type { MenuListProps } from './types';
import styles from './menuListItem.module.css';

export const MenuList = ({
  ref,
  as = 'ul',
  role = 'group',
  variant,
  color,
  className,
  style,
  children,
  onMouseEnter,
  onMouseLeave,
  onBlurCapture,
  onScroll,
}: MenuListProps) => {
  const Component = as;
  return (
    <Component
      ref={ref}
      className={cx(styles.list, className)}
      role={role}
      data-variant={variant}
      data-color={color}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlurCapture={onBlurCapture}
      onScroll={onScroll}
    >
      {children}
    </Component>
  );
};

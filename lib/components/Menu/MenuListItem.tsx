import cx from 'classnames';
import type { ElementType } from 'react';
import styles from './menuListItem.module.css';

export interface MenuListItemProps extends React.ComponentProps<'li'> {
  as?: ElementType;
  expanded?: boolean;
  index?: number;
  disabled?: boolean;
  ref?: React.Ref<HTMLLIElement>;
}

export const MenuListItem = ({
  ref,
  as = 'li',
  role = 'menuitem',
  className,
  children,
  style,
  index,
  disabled,
  onMouseEnter,
  onMouseLeave,
  'aria-checked': ariaChecked,
}: MenuListItemProps) => {
  const Component = as;
  return (
    <Component
      ref={ref}
      className={cx(styles.item, className)}
      style={style}
      role={role}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-index={index}
      aria-disabled={disabled}
      aria-checked={ariaChecked}
    >
      {children}
    </Component>
  );
};

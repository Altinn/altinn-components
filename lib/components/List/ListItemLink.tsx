import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import type { ListItemSize } from './ListItemBase';
import styles from './listItemLink.module.css';

export interface ListItemLinkProps {
  interactive?: boolean;
  size?: ListItemSize;
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  tabIndex?: number;
  loading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  children?: ReactNode;
}

export const ListItemLink = ({
  interactive = false,
  size,
  as,
  loading,
  disabled,
  selected,
  href,
  onClick,
  onKeyPress,
  tabIndex,
  className,
  children,
}: ListItemLinkProps) => {
  if (!interactive) {
    return (
      <div className={cx(styles.link, className)} data-size={size}>
        {children}
      </div>
    );
  }

  const Component = as || 'button';

  return (
    <Component
      className={cx(styles.link, styles.interactive, className)}
      href={href}
      onKeyPress={(e: KeyboardEvent) => {
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-disabled={loading || disabled}
      aria-selected={selected}
      data-size={size}
    >
      {children}
    </Component>
  );
};

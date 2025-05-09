import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import styles from './listItemLink.module.css';

export interface ListItemLinkProps {
  interactive?: boolean;
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
  active?: boolean;
  describedby?: string;
}

export const ListItemLink = ({
  interactive = false,
  as,
  loading,
  disabled,
  selected,
  href,
  onClick,
  onKeyPress,
  className,
  children,
  active,
  describedby,
}: ListItemLinkProps) => {
  if (!interactive) {
    return (
      <div className={cx(styles.link, className)} aria-describedby={describedby}>
        {children}
      </div>
    );
  }

  const Component = as || 'div';

  return (
    <Component
      className={cx(styles.link, styles.interactive, className)}
      href={href}
      onKeyPress={(e: KeyboardEvent) => {
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
      data-interactive={interactive}
      aria-disabled={loading || disabled}
      aria-selected={selected}
      aria-describedby={describedby}
      data-active={active}
    >
      {children}
    </Component>
  );
};

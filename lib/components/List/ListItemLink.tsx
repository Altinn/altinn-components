import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler } from 'react';
import styles from './listItemLink.module.css';

export interface ListItemLinkProps {
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  ariaLabel?: string;
  tabIndex?: number;
  loading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  active?: boolean;
}

export const ListItemLink = ({
  as,
  loading,
  disabled,
  selected,
  href,
  onClick,
  onKeyPress,
  className,
  active,
  ariaLabel,
}: ListItemLinkProps) => {
  const Component = as || 'div';

  if (Component === 'div') {
    return (
      <div className={cx(styles.link, className)}>
        <span>{ariaLabel}</span>
      </div>
    );
  }

  // Only apply aria-label if the component has an href or is not an anchor element
  const shouldApplyAriaLabel = href || (Component !== 'a' && ariaLabel);

  return (
    <Component
      className={cx(styles.link, className)}
      href={href}
      onKeyPress={(e: KeyboardEvent) => {
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
      data-interactive="true"
      aria-disabled={loading || disabled}
      aria-selected={selected}
      {...(shouldApplyAriaLabel && { 'aria-label': ariaLabel })}
      data-active={active}
    />
  );
};

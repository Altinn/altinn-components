import cx from 'classnames';
import type { CSSProperties, ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import { ListItemSelect, type ListItemSelectProps } from './ListItemSelect';
import styles from './listItemBase.module.css';

export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ListItemColor = 'default' | 'accent';
export type ListItemShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ListItemBaseProps {
  as?: ElementType;
  size?: ListItemSize;
  color?: ListItemColor;
  shadow?: ListItemShadow;
  className?: string;
  style?: CSSProperties;
  href?: string;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  tabIndex?: number;
  loading?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  active?: boolean;
  select?: ListItemSelectProps;
  selected?: boolean;
  expanded?: boolean;
  controls?: ReactNode;
  children?: ReactNode;
}

export const ListItemBase = ({
  as,
  size,
  color,
  shadow = 'xs',
  className,
  style,
  href,
  onClick,
  onKeyPress,
  tabIndex,
  loading,
  disabled,
  hidden = false,
  active = false,
  select,
  selected,
  expanded,
  controls,
  children,
}: ListItemBaseProps) => {
  const Component = as || 'a';

  return (
    <article
      className={styles.item}
      data-color={color}
      data-size={size}
      data-shadow={shadow}
      data-active={active}
      aria-hidden={hidden}
      aria-disabled={disabled || loading}
      aria-selected={selected}
      aria-expanded={expanded}
    >
      {select && <ListItemSelect {...select} size={size} />}
      <Component
        className={cx(styles.link, className)}
        data-size={size}
        aria-expanded={expanded}
        style={style}
        href={href}
        onKeyPress={(e: KeyboardEvent) => {
          e.key === 'Enter' && onClick?.();
          onKeyPress?.(e);
        }}
        onClick={onClick}
        tabIndex={tabIndex}
      >
        {children}
      </Component>
      {controls}
    </article>
  );
};

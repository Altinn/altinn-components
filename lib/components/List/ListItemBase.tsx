import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import { ListItemSelect, type ListItemSelectProps } from './ListItemSelect';
import styles from './listItemBase.module.css';

export type ListItemColor = 'default' | 'accent';
export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ListItemShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ListItemBaseProps {
  as?: ElementType;
  size?: ListItemSize;
  shadow?: ListItemShadow;
  color?: ListItemColor;
  href?: string;
  className?: string;
  active?: boolean;
  hidden?: boolean;
  collapsible?: boolean;
  disabled?: boolean;
  select?: ListItemSelectProps;
  selected?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  action?: ReactNode;
  controls?: ReactNode;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export const ListItemBase = ({
  as,
  children,
  className,
  href,
  size,
  color,
  active = false,
  hidden = false,
  shadow = 'xs',
  select,
  selected,
  disabled,
  expanded,
  controls,
  onClick,
  onKeyPress,
  style,
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
      aria-disabled={disabled}
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
        tabIndex={-1}
      >
        {children}
      </Component>
      {controls}
    </article>
  );
};

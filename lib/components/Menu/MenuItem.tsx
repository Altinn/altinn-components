import { CheckmarkIcon, ChevronRightIcon, MinusIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type {
  ElementType,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';

import { type AvatarGroupProps, type AvatarProps, type Color, Icon, type IconProps, type SvgElement } from '..';
import { Badge, type BadgeProps } from '../Badge';
import { ItemControls, ItemLabel, ItemMedia } from '../Item';
import styles from './menuItem.module.css';

export type MenuItemSize = 'sm' | 'md' | 'lg';
export type MenuItemColor = Color;
export type MenuItemVariant = 'default' | 'tinted';
export type MenuItemRole = 'menuItem' | 'radio' | 'checkbox' | string;

export interface MenuItemProps {
  id?: string;
  groupId?: string;
  role?: MenuItemRole;
  as?: ElementType;
  /** Size, default is sm */
  size?: MenuItemSize;
  /** Variant, default is undefined */
  variant?: MenuItemVariant;
  /** Color, default is undefined */
  color?: MenuItemColor;
  /** Icon: SvgElement or AvatarProps or AvatarGroupProps */
  icon?: IconProps | SvgElement | AvatarProps | AvatarGroupProps;
  /** Title */
  title?: string;
  /** Description */
  description?: string;
  /** Custom label */
  label?: ReactNode | (() => ReactElement);
  /** Optional badge */
  badge?: BadgeProps;
  /** Optional controls */
  controls?: ReactNode;
  /** Optional count */
  count?: number;
  /* searchable words */
  searchWords?: string[];
  /* use to highlight words in title and description */
  highlightWords?: string[];
  /** items = child elements */
  items?: MenuItemProps[];
  tabIndex?: number;
  expanded?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  selected?: boolean;
  active?: boolean;
  className?: string;
  /** linkIcon */
  linkIcon?: boolean;
  /** link or button */
  href?: string;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  onMouseEnter?: MouseEventHandler;
  /** radio or checkbox */
  name?: string;
  value?: string | number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** data-testid */
  'data-testid'?: string;
}

export const MenuItem = ({
  id,
  groupId,
  role = 'menuItem',
  as,
  href,
  onClick,
  onChange,
  onKeyPress,
  onMouseEnter,
  size = 'sm',
  variant,
  color,
  name,
  value,
  checked,
  icon,
  label,
  badge,
  controls,
  title,
  description,
  highlightWords,
  count,
  linkIcon = false,
  disabled,
  selected,
  active,
  className,
  'data-testid': dataTestId,
}: MenuItemProps) => {
  const applicableLabel = typeof label === 'function' ? label() : label;

  // role = checkbox or radio

  if (role === 'checkbox' || role === 'radio') {
    const applicableIcon = icon || (checked ? CheckmarkIcon : MinusIcon);

    return (
      <label
        className={cx(styles.item, className)}
        data-id={id}
        data-group-id={groupId}
        data-size={size}
        data-variant={variant}
        data-color={color}
        data-active={active}
        aria-disabled={disabled}
        aria-selected={checked}
        aria-label={title}
        data-testid={dataTestId}
        onKeyPress={(e: KeyboardEvent) => {
          if (disabled) return;
          e.key === 'Enter' && onClick?.();
          onKeyPress?.(e);
        }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <input
          name={name}
          value={value}
          type={role}
          checked={checked}
          onChange={onChange}
          style={{ opacity: 0, position: 'absolute' }}
        />
        <ItemMedia icon={applicableIcon} className={styles.media} />
        <ItemLabel
          className={styles.label}
          highlightWords={highlightWords}
          title={
            <>
              {title} {count && <i className={styles.count}>{count}</i>}
            </>
          }
          titleProps={{
            weight: 'medium',
            className: styles.title,
          }}
          description={description}
          descriptionProps={{
            weight: 'normal',
            variant: 'subtle',
            className: styles.description,
          }}
        >
          {applicableLabel}
        </ItemLabel>
        <ItemControls>
          {badge && <Badge {...badge} />}
          {controls}
        </ItemControls>
      </label>
    );
  }

  // menuItem

  const Component = as || 'a';
  const applicableLinkIcon = linkIcon && ChevronRightIcon;

  return (
    <Component
      href={href}
      className={cx(styles.item, className)}
      data-id={id}
      data-group-id={groupId}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-active={active}
      aria-disabled={disabled}
      aria-selected={selected}
      aria-label={title}
      data-testid={dataTestId}
      onKeyPress={(e: KeyboardEvent) => {
        if (disabled) return;
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {icon && <ItemMedia icon={icon} className={styles.media} />}
      <ItemLabel
        className={styles.label}
        highlightWords={highlightWords}
        title={
          <>
            {title} {count && <i className={styles.count}>{count}</i>}
          </>
        }
        titleProps={{
          weight: 'medium',
          className: styles.title,
        }}
        description={description}
        descriptionProps={{
          variant: 'subtle',
          className: styles.description,
        }}
      >
        {applicableLabel}
      </ItemLabel>
      <ItemControls>
        {badge && <Badge {...badge} />}
        {controls}
        {linkIcon && <Icon svgElement={applicableLinkIcon as SvgElement} className={styles.linkIcon} />}
      </ItemControls>
    </Component>
  );
};

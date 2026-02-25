import { CheckmarkIcon, ChevronRightIcon, MinusIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type {
  AriaAttributes,
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
import { pickAriaProps } from './aria.ts';
import styles from './menuItem.module.css';

export type MenuItemSize = 'sm' | 'md' | 'lg';
export type MenuItemColor = Color;
export type MenuItemVariant = 'default' | 'tinted';
export type MenuItemRole = 'menuItem' | 'radio' | 'checkbox' | string;

export interface MenuItemProps extends AriaAttributes {
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
  tabIndex = 0,
  className,
  'data-testid': dataTestId,
  ...attributes
}: MenuItemProps) => {
  const applicableLabel = typeof label === 'function' ? label() : label;
  const ariaProps = pickAriaProps(attributes as Record<string, unknown>);

  if (role === 'checkbox' || role === 'radio') {
    const applicableIcon = icon || (checked ? CheckmarkIcon : MinusIcon);

    return (
      <label
        {...ariaProps}
        className={cx(styles.item, className)}
        id={id}
        data-id={id}
        data-group-id={groupId}
        data-size={size}
        data-variant={variant}
        data-color={color}
        data-active={active}
        role={role}
        aria-disabled={disabled}
        aria-checked={checked}
        aria-selected={checked}
        data-selected={checked}
        aria-label={title}
        data-testid={dataTestId}
        onKeyUp={(e: KeyboardEvent) => {
          if (disabled) return;
          e.key === 'Enter' && onClick?.();
          onKeyPress?.(e);
        }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
      >
        <input
          name={name}
          value={value}
          type={role}
          checked={Boolean(checked)}
          onChange={onChange}
          readOnly={!onChange}
          style={{ opacity: 0, position: 'absolute' }}
          tabIndex={-1}
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
          {!disabled && controls}
        </ItemControls>
      </label>
    );
  }

  const Component = as || (href ? 'a' : 'button');
  const applicableLinkIcon = linkIcon && ChevronRightIcon;

  return (
    <Component
      href={href}
      className={cx(styles.item, className)}
      id={id}
      data-id={id}
      data-group-id={groupId}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-active={active}
      aria-disabled={disabled}
      aria-selected={selected}
      data-selected={selected}
      aria-label={title}
      data-testid={dataTestId}
      onKeyUp={(e: KeyboardEvent) => {
        if (disabled) return;
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      tabIndex={disabled ? -1 : (tabIndex ?? 0)}
      role={role === 'menuItem' ? 'menuitem' : role}
      {...ariaProps}
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
        {!disabled && controls}
        {linkIcon && <Icon svgElement={applicableLinkIcon as SvgElement} className={styles.linkIcon} />}
      </ItemControls>
    </Component>
  );
};

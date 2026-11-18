import { ChevronRightIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { useId } from 'react';
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
import { CheckboxCheckedIcon } from '../Icon/CheckboxCheckedIcon';
import { CheckboxUncheckedIcon } from '../Icon/CheckboxUncheckedIcon';
import { RadioCheckedIcon } from '../Icon/RadioCheckedIcon';
import { RadioUncheckedIcon } from '../Icon/RadioUncheckedIcon';
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
  /** @internal a11y context set by the parent list. In `navigation` mode the item renders without a menu role. */
  a11yMode?: 'menu' | 'listbox' | 'combobox' | 'navigation' | 'list';
  /** @internal `beside` renders `controls` next to the item, so buttons are not nested. */
  controlsPlacement?: 'inside' | 'beside';
  /** @internal checkbox or radio, set by the parent list so an `option` keeps the right icon in combobox mode. */
  checkableType?: 'checkbox' | 'radio';
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
  /** Advisory text set as the native HTML `title` attribute (tooltip) on the item element. */
  htmlTitle?: string;
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
  a11yMode,
  controlsPlacement = 'inside',
  checkableType,
  as,
  href,
  onClick,
  onKeyPress,
  onMouseEnter,
  size = 'sm',
  variant,
  color,
  checked,
  icon,
  label,
  badge,
  controls,
  title,
  htmlTitle,
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

  /** Count, description and badge are read after the title, as the description. */
  const generatedId = useId();
  const baseId = id ?? `menu-item-${generatedId}`;
  const showsOwnText = Boolean(title) && !applicableLabel;
  const countId = showsOwnText && count ? `${baseId}-count` : undefined;
  const descriptionId = showsOwnText && description ? `${baseId}-description` : undefined;
  const badgeId = title && badge && badge.size !== 'xs' ? `${baseId}-badge` : undefined;
  const describedBy = [countId, descriptionId, badgeId].filter(Boolean).join(' ') || undefined;

  const isOption = role === 'option';
  const isCheckableRole =
    role === 'radio' ||
    role === 'checkbox' ||
    role === 'menuitemradio' ||
    role === 'menuitemcheckbox' ||
    (isOption && typeof checked === 'boolean');

  if (isCheckableRole) {
    const isRadio = role === 'radio' || role === 'menuitemradio' || (isOption && checkableType === 'radio');
    const checkedIcon = isRadio ? RadioCheckedIcon : CheckboxCheckedIcon;
    const uncheckedIcon = isRadio ? RadioUncheckedIcon : CheckboxUncheckedIcon;
    const applicableIcon = icon || (checked ? checkedIcon : uncheckedIcon);

    return (
      <div
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
        aria-checked={isOption ? undefined : Boolean(checked)}
        aria-selected={isOption ? Boolean(checked) : undefined}
        data-selected={checked}
        aria-label={title}
        aria-describedby={describedBy}
        title={htmlTitle}
        data-testid={dataTestId}
        onKeyUp={(e: KeyboardEvent) => {
          if (disabled) return;
          // With tabIndex -1 the list handles Enter.
          tabIndex !== -1 && e.target === e.currentTarget && e.key === 'Enter' && onClick?.();
          onKeyPress?.(e);
        }}
        onClick={disabled ? undefined : onClick}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
      >
        <ItemMedia icon={applicableIcon} className={styles.media} />
        <ItemLabel
          className={styles.label}
          highlightWords={highlightWords}
          title={
            <>
              {title}{' '}
              {count && (
                <i className={styles.count} id={countId}>
                  {count}
                </i>
              )}
            </>
          }
          titleProps={{
            weight: 'medium',
            className: styles.title,
          }}
          description={description}
          descriptionProps={{
            id: descriptionId,
            weight: 'normal',
            variant: 'subtle',
            className: styles.description,
          }}
        >
          {applicableLabel}
        </ItemLabel>
        <ItemControls>
          {badge && <Badge {...badge} id={badgeId} />}
          {!disabled && controls}
        </ItemControls>
      </div>
    );
  }

  const Component = as || (href ? 'a' : 'button');
  const applicableLinkIcon = linkIcon && ChevronRightIcon;
  const isPlainList = a11yMode === 'navigation' || a11yMode === 'list';
  const resolvedRole = isPlainList ? undefined : role === 'menuItem' ? 'menuitem' : role;
  const ariaCurrent = role !== 'option' && selected ? (a11yMode === 'list' ? 'true' : 'page') : undefined;

  const itemLabel = (
    <ItemLabel
      className={styles.label}
      highlightWords={highlightWords}
      title={
        <>
          {title}{' '}
          {count && (
            <i className={styles.count} id={countId}>
              {count}
            </i>
          )}
        </>
      }
      titleProps={{
        weight: 'medium',
        className: styles.title,
      }}
      description={description}
      descriptionProps={{
        id: descriptionId,
        variant: 'subtle',
        className: styles.description,
      }}
    >
      {applicableLabel}
    </ItemLabel>
  );

  const itemControls = (
    <ItemControls>
      {badge && <Badge {...badge} id={badgeId} />}
      {!disabled && controls}
      {linkIcon && <Icon svgElement={applicableLinkIcon as SvgElement} className={styles.linkIcon} />}
    </ItemControls>
  );

  /** Item and controls as separate buttons in a row that looks like one item. */
  if (controlsPlacement === 'beside' && controls && !disabled) {
    return (
      <div
        className={cx(styles.item, styles.split, className)}
        data-group-id={groupId}
        data-size={size}
        data-variant={variant}
        data-color={color}
        data-active={active}
        data-selected={selected}
        title={htmlTitle}
      >
        <Component
          href={href}
          className={styles.splitAction}
          id={id}
          data-id={id}
          aria-current={ariaCurrent}
          aria-label={title}
          aria-describedby={describedBy}
          data-testid={dataTestId}
          onClick={onClick}
          onKeyUp={onKeyPress}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex ?? 0}
          role={resolvedRole}
          {...ariaProps}
        >
          {icon && <ItemMedia icon={icon} className={styles.media} />}
          {itemLabel}
        </Component>
        {itemControls}
      </div>
    );
  }

  return (
    <Component
      href={href}
      className={cx(styles.item, 'ds-focus--inset', className)}
      id={id}
      data-id={id}
      data-group-id={groupId}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-active={active}
      aria-disabled={disabled}
      {...(disabled ? { disabled } : {})}
      aria-current={ariaCurrent}
      aria-selected={role === 'option' ? selected : undefined}
      data-selected={selected}
      aria-label={title}
      aria-describedby={describedBy}
      title={htmlTitle}
      data-testid={dataTestId}
      onKeyUp={(e: KeyboardEvent) => {
        if (disabled) return;
        // Buttons and links click on Enter by themselves.
        const clicksNatively = Component === 'button' || Component === 'a';
        !clicksNatively && tabIndex !== -1 && e.target === e.currentTarget && e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      tabIndex={disabled ? -1 : (tabIndex ?? 0)}
      role={resolvedRole}
      {...ariaProps}
    >
      {icon && <ItemMedia icon={icon} className={styles.media} />}
      {itemLabel}
      {itemControls}
    </Component>
  );
};

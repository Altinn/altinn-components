import { CheckmarkIcon, ChevronRightIcon, MinusIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { type ElementType, type ReactNode, isValidElement } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  Heading,
  Icon,
  type IconProps,
  type SvgElement,
  isAvatarGroupProps,
  isAvatarProps,
} from '..';
import styles from './menuItem.module.css';

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

export interface MenuItemProps {
  id?: string;
  groupId?: string;
  type?: 'menuItem' | 'radio' | 'checkbox';
  as?: ElementType;
  size?: string;
  variant?: string;
  icon?: IconProps | SvgElement | AvatarProps | AvatarGroupProps;
  label?: ReactNode;
  title?: string;
  description?: string;
  count?: number;
  /* searchable words */
  searchWords?: string[];
  /* use to highlight words in title and description */
  highlightWords?: string[];
  items?: MenuItemProps[];
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  /** linkIcon */
  linkIcon?: boolean;
  /** radio or checkbox */
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** link or button */
  href?: string;
  onClick?: () => void;
}

export const MenuItem = ({
  id,
  groupId,
  type = 'menuItem',
  as,
  href,
  onClick,
  onChange,
  size = 'sm',
  name,
  value,
  checked,
  variant,
  icon,
  label,
  title,
  description,
  highlightWords,
  count,
  linkIcon = false,
  disabled,
  selected,
  className,
}: MenuItemProps) => {
  // checkbox or radio

  if (type === 'checkbox' || type === 'radio') {
    return (
      <label
        className={cx(styles.item, className)}
        data-id={id}
        data-group-id={groupId}
        data-size={size}
        data-variant={variant}
        data-type={type}
        aria-disabled={disabled}
        aria-selected={selected}
      >
        <input
          name={name}
          value={value}
          type={type}
          checked={checked}
          onChange={onChange}
          style={{ opacity: 0, position: 'absolute' }}
        />
        {(icon && (
          <span className={styles.media}>
            {(isAvatarProps(icon) && <Avatar {...icon} className={styles.avatar} />) ||
              (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
              (isReactNode(icon) && icon) || <Icon svgElement={icon as SvgElement} className={styles.icon} />}
          </span>
        )) || (
          <span className={styles.media}>
            {selected ? <CheckmarkIcon className={styles.icon} /> : <MinusIcon className={styles.icon} />}
          </span>
        )}
        {label || (
          <span className={styles.label}>
            <Heading weight="inherit" className={styles.title} highlightWords={highlightWords}>
              {title} {count && <i className={styles.count}>{count}</i>}
            </Heading>
            {description && (
              <Heading weight="inherit" variant="subtle" className={styles.description} highlightWords={highlightWords}>
                {description}
              </Heading>
            )}
          </span>
        )}
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
      data-type={type}
      aria-disabled={disabled}
      aria-selected={selected}
      onClick={onClick}
    >
      {icon && (
        <span className={styles.media}>
          {(isAvatarProps(icon) && <Avatar {...icon} className={styles.avatar} />) ||
            (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
            (isReactNode(icon) && icon) || <Icon svgElement={icon as SvgElement} className={styles.icon} />}
        </span>
      )}
      {label || (
        <span className={styles.label}>
          <Heading weight="inherit" className={styles.title} highlightWords={highlightWords}>
            {title} {count && <i className={styles.count}>{count}</i>}
          </Heading>
          {description && (
            <Heading weight="inherit" variant="subtle" className={styles.description} highlightWords={highlightWords}>
              {description}
            </Heading>
          )}
        </span>
      )}
      {linkIcon && <Icon svgElement={applicableLinkIcon as SvgElement} className={styles.icon} />}
    </Component>
  );
};

import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import type { ReactElement, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { IconProps, SvgElement } from '../Icon';
import { ListItemBase, type ListItemBaseProps } from './ListItemBase';
import { ListItemHeader, type ListItemHeaderProps } from './ListItemHeader';
import styles from './listItemBase.module.css';

export interface ListItemProps extends ListItemBaseProps, ListItemHeaderProps {
  /** List item id */
  id?: string;
  /** Custom className */
  className?: string;
  /** Element is loading, display a placeholder */
  loading?: boolean;
  /** Title */
  title?: string;
  /** Optional description */
  description?: string;
  /** List item icon */
  icon?: SvgElement | IconProps | ReactNode | undefined;
  /** List item avatar */
  avatar?: AvatarProps;
  /** List item avatarGroup */
  avatarGroup?: AvatarGroupProps;
  /** Custom label */
  label?: ReactNode | (() => ReactElement);
  /** Optional badge */
  badge?: BadgeProps | ReactNode | undefined;
  /** Whether to display the item with a link icon */
  linkIcon?: boolean;
}

export interface ListItemInputProps extends ListItemProps {
  id: string;
  /** Child items */
  items?: ListItemProps[];
}

export const ListItem = ({
  className,
  variant = 'solid',
  color,
  theme = 'default',
  shadow = 'xs',
  loading,
  collapsible,
  expanded,
  size = 'sm',
  icon,
  avatar,
  avatarGroup,
  title,
  description,
  badge,
  linkIcon = false,
  label,
  select,
  selected,
  controls,
  children,
  ...rest
}: ListItemProps) => {
  /** Set linkIcon */
  const chevronIcon = collapsible ? (expanded ? ChevronUpIcon : ChevronDownIcon) : undefined;

  /** Set label */
  const applicableLabel = typeof label === 'function' ? label() : label;

  if (expanded) {
    return (
      <li className={styles.item}>
        <ListItemBase
          interactive={false}
          variant={variant}
          color={color}
          theme={theme}
          shadow={shadow}
          selected={selected}
          expanded={expanded}
          title={title}
          loading={loading}
        >
          <ListItemBase
            theme="transparent"
            interactive={!controls}
            size={size}
            color={color}
            loading={loading}
            title={title}
            {...rest}
          >
            <ListItemHeader
              className={className}
              loading={loading}
              select={select}
              size={size}
              title={title}
              description={description}
              icon={icon}
              avatar={avatar}
              avatarGroup={avatarGroup}
              badge={badge}
              chevron={chevronIcon}
              controls={controls}
              {...rest}
            >
              {applicableLabel}
            </ListItemHeader>
          </ListItemBase>
          {children}
        </ListItemBase>
      </li>
    );
  }

  return (
    <li className={styles.item}>
      <ListItemBase
        interactive={!controls}
        variant={variant}
        color={color}
        theme={theme}
        shadow={shadow}
        expanded={expanded}
        selected={selected}
        loading={loading}
        title={title}
        {...rest}
      >
        <ListItemHeader
          className={className}
          loading={loading}
          select={select}
          size={size}
          title={title}
          description={description}
          icon={icon}
          avatar={avatar}
          avatarGroup={avatarGroup}
          badge={badge}
          chevron={chevronIcon ?? (linkIcon ? ChevronRightIcon : undefined)}
          controls={controls}
          {...rest}
        >
          {applicableLabel}
        </ListItemHeader>
      </ListItemBase>
    </li>
  );
};

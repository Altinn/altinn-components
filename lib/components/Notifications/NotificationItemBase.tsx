import type { ReactNode } from 'react';
import {
  ListItemBase,
  type ListItemBaseProps,
  ListItemLabel,
  type ListItemLabelProps,
  ListItemLink,
  type ListItemLinkProps,
} from '..';

import { NotificationItemIcon, type NotificationItemIconProps } from '..';
import { NotificationItemControls, type NotificationItemControlsProps } from '..';

import styles from './notificationItemBase.module.css';

export type NotificationItemVariant = 'default' | 'tinted';

export interface NotificationItemBaseProps
  extends ListItemBaseProps,
    ListItemLinkProps,
    ListItemLabelProps,
    NotificationItemControlsProps {
  id?: string;
  groupId?: string;
  icon?: NotificationItemIconProps['icon'];
  iconBadge?: NotificationItemIconProps['badge'];
  label?: ListItemLabelProps['children'];
  title?: ListItemLabelProps['title'];
  description?: ListItemLabelProps['description'];
  variant?: NotificationItemVariant;
  controls?: ReactNode;
}

export const NotificationItemBase = ({
  as,
  href,
  ref,
  disabled,
  loading,
  onClick,
  onKeyPress,
  tabIndex,
  color,
  variant,
  icon,
  iconBadge,
  label,
  title,
  description,
  highlightWords,
  dismissable,
  dismissLabel,
  onDismiss,
  contextMenu,
  ...props
}: NotificationItemBaseProps) => {
  const ariaLabel = props.ariaLabel;

  return (
    <ListItemBase ref={ref} className={styles.item} color={color} variant={variant} size="md">
      <header className={styles.header}>
        <NotificationItemIcon icon={icon} badge={iconBadge} />
        <ListItemLink
          as={as}
          href={href}
          onClick={onClick}
          onKeyPress={onKeyPress}
          tabIndex={tabIndex}
          loading={loading}
          disabled={disabled || loading}
          ariaLabel={ariaLabel}
          className={styles.link}
        >
          <div className={styles.linkFocus} aria-hidden="true" />
          <ListItemLabel
            loading={loading}
            highlightWords={highlightWords}
            className={styles.label}
            title={title}
            description={description}
          >
            {label}
          </ListItemLabel>
        </ListItemLink>
        <NotificationItemControls
          className={styles.controls}
          contextMenu={contextMenu}
          dismissable={dismissable}
          dismissLabel={dismissLabel}
          onDismiss={onDismiss}
        />
      </header>
    </ListItemBase>
  );
};

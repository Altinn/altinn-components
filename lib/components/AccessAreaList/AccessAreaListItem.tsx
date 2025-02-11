import type { Color } from '../../types';
import type { BadgeProps } from '../Badge';
import type { IconProps, SvgElement } from '../Icon';
import { ListItem } from '../List';
import type { ListItemProps } from '../List';
import styles from './accessAreaListItem.module.css';

export interface AccessAreaListItemProps extends Pick<ListItemProps, 'size' | 'onClick' | 'expanded'> {
  /** Id of the item */
  id: string;
  /** Name of the Access Area */
  name: string;
  /** The icon associated with the Access Area */
  icon: SvgElement;
  /** Color theme of the Access Area */
  colorTheme?: Color;
  /** Optional Badge to display things like the number of packages a user has in the area */
  badgeText?: string;
  /** Children to render when the item is expanded */
  children?: React.ReactNode;
}

export const AccessAreaListItem = ({
  name,
  icon,
  size = 'md',
  children,
  expanded = false,
  onClick,
  badgeText,
  colorTheme,
  ...props
}: AccessAreaListItemProps) => {
  const themedIcon = { svgElement: icon, theme: 'subtle', color: colorTheme } as IconProps;
  const badge = badgeText ? ({ label: badgeText, color: colorTheme } as BadgeProps) : undefined;
  return (
    <ListItem
      as="button"
      icon={themedIcon}
      title={name}
      size={size}
      collapsible={true}
      expanded={expanded}
      onClick={onClick}
      badge={badge}
      {...props}
    >
      {expanded && <div className={styles.content}>{children}</div>}
    </ListItem>
  );
};

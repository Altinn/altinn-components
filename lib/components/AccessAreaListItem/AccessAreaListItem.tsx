import type { Color } from '../../types';
import type { BadgeProps } from '../Badge';
import type { IconProps, SvgElement } from '../Icon';
import { ListItem } from '../List';
import type { ListItemProps } from '../List';
import styles from './accessAreaListItem.module.css';

interface AccessAreaListItemDefaultProps
  extends Pick<ListItemProps, 'size' | 'onClick' | 'expanded' | 'loading' | 'shadow' | 'border'> {
  /** Id of the item */
  id: string;
  /** Name of the Access Area */
  name: string;
  /** The http tag to be used for the title (default is h3)  */
  titleAs?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  /** Color theme of the Access Area */
  colorTheme?: Color;
  /** Optional Badge to display things like the number of packages a user has in the area */
  badgeText?: string;
  /** Children to render when the item is expanded */
  children?: React.ReactNode;
}

export type AccessAreaListItemProps =
  | (AccessAreaListItemDefaultProps & { icon: SvgElement; iconUrl?: never })
  | (AccessAreaListItemDefaultProps & { iconUrl: string; icon?: never });

export const AccessAreaListItem = ({
  name,
  icon,
  iconUrl,
  size = 'md',
  children,
  expanded = false,
  onClick,
  badgeText,
  colorTheme,
  loading,
  titleAs = 'h3',
  ...props
}: AccessAreaListItemProps) => {
  const themedIcon = {
    svgElement: icon,
    iconUrl: iconUrl,
    theme: 'subtle',
    color: colorTheme,
    altText: '',
  } as IconProps;
  const badge = badgeText ? ({ label: badgeText, color: colorTheme } as BadgeProps) : undefined;
  return (
    <ListItem
      as="button"
      icon={themedIcon}
      title={{ children: name, as: titleAs }}
      ariaLabel={name}
      size={size}
      collapsible={!loading}
      expanded={expanded}
      onClick={onClick}
      badge={badge}
      loading={loading}
      {...props}
    >
      {expanded && <div className={styles.content}>{children}</div>}
    </ListItem>
  );
};

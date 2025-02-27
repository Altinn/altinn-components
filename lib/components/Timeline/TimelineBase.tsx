import type { ReactNode } from 'react';
import { Flex, Icon, Avatar } from '..';
import type { FlexProps, AvatarProps, Color, Theme, SvgElement } from '..';
import styles from './timelineBase.module.css';

export type TimelineTheme = 'base' | 'surface';
export type TimelineBorder = 'solid' | 'dashed' | 'hidden';

export interface TimelineBaseProps {
  as?: FlexProps['as'];
  loading?: boolean;
  border?: TimelineBorder;
  borderHidden?: boolean;
  color?: Color;
  theme?: Theme;
  icon?: SvgElement;
  iconColor?: Color;
  avatar?: AvatarProps;
  children?: ReactNode;
}

export const TimelineBase = ({
  as = 'section',
  border = 'solid',
  color,
  icon,
  iconColor,
  avatar,
  children,
}: TimelineBaseProps) => {
  return (
    <Flex as={as} className={styles.section} color={color}>
      <aside className={styles.sidebar}>
        {(avatar && <Avatar {...avatar} size="sm" />) ||
          (icon && (
            <span data-color={iconColor} className={styles.icon}>
              <Icon svgElement={icon} size="sm" />
            </span>
          ))}
        <div className={styles.border} data-variant={border} data-color={color} />
      </aside>
      <div className={styles.content}>{children}</div>
    </Flex>
  );
};

import type { ElementType, ReactNode } from 'react';
import { Flex, TimelineIcon, type TimelineIconProps } from '..';
import type { Color, Theme } from '..';
import styles from './timelineBase.module.css';

export type TimelineTheme = 'base' | 'surface';
export type TimelineBorder = 'strong' | 'solid' | 'dashed' | 'hidden';
export type TimelineBorderWidth = 1 | 2;

export interface TimelineBaseProps {
  as?: ElementType;
  loading?: boolean;
  level?: number;
  color?: Color;
  border?: TimelineBorder;
  borderColor?: Color;
  theme?: Theme;
  icon?: TimelineIconProps['icon'];
  iconColor?: TimelineIconProps['color'];
  iconTheme?: TimelineIconProps['theme'];
  children?: ReactNode;
  id?: string;
}

export const TimelineBase = ({
  as = 'section',
  loading,
  border = 'solid',
  borderColor,
  level = 1,
  color,
  icon,
  iconColor,
  iconTheme,
  children,
  id,
  ...props
}: TimelineBaseProps) => {
  return (
    <Flex as={as} className={styles.section} color={color} {...props} id={id}>
      <aside className={styles.sidebar} data-level={level}>
        {icon && <TimelineIcon loading={loading} icon={icon} theme={iconTheme} color={iconColor} size="sm" />}
        <div className={styles.border} data-loading={loading} data-variant={border} data-color={borderColor || color} />
      </aside>
      <div className={styles.content}>{children}</div>
    </Flex>
  );
};

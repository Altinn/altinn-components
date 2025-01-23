import cx from 'classnames';
import { type Color, type IconName, type Size, Skeleton, type Theme, iconsMap } from '..';
import { SvgIcon } from './SvgIcon';
import styles from './icon.module.css';

export type IconVariant = 'solid' | 'outline';
export type IconSize = Size | undefined;
export type IconColor = Color;
export type IconTheme = Theme;

export interface IconProps {
  name: IconName;
  loading?: boolean;
  size?: IconSize;
  color?: IconColor;
  theme?: IconTheme;
  variant?: IconVariant;
  className?: string;
}

export const Icon = ({ loading, name, size, color, theme, variant = 'outline', className }: IconProps) => {
  const svgIcon: JSX.Element | undefined =
    (iconsMap[name] as { [key in IconVariant]: JSX.Element })?.[variant] ?? iconsMap[name]?.outline;

  if (!svgIcon) {
    return <span className={cx([styles.icon], className)} />;
  }

  return (
    <Skeleton loading={loading} variant="circle">
      <span data-size={size} data-color={color} data-theme={theme} className={cx([styles.icon], className)}>
        <SvgIcon svgIconComponent={svgIcon} />
      </span>
    </Skeleton>
  );
};

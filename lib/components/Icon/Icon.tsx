import cx from 'classnames';
import { type Color, type Size, Skeleton, type Theme } from '..';
import styles from './icon.module.css';

export type SvgElement = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type IconSize = Size | undefined;
export type IconColor = Color;
export type IconTheme = Theme;

export interface IconProps {
  svgElement: SvgElement | undefined | null | string;
  altText?: string;
  loading?: boolean;
  size?: IconSize;
  color?: IconColor;
  theme?: IconTheme;
  className?: string;
}

export const Icon = ({ loading, altText, svgElement: SvgElement, size, color, theme, className }: IconProps) => {
  if (!SvgElement) {
    return <span className={cx([styles.icon], className)} />;
  }

  return (
    <Skeleton loading={loading} variant="circle">
      <span data-size={size} data-color={color} data-theme={theme} className={cx([styles.icon], className)}>
        <SvgElement aria-hidden="true" alt-label={altText} />
      </span>
    </Skeleton>
  );
};

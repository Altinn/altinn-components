import cx from 'classnames';
import type { CSSProperties } from 'react';
import { type Color, type Size, Skeleton, type Theme } from '..';
import styles from './icon.module.css';

export type SvgElement = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type IconVariant = 'fill' | 'contain' | 'custom';
export type IconSize = Size | undefined;
export type IconColor = Color;
export type IconTheme = Theme;

export interface IconProps {
  svgElement?: SvgElement | undefined | null | string;
  iconUrl?: string;
  altText?: string;
  loading?: boolean;
  variant?: IconVariant;
  size?: IconSize;
  color?: IconColor;
  theme?: IconTheme;
  className?: string;
  style?: CSSProperties;
}

export const isIconProps = (icon: unknown): icon is IconProps => {
  return typeof icon === 'object' && icon !== null && ('svgElement' in icon || 'iconUrl' in icon);
};

export const Icon = ({
  loading,
  altText,
  svgElement: SvgElement,
  variant = 'fill',
  size,
  color,
  theme,
  iconUrl,
  className,
  style,
}: IconProps) => {
  if (SvgElement) {
    return (
      <span data-size={size} data-color={color} data-theme={theme} className={cx(styles.icon, className)} style={style}>
        <Skeleton loading={loading} variant="circle" className={styles.shape}>
          <span className={styles.shape} />
          <SvgElement aria-hidden="true" alt-label={altText} data-variant={variant} className={styles.svg} />
        </Skeleton>
      </span>
    );
  }

  if (iconUrl) {
    return (
      <span data-size={size} data-color={color} data-theme={theme} className={cx(styles.icon, className)} style={style}>
        <Skeleton loading={loading} variant="circle" className={styles.shape}>
          <span className={styles.shape} />
          <img src={iconUrl} alt={altText} className={styles.image} data-variant={variant} />
        </Skeleton>
      </span>
    );
  }

  return <span className={cx(styles.icon, className)} />;
};

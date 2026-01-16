import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import { type Color, type Size, Skeleton, type Theme } from '..';
import styles from './icon.module.css';

export type SvgElement = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type IconSize = Size | undefined;
export type IconColor = Color;
export type IconTheme = Theme;

export interface IconProps {
  svgElement?: SvgElement | undefined | null | string;
  children?: ReactNode;
  iconUrl?: string;
  altText?: string;
  loading?: boolean;
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
  size,
  color,
  iconUrl,
  className,
  style,
  children,
}: IconProps) => {
  return (
    <span data-ui="icon" data-size={size} data-color={color} className={cx(styles.icon, className)} style={style}>
      <Skeleton loading={loading} variant="circle" className={styles.shape}>
        <span className={styles.shape} />
        {SvgElement && <SvgElement aria-hidden="true" alt-label={altText} className={styles.svg} />}
        {iconUrl && <img src={iconUrl} alt={altText} className={styles.image} />}
        {children}
      </Skeleton>
    </span>
  );
};

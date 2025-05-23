import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import type { Color, Range, Size, Theme } from '..';
import styles from './grid.module.css';

export type GridElement = 'div' | 'section' | 'article' | 'header' | 'footer' | 'ol' | 'ul';
export type GridCols = 2 | 3 | 4;
export type GridSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | Range<11>;

export interface GridProps {
  as?: GridElement;
  color?: Color;
  theme?: Theme;
  size?: Size;
  cols?: GridCols;
  reverse?: boolean;
  spacing?: GridSpacing;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Grid = ({
  as = 'div',
  size,
  theme,
  color,
  cols = 2,
  reverse = false,
  spacing,
  className,
  style,
  children,
}: GridProps) => {
  const Component = as;

  return (
    <Component
      className={cx(styles.grid, className)}
      style={style}
      data-theme={theme}
      data-size={size}
      data-color={color}
      data-cols={cols}
      data-reverse={reverse}
      data-spacing={spacing}
    >
      {children}
    </Component>
  );
};

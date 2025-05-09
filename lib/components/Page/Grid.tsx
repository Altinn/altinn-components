import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import type { Color, Range, Theme } from '..';
import styles from './grid.module.css';

export type GridElement = 'div' | 'section' | 'article' | 'header' | 'footer' | 'ul';
export type GridCols = 2 | 3 | 4;
export type GridSpacing = 'xs' | Range<11>;
export type GridPadding = 'page' | Range<11>;
export type GridMargin = 'page' | 'section';

export interface GridProps {
  as?: GridElement;
  color?: Color;
  theme?: Theme;
  cols?: GridCols;
  reverse?: boolean;
  spacing?: GridSpacing;
  padding?: GridPadding;
  margin?: GridMargin;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Grid = ({
  as = 'div',
  theme,
  color,
  cols = 2,
  reverse = false,
  spacing,
  padding,
  margin,
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
      data-color={color}
      data-cols={cols}
      data-reverse={reverse}
      data-spacing={spacing}
      data-padding={padding}
      data-margin={margin}
    >
      {children}
    </Component>
  );
};

import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import styles from './grid.module.css';

export type GridTheme = 'inherit' | 'neutral' | 'company' | 'person';
export type GridColor = 'transparent' | 'subtle' | 'surface' | 'accent';
export type GridElement = 'div' | 'section' | 'article' | 'header' | 'footer';
export type GridCols = '1-2-3';
export type GridSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridMargin = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridProps {
  as?: GridElement;
  theme?: GridTheme;
  color?: GridColor;
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
  theme = 'inherit',
  color = 'transparent',
  cols = '1-2-3',
  reverse = false,
  spacing = 'none',
  padding = 'none',
  margin = 'none',
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

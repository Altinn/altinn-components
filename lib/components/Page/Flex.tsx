import cx from 'classnames';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import type { Color, Range, Shadow, Theme } from '..';
import styles from './flex.module.css';

export type FlexDirection = 'col' | 'row';
export type FlexAlign = 'initial' | 'start' | 'end' | 'center' | 'stretch';
export type FlexJustify = 'initial' | 'start' | 'end' | 'center' | 'between';
export type FlexSpacing = 'page' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | Range<11>;
export type FlexPadding = 'page' | Range<11>;
export type FlexMargin = 0 | 'page' | 'section' | 'bottom';
export type FlexSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface FlexProps {
  as?: ElementType;
  shadow?: Shadow;
  color?: Color;
  theme?: Theme;
  size?: FlexSize;
  direction?: FlexDirection;
  reverse?: boolean;
  align?: FlexAlign;
  justify?: FlexJustify;
  spacing?: FlexSpacing;
  padding?: FlexPadding;
  margin?: FlexMargin;
  bleed?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export const Flex = ({
  as = 'div',
  color,
  size,
  theme = 'transparent',
  shadow = 'none',
  direction = 'row',
  reverse = false,
  align = 'initial',
  justify = 'initial',
  spacing,
  padding,
  margin,
  bleed = false,
  className,
  style,
  children,
  ...rest
}: FlexProps) => {
  const Component = as;

  return (
    <Component
      className={cx(styles.flex, className)}
      style={style}
      data-size={size}
      data-color={color}
      data-theme={theme}
      data-shadow={shadow}
      data-direction={direction}
      data-reverse={reverse}
      data-align={align}
      data-justify={justify}
      data-spacing={spacing}
      data-padding={padding}
      data-margin={margin}
      data-bleed={bleed}
      {...rest}
    >
      {children}
    </Component>
  );
};

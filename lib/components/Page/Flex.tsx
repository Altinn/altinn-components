import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import type { Color, Range, Shadow, Theme } from '..';
import styles from './flex.module.css';

export type FlexElement = 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav';
export type FlexDirection = 'col' | 'row';
export type FlexAlign = 'initial' | 'start' | 'end' | 'center' | 'stretch';
export type FlexJustify = 'initial' | 'start' | 'end' | 'center' | 'between';
export type FlexSpacing = 'page' | 'xs' | Range<11>;
export type FlexPadding = 'page' | Range<11>;
export type FlexMargin = 'page' | 'section';

export interface FlexProps {
  as?: FlexElement;
  shadow?: Shadow;
  color?: Color;
  theme?: Theme;
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
}

export const Flex = ({
  as = 'div',
  color,
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

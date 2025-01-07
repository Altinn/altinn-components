import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import styles from './flex.module.css';

export type FlexElement = 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav';
export type FlexDirection = 'col' | 'row';
export type FlexAlign = 'initial' | 'start' | 'end' | 'center' | 'stretch';
export type FlexJustify = 'initial' | 'start' | 'end' | 'center' | 'between';
export type FlexSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FlexPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FlexMargin = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FlexShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface FlexProps {
  as?: FlexElement;
  direction?: FlexDirection;
  reverse?: boolean;
  align?: FlexAlign;
  justify?: FlexJustify;
  spacing?: FlexSpacing;
  padding?: FlexPadding;
  margin?: FlexMargin;
  shadow?: FlexShadow;
  inset?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Flex = ({
  as = 'div',
  direction = 'col',
  reverse = false,
  align = 'initial',
  justify = 'initial',
  spacing = 'none',
  padding = 'none',
  margin = 'none',
  inset = false,
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
      data-direction={direction}
      data-reverse={reverse}
      data-align={align}
      data-justify={justify}
      data-spacing={spacing}
      data-padding={padding}
      data-margin={margin}
      data-inset={inset}
      {...rest}
    >
      {children}
    </Component>
  );
};

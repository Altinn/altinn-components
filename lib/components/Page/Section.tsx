import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import styles from './section.module.css';

export type SectionTheme = 'inherit' | 'global' | 'neutral' | 'article';
export type SectionColor = 'transparent' | 'subtle' | 'surface' | 'accent';
export type SectionElement = 'section' | 'article' | 'header' | 'footer' | 'div';
export type SectionSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionMargin = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionFlex = 'col' | 'row';
export type SectionAlign = 'initial' | 'start' | 'end' | 'center' | 'stretch';
export type SectionJustify = 'initial' | 'start' | 'end' | 'center' | 'between';

export interface SectionProps {
  as?: SectionElement;
  theme?: SectionTheme;
  color?: SectionColor;
  flex?: SectionFlex;
  align?: SectionAlign;
  justify?: SectionJustify;
  reverse?: boolean;
  padding?: SectionPadding;
  spacing?: SectionSpacing;
  margin?: SectionMargin;
  shadow?: SectionShadow;
  inset?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Section = ({
  as = 'section',
  theme = 'inherit',
  color = 'transparent',
  flex = 'col',
  reverse = false,
  align = 'initial',
  justify = 'initial',
  padding = 'none',
  spacing = 'none',
  margin = 'none',
  shadow = 'none',
  inset = false,
  className,
  style,
  children,
}: SectionProps) => {
  const Component = as;

  return (
    <Component
      className={cx(styles.section, className)}
      style={style}
      data-flex={flex}
      data-reverse={reverse}
      data-align={align}
      data-justify={justify}
      data-theme={theme}
      data-color={color}
      data-inset={inset}
      data-padding={padding}
      data-spacing={spacing}
      data-margin={margin}
      data-shadow={shadow}
    >
      {children}
    </Component>
  );
};

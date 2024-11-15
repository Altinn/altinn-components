import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import styles from './sectionBase.module.css';

export type SectionElement = 'section' | 'main' | 'header' | 'footer' | 'div';
export type SectionColor = 'transparent' | 'white' | 'subtle' | 'accent';
export type SectionSpacing = 'none' | 'sm' | 'md' | 'lg';
export type SectionMargin = 'none' | 'sm' | 'md' | 'lg';
export type SectionShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SectionBaseProps {
  as?: SectionElement;
  color?: SectionColor;
  padding?: boolean;
  spacing?: SectionSpacing;
  margin?: SectionMargin;
  shadow?: SectionShadow;
  inset?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const SectionBase = ({
  as = 'section',
  color = 'transparent',
  padding = false,
  spacing = 'none',
  margin = 'none',
  shadow = 'none',
  inset = false,
  className,
  style,
  children,
}: SectionBaseProps) => {
  const Component = as;

  return (
    <Component
      className={cx(styles.section, className)}
      style={style}
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

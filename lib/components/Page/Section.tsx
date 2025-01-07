import cx from 'classnames';
import styles from './section.module.css';

import { Flex, type FlexProps } from '..';

export type SectionBg = 'transparent' | 'default' | 'subtle' | 'surface' | 'border' | 'base';
export type SectionShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionColor = 'inherit' | 'company' | 'person' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';

export interface SectionProps extends FlexProps {
  inset?: boolean;
  color?: SectionColor;
  bg?: SectionBg;
  shadow?: SectionShadow;
}

export const Section = ({ as = 'section', className, bg, color, shadow, children, ...rest }: SectionProps) => {
  return (
    <Flex
      as={as}
      data-bg={bg}
      data-color={color}
      data-shadow={shadow}
      className={cx(styles.section, className)}
      {...rest}
    >
      {children}
    </Flex>
  );
};

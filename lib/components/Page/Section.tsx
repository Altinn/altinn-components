import cx from 'classnames';
import styles from './section.module.css';

import { Flex, type FlexProps } from '..';

export type SectionBg = 'transparent' | 'subtle' | 'surface' | 'accent';
export type SectionShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SectionProps extends FlexProps {
  inset?: boolean;
  bg?: SectionBg;
  shadow?: SectionShadow;
}

export const Section = ({ as = 'section', className, bg, shadow, children, ...rest }: SectionProps) => {
  return (
    <Flex as={as} data-bg={bg} data-shadow={shadow} className={cx(styles.section, className)} {...rest}>
      {children}
    </Flex>
  );
};

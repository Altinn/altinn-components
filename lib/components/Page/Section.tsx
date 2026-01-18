import cx from 'classnames';
import { Flex, type FlexProps } from '..';
import styles from './section.module.css';

/**
 * Section component. Use to divide pages into sections. Should renders a flex column by default.
 */

export interface SectionProps extends FlexProps {
  variant?: 'default' | 'subtle' | 'tinted';
  bleed?: boolean;
}

export const Section = ({
  as = 'section',
  direction = 'col',
  align = 'initial',
  variant,
  className,
  children,
  ...rest
}: SectionProps) => {
  return (
    <Flex
      as={as}
      align={align}
      direction={direction}
      theme={variant}
      className={cx(styles.section, className)}
      {...rest}
    >
      {children}
    </Flex>
  );
};

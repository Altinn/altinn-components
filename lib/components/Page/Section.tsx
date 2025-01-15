import { Flex, type FlexProps } from '..';

/**
 * Section component. Use to divide pages into sections. Should renders a flex column by default.
 */

export interface SectionProps extends FlexProps {
  bleed?: boolean;
}

export const Section = ({ as = 'section', direction = 'col', children, ...rest }: FlexProps) => {
  return (
    <Flex as={as} direction={direction} {...rest}>
      {children}
    </Flex>
  );
};

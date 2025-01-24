import { Flex, type FlexProps } from './Flex';

export interface PageBaseProps extends FlexProps {
  bleed?: boolean;
}

/**
 * PageBase component. Use as wrapper for pages. Should renders a flex column by default.
 */

export const PageBase = ({ children, as = 'div', direction = 'col', spacing = 'page', ...props }: PageBaseProps) => {
  return (
    <Flex as={as} spacing={spacing} direction={direction} {...props}>
      {children}
    </Flex>
  );
};

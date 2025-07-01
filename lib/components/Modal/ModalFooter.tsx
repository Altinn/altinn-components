import type { ReactNode } from 'react';
import { Flex, type FlexProps } from '../';

export interface ModalFooterProps extends FlexProps {
  children?: ReactNode;
}

export const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return (
    <Flex as="footer" spacing={2} padding={4} {...props}>
      {children}
    </Flex>
  );
};

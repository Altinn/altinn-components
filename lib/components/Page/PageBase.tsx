import type { ReactNode } from 'react';
import { SectionBase, type SectionBaseProps } from './SectionBase';

export interface PageBaseProps extends SectionBaseProps {
  children?: ReactNode;
}

export const PageBase = ({ children, ...props }: PageBaseProps) => {
  return (
    <SectionBase as="main" {...props}>
      {children}
    </SectionBase>
  );
};

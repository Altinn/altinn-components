import { SkipLink as DsSkipLink, type SkipLinkProps as DsSkipLinkProps } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';
import type { Color, Size } from '../../types';

export interface SkipLinkProps {
  color: Color;
  size: Size;
  children: ReactNode;
  href: string;
}

export const SkipLink = ({ color, size, children, href }: SkipLinkProps) => (
  <DsSkipLink
    data-color={color as DsSkipLinkProps['data-color']}
    data-size={size as DsSkipLinkProps['data-size']}
    href={href}
  >
    {children}
  </DsSkipLink>
);

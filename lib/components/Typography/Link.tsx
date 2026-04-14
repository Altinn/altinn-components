import { Link as DsLink, type LinkProps as DsLinkProps } from '@digdir/designsystemet-react';
import * as React from 'react';
import styles from './link.module.css';

export type LinkSize = 'xs' | DsLinkProps['data-size'];

export type LinkProps = {
  as?: React.ElementType;
  size?: LinkSize;
} & Omit<DsLinkProps, 'asChild' | 'data-size'>;

export const Link = React.forwardRef<HTMLButtonElement, LinkProps>(function Link(
  { as: Component = 'a', children, size, ...rest },
  ref,
) {
  return (
    <DsLink className={styles.link} data-size={size as DsLinkProps['data-size']} asChild>
      <Component {...rest} ref={ref}>
        {children}
      </Component>
    </DsLink>
  );
});

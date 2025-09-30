import { Alert as DsAlert } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';
import { Heading, Typography } from '../Typography';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps {
  variant: AlertVariant;
  heading: string;
  message?: string;
  children?: ReactNode;
}

export const Alert = ({ variant, heading, message, children }: AlertProps) => {
  return (
    <DsAlert data-color={variant}>
      <Heading>{heading}</Heading>
      {message && <Typography>{message}</Typography>}
      {children}
    </DsAlert>
  );
};

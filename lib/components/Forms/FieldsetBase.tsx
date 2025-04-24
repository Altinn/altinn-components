import type { ReactNode } from 'react';
import { Fieldset, type FieldsetProps, Legend } from '..';

export type FieldsetBaseProps = {
  legend?: ReactNode;
  inline?: boolean;
  children?: ReactNode;
} & FieldsetProps;

export const FieldsetBase = ({ legend, children, ...props }: FieldsetBaseProps) => {
  return (
    <Fieldset {...props}>
      {!!legend && <Legend>{legend}</Legend>}
      {children}
    </Fieldset>
  );
};

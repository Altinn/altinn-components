import { Button, Input, type InputProps } from '../';

export type ItemSelectProps = Omit<InputProps, 'size'>;

/**
 * List item checkbox. Needs `aria-label` or `aria-labelledby`, as it has no visible label.
 */

export const ItemSelect = ({ className, ...rest }: ItemSelectProps) => {
  return (
    <Button as="label" className={className} size="xs" variant="ghost" icon rounded>
      <Input {...rest} type="checkbox" size="xs" />
    </Button>
  );
};

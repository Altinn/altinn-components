import { Button, Input, type InputProps } from '../';

export interface ItemSelectProps extends InputProps {
  onClick?: () => void;
  className?: string;
}

/**
 * List item checkbox
 */

export const ItemSelect = ({ className, onClick, checked, onChange, ...rest }: ItemSelectProps) => {
  return (
    <Button className={className} size="xs" variant="ghost" icon rounded onClick={onClick}>
      <Input {...rest} type="checkbox" size="xs" checked={checked} onChange={onChange} />
    </Button>
  );
};

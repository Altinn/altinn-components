import { CheckboxCheckedIcon } from './CheckboxCheckedIcon';
import { CheckboxUncheckedIcon } from './CheckboxUncheckedIcon';

export type CheckboxIconProps = {
  checked: boolean;
  hover?: boolean;
  title?: string;
  className?: string;
};

/**
 * Checkbox for lists and list items
 */
export const CheckboxIcon = ({ checked, title = 'checkbox', hover = false, className }: CheckboxIconProps) => {
  const iconProps = { title, className };
  return checked ? <CheckboxCheckedIcon {...iconProps} /> : <CheckboxUncheckedIcon {...iconProps} hover={hover} />;
};

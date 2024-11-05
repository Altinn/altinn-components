import { RadioCheckedIcon } from './RadioCheckedIcon';
import { RadioUncheckedIcon } from './RadioUncheckedIcon';

export type RadioIconProps = {
  checked: boolean;
  hover?: boolean;
  title?: string;
  className?: string;
};

/**
 * Radio for lists and list items
 */
export const RadioIcon = ({ checked, title = 'Radio', hover = false, className }: RadioIconProps) => {
  const iconProps = { title, className };
  return checked ? <RadioCheckedIcon {...iconProps} /> : <RadioUncheckedIcon {...iconProps} hover={hover} />;
};

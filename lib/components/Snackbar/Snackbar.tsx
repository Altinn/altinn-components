import type { ElementType } from 'react';
import type { IconName } from '../Icon';
import { SnackbarBase, type SnackbarColor } from './SnackbarBase';
import { SnackbarLabel } from './SnackbarLabel';
import { SnackbarMedia } from './SnackbarMedia';

export interface SnackbarProps {
  id: string;
  /** Element type to render */
  as?: ElementType;
  /** Color */
  color?: SnackbarColor;
  /** Message */
  message?: string;
  /** Icon */
  icon?: IconName;
  /** Dismissable */
  dismissable?: boolean;
  /** onDismiss */
  onDismiss?: () => void;
  /** Optional classname */
  className?: string;
}

export const Snackbar = ({ as = 'a', color, message, icon, ...rest }: SnackbarProps) => {
  return (
    <SnackbarBase as={as} color={color} {...rest}>
      <SnackbarMedia icon={icon} />
      <SnackbarLabel>{message}</SnackbarLabel>
    </SnackbarBase>
  );
};

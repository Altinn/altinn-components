import type { ElementType } from 'react';
import { MenuItem } from '../Menu';

export interface BackButtonProps {
  label: string;
  onClick?: () => void;
  as?: ElementType;
}

export const BackButton = ({ label, onClick, as }: BackButtonProps) => {
  return <MenuItem size="xs" id="back" icon="arrow-undo" title={label} onClick={onClick} as={as} />;
};

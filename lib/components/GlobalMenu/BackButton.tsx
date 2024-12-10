import { MenuItem } from '../Menu';

export interface BackButtonProps {
  label: string;
  onClick?: () => void;
}

export const BackButton = ({ label, onClick }: BackButtonProps) => {
  return <MenuItem size="xs" id="back" icon="arrow-undo" title={label} onClick={onClick} />;
};

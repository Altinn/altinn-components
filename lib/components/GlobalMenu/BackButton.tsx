import { MenuItem } from '../Menu';

export interface BackButtonProps {
  label: string;
  onClick?: () => void;
}

export const BackButton = ({ label, onClick }: BackButtonProps) => {
  return <MenuItem id="back" icon="arrow-left" title={label} onClick={onClick} />;
};

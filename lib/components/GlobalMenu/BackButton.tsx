import { ArrowRedoIcon } from '@navikt/aksel-icons';
import type { ElementType } from 'react';
import { MenuItem } from '../Menu';

export interface BackButtonProps {
  label: string;
  onClick?: () => void;
  as?: ElementType;
}

export const BackButton = ({ label, onClick, as }: BackButtonProps) => {
  return <MenuItem size="sm" id="back" icon={ArrowRedoIcon} title={label} onClick={onClick} as={as} />;
};

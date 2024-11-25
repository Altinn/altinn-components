import type { ReactNode } from 'react';
import { Typography } from '../Typography';
import { DialogSectionBase } from './DialogSectionBase';

export interface DialogFooterProps {
  additionalInfo?: ReactNode;
}

export const DialogFooter = ({ additionalInfo }: DialogFooterProps) => {
  return (
    <DialogSectionBase>
      <Typography size="md">{additionalInfo}</Typography>
    </DialogSectionBase>
  );
};

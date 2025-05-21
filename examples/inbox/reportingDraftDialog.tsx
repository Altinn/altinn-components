import type { DialogProps } from '../../lib';
import { reportingDialog } from './reportingDialog';

export const reportingDraftDialog: DialogProps = {
  ...reportingDialog,
  status: {
    value: 'draft',
    label: 'Utkast',
  },
};

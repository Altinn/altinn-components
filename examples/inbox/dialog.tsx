import { dialogBody, dialogContact, dialogHeader, dialogInfo, dialogLayout } from '.';
import type { DialogProps } from '../../lib';

export const dialog: DialogProps = {
  ...dialogLayout,
  ...dialogHeader,
  ...dialogBody,
  additionalInfo: dialogInfo,
  contact: dialogContact,
};

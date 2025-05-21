import { dialogBody, dialogHeader, dialogLayout, dialogTabs } from '.';
import type { DialogProps } from '../../lib';

export const dialog: DialogProps = {
  ...dialogLayout,
  header: dialogHeader,
  body: dialogBody,
  tabs: dialogTabs,
};

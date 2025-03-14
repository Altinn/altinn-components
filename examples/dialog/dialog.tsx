import type { DialogProps } from '../../lib';
import { dialogBody, dialogHeader, dialogLayout, dialogTabs } from './';

export const dialog: DialogProps = {
  ...dialogLayout,
  header: dialogHeader,
  body: dialogBody,
  tabs: dialogTabs,
};

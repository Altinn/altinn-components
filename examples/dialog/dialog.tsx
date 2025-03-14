import type { DialogProps } from "../../lib";
import { dialogLayout, dialogHeader, dialogBody, dialogTabs } from "./";

export const dialog: DialogProps = {
  ...dialogLayout,
  header: dialogHeader,
  body: dialogBody,
  tabs: dialogTabs,
};

import type { ReactNode } from "react";
import {
  DialogLayout,
  type DialogLayoutProps,
  DialogHeader,
  type DialogHeaderProps,
  DialogBody,
  type DialogBodyProps,
  DialogTabs,
  type DialogTabsProps,
} from "..";

export interface DialogProps extends DialogLayoutProps {
  /** Dialog is loading */
  loading?: boolean;
  /** Dialog header */
  header?: DialogHeaderProps;
  /** Dialog body */
  body?: DialogBodyProps;
  /** Tabs */
  tabs?: DialogTabsProps;
  /** Tabpanel */
  children?: ReactNode;
}

/**
 * Full representation of a dialog, including attachments, actions and history,
 */

export const Dialog = ({
  loading,
  backButton,
  contextMenu,
  pageMenu,
  header,
  body,
  tabs,
  children,
}: DialogProps) => {
  return (
    <DialogLayout
      backButton={backButton}
      contextMenu={contextMenu}
      pageMenu={pageMenu}
    >
      {header && <DialogHeader loading={loading} {...header} />}
      {body && <DialogBody loading={loading} {...body} />}
      {tabs && <DialogTabs {...tabs} />}

      {children}
    </DialogLayout>
  );
};

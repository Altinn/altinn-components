import type { ReactNode } from 'react';
import {
  DialogBody,
  type DialogBodyProps,
  DialogContact,
  type DialogContactProps,
  DialogHeader,
  type DialogHeaderProps,
  DialogHistory,
  type DialogHistoryProps,
  DialogLayout,
  type DialogLayoutProps,
  DialogSection,
  type DialogSectionProps,
  Divider,
} from '..';

export interface DialogProps extends DialogLayoutProps, DialogHeaderProps, DialogBodyProps {
  /** Dialog is loading */
  loading?: boolean;
  /** Dialog title */
  title: string;
  /** Dialog history */
  history?: DialogHistoryProps;
  /** Dialog history */
  additionalInfo?: DialogSectionProps;
  /** Dialog history */
  contact?: DialogContactProps;
  /** Content */
  children?: ReactNode;
}

/**
 * Full representation of a dialog, including attachments, actions, history, additional information, and contact information.
 */

export const Dialog = ({
  loading,
  backButton,
  contextMenu,
  pageMenu,
  sender,
  title,
  history,
  additionalInfo,
  seenByLog,
  contact,
  children,
  ...props
}: DialogProps) => {
  return (
    <DialogLayout backButton={backButton} contextMenu={contextMenu} pageMenu={pageMenu}>
      {title && <DialogHeader loading={loading} {...props} title={title} />}
      {children && (
        <DialogBody loading={loading} sender={sender} seenByLog={seenByLog} {...props}>
          {children}
        </DialogBody>
      )}
      {history && <DialogHistory {...history} />}
      {additionalInfo && (
        <>
          <Divider />
          <DialogSection {...additionalInfo} />
        </>
      )}
      {contact && (
        <>
          <Divider />
          <DialogContact {...contact} />
        </>
      )}
    </DialogLayout>
  );
};

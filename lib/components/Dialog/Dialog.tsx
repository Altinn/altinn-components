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

/**
 * Props for the Dialog component.
 *
 * The Dialog component provides a comprehensive interface for displaying detailed
 * communication content such as messages, documents, or forms. It combines multiple
 * dialog sections into a cohesive layout with consistent styling and behavior.
 *
 * @example
 * ```tsx
 * // Basic dialog with content
 * <Dialog
 *   title="Important Message"
 *   sender={{
 *     name: "Tax Authority",
 *     type: "company"
 *   }}
 * >
 *   <p>Your tax return has been processed successfully.</p>
 * </Dialog>
 *
 * // Complete dialog with all sections
 * <Dialog
 *   title="Application Response"
 *   loading={isLoading}
 *   backButton={{
 *     onClick: () => navigate(-1),
 *     label: "Back to inbox"
 *   }}
 *   contextMenu={{
 *     items: [
 *       { id: 'download', title: 'Download', icon: DownloadIcon },
 *       { id: 'forward', title: 'Forward', icon: ForwardIcon }
 *     ]
 *   }}
 *   sender={{
 *     name: "Municipal Office",
 *     type: "company"
 *   }}
 *   recipient={{
 *     name: "John Doe",
 *     type: "person"
 *   }}
 *   history={{
 *     items: previousMessages
 *   }}
 *   additionalInfo={{
 *     title: "Application Details",
 *     children: <ApplicationMetadata />
 *   }}
 *   contact={{
 *     title: "Need Help?",
 *     items: contactOptions
 *   }}
 *   seenByLog={{
 *     items: readReceipts
 *   }}
 * >
 *   <Typography>
 *     <h2>Application Approved</h2>
 *     <p>Your building permit application has been approved...</p>
 *   </Typography>
 * </Dialog>
 * ```
 */
export interface DialogProps extends DialogLayoutProps, DialogHeaderProps, DialogBodyProps {
  /**
   * Whether the dialog content is in a loading state. When true, displays
   * skeleton loaders instead of actual content.
   */
  loading?: boolean;
  /**
   * The main title/subject of the dialog. Displayed prominently in the header section.
   */
  title: string;
  /**
   * Configuration for displaying conversation history or previous related messages.
   * Shows a chronological list of related communications.
   */
  history?: DialogHistoryProps;
  /**
   * Configuration for an additional information section. Used to display
   * supplementary details, metadata, or related content.
   */
  additionalInfo?: DialogSectionProps;
  /**
   * Configuration for contact information section. Provides users with
   * ways to get help or contact relevant parties.
   */
  contact?: DialogContactProps;
  /**
   * The main content of the dialog. Can include rich text, forms, attachments,
   * or any other relevant information.
   */
  children?: ReactNode;
}

/**
 * Dialog component for displaying comprehensive communication content.
 *
 * The Dialog component provides a complete interface for viewing and interacting with
 * detailed content such as messages, documents, applications, or forms. It combines
 * multiple specialized dialog sections (header, body, history, additional info, contact)
 * into a cohesive, well-structured layout.
 *
 * Key features:
 * - Comprehensive layout with header, body, and optional sections
 * - Loading states with skeleton placeholders
 * - Navigation controls (back button, context menu, page menu)
 * - Sender/recipient information display
 * - Conversation history tracking
 * - Additional information sections
 * - Contact and help information
 * - Read receipt tracking (seen by log)
 * - Responsive design with proper spacing
 * - Accessibility support with semantic structure
 *
 * Layout structure:
 * ```
 * DialogLayout
 * ├── DialogHeader (title, metadata, actions)
 * ├── DialogBody (main content, sender/recipient info)
 * ├── DialogHistory (conversation history)
 * ├── Divider
 * ├── DialogSection (additional information)
 * ├── Divider
 * └── DialogContact (contact information)
 * ```
 *
 * The component automatically handles:
 * - Conditional rendering of sections based on provided props
 * - Proper spacing and dividers between sections
 * - Loading state propagation to child components
 * - Consistent styling across all sections
 *
 * @param props - The props for the Dialog component
 * @returns A React element representing the complete dialog interface
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

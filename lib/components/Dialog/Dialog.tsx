import type { ReactNode } from "react";
import {
  Article,
  type BackButtonProps,
  ContactSection,
  type ContactSectionProps,
  ContextMenu,
  type ContextMenuProps,
  type DialogActionButtonProps,
  DialogActions,
  DialogAttachments,
  type DialogAttachmentsProps,
  DialogBody,
  type DialogBodyProps,
  DialogHeader,
  type DialogHeaderProps,
  DialogHistory,
  type DialogHistoryProps,
  DialogSection,
  type DialogSectionProps,
  PageBase,
  PageMenu,
  type PageMenuProps,
  PageNav,
  Section,
} from "..";

export interface DialogProps extends DialogHeaderProps, DialogBodyProps {
  /** Dialog is loading */
  loading?: boolean;
  /** Dialog id */
  id: string;
  /** Back button */
  backButton?: BackButtonProps;
  /** Context menu */
  contextMenu?: ContextMenuProps;
  /** Page menu */
  pageMenu?: PageMenuProps;
  /** Summary */
  summary?: string;
  /** Body (should be an output markdown/html rendered to React / HTML) */
  body?: ReactNode;
  /** List of action (buttons) */
  actions?: DialogActionButtonProps[];
  /** Dialog attachments */
  attachments?: DialogAttachmentsProps;
  /** Dialog history */
  history?: DialogHistoryProps;
  /** More information about the dialog, process, etc. */
  additionalInfo?: DialogSectionProps;
  /** Contact information. */
  contactInfo?: ContactSectionProps;
}

/**
 * Full representation of a dialog, including attachments, actions and history,
 */

export const Dialog = ({
  loading,
  backButton,
  contextMenu,
  pageMenu,
  updatedAt,
  updatedAtLabel,
  dueAt,
  dueAtLabel,
  status,
  title,
  sender,
  recipient,
  recipientLabel = "to",
  recipientGroup,
  summary = "Summary.",
  body,
  actions = [],
  attachments,
  seenBy,
  activityLog,
  history,
  timeline,
  additionalInfo,
  contactInfo,
}: DialogProps) => {
  return (
    <PageBase spacing={0} bleed>
      <Section theme="default" shadow="xs">
        <PageNav
          color="neutral"
          padding={2}
          backButton={backButton}
          controls={contextMenu && <ContextMenu {...contextMenu} />}
        />
        <Article padding={6} spacing={6}>
          <DialogHeader
            loading={loading}
            title={title}
            status={status}
            dueAt={dueAt}
            dueAtLabel={dueAtLabel}
          />

          {history && <DialogHistory {...history} collapsible={true} />}

          <DialogBody
            loading={loading}
            sender={sender}
            recipient={recipient}
            recipientLabel={recipientLabel}
            recipientGroup={recipientGroup}
            updatedAt={updatedAt}
            updatedAtLabel={updatedAtLabel}
            seenBy={seenBy}
          >
            <p>{summary}</p>
            {body}
            {attachments && <DialogAttachments {...attachments} />}
            {actions?.length > 0 && <DialogActions items={actions} />}
          </DialogBody>

          {additionalInfo && (
            <DialogSection>{additionalInfo?.children}</DialogSection>
          )}

          {contactInfo && <ContactSection {...contactInfo} />}
        </Article>
      </Section>
      <PageMenu theme="subtle" items={pageMenu?.items} />
    </PageBase>
  );
};

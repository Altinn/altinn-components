import { MetaItem } from "../Meta";
import { AttachmentsList, AttachmentLinkProps } from "../Attachments/";
import styles from "./dialogAttachments.module.css";

export interface DialogAttachmentsProps {
  title?: string;
  attachments?: AttachmentLinkProps[];
}

export const DialogAttachments = ({
  title = "Vedlegg",
  attachments,
}: DialogAttachmentsProps) => {
  if (!attachments?.length) {
    return null;
  }

  return (
    <section className={styles?.list}>
      <MetaItem size="xs">{title}</MetaItem>
      <AttachmentsList size="lg" items={attachments} />
    </section>
  );
};

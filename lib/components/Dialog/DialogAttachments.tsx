import { MetaItem } from "../Meta";
import { AttachmentList, AttachmentLinkProps } from "../Attachment";
import { Typography } from "../Typography";
import styles from "./dialog.module.css";

export interface DialogAttachmentsProps {
  title?: string;
  items?: AttachmentLinkProps[];
}

export const DialogAttachments = ({
  title = "Attachments",
  items,
}: DialogAttachmentsProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <section className={styles?.list}>
      <MetaItem size="xs">{title}</MetaItem>
      <Typography size="lg">
        <AttachmentList size="lg" items={items} />
      </Typography>
    </section>
  );
};

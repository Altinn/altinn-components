import { ReactNode } from "react";
import { Avatar, AvatarGroup } from "../Avatar";
import styles from "./dialogHeadings.module.css";

export type DialogSenderType = "company" | "person";
export type DialogRecipientType = "company" | "person";

export interface DialogSenderProps {
  type?: DialogSenderType;
  name: string;
  imageUrl?: string;
}

export interface DialogRecipientProps {
  type?: DialogRecipientType;
  name: string;
}

type DialogHeadingsSize = "xs" | "sm" | "lg";

export interface DialogHeadingsProps {
  size?: DialogHeadingsSize;
  grouped?: boolean;
  sender?: DialogSenderProps;
  recipient?: DialogRecipientProps;
  children?: ReactNode;
}

export const DialogHeadings = ({
  grouped,
  size,
  sender = { type: "company", name: "Sender" },
  recipient = { type: "person", name: "Recipient" },
}: DialogHeadingsProps) => {
  return (
    <div className={styles.headings} data-size={size}>
      {grouped ? (
        <AvatarGroup
          items={[{ ...sender, type: "company" }, recipient]}
          size={size}
          className={styles.avatar}
        />
      ) : (
        <Avatar
          type="company"
          imageUrl={sender?.imageUrl}
          name={sender.name}
          size={size}
          className={styles.avatar}
        />
      )}
      <div className={styles.text}>
        <span className={styles.sender}>{sender.name}</span>
        {recipient?.name && (
          <>
            {" til "}
            <span>{recipient.name}</span>
          </>
        )}
      </div>
    </div>
  );
};

import { ReactNode } from "react";
import { Avatar, AvatarGroup, type AvatarSize } from "../Avatar";
import { MetaBase, MetaItem } from "../Meta";
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

type DialogHeadingsSize = "sm" | "xs" | "sm" | "lg" | "xl";

const sizeMap = {
  avatar: {
    xs: "xs",
    sm: "xs",
    md: "xs",
    lg: "xs",
    xl: "lg",
  },
};

export interface DialogHeadingsProps {
  size: DialogHeadingsSize;
  grouped?: boolean;
  sender?: DialogSenderProps;
  recipient?: DialogRecipientProps;
  children?: ReactNode;
}

export const DialogHeadings = ({
  grouped,
  size = "lg",
  sender = { type: "company", name: "Sender" },
  recipient = { type: "person", name: "Recipient" },
}: DialogHeadingsProps) => {
  return (
    <div className={styles.headings} data-size={size}>
      {grouped ? (
        <AvatarGroup
          items={[{ ...sender, type: "company" }, recipient]}
          size={sizeMap?.avatar[size] as AvatarSize}
          className={styles.avatar}
        />
      ) : (
        <Avatar
          type="company"
          imageUrl={sender?.imageUrl}
          name={sender.name}
          size={sizeMap?.avatar[size] as AvatarSize}
          className={styles.avatar}
        />
      )}
      <MetaItem size="xs" className={styles.text}>
        <span className={styles.sender}>{sender.name}</span>
        {recipient?.name && (
          <span>
            {" til "}
            <span>{recipient.name}</span>
          </span>
        )}
      </MetaItem>
    </div>
  );
};

import { type AvatarProps, Byline, type BylineSize } from "..";

export interface DialogBylineProps {
  sender?: AvatarProps;
  recipient?: AvatarProps;
  recipientLabel?: string;
  grouped?: boolean;
  loading?: boolean;
  size?: BylineSize;
}

/** Dialog byline */
export const DialogByline = ({
  sender,
  recipient,
  recipientLabel = "to",
  grouped = false,
  loading,
  size = "xs",
}: DialogBylineProps) => {
  if (!sender && !recipient) {
    return null;
  }

  const avatarGroup =
    !loading && grouped && sender && recipient
      ? {
          items: [recipient, sender],
        }
      : undefined;

  return (
    <Byline
      loading={loading}
      size={size}
      avatar={sender}
      avatarGroup={avatarGroup}
    >
      <strong>{sender?.name}</strong>{" "}
      {recipient && recipientLabel + " " + recipient?.name}
    </Byline>
  );
};

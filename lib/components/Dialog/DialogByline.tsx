import { type AvatarProps, Byline, type BylineSize } from '..';

export interface DialogBylineProps {
  sender: AvatarProps;
  recipient?: AvatarProps;
  recipientLabel?: string;
  recipientGroup?: boolean;
  loading?: boolean;
  size?: BylineSize;
}

/** Dialog byline */
export const DialogByline = ({
  sender,
  recipient,
  recipientLabel = 'to',
  recipientGroup = false,
  loading,
  size = 'xs',
}: DialogBylineProps) => {
  if (!sender && !recipient) {
    return null;
  }

  const avatarGroup =
    recipientGroup && sender && recipient
      ? {
          items: [sender, recipient],
        }
      : undefined;

  return (
    <Byline loading={loading} size={size} avatar={sender} avatarGroup={avatarGroup}>
      <strong>{sender?.name}</strong> {recipientLabel + ' ' + recipient?.name}
    </Byline>
  );
};
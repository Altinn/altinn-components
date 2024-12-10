import { Avatar, AvatarGroup, type AvatarSize } from '../Avatar';
import { Skeleton } from '../Skeleton';
import type { DialogSize } from './DialogBase';
import styles from './dialogHeadings.module.css';

export type DialogSenderType = 'company' | 'person';
export type DialogRecipientType = 'company' | 'person';

export interface DialogSenderProps {
  type?: DialogSenderType;
  name: string;
  imageUrl?: string;
}

export interface DialogRecipientProps {
  type?: DialogRecipientType;
  name: string;
}

const sizeMap = {
  avatar: {
    xs: 'xs',
    sm: 'xs',
    md: 'xs',
    lg: 'xs',
    xl: 'lg',
  },
};

export interface DialogHeadingsProps {
  /** Sender */
  sender: DialogSenderProps;
  /** Recipient */
  recipient: DialogRecipientProps;
  size?: DialogSize;
  /** Group sender and recipient avatars */
  grouped?: boolean;
  loading?: boolean;
}

/** Dialog headings for sender and recipient. Should present an avatar for the sender. */

export const DialogHeadings = ({ loading, grouped, size = 'lg', sender, recipient }: DialogHeadingsProps) => {
  return (
    <div className={styles.headings} data-size={size}>
      <Skeleton variant="circle" className={styles.avatar} loading={loading}>
        {grouped ? (
          <AvatarGroup
            items={[{ ...sender, type: 'company' }, recipient]}
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
      </Skeleton>
      <span data-size={size} className={styles.text}>
        <span className={styles.sender}>
          {' '}
          <Skeleton loading={loading}>{sender.name}</Skeleton>
        </span>
        {recipient?.name && (
          <span className={styles.recipient}>
            <Skeleton loading={loading}>
              <span>{'til'}</span>
              <span>{recipient.name}</span>
            </Skeleton>
          </span>
        )}
      </span>
    </div>
  );
};

import { Avatar, AvatarGroup, type AvatarSize } from '../Avatar';
import { MetaItem } from '../Meta';
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

type DialogHeadingsSize = 'sm' | 'xs' | 'sm' | 'lg' | 'xl';

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
  size: DialogHeadingsSize;
  /** Group sender and recipient avatars */
  grouped?: boolean;
  /** Sender */
  sender?: DialogSenderProps;
  /** Recipient */
  recipient?: DialogRecipientProps;
}

/** Dialog headings for sender and recipient. Should present an avatar for the sender. */

export const DialogHeadings = ({
  grouped,
  size = 'lg',
  sender = { type: 'company', name: 'Sender' },
  recipient = { type: 'person', name: 'Recipient' },
}: DialogHeadingsProps) => {
  return (
    <div className={styles.headings} data-size={size}>
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
      <MetaItem size="xs" className={styles.text}>
        <span className={styles.sender}>{sender.name}</span>
        {recipient?.name && (
          <span>
            {' til '}
            <span>{recipient.name}</span>
          </span>
        )}
      </MetaItem>
    </div>
  );
};

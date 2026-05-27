import { ItemBase, ItemLabel } from '..';
import { Avatar, type AvatarProps } from '../Avatar';
import styles from './AuthEvidenceItem.module.css';

export interface AuthEvidenceOwnerProps {
  avatar?: AvatarProps;
  name?: string;
  title?: string;
  variant?: 'tinted';
}

export const AuthEvidenceOwner = ({ variant, avatar, title }: AuthEvidenceOwnerProps) => {
  return (
    <ItemBase as="div" variant={variant} className={styles.item}>
      <span className={styles.media}>
        <Avatar {...(avatar as AvatarProps)} />
      </span>
      <ItemLabel className={styles.label}>{title}</ItemLabel>
    </ItemBase>
  );
};

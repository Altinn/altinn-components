import { ItemBase, ItemLabel } from '..';
import { Avatar, type AvatarProps } from '../Avatar';
import styles from './AuthEvidenceItem.module.css';

export interface AuthEvidenceServiceProps {
  avatar?: AvatarProps;
  title?: string;
  variant?: 'tinted';
}

export const AuthEvidenceService = ({ variant, avatar, title }: AuthEvidenceServiceProps) => {
  return (
    <ItemBase as="div" variant={variant} className={styles.item}>
      <span className={styles.media}>
        <Avatar {...(avatar as AvatarProps)} />
      </span>
      <ItemLabel className={styles.label}>{title}</ItemLabel>
    </ItemBase>
  );
};

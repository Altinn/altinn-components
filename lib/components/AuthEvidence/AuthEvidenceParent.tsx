import type { ReactNode } from 'react';
import { ItemBase, ItemControls, ItemLabel } from '..';
import { Avatar, type AvatarProps } from '../Avatar';
import type { AuthEvidenceOwnerProps, AuthEvidenceServiceProps } from './';
import styles from './AuthEvidenceParent.module.css';

export interface AuthEvidenceParentProps {
  variant?: 'tinted';
  owner?: AuthEvidenceOwnerProps;
  service?: AuthEvidenceServiceProps;
  controls?: ReactNode;
}

export const AuthEvidenceParent = ({ variant, owner, service, controls }: AuthEvidenceParentProps) => {
  return (
    <ItemBase as="div" variant={variant} className={styles.item}>
      <span className={styles.media}>
        <Avatar {...(owner?.avatar as AvatarProps)} className={styles.avatar} />
      </span>
      <ItemLabel className={styles.label}>
        <strong className={styles.title}>{service?.title}</strong>
        <span className={styles.description}>{owner?.name}</span>
      </ItemLabel>
      <ItemControls>{controls}</ItemControls>
    </ItemBase>
  );
};

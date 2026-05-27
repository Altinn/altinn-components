import { CheckmarkIcon, FileIcon, PackageIcon, PersonIcon } from '@navikt/aksel-icons';
import { type ReactNode, useMemo } from 'react';
import { ItemBase, ItemControls, ItemLabel } from '..';
import styles from './AuthEvidenceItem.module.css';

export enum AuthEvidenceTypeEnum {
  role = 'Role',
  package = 'AccessPackage',
  resource = 'ResourceDelegation',
  instance = 'InstanceDelegation',
}

export type AuthEvidenceType = keyof typeof AuthEvidenceTypeEnum | undefined;

export interface AuthEvidenceItemProps {
  id: string;
  groupId?: string;
  grantType?: AuthEvidenceType;
  variant?: 'default' | 'tinted';
  controls?: ReactNode;
  selected?: boolean;
  title: string;
}

export const AuthEvidenceItem = ({ grantType, variant = 'tinted', controls, title }: AuthEvidenceItemProps) => {
  const AuthEvidenceItem = useMemo(() => {
    switch (grantType) {
      case 'role':
        return PersonIcon;
      case 'package':
        return PackageIcon;
      case 'resource':
        return FileIcon;
      case 'instance':
        return FileIcon;
      default:
        return CheckmarkIcon;
    }
  }, [grantType]);

  return (
    <ItemBase as="div" className={styles.item} variant={variant}>
      <span className={styles.media}>
        <AuthEvidenceItem className={styles.icon} />
      </span>
      <ItemLabel className={styles.label}>{title}</ItemLabel>
      {controls && <ItemControls>{controls}</ItemControls>}
    </ItemBase>
  );
};

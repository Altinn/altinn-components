import { Icon, type IconName } from '../Icon';
import styles from './attachmentLink.module.css';

export interface AttachmentLinkProps {
  /** Link url */
  href: string;
  /** Label (filename) */
  label: string;
  /** Icon */
  icon?: IconName;
}

export const AttachmentLink = ({ icon = 'file', href, label }: AttachmentLinkProps) => {
  return (
    <a href={href} className={styles.link}>
      <Icon name={icon} className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </a>
  );
};

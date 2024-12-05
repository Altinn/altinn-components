import { Typography, type TypographySize } from '../Typography';
import { Icon, type IconName } from '../Icon';
import styles from './attachmentLink.module.css';

export interface AttachmentLinkProps {
  size: TypographySize;
  /** Link url */
  href: string;
  /** Label (filename) */
  label: string;
  /** Icon */
  icon?: IconName;
}

export const AttachmentLink = ({ size, icon = 'file', href, label }: AttachmentLinkProps) => {
  return (
    <Typography as="span" size={size}>
      <a href={href} className={styles.link}>
        <Icon name={icon} className={styles.icon} />
        <span className={styles.label}>{label}</span>
      </a>
    </Typography>
  );
};

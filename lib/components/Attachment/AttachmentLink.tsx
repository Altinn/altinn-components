import { Icon, type IconName } from '../Icon';
import { Typography, type TypographySize } from '../Typography';
import styles from './attachmentLink.module.css';

export interface AttachmentLinkProps {
  /** Link url */
  href: string;
  /** Label (filename) */
  label: string;
  /** Icon */
  icon?: IconName;
  size?: TypographySize;
}

export const AttachmentLink = ({ size = 'lg', icon = 'file', href, label }: AttachmentLinkProps) => {
  return (
    <Typography as="a" href={href} size={size} className={styles.link}>
      <Icon name={icon} className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </Typography>
  );
};

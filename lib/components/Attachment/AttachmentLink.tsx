import { FileIcon } from '@navikt/aksel-icons';
import { Icon, type SvgElement } from '../Icon';
import styles from './attachmentLink.module.css';

export interface AttachmentLinkProps {
  /** Link url */
  href: string;
  /** Label (filename) */
  label: string;
  /** Icon */
  icon?: SvgElement;
  /** Icon Alt text */
  iconAltText?: string;
}

export const AttachmentLink = ({ icon = FileIcon, iconAltText, href, label }: AttachmentLinkProps) => {
  return (
    <a href={href} className={styles.link}>
      <Icon svgElement={icon} altText={iconAltText} className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </a>
  );
};

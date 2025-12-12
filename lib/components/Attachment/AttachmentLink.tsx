import { FileIcon, FileXMarkIcon } from '@navikt/aksel-icons';
import { Badge, type BadgeProps } from '../Badge';
import { Icon, type SvgElement } from '../Icon';
import styles from './attachmentLink.module.css';

export interface AttachmentLinkProps {
  /** Disabled */
  disabled?: boolean;
  /** Link url */
  href: string;
  /** Label (filename) */
  label: string;
  /** Icon */
  icon?: SvgElement;
  /** Icon Alt text */
  iconAltText?: string;
  /** Media type and/or size, etc */
  metadata?: string;
  /** Badge */
  badge?: BadgeProps;
}

export const AttachmentLink = ({ icon, iconAltText, href, label, metadata, badge, disabled }: AttachmentLinkProps) => {
  const applicableIcon = icon || disabled ? FileXMarkIcon : FileIcon;

  return (
    <span className={styles.item}>
      <span>
        <a href={href} aria-disabled={disabled} className={styles.link} target="_blank" rel="noreferrer">
          <Icon svgElement={applicableIcon} altText={iconAltText} className={styles.icon} />
          <span className={styles.label}>{label}</span>
        </a>
        {badge && (
          <>
            {' '}
            <Badge {...badge} className={styles.badge} />
          </>
        )}

        {metadata && (
          <>
            {' '}
            <span className={styles.metadata}>{metadata}</span>
          </>
        )}
      </span>
    </span>
  );
};

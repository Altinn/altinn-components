import { InformationSquareIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { IconButton } from '../Button';
import styles from './banner.module.css';

export enum BannerColorEnum {
  accent = 'accent',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
}

export type BannerColor = keyof typeof BannerColorEnum;

export interface BannerProps {
  /* onClose handler */
  onClose?: () => void;
  /* aria-label for the close icon */
  closeTitle?: string;
  /* text content of the banner */
  text?: string | React.ReactNode;
  /* color of the banner */
  color?: BannerColor;
  /* Sticky banner (default is true)*/
  sticky?: boolean;
}

export const Banner = ({ closeTitle = 'close', onClose, text, color, sticky = true }: BannerProps) => {
  return (
    <section
      className={cx(styles.banner, { [styles.sticky]: sticky })}
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="status"
      aria-live="polite"
      data-color={color}
    >
      <div className={styles.title}>
        <InformationSquareIcon className={styles.infoIcon} aria-hidden />
        <span>{text}</span>
      </div>
      <IconButton
        icon={XMarkIcon}
        variant="solid"
        onClick={onClose}
        className={styles.dismiss}
        iconAltText={closeTitle}
      />
    </section>
  );
};

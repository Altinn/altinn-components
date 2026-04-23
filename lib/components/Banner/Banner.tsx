import {
  ExclamationmarkTriangleFillIcon,
  InformationSquareFillIcon,
  InformationSquareIcon,
  XMarkIcon,
  XMarkOctagonFillIcon,
} from '@navikt/aksel-icons';
import cx from 'classnames';
import { Button } from '../Button';
import { Icon, type SvgElement } from '../Icon';
import { Heading, Typography } from '../Typography';
import styles from './banner.module.css';

export enum BannerColorEnum {
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export enum BannerVariantEnum {
  default = 'default',
  alert = 'alert',
  error = 'error',
  info = 'info',
  strong = 'strong',
}

export type BannerColor = keyof typeof BannerColorEnum;
export type BannerVariant = keyof typeof BannerVariantEnum;

export interface BannerProps {
  /* Sticky banner (default is true)*/
  sticky?: boolean;
  /* Banner color */
  color?: BannerColor;
  /* Banner icon */
  icon?: SvgElement;
  /* Banner color */
  variant?: BannerVariant;
  /* Banner title */
  title?: string | React.ReactNode;
  /* Banner body */
  body?: string | React.ReactNode;
  /* onClose handler */
  onClose?: () => void;
  /* aria-label for the close icon */
  closeTitle?: string;
}

export const Banner = ({
  closeTitle = 'close',
  onClose,
  icon,
  title,
  body,
  color,
  variant,
  sticky = true,
}: BannerProps) => {
  const variantIcon =
    (variant === 'info' && InformationSquareFillIcon) ||
    (variant === 'alert' && ExclamationmarkTriangleFillIcon) ||
    (variant === 'error' && XMarkOctagonFillIcon) ||
    InformationSquareIcon;

  const svgElement = icon ? icon : variantIcon;
  return (
    <section
      className={cx(styles.banner, { [styles.sticky]: sticky })}
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="status"
      aria-live="polite"
      data-variant={variant}
      data-color={color}
    >
      <div className={styles.content}>
        <Heading size="sm" leading="normal" className={styles.title}>
          <Icon svgElement={svgElement} className={styles.icon} />
          {title}
        </Heading>
        {body && (
          <Typography size="sm" className={styles.body}>
            {body}
          </Typography>
        )}
      </div>
      {!!onClose && (
        <Button
          size="sm"
          variant={variant === 'strong' ? 'solid' : 'ghost'}
          onClick={onClose}
          className={styles.dismiss}
          aria-label={closeTitle}
          icon
        >
          <XMarkIcon />
        </Button>
      )}
    </section>
  );
};

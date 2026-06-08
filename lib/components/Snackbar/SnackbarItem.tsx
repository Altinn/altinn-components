import { BellFillIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { type CSSProperties, type ElementType, type ReactNode, useEffect } from 'react';
import { Button, Icon, type SvgElement } from '..';
import styles from './snackbarItem.module.css';

export enum SnackbarColorEnum {
  company = 'company',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
}

export type SnackbarColor = keyof typeof SnackbarColorEnum;

export interface SnackbarItemProps {
  as?: ElementType;
  color?: SnackbarColor;
  icon?: SvgElement;
  message: string | ReactNode;
  iconAltText?: string;
  href?: string;
  className?: string;
  style?: CSSProperties;
  dismissable?: boolean;
  onDismiss?: () => void;
  children?: ReactNode;
}

export const SnackbarItem = ({
  as,
  message,
  className,
  color,
  icon = BellFillIcon,
  iconAltText = 'Bell icon',
  dismissable = true,
  onDismiss,
  ...rest
}: SnackbarItemProps) => {
  const Component = as || 'div';

  useEffect(() => {
    if (!message) {
      return;
    }
    const openDialog = document.querySelector('dialog[open]');
    if (!openDialog) {
      return;
    }

    // Reuse or create a visually-hidden live region inside the dialog
    let announcer = openDialog.querySelector<HTMLElement>('[data-snackbar-live]');
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.setAttribute('data-snackbar-live', '');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      Object.assign(announcer.style, {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        overflow: 'hidden',
        clip: 'rect(0,0,0,0)',
        whiteSpace: 'nowrap',
        border: '0',
      });
      openDialog.appendChild(announcer);
    }

    // Clear then set to re-trigger announcement
    announcer.textContent = '';
    requestAnimationFrame(() => {
      announcer!.textContent = message as string;
    });
  }, [message]);

  return (
    <span className={styles.itemWrapper}>
      <Component className={cx(styles.item, className)} data-color={color} role="alert" {...rest}>
        <Icon svgElement={icon} className={styles.icon} aria-hidden="true" />
        <div className={styles.content}>{message}</div>
        {dismissable && (
          <div className={styles.action}>
            <Button variant="solid" onClick={onDismiss} aria-label="close">
              <XMarkIcon style={{ fontSize: '1.5em' }} />
            </Button>
          </div>
        )}
      </Component>
    </span>
  );
};

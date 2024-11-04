import type { ReactNode } from 'react';
import { Icon, type IconName } from '../Icon';
import type { DialogListItemVariant } from './DialogListItemBase';
import styles from './dialogTitle.module.css';

export type DialogTitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DialogTitleProps = {
  /** Variant */
  variant: DialogListItemVariant;
  /** Size */
  size?: DialogTitleSize;
  /** Variant */
  seen?: boolean;
  /** Display an icon next to title */
  icon?: IconName;
  /** Dialog title */
  children?: ReactNode;
};

/**
 * Dialog title
 */
export const DialogTitle = ({ size = 'sm', seen = false, variant, icon, children }: DialogTitleProps) => {
  return (
    <h2 className={styles.title} data-seen={seen} data-size={size} data-variant={variant}>
      <span>{children}</span>
      {icon && <Icon name={icon} className={styles.icon} />}
    </h2>
  );
};

import type { MouseEventHandler } from 'react';
import { Button, ComboButton } from '../Button';
import styles from './dialog.module.css';

export type DialogButtonType = 'primary' | 'secondary';

export interface DialogActionButtonProps {
  type?: DialogButtonType;
  label?: string;
  onClick?: MouseEventHandler;
}

export interface DialogActionProps {
  items?: DialogActionButtonProps[];
  maxItems?: number;
}

export const DialogActionButton = ({ variant = 'outline', loading = false, label, onClick }) => {
  return (
    <Button onClick={onClick} color="primary" variant={variant} size="lg">
      {item?.label}
    </Button>
  );
};

export const DialogAction = ({ items, maxItems = 2 }: DialogActionProps) => {
  if (!items?.length) {
    return null;
  }

  /* Turn into combobutton if items > maxItems */

  if (items?.length > maxItems) {
    return (
      <div className={styles?.action}>
        <ComboButton color="link" variant="solid" icon="chevron-down" size="lg">
          {items[0]?.label}
        </ComboButton>
      </div>
    );
  }

  return (
    <div className={styles?.action}>
      {items?.map((item, index) => {
        return (
          <Button
            key={'button' + index}
            onClick={item?.onClick}
            color="primary"
            variant={index ? 'outline' : 'solid'}
            size="lg"
          >
            {item?.label}
          </Button>
        );
      })}
    </div>
  );
};

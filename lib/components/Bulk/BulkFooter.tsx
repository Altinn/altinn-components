import type { LayoutColor } from '../Layout';
import { BulkButton, type BulkButtonProps } from './BulkButton';
import styles from './bulkFooter.module.css';

export interface BulkFooterProps {
  hidden?: boolean;
  color?: LayoutColor;
  actions?: BulkButtonProps[];
}

export const BulkFooter = ({ hidden = false, color = 'company', actions }: BulkFooterProps) => {
  return (
    <footer className={styles.footer} data-color={color} aria-hidden={hidden}>
      <div className={styles.actions}>
        {actions?.map((button, index) => (
          <BulkButton {...button} key={index} />
        ))}
      </div>
    </footer>
  );
};

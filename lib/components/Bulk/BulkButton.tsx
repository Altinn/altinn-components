import { Button, ButtonIcon, ButtonLabel } from '../Button';
import type { SvgElement } from '../Icon';
import styles from './bulkButton.module.css';

export interface BulkButtonProps {
  id?: string;
  icon: SvgElement;
  label: string;
  onClick?: () => void;
  loading?: boolean;
}

export const BulkButton = ({ icon, label, onClick, loading }: BulkButtonProps) => {
  return (
    <Button className={styles.button} onClick={onClick} loading={loading}>
      <ButtonIcon className={styles.icon} icon={icon} />
      <ButtonLabel className={styles.label} size="sm">
        {label}
      </ButtonLabel>
    </Button>
  );
};

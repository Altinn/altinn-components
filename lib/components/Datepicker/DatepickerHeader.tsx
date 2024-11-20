import { IconButton } from '../Button';
import styles from './datepickerHeader.module.css';

export interface DatepickerHeaderProps {
  title?: string;
  onPrev: () => void;
  onNext: () => void;
}

export const DatepickerHeader = ({ title, onNext, onPrev }: DatepickerHeaderProps) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <nav className={styles.nav}>
        <IconButton icon="chevron-left" size="sm" variant="text" onClick={onPrev} />
        <IconButton icon="chevron-right" size="sm" variant="text" onClick={onNext} />
      </nav>
    </header>
  );
};

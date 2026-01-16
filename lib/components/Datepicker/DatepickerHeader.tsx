import { ChevronLeftIcon, ChevronRightIcon } from '@navikt/aksel-icons';
import { Button } from '../Button';
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
        <Button size="xs" variant="ghost" onClick={onPrev} aria-label="prev icon">
          <ChevronLeftIcon />
        </Button>
        <Button size="xs" variant="ghost" onClick={onNext} aria-label="next icon">
          <ChevronRightIcon />
        </Button>
      </nav>
    </header>
  );
};
